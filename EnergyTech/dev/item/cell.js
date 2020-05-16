IDRegistry.genItemID("cellEmpty");
Item.createItem("cellEmpty","Liquid Cell (Empty)",{name:"empty_cell"});
Item.setLiquidClip(ItemID.cellEmpty,true);

IDRegistry.genItemID("cellSteam");
Item.createItem("cellSteam","Liquid Cell (Steam)",{name:"steam_cell"});
Liquid.registerItem("steam",ItemID.cellEmpty,ItemID.cellSteam,1000);

IDRegistry.genItemID("cellWater");
Item.createItem("cellWater","Liquid Cell (Water)",{name:"water_cell"});
Liquid.registerItem("water",ItemID.cellEmpty,ItemID.cellWater,1000);

IDRegistry.genItemID("cellLava");
Item.createItem("cellLava","Liquid Cell (Lava)",{name:"lava_cell"});
Liquid.registerItem("lava",ItemID.cellEmpty,ItemID.cellLava,1000);

IDRegistry.genItemID("cellUranium235");
Item.createItem("cellUranium235","Liquid Cell (Uranium-235)",{name:"uranium235_cell"});
Liquid.registerItem("uranium235",ItemID.cellEmpty,ItemID.cellUranium235,1000);

IDRegistry.genItemID("cellUranium238");
Item.createItem("cellUranium238","Liquid Cell (Uranium-238)",{name:"uranium238_cell"});
Liquid.registerItem("uranium238",ItemID.cellEmpty,ItemID.cellUranium238,1000);

IDRegistry.genItemID("cellLithium6");
Item.createItem("cellLithium6","Liquid Cell (Lithium-6)",{name:"lithium6_cell"});
Liquid.registerItem("lithium6",ItemID.cellEmpty,ItemID.cellLithium6,1000);

IDRegistry.genItemID("cellLithium7");
Item.createItem("cellLithium7","Liquid Cell (Lithium-7)",{name:"lithium7_cell"});
Liquid.registerItem("lithium7",ItemID.cellEmpty,ItemID.cellLithium7,1000);

IDRegistry.genItemID("cellTritium");
Item.createItem("cellTritium","Liquid Cell (Tritium)",{name:"tritium_cell"});
Liquid.registerItem("tritium",ItemID.cellEmpty,ItemID.cellTritium,1000);

IDRegistry.genItemID("cellDeuterium");
Item.createItem("cellDeuterium","Liquid Cell (Deuterium)",{name:"deuterium_cell"});
Liquid.registerItem("deuterium",ItemID.cellEmpty,ItemID.cellDeuterium,1000);

IDRegistry.genItemID("cellHelium");
Item.createItem("cellHelium","Liquid Cell (Helium)",{name:"helium_cell"});
Liquid.registerItem("helium",ItemID.cellEmpty,ItemID.cellHelium,1000);

IDRegistry.genItemID("cellHelium3");
Item.createItem("cellHelium3","Liquid Cell (Helium-3)",{name:"helium3_cell"});
Liquid.registerItem("helium3",ItemID.cellEmpty,ItemID.cellHelium3,1000);

IDRegistry.genItemID("cellDistilledWater");
Item.createItem("cellDistilledWater","Liquid Cell (Distilled Water)",{name:"distilled_water_cell"});
Liquid.registerItem("distilledWater",ItemID.cellEmpty,ItemID.cellDistilledWater,1000);

IDRegistry.genItemID("cellHeavyWater");
Item.createItem("cellHeavyWater","Liquid Cell (Heavy Water)",{name:"heavy_water_cell"});
Liquid.registerItem("heavyWater",ItemID.cellEmpty,ItemID.cellHeavyWater,1000);

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

Item.registerUseFunction("cellWater",function(coords){
	var x = coords.relative.x,y = coords.relative.y,z = coords.relative.z;
	var tile = World.getTileEntity(coords.x,coords.y,coords.z),id = World.getBlockID(x,y,z);
	if(!tile && (id == 0 || id > 7 && id < 12)){
		World.setBlock(x,y,z,8);
		Player.addItemToInventory(ItemID.cellEmpty,1);
		Player.decreaseCarriedItem(1);
	}
});

Item.registerUseFunction("cellLava",function(coords){
	var x = coords.relative.x,y = coords.relative.y,z = coords.relative.z;
	var tile = World.getTileEntity(coords.x,coords.y,coords.z),id = World.getBlockID(x,y,z);
	if(!tile && (id == 0 || id > 7 && id < 12)){
		World.setBlock(x,y,z,10);      
		Player.addItemToInventory(ItemID.cellEmpty,1);
		Player.decreaseCarriedItem(1);
	}
});

Callback.addCallback("PreLoaded",function(){
	Item.addCreativeGroup("cell",Translation.translate("Cell"),[
		ItemID.cellEmpty,
		ItemID.cellSteam,
		ItemID.cellWater,
		ItemID.cellLava,
		ItemID.cellUranium,
		ItemID.cellUranium235,
		ItemID.cellUranium238,
		ItemID.cellLithium6,
		ItemID.cellLithium7,
		ItemID.cellTritium,
		ItemID.cellDeuterium,
		ItemID.cellHelium,
		ItemID.cellHelium3,
		ItemID.cellDistilledWater,
		ItemID.cellHeavyWater
	]);
	
	Recipes.addShaped({id:ItemID.cellEmpty,count:1,data:0},[
		"a",
		"b",
		"a"
	],["a",ItemID.plateTin,0,"b",102,0]);

	RecipeRegistry.addDistilleryRecipe({id:ItemID.cellWater,count:1,data:0},[{id:ItemID.cellDistilledWater,count:1,data:0}]);
	RecipeRegistry.addDistilleryRecipe({id:ItemID.cellDistilledWater,count:1,data:0},[{id:ItemID.cellHeavyWater,count:1,data:0}]);

    RecipeRegistry.addCanningMachineRecipe({id:ItemID.lithium6,data:0},{id:ItemID.cellLithium6,count:1,data:0},{id:ItemID.cellEmpty,data:0});
    RecipeRegistry.addCanningMachineRecipe({id:ItemID.lithium7,data:0},{id:ItemID.cellLithium7,count:1,data:0},{id:ItemID.cellEmpty,data:0});
    RecipeRegistry.addCanningMachineRecipe({id:ItemID.uranium235,data:0},{id:ItemID.cellUranium235,count:1,data:0},{id:ItemID.cellEmpty,data:0});
    RecipeRegistry.addCanningMachineRecipe({id:ItemID.uranium238,data:0},{id:ItemID.cellUranium238,count:1,data:0},{id:ItemID.cellEmpty,data:0});
	RecipeRegistry.addCanningMachineRecipe({id:ItemID.enrichedUraniumDepleted,data:0},{id:ItemID.fuelRodUranium,count:1,data:0},{id:ItemID.cellEmpty,data:0});

	RecipeRegistry.addFusionReactorRecipe([{liquid:"helium3",mB:125},{liquid:"deuterium",mB:125}],{liquid:"plasmaHelium",mB:125});
	RecipeRegistry.addFusionReactorRecipe([{liquid:"tritium",mB:125},{liquid:"deuterium",mB:125}],{liquid:"plasmaHelium",mB:125});

	RecipeRegistry.addElectrolyzerRecipe({id:ItemID.cellHeavyWater,count:40,data:0},[{id:ItemID.cellDeuterium,count:40,data:0},{id:ItemID.cellTritium,count:1,data:0}]);
	RecipeRegistry.addElectrolyzerRecipe({id:ItemID.cellDeuterium,count:50,data:0},[{id:ItemID.cellHelium3,count:20,data:0},{id:ItemID.cellTritium,count:20,data:0}]);
});