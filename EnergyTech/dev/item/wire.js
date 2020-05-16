Block.createSpecialType({
    opaque:false,
    destroytime:1
},"wire");

Item.registerUseFunctionForID(171,function(coords,item,block){
    if(MachineRegistry.isWire(block.id) && item.data == 15 && block.data == 0){
        Game.prevent();
        World.setBlock(coords.x,coords.y,coords.z,block.id,1);
        Player.decreaseCarriedItem(1);
    }
});

Callback.addCallback("DestroyBlockStart",function(coords,block){
    var item = Player.getCarriedItem();
    if(MachineRegistry.isWire(block.id) && Tool.isTool(item.id,"Cutter")){
        Block.setTempDestroyTime(block.id,0);
        SoundAPI.playSound("tool/wrench.ogg");
        ToolAPI.breakCarriedTool(4);
    }
});

// 锡导线
IDRegistry.genItemID("wireTin");
Item.createItem("wireTin","Tin Coil",{name:"tin_wire"});

IDRegistry.genBlockID("wireTin");
Block.createBlock("wireTin",[
    {name:"Tin Coil",texture:[["tin_wire",0]],inCreative:false},
    {name:"Tin Coil",texture:[["tin_wire",1]],inCreative:false}
],"wire");

Tooltip.tier(ItemID.wireTin,1);
MachineRegistry.registerEUWire(BlockID.wireTin,power(1));
TileRenderer.setupWireModel(BlockID.wireTin,0,0.25,"eu-wire");
TileRenderer.setupWireModel(BlockID.wireTin,1,0.3125,"eu-wire");

Item.registerUseFunction("wireTin",function(coords,item,block){
    var place = coords;
    if(!canTileBeReplaced(block.id,block.data)){
        place = coords.relative;
        block = World.getBlock(place.x,place.y,place.z);
        if(!canTileBeReplaced(block.id,block.data)) return;
    }
    
    World.setBlock(place.x,place.y,place.z,BlockID.wireTin,0);
    Player.decreaseCarriedItem(1);
    EnergyTypeRegistry.onWirePlaced(place.x,place.y,place.z);
});

Block.registerDropFunction("wireTin",function(coords,id,data){
    if(data == 1) return [[ItemID.wireTin,1,0],[171,1,15]];
    return [[ItemID.wireTin,1,0]];
});

// 铜导线
IDRegistry.genItemID("wireCopper");
Item.createItem("wireCopper","Copper Coil",{name:"copper_wire"});

IDRegistry.genBlockID("wireCopper");
Block.createBlock("wireCopper",[
    {name:"Copper Coil",texture:[["copper_wire",0]],inCreative:false},
    {name:"Copper Coil",texture:[["copper_wire",1]],inCreative:false}
],"wire");

Tooltip.tier(ItemID.wireCopper,2);
MachineRegistry.registerEUWire(BlockID.wireCopper,power(2));
TileRenderer.setupWireModel(BlockID.wireCopper,0,0.25,"eu-wire");
TileRenderer.setupWireModel(BlockID.wireCopper,1,0.3125,"eu-wire");

Item.registerUseFunction("wireCopper",function(coords,item,block){
    var place = coords;
    if(!canTileBeReplaced(block.id,block.data)){
        place = coords.relative;
        block = World.getBlock(place.x,place.y,place.z);
        if(!canTileBeReplaced(block.id,block.data)) return;
    }
    
    World.setBlock(place.x,place.y,place.z,BlockID.wireCopper,0);
    Player.decreaseCarriedItem(1);
    EnergyTypeRegistry.onWirePlaced(place.x,place.y,place.z);
});

Block.registerDropFunction("wireCopper",function(coords,id,data){
    if(data == 1) return [[ItemID.wireCopper,1,0],[171,1,15]];
    return [[ItemID.wireCopper,1,0]];
});

// 金导线
IDRegistry.genItemID("wireGold");
Item.createItem("wireGold","Gold Coil",{name:"gold_wire"});

IDRegistry.genBlockID("wireGold");
Block.createBlock("wireGold",[
    {name:"Gold Coil",texture:[["gold_wire",0]],inCreative:false},
    {name:"Gold Coil",texture:[["gold_wire",1]],inCreative:false}
],"wire");

Tooltip.tier(ItemID.wireGold,3);
MachineRegistry.registerEUWire(BlockID.wireGold,power(3));
TileRenderer.setupWireModel(BlockID.wireGold,0,0.375,"eu-wire");
TileRenderer.setupWireModel(BlockID.wireGold,1,0.4375,"eu-wire");

Item.registerUseFunction("wireGold",function(coords,item,block){
    var place = coords;
    if(!canTileBeReplaced(block.id,block.data)){
        place = coords.relative;
        block = World.getBlock(place.x,place.y,place.z);
        if(!canTileBeReplaced(block.id,block.data)) return;
    }

    World.setBlock(place.x,place.y,place.z,BlockID.wireGold,0);
    Player.decreaseCarriedItem(1);
    EnergyTypeRegistry.onWirePlaced(place.x,place.y,place.z);
});

Block.registerDropFunction("wireGold",function(coords,id,data){
    if(data == 1) return [[ItemID.wireGold,1,0],[171,1,15]];
    return [[ItemID.wireGold,1,0]];
});

// 钢导线
IDRegistry.genItemID("wireSteel");
Item.createItem("wireSteel","Steel Coil",{name:"steel_wire"});

IDRegistry.genBlockID("wireSteel");
Block.createBlock("wireSteel",[
    {name:"Steel Coil",texture:[["steel_wire",0]],inCreative:false},
    {name:"Steel Coil",texture:[["steel_wire",1]],inCreative:false}
],"wire");

Tooltip.tier(ItemID.wireSteel,4);
MachineRegistry.registerEUWire(BlockID.wireSteel,power(4));
TileRenderer.setupWireModel(BlockID.wireSteel,0,0.375,"eu-wire");
TileRenderer.setupWireModel(BlockID.wireSteel,1,0.4375,"eu-wire");

Item.registerUseFunction("wireSteel",function(coords,item,block){
    var place = coords;
    if(!canTileBeReplaced(block.id,block.data)){
        place = coords.relative;
        block = World.getBlock(place.x,place.y,place.z);
        if(!canTileBeReplaced(block.id,block.data)) return;
    }
    
    World.setBlock(place.x,place.y,place.z,BlockID.wireSteel,0);
    Player.decreaseCarriedItem(1);
    EnergyTypeRegistry.onWirePlaced(place.x,place.y,place.z);
});

Block.registerDropFunction("wireSteel",function(coords,id,data){
    if(data == 1) return [[ItemID.wireSteel,1,0],[171,1,15]];
    return [[ItemID.wireSteel,1,0]];
});

// 钨导线
IDRegistry.genItemID("wireTungsten");
Item.createItem("wireTungsten","Tungsten Coil",{name:"tungsten_wire"});

IDRegistry.genBlockID("wireTungsten");
Block.createBlock("wireTungsten",[
    {name:"Tungsten Coil",texture:[["tungsten_wire",0]],inCreative:false},
    {name:"Tungsten Coil",texture:[["tungsten_wire",1]],inCreative:false}
],"wire");

Tooltip.tier(ItemID.wireTungsten,5);
MachineRegistry.registerEUWire(BlockID.wireTungsten,power(5));
TileRenderer.setupWireModel(BlockID.wireTungsten,0,0.5,"eu-wire");
TileRenderer.setupWireModel(BlockID.wireTungsten,1,0.5625,"eu-wire");

Item.registerUseFunction("wireTungsten",function(coords,item,block){
    var place = coords;
    if(!canTileBeReplaced(block.id,block.data)){
        place = coords.relative;
        block = World.getBlock(place.x,place.y,place.z);
        if(!canTileBeReplaced(block.id,block.data)) return;
    }
    
    World.setBlock(place.x,place.y,place.z,BlockID.wireTungsten,0);
    Player.decreaseCarriedItem(1);
    EnergyTypeRegistry.onWirePlaced(place.x,place.y,place.z);
});

Block.registerDropFunction("wireTungsten",function(coords,id,data){
    if(data == 1) return [[ItemID.wireTungsten,1,0],[171,1,15]];
    return [[ItemID.wireTungsten,1,0]];
});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("wire",Translation.translate("Wire"),[
        ItemID.wireTin,
        ItemID.wireCopper,
        ItemID.wireGold,
        ItemID.wireSteel,
        ItemID.wireTungsten
    ]);

    RecipeRegistry.addWiremillRecipe({id:ItemID.plateTin,count:1,data:0},{id:ItemID.wireTin,count:2,data:0});
    RecipeRegistry.addWiremillRecipe({id:ItemID.plateCopper,count:1,data:0},{id:ItemID.wireCopper,count:2,data:0});
    RecipeRegistry.addWiremillRecipe({id:ItemID.plateGold,count:1,data:0},{id:ItemID.wireGold,count:2,data:0});
    RecipeRegistry.addWiremillRecipe({id:ItemID.plateSteel,count:1,data:0},{id:ItemID.wireSteel,count:2,data:0});
    RecipeRegistry.addWiremillRecipe({id:ItemID.plateTungsten,count:1,data:0},{id:ItemID.wireTungsten,count:2,data:0});

    Recipes.addShaped({id:ItemID.wireTin,count:2,data:0},[" a ","aba"," a "],["a",ItemID.stickTin,0,"b",5,-1]);
    Recipes.addShaped({id:ItemID.wireCopper,count:2,data:0},[" a ","aba"," a "],["a",ItemID.stickCopper,0,"b",5,-1]);
    Recipes.addShaped({id:ItemID.wireGold,count:2,data:0},[" a ","aba"," a "],["a",ItemID.stickGold,0,"b",5,-1]);
    Recipes.addShaped({id:ItemID.wireSteel,count:2,data:0},[" a ","aba"," a "],["a",ItemID.stickSteel,0,"b",5,-1]);
    Recipes.addShaped({id:ItemID.wireTungsten,count:2,data:0},[" a ","aba"," a "],["a",ItemID.stickTungsten,0,"b",5,-1]);
});