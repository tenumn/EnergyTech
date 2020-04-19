// 铁制零件
IDRegistry.genItemID("partIron");
Item.createItem("partIron","Iron Part",{name:"partIron"});

// 锡制零件
IDRegistry.genItemID("partTin");
Item.createItem("partTin","Tin Part",{name:"partTin"});

// 铜制零件
IDRegistry.genItemID("partCopper");
Item.createItem("partCopper","Copper Part",{name:"partCopper"});

// 金制零件
IDRegistry.genItemID("partGold");
Item.createItem("partGold","Gold Part",{name:"partGold"});

// 钢制零件
IDRegistry.genItemID("partSteel");
Item.createItem("partSteel","Steel Part",{name:"partSteel"});

// 恩奈特特制零件
IDRegistry.genItemID("partEnete");
Item.createItem("partEnete","Enete Alloy Part",{name:"partEnete"});

// 铅锑特制零件
IDRegistry.genItemID("partLeadAntimony");
Item.createItem("partLeadAntimony","Lead-Antimony Alloy Part",{name:"partLeadAntimony"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("ET-Part",Translation.translate("Part"),[
        ItemID.partIron,
        ItemID.partTin,
        ItemID.partCopper,
        ItemID.partGold,
        ItemID.partSteel,
        ItemID.partEnete,
        ItemID.partLeadAntimony
    ]);

    Recipes.addShaped({id:ItemID.partIron,count:1,data:0},["ab","ba"],["a",ItemID.plateIron,0,"b",ItemID.stickIron,0]);
    Recipes.addShaped({id:ItemID.partTin,count:1,data:0},["ab","ba"],["a",ItemID.plateTin,0,"b",ItemID.stickTin,0]);
    Recipes.addShaped({id:ItemID.partCopper,count:1,data:0},["ab","ba"],["a",ItemID.plateCopper,0,"b",ItemID.stickCopper,0]);
    Recipes.addShaped({id:ItemID.partGold,count:1,data:0},["ab","ba"],["a",ItemID.plateGold,0,"b",ItemID.stickGold,0]);
    Recipes.addShaped({id:ItemID.partSteel,count:1,data:0},["ab","ba"],["a",ItemID.plateSteel,0,"b",ItemID.stickSteel,0]);
    Recipes.addShaped({id:ItemID.partEnete,count:1,data:0},["ab","ba"],["a",ItemID.plateEnete,0,"b",ItemID.stickEnete,0]);
    Recipes.addShaped({id:ItemID.partLeadAntimony,count:1,data:0},["ab","ba"],["a",ItemID.plateLeadAntimony,0,"b",ItemID.stickLeadAntimony,0]);
});