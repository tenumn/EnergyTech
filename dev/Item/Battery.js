// [锂电池]Lithium Battery
IDRegistry.genItemID("lithiumBattery");
Item.createItem("lithiumBattery","Lithium Battery",{name:"lithium_battery"},{stack:1,isTech:true});
ChargeItemRegistry.registerItem(ItemID.lithiumBattery,"Eu",16384,power(1),1,"storage",true);
Tool.registerTool(ItemID.lithiumBattery,"Battery");

Tooltip.tier(ItemID.lithiumBattery,1);
Item.setItemName(ItemID.lithiumBattery,Tooltip.energyStored);

Item.registerIconOverrideFunction(ItemID.lithiumBattery,function(item,name){
	var capacity = Item.getMaxDamage(item.id) - 1,energy = capacity - item.data + 1;
	return {name:"lithium_battery",meta:Math.round(energy / capacity * 6)}
});

// [恩奈特电池]Enete Battery
IDRegistry.genItemID("eneteBattery");
Item.createItem("eneteBattery","Enete Battery",{name:"enete_battery"},{stack:1,isTech:true});
ChargeItemRegistry.registerItem(ItemID.eneteBattery,"Eu",262144,power(2),2,"storage",true);
Tool.registerTool(ItemID.eneteBattery,"Battery");

Tooltip.tier(ItemID.eneteBattery,2);
Item.setItemName(ItemID.eneteBattery,Tooltip.energyStored);

Item.registerIconOverrideFunction(ItemID.eneteBattery,function(item,name){
	var capacity = Item.getMaxDamage(item.id) - 1,energy = capacity - item.data + 1;
	return {name:"enete_battery",meta:Math.round(energy / capacity * 9)}
});

// [能量水晶]Energy Crystal
IDRegistry.genItemID("energyCrystal");
Item.createItem("energyCrystal","Energy Crystal",{name:"energy_crystal"},{stack:1,isTech:true});
ChargeItemRegistry.registerItem(ItemID.energyCrystal,"Eu",4194304,power(3),3,"storage",true);
Tool.registerTool(ItemID.energyCrystal,"Battery");

Tooltip.tier(ItemID.energyCrystal,3);
Item.setItemName(ItemID.energyCrystal,Tooltip.energyStored);

// [兰波顿水晶]Lapotron Crystal
IDRegistry.genItemID("lapotronCrystal");
Item.createItem("lapotronCrystal","Lapotron Crystal",{name:"lapotron_crystal"},{stack:1,isTech:true});
ChargeItemRegistry.registerItem(ItemID.lapotronCrystal,"Eu",67108864,power(4),4,"storage",true);
Tool.registerTool(ItemID.lapotronCrystal,"Battery");

Tooltip.tier(ItemID.lapotronCrystal,4);
Item.setItemName(ItemID.lapotronCrystal,Tooltip.energyStored);

Callback.addCallback("PreLoaded",function(){
    Recipe.addAutoclaveRecipe({id:ItemID.dustEnergium,count:9,data:0},{id:ItemID.energyCrystal,count:1,data:Item.getMaxDamage(ItemID.energyCrystal)});

    Recipes.addShaped({id:ItemID.lithiumBattery,count:1,data:Item.getMaxDamage(ItemID.lithiumBattery)},[
		" a ",
		"bcb",
		"bcb"
	],["a",ItemID.wireTin,0,"b",ItemID.plateLeadAntimony,0,"c",ItemID.dustLithium,0]);

    Recipes.addShaped({id:ItemID.eneteBattery,count:1,data:Item.getMaxDamage(ItemID.eneteBattery)},[
		"bab",
		"cdc",
		"bab"
	],["a",ItemID.partEnete,0,"b",ItemID.plateEnete,0,"c",ItemID.stickEnete,0,"d",ItemID.dustEnete,0]);

	Recipes.addShaped({id:ItemID.lapotronCrystal,count:1,data:Item.getMaxDamage(ItemID.lapotronCrystal)},[
		"bab",
		"cdc",
		"bab"
	],["a",ItemID.circuitEnergyStorage,0,"b",ItemID.plateLapis,0,"c",ItemID.stickLapis,0,"d",ItemID.energyCrystal,0]);
});