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

			ICRender.addGroupFor(id,groups,data);
			Renderer.registerRenderModel(id,data + count,render);
		}
	}
	
	Block.setBlockShape(id,{x:0.25,y:0.25,z:0.25},{x:0.75,y:0.75,z:0.75},data);
}

IDRegistry.genBlockID("itemPipeOutput");
Block.createBlock("itemPipeOutput",[
    {name:"Item Pipe (Output)",texture:[["output_item_pipe",0]],inCreative:true},
    {name:"Item Pipe (Output)",texture:[["output_item_pipe",0]],inCreative:false}
],"pipe");

Tooltip.info(BlockID.itemPipeOutput,"Output item to specified direction.");

ItemPipe.register(BlockID.itemPipeOutput,0);
Block.setBlockShape(BlockID.itemPipeOutput,{x:0.25,y:0.25,z:0},{x:0.75,y:0.75,z:1},0);
Renderer.registerPipeOutputRenderModel(BlockID.itemPipeOutput,1,[["input_item_pipe",0],["output_item_pipe",0]],[
	"classify-item-pipe",
	"input-item-pipe",
	"output-item-pipe",
	"transport-item-pipe"
]);

MachineRegistry.setDrop("itemPipeOutput",BlockID.itemPipeOutput);
Callback.addCallback("PreLoaded",function(){
	RecipeRegistry.addAssemblyTableRecipe([{id:BlockID.itemPipeTransport,count:1,data:0},{id:410,count:1,data:0}],{id:BlockID.itemPipeOutput,count:1,data:0});
});

Block.registerPlaceFunction("itemPipeOutput",function(coords,item,block){
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

MachineRegistry.registerPrototype(BlockID.itemPipeOutput,{
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
		var output = [],directions = [{x:0,y:0,z:-1},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:1,z:0}];
		output.push(directions[this.data.meta]);
		return output;
	},

	renderer:function(){
		Renderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + 1);
	}
});