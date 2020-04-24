PIPE_PLACE = function(coords,item){
    Game.prevent();
    var block = World.getBlock(coords.x,coords.y,coords.z),place = coords;
    if(!canTileBeReplaced(block.id,block.data)){
        place = coords.relative,block = World.getBlock(place.x,place.y,place.z);
        if(!canTileBeReplaced(block.id,block.data)){return;}
    }
    World.setBlock(place.x,place.y,place.z,item.id,1);
    World.addTileEntity(place.x,place.y,place.z);
    Player.decreaseCarriedItem(1);
}

addGroupFor = function(id,groups,data){
	for(let i in groups){
		var group = groups[i];
		ICRender.getGroup(group).add(id,data || -1);
	}
}

Renderer.registerPipeOutputRenderModel = function(id,data,texture,groups){
	var textures = [
		[texture[0],texture[0],texture[0],texture[0],texture[0],texture[1]],
		[texture[0],texture[0],texture[0],texture[0],texture[1],texture[0]],
		[texture[0],texture[1],texture[0],texture[0],texture[0],texture[0]],
		[texture[1],texture[0],texture[0],texture[0],texture[0],texture[0]],
		[texture[0],texture[0],texture[0],texture[1],texture[0],texture[0]],
		[texture[0],texture[0],texture[1],texture[0],texture[0],texture[0]]
	];
	
	var boxes = [
		{side:[1,0,0],box:[0.75,0.25,0.25,1,0.75,0.75]},
		{side:[-1,0,0],box:[0,0.25,0.25,0.25,0.75,0.75]},
		{side:[0,1,0],box:[0.25,0.75,0.25,0.75,1,0.75]},
		{side:[0,-1,0],box:[0.25,0,0.25,0.75,0.25,0.75]},
		{side:[0,0,1],box:[0.25,0.25,0.75,0.75,0.75,1]},
		{side:[0,0,-1],box:[0.25,0.25,0,0.75,0.75,0.25]}
	];

	for(let count = 0;count < 6;count++){
		var render = new ICRender.Model(),model = BlockRenderer.createModel();
		model.addBox(0.25,0.25,0.25,0.75,0.75,0.75,id,0);
		render.addEntry(model);

		for(let i in boxes){
			model = BlockRenderer.createModel();
			model.addBox(boxes[i].box[0],boxes[i].box[1],boxes[i].box[2],boxes[i].box[3],boxes[i].box[4],boxes[i].box[5],[textures[count][i]]);
			
			if(groups){
				for(let n in groups){
					var group = groups[n];
					render.addEntry(model).asCondition(boxes[i].side[0],boxes[i].side[1],boxes[i].side[2],ICRender.getGroup(group),0);
				}
			}

			addGroupFor(id,groups,data);
			Renderer.registerRenderModel(id,data + count,render);
		}
	}
	
	Block.setBlockShape(id,{x:0.25,y:0.25,z:0.25},{x:0.75,y:0.75,z:0.75},data);
}

for(let i in BlockID){
    var tile = TileEntity.getPrototype(BlockID[i]);
    if(tile && tile.getTransportSlots){
		ICRender.getGroup("input-item-pipe").add(BlockID[i],-1);
		ICRender.getGroup("output-item-pipe").add(BlockID[i],-1);
		ICRender.getGroup("transport-item-pipe").add(BlockID[i],-1);
    }
}

addGroupFor(54,["input-item-pipe","output-item-pipe","transport-item-pipe"]);
addGroupFor(61,["input-item-pipe","output-item-pipe","transport-item-pipe"]);
addGroupFor(62,["input-item-pipe","output-item-pipe","transport-item-pipe"]);
addGroupFor(154,["input-item-pipe","output-item-pipe","transport-item-pipe"]);

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

IDRegistry.genBlockID("itemPipeInput");
Block.createBlock("itemPipeInput",[
    {name:"Item Pipe (Input)",texture:[["input_item_pipe",0]],inCreative:true},
    {name:"Item Pipe (Input)",texture:[["input_item_pipe",0]],inCreative:false}
],"transparent");

addGroupFor(BlockID.itemPipeInput,[
	"transport-item-pipe",
	"output-item-pipe"
]);

ItemPipe.registerTile(BlockID.itemPipeInput,{});
Machine.setDrop("itemPipeInput",BlockID.itemPipeInput);
Block.registerPlaceFunction("itemPipeInput",PIPE_PLACE);
TileRenderer.setupWireModel(BlockID.itemPipeInput,1,0.5,"input-item-pipe",true);
Block.setBlockShape(BlockID.itemPipeInput,{x:0.25,y:0.25,z:0},{x:0.75,y:0.75,z:1},0);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShapeless({id:BlockID.itemPipeInput,count:1,data:0},[{id:BlockID.itemPipeTransport,data:0},{id:54,data:0}]);
});

Machine.registerPrototype(BlockID.itemPipeInput,{
	defaultValues:{
		container_index:0
	},
	
	getTransportingDirections:function(item){
		var cur = [],res = ItemPipe.filterDirections(ItemPipe.findDirections(item.position.x,item.position.y,item.position.z),item.direction);
		for(let i in res){
            var block = World.getBlock(this.x + res[i].x,this.y + res[i].y,this.z + res[i].z);
			if(block.id != this.id){
				cur.push(res[i]);
			}
		}
		return cur;
	},

	tick:function(){
		if(World.getThreadTime()%20 == 0){
            var containerData = this.findContainer();
            if(containerData && containerData.container){
                var item = this.getItemFrom(containerData.container,1);
                if(item){
                    var trans = ItemPipe.item.deploy();
                    trans.setPosition(containerData.position);
                    trans.setItem(item);
                    trans.setTarget(this);
                    trans.setFriction(-0.03);
                } else {
                    this.data.container_index++;
                }
            }
        }
	},

	findContainer:function(){
		var directions = ItemPipe.findContainers(this.x,this.y,this.z),dir = directions[this.data.container_index % directions.length];
		if(dir){
			return {
				container:World.getContainer(this.x + dir.x,this.y + dir.y,this.z + dir.z),
				direction:dir,
				position:{x:this.x + dir.x,y:this.y + dir.y,z:this.z + dir.z}
			};
		}
	},

	getItemFrom:function(container,maxCount){
		var slots = [];
		var slotsInitialized = false;

		if(container.tileEntity){
			if(container.tileEntity.getTransportedItem){
				container.tileEntity.getTransportedItem();
            }
            
			if(container.tileEntity.getTransportSlots){
				slots = container.tileEntity.getTransportSlots().output || [];
				slotsInitialized = true;
			}
		}

		if(!slotsInitialized){
			if(container.isContainer){
				for(let name in container.slots){
					slots.push(name);
				}
			} else {
				for(let index = 0;index < container.getSize();index++){
					slots.push(index);
				}
			}
		}

		var item = null;
		for(var i in slots){
			var slot = container.getSlot(slots[i]);
			if (slot.id > 0) {
				var count = Math.min(maxCount, slot.count);
				item = {id: slot.id, count: count, data: slot.data};
				slot.count -= count;

				if(!container.isContainer){
                    container.setSlot(i,slot.id,slot.count,slot.data);
                }
					
				break;
			}
        }
        
		if(container.isContainer){
            container.validateAll();
        }

		return item;
	}
});

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

IDRegistry.genBlockID("itemPipeTransport");
Block.createBlock("itemPipeTransport",[
    {name:"Item Pipe (Transport)",texture:[["transport_item_pipe",0]],inCreative:true},
    {name:"Item Pipe (Transport)",texture:[["transport_item_pipe",0]],inCreative:false}
],"transparent");

addGroupFor(BlockID.itemPipeTransport,[
	"input-item-pipe",
	"transport-item-pipe",
	"output-item-pipe"
]);

Block.registerPlaceFunction("itemPipeTransport",PIPE_PLACE);
Machine.setDrop("itemPipeTransport",BlockID.itemPipeTransport);
ItemPipe.registerTile(BlockID.itemPipeTransport,{friction:0.001});
TileRenderer.setupWireModel(BlockID.itemPipeTransport,1,0.5,"transport-item-pipe");
Block.setBlockShape(BlockID.itemPipeTransport,{x:0.25,y:0.25,z:0},{x:0.75,y:0.75,z:1},0);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.itemPipeTransport,count:4,data:0},["aba"],["a",ItemID.ingotTin,0,"b",BlockID.clearGlass,0]);
});

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

IDRegistry.genBlockID("itemPipeOutput");
Block.createBlock("itemPipeOutput",[
    {name:"Item Pipe (Output)",texture:[["output_item_pipe",0]],inCreative:true},
    {name:"Item Pipe (Output)",texture:[["output_item_pipe",0]],inCreative:false}
],"transparent");

ItemPipe.registerTile(BlockID.itemPipeOutput);
Block.registerPlaceFunction("itemPipeOutput",PIPE_PLACE);
Machine.setDrop("itemPipeOutput",BlockID.itemPipeOutput);
Block.setBlockShape(BlockID.itemPipeOutput,{x:0.25,y:0.25,z:0},{x:0.75,y:0.75,z:1},0);
Renderer.registerPipeOutputRenderModel(BlockID.itemPipeOutput,1,[["input_item_pipe",0],["output_item_pipe",0]],[
	"input-item-pipe",
	"output-item-pipe",
	"transport-item-pipe"
]);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShapeless({id:BlockID.itemPipeOutput,count:1,data:0},[{id:BlockID.itemPipeTransport,data:0},{id:410,data:0}]);
});

Machine.registerPrototype(BlockID.itemPipeOutput,{
	defaultValues:{
        meta:0
	},
	
	click:function(id,count,data){
		if(Tool.isTool(id,"Wrench")){
			if(this.data.meta < 5){
				this.data.meta++;
			} else {
				this.data.meta = 0;
			}
		}

		this.renderer();
	},

	getTransportingDirections:function(item){
		var output = [];
		output.push(ItemPipe.directions[this.data.meta]);
		return output;
	},

	renderer:function(){
		Renderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + 1);
	}
});