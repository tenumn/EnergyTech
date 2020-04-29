Renderer.setTransportItemPipeModel = function(id,data,name){
	var render = new ICRender.Model();
	var shape = new ICRender.CollisionShape();

	var group = ICRender.getGroup(name);
	group.add(id,data);

	var boxes = [
		{side:[1,0,0],box:[0.6875,0.3125,0.3125,1,0.6875,0.6875]},
		{side:[-1,0,0],box:[0,0.3125,0.3125,0.3125,0.6875,0.6875]},
		{side:[0,1,0],box:[0.3125,0.6875,0.3125,0.6875,1,0.6875]},
		{side:[0,-1,0],box:[0.3125,0,0.3125,0.6875,0.3125,0.6875]},
		{side:[0,0,1],box:[0.3125,0.3125,0.6875,0.6875,0.6875,1]},
		{side:[0,0,-1],box:[0.3125,0.3125,0,0.6875,0.6875,0.3125]}
	];

	for(let i in boxes){
		var box = boxes[i];

		var model = BlockRenderer.createModel();
		model.addBox(box.box[0],box.box[1],box.box[2],box.box[3],box.box[4],box.box[5],[["item_pipe",0]]);
		var condition = ICRender.BLOCK(box.side[0],box.side[1],box.side[2],group,false);
		render.addEntry(model).setCondition(condition);

		var entry = shape.addEntry();
		entry.addBox(box.box[0],box.box[1],box.box[2],box.box[3],box.box[4],box.box[5]);
		entry.setCondition(condition);
	}

	var model = BlockRenderer.createModel();
	model.addBox(0.3125,0.3125,0.3125,0.6875,0.6875,0.6875,id,data);
	render.addEntry(model);
	
	var entry = shape.addEntry();
	entry.addBox(0.3125,0.3125,0.3125,0.6875,0.6875,0.6875);
	
	Block.setShape(id,0.3125,0.3125,0.3125,0.6875,0.6875,0.6875,data);
	
	BlockRenderer.setStaticICRender(id,data,render);
	BlockRenderer.setCustomCollisionShape(id,data,shape);
}

IDRegistry.genBlockID("itemPipeTransport");
Block.createBlock("itemPipeTransport",[
    {name:"Item Pipe (Transport)",texture:[["transport_item_pipe",0]],inCreative:true},
    {name:"Item Pipe (Transport)",texture:[["transport_item_pipe",0]],inCreative:false}
],"pipe");

ICRender.addGroupFor(BlockID.itemPipeTransport,["input-item-pipe","output-item-pipe"]);

Block.registerPlaceFunction("itemPipeTransport",PIPE_PLACE);
Machine.setDrop("itemPipeTransport",BlockID.itemPipeTransport);
ItemPipe.registerTile(BlockID.itemPipeTransport,{friction:0.1});
Renderer.setTransportItemPipeModel(BlockID.itemPipeTransport,1,"transport-item-pipe");
Block.setBlockShape(BlockID.itemPipeTransport,{x:0.25,y:0.25,z:0},{x:0.75,y:0.75,z:1},0);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.itemPipeTransport,count:4,data:0},["aba"],["a",ItemID.ingotTin,0,"b",BlockID.clearGlass,0]);
});