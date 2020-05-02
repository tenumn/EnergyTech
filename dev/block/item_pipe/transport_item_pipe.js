IDRegistry.genBlockID("itemPipeTransport");
Block.createBlock("itemPipeTransport",[
    {name:"Item Pipe (Transport)",texture:[["transport_item_pipe",0]],inCreative:true},
    {name:"Item Pipe (Transport)",texture:[["transport_item_pipe",0]],inCreative:false}
],"pipe");

ICRender.addGroupFor(BlockID.itemPipeTransport,["input-item-pipe","output-item-pipe"]);

ItemPipe.register(BlockID.itemPipeTransport,{friction:0.1});
Block.registerPlaceFunction("itemPipeTransport",PIPE_PLACE);
Machine.setDrop("itemPipeTransport",BlockID.itemPipeTransport);
TileRenderer.setupWireModel(BlockID.itemPipeTransport,1,0.375,"transport-item-pipe");
Block.setBlockShape(BlockID.itemPipeTransport,{x:0.25,y:0.25,z:0},{x:0.75,y:0.75,z:1},0);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.itemPipeTransport,count:4,data:0},["aba"],["a",ItemID.ingotTin,0,"b",BlockID.clearGlass,0]);
});