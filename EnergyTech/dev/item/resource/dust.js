// 含杂铜粉
IDRegistry.genItemID("dustImpureCopper");
Item.createItem("dustImpureCopper","Impure Copper Dust",{name:"impure_copper_dust"});

// 含杂锡石粉
IDRegistry.genItemID("dustImpureCassiterite");
Item.createItem("dustImpureCassiterite","Impure Cassiterite Dust",{name:"impure_cassiterite_dust"});

// 含杂铅粉
IDRegistry.genItemID("dustImpureGalena");
Item.createItem("dustImpureGalena","Impure Galena Dust",{name:"impure_galena_dust"});

// 含杂铁粉
IDRegistry.genItemID("dustImpureIron");
Item.createItem("dustImpureIron","Impure Iron Dust",{name:"impure_iron_dust"});

// 含杂金粉
IDRegistry.genItemID("dustImpureGold");
Item.createItem("dustImpureGold","Impure Gold Dust",{name:"impure_gold_dust"});

// 含杂锂辉石粉
IDRegistry.genItemID("dustImpureSpodumene");
Item.createItem("dustImpureSpodumene","Impure Spodumene Dust",{name:"impure_lithium_dust"});

// 含杂钨粉
IDRegistry.genItemID("dustImpureTungsten");
Item.createItem("dustImpureTungsten","Impure Tungsten Dust",{name:"impure_tungsten_dust"});

// 含杂铀粉
IDRegistry.genItemID("dustImpureUranium");
Item.createItem("dustImpureUranium","Impure Uranium Dust",{name:"impure_uranium_dust"});

// 含杂银粉
IDRegistry.genItemID("dustImpureSilver");
Item.createItem("dustImpureSilver","Impure Silver Dust",{name:"impure_silver_dust"});

// 含杂黝铜粉
IDRegistry.genItemID("dustImpureTetrahedrite");
Item.createItem("dustImpureTetrahedrite","Impure Tetrahedrite Dust",{name:"impure_tetrahedrite_dust"});

// 含杂铝粉
IDRegistry.genItemID("dustImpureBauxite");
Item.createItem("dustImpureBauxite","Impure Bauxite Dust",{name:"impure_bauxite_dust"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("dustImpure",Translation.translate("Impure Dust"),[
        ItemID.dustImpureCopper,
        ItemID.dustImpureCassiterite,
        ItemID.dustImpureGalena,
        ItemID.dustImpureIron,
        ItemID.dustImpureGold,
        ItemID.dustImpureSpodumene,
        ItemID.dustImpureTungsten,
        ItemID.dustImpureUranium,
        ItemID.dustImpureSilver,
        ItemID.dustImpureTetrahedrite,
        ItemID.dustImpureBauxite     
    ]);

    RecipeRegistry.addAutoSaieveRecipe({id:12,data:0},[
        {id:ItemID.dustImpureCopper,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureCassiterite,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureGalena,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureIron,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureGold,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureSpodumene,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureTungsten,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureUranium,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureSilver,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureTetrahedrite,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureBauxite,minCount:1,maxCount:1,data:0,random:16}
    ]);

    Recipes.addFurnace(ItemID.dustImpureCopper,ItemID.ingotCopper);
    Recipes.addFurnace(ItemID.dustImpureCassiterite,ItemID.ingotTin);
    Recipes.addFurnace(ItemID.dustImpureGalena,ItemID.ingotLead);
    Recipes.addFurnace(ItemID.dustImpureIron,265);
    Recipes.addFurnace(ItemID.dustImpureGold,266);
    Recipes.addFurnace(ItemID.dustImpureUranium,ItemID.ingotUranium);
    Recipes.addFurnace(ItemID.dustImpureSilver,ItemID.ingotSilver);
    Recipes.addFurnace(ItemID.dustImpureTetrahedrite,ItemID.ingotCopper);
    Recipes.addFurnace(ItemID.dustImpureBauxite,ItemID.ingotAluminium);
    
    RecipeRegistry.addBlastFurnaceRecipe({id:ItemID.dustImpureTungsten,data:0},[{id:ItemID.ingotTungsten,count:1,data:0}]);

    RecipeRegistry.addOreWasherRecipe({id:ItemID.dustImpureCopper,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.dustImpureCassiterite,data:0},[{id:ItemID.dustTin,count:1,data:0},{id:ItemID.dustSmallIron,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.dustImpureGalena,data:0},[{id:ItemID.dustLead,count:1,data:0},{id:ItemID.dustSmallCopper,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.dustImpureIron,data:0},[{id:ItemID.dustIron,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.dustImpureGold,data:0},[{id:ItemID.dustGold,count:1,data:0},{id:ItemID.dustSmallSilver,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.dustImpureSpodumene,data:0},[{id:ItemID.dustLithium,count:1,data:0},{id:ItemID.dustSmallLithium,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.dustImpureTungsten,data:0},[{id:ItemID.dustTungsten,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.dustImpureUranium,data:0},[{id:ItemID.dustUranium,count:1,data:0},{id:ItemID.dustSmallUranium,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.dustImpureSilver,data:0},[{id:ItemID.dustSilver,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.dustImpureTetrahedrite,data:0},[{id:ItemID.dustTetrahedrite,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.dustImpureBauxite,data:0},[{id:ItemID.dustAluminium,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustImpureCopper,count:1,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustImpureCassiterite,count:1,data:0},[{id:ItemID.dustTin,count:1,data:0},{id:ItemID.dustSmallIron,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustImpureGalena,count:1,data:0},[{id:ItemID.dustLead,count:1,data:0},{id:ItemID.dustSmallCopper,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustImpureIron,count:1,data:0},[{id:ItemID.dustIron,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustImpureGold,count:1,data:0},[{id:ItemID.dustGold,count:1,data:0},{id:ItemID.dustSmallSilver,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustImpureSpodumene,count:1,data:0},[{id:ItemID.dustLithium,count:1,data:0},{id:ItemID.dustSmallLithium,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustImpureTungsten,count:1,data:0},[{id:ItemID.dustTungsten,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustImpureUranium,count:1,data:0},[{id:ItemID.smallUranium235,count:1,data:0},{id:ItemID.uranium238,count:4,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustImpureSilver,count:1,data:0},[{id:ItemID.dustSilver,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustImpureTetrahedrite,count:1,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustImpureBauxite,count:1,data:0},[{id:ItemID.dustAluminium,count:1,data:0},{id:ItemID.dustSmallAluminium,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    
    var mortar = Tool.getAllTool("Mortar");
    for(let i in mortar){
        RecipeRegistry.addShapeless({id:ItemID.dustImpureCopper,count:1,data:0},[{id:ItemID.crushedCopper,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustImpureCassiterite,count:1,data:0},[{id:ItemID.crushedCassiterite,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustImpureGalena,count:1,data:0},[{id:ItemID.crushedGalena,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustImpureIron,count:1,data:0},[{id:ItemID.crushedIron,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustImpureGold,count:1,data:0},[{id:ItemID.crushedGold,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustImpureSpodumene,count:1,data:0},[{id:ItemID.crushedSpodumene,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustImpureTungsten,count:1,data:0},[{id:ItemID.crushedTungsten,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustImpureUranium,count:1,data:0},[{id:ItemID.crushedUranium,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustImpureSilver,count:1,data:0},[{id:ItemID.crushedSilver,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustImpureTetrahedrite,count:1,data:0},[{id:ItemID.crushedTetrahedrite,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustImpureBauxite,count:1,data:0},[{id:ItemID.crushedBauxite,count:1,data:0}],mortar[i]);
    }
    
    RecipeRegistry.addMaceratorRecipe({id:BlockID.oreCopper,data:0},{id:ItemID.dustImpureCopper,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:BlockID.oreCassiterite,data:0},{id:ItemID.dustImpureCassiterite,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:BlockID.oreGalena,data:0},{id:ItemID.dustImpureGalena,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:15,data:0},{id:ItemID.dustImpureIron,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:14,data:0},{id:ItemID.dustImpureGold,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:BlockID.oreSpodumene,data:0},{id:ItemID.dustImpureSpodumene,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:BlockID.oreTungsten,data:0},{id:ItemID.dustImpureTungsten,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:BlockID.oreUranium,data:0},{id:ItemID.dustImpureUranium,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:BlockID.oreSilver,data:0},{id:ItemID.dustImpureSilver,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:BlockID.oreTetrahedrite,data:0},{id:ItemID.dustImpureTetrahedrite,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:BlockID.oreBauxite,data:0},{id:ItemID.dustImpureBauxite,count:2,data:0});

    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedCopper,data:0},{id:ItemID.dustImpureCopper,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedCassiterite,data:0},{id:ItemID.dustImpureCassiterite,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedGalena,data:0},{id:ItemID.dustImpureGalena,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedIron,data:0},{id:ItemID.dustImpureIron,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedGold,data:0},{id:ItemID.dustImpureGold,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedSpodumene,data:0},{id:ItemID.dustImpureSpodumene,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedTungsten,data:0},{id:ItemID.dustImpureTungsten,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedUranium,data:0},{id:ItemID.dustImpureUranium,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedSilver,data:0},{id:ItemID.dustImpureSilver,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedTetrahedrite,data:0},{id:ItemID.dustImpureTetrahedrite,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedBauxite,data:0},{id:ItemID.dustImpureBauxite,count:2,data:0});
});

// ==================================================================================================== //

// 石粉
IDRegistry.genItemID("dustStone");
IDRegistry.genItemID("dustSmallStone");
Item.createItem("dustStone","Stone Dust",{name:"stone_dust"});
Item.createItem("dustSmallStone","Small Pile of Stone Dust",{name:"small_stone_dust"});

// 末影粉
IDRegistry.genItemID("dustEnder");
IDRegistry.genItemID("dustSmallEnder");
Item.createItem("dustEnder","Ender Dust",{name:"ender_dust"});
Item.createItem("dustSmallEnder","Small Pile of Ender Dust",{name:"small_ender_dust"});

// 燧石粉
IDRegistry.genItemID("dustFlint");
IDRegistry.genItemID("dustSmallFlint");
Item.createItem("dustFlint","Flint Dust",{name:"flint_dust"});
Item.createItem("dustSmallFlint","Small Pile of Flint Dust",{name:"small_flint_dust"});

// 铜粉
IDRegistry.genItemID("dustCopper");
IDRegistry.genItemID("dustSmallCopper");
Item.createItem("dustCopper","Copper Dust",{name:"copper_dust"});
Item.createItem("dustSmallCopper","Small Pile of Copper Dust",{name:"small_copper_dust"});

// 锡粉
IDRegistry.genItemID("dustTin");
IDRegistry.genItemID("dustSmallTin");
Item.createItem("dustTin","Tin Dust",{name:"tin_dust"});
Item.createItem("dustSmallTin","Small Pile of Tin Dust",{name:"small_tin_dust"});

// 青铜粉
IDRegistry.genItemID("dustBronze");
IDRegistry.genItemID("dustSmallBronze");
Item.createItem("dustBronze","Bronze Dust",{name:"bronze_dust"});
Item.createItem("dustSmallBronze","Small Pile of Bronze Dust",{name:"small_bronze_dust"});

// 铅粉
IDRegistry.genItemID("dustLead");
IDRegistry.genItemID("dustSmallLead");
Item.createItem("dustLead","Lead Dust",{name:"lead_dust"});
Item.createItem("dustSmallLead","Small Pile of Lead Dust",{name:"small_lead_dust"});

// 铁粉
IDRegistry.genItemID("dustIron");
IDRegistry.genItemID("dustSmallIron");
Item.createItem("dustIron","Iron Dust",{name:"iron_dust"});
Item.createItem("dustSmallIron","Small Pile of Iron Dust",{name:"small_iron_dust"});

// 钢粉
IDRegistry.genItemID("dustSteel");
IDRegistry.genItemID("dustSmallSteel");
Item.createItem("dustSteel","Steel Dust",{name:"steel_dust"});
Item.createItem("dustSmallSteel","Small Pile of Steel Dust",{name:"small_steel_dust"});

// 金粉
IDRegistry.genItemID("dustGold");
IDRegistry.genItemID("dustSmallGold");
Item.createItem("dustGold","Gold Dust",{name:"gold_dust"});
Item.createItem("dustSmallGold","Small Pile of Gold Dust",{name:"small_gold_dust"});

// 锑粉
IDRegistry.genItemID("dustAntimony");
IDRegistry.genItemID("dustSmallAntimony");
Item.createItem("dustAntimony","Antimony Dust",{name:"antimony_dust"});
Item.createItem("dustSmallAntimony","Small Pile of Antimony Dust",{name:"small_antimony_dust"});

// 锂粉
IDRegistry.genItemID("dustLithium");
IDRegistry.genItemID("dustSmallLithium");
Item.createItem("dustLithium","Lithium Dust",{name:"lithium_dust"});
Item.createItem("dustSmallLithium","Small Pile of Lithium Dust",{name:"small_lithium_dust"});

// 碳粉
IDRegistry.genItemID("dustCarbon");
IDRegistry.genItemID("dustSmallCarbon");
Item.createItem("dustCarbon","Carbon Dust",{name:"carbon_dust"});
Item.createItem("dustSmallCarbon","Small Pile of Carbon Dust",{name:"small_carbon_dust"});

// 钨粉
IDRegistry.genItemID("dustTungsten");
IDRegistry.genItemID("dustSmallTungsten");
Item.createItem("dustTungsten","Tungsten Dust",{name:"tungsten_dust"});
Item.createItem("dustSmallTungsten","Small Pile of Tungsten Dust",{name:"small_tungsten_dust"});

// 铀粉
IDRegistry.genItemID("dustUranium");
IDRegistry.genItemID("dustSmallUranium");
Item.createItem("dustUranium","Uranium Dust",{name:"uranium_dust"});
Item.createItem("dustSmallUranium","Small Pile of Uranium Dust",{name:"small_uranium_dust"});

// 银粉
IDRegistry.genItemID("dustSilver");
IDRegistry.genItemID("dustSmallSilver");
Item.createItem("dustSilver","Silver Dust",{name:"silver_dust"});
Item.createItem("dustSmallSilver","Small Pile of Silver Dust",{name:"small_silver_dust"});

// 黝铜粉
IDRegistry.genItemID("dustTetrahedrite");
IDRegistry.genItemID("dustSmallTetrahedrite");
Item.createItem("dustTetrahedrite","Tetrahedrite Dust",{name:"tetrahedrite_dust"});
Item.createItem("dustSmallTetrahedrite","Small Pile of Tetrahedrite Dust",{name:"small_tetrahedrite_dust"});

// 铝粉
IDRegistry.genItemID("dustAluminium");
IDRegistry.genItemID("dustSmallAluminium");
Item.createItem("dustAluminium","Aluminium Dust",{name:"aluminium_dust"});
Item.createItem("dustSmallAluminium","Small Pile of Aluminium Dust",{name:"small_aluminium_dust"});

// 钻石粉
IDRegistry.genItemID("dustDiamond");
IDRegistry.genItemID("dustSmallDiamond");
Item.createItem("dustDiamond","Diamond Dust",{name:"diamond_dust"});
Item.createItem("dustSmallDiamond","Small Pile of Diamond Dust",{name:"small_diamond_dust"});

// 恩奈特合金粉
IDRegistry.genItemID("dustEnete");
IDRegistry.genItemID("dustSmallEnete");
Item.createItem("dustEnete","Enete Alloy Dust",{name:"enete_dust"});
Item.createItem("dustSmallEnete","Small Pile of Enete Alloy Dust",{name:"small_enete_dust"});

// 铅锑合金粉
IDRegistry.genItemID("dustLeadAntimony");
IDRegistry.genItemID("dustSmallLeadAntimony");
Item.createItem("dustLeadAntimony","Lead-Antimony Alloy Dust",{name:"lead_antimony_dust"});
Item.createItem("dustSmallLeadAntimony","Small Pile of Lead-Antimony Alloy Dust",{name:"small_lead_antimony_dust"});

// 二氧化硅粉
IDRegistry.genItemID("dustSiliconDioxide");
IDRegistry.genItemID("dustSmallSiliconDioxide");
Item.createItem("dustSiliconDioxide","Silicon Dioxide Dust",{name:"silicon_dioxide_dust"});
Item.createItem("dustSmallSiliconDioxide","Small Pile of Silicon Dioxide Dust",{name:"small_silicon_dioxide_dust"});

// 盐粉
IDRegistry.genItemID("dustSalt");
IDRegistry.genItemID("dustSmallSalt");
Item.createItem("dustSalt","Salt Dust",{name:"salt_dust"});
Item.createItem("dustSmallSalt","Small Pile of Salt Dust",{name:"small_salt_dust"});

// 能量水晶粉
IDRegistry.genItemID("dustEnergium");
IDRegistry.genItemID("dustSmallEnergium");
Item.createItem("dustEnergium","Energium Dust",{name:"energium_dust"});
Item.createItem("dustSmallEnergium","Small Pile of Energium Dust",{name:"small_energium_dust"});

// 红石粉
IDRegistry.genItemID("dustSmallRedstone");
Item.createItem("dustSmallRedstone","Small Pile of Redstone Dust",{name:"small_redstone_dust"});

// 红宝石粉
IDRegistry.genItemID("dustRuby");
IDRegistry.genItemID("dustSmallRuby");
Item.createItem("dustRuby","Ruby Dust",{name:"ruby_dust"});
Item.createItem("dustSmallRuby","Small Pile of Ruby Dust",{name:"small_ruby_dust"});

// 硅粉
IDRegistry.genItemID("dustSilicon");
IDRegistry.genItemID("dustSmallSilicon");
Item.createItem("dustSilicon","Silicon Dust",{name:"silicon_dust"});
Item.createItem("dustSmallSilicon","Small Pile of Silicon Dust",{name:"small_silicon_dust"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("dust",Translation.translate("Dust"),[
        ItemID.dustStone,
        ItemID.dustEnder,
        ItemID.dustFlint,
        ItemID.dustCopper,
        ItemID.dustTin,
        ItemID.dustBronze,
        ItemID.dustLead,
        ItemID.dustIron,
        ItemID.dustSteel,
        ItemID.dustGold,
        ItemID.dustAntimony,
        ItemID.dustLithium,
        ItemID.dustCarbon,
        ItemID.dustTungsten,
        ItemID.dustUranium,
        ItemID.dustSilver,
        ItemID.dustTetrahedrite,
        ItemID.dustAluminium,
        ItemID.dustEnete,
        ItemID.dustDiamond,
        ItemID.dustLeadAntimony,
        ItemID.dustSiliconDioxide,
        ItemID.dustSalt,
        ItemID.dustEnergium,
        ItemID.dustRuby,
        ItemID.dustSilicon
    ]);

    Item.addCreativeGroup("dustSmall",Translation.translate("Small Dust"),[
        ItemID.dustSmallStone,
        ItemID.dustSmallEnder,
        ItemID.dustSmallFlint,
        ItemID.dustSmallCopper,
        ItemID.dustSmallTin,
        ItemID.dustSmallBronze,
        ItemID.dustSmallLead,
        ItemID.dustSmallIron,
        ItemID.dustSmallSteel,
        ItemID.dustSmallGold,
        ItemID.dustSmallAntimony,
        ItemID.dustSmallLithium,
        ItemID.dustSmallCarbon,
        ItemID.dustSmallTungsten,
        ItemID.dustSmallUranium,
        ItemID.dustSmallSilver,
        ItemID.dustSmallTetrahedrite,
        ItemID.dustSmallAluminium,
        ItemID.dustSmallEnete,
        ItemID.dustSmallDiamond,
        ItemID.dustSmallLeadAntimony,
        ItemID.dustSmallSiliconDioxide,
        ItemID.dustSmallSalt,
        ItemID.dustSmallEnergium,
        ItemID.dustSmallRedstone,
        ItemID.dustSmallRuby,
        ItemID.dustSmallSilicon
    ]);
    
    Recipes.addShapeless({id:ItemID.dustSmallStone,count:9,data:0},[{id:ItemID.dustStone,data:0}]);
    Recipes.addShaped({id:ItemID.dustStone,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallStone,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallEnder,count:9,data:0},[{id:ItemID.dustEnder,data:0}]);
    Recipes.addShaped({id:ItemID.dustEnder,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallEnder,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallFlint,count:9,data:0},[{id:ItemID.dustFlint,data:0}]);
    Recipes.addShaped({id:ItemID.dustFlint,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallFlint,0]);

    Recipes.addShapeless({id:ItemID.dustSmallCopper,count:9,data:0},[{id:ItemID.dustCopper,data:0}]);
    Recipes.addShaped({id:ItemID.dustCopper,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallCopper,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallTin,count:9,data:0},[{id:ItemID.dustTin,data:0}]);
    Recipes.addShaped({id:ItemID.dustTin,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallTin,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallBronze,count:9,data:0},[{id:ItemID.dustBronze,data:0}]);
    Recipes.addShaped({id:ItemID.dustBronze,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallBronze,0]);

    Recipes.addShapeless({id:ItemID.dustSmallLead,count:9,data:0},[{id:ItemID.dustLead,data:0}]);
    Recipes.addShaped({id:ItemID.dustLead,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallLead,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallIron,count:9,data:0},[{id:ItemID.dustIron,data:0}]);
    Recipes.addShaped({id:ItemID.dustIron,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallIron,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallSteel,count:9,data:0},[{id:ItemID.dustSteel,data:0}]);
    Recipes.addShaped({id:ItemID.dustSteel,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallSteel,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallGold,count:9,data:0},[{id:ItemID.dustGold,data:0}]);
    Recipes.addShaped({id:ItemID.dustGold,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallGold,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallAntimony,count:9,data:0},[{id:ItemID.dustAntimony,data:0}]);
    Recipes.addShaped({id:ItemID.dustAntimony,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallAntimony,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallLithium,count:9,data:0},[{id:ItemID.dustLithium,data:0}]);
    Recipes.addShaped({id:ItemID.dustLithium,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallLithium,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallCarbon,count:9,data:0},[{id:ItemID.dustCarbon,data:0}]);
    Recipes.addShaped({id:ItemID.dustCarbon,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallCarbon,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallTungsten,count:9,data:0},[{id:ItemID.dustTungsten,data:0}]);
    Recipes.addShaped({id:ItemID.dustTungsten,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallTungsten,0]);

    Recipes.addShapeless({id:ItemID.dustSmallUranium,count:9,data:0},[{id:ItemID.dustUranium,data:0}]);
    Recipes.addShaped({id:ItemID.dustUranium,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallUranium,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallSilver,count:9,data:0},[{id:ItemID.dustSilver,data:0}]);
    Recipes.addShaped({id:ItemID.dustSilver,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallSilver,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallTetrahedrite,count:9,data:0},[{id:ItemID.dustTetrahedrite,data:0}]);
    Recipes.addShaped({id:ItemID.dustTetrahedrite,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallTetrahedrite,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallAluminium,count:9,data:0},[{id:ItemID.dustAluminium,data:0}]);
    Recipes.addShaped({id:ItemID.dustAluminium,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallAluminium,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallDiamond,count:9,data:0},[{id:ItemID.dustDiamond,data:0}]);
    Recipes.addShaped({id:ItemID.dustDiamond,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallDiamond,0]);    

    Recipes.addShapeless({id:ItemID.dustSmallLeadAntimony,count:9,data:0},[{id:ItemID.dustLeadAntimony,data:0}]);
    Recipes.addShaped({id:ItemID.dustLeadAntimony,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallLeadAntimony,0]);

    Recipes.addShapeless({id:ItemID.dustSmallSiliconDioxide,count:9,data:0},[{id:ItemID.dustSiliconDioxide,data:0}]);
    Recipes.addShaped({id:ItemID.dustSiliconDioxide,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallSiliconDioxide,0]);

    Recipes.addShapeless({id:ItemID.dustSmallSalt,count:9,data:0},[{id:ItemID.dustSalt,data:0}]);
    Recipes.addShaped({id:ItemID.dustSalt,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallSalt,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallEnergium,count:9,data:0},[{id:ItemID.dustEnergium,data:0}]);
    Recipes.addShaped({id:ItemID.dustEnergium,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallEnergium,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallRedstone,count:9,data:0},[{id:331,data:0}]);
    Recipes.addShaped({id:331,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallRedstone,0]);

    Recipes.addShapeless({id:ItemID.dustSmallRuby,count:9,data:0},[{id:ItemID.dustRuby,data:0}]);
    Recipes.addShaped({id:ItemID.dustRuby,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallRuby,0]);

    Recipes.addShapeless({id:ItemID.dustSmallSilicon,count:9,data:0},[{id:ItemID.dustSilicon,data:0}]);
    Recipes.addShaped({id:ItemID.dustSilicon,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallSilicon,0]);

    Recipes.addShaped({id:ItemID.dustEnergium,count:1,data:0},["aba","bab","aba"],["a",331,0,"b",ItemID.dustRuby,0]);
    Recipes.addShaped({id:ItemID.dustEnete,count:3,data:0},["bca","cdc","acb"],["a",348,0,"b",331,0,"c",ItemID.dustEnder,0,"d",ItemID.dustIron,0]);
    
    Recipes.addShapeless({id:ItemID.dustLeadAntimony,count:2,data:0},[{id:ItemID.dustLead,data:0},{id:ItemID.dustAntimony,data:0}]);
    Recipes.addShapeless({id:ItemID.dustBronze,count:9,data:0},[{id:ItemID.dustTin,data:0},{id:ItemID.dustCopper,data:0},{id:ItemID.dustCopper,data:0},{id:ItemID.dustCopper,data:0}]);

    var mortar = Tool.getAllTool("Mortar");
    for(let i in mortar){
        RecipeRegistry.addShapeless({id:ItemID.dustFlint,count:1,data:0},[{id:318,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustCopper,count:1,data:0},[{id:ItemID.ingotCopper,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustTin,count:1,data:0},[{id:ItemID.ingotTin,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustLead,count:1,data:0},[{id:ItemID.ingotLead,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustIron,count:1,data:0},[{id:265,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustGold,count:1,data:0},[{id:266,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustAntimony,count:1,data:0},[{id:ItemID.ingotAntimony,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustLithium,count:1,data:0},[{id:ItemID.ingotLithium,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustTungsten,count:1,data:0},[{id:ItemID.ingotTungsten,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustUranium,count:1,data:0},[{id:ItemID.ingotUranium,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustSilver,count:1,data:0},[{id:ItemID.ingotSilver,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustAluminium,count:1,data:0},[{id:ItemID.ingotAluminium,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustRuby,count:1,data:0},[{id:ItemID.ruby,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustSilicon,count:1,data:0},[{id:ItemID.ingotSilicon,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustEnergium,count:9,data:0},[{id:ItemID.energyCrystal,count:1,data:0}],mortar[i]);
    }
    
    Recipes.addFurnace(ItemID.dustCopper,ItemID.ingotCopper);
    Recipes.addFurnace(ItemID.dustTin,ItemID.ingotTin);
    Recipes.addFurnace(ItemID.dustLead,ItemID.ingotLead);
    Recipes.addFurnace(ItemID.dustBronze,ItemID.ingotBronze);
    Recipes.addFurnace(ItemID.dustIron,265);
    Recipes.addFurnace(ItemID.dustGold,266);
    Recipes.addFurnace(ItemID.dustAntimony,ItemID.ingotAntimony);
    Recipes.addFurnace(ItemID.dustLithium,ItemID.ingotLithium);
    Recipes.addFurnace(ItemID.dustUranium,ItemID.ingotUranium);
    Recipes.addFurnace(ItemID.dustSilver,ItemID.ingotSilver);
    Recipes.addFurnace(ItemID.dustAluminium,ItemID.ingotAluminium);
    Recipes.addFurnace(ItemID.dustEnete,ItemID.ingotEnete);
    Recipes.addFurnace(ItemID.dustLeadAntimony,ItemID.ingotLeadAntimony);
    Recipes.addFurnace(ItemID.dustSiliconDioxide,20);
    
    RecipeRegistry.addMaceratorRecipe({id:318,data:0},{id:ItemID.dustFlint,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:368,data:0},{id:ItemID.dustEnder,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:264,data:0},{id:ItemID.dustDiamond,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.ingotCopper,data:0},{id:ItemID.dustCopper,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.ingotTin,data:0},{id:ItemID.dustTin,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.ingotBronze,data:0},{id:ItemID.dustBronze,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.ingotLead,data:0},{id:ItemID.dustLead,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:265,data:0},{id:ItemID.dustIron,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.ingotSteel,data:0},{id:ItemID.dustSteel,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:266,data:0},{id:ItemID.dustGold,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.ingotAntimony,data:0},{id:ItemID.dustAntimony,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.ingotLithium,data:0},{id:ItemID.dustLithium,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.ingotTungsten,data:0},{id:ItemID.dustTungsten,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.ingotUranium,data:0},{id:ItemID.dustUranium,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.ingotSilver,data:0},{id:ItemID.dustSilver,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.ingotAluminium,data:0},{id:ItemID.dustAluminium,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.energyCrystal,data:0},{id:ItemID.dustEnergium,count:9,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedPurifiedCopper,data:0},{id:ItemID.dustCopper,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedPurifiedCassiterite,data:0},{id:ItemID.dustTin,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedPurifiedGalena,data:0},{id:ItemID.dustLead,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedPurifiedIron,data:0},{id:ItemID.dustIron,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedPurifiedGold,data:0},{id:ItemID.dustGold,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedPurifiedAntimony,data:0},{id:ItemID.dustAntimony,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedPurifiedSpodumene,data:0},{id:ItemID.dustLithium,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedPurifiedTungsten,data:0},{id:ItemID.dustTungsten,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedPurifiedUranium,data:0},{id:ItemID.dustUranium,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedPurifiedSilver,data:0},{id:ItemID.dustSilver,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedPurifiedTetrahedrite,data:0},{id:ItemID.dustTetrahedrite,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedPurifiedAluminium,data:0},{id:ItemID.dustAluminium,count:2,data:0});

    RecipeRegistry.addBlastFurnaceRecipe({id:ItemID.dustSilicon,data:0},[{id:ItemID.ingotSilicon,count:1,data:0}]);
    RecipeRegistry.addBlastFurnaceRecipe({id:ItemID.dustTungsten,data:0},[{id:ItemID.ingotTungsten,count:1,data:0}]);

    RecipeRegistry.addElectrolyzerRecipe({id:ItemID.dustDiamond,count:1,data:0},[{id:ItemID.dustCarbon,count:64,data:0}]);
    RecipeRegistry.addElectrolyzerRecipe({id:ItemID.dustSiliconDioxide,count:3,data:0},[{id:ItemID.dustSilicon,count:1,data:0}]);

    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustFlint,data:0},[{id:ItemID.dustSmallSiliconDioxide,count:3,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustTetrahedrite,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0}]);
});