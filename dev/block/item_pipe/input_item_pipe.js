IDRegistry.genBlockID("itemPipeInput");
Block.createBlock("itemPipeInput",[
	{name:"Item Pipe (Input)",texture:[["input_item_pipe",0]],inCreative:true},
	{name:"Item Pipe (Input)",texture:[["input_item_pipe",0]],inCreative:false}
],"pipe");

Tooltip.info(BlockID.itemPipeInput,"Input item into pipeline.");
ICRender.addGroupFor(BlockID.itemPipeInput,["transport-item-pipe","output-item-pipe"]);

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