IDRegistry.genItemID("cellEmpty");
Item.createItem("cellEmpty","Liquid Cell (Empty)",{name:"empty_cell"});
Item.setLiquidClip(ItemID.cellEmpty,true);

IDRegistry.genItemID("cellWater");
Item.createItem("cellWater","Liquid Cell (Water)",{name:"water_cell"});
LiquidRegistry.registerItem("water",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellWater,data:0});

IDRegistry.genItemID("cellLava");
Item.createItem("cellLava","Liquid Cell (Lava)",{name:"lava_cell"});
LiquidRegistry.registerItem("lava",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellLava,data:0});

IDRegistry.genItemID("cellUranium235");
Item.createItem("cellUranium235","Liquid Cell (Uranium-235)",{name:"uranium235_cell"});
LiquidRegistry.registerItem("uranium235",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellUranium235,data:0});

IDRegistry.genItemID("cellUranium238");
Item.createItem("cellUranium238","Liquid Cell (Uranium-238)",{name:"uranium238_cell"});
LiquidRegistry.registerItem("uranium238",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellUranium238,data:0});

IDRegistry.genItemID("cellLithium6");
Item.createItem("cellLithium6","Liquid Cell (Lithium-6)",{name:"lithium6_cell"});
LiquidRegistry.registerItem("lithium6",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellLithium6,data:0});

IDRegistry.genItemID("cellLithium7");
Item.createItem("cellLithium7","Liquid Cell (Lithium-7)",{name:"lithium7_cell"});
LiquidRegistry.registerItem("lithium7",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellLithium7,data:0});

IDRegistry.genItemID("cellTritium");
Item.createItem("cellTritium","Liquid Cell (Tritium)",{name:"tritium_cell"});
LiquidRegistry.registerItem("tritium",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellTritium,data:0});

IDRegistry.genItemID("cellDeuterium");
Item.createItem("cellDeuterium","Liquid Cell (Deuterium)",{name:"deuterium_cell"});
LiquidRegistry.registerItem("deuterium",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellDeuterium,data:0});

IDRegistry.genItemID("cellHelium");
Item.createItem("cellHelium","Liquid Cell (Helium)",{name:"helium_cell"});
LiquidRegistry.registerItem("helium",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellHelium,data:0});

IDRegistry.genItemID("cellHelium3");
Item.createItem("cellHelium3","Liquid Cell (Helium-3)",{name:"helium3_cell"});
LiquidRegistry.registerItem("helium3",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellHelium3,data:0});

IDRegistry.genItemID("cellDistilledWater");
Item.createItem("cellDistilledWater","Liquid Cell (Distilled Water)",{name:"distilled_water_cell"});
LiquidRegistry.registerItem("distilledWater",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellDistilledWater,data:0});

IDRegistry.genItemID("cellHeavyWater");
Item.createItem("cellHeavyWater","Liquid Cell (Heavy Water)",{name:"heavy_water_cell"});
LiquidRegistry.registerItem("heavyWater",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellHeavyWater,data:0});

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
	var x = coords.relative.x,y = coords.relative.y,z = coords.relative.z;
	var tile = World.getTileEntity(coords.x,coords.y,coords.z);
	if(!tile && (block == 0 || block > 7 && block < 12)){
		World.setBlock(x,y,z,8);
		Player.addItemToInventory(ItemID.cellEmpty,1);
		Player.decreaseCarriedItem(1);
	}
});

Item.registerUseFunction("cellLava",function(coords,item,block){
	var x = coords.relative.x,y = coords.relative.y,z = coords.relative.z;
	var tile = World.getTileEntity(coords.x,coords.y,coords.z);
	if(!tile && (block == 0 || block > 7 && block < 12)){
		World.setBlock(x,y,z,10);      
		Player.addItemToInventory(ItemID.cellEmpty,1);
		Player.decreaseCarriedItem(1);
	}
});

Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:ItemID.cellEmpty,count:1,data:0},["a","b","a"],["a",ItemID.plateTin,0,"b",102,0]);

	Recipe.addDistilleryRecipe({id:ItemID.cellWater         ,count:1,data:0},[{id:ItemID.cellDistilledWater,count:1,data:0}]);
	Recipe.addDistilleryRecipe({id:ItemID.cellDistilledWater,count:1,data:0},[{id:ItemID.cellHeavyWater    ,count:1,data:0}]);

    Recipe.addCanningMachineRecipe({id:ItemID.lithium6       ,data:0},{id:ItemID.cellLithium6   ,count:1,data:0},{id:ItemID.cellEmpty,data:0});
    Recipe.addCanningMachineRecipe({id:ItemID.lithium7       ,data:0},{id:ItemID.cellLithium7   ,count:1,data:0},{id:ItemID.cellEmpty,data:0});
    Recipe.addCanningMachineRecipe({id:ItemID.uranium235     ,data:0},{id:ItemID.cellUranium235 ,count:1,data:0},{id:ItemID.cellEmpty,data:0});
    Recipe.addCanningMachineRecipe({id:ItemID.uranium238     ,data:0},{id:ItemID.cellUranium238 ,count:1,data:0},{id:ItemID.cellEmpty,data:0});
	Recipe.addCanningMachineRecipe({id:ItemID.enrichedUranium,data:0},{id:BlockID.fuelRodUranium,count:1,data:0},{id:ItemID.cellEmpty,data:0});

	Recipe.addFusionReactorRecipe([{id:ItemID.cellHelium3,count:1,data:0},{id:ItemID.cellDeuterium,count:1,data:0}],[{id:ItemID.cellHelium,count:1,data:0}],112);
	Recipe.addFusionReactorRecipe([{id:ItemID.cellTritium,count:1,data:0},{id:ItemID.cellDeuterium,count:1,data:0}],[{id:ItemID.cellHelium,count:1,data:0}],224);
	Recipe.addFusionReactorRecipe([{id:ItemID.cellHelium3,count:1,data:0},{id:ItemID.cellLithium6 ,count:1,data:0}],[{id:ItemID.cellHelium,count:1,data:0}],336);

	Recipe.addElectrolyzerRecipe({id:ItemID.cellHeavyWater,count:40,data:0},[{id:ItemID.cellDeuterium ,count:40,data:0},{id:ItemID.cellTritium   ,count:1 ,data:0}]);
	Recipe.addElectrolyzerRecipe({id:ItemID.cellDeuterium ,count:50,data:0},[{id:ItemID.cellHelium3   ,count:20,data:0},{id:ItemID.cellTritium   ,count:20,data:0}]);
});