Recipe.addDustRecipe = function(output,input){
    Recipes.addShaped({id:output.id,count:1,data:output.data},["aaa","aaa","aaa"],["a",input.id,input.data]);
    Recipes.addShapeless({id:input.id,count:9,data:input.data},[{id:output.id,data:output.data}]);
}

CreateDust = function(name,random){
    IDRegistry.genItemID("dust" + name);
    IDRegistry.genItemID("dustSmall" + name);
    Item.createItem("dust" + name,name + " Dust",{name:"dust" + name});
    Item.createItem("dustSmall" + name,"Small Pile of " + name + " Dust",{name:"dustSmall" + name});

    Callback.addCallback("PreLoaded",function(){
        // 自动筛子
        if(random){
            Recipe.addAutoSaieveRecipe({id:BlockID.dust,data:0},[{id:ItemID["dust"      + name],minCount:1,maxCount:1,data:0,random:random}]);
            Recipe.addAutoSaieveRecipe({id:BlockID.dust,data:0},[{id:ItemID["dustSmall" + name],minCount:3,maxCount:6,data:0,random:random}]);
        }

        // 合成
        Recipe.addDustRecipe({id:ItemID["dust" + name],data:0},{id:ItemID["dustSmall" + name],data:0});
    });
}

CreateDust("Stone");
CreateDust("Ender");
CreateDust("Flint");

CreateDust("Copper"      ,16);
CreateDust("Tin"         ,16);
CreateDust("Lead"        ,16);
CreateDust("Iron"        ,16);
CreateDust("Steel"       ,16);
CreateDust("Gold"        ,16);
CreateDust("Antimony"    ,16);
CreateDust("Lithium"     ,16);
CreateDust("Carbon"      ,16);
CreateDust("Tungsten"    ,16);
CreateDust("Uranium"     ,16);
CreateDust("Silver"      ,16);
CreateDust("Tetrahedrite",16);
CreateDust("Aluminium"   ,16);
CreateDust("Diamond"     ,16);

// 夏洛克合金粉
IDRegistry.genItemID("dustSherlock");
IDRegistry.genItemID("dustSmallSherlock");
Item.createItem("dustSherlock","Sherlock Alloy Dust",{name:"dustSherlock"});
Item.createItem("dustSmallSherlock","Small Pile Sherlock Alloy Dust",{name:"dustSmallSherlock"});

// [铅锑合金粉]Lead-Antimony Alloy Dust
IDRegistry.genItemID("dustLeadAntimony");
IDRegistry.genItemID("dustSmallLeadAntimony");
Item.createItem("dustLeadAntimony","Lead-Antimony Alloy Dust",{name:"dustLeadAntimony"});
Item.createItem("dustSmallLeadAntimony","Small Pile Lead-Antimony Alloy Dust",{name:"dustSmallLeadAntimony"});

// [二氧化硅粉]Silicon Dioxide Dust
IDRegistry.genItemID("dustSiliconDioxide");
IDRegistry.genItemID("dustSmallSiliconDioxide");
Item.createItem("dustSiliconDioxide","Silicon Dioxide Dust",{name:"dustSiliconDioxide"});
Item.createItem("dustSmallSiliconDioxide","Small Pile Silicon Dioxide Dust",{name:"dustSmallSiliconDioxide"});

Callback.addCallback("PreLoaded",function(){
    // 组
    Item.addCreativeGroup("ET-Dust",Translation.translate("Dust"),[
        ItemID.dustStone            ,
        ItemID.dustEnder            ,
        ItemID.dustCopper           ,
        ItemID.dustTin              ,
        ItemID.dustLead             ,
        ItemID.dustIron             ,
        ItemID.dustSteel            ,
        ItemID.dustGold             ,
        ItemID.dustAntimony         ,
        ItemID.dustLithium          ,
        ItemID.dustCarbon           ,
        ItemID.dustTungsten         ,
        ItemID.dustUranium          ,
        ItemID.dustSilver           ,
        ItemID.dustTetrahedrite     ,
        ItemID.dustAluminium        ,
        ItemID.dustSherlock         ,
        ItemID.dustLeadAntimony     ,
        ItemID.dustSiliconDioxide   ,
        ItemID.dustFlint            ,
        ItemID.dustDiamond             
    ]);

    Item.addCreativeGroup("ET-SmallDust",Translation.translate("Small Dust"),[
        ItemID.dustSmallStone         ,
        ItemID.dustSmallEnder         ,
        ItemID.dustSmallCopper        ,
        ItemID.dustSmallTin           ,
        ItemID.dustSmallLead          ,
        ItemID.dustSmallIron          ,
        ItemID.dustSmallSteel         ,
        ItemID.dustSmallGold          ,
        ItemID.dustSmallAntimony      ,
        ItemID.dustSmallLithium       ,
        ItemID.dustSmallCarbon        ,
        ItemID.dustSmallTungsten      ,
        ItemID.dustSmallUranium       ,
        ItemID.dustSmallSilver        ,
        ItemID.dustSmallTetrahedrite  ,
        ItemID.dustSmallAluminium     ,
        ItemID.dustSmallSherlock      ,
        ItemID.dustSmallLeadAntimony  ,
        ItemID.dustSmallSiliconDioxide,
        ItemID.dustSmallFlint         ,
        ItemID.dustSmallDiamond       
    ]);

    // 合成
    Recipes.addShapeless({id:ItemID.dustSmallLeadAntimony  ,count:9,data:0},[{id:ItemID.dustLeadAntimony  ,data:0}]);
    Recipes.addShapeless({id:ItemID.dustSmallSiliconDioxide,count:9,data:0},[{id:ItemID.dustSiliconDioxide,data:0}]);
    Recipes.addShapeless({id:ItemID.dustLeadAntimony,count:2,data:0},[{id:ItemID.dustLead ,data:0},{id:ItemID.dustAntimony,data:0}]);
    
    Recipes.addShaped({id:ItemID.dustLeadAntimony  ,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallLeadAntimony  ,0]);
    Recipes.addShaped({id:ItemID.dustSiliconDioxide,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallSiliconDioxide,0]);
    Recipes.addShaped({id:ItemID.dustSherlock      ,count:3,data:0},["bca","cdc","acb"],["a",348,0,"b",331,0,"c",ItemID.dustEnder,0,"d",ItemID.dustIron,0]);

    // 离心机
    Recipe.addCentrifugeRecipe({id:ItemID.dustFlint       ,data:0},[{id:ItemID.dustSmallSiliconDioxide,count:3,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.dustTetrahedrite,data:0},[{id:ItemID.dustCopper             ,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0}]);
    
    // 研钵
    var mortar = Tool.getAllTool("Mortar");
    for(var i in mortar){
        Recipe.addShapeless({id:ItemID.dustFlint       ,count:1,data:0},[{id:318                     ,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustCopper      ,count:1,data:0},[{id:ItemID.ingotCopper      ,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustTin         ,count:1,data:0},[{id:ItemID.ingotTin         ,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustLead        ,count:1,data:0},[{id:ItemID.ingotLead        ,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustIron        ,count:1,data:0},[{id:265                     ,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustGold        ,count:1,data:0},[{id:266                     ,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustAntimony    ,count:1,data:0},[{id:ItemID.ingotAntimony    ,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustLithium     ,count:1,data:0},[{id:ItemID.ingotLithium     ,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustTungsten    ,count:1,data:0},[{id:ItemID.ingotTungsten    ,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustUranium     ,count:1,data:0},[{id:ItemID.ingotUranium     ,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustSilver      ,count:1,data:0},[{id:ItemID.ingotSilver      ,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustTetrahedrite,count:1,data:0},[{id:ItemID.ingotTetrahedrite,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustAluminium   ,count:1,data:0},[{id:ItemID.ingotAluminium   ,count:1,data:0}],mortar[i]);
    }
    
    // 熔炉
    Recipes.addFurnace(ItemID.dustSiliconDioxide,20);
    
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
    Recipe.addBlastFurnaceRecipe({id:ItemID.dustTungsten,data:0},[{id:ItemID.ingotTungsten,count:1,data:0}]);

    // 打粉机
    Recipe.addMaceratorRecipe({id:318,data:0},{id:ItemID.dustFlint  ,count:1,data:0});
    Recipe.addMaceratorRecipe({id:368,data:0},{id:ItemID.dustEnder  ,count:1,data:0});
    Recipe.addMaceratorRecipe({id:264,data:0},{id:ItemID.dustDiamond,count:1,data:0});

    Recipe.addMaceratorRecipe({id:ItemID.ingotCopper      ,data:0},{id:ItemID.dustCopper      ,count:1,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.ingotTin         ,data:0},{id:ItemID.dustTin         ,count:1,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.ingotLead        ,data:0},{id:ItemID.dustLead        ,count:1,data:0});
    Recipe.addMaceratorRecipe({id:265                     ,data:0},{id:ItemID.dustIron        ,count:1,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.ingotSteel       ,data:0},{id:ItemID.dustSteel       ,count:1,data:0});
    Recipe.addMaceratorRecipe({id:266                     ,data:0},{id:ItemID.dustGold        ,count:1,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.ingotAntimony    ,data:0},{id:ItemID.dustAntimony    ,count:1,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.ingotLithium     ,data:0},{id:ItemID.dustLithium     ,count:1,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.ingotTungsten    ,data:0},{id:ItemID.dustTungsten    ,count:1,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.ingotUranium     ,data:0},{id:ItemID.dustUranium     ,count:1,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.ingotSilver      ,data:0},{id:ItemID.dustSilver      ,count:1,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.ingotTetrahedrite,data:0},{id:ItemID.dustTetrahedrite,count:1,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.ingotAluminium   ,data:0},{id:ItemID.dustAluminium   ,count:1,data:0});
    
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedCopper      ,data:0},{id:ItemID.dustCopper      ,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedTin         ,data:0},{id:ItemID.dustTin         ,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedLead        ,data:0},{id:ItemID.dustLead        ,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedIron        ,data:0},{id:ItemID.dustIron        ,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedGold        ,data:0},{id:ItemID.dustGold        ,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedAntimony    ,data:0},{id:ItemID.dustAntimony    ,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedLithium     ,data:0},{id:ItemID.dustLithium     ,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedCarbon      ,data:0},{id:ItemID.dustCarbon      ,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedTungsten    ,data:0},{id:ItemID.dustTungsten    ,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedUranium     ,data:0},{id:ItemID.dustUranium     ,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedSilver      ,data:0},{id:ItemID.dustSilver      ,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedTetrahedrite,data:0},{id:ItemID.dustTetrahedrite,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedAluminium   ,data:0},{id:ItemID.dustAluminium   ,count:2,data:0});
});