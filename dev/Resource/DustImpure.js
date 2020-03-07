IDRegistry.genItemID("dustImpureCopper");
Item.createItem("dustImpureCopper","Impure Copper Dust",{name:"dustImpureCopper"});

IDRegistry.genItemID("dustImpureTin");
Item.createItem("dustImpureTin","Impure Tin Dust",{name:"dustImpureTin"});

IDRegistry.genItemID("dustImpureLead");
Item.createItem("dustImpureLead","Impure Lead Dust",{name:"dustImpureLead"});

IDRegistry.genItemID("dustImpureIron");
Item.createItem("dustImpureIron","Impure Iron Dust",{name:"dustImpureIron"});

IDRegistry.genItemID("dustImpureGold");
Item.createItem("dustImpureGold","Impure Gold Dust",{name:"dustImpureGold"});

IDRegistry.genItemID("dustImpureAntimony");
Item.createItem("dustImpureAntimony","Impure Antimony Dust",{name:"dustImpureAntimony"});

IDRegistry.genItemID("dustImpureLithium");
Item.createItem("dustImpureLithium","Impure Lithium Dust",{name:"dustImpureLithium"});

IDRegistry.genItemID("dustImpureCarbon");
Item.createItem("dustImpureCarbon","Impure Carbon Dust",{name:"dustImpureCarbon"});

IDRegistry.genItemID("dustImpureTungsten");
Item.createItem("dustImpureTungsten","Impure Tungsten Dust",{name:"dustImpureTungsten"});

IDRegistry.genItemID("dustImpureUranium");
Item.createItem("dustImpureUranium","Impure Uranium Dust",{name:"dustImpureUranium"});

IDRegistry.genItemID("dustImpureSilver");
Item.createItem("dustImpureSilver","Impure Silver Dust",{name:"dustImpureSilver"});

IDRegistry.genItemID("dustImpureTetrahedrite");
Item.createItem("dustImpureTetrahedrite","Impure Tetrahedrite Dust",{name:"dustImpureTetrahedrite"});

IDRegistry.genItemID("dustImpureAluminium");
Item.createItem("dustImpureAluminium","Impure Aluminium Dust",{name:"dustImpureAluminium"});

Callback.addCallback("PreLoaded",function(){
    // 熔炉
    Recipes.addFurnace(ItemID.dustImpureCopper      ,ItemID.ingotCopper      );
    Recipes.addFurnace(ItemID.dustImpureTin         ,ItemID.ingotTin         );
    Recipes.addFurnace(ItemID.dustImpureLead        ,ItemID.ingotLead        );
    Recipes.addFurnace(ItemID.dustImpureIron        ,265                     );
    Recipes.addFurnace(ItemID.dustImpureGold        ,266                     );
    Recipes.addFurnace(ItemID.dustImpureAntimony    ,ItemID.ingotAntimony    );
    Recipes.addFurnace(ItemID.dustImpureLithium     ,ItemID.ingotLithium     );
    Recipes.addFurnace(ItemID.dustImpureUranium     ,ItemID.ingotUranium     );
    Recipes.addFurnace(ItemID.dustImpureSilver      ,ItemID.ingotSilver      );
    Recipes.addFurnace(ItemID.dustImpureTetrahedrite,ItemID.ingotTetrahedrite);
    Recipes.addFurnace(ItemID.dustImpureAluminium   ,ItemID.ingotAluminium   );
    
    // 高炉
    ETRecipe.addBlastFurnaceRecipe({id:ItemID.dustImpureTungsten,data:0},[{id:ItemID.ingotTungsten,count:1,data:0}]);

    // 洗矿机
    ETRecipe.addOreWasherRecipe({id:ItemID.dustImpureCopper      ,data:0},[{id:ItemID.dustCopper      ,count:1,data:0},{id:ItemID.dustSmallTin     ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    ETRecipe.addOreWasherRecipe({id:ItemID.dustImpureTin         ,data:0},[{id:ItemID.dustTin         ,count:1,data:0},{id:ItemID.dustSmallIron    ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    ETRecipe.addOreWasherRecipe({id:ItemID.dustImpureLead        ,data:0},[{id:ItemID.dustLead        ,count:1,data:0},{id:ItemID.dustSmallCopper  ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    ETRecipe.addOreWasherRecipe({id:ItemID.dustImpureIron        ,data:0},[{id:ItemID.dustIron        ,count:1,data:0},{id:ItemID.dustSmallGold    ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    ETRecipe.addOreWasherRecipe({id:ItemID.dustImpureGold        ,data:0},[{id:ItemID.dustGold        ,count:1,data:0},{id:ItemID.dustSmallSilver  ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    ETRecipe.addOreWasherRecipe({id:ItemID.dustImpureAntimony    ,data:0},[{id:ItemID.dustAntimony    ,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    ETRecipe.addOreWasherRecipe({id:ItemID.dustImpureLithium     ,data:0},[{id:ItemID.dustLithium     ,count:1,data:0},{id:ItemID.dustSmallLithium ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    ETRecipe.addOreWasherRecipe({id:ItemID.dustImpureCarbon      ,data:0},[{id:ItemID.dustCarbon      ,count:1,data:0},{id:ItemID.dustSmallCarbon  ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    ETRecipe.addOreWasherRecipe({id:ItemID.dustImpureTungsten    ,data:0},[{id:ItemID.dustTungsten    ,count:1,data:0},{id:ItemID.dustSmallTin     ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    ETRecipe.addOreWasherRecipe({id:ItemID.dustImpureUranium     ,data:0},[{id:ItemID.dustUranium     ,count:1,data:0},{id:ItemID.dustSmallUranium ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    ETRecipe.addOreWasherRecipe({id:ItemID.dustImpureSilver      ,data:0},[{id:ItemID.dustSilver      ,count:1,data:0},{id:ItemID.dustSmallGold    ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    ETRecipe.addOreWasherRecipe({id:ItemID.dustImpureTetrahedrite,data:0},[{id:ItemID.dustTetrahedrite,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    ETRecipe.addOreWasherRecipe({id:ItemID.dustImpureAluminium   ,data:0},[{id:ItemID.dustAluminium   ,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    
    // 离心机
    ETRecipe.addCentrifugeRecipe({id:ItemID.dustImpureCopper      ,data:0},[{id:ItemID.dustCopper      ,count:1,data:0},{id:ItemID.dustSmallTin         ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    ETRecipe.addCentrifugeRecipe({id:ItemID.dustImpureTin         ,data:0},[{id:ItemID.dustTin         ,count:1,data:0},{id:ItemID.dustSmallIron        ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    ETRecipe.addCentrifugeRecipe({id:ItemID.dustImpureLead        ,data:0},[{id:ItemID.dustLead        ,count:1,data:0},{id:ItemID.dustSmallCopper      ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    ETRecipe.addCentrifugeRecipe({id:ItemID.dustImpureIron        ,data:0},[{id:ItemID.dustIron        ,count:1,data:0},{id:ItemID.dustSmallGold        ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    ETRecipe.addCentrifugeRecipe({id:ItemID.dustImpureGold        ,data:0},[{id:ItemID.dustGold        ,count:1,data:0},{id:ItemID.dustSmallSilver      ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    ETRecipe.addCentrifugeRecipe({id:ItemID.dustImpureAntimony    ,data:0},[{id:ItemID.dustAntimony    ,count:1,data:0},{id:ItemID.dustSmallAntimony    ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    ETRecipe.addCentrifugeRecipe({id:ItemID.dustImpureLithium     ,data:0},[{id:ItemID.smallLithium6   ,count:1,data:0},{id:ItemID.lithium7             ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    ETRecipe.addCentrifugeRecipe({id:ItemID.dustImpureCarbon      ,data:0},[{id:ItemID.dustCarbon      ,count:1,data:0},{id:ItemID.dustSmallCarbon      ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    ETRecipe.addCentrifugeRecipe({id:ItemID.dustImpureTungsten    ,data:0},[{id:ItemID.dustTungsten    ,count:1,data:0},{id:ItemID.dustSmallTin         ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    ETRecipe.addCentrifugeRecipe({id:ItemID.dustImpureUranium     ,data:0},[{id:ItemID.smallUranium235 ,count:1,data:0},{id:ItemID.uranium238           ,count:4,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    ETRecipe.addCentrifugeRecipe({id:ItemID.dustImpureSilver      ,data:0},[{id:ItemID.dustSilver      ,count:1,data:0},{id:ItemID.dustSmallGold        ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    ETRecipe.addCentrifugeRecipe({id:ItemID.dustImpureTetrahedrite,data:0},[{id:ItemID.dustCopper      ,count:1,data:0},{id:ItemID.dustSmallAntimony    ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    ETRecipe.addCentrifugeRecipe({id:ItemID.dustImpureAluminium   ,data:0},[{id:ItemID.dustAluminium   ,count:1,data:0},{id:ItemID.dustSmallAluminium   ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    
    // 研钵
    var mortar = ETTool.getAllTool("Mortar");
    for(var i in mortar){
        ETRecipe.addShapeless({id:ItemID.dustImpureCopper      ,count:1,data:0},[{id:BlockID.oreCopper      ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureTin         ,count:1,data:0},[{id:BlockID.oreTin         ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureLead        ,count:1,data:0},[{id:BlockID.oreLead        ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureIron        ,count:1,data:0},[{id:15                     ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureGold        ,count:1,data:0},[{id:14                     ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureAntimony    ,count:1,data:0},[{id:BlockID.oreAntimony    ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureLithium     ,count:1,data:0},[{id:BlockID.oreLithium     ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureCarbon      ,count:1,data:0},[{id:BlockID.oreGraphite    ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureTungsten    ,count:1,data:0},[{id:BlockID.oreTungsten    ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureUranium     ,count:1,data:0},[{id:BlockID.oreUranium     ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureSilver      ,count:1,data:0},[{id:BlockID.oreSilver      ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureTetrahedrite,count:1,data:0},[{id:BlockID.oreTetrahedrite,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureAluminium   ,count:1,data:0},[{id:BlockID.oreAluminium   ,data:0}],mortar[i]);
        
        ETRecipe.addShapeless({id:ItemID.dustImpureCopper      ,count:1,data:0},[{id:BlockID.oreNetherCopper      ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureTin         ,count:1,data:0},[{id:BlockID.oreNetherTin         ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureLead        ,count:1,data:0},[{id:BlockID.oreNetherLead        ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureIron        ,count:1,data:0},[{id:BlockID.oreNetherIron        ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureGold        ,count:1,data:0},[{id:BlockID.oreNetherGold        ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureAntimony    ,count:1,data:0},[{id:BlockID.oreNetherAntimony    ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureLithium     ,count:1,data:0},[{id:BlockID.oreNetherLithium     ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureCarbon      ,count:1,data:0},[{id:BlockID.oreNetherGraphite    ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureTungsten    ,count:1,data:0},[{id:BlockID.oreNetherTungsten    ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureUranium     ,count:1,data:0},[{id:BlockID.oreNetherUranium     ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureSilver      ,count:1,data:0},[{id:BlockID.oreNetherSilver      ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureTetrahedrite,count:1,data:0},[{id:BlockID.oreNetherTetrahedrite,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureAluminium   ,count:1,data:0},[{id:BlockID.oreNetherAluminium   ,data:0}],mortar[i]);

        ETRecipe.addShapeless({id:ItemID.dustImpureCopper      ,count:1,data:0},[{id:BlockID.oreEnderCopper      ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureTin         ,count:1,data:0},[{id:BlockID.oreEnderTin         ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureLead        ,count:1,data:0},[{id:BlockID.oreEnderLead        ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureIron        ,count:1,data:0},[{id:BlockID.oreEnderIron        ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureGold        ,count:1,data:0},[{id:BlockID.oreEnderGold        ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureAntimony    ,count:1,data:0},[{id:BlockID.oreEnderAntimony    ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureLithium     ,count:1,data:0},[{id:BlockID.oreEnderLithium     ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureCarbon      ,count:1,data:0},[{id:BlockID.oreEnderGraphite    ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureTungsten    ,count:1,data:0},[{id:BlockID.oreEnderTungsten    ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureUranium     ,count:1,data:0},[{id:BlockID.oreEnderUranium     ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureSilver      ,count:1,data:0},[{id:BlockID.oreEnderSilver      ,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureTetrahedrite,count:1,data:0},[{id:BlockID.oreEnderTetrahedrite,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureAluminium   ,count:1,data:0},[{id:BlockID.oreEnderAluminium   ,data:0}],mortar[i]);

        ETRecipe.addShapeless({id:ItemID.dustImpureCopper      ,count:1,data:0},[{id:ItemID.crushedCopper      ,count:1,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureTin         ,count:1,data:0},[{id:ItemID.crushedTin         ,count:1,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureLead        ,count:1,data:0},[{id:ItemID.crushedLead        ,count:1,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureIron        ,count:1,data:0},[{id:ItemID.crushedIron        ,count:1,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureGold        ,count:1,data:0},[{id:ItemID.crushedGold        ,count:1,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureAntimony    ,count:1,data:0},[{id:ItemID.crushedAntimony    ,count:1,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureLithium     ,count:1,data:0},[{id:ItemID.crushedLithium     ,count:1,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureCarbon      ,count:1,data:0},[{id:ItemID.crushedCarbon      ,count:1,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureTungsten    ,count:1,data:0},[{id:ItemID.crushedTungsten    ,count:1,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureUranium     ,count:1,data:0},[{id:ItemID.crushedUranium     ,count:1,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureSilver      ,count:1,data:0},[{id:ItemID.crushedSilver      ,count:1,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureTetrahedrite,count:1,data:0},[{id:ItemID.crushedTetrahedrite,count:1,data:0}],mortar[i]);
        ETRecipe.addShapeless({id:ItemID.dustImpureAluminium   ,count:1,data:0},[{id:ItemID.crushedAluminium   ,count:1,data:0}],mortar[i]);
    }
    
    // 打粉机
    ETRecipe.addMaceratorRecipe({id:BlockID.oreCopper      ,data:0},{id:ItemID.dustImpureCopper      ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreTin         ,data:0},{id:ItemID.dustImpureTin         ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreLead        ,data:0},{id:ItemID.dustImpureLead        ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:15                     ,data:0},{id:ItemID.dustImpureIron        ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:14                     ,data:0},{id:ItemID.dustImpureGold        ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreAntimony    ,data:0},{id:ItemID.dustImpureAntimony    ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreLithium     ,data:0},{id:ItemID.dustImpureLithium     ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreGraphite    ,data:0},{id:ItemID.dustImpureCarbon      ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreTungsten    ,data:0},{id:ItemID.dustImpureTungsten    ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreUranium     ,data:0},{id:ItemID.dustImpureUranium     ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreSilver      ,data:0},{id:ItemID.dustImpureSilver      ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreTetrahedrite,data:0},{id:ItemID.dustImpureTetrahedrite,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreAluminium   ,data:0},{id:ItemID.dustImpureAluminium   ,count:2,data:0});

    ETRecipe.addMaceratorRecipe({id:BlockID.oreNetherCopper      ,data:0},{id:ItemID.dustImpureCopper      ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreNetherTin         ,data:0},{id:ItemID.dustImpureTin         ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreNetherLead        ,data:0},{id:ItemID.dustImpureLead        ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreNetherIron        ,data:0},{id:ItemID.dustImpureIron        ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreNetherGold        ,data:0},{id:ItemID.dustImpureGold        ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreNetherAntimony    ,data:0},{id:ItemID.dustImpureAntimony    ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreNetherLithium     ,data:0},{id:ItemID.dustImpureLithium     ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreNetherGraphite    ,data:0},{id:ItemID.dustImpureCarbon      ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreNetherTungsten    ,data:0},{id:ItemID.dustImpureTungsten    ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreNetherUranium     ,data:0},{id:ItemID.dustImpureUranium     ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreNetherSilver      ,data:0},{id:ItemID.dustImpureSilver      ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreNetherTetrahedrite,data:0},{id:ItemID.dustImpureTetrahedrite,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreNetherAluminium   ,data:0},{id:ItemID.dustImpureAluminium   ,count:2,data:0});
    
    ETRecipe.addMaceratorRecipe({id:BlockID.oreEnderCopper      ,data:0},{id:ItemID.dustImpureCopper      ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreEnderTin         ,data:0},{id:ItemID.dustImpureTin         ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreEnderLead        ,data:0},{id:ItemID.dustImpureLead        ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreEnderIron        ,data:0},{id:ItemID.dustImpureIron        ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreEnderGold        ,data:0},{id:ItemID.dustImpureGold        ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreEnderAntimony    ,data:0},{id:ItemID.dustImpureAntimony    ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreEnderLithium     ,data:0},{id:ItemID.dustImpureLithium     ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreEnderGraphite    ,data:0},{id:ItemID.dustImpureCarbon      ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreEnderTungsten    ,data:0},{id:ItemID.dustImpureTungsten    ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreEnderUranium     ,data:0},{id:ItemID.dustImpureUranium     ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreEnderSilver      ,data:0},{id:ItemID.dustImpureSilver      ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreEnderTetrahedrite,data:0},{id:ItemID.dustImpureTetrahedrite,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreEnderAluminium   ,data:0},{id:ItemID.dustImpureAluminium   ,count:2,data:0});

    ETRecipe.addMaceratorRecipe({id:ItemID.crushedCopper      ,data:0},{id:ItemID.dustImpureCopper      ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedTin         ,data:0},{id:ItemID.dustImpureTin         ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedLead        ,data:0},{id:ItemID.dustImpureLead        ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedIron        ,data:0},{id:ItemID.dustImpureIron        ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedGold        ,data:0},{id:ItemID.dustImpureGold        ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedAntimony    ,data:0},{id:ItemID.dustImpureAntimony    ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedLithium     ,data:0},{id:ItemID.dustImpureLithium     ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedCarbon      ,data:0},{id:ItemID.dustImpureCarbon      ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedTungsten    ,data:0},{id:ItemID.dustImpureTungsten    ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedUranium     ,data:0},{id:ItemID.dustImpureUranium     ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedSilver      ,data:0},{id:ItemID.dustImpureSilver      ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedTetrahedrite,data:0},{id:ItemID.dustImpureTetrahedrite,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedAluminium   ,data:0},{id:ItemID.dustImpureAluminium   ,count:2,data:0});
});