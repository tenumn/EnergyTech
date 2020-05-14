// 铜棍
IDRegistry.genItemID("stickCopper");
Item.createItem("stickCopper","Copper Stick",{name:"copper_stick"});

// 锡棍
IDRegistry.genItemID("stickTin");
Item.createItem("stickTin","Tin Stick",{name:"tin_stick"});

// 青铜棍
IDRegistry.genItemID("stickBronze");
Item.createItem("stickBronze","Bronze Stick",{name:"bronze_stick"});

// 铁棍
IDRegistry.genItemID("stickIron");
Item.createItem("stickIron","Iron Stick",{name:"iron_stick"});

// 钢棍
IDRegistry.genItemID("stickSteel");
Item.createItem("stickSteel","Steel Stick",{name:"steel_stick"});

// 金棍
IDRegistry.genItemID("stickGold");
Item.createItem("stickGold","Gold Stick",{name:"gold_stick"});

// 钨棍
IDRegistry.genItemID("stickTungsten");
Item.createItem("stickTungsten","Tungsten Stick",{name:"tungsten_stick"});

// 恩奈特合金棍
IDRegistry.genItemID("stickEnete");
Item.createItem("stickEnete","Enete Alloy Stick",{name:"enete_stick"});

// 铅锑合金棍
IDRegistry.genItemID("stickLeadAntimony");
Item.createItem("stickLeadAntimony","Lead-Antimony Alloy Stick",{name:"lead_antimony_stick"});

// 青金石棍
IDRegistry.genItemID("stickLapis");
Item.createItem("stickLapis","Lapis Stick",{name:"lapis_stick"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("stick",Translation.translate("Stick"),[
        ItemID.stickCopper,
        ItemID.stickTin,
        ItemID.stickBronze,
        ItemID.stickIron,
        ItemID.stickSteel,
        ItemID.stickGold,
        ItemID.stickTungsten,
        ItemID.stickEnete,
        ItemID.stickLeadAntimony,
        ItemID.stickLapis
    ]);

    RecipeRegistry.addCuttingRecipe({id:ItemID.plateCopper,data:0},{id:ItemID.stickCopper,count:4,data:0});
    RecipeRegistry.addCuttingRecipe({id:ItemID.plateTin,data:0},{id:ItemID.stickTin,count:4,data:0});
    RecipeRegistry.addCuttingRecipe({id:ItemID.plateBronze,data:0},{id:ItemID.stickBronze,count:4,data:0});
    RecipeRegistry.addCuttingRecipe({id:ItemID.plateIron,data:0},{id:ItemID.stickIron,count:4,data:0});
    RecipeRegistry.addCuttingRecipe({id:ItemID.plateSteel,data:0},{id:ItemID.stickSteel,count:4,data:0});
    RecipeRegistry.addCuttingRecipe({id:ItemID.plateGold,data:0},{id:ItemID.stickGold,count:4,data:0});
    RecipeRegistry.addCuttingRecipe({id:ItemID.plateTungsten,data:0},{id:ItemID.stickTungsten,count:4,data:0});
    RecipeRegistry.addCuttingRecipe({id:ItemID.plateEnete,data:0},{id:ItemID.stickEnete,count:4,data:0});
    RecipeRegistry.addCuttingRecipe({id:ItemID.plateLeadAntimony,data:0},{id:ItemID.stickLeadAntimony,count:4,data:0});
    RecipeRegistry.addCuttingRecipe({id:ItemID.plateLapis,data:0},{id:ItemID.stickLapis,count:4,data:0});

    var cutter = Tool.getAllTool("Cutter");
    for(let i in cutter){
        RecipeRegistry.addShapeless({id:ItemID.stickCopper,count:4,data:0},[{id:ItemID.plateCopper,data:0},{id:ItemID.plateCopper,data:0}],cutter[i]);
        RecipeRegistry.addShapeless({id:ItemID.stickTin,count:4,data:0},[{id:ItemID.plateTin,data:0},{id:ItemID.plateTin,data:0}],cutter[i]);
        RecipeRegistry.addShapeless({id:ItemID.stickBronze,count:4,data:0},[{id:ItemID.plateBronze,data:0},{id:ItemID.plateBronze,data:0}],cutter[i]);
        RecipeRegistry.addShapeless({id:ItemID.stickIron,count:4,data:0},[{id:ItemID.plateIron,data:0},{id:ItemID.plateIron,data:0}],cutter[i]);
        RecipeRegistry.addShapeless({id:ItemID.stickSteel,count:4,data:0},[{id:ItemID.plateSteel,data:0},{id:ItemID.plateSteel,data:0}],cutter[i]);
        RecipeRegistry.addShapeless({id:ItemID.stickGold,count:4,data:0},[{id:ItemID.plateGold,data:0},{id:ItemID.plateGold,data:0}],cutter[i]);
        RecipeRegistry.addShapeless({id:ItemID.stickTungsten,count:4,data:0},[{id:ItemID.plateTungsten,data:0},{id:ItemID.plateTungsten,data:0}],cutter[i]);
        RecipeRegistry.addShapeless({id:ItemID.stickLeadAntimony,count:4,data:0},[{id:ItemID.plateLeadAntimony,data:0},{id:ItemID.plateLeadAntimony,data:0}],cutter[i]);
        RecipeRegistry.addShapeless({id:ItemID.stickLapis,count:4,data:0},[{id:ItemID.plateLapis,data:0},{id:ItemID.plateLapis,data:0}],cutter[i]);
    }
});