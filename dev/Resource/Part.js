IDRegistry.genItemID("partIron");
Item.createItem("partIron","Iron Part",{name:"partIron"});

IDRegistry.genItemID("partTin");
Item.createItem("partTin","Tin Part",{name:"partTin"});

IDRegistry.genItemID("partCopper");
Item.createItem("partCopper","Copper Part",{name:"partCopper"});

IDRegistry.genItemID("partGold");
Item.createItem("partGold","Gold Part",{name:"partGold"});

IDRegistry.genItemID("partSteel");
Item.createItem("partSteel","Steel Part",{name:"partSteel"});

IDRegistry.genItemID("partSherlock");
Item.createItem("partSherlock","Sherlock Alloy Part",{name:"partSherlock"});

IDRegistry.genItemID("partLeadAntimony");
Item.createItem("partLeadAntimony","Lead-Antimony Alloy Part",{name:"partLeadAntimony"});

Callback.addCallback("PreLoaded",function(){
    // 组
    Item.addCreativeGroup("ET-Part",Translation.translate("Part"),[
        ItemID.partIron        ,
        ItemID.partTin         ,
        ItemID.partCopper      ,
        ItemID.partGold        ,
        ItemID.partSteel       ,
        ItemID.partSherlock    ,
        ItemID.partLeadAntimony
    ]);

    // 合成
    Recipes.addShaped({id:ItemID.partIron        ,count:1,data:0},["ab","ba"],["a",ItemID.plateIron        ,0,"b",ItemID.stickIron         ,0]);
    Recipes.addShaped({id:ItemID.partTin         ,count:1,data:0},["ab","ba"],["a",ItemID.plateTin         ,0,"b",ItemID.stickTin          ,0]);
    Recipes.addShaped({id:ItemID.partCopper      ,count:1,data:0},["ab","ba"],["a",ItemID.plateCopper      ,0,"b",ItemID.stickCopper       ,0]);
    Recipes.addShaped({id:ItemID.partGold        ,count:1,data:0},["ab","ba"],["a",ItemID.plateGold        ,0,"b",ItemID.stickGold         ,0]);
    Recipes.addShaped({id:ItemID.partSteel       ,count:1,data:0},["ab","ba"],["a",ItemID.plateSteel       ,0,"b",ItemID.stickSteel        ,0]);
    Recipes.addShaped({id:ItemID.partSherlock    ,count:1,data:0},["ab","ba"],["a",ItemID.plateSherlock    ,0,"b",ItemID.stickSherlock     ,0]);
    Recipes.addShaped({id:ItemID.partLeadAntimony,count:1,data:0},["ab","ba"],["a",ItemID.plateLeadAntimony,0,"b",ItemID.stickLeadAntimony ,0]);
});