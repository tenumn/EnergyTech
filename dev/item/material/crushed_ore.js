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

Callback.addCallback("PreLoaded",function(){
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
    ETRecipe.addCrusherRecipe({id:BlockID.oreCopper  ,data:0},{id:ItemID.crushedCopper  ,count:2,data:0});
    ETRecipe.addCrusherRecipe({id:BlockID.oreTin     ,data:0},{id:ItemID.crushedTin     ,count:2,data:0});
    ETRecipe.addCrusherRecipe({id:BlockID.oreLead    ,data:0},{id:ItemID.crushedLead    ,count:2,data:0});
    ETRecipe.addCrusherRecipe({id:15                 ,data:0},{id:ItemID.crushedIron    ,count:2,data:0});
    ETRecipe.addCrusherRecipe({id:14                 ,data:0},{id:ItemID.crushedGold    ,count:2,data:0});
    ETRecipe.addCrusherRecipe({id:BlockID.oreAntimony,data:0},{id:ItemID.crushedAntimony,count:2,data:0});
    ETRecipe.addCrusherRecipe({id:BlockID.oreLithium ,data:0},{id:ItemID.crushedLithium ,count:2,data:0});
    ETRecipe.addCrusherRecipe({id:BlockID.oreGraphite,data:0},{id:ItemID.crushedCarbon  ,count:2,data:0});
    ETRecipe.addCrusherRecipe({id:BlockID.oreTungsten,data:0},{id:ItemID.crushedTungsten,count:2,data:0});
});