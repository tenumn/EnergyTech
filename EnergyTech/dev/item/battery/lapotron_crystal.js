// [兰波顿水晶]Lapotron Crystal
IDRegistry.genItemID("lapotronCrystal");
Item.createItem("lapotronCrystal","Lapotron Crystal",{name:"lapotron_crystal"},{stack:1,isTech:true});
ChargeItemRegistry.registerItem(ItemID.lapotronCrystal,"Eu",67108864,power(4),4,"storage",true);
Tool.registerTool(ItemID.lapotronCrystal,"Battery");

Tooltip.tier(ItemID.lapotronCrystal,4);
Item.setItemName(ItemID.lapotronCrystal,Tooltip.energyStored);

Callback.addCallback("PreLoaded",function(){
	Item.addCreativeGroup("battery",Translation.translate("Battery"),[ItemID.lapotronCrystal]);

	Recipes.addShaped({id:ItemID.lapotronCrystal,count:1,data:Item.getMaxDamage(ItemID.lapotronCrystal)},[
		"bab",
		"cdc",
		"bab"
	],["a",ItemID.circuitEnergyStorage,0,"b",ItemID.plateLapis,0,"c",ItemID.stickLapis,0,"d",ItemID.energyCrystal,0]);
});