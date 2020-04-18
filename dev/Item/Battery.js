// [锂电池]Lithium Battery
IDRegistry.genItemID("lithiumBattery");
Item.createItem("lithiumBattery","Lithium Battery",{name:"lithium_battery"},{stack:1,isTech:true});
ChargeItemRegistry.registerItem(ItemID.lithiumBattery,"Eu",16384,power(1),1,"storage",true,true);
Tool.registerTool(ItemID.lithiumBattery,"Battery");

Item.addTooltip(ItemID.lithiumBattery,Translation.translate("Power Tier: ") + 1);
Item.setItemName(ItemID.lithiumBattery,ENERGY_STORED);

Item.registerIconOverrideFunction(ItemID.lithiumBattery,function(item,name){
	var capacity = Item.getMaxDamage(item.id) - 1,energy = capacity - item.data + 1;
	return {name:"lithium_battery",meta:Math.round(energy / capacity * 6)}
});

// [恩奈特电池]Enete Battery
IDRegistry.genItemID("eneteBattery");
Item.createItem("eneteBattery","Enete Battery",{name:"enete_battery"},{stack:1,isTech:true});
ChargeItemRegistry.registerItem(ItemID.eneteBattery,"Eu",147456,power(2),2,"storage",true,true);
Tool.registerTool(ItemID.eneteBattery,"Battery");

Item.addTooltip(ItemID.eneteBattery,Translation.translate("Power Tier: ") + 2);
Item.setItemName(ItemID.eneteBattery,ENERGY_STORED);

Item.registerIconOverrideFunction(ItemID.eneteBattery,function(item,name){
	var capacity = Item.getMaxDamage(item.id) - 1,energy = capacity - item.data + 1;
	return {name:"enete_battery",meta:Math.round(energy / capacity * 9)}
});

Callback.addCallback("PreLoaded",function(){
    // 合成
    Recipes.addShaped({id:ItemID.lithiumBattery ,count:1,data:Item.getMaxDamage(ItemID.lithiumBattery )},[" a ","bcb","bcb"],["a",ItemID.wireTin,0,"b",ItemID.plateLeadAntimony,0,"c",ItemID.dustLithium,0]);
    Recipes.addShaped({id:ItemID.eneteBattery,count:1,data:Item.getMaxDamage(ItemID.eneteBattery)},["ada","bcb","ada"],["a",ItemID.stickIron,0,"b",ItemID.partEnete,0,"c",ItemID.lithiumBattery,-1,"d",ItemID.plateIron,0]);
});