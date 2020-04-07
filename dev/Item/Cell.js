IDRegistry.genItemID("cellEmpty");
Item.createItem("cellEmpty","Liquid Cell (Empty)",{name:"cellEmpty"});
Item.setLiquidClip(ItemID.cellEmpty,true);
Tool.registerTool(ItemID.cellEmpty,"Cell");

IDRegistry.genItemID("cellWater");
Item.createItem("cellWater","Liquid Cell (Water)",{name:"cellWater"});
LiquidRegistry.registerItem("water",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellWater,data:0});
Tool.registerTool(ItemID.cellWater,"Cell");

IDRegistry.genItemID("cellLava");
Item.createItem("cellLava","Liquid Cell (Lava)",{name:"cellLava"});
LiquidRegistry.registerItem("lava",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellLava,data:0});
Tool.registerTool(ItemID.cellLava,"Cell");

IDRegistry.genItemID("cellUranium");
Item.createItem("cellUranium","Liquid Cell (Uranium)",{name:"cellUranium"});
LiquidRegistry.registerItem("uranium",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellUranium,data:0});
Tool.registerTool(ItemID.cellUranium,"Cell");

IDRegistry.genItemID("cellUranium235");
Item.createItem("cellUranium235","Liquid Cell (Uranium-235)",{name:"cellUranium235"});
LiquidRegistry.registerItem("uranium235",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellUranium235,data:0});
Tool.registerTool(ItemID.cellUranium235,"Cell");

IDRegistry.genItemID("cellUranium238");
Item.createItem("cellUranium238","Liquid Cell (Uranium-238)",{name:"cellUranium238"});
LiquidRegistry.registerItem("uranium238",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellUranium238,data:0});
Tool.registerTool(ItemID.cellUranium238,"Cell");

IDRegistry.genItemID("cellLithium6");
Item.createItem("cellLithium6","Liquid Cell (Lithium-6)",{name:"cellLithium6"});
LiquidRegistry.registerItem("lithium6",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellLithium6,data:0});
Tool.registerTool(ItemID.cellLithium6,"Cell");

IDRegistry.genItemID("cellLithium7");
Item.createItem("cellLithium7","Liquid Cell (Lithium-7)",{name:"cellLithium7"});
LiquidRegistry.registerItem("lithium7",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellLithium7,data:0});
Tool.registerTool(ItemID.cellLithium7,"Cell");

IDRegistry.genItemID("cellTritium");
Item.createItem("cellTritium","Liquid Cell (Tritium)",{name:"cellTritium"});
LiquidRegistry.registerItem("tritium",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellTritium,data:0});
Tool.registerTool(ItemID.cellTritium,"Cell");

IDRegistry.genItemID("cellDeuterium");
Item.createItem("cellDeuterium","Liquid Cell (Deuterium)",{name:"cellDeuterium"});
LiquidRegistry.registerItem("deuterium",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellDeuterium,data:0});
Tool.registerTool(ItemID.cellDeuterium,"Cell");

IDRegistry.genItemID("cellHelium");
Item.createItem("cellHelium","Liquid Cell (Helium)",{name:"cellHelium"});
LiquidRegistry.registerItem("helium",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellHelium,data:0});
Tool.registerTool(ItemID.cellHelium,"Cell");

IDRegistry.genItemID("cellHelium3");
Item.createItem("cellHelium3","Liquid Cell (Helium-3)",{name:"cellHelium3"});
LiquidRegistry.registerItem("helium3",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellHelium3,data:0});
Tool.registerTool(ItemID.cellHelium3,"Cell");

IDRegistry.genItemID("cellDistilledWater");
Item.createItem("cellDistilledWater","Liquid Cell (Distilled Water)",{name:"cellDistilledWater"});
LiquidRegistry.registerItem("distilledWater",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellDistilledWater,data:0});
Tool.registerTool(ItemID.cellDistilledWater,"Cell");

IDRegistry.genItemID("cellHeavyWater");
Item.createItem("cellHeavyWater","Liquid Cell (Heavy Water)",{name:"cellHeavyWater"});
LiquidRegistry.registerItem("heavyWater",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellHeavyWater,data:0});
Tool.registerTool(ItemID.cellHeavyWater,"Cell");

Item.registerUseFunction("cellEmpty",function(coords,item,block){
	if(block.id > 7 && block.id < 12 && block.data == 0){
		World.setBlock(coords.x,coords.y,coords.z,0);
		if(block.id == 8 || block.id == 9){
			Player.addItemToInventory(ItemID.cellWater,1);
		} else {
			Player.addItemToInventory(ItemID.cellLava,1);
		}
		Player.decreaseCarriedItem(1);
	}
});

Item.registerUseFunction("cellWater",function(coords,item,block){
	var x = coords.relative.x,y = coords.relative.y,z = coords.relative.z,block = World.getBlockID(x,y,z),tile = World.getTileEntity(coords.x,coords.y,coords.z);
	if(!tile && block != 199 && (block == 0 || block > 7 && block < 12)){
		World.setBlock(x,y,z,8);
		Player.addItemToInventory(ItemID.cellEmpty,1);
		Player.decreaseCarriedItem(1);
	}
});

Item.registerUseFunction("cellLava",function(coords,item,block){
	var x = coords.relative.x,y = coords.relative.y,z = coords.relative.z,block = World.getBlockID(x,y,z),tile = World.getTileEntity(coords.x,coords.y,coords.z);
	if(!tile && block != 199 && (block == 0 || block > 7 && block < 12)){
		World.setBlock(x,y,z,10);      
		Player.addItemToInventory(ItemID.cellEmpty,1);
		Player.decreaseCarriedItem(1);
	}
});

Callback.addCallback("PreLoaded",function(){
	// 装罐机
    Recipe.addCanningMachineRecipe({id:ItemID.lithium6,data:0},{id:ItemID.cellLithium6,count:1,data:0},{id:ItemID.cellEmpty,data:0});
    Recipe.addCanningMachineRecipe({id:ItemID.lithium7,data:0},{id:ItemID.cellLithium7,count:1,data:0},{id:ItemID.cellEmpty,data:0});
    Recipe.addCanningMachineRecipe({id:ItemID.uranium235,data:0},{id:ItemID.cellUranium235,count:1,data:0},{id:ItemID.cellEmpty,data:0});
    Recipe.addCanningMachineRecipe({id:ItemID.uranium238,data:0},{id:ItemID.cellUranium238,count:1,data:0},{id:ItemID.cellEmpty,data:0});
	Recipe.addCanningMachineRecipe({id:ItemID.enrichedUranium,data:0},{id:ItemID.cellUranium,count:1,data:0},{id:ItemID.cellEmpty,data:0});

	// 电解机
	Recipe.addElectrolyzerRecipe({id:ItemID.cellHeavyWater,count:40,data:0},[{id:ItemID.cellDeuterium ,count:40,data:0},{id:ItemID.cellTritium   ,count:1 ,data:0}]);
	Recipe.addElectrolyzerRecipe({id:ItemID.cellDeuterium ,count:50,data:0},[{id:ItemID.cellHelium3   ,count:20,data:0},{id:ItemID.cellTritium   ,count:20,data:0}]);

	// 蒸馏室
	Recipe.addDistilleryRecipe({id:ItemID.cellWater         ,count:1,data:0},[{id:ItemID.cellDistilledWater,count:1,data:0}]);
	Recipe.addDistilleryRecipe({id:ItemID.cellDistilledWater,count:1,data:0},[{id:ItemID.cellHeavyWater    ,count:1,data:0}]);

	// 核聚变反应堆
	Recipe.addFusionReactorRecipe([{id:ItemID.cellHelium3,count:1,data:0},{id:ItemID.cellDeuterium,count:1,data:0}],[{id:ItemID.cellHelium,count:1,data:0}],112);
	Recipe.addFusionReactorRecipe([{id:ItemID.cellTritium,count:1,data:0},{id:ItemID.cellDeuterium,count:1,data:0}],[{id:ItemID.cellHelium,count:1,data:0}],224);
	Recipe.addFusionReactorRecipe([{id:ItemID.cellHelium3,count:1,data:0},{id:ItemID.cellLithium6 ,count:1,data:0}],[{id:ItemID.cellHelium,count:1,data:0}],336);

	// 合成
	Recipes.addShaped({id:ItemID.cellEmpty,count:1,data:0},["a","b","a"],["a",ItemID.plateTin,0,"b",102,0]);
});