IDRegistry.genItemID("lithiumBattery");
Item.createItem("lithiumBattery","Lithium Battery",{name:"lithium_battery"},{stack:1,isTech:true});
ChargeItemRegistry.registerItem(ItemID.lithiumBattery,"Eu",16384,16,"storage",true,true);

ETTool.addTooltip(ItemID.lithiumBattery,Translation.translate("Power Tier: ") + 1);
Item.registerNameOverrideFunction(ItemID.lithiumBattery,function(item,name){
    return name + ETTool.getTooltip(item.id) + "\n§7" + Translation.translate("Energy: ") + ChargeItemRegistry.getEnergyStored(item) + "Eu";
});

Item.registerIconOverrideFunction(ItemID.lithiumBattery,function(item,name){
	var capacity = Item.getMaxDamage(item.id) - 1;
	var energy = capacity - item.data + 1;
	return {name:"lithium_battery",meta:Math.round(energy / capacity * 6)}
});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.lithiumBattery,count:1,data:Item.getMaxDamage(ItemID.lithiumBattery)},[" a ","bcb","bcb"],["a",ItemID.coilTin,0,"b",ItemID.plateLeadAntimony,0,"c",ItemID.dustLithium,0]);
});