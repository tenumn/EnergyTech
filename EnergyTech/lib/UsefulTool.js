LIBRARY({name:"UsefulTool",version:5,shared:true,api:"CoreEngine"});

/*
    .__.  .__. ._______. ._______. ._______. .__.  .__. .__.   .________. ._______. ._______. .__.     
	|  |  |  | |  .____| |  .____| |  .____| |  |  |  | |  |   |__.  .__| | .___. | | .___. | |  |     
	|  |  |  | |  |____. |  |____. |  |____. |  |  |  | |  |      |  |    | |   | | | |   | | |  |     
	|  |  |  | |____.  | |  .____| |  .____| |  |  |  | |  |      |  |    | |   | | | |   | | |  |     
	|  |__|  | .____|  | |  |____. |  |      |  |__|  | |  |____. |  |    | |___| | | |___| | |  |____.
	|________| |_______| |_______| |__|      |________| |_______| |__|    |_______| |_______| |_______|
	
	Author: MS_maisui

	Version: 1.4

	Description: Some CEAPIs algorithms are added.
*/

canTileBeReplaced = ModAPI.requireGlobal("canTileBeReplaced");

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

var UsefulToolCore = {
    isNegative:function(number){
        if(number > 0){
            return true;
        } else if(number < 0){
            return false;
        }
    },

    dip2px:function(dips){
        return Math.ceil(dips * UI.getContext().getResources().getDisplayMetrics().density);
    }
}

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

var RendererCore = {
    models:{},

	initRenderModel:function(id,data,model){
		if(!this.models[id]){
			this.models[id] = {};
		}
		BlockRenderer.enableCoordMapping(id,(data?data:-1),model);
	},

	registerRenderModel:function(id,data,model){
		if(!this.models[id]){
			this.initRenderModel(id,data,model);
		}
		this.models[id][data] = model;
	},

	getRenderModel:function(id,data){
		var renderer = this.models[id];
		if(renderer){
			return renderer[data];
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

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

var LiquidCore = {
    items:{},

    registerItem:function(liquid,empty,full,storage){
        if(!LiquidRegistry.isExists(liquid)) LiquidRegistry.registerLiquid(liquid);

        Item.setLiquidClip(empty,true);
        Item.setMaxDamage(full,storage);
        LiquidRegistry.registerItem(liquid,{id:empty,data:0},{id:full,data:-1});
        this.items[full] = {liquid:liquid,storage:storage,empty:{id:empty,data:0,liquid:liquid}};
    },

    getItemData:function(id,data){
        if(this.items[id]) return this.items[id];
        
        var empty = LiquidRegistry.getEmptyItem(id,data);
        var liquid = LiquidRegistry.getItemLiquid(id,data);
        if(liquid) return {liquid:liquid,storage:1000,empty:{id:empty,data:0,liquid:liquid}};

        return null;
    },

    getItemStorage:function(id,data){
        var item = this.getItemData(id,data);
        if(item) return item.storage / 1000;

        if(LiquidRegistry.getItemLiquid(id,data)) return 1;
        return 0;
    },
	
	isItemLiquid:function(id,data){
		if(this.getItemLiquid(id,data)) return true;
		return false;
	},
	
    getItemLiquid:function(id,data){
        var item = this.getItemData(id,data);
        if(item) return item.liquid;

        return LiquidRegistry.getItemLiquid(id,data);
    },

    getEmptyItem:function(id,data){
		var empty = LiquidRegistry.getEmptyItem(id,data);
		if(empty){
			var data = {id:empty.id,data:empty.data,liquid:empty.liquid};
			if(this.items[id]){
				data.storage = this.items[id].storage;
				data.amount = (this.items[id].storage - data) / 1000;
			} else {
                data.storage = 1;
				data.amount = 1;
			}
			return data;
		}
		return null;
    },

    getFullItem:function(id,data,liquid){
        for(let i in this.items){
            var item = this.items[i];
            if(item.liquid == liquid && (id == parseInt(i) && data > 0 || id == item.empty.id)) return {id:parseInt(i),data:0,amount:(data || item.storage) / 1000,storage:item.storage / 1000};
        }

        var full = LiquidRegistry.getFullItem(id,data,liquid);
        if(full) return {id:full.id,data:full.data,amount:1,storage:1};

        return null;
    }
}

function TileLiquidExtra(tileEntity,name,limit){
	this.tileEntity = tileEntity;
	this.limit = limit;
	this.data = {
		liquid: null,
		amount: 0
	}
	
	this.getLiquidStored = function(){
		return this.data.liquid;
	}
	
	this.getLimit = function(){
		return this.limit;
	}
	
	this.getAmount = function(liquid){
		if(!liquid || this.data.liquid == liquid){
			return this.data.amount;
		}
		return 0;
	}
	
	this.setAmount = function(liquid, amount){
		this.data.liquid = liquid;
		this.data.amount = amount;
	}
	
	this.getRelativeAmount = function() {
		return this.data.amount / this.limit;
	}
	
	this.addLiquid = function(liquid, amount){
		if(!this.data.liquid || this.data.liquid == liquid){
			this.data.liquid = liquid;
			var add = Math.min(amount, this.limit - this.data.amount);
			this.data.amount += add;
			return amount - add;
		}
		return 0;
	}
	
	this.getLiquid = function(liquid, amount){
		if(amount == undefined){
			amount = liquid;
			liquid = null;
        }
        
		if(!liquid || this.data.liquid == liquid){
			var got = Math.min(amount, this.data.amount);
			this.data.amount -= got;
			if(this.data.amount == 0){
				this.data.liquid = null;
			}
			return got;
        }
        
		return 0;
	}
	
	this.isFull = function(){
		return this.data.amount < this.limit;
	}
	
	this.isEmpty = function(){
		return this.data.amount == 0;
	}
	
	this.updateUiScale = function(scale, container){
		container = container || this.tileEntity.container;
		this.tileEntity.liquidStorage._setContainerScale(container, scale, this.data.liquid, this.getRelativeAmount());
	}
	
	var tileData = tileEntity.data;
	if(tileData.__liquid_tanks){
		if(tileData.__liquid_tanks[name]){
			this.data = tileData.__liquid_tanks[name];
		} else {
			tileData.__liquid_tanks[name] = this.data;
		}
	} else {
		tileData.__liquid_tanks = {};
		tileData.__liquid_tanks[name] = this.data;
	}
}

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

ICRender.addGroupFor = function(id,groups,data){
	for(let i in groups) ICRender.getGroup(groups[i]).add(id,data || -1);
}

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

UI.getScreenWidth = function(){
    return UI.getContext().getWindowManager().getDefaultDisplay().getWidth();
}

UI.getScreenHeight = function(){
    return UI.getContext().getWindowManager().getDefaultDisplay().getHeight();
}

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

World.getRelativeCoords = function(x,y,z,side){
    var dir = [[0,-1,0],[0,1,0],[0,0,-1],[0,0,1],[-1,0,0],[1,0,0]];
    return {x:x + dir[side][0],y:y + dir[side][1],z:z + dir[side][2],side:side}
}

World.isAirBlock = function(x,y,z){
    if(World.getBlockID(x,y,z) == 0) return true;
    return false;
}

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

Game.getSetting = function(data){
    return FileTools.ReadKeyValueFile("games/com.mojang/minecraftpe/options.txt")[data];
}

Game.getLanguage = function(){
    return Game.getSetting("game_language");
}

Game.getUIProfile = function(){
    return Game.getSetting("gfx_ui_profile");
}

Game.getGameVolume = function(){
    return Game.getSetting("audio_sound");
}

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

Item.TOOLTIP = {}

Item.getTooltip = function(id){
	return Item.TOOLTIP[id]?Item.TOOLTIP[id]:"";
}

Item.setItemName = function(id,state){
	Item.registerNameOverrideFunction(id,function(item,name){
		return state(item,name,Item.getTooltip(id));
	});
}

Item.addTooltip = function(id,tooltip,colour){
	if(!colour) colour = "§7";

	if(Item.getTooltip(id)){
		Item.TOOLTIP[id] += "\n" + colour + tooltip + "§n";
	} else {
		Item.TOOLTIP[id] = "\n" + colour + tooltip + "§n"
	}
	
	Item.setItemName(id,function(item,name,tooltip){
		return name + tooltip;
	});
}

Item.registerEatenFunctionForID = function(id,state){
	Callback.addCallback("FoodEaten",function(heal,satRatio){
		var item = Player.getCarriedItem();
		if(item.id == id) state(item,heal,satRatio);
	});
}

Item.registerEatenFunction = function(uid,state){
	Item.registerEatenFunctionForID(ItemID[uid],state);
}

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

Player.getSneaking = function(){
    return Entity.getSneaking(Player.get());
}

Player.addEffect = function(id,level,time){
	Entity.addEffect(Player.get(),id,level,time);
}

Player.getHealth = function(){
	return Entity.getHealth(Player.get());
}

Player.setHealth = function(health){
    Entity.setHealth(Player.get(),health);
}

Player.getInventoryItemAllCount = function(id,data){
    var count = 0;
    for(let slot = 8;slot <= 48;slot++){
        var inv = Player.getInventorySlot(slot);
        if(inv.id == id && (data == -1 || inv.data == data)) count += inv.count;
    }
    return count;
}

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

Recipes.deleteRecipeFor = function(recipes){
    for(let i in recipes) Recipes.deleteRecipe(recipes[i]);
}

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

ToolAPI.getToolMaterial = function(material){
	return ToolAPI.toolMaterials[material];
}

ToolAPI.getToolBlockType = function(id){
	var data = [],tool = ToolAPI.getToolData(id);
	for(let count in tool.blockMaterials) data.push(count);
	return data;
}

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

Callback.addCallback("tick",function(){
	if(Player.getSneaking()) Callback.invokeCallback("PlayerSneaking",Player.getPosition());
});

Callback.addCallback("EntityDeath",function(entity){
	if(entity == Player.get()) Callback.invokeCallback("PlayerDeath");
});

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

EXPORT("Liquid",LiquidCore);
EXPORT("Renderer",RendererCore);
EXPORT("UsefulTool",UsefulToolCore);
EXPORT("TileLiquidExtra",TileLiquidExtra);