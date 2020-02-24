CreateCrushedOre = function(name){
    IDRegistry.genItemID("crushed" + name);
    IDRegistry.genItemID("crushedPurified" + name);
    Item.createItem("crushed" + name,"Crushed " + name + " Ore",{name:"crushed" + name});    
    Item.createItem("crushedPurified" + name,"Purified Crushed " + name + " Ore",{name:"crushedPurified" + name});
}

CreateCrushedOre("Copper"      );
CreateCrushedOre("Tin"         );
CreateCrushedOre("Lead"        );
CreateCrushedOre("Iron"        );
CreateCrushedOre("Gold"        );
CreateCrushedOre("Antimony"    );
CreateCrushedOre("Lithium"     );
CreateCrushedOre("Carbon"      );
CreateCrushedOre("Tungsten"    );
CreateCrushedOre("Uranium"     );
CreateCrushedOre("Silver"      );
CreateCrushedOre("Tetrahedrite");

Callback.addCallback("PreLoaded",function(){
    // 熔炉
    Recipes.addFurnace(ItemID.crushedCopper      ,ItemID.ingotCopper  );
    Recipes.addFurnace(ItemID.crushedTin         ,ItemID.ingotTin     );
    Recipes.addFurnace(ItemID.crushedLead        ,ItemID.ingotLead    );
    Recipes.addFurnace(ItemID.crushedIron        ,265                 );
    Recipes.addFurnace(ItemID.crushedGold        ,266                 );
    Recipes.addFurnace(ItemID.crushedAntimony    ,ItemID.ingotAntimony);
    Recipes.addFurnace(ItemID.crushedLithium     ,ItemID.ingotLithium );
    Recipes.addFurnace(ItemID.crushedTungsten    ,ItemID.ingotTungsten);
    Recipes.addFurnace(ItemID.crushedUranium     ,ItemID.ingotUranium );
    Recipes.addFurnace(ItemID.crushedSilver      ,ItemID.ingotSilver  );
    Recipes.addFurnace(ItemID.crushedTetrahedrite,ItemID.ingotCopper  );

    // 熔炉
    Recipes.addFurnace(ItemID.crushedPurifiedCopper      ,ItemID.ingotCopper  );
    Recipes.addFurnace(ItemID.crushedPurifiedTin         ,ItemID.ingotTin     );
    Recipes.addFurnace(ItemID.crushedPurifiedLead        ,ItemID.ingotLead    );
    Recipes.addFurnace(ItemID.crushedPurifiedIron        ,265                 );
    Recipes.addFurnace(ItemID.crushedPurifiedGold        ,266                 );
    Recipes.addFurnace(ItemID.crushedPurifiedAntimony    ,ItemID.ingotAntimony);
    Recipes.addFurnace(ItemID.crushedPurifiedLithium     ,ItemID.ingotLithium );
    Recipes.addFurnace(ItemID.crushedPurifiedTungsten    ,ItemID.ingotTungsten);
    Recipes.addFurnace(ItemID.crushedPurifiedUranium     ,ItemID.ingotUranium );
    Recipes.addFurnace(ItemID.crushedPurifiedSilver      ,ItemID.ingotSilver  );
    Recipes.addFurnace(ItemID.crushedPurifiedTetrahedrite,ItemID.ingotCopper  );

    // 洗矿机
    ETRecipe.addOreWasherRecipe([{id:ItemID.crushedPurifiedCopper      ,count:1,data:0},{id:ItemID.dustSmallTin     ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedCopper      ,data:0});
    ETRecipe.addOreWasherRecipe([{id:ItemID.crushedPurifiedTin         ,count:1,data:0},{id:ItemID.dustSmallIron    ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedTin         ,data:0});
    ETRecipe.addOreWasherRecipe([{id:ItemID.crushedPurifiedLead        ,count:1,data:0},{id:ItemID.dustSmallCopper  ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedLead        ,data:0});
    ETRecipe.addOreWasherRecipe([{id:ItemID.crushedPurifiedIron        ,count:1,data:0},{id:ItemID.dustSmallGold    ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedIron        ,data:0});
    ETRecipe.addOreWasherRecipe([{id:ItemID.crushedPurifiedGold        ,count:1,data:0},{id:ItemID.dustSmallSilver  ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedGold        ,data:0});
    ETRecipe.addOreWasherRecipe([{id:ItemID.crushedPurifiedAntimony    ,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedAntimony    ,data:0});
    ETRecipe.addOreWasherRecipe([{id:ItemID.crushedPurifiedLithium     ,count:1,data:0},{id:ItemID.dustSmallLithium ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedLithium     ,data:0});
    ETRecipe.addOreWasherRecipe([{id:ItemID.crushedPurifiedCarbon      ,count:1,data:0},{id:ItemID.dustSmallCarbon  ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedCarbon      ,data:0});
    ETRecipe.addOreWasherRecipe([{id:ItemID.crushedPurifiedTungsten    ,count:1,data:0},{id:ItemID.dustSmallTin     ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedTungsten    ,data:0});
    ETRecipe.addOreWasherRecipe([{id:ItemID.crushedPurifiedUranium     ,count:1,data:0},{id:ItemID.dustSmallUranium ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedUranium     ,data:0});
    ETRecipe.addOreWasherRecipe([{id:ItemID.crushedPurifiedSilver      ,count:1,data:0},{id:ItemID.dustSmallGold    ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedSilver      ,data:0});
    ETRecipe.addOreWasherRecipe([{id:ItemID.crushedPurifiedTetrahedrite,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedTetrahedrite,data:0});
    
    // 离心机
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustCopper      ,count:1,data:0},{id:ItemID.dustSmallTin     ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedCopper      ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustTin         ,count:1,data:0},{id:ItemID.dustSmallIron    ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedTin         ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustLead        ,count:1,data:0},{id:ItemID.dustSmallCopper  ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedLead        ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustIron        ,count:1,data:0},{id:ItemID.dustSmallGold    ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedIron        ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustGold        ,count:1,data:0},{id:ItemID.dustSmallSilver  ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedGold        ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustAntimony    ,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedAntimony    ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.smallLithium6   ,count:1,data:0},{id:ItemID.lithium7         ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedLithium     ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustCarbon      ,count:1,data:0},{id:ItemID.dustSmallCarbon  ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedCarbon      ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustTungsten    ,count:1,data:0},{id:ItemID.dustSmallTin     ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedTungsten    ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.smallUranium235 ,count:1,data:0},{id:ItemID.uranium238       ,count:4,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedUranium     ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustSilver      ,count:1,data:0},{id:ItemID.dustSmallGold    ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedSilver      ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustTetrahedrite,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedTetrahedrite,data:0});

    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustCopper      ,count:1,data:0},{id:ItemID.dustSmallTin     ,count:1,data:0}],{id:ItemID.crushedPurifiedCopper      ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustTin         ,count:1,data:0},{id:ItemID.dustSmallIron    ,count:1,data:0}],{id:ItemID.crushedPurifiedTin         ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustLead        ,count:1,data:0},{id:ItemID.dustSmallCopper  ,count:1,data:0}],{id:ItemID.crushedPurifiedLead        ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustIron        ,count:1,data:0},{id:ItemID.dustSmallGold    ,count:1,data:0}],{id:ItemID.crushedPurifiedIron        ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustGold        ,count:1,data:0},{id:ItemID.dustSmallSilver  ,count:1,data:0}],{id:ItemID.crushedPurifiedGold        ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustAntimony    ,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0}],{id:ItemID.crushedPurifiedAntimony    ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.smallLithium6   ,count:2,data:0},{id:ItemID.lithium7         ,count:2,data:0}],{id:ItemID.crushedPurifiedLithium     ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustCarbon      ,count:1,data:0},{id:ItemID.dustSmallCarbon  ,count:1,data:0}],{id:ItemID.crushedPurifiedCarbon      ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustTungsten    ,count:1,data:0},{id:ItemID.dustSmallTin     ,count:1,data:0}],{id:ItemID.crushedPurifiedTungsten    ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.smallUranium235 ,count:2,data:0},{id:ItemID.uranium238       ,count:5,data:0}],{id:ItemID.crushedPurifiedUranium     ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustSilver      ,count:1,data:0},{id:ItemID.dustSmallGold    ,count:1,data:0}],{id:ItemID.crushedPurifiedSilver      ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustTetrahedrite,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0}],{id:ItemID.crushedPurifiedTetrahedrite,data:0});
    
    // 锤
    var hammer = ETTool.getAllTool("Hammer");
    for(var i in hammer){
        ETRecipe.addShapeless({id:ItemID.crushedCopper      ,count:1,data:0},[{id:BlockID.oreCopper      ,data:0}],hammer[i]);
        ETRecipe.addShapeless({id:ItemID.crushedTin         ,count:1,data:0},[{id:BlockID.oreTin         ,data:0}],hammer[i]);
        ETRecipe.addShapeless({id:ItemID.crushedLead        ,count:1,data:0},[{id:BlockID.oreLead        ,data:0}],hammer[i]);
        ETRecipe.addShapeless({id:ItemID.crushedIron        ,count:1,data:0},[{id:15                     ,data:0}],hammer[i]);
        ETRecipe.addShapeless({id:ItemID.crushedGold        ,count:1,data:0},[{id:14                     ,data:0}],hammer[i]);
        ETRecipe.addShapeless({id:ItemID.crushedAntimony    ,count:1,data:0},[{id:BlockID.oreAntimony    ,data:0}],hammer[i]);
        ETRecipe.addShapeless({id:ItemID.crushedLithium     ,count:1,data:0},[{id:BlockID.oreLithium     ,data:0}],hammer[i]);
        ETRecipe.addShapeless({id:ItemID.crushedCarbon      ,count:1,data:0},[{id:BlockID.oreGraphite    ,data:0}],hammer[i]);
        ETRecipe.addShapeless({id:ItemID.crushedTungsten    ,count:1,data:0},[{id:BlockID.oreTungsten    ,data:0}],hammer[i]);
        ETRecipe.addShapeless({id:ItemID.crushedUranium     ,count:1,data:0},[{id:BlockID.oreUranium     ,data:0}],hammer[i]);
        ETRecipe.addShapeless({id:ItemID.crushedSilver      ,count:1,data:0},[{id:BlockID.oreSilver      ,data:0}],hammer[i]);
        ETRecipe.addShapeless({id:ItemID.crushedTetrahedrite,count:1,data:0},[{id:BlockID.oreTetrahedrite,data:0}],hammer[i]);
    }

    // 破碎机
    ETRecipe.addCrusherRecipe({id:ItemID.crushedCopper      ,count:2,data:0},{id:BlockID.oreCopper      ,data:0});
    ETRecipe.addCrusherRecipe({id:ItemID.crushedTin         ,count:2,data:0},{id:BlockID.oreTin         ,data:0});
    ETRecipe.addCrusherRecipe({id:ItemID.crushedLead        ,count:2,data:0},{id:BlockID.oreLead        ,data:0});
    ETRecipe.addCrusherRecipe({id:ItemID.crushedIron        ,count:2,data:0},{id:15                     ,data:0});
    ETRecipe.addCrusherRecipe({id:ItemID.crushedGold        ,count:2,data:0},{id:14                     ,data:0});
    ETRecipe.addCrusherRecipe({id:ItemID.crushedAntimony    ,count:2,data:0},{id:BlockID.oreAntimony    ,data:0});
    ETRecipe.addCrusherRecipe({id:ItemID.crushedLithium     ,count:2,data:0},{id:BlockID.oreLithium     ,data:0});
    ETRecipe.addCrusherRecipe({id:ItemID.crushedCarbon      ,count:2,data:0},{id:BlockID.oreGraphite    ,data:0});
    ETRecipe.addCrusherRecipe({id:ItemID.crushedTungsten    ,count:2,data:0},{id:BlockID.oreTungsten    ,data:0});
    ETRecipe.addCrusherRecipe({id:ItemID.crushedUranium     ,count:2,data:0},{id:BlockID.oreUranium     ,data:0});
    ETRecipe.addCrusherRecipe({id:ItemID.crushedSilver      ,count:2,data:0},{id:BlockID.oreSilver      ,data:0});
    ETRecipe.addCrusherRecipe({id:ItemID.crushedTetrahedrite,count:2,data:0},{id:BlockID.oreTetrahedrite,data:0});
});