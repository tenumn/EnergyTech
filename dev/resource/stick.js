// 铜棍
IDRegistry.genItemID("stickCopper");
Item.createItem("stickCopper","Copper Stick",{name:"stickCopper"});

// 锡棍
IDRegistry.genItemID("stickTin");
Item.createItem("stickTin","Tin Stick",{name:"stickTin"});

// 铁棍
IDRegistry.genItemID("stickIron");
Item.createItem("stickIron","Iron Stick",{name:"stickIron"});

// 钢棍
IDRegistry.genItemID("stickSteel");
Item.createItem("stickSteel","Steel Stick",{name:"stickSteel"});

// 金棍
IDRegistry.genItemID("stickGold");
Item.createItem("stickGold","Gold Stick",{name:"stickGold"});

// 钨棍
IDRegistry.genItemID("stickTungsten");
Item.createItem("stickTungsten","Tungsten Stick",{name:"stickTungsten"});

// 恩奈特合金棍
IDRegistry.genItemID("stickEnete");
Item.createItem("stickEnete","Enete Alloy Stick",{name:"stickEnete"});

// 铅锑合金棍
IDRegistry.genItemID("stickLeadAntimony");
Item.createItem("stickLeadAntimony","Lead-Antimony Alloy Stick",{name:"stickLeadAntimony"});


Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("stick",Translation.translate("Stick"),[
        ItemID.stickCopper,
        ItemID.stickTin,
        ItemID.stickIron,
        ItemID.stickSteel,
        ItemID.stickGold,
        ItemID.stickTungsten,
        ItemID.stickEnete,
        ItemID.stickLeadAntimony,
    ]);

    Recipe.addCuttingRecipe({id:ItemID.plateCopper,data:0},{id:ItemID.stickCopper,count:4,data:0});
    Recipe.addCuttingRecipe({id:ItemID.plateTin,data:0},{id:ItemID.stickTin,count:4,data:0});
    Recipe.addCuttingRecipe({id:ItemID.plateIron,data:0},{id:ItemID.stickIron,count:4,data:0});
    Recipe.addCuttingRecipe({id:ItemID.plateSteel,data:0},{id:ItemID.stickSteel,count:4,data:0});
    Recipe.addCuttingRecipe({id:ItemID.plateGold,data:0},{id:ItemID.stickGold,count:4,data:0});
    Recipe.addCuttingRecipe({id:ItemID.plateTungsten,data:0},{id:ItemID.stickTungsten,count:4,data:0});
    Recipe.addCuttingRecipe({id:ItemID.plateEnete,data:0},{id:ItemID.stickEnete,count:4,data:0});
    Recipe.addCuttingRecipe({id:ItemID.plateLeadAntimony,data:0},{id:ItemID.stickLeadAntimony,count:4,data:0});

    var cutter = Tool.getAllTool("Cutter");
    for(var i in cutter){
        Recipe.addShapeless({id:ItemID.stickCopper,count:4,data:0},[{id:ItemID.plateCopper,data:0},{id:ItemID.plateCopper,data:0}],cutter[i]);
        Recipe.addShapeless({id:ItemID.stickTin,count:4,data:0},[{id:ItemID.plateTin,data:0},{id:ItemID.plateTin,data:0}],cutter[i]);
        Recipe.addShapeless({id:ItemID.stickIron,count:4,data:0},[{id:ItemID.plateIron,data:0},{id:ItemID.plateIron,data:0}],cutter[i]);
        Recipe.addShapeless({id:ItemID.stickSteel,count:4,data:0},[{id:ItemID.plateSteel,data:0},{id:ItemID.plateSteel,data:0}],cutter[i]);
        Recipe.addShapeless({id:ItemID.stickGold,count:4,data:0},[{id:ItemID.plateGold,data:0},{id:ItemID.plateGold,data:0}],cutter[i]);
        Recipe.addShapeless({id:ItemID.stickTungsten,count:4,data:0},[{id:ItemID.plateTungsten,data:0},{id:ItemID.plateTungsten,data:0}],cutter[i]);
        Recipe.addShapeless({id:ItemID.stickLeadAntimony,count:4,data:0},[{id:ItemID.plateLeadAntimony,data:0},{id:ItemID.plateLeadAntimony,data:0}],cutter[i]);
    }
});