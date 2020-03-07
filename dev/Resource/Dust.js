ETRecipe.addDustRecipe = function(output,input){
    Recipes.addShaped({id:output.id,count:1,data:output.data},["aaa","aaa","aaa"],["a",input.id,input.data]);
    Recipes.addShapeless({id:input.id,count:9,data:input.data},[{id:output.id,data:output.data}]);
}

CreateDust = function(name){
    IDRegistry.genItemID("dust" + name);
    Item.createItem("dust" + name,name + " Dust",{name:"dust" + name});
    
    IDRegistry.genItemID("dustSmall" + name);
    Item.createItem("dustSmall" + name,"Small Pile of " + name + " Dust",{name:"dustSmall" + name});

    Callback.addCallback("PreLoaded",function(){
        ETRecipe.addDustRecipe({id:ItemID["dust" + name],data:0},{id:ItemID["dustSmall" + name],data:0});
    });
}

CreateDust("Stone"       );
CreateDust("Copper"      );
CreateDust("Tin"         );
CreateDust("Lead"        );
CreateDust("Iron"        );
CreateDust("Steel"       );
CreateDust("Gold"        );
CreateDust("Antimony"    );
CreateDust("Lithium"     );
CreateDust("Carbon"      );
CreateDust("Tungsten"    );
CreateDust("Uranium"     );
CreateDust("Silver"      );
CreateDust("Tetrahedrite");
CreateDust("Aluminium"   );

IDRegistry.genItemID("dustLeadAntimony");
Item.createItem("dustLeadAntimony","Lead-Antimony Alloy Dust",{name:"dustLeadAntimony"});

IDRegistry.genItemID("dustSmallLeadAntimony");
Item.createItem("dustSmallLeadAntimony","Small Pile Lead-Antimony Alloy Dust",{name:"dustSmallLeadAntimony"});

IDRegistry.genItemID("dustEnder");
IDRegistry.genItemID("dustSmallEnder");
Item.createItem("dustEnder","Ender Dust",{name:"dustEnder"});
Item.createItem("dustSmallEnder","Small Pile of Ender Dust",{name:"dustSmallEnder"});

IDRegistry.genItemID("dustSherlock");
IDRegistry.genItemID("dustSmallSherlock");
Item.createItem("dustSherlock","Sherlock Dust",{name:"dustSherlock"});
Item.createItem("dustSmallSherlock","Small Pile of Sherlock Dust",{name:"dustSmallSherlock"});

IDRegistry.genItemID("dustDiamond");
IDRegistry.genItemID("dustSmallDiamond");
Item.createItem("dustDiamond","Diamond Dust",{name:"dustDiamond"});
Item.createItem("dustSmallDiamond","Small Pile of Diamond Dust",{name:"dustSmallDiamond"});

IDRegistry.genItemID("lithium6");
IDRegistry.genItemID("smallLithium6");
Item.createItem("lithium6","Lithium-6",{name:"lithium6"});
Item.createItem("smallLithium6","Small Pile of Lithium-6",{name:"small_lithium6"});

IDRegistry.genItemID("lithium7");
IDRegistry.genItemID("smallLithium7");
Item.createItem("lithium7","Lithium-7",{name:"lithium7"});
Item.createItem("smallLithium7","Small Pile of Lithium-7",{name:"small_lithium7"});

IDRegistry.genItemID("uranium235");
IDRegistry.genItemID("smallUranium235");
Item.createItem("uranium235","Uranium-235",{name:"uranium235"});
Item.createItem("smallUranium235","Small Pile of Uranium-235",{name:"small_uranium235"});

IDRegistry.genItemID("uranium238");
IDRegistry.genItemID("smallUranium238");
Item.createItem("uranium238","Uranium-238",{name:"uranium238"});
Item.createItem("smallUranium238","Small Pile of Uranium-238",{name:"small_uranium238"});

IDRegistry.genItemID("slag");
Item.createItem("slag","Slag",{name:"slag"});

Callback.addCallback("PreLoaded",function(){
    // 合成
    ETRecipe.addDustRecipe({id:ItemID.lithium6  ,data:0},{id:ItemID.smallLithium6  ,data:0});
    ETRecipe.addDustRecipe({id:ItemID.lithium7  ,data:0},{id:ItemID.smallLithium7  ,data:0});
    ETRecipe.addDustRecipe({id:ItemID.uranium235,data:0},{id:ItemID.smallUranium235,data:0});
    ETRecipe.addDustRecipe({id:ItemID.uranium238,data:0},{id:ItemID.smallUranium238,data:0});

    ETRecipe.addDustRecipe({id:ItemID.dustEnder       ,data:0},{id:ItemID.dustSmallEnder       ,data:0});
    ETRecipe.addDustRecipe({id:ItemID.dustSherlock    ,data:0},{id:ItemID.dustSmallSherlock    ,data:0});
    ETRecipe.addDustRecipe({id:ItemID.dustDiamond     ,data:0},{id:ItemID.dustSmallDiamond     ,data:0});
    ETRecipe.addDustRecipe({id:ItemID.dustLeadAntimony,data:0},{id:ItemID.dustSmallLeadAntimony,data:0});

    Recipes.addShapeless({id:ItemID.dustSherlock    ,count:2,data:0},[{id:ItemID.dustEnder,data:0},{id:ItemID.dustIron    ,data:0}]);
    Recipes.addShapeless({id:ItemID.dustLeadAntimony,count:2,data:0},[{id:ItemID.dustLead ,data:0},{id:ItemID.dustAntimony,data:0}]);

    // 离心机
    ETRecipe.addCentrifugeRecipe({id:ItemID.dustLithium,data:0},[{id:ItemID.lithium7,count:1,data:0},{id:ItemID.smallLithium6,count:1,data:0}]);
    ETRecipe.addCentrifugeRecipe({id:ItemID.dustUranium,data:0},[{id:ItemID.uranium238,count:4,data:0},{id:ItemID.smallUranium235,count:1,data:0}]);
    ETRecipe.addCentrifugeRecipe({id:ItemID.dustTetrahedrite,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0}]);
    
    // 熔炉
    Recipes.addFurnace(ItemID.dustCopper      ,ItemID.ingotCopper      );
    Recipes.addFurnace(ItemID.dustTin         ,ItemID.ingotTin         );
    Recipes.addFurnace(ItemID.dustLead        ,ItemID.ingotLead        );
    Recipes.addFurnace(ItemID.dustIron        ,265                     );
    Recipes.addFurnace(ItemID.dustGold        ,266                     );
    Recipes.addFurnace(ItemID.dustAntimony    ,ItemID.ingotAntimony    );
    Recipes.addFurnace(ItemID.dustLithium     ,ItemID.ingotLithium     );
    Recipes.addFurnace(ItemID.dustUranium     ,ItemID.ingotUranium     );
    Recipes.addFurnace(ItemID.dustSilver      ,ItemID.ingotSilver      );
    Recipes.addFurnace(ItemID.dustTetrahedrite,ItemID.ingotTetrahedrite);
    Recipes.addFurnace(ItemID.dustAluminium   ,ItemID.ingotAluminium   );
    Recipes.addFurnace(ItemID.dustLeadAntimony,ItemID.ingotLeadAntimony);
    Recipes.addFurnace(ItemID.dustSherlock    ,ItemID.ingotSherlock    );

    // 高炉
    ETRecipe.addBlastFurnaceRecipe({id:ItemID.dustTungsten,data:0},[{id:ItemID.ingotTungsten,count:1,data:0}]);

    // 打粉机
    ETRecipe.addMaceratorRecipe({id:368,data:0},{id:ItemID.dustEnder  ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:264,data:0},{id:ItemID.dustDiamond,count:1,data:0});

    ETRecipe.addMaceratorRecipe({id:ItemID.crushedPurifiedCopper      ,data:0},{id:ItemID.dustCopper      ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedPurifiedTin         ,data:0},{id:ItemID.dustTin         ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedPurifiedLead        ,data:0},{id:ItemID.dustLead        ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedPurifiedIron        ,data:0},{id:ItemID.dustIron        ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedPurifiedGold        ,data:0},{id:ItemID.dustGold        ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedPurifiedAntimony    ,data:0},{id:ItemID.dustAntimony    ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedPurifiedLithium     ,data:0},{id:ItemID.dustLithium     ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedPurifiedCarbon      ,data:0},{id:ItemID.dustCarbon      ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedPurifiedTungsten    ,data:0},{id:ItemID.dustTungsten    ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedPurifiedUranium     ,data:0},{id:ItemID.dustUranium     ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedPurifiedSilver      ,data:0},{id:ItemID.dustSilver      ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedPurifiedTetrahedrite,data:0},{id:ItemID.dustTetrahedrite,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedPurifiedAluminium   ,data:0},{id:ItemID.dustAluminium   ,count:2,data:0});
    
    ETRecipe.addMaceratorRecipe({id:ItemID.ingotCopper      ,data:0},{id:ItemID.dustCopper      ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.ingotTin         ,data:0},{id:ItemID.dustTin         ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.ingotLead        ,data:0},{id:ItemID.dustLead        ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:265                     ,data:0},{id:ItemID.dustIron        ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.ingotSteel       ,data:0},{id:ItemID.dustSteel       ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:266                     ,data:0},{id:ItemID.dustGold        ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.ingotAntimony    ,data:0},{id:ItemID.dustAntimony    ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.ingotLithium     ,data:0},{id:ItemID.dustLithium     ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.ingotTungsten    ,data:0},{id:ItemID.dustTungsten    ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.ingotUranium     ,data:0},{id:ItemID.dustUranium     ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.ingotSilver      ,data:0},{id:ItemID.dustSilver      ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.ingotTetrahedrite,data:0},{id:ItemID.dustTetrahedrite,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.ingotAluminium   ,data:0},{id:ItemID.dustAluminium   ,count:1,data:0});
});