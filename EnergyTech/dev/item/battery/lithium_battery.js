// [锂电池]Lithium Battery
IDRegistry.genItemID("lithiumBattery");
Item.createItem("lithiumBattery","Lithium Battery",{name:"lithium_battery"},{stack:1,isTech:true});
ChargeItemRegistry.registerItem(ItemID.lithiumBattery,"Eu",16384,power(1),1,"storage",true);
Tool.registerTool(ItemID.lithiumBattery,"Battery");

Tooltip.tier(ItemID.lithiumBattery,1);
Item.setItemName(ItemID.lithiumBattery,Tooltip.energyStored);

Item.registerIconOverrideFunction(ItemID.lithiumBattery,function(item,name){
	var capacity = Item.getMaxDamage(item.id) - 1,energy = capacity - item.data + 1;
	return {name:"lithium_battery",meta:parseInt(energy / capacity * 6)}
});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("battery",Translation.translate("Battery"),[ItemID.lithiumBattery]);

    Recipes.addShaped({id:ItemID.lithiumBattery,count:1,data:Item.getMaxDamage(ItemID.lithiumBattery)},[
		" a ",
		"bcb",
		"bcb"
	],["a",ItemID.wireTin,0,"b",ItemID.plateLeadAntimony,0,"c",ItemID.dustLithium,0]);
});