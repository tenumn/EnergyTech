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
    
    // 切割机
    ETRecipe.addCuttingRecipe({id:17 ,count:1,data:0},{id:5,count:6,data:0});
    ETRecipe.addCuttingRecipe({id:17 ,count:1,data:1},{id:5,count:6,data:1});
    ETRecipe.addCuttingRecipe({id:17 ,count:1,data:2},{id:5,count:6,data:2});
    ETRecipe.addCuttingRecipe({id:17 ,count:1,data:3},{id:5,count:6,data:3});
    ETRecipe.addCuttingRecipe({id:162,count:1,data:0},{id:5,count:6,data:4});
    ETRecipe.addCuttingRecipe({id:162,count:1,data:1},{id:5,count:6,data:5});

    ETRecipe.addCuttingRecipe({id:5,count:1,data:0},{id:158,count:2,data:0});
    ETRecipe.addCuttingRecipe({id:5,count:1,data:1},{id:158,count:2,data:1});
    ETRecipe.addCuttingRecipe({id:5,count:1,data:2},{id:158,count:2,data:2});
    ETRecipe.addCuttingRecipe({id:5,count:1,data:3},{id:158,count:2,data:3});
    ETRecipe.addCuttingRecipe({id:5,count:1,data:4},{id:158,count:2,data:4});
    ETRecipe.addCuttingRecipe({id:5,count:1,data:5},{id:158,count:2,data:5});

    // 锤子
    ETTool.setHammerDestroyDrop(15,BlockID.gravelIron,1,0);
    ETTool.setHammerDestroyDrop(14,BlockID.gravelGold,1,0);
    
    // 高压釜
    ETRecipe.addAutoclaveRecipe({id:ItemID.dustEnder  ,count:1,data:0},[{id:368,count:1,data:0}]);
    ETRecipe.addAutoclaveRecipe({id:ItemID.dustDiamond,count:1,data:0},[{id:264,count:1,data:0}]);

    // 合成
    Recipes.addShaped({id:287,count:2,data:0},["aa","aa"],["a",ItemID.cotton,0]);

    var file = ETTool.getAllTool("File"),hammer = ETTool.getAllTool("Hammer");
    for(let hi = 0;hi < hammer.length;hi++){
        ETRecipe.addShapedRecipe({id:325,count:1,data:0},["   ","aba"," a "],["a",ItemID.plateIron,0,"b",hammer[hi],-1],{4:1});
        for(let fi = 0;fi < file.length;fi++){
            ETRecipe.addShapedRecipe({id:267,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateIron,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{0:1,2:1});
            ETRecipe.addShapedRecipe({id:256,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateIron,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{0:1,2:1});
            ETRecipe.addShapedRecipe({id:257,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateIron,0,"b",280,0,"c",265,0,"d",file[fi],-1,"e",hammer[hi],-1],{3:1,5:1});
            ETRecipe.addShapedRecipe({id:258,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateIron,0,"b",280,0,"c",265,0,"d",file[fi],-1,"e",hammer[hi],-1],{2:1,5:1});
            ETRecipe.addShapedRecipe({id:292,count:1,data:0},["aac","db "," b "],["a",ItemID.plateIron,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{2:1,3:1});

            ETRecipe.addShapedRecipe({id:283,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateGold,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{0:1,2:1});
            ETRecipe.addShapedRecipe({id:284,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateGold,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{0:1,2:1});
            ETRecipe.addShapedRecipe({id:285,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateGold,0,"b",280,0,"c",266,0,"d",file[fi],-1,"e",hammer[hi],-1],{3:1,5:1});
            ETRecipe.addShapedRecipe({id:286,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateGold,0,"b",280,0,"c",266,0,"d",file[fi],-1,"e",hammer[hi],-1],{2:1,5:1});
            ETRecipe.addShapedRecipe({id:294,count:1,data:0},["aac","db "," b "],["a",ItemID.plateGold,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{2:1,3:1});

            ETRecipe.addShapedRecipe({id:276,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateDiamond,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{0:1,2:1});
            ETRecipe.addShapedRecipe({id:277,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateDiamond,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{0:1,2:1});
            ETRecipe.addShapedRecipe({id:278,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateDiamond,0,"b",280,0,"c",264,0,"d",file[fi],-1,"e",hammer[hi],-1],{3:1,5:1});
            ETRecipe.addShapedRecipe({id:279,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateDiamond,0,"b",280,0,"c",264,0,"d",file[fi],-1,"e",hammer[hi],-1],{2:1,5:1});
            ETRecipe.addShapedRecipe({id:293,count:1,data:0},["aac","db "," b "],["a",ItemID.plateDiamond,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{2:1,3:1});
        }
    }
});