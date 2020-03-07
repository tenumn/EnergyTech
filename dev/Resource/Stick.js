IDRegistry.genItemID("stickCopper");
Item.createItem("stickCopper","Copper Stick",{name:"stickCopper"});

IDRegistry.genItemID("stickTin");
Item.createItem("stickTin","Tin Stick",{name:"stickTin"});

IDRegistry.genItemID("stickIron");
Item.createItem("stickIron","Iron Stick",{name:"stickIron"});

IDRegistry.genItemID("stickSteel");
Item.createItem("stickSteel","Steel Stick",{name:"stickSteel"});

IDRegistry.genItemID("stickGold");
Item.createItem("stickGold","Gold Stick",{name:"stickGold"});

IDRegistry.genItemID("stickTungsten");
Item.createItem("stickTungsten","Tungsten Stick",{name:"stickTungsten"});

IDRegistry.genItemID("stickSherlock");
Item.createItem("stickSherlock","Sherlock Alloy Stick",{name:"stickSherlock"});

IDRegistry.genItemID("stickLeadAntimony");
Item.createItem("stickLeadAntimony","Lead-Antimony Alloy Stick",{name:"stickLeadAntimony"});

Callback.addCallback("PreLoaded",function(){
    // 切割机
    ETRecipe.addCuttingRecipe({id:ItemID.plateCopper      ,data:0},{id:ItemID.stickCopper      ,count:4,data:0});
    ETRecipe.addCuttingRecipe({id:ItemID.plateTin         ,data:0},{id:ItemID.stickTin         ,count:4,data:0});
    ETRecipe.addCuttingRecipe({id:ItemID.plateIron        ,data:0},{id:ItemID.stickIron        ,count:4,data:0});
    ETRecipe.addCuttingRecipe({id:ItemID.plateSteel       ,data:0},{id:ItemID.stickSteel       ,count:4,data:0});
    ETRecipe.addCuttingRecipe({id:ItemID.plateGold        ,data:0},{id:ItemID.stickGold        ,count:4,data:0});
    ETRecipe.addCuttingRecipe({id:ItemID.plateTungsten    ,data:0},{id:ItemID.stickTungsten    ,count:4,data:0});
    ETRecipe.addCuttingRecipe({id:ItemID.plateLeadAntimony,data:0},{id:ItemID.stickLeadAntimony,count:4,data:0});

    var cutter = ETTool.getAllTool("Cutter");
    for(var i in cutter){
        ETRecipe.addShapeless({id:ItemID.stickCopper      ,count:4,data:0},[{id:ItemID.plateCopper      ,data:0},{id:ItemID.plateCopper      ,data:0}],cutter[i]);
        ETRecipe.addShapeless({id:ItemID.stickTin         ,count:4,data:0},[{id:ItemID.plateTin         ,data:0},{id:ItemID.plateTin         ,data:0}],cutter[i]);
        ETRecipe.addShapeless({id:ItemID.stickIron        ,count:4,data:0},[{id:ItemID.plateIron        ,data:0},{id:ItemID.plateIron        ,data:0}],cutter[i]);
        ETRecipe.addShapeless({id:ItemID.stickSteel       ,count:4,data:0},[{id:ItemID.plateSteel       ,data:0},{id:ItemID.plateSteel       ,data:0}],cutter[i]);
        ETRecipe.addShapeless({id:ItemID.stickGold        ,count:4,data:0},[{id:ItemID.plateGold        ,data:0},{id:ItemID.plateGold        ,data:0}],cutter[i]);
        ETRecipe.addShapeless({id:ItemID.stickTungsten    ,count:4,data:0},[{id:ItemID.plateTungsten    ,data:0},{id:ItemID.plateTungsten    ,data:0}],cutter[i]);
        ETRecipe.addShapeless({id:ItemID.stickLeadAntimony,count:4,data:0},[{id:ItemID.plateLeadAntimony,data:0},{id:ItemID.plateLeadAntimony,data:0}],cutter[i]);
    }
});