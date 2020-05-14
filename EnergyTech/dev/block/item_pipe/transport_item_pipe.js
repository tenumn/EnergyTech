IDRegistry.genBlockID("itemPipeTransport");
Block.createBlock("itemPipeTransport",[
    {name:"Item Pipe (Transport)",texture:[["transport_item_pipe",0]],inCreative:true},
    {name:"Item Pipe (Transport)",texture:[["transport_item_pipe",0]],inCreative:false}
],"pipe");

ItemPipe.register(BlockID.itemPipeTransport,0.1);
TileRenderer.setupWireModel(BlockID.itemPipeTransport,1,0.375,"transport-item-pipe");
ICRender.addGroupFor(BlockID.itemPipeTransport,[
    "classify-item-pipe",
    "input-item-pipe",
    "output-item-pipe",
    "transport-item-pipe"
]);
Block.setBlockShape(BlockID.itemPipeTransport,{x:0.25,y:0.25,z:0},{x:0.75,y:0.75,z:1},0);

MachineRegistry.setDrop("itemPipeTransport",BlockID.itemPipeTransport);
Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.itemPipeTransport,count:4,data:0},["aba"],["a",ItemID.ingotTin,0,"b",20,0]);
});

Block.registerPlaceFunction("itemPipeTransport",function(coords,item,block){
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