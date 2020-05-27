// [试管 (空)]Glass Tube (Empty)
IDRegistry.genItemID("glassTubeEmpty");
Item.createItem("glassTubeEmpty","Glass Tube (Empty)",{name:"glass_tube_empty"});
Item.setLiquidClip(ItemID.glassTubeEmpty,true);

// [试管 (水)]Glass Tube (Water)
IDRegistry.genItemID("glassTubeWater");
Item.createItem("glassTubeWater","Glass Tube (Water)",{name:"glass_tube_water"});
Liquid.registerItem("water",ItemID.glassTubeEmpty,ItemID.glassTubeWater,125);

Item.setItemName(ItemID.glassTubeWater,function(item,name,tooltip){
	return name + tooltip + "\n§7" + (Item.getMaxDamage(item.id) - item.data) + "mB";
});

// [试管 (岩浆)]Glass Tube (Lava)
IDRegistry.genItemID("glassTubeLava");
Item.createItem("glassTubeLava","Glass Tube (Lava)",{name:"glass_tube_lava"});
Liquid.registerItem("lava",ItemID.glassTubeEmpty,ItemID.glassTubeLava,125);

Item.setItemName(ItemID.glassTubeLava,function(item,name,tooltip){
	return name + tooltip + "\n§7" + (Item.getMaxDamage(item.id) - item.data) + "mB";
});

Callback.addCallback("PreLoaded",function(){
	Item.addCreativeGroup("glassTube",Translation.translate("Glass Tube"),[ItemID.glassTubeEmpty,ItemID.glassTubeWater,ItemID.glassTubeLava]);

	Recipes.addShaped({id:ItemID.glassTubeEmpty,count:1,data:0},["a","a"],["a",102,0]);

    RecipeRegistry.addElectrolyzerRecipe({id:ItemID.glassTubeWater,count:3,data:0},[{id:ItemID.glassTubeHeavyWater,count:2,data:0}]);
    
    RecipeRegistry.addDistilleryRecipe({id:ItemID.glassTubeWater,count:5,data:0},[{id:ItemID.glassTubeDistilledWater,count:4,data:0}]);
    
    RecipeRegistry.addFusionReactorRecipe([{id:ItemID.glassTubeHelium3,count:1,data:0},{id:ItemID.glassTubeDeuterium,count:1,data:0}],{id:ItemID.glassTubePlasmaHelium,count:1,data:0});
    RecipeRegistry.addFusionReactorRecipe([{id:ItemID.glassTubeTritium,count:1,data:0},{id:ItemID.glassTubeDeuterium,count:1,data:0}],{id:ItemID.glassTubePlasmaHelium,count:1,data:0});
});

for(let i in JSON_LIQUID){
	var liquid = JSON_LIQUID[i],id = "glassTube" + liquid.name.split(" ").join("").split("-").join("");

	IDRegistry.genItemID(id);
	
	Item.createItem(id,"Glass Tube (" + liquid.name + ")",{name:"glass_tube_" + liquid.name.split(" ").join("_").split("-").join("").toLowerCase()});
	
	Liquid.registerItem(i,ItemID.glassTubeEmpty,ItemID[id],125);
	
	Item.addCreativeGroup("glassTube",Translation.translate("Glass Tube"),[ItemID[id]]);

	Item.setItemName(ItemID[id],Tooltip.liquidStored);
}