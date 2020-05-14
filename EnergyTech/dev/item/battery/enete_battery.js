// [恩奈特电池]Enete Battery
IDRegistry.genItemID("eneteBattery");
Item.createItem("eneteBattery","Enete Battery",{name:"enete_battery"},{stack:1,isTech:true});
ChargeItemRegistry.registerItem(ItemID.eneteBattery,"Eu",262144,power(2),2,"storage",true);
Tool.registerTool(ItemID.eneteBattery,"Battery");

Tooltip.tier(ItemID.eneteBattery,2);
Item.setItemName(ItemID.eneteBattery,Tooltip.energyStored);

Item.registerIconOverrideFunction(ItemID.eneteBattery,function(item,name){
	var capacity = Item.getMaxDamage(item.id) - 1,energy = capacity - item.data + 1;
	return {name:"enete_battery",meta:parseInt(energy / capacity * 9)}
});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("battery",Translation.translate("Battery"),[ItemID.eneteBattery]);

    Recipes.addShaped({id:ItemID.eneteBattery,count:1,data:Item.getMaxDamage(ItemID.eneteBattery)},[
		"bab",
		"cdc",
		"bab"
	],["a",ItemID.partEnete,0,"b",ItemID.plateEnete,0,"c",ItemID.stickEnete,0,"d",ItemID.dustEnete,0]);
});