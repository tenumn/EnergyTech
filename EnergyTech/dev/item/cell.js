// [液体单元 (空)]Liquid Cell (Empty)
IDRegistry.genItemID("liquidCellEmpty");
Item.createItem("liquidCellEmpty","Liquid Cell (Empty)",{name:"liquid_cell_empty"});
Item.setLiquidClip(ItemID.liquidCellEmpty,true);

// [液体单元 (水)]Liquid Cell (Water)
IDRegistry.genItemID("liquidCellWater");
Item.createItem("liquidCellWater","Liquid Cell (Water)",{name:"liquid_cell_water"});
Liquid.registerItem("water",ItemID.liquidCellEmpty,ItemID.liquidCellWater,1000);

Item.setItemName(ItemID.liquidCellWater,function(item,name,tooltip){
	return name + tooltip + "\n§7" + (Item.getMaxDamage(item.id) - item.data) + "mB";
});

// [液体单元 (岩浆)]Liquid Cell (Lava)
IDRegistry.genItemID("liquidCellLava");
Item.createItem("liquidCellLava","Liquid Cell (Lava)",{name:"liquid_cell_lava"});
Liquid.registerItem("lava",ItemID.liquidCellEmpty,ItemID.liquidCellLava,1000);

Item.setItemName(ItemID.liquidCellLava,function(item,name,tooltip){
	return name + tooltip + "\n§7" + (Item.getMaxDamage(item.id) - item.data) + "mB";
});

Callback.addCallback("PreLoaded",function(){
	Item.addCreativeGroup("liquidCell",Translation.translate("Liquid Cell"),[ItemID.liquidCellEmpty,ItemID.liquidCellWater,ItemID.liquidCellLava]);
	
	Recipes.addShaped({id:ItemID.liquidCellEmpty,count:1,data:0},[
		"a",
		"b",
		"a"
	],["a",ItemID.plateTin,0,"b",102,0]);

    RecipeRegistry.addCanningMachineRecipe({id:ItemID.lithium6,data:0},{id:ItemID.liquidCellLithium6,count:1,data:0},{id:ItemID.liquidCellEmpty,data:0});
    RecipeRegistry.addCanningMachineRecipe({id:ItemID.lithium7,data:0},{id:ItemID.liquidCellLithium7,count:1,data:0},{id:ItemID.liquidCellEmpty,data:0});
    RecipeRegistry.addCanningMachineRecipe({id:ItemID.uranium235,data:0},{id:ItemID.liquidCellUranium235,count:1,data:0},{id:ItemID.liquidCellEmpty,data:0});
    RecipeRegistry.addCanningMachineRecipe({id:ItemID.uranium238,data:0},{id:ItemID.liquidCellUranium238,count:1,data:0},{id:ItemID.liquidCellEmpty,data:0});
	RecipeRegistry.addCanningMachineRecipe({id:ItemID.enrichedUraniumDepleted,data:0},{id:ItemID.fuelRodUranium,count:1,data:0},{id:ItemID.liquidCellEmpty,data:0});
});

for(let i in JSON_LIQUID){
	var liquid = JSON_LIQUID[i],id = "liquidCell" + liquid.name.split(" ").join("").split("-").join("");
	
	IDRegistry.genItemID(id);
	
	Item.createItem(id,"Liquid Cell (" + liquid.name + ")",{name:"liquid_cell_" + liquid.name.split(" ").join("_").split("-").join("").toLowerCase()});
	
	Liquid.registerItem(i,ItemID.liquidCellEmpty,ItemID[id],liquid.mb);
	
	Item.addCreativeGroup("liquidCell",Translation.translate("Liquid Cell"),[ItemID[id]]);

	Item.setItemName(ItemID[id],Tooltip.liquidStored);
}

Item.registerUseFunction("liquidCellEmpty",function(coords,item,block){
	if(block.id > 7 && block.id < 12 && block.data == 0){
		World.setBlock(coords.x,coords.y,coords.z,0);
		if(block.id == 8 || block.id == 9){
			Player.addItemToInventory(ItemID.liquidCellWater,1);
		} else {
			Player.addItemToInventory(ItemID.liquidCellLava,1);
		}
		Player.decreaseCarriedItem(1);
	}
});

Item.registerUseFunction("liquidCellWater",function(coords){
	var x = coords.relative.x,y = coords.relative.y,z = coords.relative.z;
	var tile = World.getTileEntity(coords.x,coords.y,coords.z),id = World.getBlockID(x,y,z);
	if(!tile && (id == 0 || id > 7 && id < 12)){
		World.setBlock(x,y,z,8);
		Player.addItemToInventory(ItemID.liquidCellEmpty,1);
		Player.decreaseCarriedItem(1);
	}
});

Item.registerUseFunction("liquidCellLava",function(coords){
	var x = coords.relative.x,y = coords.relative.y,z = coords.relative.z;
	var tile = World.getTileEntity(coords.x,coords.y,coords.z),id = World.getBlockID(x,y,z);
	if(!tile && (id == 0 || id > 7 && id < 12)){
		World.setBlock(x,y,z,10);      
		Player.addItemToInventory(ItemID.liquidCellEmpty,1);
		Player.decreaseCarriedItem(1);
	}
});