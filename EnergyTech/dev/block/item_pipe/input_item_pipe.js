IDRegistry.genBlockID("itemPipeInput");
Block.createBlock("itemPipeInput",[
	{name:"Item Pipe (Input)",texture:[["input_item_pipe",0]],inCreative:true},
	{name:"Item Pipe (Input)",texture:[["input_item_pipe",0]],inCreative:false}
],"pipe");

Tooltip.info(BlockID.itemPipeInput,"Input item into pipeline.");

ItemPipe.register(BlockID.itemPipeInput,0);
TileRenderer.setupWireModel(BlockID.itemPipeInput,1,0.5,"input-item-pipe",true);
Block.setBlockShape(BlockID.itemPipeInput,{x:0.25,y:0.25,z:0},{x:0.75,y:0.75,z:1},0);
ICRender.addGroupFor(BlockID.itemPipeInput,[
	"classify-item-pipe",
	"transport-item-pipe",
	"output-item-pipe"
]);

MachineRegistry.setDrop("itemPipeInput",BlockID.itemPipeInput);
Callback.addCallback("PreLoaded",function(){
	RecipeRegistry.addAssemblyTableRecipe([{id:BlockID.itemPipeTransport,count:1,data:0},{id:54,count:1,data:0}],{id:BlockID.itemPipeInput,count:1,data:0});
});

Block.registerPlaceFunction("itemPipeInput",function(coords,item,block){
	var place = coords;
	if(!canTileBeReplaced(block.id,block.data)){
		place = coords.relative;
		block = World.getBlock(place.x,place.y,place.z);
		if(!canTileBeReplaced(block.id,block.data)) return;
	}
	
    World.setBlock(place.x,place.y,place.z,item.id,1);
    World.addTileEntity(place.x,place.y,place.z);
    Player.decreaseCarriedItem(1);
});

MachineRegistry.registerPrototype(BlockID.itemPipeInput,{
	defaultValues:{
		index:0
	},
	
	getTransportingDirections:function(item){
		var output = [],res = ItemPipe.filterDirections(ItemPipe.findDirections(item.position.x,item.position.y,item.position.z),item.direction);
		for(let i in res) if(World.getBlockID(this.x + res[i].x,this.y + res[i].y,this.z + res[i].z) != this.id) output.push(res[i]);
		return output;
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
                    trans.setFriction(-0.3);
                } else {
                    this.data.index++;
                }
            }
        }
	},

	findContainer:function(){
		var directions = ItemPipe.findContainers(this.x,this.y,this.z),dir = directions[this.data.index % directions.length];
		if(dir) return {
			direction:dir,
			position:{x:this.x + dir.x,y:this.y + dir.y,z:this.z + dir.z},
			container:World.getContainer(this.x + dir.x,this.y + dir.y,this.z + dir.z)
		};
	},

	getItemFrom:function(container,maxCount){
		var slots = [],slotsInitialized = false;

		if(container.tileEntity){
			if(container.tileEntity.getTransportedItem) container.tileEntity.getTransportedItem();
			if(container.tileEntity.getTransportSlots){
				slots = container.tileEntity.getTransportSlots().output || [];
				slotsInitialized = true;
			}
		}

		if(!slotsInitialized){
			if(container.isContainer){
				for(let name in container.slots) slots.push(name);
			} else {
				for(let index = 0;index < container.getSize();index++) slots.push(index);
			}
		}

		var item = null;
		for(let i in slots){
			var slot = container.getSlot(slots[i]);
			if(slot.id > 0){
				var count = Math.min(maxCount,slot.count);
				item = {id:slot.id,count:count,data:slot.data};
				slot.count -= count;

				if(!container.isContainer) container.setSlot(i,slot.id,slot.count,slot.data);
					
				break;
			}
        }
        
		if(container.isContainer) container.validateAll();

		return item;
	}
});