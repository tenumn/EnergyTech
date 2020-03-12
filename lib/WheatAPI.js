LIBRARY({
	name:"WheatAPI",
	version:1.5,
	shared:false,
	api:"CoreEngine"
});

var canTileBeReplaced = ModAPI.requireGlobal("canTileBeReplaced");

Block.createSpecialType({
	base:59,
    opaque:false,
    lightopacity:0,
    destroytime:0
},"crop");

var DataRegistry = {
	drop:{
		grass:[]
	},
	renderer:{},
	crop:{
		id:{},
		data:{}
	},
	tooltip:{}
}

function dip2px(dips){
	return Math.ceil(dips * UI.getContext().getResources().getDisplayMetrics().density);
}

IDRegistry.genCropID = function(uid){
	IDRegistry.genBlockID(uid);
	IDRegistry.genItemID(uid);
}

var RendererRegistry = {
	getRenderModel:function(id,data){
		var render = DataRegistry.renderer[id];
		if(render){
			return render[data];
		}
		return 0;
	},

	mapAtCoords:function(x,y,z,id,data){
		var render = this.getRenderModel(id,data);
		if(render){
			BlockRenderer.mapAtCoords(x,y,z,render);
		}
	}
}

var CropRegistry = {
	addGrassDrop:function(id,count,data){
		data = data || 0;
		DataRegistry.drop.grass.push([id,count,data]);
	},

	isCrop:function(id){
		for(let count in DataRegistry.crop.id){
			var crop = DataRegistry.crop.id[count];
			if(crop.seed == id || crop.crop == id){
				return true;
			}
		}
		return false;
	},

	createCrop:function(uid,name,texture,data){
		if(!this.isCrop(ItemID[uid])){
			if(data){
				data.farmland = data.farmland || {id:60,data:-1}
				data.growTime = data.growTime || 1200;
				data.growSpeed = data.growSpeed || 1;
				data.growLight = data.growLight || 8;
				data.drop = data.drop || [];
			} else {
				data = {
					farmland:{id:60,data:-1},
					growTime:3600,
					growSpeed:1,
					growLight:8,
					drop:[]
				}
			}

			var crop = texture.crop[0];
			Block.createBlock(uid,[{name:"tile." + uid + ".name",texture:[[crop[0],crop[1]]]}],"crop");
			Item.createItem(uid,name,texture.seed);

			DataRegistry.crop.id[uid] = {seed:ItemID[uid],crop:BlockID[uid]};
			DataRegistry.crop.data[uid] = {farmland:data.farmland,grow_time:data.growTime,grow_speed:data.growSpeed,grow_light:data.growLight,drop:data.drop}
			
			var shape = new ICRender.CollisionShape();
			shape.addEntry().addBox(1,1,1,0,0,0);
			BlockRenderer.setCustomCollisionShape(BlockID[uid],-1,shape);

			var render = new ICRender.Model();
			var model = BlockRenderer.createModel();
			model.addBox(0.25,0,0,0.25,1,1,BlockID[uid],0);
			model.addBox(0.75,0,0,0.75,1,1,BlockID[uid],0);
			model.addBox(0,0,0.25,1,1,0.25,BlockID[uid],0);
			model.addBox(0,0,0.75,1,1,0.75,BlockID[uid],0);
			render.addEntry(model);
			BlockRenderer.enableCoordMapping(BlockID[uid],0,render);

			DataRegistry.renderer[BlockID[uid]] = {}
			for(var count = 0;count < texture.crop.length;count++){
				var crop = texture.crop[count];

				var render = new ICRender.Model();
				var model = BlockRenderer.createModel();
				model.addBox(0.25,0,0,0.25,1,1,[[crop[0],crop[1]]]);
				model.addBox(0.75,0,0,0.75,1,1,[[crop[0],crop[1]]]);
				model.addBox(0,0,0.25,1,1,0.25,[[crop[0],crop[1]]]);
				model.addBox(0,0,0.75,1,1,0.75,[[crop[0],crop[1]]]);
				render.addEntry(model);
				DataRegistry.renderer[BlockID[uid]][count] = render;
			}

			Block.registerDropFunction(uid,function(){
				return [];
			});

			this.registerSeedUseCallback(uid,function(coords,item,block){
				var farmland = CropRegistry.getCropFarmland(uid);
				if(farmland.id == -1 || farmland.id == block.id && (farmland.data == -1 || farmland.data == block.data)){
					var place = coords;
					if(!canTileBeReplaced(block.id,block.data)){
						place = coords.relative,block = World.getBlock(place.x,place.y,place.z);
						if(!canTileBeReplaced(block.id,block.data)){
							return;
						}
					}
					World.setBlock(place.x,place.y,place.z,BlockID[uid],0);
					World.addTileEntity(place.x,place.y,place.z);
					Player.decreaseCarriedItem(1);
				}
			});

			Callback.addCallback("PreLoaded",function(){
				var speed = CropRegistry.getCropGrowSpeed(uid),time = CropRegistry.getCropGrowTime(uid),light = CropRegistry.getCropGrowLight(uid);

				var tile = TileEntity.getPrototype(BlockID[uid]);
				if(tile){
					var prototype = TileEntity.getPrototype(BlockID[uid]);

					if(prototype.defaultValues){
						prototype.defaultValues.grow_speed = speed;
						prototype.defaultValues.grow_time = time;
						prototype.defaultValues.grow_light = light;
						prototype.defaultValues.grow_progress = 0;
						prototype.defaultValues.grow_count = texture.crop.length - 1;
					} else {
						prototype.defaultValues = {
							grow_speed:speed,
							grow_time:time,
							grow_light:light,
							grow_progress:0,
							grow_count:texture.crop.length - 1
						}
					}

					prototype.$click = prototype.click || function(id,count,data){}
					prototype.$init = prototype.init || function(){};
					prototype.$tick = prototype.tick || function(){};
					prototype.$destroy = prototype.destroy || function(){};

					prototype.CropRender = function(){
						if(this.data.grow_progress >= this.data.grow_time){
							RendererRegistry.mapAtCoords(this.x,this.y,this.z,BlockID[uid],this.data.grow_count);
						} else {
							RendererRegistry.mapAtCoords(this.x,this.y,this.z,BlockID[uid],Math.round(this.data.grow_progress / this.data.grow_time * (this.data.grow_count - 1)));
						}
					}

					prototype.click = function(id,count,data){
						this.$click();
						
						if(id == 351 && data == 15 && this.data.grow_progress < this.data.grow_time){
							this.data.grow_progress += 1200;
							Player.decreaseCarriedItem(1);
						}
					}

					prototype.init = function(){
						this.$init();

						this.CropRender();
					}

					prototype.tick = function(){
						this.$tick();

						this.CropRender();

						var light_level = World.getLightLevel(this.x,this.y + 1,this.z);
						if(light_level >= this.data.grow_light && this.data.grow_progress < this.data.grow_time){
							this.data.grow_progress += this.data.grow_speed;
						}

						var farmland = CropRegistry.getCropFarmland(uid),block = World.getBlock(this.x,this.y - 1,this.z);
						if(block.id != farmland.id){
							this.selfDestroy();
							World.setBlock(this.x,this.y,this.z,0,0);
						}

						if(this.data.grow_progress > this.data.grow_time){this.data.grow_progress = this.data.grow_time;}
					}

					prototype.destroy = function(){
						this.$destroy();
						
						if(this.data.grow_progress < this.data.grow_time){
							World.drop(this.x,this.y,this.z,ItemID[uid],1,0);
						} else {
							var drops = CropRegistry.getCropDrop(uid);
							for(let count = 0;count < drops.length;count++){
								var drop = drops[count];
								if(Math.floor(Math.random() * 100) <= drop[3]){
									World.drop(this.x,this.y,this.z,drop[0],drop[1],drop[2]);
								}
							}
						}

						BlockRenderer.unmapAtCoords(this.x,this.y,this.z);
					}
				} else {
					TileEntity.registerPrototype(BlockID[uid],{
						defaultValues:{
							grow_speed:speed,
							grow_time:time,
							grow_light:light,
							grow_progress:0,
							grow_count:texture.crop.length - 1
						},

						CropRender:function(){
							if(this.data.grow_progress >= this.data.grow_time){
								RendererRegistry.mapAtCoords(this.x,this.y,this.z,BlockID[uid],this.data.grow_count);
							} else {
								RendererRegistry.mapAtCoords(this.x,this.y,this.z,BlockID[uid],Math.round(this.data.grow_progress / this.data.grow_time * (this.data.grow_count - 1)));
							}
						},

						click:function(id,count,data){							
							if(id == 351 && data == 15 && this.data.grow_progress < this.data.grow_time){
								this.data.grow_progress += 1200;
								Player.decreaseCarriedItem(1);
							}
						},

						init:function(){
							this.CropRender();
						},

						tick:function(){
							this.CropRender();

							var light_level = World.getLightLevel(this.x,this.y + 1,this.z);
							if(light_level >= this.data.grow_light && this.data.grow_progress < this.data.grow_time){
								this.data.grow_progress += this.data.grow_speed;
							}
	
							var farmland = CropRegistry.getCropFarmland(uid),block = World.getBlock(this.x,this.y - 1,this.z);
							if(block.id != farmland.id){
								this.selfDestroy();
								World.setBlock(this.x,this.y,this.z,0,0);
							}

							if(this.data.grow_progress > this.data.grow_time){this.data.grow_progress = this.data.grow_time;}
						},

						destroy:function(){
							if(this.data.grow_progress < this.data.grow_time){
								World.drop(this.x,this.y,this.z,ItemID[uid],1,0);
							} else {
								var drops = CropRegistry.getCropDrop(uid);
								for(let count = 0;count < drops.length;count++){
									var drop = drops[count];
									if(Math.floor(Math.random() * 100) <= drop[3]){
										World.drop(this.x,this.y,this.z,drop[0],drop[1],drop[2]);
									}
								}
							}

							BlockRenderer.unmapAtCoords(this.x,this.y,this.z);
						}
					});
				}
				
			});
		} else {
			Logger.Log("This crop: [" + name + "] already been registered.","CROP/ERROR");
		}
	},

	getCropUID:function(id){
		for(let count in DataRegistry.crop.id){
			var crop = DataRegistry.crop.id[count];
			if(crop.seed == id || crop.crop == id){
				return count;
			}
		}
		return null;
	},

	getCropData:function(uid){
		if(this.isCrop(ItemID[uid])){
			return DataRegistry.crop.data[uid];
		}
	},

	getCropGrowSpeed:function(uid){
		return this.getCropData(uid).grow_speed;
	},

	getCropDrop:function(uid){
		return this.getCropData(uid).drop;
	},
	
	getCropGrowTime:function(uid){
		return this.getCropData(uid).grow_time;
	},

	getCropGrowLight:function(uid){
		return this.getCropData(uid).grow_light;
	},

	getCropFarmland:function(uid){
		return this.getCropData(uid).farmland;
	},

	setCropFarmland:function(uid,id,data){
		if(this.isCrop(ItemID[uid])){
			DataRegistry.crop.data[id].farmland = {id:id,data:(data || 0)}
		}
	},

	registerSeedUseCallback:function(uid,state){
		if(this.isCrop(ItemID[uid])){
			Callback.addCallback("SeedUse",function(coords,item,block){
				if(item.id == ItemID[uid]){
					state(coords,item,block);
				}
			});
		}
	}
}

CropRegistry.addGrassDrop(295,1,0);

Block.registerDropFunctionForID(31,function(coords,id,data,level,enchant){
	var grass = DataRegistry.drop.grass;
	if(data == 0){
		if(enchant.silk){return [[id,1,data]];}
		if(Math.floor(Math.random()*100) <= 25){return [[280,1,0]];}
		return [];
	} else if(data == 1){
		if(enchant.silk){return [[id,1,data]];}
		if(Math.floor(Math.random()*100) <= 25){return [grass[Math.floor(Math.random() * grass.length)]];}
		return [];
	} else if(data == 2){
		if(enchant.silk){return [[id,1,data]];}
		return [];
	}
	return [];
});

Callback.addCallback("DestroyBlock",function(coords,block,player){
	if(CropRegistry.isCrop(block.id)){
		Callback.invokeCallback("DestroyCrop",coords,block,player);
	}
});

Callback.addCallback("ItemUse",function(coords,item,block){
	if(CropRegistry.isCrop(item.id)){
		Callback.invokeCallback("SeedUse",coords,item,block);
	}
});

var UIRegistry = {
	getScreenWidth:function(){
		return UI.getContext().getWindowManager().getDefaultDisplay().getWidth();
	},

	getScreenHeight:function(){
		return UI.getContext().getWindowManager().getDefaultDisplay().getHeight();
	},
	
	window:function(state){
		state.background = state.background || "classic_frame_bg_light";
		state.header.close = state.header.close || "classic_close_button";
		state.header.close2 = state.header.close2 || state.header.close;

		var width = UIRegistry.getScreenWidth(),height = UIRegistry.getScreenHeight();

		var drawing = [
			{type:"background",color:android.graphics.Color.TRANSPARENT},
			{type:"frame",x:0,y:0,width:1000,height:750,bitmap:state.background,scale:6}
		]

		for(let i in state.drawing){drawing.push(state.drawing[i]);}
		drawing.push({type:"text",x:30,y:60,text:state.header.text,scale:3,font:{color:android.graphics.Color.BLACK,size:40}});

		var element = {close:{type:"closeButton",x:945,y:25,bitmap:state.header.close,bitmap2:state.header.close2,scale:7}}

		for(let i in state.elements){element[i] = state.elements[i];}
		for(let i = 9;i <= 44;i++){element["invSlot" + i] = {type:"invSlot",x:163+(i%9)*75,y:345+(i/9|0)*75,size:80,index:i}}
		
		var ui = UI.Window({
			location:{padding: {left: width/10, right: width/10, bottom: (height-0.6*width)/2, top:0}},
			params:{slot:"classic_slot",inv_slot:"classic_slot"},drawing:drawing,elements:element
		});
		
		ui.setInventoryNeeded(true);
		ui.setBlockingBackground(true);

		return ui;
	}
}

var GameRegistry = {
	getSetting:function(data){
		var dir = "games/com.mojang/minecraftpe/options.txt";
		return FileTools.ReadKeyValueFile(dir)[data];
	},

	getLanguage:function(){
		return this.getSetting("game_language");
	},

	getUIProfile:function(){
		return this.getSetting("gfx_ui_profile");
	}
}

var PlayerRegistry = {
	getInventoryItemCount:function(id,data){
		var count = 0;
		for (var slot = 8;slot <= 48;slot++){
			var inventory = Player.getInventorySlot(slot);
			if (inventory.id == id && (data == -1 || inventory.data == (data || 0))){
				count += inventory.count;
			}
		}
		return count;
	},

	getSneaking:function(){
		var player = Player.get();
		return Entity.getSneaking(player);
	},

	addEffect:function(id,level,time){
		var player = Player.get();
		Entity.addEffect(player,id,level,time);
	}
}

Callback.addCallback("tick",function(){
	var coords = Player.getPosition();
	if(PlayerRegistry.getSneaking()){
		Callback.invokeCallback("PlayerSneaking",coords);
	}
});

Callback.addCallback("EntityDeath",function(entity){
	if(entity == Player.get()){
		Callback.invokeCallback("PlayerDeath",entity);
	}
});

runOnMainThread(function(){
	Callback.invokeCallback("Threading");
});

Callback.addCallback("EntityHurt",function(attacker,victim,damage){
	if(attacker == Player.get()){
		Callback.invokeCallback("PlayerAttack",attacker,victim,damage);
	}

	if(victim == Player.get()){
		Callback.invokeCallback("PlayerHurt",attacker,victim,damage);
	}
});

var ItemRegistry = {
	getTooltip:function(id){
		return DataRegistry.tooltip[id]?DataRegistry.tooltip[id]:"";
	},

	addTooltip:function(id,tooltip,colour){
		if(!colour){colour = "§7";}

        if(!this.getTooltip(id)){
            DataRegistry.tooltip[id] = "\n" + colour + tooltip + "§n"
        } else {
            DataRegistry.tooltip[id] += "\n" + colour + tooltip + "§n";
        }
        
        this.setItemName(id,function(item,name,tooltip){
            return name + tooltip;
        });
	},

	setItemName:function(id,state){
		Item.registerNameOverrideFunction(id,function(item,name){
			var tooltip = ItemRegistry.getTooltip(id);
            return state(item,name,tooltip);
        });
	},

	registerFoodEatenCallback:function(id,state){
		Callback.addCallback("FoodEaten",function(heal,satRatio){
			var item = Player.getCarriedItem();
			if(item.id == id){
				state(item,heal,satRatio);
			}
		});
	},

	registerItemAttackCallback:function(id,state,isPlayer){
		Callback.addCallback(isPlayer?"PlayerAttack":"EntityHurt",function(attacker,victim,damage){
			var item = Player.getCarriedItem();
			if(item.id == id){
				state(attacker,victim,damage);
			}
		});
	},

	registerItemUseCallback:function(id,state){
		Item.registerUseFunctionForID(id,state);
	}
}

EXPORT("wheat",{
	ui:UIRegistry,
	game:GameRegistry,
	item:ItemRegistry,
	crop:CropRegistry,
	player:PlayerRegistry,

	requireGlobal:function(command){
		return eval(command);
	}
});