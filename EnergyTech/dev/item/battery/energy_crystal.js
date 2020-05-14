// [能量水晶]Energy Crystal
IDRegistry.genItemID("energyCrystal");
Item.createItem("energyCrystal","Energy Crystal",{name:"energy_crystal"},{stack:1,isTech:true});
ChargeItemRegistry.registerItem(ItemID.energyCrystal,"Eu",4194304,power(3),3,"storage",true);
Tool.registerTool(ItemID.energyCrystal,"Battery");

Tooltip.tier(ItemID.energyCrystal,3);
Item.setItemName(ItemID.energyCrystal,Tooltip.energyStored);

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("battery",Translation.translate("Battery"),[ItemID.energyCrystal]);

    RecipeRegistry.addAutoclaveRecipe({id:ItemID.dustEnergium,count:9,data:0},{id:ItemID.energyCrystal,count:1,data:Item.getMaxDamage(ItemID.energyCrystal)});
});