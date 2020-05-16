// 粉碎铜矿石
IDRegistry.genItemID("crushedCopper");
IDRegistry.genItemID("crushedPurifiedCopper");
Item.createItem("crushedCopper","Crushed Copper Ore",{name:"crushed_copper"});
Item.createItem("crushedPurifiedCopper","Purified Crushed Copper Ore",{name:"purified_copper"});

// 粉碎锡石矿石
IDRegistry.genItemID("crushedCassiterite");
IDRegistry.genItemID("crushedPurifiedCassiterite");
Item.createItem("crushedCassiterite","Crushed Cassiterite Ore",{name:"crushed_cassiterite"});
Item.createItem("crushedPurifiedCassiterite","Purified Crushed Cassiterite Ore",{name:"purified_cassiterite"});

//粉碎方铅矿石
IDRegistry.genItemID("crushedGalena");
IDRegistry.genItemID("crushedPurifiedGalena");
Item.createItem("crushedGalena","Crushed Galena Ore",{name:"crushed_galena"});
Item.createItem("crushedPurifiedGalena","Purified Crushed Galena Ore",{name:"purified_galena"});

// 粉碎铁矿石
IDRegistry.genItemID("crushedIron");
IDRegistry.genItemID("crushedPurifiedIron");
Item.createItem("crushedIron","Crushed Iron Ore",{name:"crushed_iron"});
Item.createItem("crushedPurifiedIron","Purified Crushed Iron Ore",{name:"purified_iron"});

// 粉碎金矿石
IDRegistry.genItemID("crushedGold");
IDRegistry.genItemID("crushedPurifiedGold");
Item.createItem("crushedGold","Crushed Gold Ore",{name:"crushed_gold"});
Item.createItem("crushedPurifiedGold","Purified Crushed Gold Ore",{name:"purified_gold"});

// 粉碎锂辉石矿石
IDRegistry.genItemID("crushedSpodumene");
IDRegistry.genItemID("crushedPurifiedSpodumene");
Item.createItem("crushedSpodumene","Crushed Spodumene Ore",{name:"crushed_spodumene"});
Item.createItem("crushedPurifiedSpodumene","Purified Crushed Spodumene Ore",{name:"purified_spodumene"});

// 粉碎钨矿石
IDRegistry.genItemID("crushedTungsten");
IDRegistry.genItemID("crushedPurifiedTungsten");
Item.createItem("crushedTungsten","Crushed Tungsten Ore",{name:"crushed_tungsten"});
Item.createItem("crushedPurifiedTungsten","Purified Crushed Tungsten Ore",{name:"purified_tungsten"});

// 粉碎铀矿石
IDRegistry.genItemID("crushedUranium");
IDRegistry.genItemID("crushedPurifiedUranium");
Item.createItem("crushedUranium","Crushed Uranium Ore",{name:"crushed_uranium"});
Item.createItem("crushedPurifiedUranium","Purified Crushed Uranium Ore",{name:"purified_uranium"});

// 粉碎银矿石
IDRegistry.genItemID("crushedSilver");
IDRegistry.genItemID("crushedPurifiedSilver");
Item.createItem("crushedSilver","Crushed Silver Ore",{name:"crushed_silver"});
Item.createItem("crushedPurifiedSilver","Purified Crushed Silver Ore",{name:"purified_silver"});

// 粉碎黝铜矿石
IDRegistry.genItemID("crushedTetrahedrite");
IDRegistry.genItemID("crushedPurifiedTetrahedrite");
Item.createItem("crushedTetrahedrite","Crushed Tetrahedrite Ore",{name:"crushed_tetrahedrite"});
Item.createItem("crushedPurifiedTetrahedrite","Purified Crushed Tetrahedrite Ore",{name:"purified_tetrahedrite"});

// 粉碎铝土矿石
IDRegistry.genItemID("crushedBauxite");
IDRegistry.genItemID("crushedPurifiedBauxite");
Item.createItem("crushedBauxite","Crushed Bauxite Ore",{name:"crushed_bauxite"});
Item.createItem("crushedPurifiedBauxite","Purified Crushed Bauxite Ore",{name:"purified_bauxite"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("crushed",Translation.translate("Crushed Ore"),[
        ItemID.crushedCopper,
        ItemID.crushedCassiterite,
        ItemID.crushedGalena,
        ItemID.crushedIron,
        ItemID.crushedGold,
        ItemID.crushedSpodumene,
        ItemID.crushedTungsten,
        ItemID.crushedUranium,
        ItemID.crushedSilver,
        ItemID.crushedTetrahedrite,
        ItemID.crushedBauxite
    ]);

    Item.addCreativeGroup("purified",Translation.translate("Purified Crushed Ore"),[
        ItemID.crushedPurifiedCopper,
        ItemID.crushedPurifiedCassiterite,
        ItemID.crushedPurifiedGalena,
        ItemID.crushedPurifiedIron,
        ItemID.crushedPurifiedGold,
        ItemID.crushedPurifiedSpodumene,
        ItemID.crushedPurifiedTungsten,
        ItemID.crushedPurifiedUranium,
        ItemID.crushedPurifiedSilver,
        ItemID.crushedPurifiedTetrahedrite,
        ItemID.crushedPurifiedBauxite
    ]);

    Recipes.addFurnace(ItemID.crushedCopper,ItemID.ingotCopper);
    Recipes.addFurnace(ItemID.crushedCassiterite,ItemID.ingotTin);
    Recipes.addFurnace(ItemID.crushedGalena,ItemID.ingotLead);
    Recipes.addFurnace(ItemID.crushedIron,265);
    Recipes.addFurnace(ItemID.crushedGold,266);
    Recipes.addFurnace(ItemID.crushedUranium,ItemID.ingotUranium);
    Recipes.addFurnace(ItemID.crushedSilver,ItemID.ingotSilver);
    Recipes.addFurnace(ItemID.crushedTetrahedrite,ItemID.ingotCopper);
    Recipes.addFurnace(ItemID.crushedBauxite,ItemID.ingotAluminium);

    Recipes.addFurnace(ItemID.crushedPurifiedCopper,ItemID.ingotCopper);
    Recipes.addFurnace(ItemID.crushedPurifiedCassiterite,ItemID.ingotTin);
    Recipes.addFurnace(ItemID.crushedPurifiedGalena,ItemID.ingotLead);
    Recipes.addFurnace(ItemID.crushedPurifiedIron,265);
    Recipes.addFurnace(ItemID.crushedPurifiedGold,266);
    Recipes.addFurnace(ItemID.crushedPurifiedUranium,ItemID.ingotUranium);
    Recipes.addFurnace(ItemID.crushedPurifiedSilver,ItemID.ingotSilver);
    Recipes.addFurnace(ItemID.crushedPurifiedTetrahedrite,ItemID.ingotCopper);
    Recipes.addFurnace(ItemID.crushedPurifiedBauxite,ItemID.ingotAluminium);

    RecipeRegistry.addAutoSaieveRecipe({id:13,data:0},[
        {id:ItemID.crushedCopper,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedCassiterite,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedGalena,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedIron,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedGold,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedSpodumene,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedTungsten,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedUranium,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedSilver,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedTetrahedrite,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedBauxite,minCount:1,maxCount:1,data:0,random:16}
    ]);

    RecipeRegistry.addCrusherRecipe({id:BlockID.oreCopper,data:0},{id:ItemID.crushedCopper,count:2,data:0});
    RecipeRegistry.addCrusherRecipe({id:BlockID.oreCassiterite,data:0},{id:ItemID.crushedCassiterite,count:2,data:0});
    RecipeRegistry.addCrusherRecipe({id:BlockID.oreGalena,data:0},{id:ItemID.crushedGalena,count:2,data:0});
    RecipeRegistry.addCrusherRecipe({id:15,data:0},{id:ItemID.crushedIron,count:2,data:0});
    RecipeRegistry.addCrusherRecipe({id:14,data:0},{id:ItemID.crushedGold,count:2,data:0});
    RecipeRegistry.addCrusherRecipe({id:BlockID.oreSpodumene,data:0},{id:ItemID.crushedSpodumene,count:2,data:0});
    RecipeRegistry.addCrusherRecipe({id:BlockID.oreTungsten,data:0},{id:ItemID.crushedTungsten,count:2,data:0});
    RecipeRegistry.addCrusherRecipe({id:BlockID.oreUranium,data:0},{id:ItemID.crushedUranium,count:2,data:0});
    RecipeRegistry.addCrusherRecipe({id:BlockID.oreSilver,data:0},{id:ItemID.crushedSilver,count:2,data:0});
    RecipeRegistry.addCrusherRecipe({id:BlockID.oreTetrahedrite,data:0},{id:ItemID.crushedTetrahedrite,count:2,data:0});
    RecipeRegistry.addCrusherRecipe({id:BlockID.oreBauxite,data:0},{id:ItemID.crushedBauxite,count:2,data:0});

    var hammer = Tool.getAllTool("Hammer");
    for(let i in hammer){
        RecipeRegistry.addShapeless({id:ItemID.crushedCopper,count:1,data:0},[{id:BlockID.oreCopper,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.crushedCassiterite,count:1,data:0},[{id:BlockID.oreCassiterite,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.crushedGalena,count:1,data:0},[{id:BlockID.oreGalena,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.crushedIron,count:1,data:0},[{id:15,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.crushedGold,count:1,data:0},[{id:14,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.crushedSpodumene,count:1,data:0},[{id:BlockID.oreSpodumene,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.crushedTungsten,count:1,data:0},[{id:BlockID.oreTungsten,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.crushedUranium,count:1,data:0},[{id:BlockID.oreUranium,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.crushedSilver,count:1,data:0},[{id:BlockID.oreSilver,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.crushedTetrahedrite,count:1,data:0},[{id:BlockID.oreTetrahedrite,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.crushedBauxite,count:1,data:0},[{id:BlockID.oreBauxite,data:0}],hammer[i]);
    }

    RecipeRegistry.addBlastFurnaceRecipe({id:ItemID.crushedTungsten,data:0},[{id:ItemID.ingotTungsten,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
    RecipeRegistry.addBlastFurnaceRecipe({id:ItemID.crushedPurifiedTungsten,data:0},[{id:ItemID.ingotTungsten,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
    
    RecipeRegistry.addOreWasherRecipe({id:ItemID.crushedCopper,data:0},[{id:ItemID.crushedPurifiedCopper,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.crushedCassiterite,data:0},[{id:ItemID.crushedPurifiedCassiterite,count:1,data:0},{id:ItemID.dustSmallIron,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.crushedGalena,data:0},[{id:ItemID.crushedPurifiedGalena,count:1,data:0},{id:ItemID.dustSmallCopper,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.crushedIron,data:0},[{id:ItemID.crushedPurifiedIron,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.crushedGold,data:0},[{id:ItemID.crushedPurifiedGold,count:1,data:0},{id:ItemID.dustSmallSilver,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.crushedSpodumene,data:0},[{id:ItemID.crushedPurifiedSpodumene,count:1,data:0},{id:ItemID.dustSmallLithium,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.crushedTungsten,data:0},[{id:ItemID.crushedPurifiedTungsten,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.crushedUranium,data:0},[{id:ItemID.crushedPurifiedUranium,count:1,data:0},{id:ItemID.dustSmallUranium,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.crushedSilver,data:0},[{id:ItemID.crushedPurifiedSilver,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.crushedTetrahedrite,data:0},[{id:ItemID.crushedPurifiedTetrahedrite,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.crushedBauxite,data:0},[{id:ItemID.crushedPurifiedBauxite,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedCopper,count:1,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedCassiterite,count:1,data:0},[{id:ItemID.dustTin,count:1,data:0},{id:ItemID.dustSmallIron,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedGalena,count:1,data:0},[{id:ItemID.dustLead,count:1,data:0},{id:ItemID.dustSmallCopper,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedIron,count:1,data:0},[{id:ItemID.dustIron,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedGold,count:1,data:0},[{id:ItemID.dustGold,count:1,data:0},{id:ItemID.dustSmallSilver,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedSpodumene,count:1,data:0},[{id:ItemID.smallLithium6,count:1,data:0},{id:ItemID.lithium7,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedTungsten,count:1,data:0},[{id:ItemID.dustTungsten,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedUranium,count:1,data:0},[{id:ItemID.smallUranium235,count:1,data:0},{id:ItemID.uranium238,count:4,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedSilver,count:1,data:0},[{id:ItemID.dustSilver,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedTetrahedrite,count:1,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedBauxite,count:1,data:0},[{id:ItemID.dustAluminium,count:1,data:0},{id:ItemID.dustSmallAluminium,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);

    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedPurifiedCopper,count:1,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedPurifiedCassiterite,count:1,data:0},[{id:ItemID.dustTin,count:1,data:0},{id:ItemID.dustSmallIron,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedPurifiedGalena,count:1,data:0},[{id:ItemID.dustLead,count:1,data:0},{id:ItemID.dustSmallCopper,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedPurifiedIron,count:1,data:0},[{id:ItemID.dustIron,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedPurifiedGold,count:1,data:0},[{id:ItemID.dustGold,count:1,data:0},{id:ItemID.dustSmallSilver,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedPurifiedSpodumene,count:1,data:0},[{id:ItemID.smallLithium6,count:2,data:0},{id:ItemID.lithium7,count:2,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedPurifiedTungsten,count:1,data:0},[{id:ItemID.dustTungsten,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedPurifiedUranium,count:1,data:0},[{id:ItemID.smallUranium235,count:2,data:0},{id:ItemID.uranium238,count:5,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedPurifiedSilver,count:1,data:0},[{id:ItemID.dustSilver,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedPurifiedTetrahedrite,count:1,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallAntimony ,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedPurifiedBauxite,count:1,data:0},[{id:ItemID.dustAluminium,count:1,data:0},{id:ItemID.dustSmallAluminium,count:1,data:0}]);
});