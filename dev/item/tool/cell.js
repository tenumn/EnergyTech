IDRegistry.genItemID("cellEmpty");
Item.createItem("cellEmpty","Liquid Cell(Empty)",{name:"empty_cell"});
Item.setLiquidClip(ItemID.cellEmpty,true);

IDRegistry.genItemID("cellWater");
Item.createItem("cellWater","Liquid Cell(Water)",{name:"water_cell"});
LiquidRegistry.registerItem("water",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellWater,data:0});

IDRegistry.genItemID("cellLava");
Item.createItem("cellLava","Liquid Cell(Lava)",{name:"lava_cell"});
LiquidRegistry.registerItem("lava",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellLava,data:0});

IDRegistry.genItemID("cellUranium");
Item.createItem("cellUranium","Liquid Cell(Uranium)",{name:"uranium_cell"});
LiquidRegistry.registerItem("uranium",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellUranium,data:0});

IDRegistry.genItemID("cellLithium");
Item.createItem("cellLithium","Liquid Cell(Lithium)",{name:"lithium_cell"});
LiquidRegistry.registerItem("lithium",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellLithium,data:0});

Item.registerUseFunction("cellEmpty",function(coords,item,block){
	if(block.id > 7 && block.id < 12 && block.data == 0){
		World.setBlock(coords.x,coords.y,coords.z,0);
		if(block.id == 8 || block.id == 9){
		Player.addItemToInventory(ItemID.cellWater,1);}
		else{
		Player.addItemToInventory(ItemID.cellLava,1);}
		Player.decreaseCarriedItem(1);
	}
});

Item.registerUseFunction("cellWater",function(coords,item,block){
	var x = coords.relative.x,y = coords.relative.y,z = coords.relative.z,block = World.getBlockID(x,y,z);
	if(!World.getTileEntity(coords.x,coords.y,coords.z) && (block == 0 || block > 7 && block < 12)){
		World.setBlock(x,y,z,8);
		Player.addItemToInventory(ItemID.cellEmpty,1);
		Player.decreaseCarriedItem(1);
	}
});


Item.registerUseFunction("cellLava",function(coords,item,block){
	var x = coords.relative.x,y = coords.relative.y,z = coords.relative.z,block = World.getBlockID(x,y,z);
	if(!World.getTileEntity(coords.x,coords.y,coords.z) && (block == 0 || block > 7 && block < 12)){
		World.setBlock(x,y,z,10);
		Player.addItemToInventory(ItemID.cellEmpty,1);
		Player.decreaseCarriedItem(1);
	}
});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.cellUranium,count:1,data:0},["aaa","bcb","aaa"],["a",ItemID.uranium238,0,"b",ItemID.smallUranium235,0,"c",ItemID.cellEmpty,0]);
    Recipes.addShaped({id:ItemID.cellLithium,count:1,data:0},["aaa","bcb","aaa"],["a",ItemID.lithium7,0,"b",ItemID.smallLithium6,0,"c",ItemID.cellEmpty,0]);
});