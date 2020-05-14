Callback.addCallback("PreLoaded",function(){
    Tool.setHammerDestroyDrop(15,BlockID.gravelIron,1,0);
    Tool.setHammerDestroyDrop(14,BlockID.gravelGold,1,0);

    RecipeRegistry.addCuttingRecipe({id:17,count:1,data:0},{id:5,count:6,data:0});
    RecipeRegistry.addCuttingRecipe({id:17,count:1,data:1},{id:5,count:6,data:1});
    RecipeRegistry.addCuttingRecipe({id:17,count:1,data:2},{id:5,count:6,data:2});
    RecipeRegistry.addCuttingRecipe({id:17,count:1,data:3},{id:5,count:6,data:3});
    RecipeRegistry.addCuttingRecipe({id:162,count:1,data:0},{id:5,count:6,data:4});
    RecipeRegistry.addCuttingRecipe({id:162,count:1,data:1},{id:5,count:6,data:5});
    RecipeRegistry.addCuttingRecipe({id:5,count:1,data:0},{id:158,count:2,data:0});
    RecipeRegistry.addCuttingRecipe({id:5,count:1,data:1},{id:158,count:2,data:1});
    RecipeRegistry.addCuttingRecipe({id:5,count:1,data:2},{id:158,count:2,data:2});
    RecipeRegistry.addCuttingRecipe({id:5,count:1,data:3},{id:158,count:2,data:3});
    RecipeRegistry.addCuttingRecipe({id:5,count:1,data:4},{id:158,count:2,data:4});
    RecipeRegistry.addCuttingRecipe({id:5,count:1,data:5},{id:158,count:2,data:5});

    RecipeRegistry.addAutoclaveRecipe({id:ItemID.dustEnder,count:1,data:0},{id:368,count:1,data:0});
    RecipeRegistry.addAutoclaveRecipe({id:ItemID.dustDiamond,count:1,data:0},{id:264,count:1,data:0});

    RecipeRegistry.addFarmingStationRecipe({id:6,data:0},[{id:17,count:4,data:0},{id:6,count:1,data:0},{id:260,count:1,data:0}],{id:3,data:0});
    RecipeRegistry.addFarmingStationRecipe({id:6,data:1},[{id:17,count:4,data:1},{id:6,count:1,data:1}],{id:3,data:0});
    RecipeRegistry.addFarmingStationRecipe({id:6,data:2},[{id:17,count:4,data:2},{id:6,count:1,data:2}],{id:3,data:0});
    RecipeRegistry.addFarmingStationRecipe({id:6,data:3},[{id:17,count:4,data:3},{id:6,count:1,data:3}],{id:3,data:0});
    RecipeRegistry.addFarmingStationRecipe({id:6,data:4},[{id:162,count:4,data:0},{id:6,count:1,data:4}],{id:3,data:0});
    RecipeRegistry.addFarmingStationRecipe({id:6,data:5},[{id:162,count:4,data:1},{id:6,count:1,data:5}],{id:3,data:0});
    RecipeRegistry.addFarmingStationRecipe({id:81,data:0},[{id:81,count:2,data:0}],{id:12,data:-1});
    RecipeRegistry.addFarmingStationRecipe({id:83,data:0},[{id:83,count:2,data:0}],{id:12,data:-1});
    RecipeRegistry.addFarmingStationRecipe({id:295,data:0},[{id:296,count:1,data:0},{id:295,count:1,data:0}],{id:3,data:0});
    RecipeRegistry.addFarmingStationRecipe({id:361,data:0},[{id:86,count:1,data:0}],{id:3,data:0});
    RecipeRegistry.addFarmingStationRecipe({id:362,data:0},[{id:103,count:1,data:0}],{id:3,data:0});
    RecipeRegistry.addFarmingStationRecipe({id:372,data:0},[{id:372,count:2,data:0}],{id:88,data:0});
    RecipeRegistry.addFarmingStationRecipe({id:391,data:0},[{id:391,count:1,data:0}],{id:3,data:0});
    RecipeRegistry.addFarmingStationRecipe({id:392,data:0},[{id:392,count:1,data:0},{id:394,count:1,data:0}],{id:3,data:0});
    RecipeRegistry.addFarmingStationRecipe({id:435,data:0},[{id:434,count:1,data:0},{id:435,count:1,data:0}],{id:3,data:0});

    Tool.registerTool(256,"Shovel");
    Tool.registerTool(257,"Pickaxe");
    Tool.registerTool(258,"Axe");
    Tool.registerTool(267,"Sword");
    Tool.registerTool(268,"Sword");
    Tool.registerTool(269,"Shovel");
    Tool.registerTool(270,"Pickaxe");
    Tool.registerTool(271,"Axe");
    Tool.registerTool(272,"Sword");
    Tool.registerTool(273,"Shovel");
    Tool.registerTool(274,"Pickaxe");
    Tool.registerTool(275,"Axe");
    Tool.registerTool(276,"Sword");
    Tool.registerTool(277,"Shovel");
    Tool.registerTool(278,"Pickaxe");
    Tool.registerTool(279,"Axe");
    Tool.registerTool(283,"Sword");
    Tool.registerTool(284,"Shovel");
    Tool.registerTool(285,"Pickaxe");
    Tool.registerTool(286,"Axe");
    Tool.registerTool(290,"Hoe");
    Tool.registerTool(291,"Hoe");
    Tool.registerTool(292,"Hoe");
    Tool.registerTool(293,"Hoe");
    Tool.registerTool(294,"Hoe");

    Recipes.deleteRecipeFor([
        {id:256,count:1,data:0},
        {id:257,count:1,data:0},
        {id:258,count:1,data:0},
        {id:267,count:1,data:0},
        {id:268,count:1,data:0},
        {id:269,count:1,data:0},
        {id:270,count:1,data:0},
        {id:271,count:1,data:0},
        {id:272,count:1,data:0},
        {id:273,count:1,data:0},
        {id:274,count:1,data:0},
        {id:275,count:1,data:0},
        {id:276,count:1,data:0},
        {id:277,count:1,data:0},
        {id:278,count:1,data:0},
        {id:279,count:1,data:0},
        {id:283,count:1,data:0},
        {id:284,count:1,data:0},
        {id:285,count:1,data:0},
        {id:286,count:1,data:0},
        {id:290,count:1,data:0},
        {id:292,count:1,data:0},
        {id:293,count:1,data:0},
        {id:294,count:1,data:0},
        {id:302,count:1,data:0},
        {id:303,count:1,data:0},
        {id:304,count:1,data:0},
        {id:305,count:1,data:0},
        {id:306,count:1,data:0},
        {id:307,count:1,data:0},
        {id:308,count:1,data:0},
        {id:309,count:1,data:0},
        {id:310,count:1,data:0},
        {id:311,count:1,data:0},
        {id:312,count:1,data:0},
        {id:313,count:1,data:0},
        {id:314,count:1,data:0},
        {id:315,count:1,data:0},
        {id:316,count:1,data:0},
        {id:317,count:1,data:0},
        {id:325,count:1,data:0},
        {id:380,count:1,data:0},
        {id:410,count:1,data:0}
    ]);

    Recipes.removeFurnaceRecipe(12);
    Recipes.removeFurnaceRecipe(17);
    Recipes.removeFurnaceRecipe(162);

    Recipes.addShapeless({id:4,count:1,data:0},[{id:ItemID.smallStone,data:0},{id:ItemID.smallStone,data:0},{id:ItemID.smallStone,data:0},{id:ItemID.smallStone,data:0}]);
    Recipes.addShapeless({id:5,count:4,data:1},[{id:BlockID.rubberTreeLog,data:-1}]);

    var file = Tool.getAllTool("File"),hammer = Tool.getAllTool("Hammer");
    for(let hi = 0;hi < hammer.length;hi++){
        RecipeRegistry.addShapedRecipe({id:325,count:1,data:0},["   ","aba"," a "],["a",ItemID.plateIron,0,"b",hammer[hi],-1],{4:1});
        RecipeRegistry.addShapedRecipe({id:380,count:1,data:0},["a a","aba","aaa"],["a",ItemID.plateIron,0,"b",hammer[hi],-1],{4:1});
        RecipeRegistry.addShapedRecipe({id:410,count:1,data:0},["aca","aba"," a "],["a",ItemID.plateIron,0,"b",54,0,"c",hammer[hi],-1],{1:1});
        
        RecipeRegistry.addShapedRecipe({id:302,count:1,data:0},["aaa","aba","   "],["a",ItemID.ringSteel,0,"b",hammer[hi],-1],{1:1});
        RecipeRegistry.addShapedRecipe({id:303,count:1,data:0},["aba","aaa","aaa"],["a",ItemID.ringSteel,0,"b",hammer[hi],-1],{1:1});
        RecipeRegistry.addShapedRecipe({id:304,count:1,data:0},["aaa","aba","a a"],["a",ItemID.ringSteel,0,"b",hammer[hi],-1],{1:1});
        RecipeRegistry.addShapedRecipe({id:305,count:1,data:0},["aba","a a","   "],["a",ItemID.ringSteel,0,"b",hammer[hi],-1],{1:1});

        RecipeRegistry.addShapedRecipe({id:306,count:1,data:0},["aaa","aba","   "],["a",ItemID.plateIron,0,"b",hammer[hi],-1],{1:1});
        RecipeRegistry.addShapedRecipe({id:307,count:1,data:0},["aba","aaa","aaa"],["a",ItemID.plateIron,0,"b",hammer[hi],-1],{1:1});
        RecipeRegistry.addShapedRecipe({id:308,count:1,data:0},["aaa","aba","a a"],["a",ItemID.plateIron,0,"b",hammer[hi],-1],{1:1});
        RecipeRegistry.addShapedRecipe({id:309,count:1,data:0},["aba","a a","   "],["a",ItemID.plateIron,0,"b",hammer[hi],-1],{1:1});

        RecipeRegistry.addShapedRecipe({id:314,count:1,data:0},["aaa","aba","   "],["a",ItemID.plateGold,0,"b",hammer[hi],-1],{1:1});
        RecipeRegistry.addShapedRecipe({id:315,count:1,data:0},["aba","aaa","aaa"],["a",ItemID.plateGold,0,"b",hammer[hi],-1],{1:1});
        RecipeRegistry.addShapedRecipe({id:316,count:1,data:0},["aaa","aba","a a"],["a",ItemID.plateGold,0,"b",hammer[hi],-1],{1:1});
        RecipeRegistry.addShapedRecipe({id:317,count:1,data:0},["aba","a a","   "],["a",ItemID.plateGold,0,"b",hammer[hi],-1],{1:1});

        for(let fi = 0;fi < file.length;fi++){
            RecipeRegistry.addShapedRecipe({id:256,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateIron,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:257,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateIron,0,"b",280,0,"c",265,0,"d",file[fi],-1,"e",hammer[hi],-1],{3:1,5:1});
            RecipeRegistry.addShapedRecipe({id:258,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateIron,0,"b",280,0,"c",265,0,"d",file[fi],-1,"e",hammer[hi],-1],{2:1,5:1});
            RecipeRegistry.addShapedRecipe({id:267,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateIron,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:283,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateGold,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:284,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateGold,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:285,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateGold,0,"b",280,0,"c",266,0,"d",file[fi],-1,"e",hammer[hi],-1],{3:1,5:1});
            RecipeRegistry.addShapedRecipe({id:286,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateGold,0,"b",280,0,"c",266,0,"d",file[fi],-1,"e",hammer[hi],-1],{2:1,5:1});
            RecipeRegistry.addShapedRecipe({id:292,count:1,data:0},["aac","db "," b "],["a",ItemID.plateIron,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{2:1,3:1});
            RecipeRegistry.addShapedRecipe({id:294,count:1,data:0},["aac","db "," b "],["a",ItemID.plateGold,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{2:1,3:1});
        }
    }
});