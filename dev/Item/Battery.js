// [锂电池]Lithium Battery
IDRegistry.genItemID("lithiumBattery");
Item.createItem("lithiumBattery","Lithium Battery",{name:"lithium_battery"},{stack:1,isTech:true});
ChargeItemRegistry.registerItem(ItemID.lithiumBattery,"Eu",16384,16,"storage",true,true);

ETTool.addTooltip(ItemID.lithiumBattery,Translation.translate("Power Tier: ") + 1);
Item.registerNameOverrideFunction(ItemID.lithiumBattery,function(item,name){
    return name + ETTool.getTooltip(item.id) + "\n§7" + Translation.translate("Energy: ") + ChargeItemRegistry.getEnergyStored(item) + "Eu";
});

Item.registerIconOverrideFunction(ItemID.lithiumBattery,function(item,name){
	var capacity = Item.getMaxDamage(item.id) - 1,energy = capacity - item.data + 1;
	return {name:"lithium_battery",meta:Math.round(energy / capacity * 6)}
});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.lithiumBattery,count:1,data:Item.getMaxDamage(ItemID.lithiumBattery)},[" a ","bcb","bcb"],["a",ItemID.coilTin,0,"b",ItemID.plateLeadAntimony,0,"c",ItemID.dustLithium,0]);
});

// [夏洛克电池]Sherlock Battery
IDRegistry.genItemID("sherlockBattery");
Item.createItem("sherlockBattery","Sherlock Battery",{name:"sherlock_battery"},{stack:1,isTech:true});
ChargeItemRegistry.registerItem(ItemID.sherlockBattery,"Eu",147456,64,"storage",true,true);

ETTool.addTooltip(ItemID.sherlockBattery,Translation.translate("Power Tier: ") + 2);
Item.registerNameOverrideFunction(ItemID.sherlockBattery,function(item,name){
    return name + ETTool.getTooltip(item.id) + "\n§7" + Translation.translate("Energy: ") + ChargeItemRegistry.getEnergyStored(item) + "Eu";
});

Item.registerIconOverrideFunction(ItemID.sherlockBattery,function(item,name){
	var capacity = Item.getMaxDamage(item.id) - 1,energy = capacity - item.data + 1;
	return {name:"sherlock_battery",meta:Math.round(energy / capacity * 9)}
});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.sherlockBattery,count:1,data:Item.getMaxDamage(ItemID.sherlockBattery)},["aba","bcb","aba"],["a",ItemID.partLeadAntimony,0,"b",ItemID.circuitEnergyStorage,0,"c",ItemID.lithiumBattery,-1]);
});