CreateCrushedOre = function(name){
    IDRegistry.genItemID("crushed" + name);
    IDRegistry.genItemID("crushedPurified" + name);
    Item.createItem("crushed" + name,"Crushed " + name + " Ore",{name:"crushed_" + name.toLowerCase() + "_ore"});    
    Item.createItem("crushedPurified" + name,"Purified Crushed " + name + " Ore",{name:"purified_crushed_" + name.toLowerCase() + "_ore"});
}

CreateCrushedOre("Copper"  );
CreateCrushedOre("Tin"     );
CreateCrushedOre("Lead"    );
CreateCrushedOre("Iron"    );
CreateCrushedOre("Gold"    );
CreateCrushedOre("Antimony");
CreateCrushedOre("Lithium" );
CreateCrushedOre("Carbon"  );
CreateCrushedOre("Tungsten");
CreateCrushedOre("Uranium" );
CreateCrushedOre("Silver"  );

Callback.addCallback("PreLoaded",function(){
    // 离心机
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustCopper     ,count:1,data:0},{id:ItemID.dustSmallTin     ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedCopper  ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustTin        ,count:1,data:0},{id:ItemID.dustSmallIron    ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedTin     ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustLead       ,count:1,data:0},{id:ItemID.dustSmallCopper  ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedLead    ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustIron       ,count:1,data:0},{id:ItemID.dustSmallGold    ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedIron    ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustGold       ,count:1,data:0},{id:ItemID.dustSmallSilver  ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedGold    ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustAntimony   ,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedAntimony,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.smallLithium6  ,count:1,data:0},{id:ItemID.lithium7         ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedLithium ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustCarbon     ,count:1,data:0},{id:ItemID.dustSmallCarbon  ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedCarbon  ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustTungsten   ,count:1,data:0},{id:ItemID.dustSmallTin     ,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedTungsten,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.smallUranium235,count:1,data:0},{id:ItemID.uranium238       ,count:4,data:0},{id:ItemID.dustStone,count:1,data:0}],{id:ItemID.crushedUranium ,data:0});
    
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustCopper     ,count:1,data:0},{id:ItemID.dustSmallTin     ,count:1,data:0}],{id:ItemID.crushedPurifiedCopper  ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustTin        ,count:1,data:0},{id:ItemID.dustSmallIron    ,count:1,data:0}],{id:ItemID.crushedPurifiedTin     ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustLead       ,count:1,data:0},{id:ItemID.dustSmallCopper  ,count:1,data:0}],{id:ItemID.crushedPurifiedLead    ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustIron       ,count:1,data:0},{id:ItemID.dustSmallGold    ,count:1,data:0}],{id:ItemID.crushedPurifiedIron    ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustGold       ,count:1,data:0},{id:ItemID.dustSmallSilver  ,count:1,data:0}],{id:ItemID.crushedPurifiedGold    ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustAntimony   ,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0}],{id:ItemID.crushedPurifiedAntimony,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.smallLithium6  ,count:2,data:0},{id:ItemID.lithium7         ,count:2,data:0}],{id:ItemID.crushedPurifiedLithium ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustCarbon     ,count:1,data:0},{id:ItemID.dustSmallCarbon  ,count:1,data:0}],{id:ItemID.crushedPurifiedCarbon  ,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.dustTungsten   ,count:1,data:0},{id:ItemID.dustSmallTin     ,count:1,data:0}],{id:ItemID.crushedPurifiedTungsten,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.smallUranium235,count:2,data:0},{id:ItemID.uranium238       ,count:5,data:0}],{id:ItemID.crushedPurifiedUranium ,data:0});

    // 锻造-锤
    ETRecipe.addHammerRecipe({id:ItemID.crushedCopper  ,count:1,data:0},[{id:BlockID.oreCopper  ,data:0}]);
    ETRecipe.addHammerRecipe({id:ItemID.crushedTin     ,count:1,data:0},[{id:BlockID.oreTin     ,data:0}]);
    ETRecipe.addHammerRecipe({id:ItemID.crushedLead    ,count:1,data:0},[{id:BlockID.oreLead    ,data:0}]);
    ETRecipe.addHammerRecipe({id:ItemID.crushedIron    ,count:1,data:0},[{id:15                 ,data:0}]);
    ETRecipe.addHammerRecipe({id:ItemID.crushedGold    ,count:1,data:0},[{id:14                 ,data:0}]);
    ETRecipe.addHammerRecipe({id:ItemID.crushedAntimony,count:1,data:0},[{id:BlockID.oreAntimony,data:0}]);
    ETRecipe.addHammerRecipe({id:ItemID.crushedLithium ,count:1,data:0},[{id:BlockID.oreLithium ,data:0}]);
    ETRecipe.addHammerRecipe({id:ItemID.crushedCarbon  ,count:1,data:0},[{id:BlockID.oreGraphite,data:0}]);
    ETRecipe.addHammerRecipe({id:ItemID.crushedTungsten,count:1,data:0},[{id:BlockID.oreTungsten,data:0}]);
    
    // 破碎机
    ETRecipe.addCrusherRecipe({id:ItemID.crushedCopper  ,count:2,data:0},{id:BlockID.oreCopper  ,data:0});
    ETRecipe.addCrusherRecipe({id:ItemID.crushedTin     ,count:2,data:0},{id:BlockID.oreTin     ,data:0});
    ETRecipe.addCrusherRecipe({id:ItemID.crushedLead    ,count:2,data:0},{id:BlockID.oreLead    ,data:0});
    ETRecipe.addCrusherRecipe({id:ItemID.crushedIron    ,count:2,data:0},{id:15                 ,data:0});
    ETRecipe.addCrusherRecipe({id:ItemID.crushedGold    ,count:2,data:0},{id:14                 ,data:0});
    ETRecipe.addCrusherRecipe({id:ItemID.crushedAntimony,count:2,data:0},{id:BlockID.oreAntimony,data:0});
    ETRecipe.addCrusherRecipe({id:ItemID.crushedLithium ,count:2,data:0},{id:BlockID.oreLithium ,data:0});
    ETRecipe.addCrusherRecipe({id:ItemID.crushedCarbon  ,count:2,data:0},{id:BlockID.oreGraphite,data:0});
    ETRecipe.addCrusherRecipe({id:ItemID.crushedTungsten,count:2,data:0},{id:BlockID.oreTungsten,data:0});
});