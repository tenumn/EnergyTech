Callback.addCallback("PreLoaded",function(){
    // 种植机
    ETRecipe.addFarmingStationRecipe({id:6,data:0},[{id:17,count:4,data:0},{id:6,count:1,data:0},{id:260,count:1,data:0}],{id:3,data:0});
    ETRecipe.addFarmingStationRecipe({id:6,data:1},[{id:17,count:4,data:1},{id:6,count:1,data:1}],{id:3,data:0});
    ETRecipe.addFarmingStationRecipe({id:6,data:2},[{id:17,count:4,data:2},{id:6,count:1,data:2}],{id:3,data:0});
    ETRecipe.addFarmingStationRecipe({id:6,data:3},[{id:17,count:4,data:3},{id:6,count:1,data:3}],{id:3,data:0});
    ETRecipe.addFarmingStationRecipe({id:6,data:4},[{id:162,count:4,data:0},{id:6,count:1,data:4}],{id:3,data:0});
    ETRecipe.addFarmingStationRecipe({id:6,data:5},[{id:162,count:4,data:1},{id:6,count:1,data:5}],{id:3,data:0});
    ETRecipe.addFarmingStationRecipe({id:81,data:0},[{id:81,count:2,data:0}],{id:12,data:-1});
    ETRecipe.addFarmingStationRecipe({id:83,data:0},[{id:83,count:2,data:0}],{id:12,data:-1});
    ETRecipe.addFarmingStationRecipe({id:295,data:0},[{id:296,count:1,data:0},{id:295,count:1,data:0}],{id:3,data:0});
    ETRecipe.addFarmingStationRecipe({id:361,data:0},[{id:86,count:1,data:0}],{id:3,data:0});
    ETRecipe.addFarmingStationRecipe({id:362,data:0},[{id:103,count:1,data:0}],{id:3,data:0});
    ETRecipe.addFarmingStationRecipe({id:372,data:0},[{id:372,count:2,data:0}],{id:88,data:0});
    ETRecipe.addFarmingStationRecipe({id:391,data:0},[{id:391,count:1,data:0}],{id:3,data:0});
    ETRecipe.addFarmingStationRecipe({id:392,data:0},[{id:392,count:1,data:0},{id:394,count:1,data:0}],{id:3,data:0});
    ETRecipe.addFarmingStationRecipe({id:435,data:0},[{id:434,count:1,data:0},{id:435,count:1,data:0}],{id:3,data:0});
    
    // 锤子
    ETTool.setHammerDestroyDrop(15,BlockID.gravelIron,1,0);
    ETTool.setHammerDestroyDrop(14,BlockID.gravelGold,1,0);
    
    // 高压釜
    ETRecipe.addAutoclaveRecipe({id:ItemID.dustEnder  ,count:1,data:0},{id:368,count:1,data:0});
    ETRecipe.addAutoclaveRecipe({id:ItemID.dustDiamond,count:1,data:0},{id:264,count:1,data:0});
});