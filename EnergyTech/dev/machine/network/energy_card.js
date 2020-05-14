// 能源卡
IDRegistry.genItemID("energyCard");
Item.createItem("energyCard","Energy Card",{name:"energy_card"},{stack:1});
Tool.registerTool(ItemID.energyCard,"EnergyCard");

Item.setItemName(ItemID.energyCard,function(item,name,tooltip){
    if(item.extra){
        var x = Math.abs(item.extra.getInt("x")),y = Math.abs(item.extra.getInt("y")),z = Math.abs(item.extra.getInt("z"));
        return name + tooltip + "\n§7" + Translation.translate("Network IP: ") + x + "." + y + "." + z;
    }
    return name + tooltip;
});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.energyCard,count:1,data:0},[
        "aba",
        "cdc"
    ],["a",ItemID.plateIron,0,"b",ItemID.circuit,0,"c",ItemID.plateGold,0,"d",331,0]);
});