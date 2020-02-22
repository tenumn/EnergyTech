IDRegistry.genItemID("dustImpureCopper");
Item.createItem("dustImpureCopper","Impure Copper Dust",{name:"impure_copper_dust"});

IDRegistry.genItemID("dustImpureTin");
Item.createItem("dustImpureTin","Impure Tin Dust",{name:"impure_tin_dust"});

IDRegistry.genItemID("dustImpureLead");
Item.createItem("dustImpureLead","Impure Lead Dust",{name:"impure_lead_dust"});

IDRegistry.genItemID("dustImpureIron");
Item.createItem("dustImpureIron","Impure Iron Dust",{name:"impure_iron_dust"});

IDRegistry.genItemID("dustImpureGold");
Item.createItem("dustImpureGold","Impure Gold Dust",{name:"impure_gold_dust"});

IDRegistry.genItemID("dustImpureAntimony");
Item.createItem("dustImpureAntimony","Impure Antimony Dust",{name:"impure_antimony_dust"});

IDRegistry.genItemID("dustImpureLithium");
Item.createItem("dustImpureLithium","Impure Lithium Dust",{name:"impure_lithium_dust"});

IDRegistry.genItemID("dustImpureCarbon");
Item.createItem("dustImpureCarbon","Impure Carbon Dust",{name:"impure_carbon_dust"});

IDRegistry.genItemID("dustImpureTungsten");
Item.createItem("dustImpureTungsten","Impure Tungsten Dust",{name:"impure_tungsten_dust"});

IDRegistry.genItemID("dustImpureUranium");
Item.createItem("dustImpureUranium","Impure Uranium Dust",{name:"impure_uranium_dust"});

IDRegistry.genItemID("dustImpureSilver");
Item.createItem("dustImpureSilver","Impure Silver Dust",{name:"impure_silver_dust"});

IDRegistry.genItemID("dustImpureTetrahedrite");
Item.createItem("dustImpureTetrahedrite","Impure Tetrahedrite Dust",{name:"impure_tetrahedrite_dust"});

Callback.addCallback("PreLoaded",function(){
    // 熔炉
    Recipes.addFurnace(ItemID.dustImpureCopper      ,ItemID.ingotCopper  );
    Recipes.addFurnace(ItemID.dustImpureTin         ,ItemID.ingotTin     );
    Recipes.addFurnace(ItemID.dustImpureLead        ,ItemID.ingotLead    );
    Recipes.addFurnace(ItemID.dustImpureIron        ,265                 );
    Recipes.addFurnace(ItemID.dustImpureGold        ,266                 );
    Recipes.addFurnace(ItemID.dustImpureAntimony    ,ItemID.ingotAntimony);
    Recipes.addFurnace(ItemID.dustImpureLithium     ,ItemID.ingotLithium );
    Recipes.addFurnace(ItemID.dustImpureTungsten    ,ItemID.ingotTungsten);
    Recipes.addFurnace(ItemID.dustImpureUranium     ,ItemID.ingotUranium );
    Recipes.addFurnace(ItemID.dustImpureSilver      ,ItemID.ingotSilver  );
    Recipes.addFurnace(ItemID.dustImpureTetrahedrite,ItemID.ingotCopper  );

    // 洗矿机
    ETRecipe.addOreWasherRecipe([{id:ItemID.dustCopper      ,count:1,data:0},{id:ItemID.dustSmallTin     ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}],{id:ItemID.dustImpureCopper      ,data:0});
    ETRecipe.addOreWasherRecipe([{id:ItemID.dustTin         ,count:1,data:0},{id:ItemID.dustSmallIron    ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}],{id:ItemID.dustImpureTin         ,data:0});
    ETRecipe.addOreWasherRecipe([{id:ItemID.dustLead        ,count:1,data:0},{id:ItemID.dustSmallCopper  ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}],{id:ItemID.dustImpureLead        ,data:0});
    ETRecipe.addOreWasherRecipe([{id:ItemID.dustIron        ,count:1,data:0},{id:ItemID.dustSmallGold    ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}],{id:ItemID.dustImpureIron        ,data:0});
    ETRecipe.addOreWasherRecipe([{id:ItemID.dustGold        ,count:1,data:0},{id:ItemID.dustSmallSilver  ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}],{id:ItemID.dustImpureGold        ,data:0});
    ETRecipe.addOreWasherRecipe([{id:ItemID.dustAntimony    ,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}],{id:ItemID.dustImpureAntimony    ,data:0});
    ETRecipe.addOreWasherRecipe([{id:ItemID.dustLithium     ,count:1,data:0},{id:ItemID.dustSmallLithium ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}],{id:ItemID.dustImpureLithium     ,data:0});
    ETRecipe.addOreWasherRecipe([{id:ItemID.dustCarbon      ,count:1,data:0},{id:ItemID.dustSmallCarbon  ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}],{id:ItemID.dustImpureCarbon      ,data:0});
    ETRecipe.addOreWasherRecipe([{id:ItemID.dustTungsten    ,count:1,data:0},{id:ItemID.dustSmallTin     ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}],{id:ItemID.dustImpureTungsten    ,data:0});
    ETRecipe.addOreWasherRecipe([{id:ItemID.dustUranium     ,count:1,data:0},{id:ItemID.dustSmallUranium ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}],{id:ItemID.dustImpureUranium     ,data:0});
    ETRecipe.addOreWasherRecipe([{id:ItemID.dustSilver      ,count:1,data:0},{id:ItemID.dustSmallGold    ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}],{id:ItemID.dustImpureSilver      ,data:0});
    ETRecipe.addOreWasherRecipe([{id:ItemID.dustTetrahedrite,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}],{id:ItemID.dustImpureTetrahedrite,data:0});
    
    // 离心机
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustCopper      ,count:1,data:0},{id:ItemID.dustSmallTin         ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}],{id:ItemID.dustImpureCopper      ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustTin         ,count:1,data:0},{id:ItemID.dustSmallIron        ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}],{id:ItemID.dustImpureTin         ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustLead        ,count:1,data:0},{id:ItemID.dustSmallCopper      ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}],{id:ItemID.dustImpureLead        ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustIron        ,count:1,data:0},{id:ItemID.dustSmallGold        ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}],{id:ItemID.dustImpureIron        ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustGold        ,count:1,data:0},{id:ItemID.dustSmallSilver      ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}],{id:ItemID.dustImpureGold        ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustAntimony    ,count:1,data:0},{id:ItemID.dustSmallAntimony    ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}],{id:ItemID.dustImpureAntimony    ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.smallLithium6   ,count:1,data:0},{id:ItemID.lithium7             ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}],{id:ItemID.dustImpureLithium     ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustCarbon      ,count:1,data:0},{id:ItemID.dustSmallCarbon      ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}],{id:ItemID.dustImpureCarbon      ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustTungsten    ,count:1,data:0},{id:ItemID.dustSmallTin         ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}],{id:ItemID.dustImpureTungsten    ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.smallUranium235 ,count:1,data:0},{id:ItemID.uranium238           ,count:4,data:0},{id:ItemID.dustSmallStone,count:1,data:0}],{id:ItemID.dustImpureUranium     ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustSilver      ,count:1,data:0},{id:ItemID.dustSmallGold        ,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}],{id:ItemID.dustImpureSilver      ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustTetrahedrite,count:1,data:0},{id:ItemID.dustSmallTetrahedrite,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}],{id:ItemID.dustImpureTetrahedrite,data:0});
    
    // 研钵
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureCopper      ,count:1,data:0},[{id:ItemID.crushedCopper      ,count:1,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureTin         ,count:1,data:0},[{id:ItemID.crushedTin         ,count:1,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureLead        ,count:1,data:0},[{id:ItemID.crushedLead        ,count:1,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureIron        ,count:1,data:0},[{id:ItemID.crushedIron        ,count:1,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureGold        ,count:1,data:0},[{id:ItemID.crushedGold        ,count:1,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureAntimony    ,count:1,data:0},[{id:ItemID.crushedAntimony    ,count:1,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureLithium     ,count:1,data:0},[{id:ItemID.crushedLithium     ,count:1,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureCarbon      ,count:1,data:0},[{id:ItemID.crushedCarbon      ,count:1,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureTungsten    ,count:1,data:0},[{id:ItemID.crushedTungsten    ,count:1,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureUranium     ,count:1,data:0},[{id:ItemID.crushedUranium     ,count:1,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureSilver      ,count:1,data:0},[{id:ItemID.crushedSilver      ,count:1,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureTetrahedrite,count:1,data:0},[{id:ItemID.crushedTetrahedrite,count:1,data:0}]);

    ETRecipe.addMortarRecipe({id:ItemID.dustImpureCopper      ,count:1,data:0},[{id:BlockID.oreCopper      ,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureTin         ,count:1,data:0},[{id:BlockID.oreTin         ,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureLead        ,count:1,data:0},[{id:BlockID.oreLead        ,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureIron        ,count:1,data:0},[{id:15                     ,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureGold        ,count:1,data:0},[{id:14                     ,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureAntimony    ,count:1,data:0},[{id:BlockID.oreAntimony    ,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureLithium     ,count:1,data:0},[{id:BlockID.oreLithium     ,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureCarbon      ,count:1,data:0},[{id:BlockID.oreGraphite    ,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureTungsten    ,count:1,data:0},[{id:BlockID.oreTungsten    ,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureUranium     ,count:1,data:0},[{id:BlockID.oreUranium     ,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureSilver      ,count:1,data:0},[{id:BlockID.oreSilver      ,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureTetrahedrite,count:1,data:0},[{id:BlockID.oreTetrahedrite,data:0}]);
    
    // 打粉机
    ETRecipe.addMaceratorRecipe({id:ItemID.dustImpureCopper      ,count:2,data:0},{id:BlockID.oreCopper      ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustImpureTin         ,count:2,data:0},{id:BlockID.oreTin         ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustImpureLead        ,count:2,data:0},{id:BlockID.oreLead        ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustImpureIron        ,count:2,data:0},{id:15                     ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustImpureGold        ,count:2,data:0},{id:14                     ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustImpureAntimony    ,count:2,data:0},{id:BlockID.oreAntimony    ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustImpureLithium     ,count:2,data:0},{id:BlockID.oreLithium     ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustImpureCarbon      ,count:2,data:0},{id:BlockID.oreGraphite    ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustImpureTungsten    ,count:2,data:0},{id:BlockID.oreTungsten    ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustImpureUranium     ,count:2,data:0},{id:BlockID.oreUranium     ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustImpureSilver      ,count:2,data:0},{id:BlockID.oreSilver      ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustImpureTetrahedrite,count:2,data:0},{id:BlockID.oreTetrahedrite,data:0});
    
    ETRecipe.addMaceratorRecipe({id:ItemID.dustImpureCopper      ,count:2,data:0},{id:ItemID.crushedCopper      ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustImpureTin         ,count:2,data:0},{id:ItemID.crushedTin         ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustImpureLead        ,count:2,data:0},{id:ItemID.crushedLead        ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustImpureIron        ,count:2,data:0},{id:ItemID.crushedIron        ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustImpureGold        ,count:2,data:0},{id:ItemID.crushedGold        ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustImpureAntimony    ,count:2,data:0},{id:ItemID.crushedAntimony    ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustImpureLithium     ,count:2,data:0},{id:ItemID.crushedLithium     ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustImpureCarbon      ,count:2,data:0},{id:ItemID.crushedCarbon      ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustImpureTungsten    ,count:2,data:0},{id:ItemID.crushedTungsten    ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustImpureUranium     ,count:2,data:0},{id:ItemID.crushedUranium     ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustImpureSilver      ,count:2,data:0},{id:ItemID.crushedSilver      ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustImpureTetrahedrite,count:2,data:0},{id:ItemID.crushedTetrahedrite,data:0});
});