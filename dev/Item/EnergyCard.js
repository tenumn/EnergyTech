// 能源卡
IDRegistry.genItemID("energyCard");
Item.createItem("energyCard","Energy Card",{name:"energyCard"},{stack:1});
Tool.registerTool(ItemID.energyCard,"EnergyCard");

wheat.item.setItemName(ItemID.energyCard,function(item,name,tooltip){
    if(item.extra){
        return name + tooltip + "\n§7" + Translation.translate("Network IP: ") + Math.abs(item.extra.getInt("network_x")) + "." + Math.abs(item.extra.getInt("network_y")) + "." + Math.abs(item.extra.getInt("network_z"));
    }
    return name + tooltip;
});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.energyCard,count:1,data:0},["aba","cdc"],["a",ItemID.plateIron,0,"b",ItemID.circuit,0,"c",ItemID.plateGold,0,"d",ItemID.plateRedstone,0]);
});