ETRecipe.addDustRecipe = function(output,input){
    Recipes.addShaped({id:output.id,count:1,data:output.data},["aaa","aaa","aaa"],["a",input.id,input.data]);
    Recipes.addShapeless({id:input.id,count:9,data:input.data},[{id:output.id,data:output.data}]);
}

CreateDust = function(name){
    IDRegistry.genItemID("dust" + name);
    IDRegistry.genItemID("dustSmall" + name);
    Item.createItem("dust" + name,name + " Dust",{name:"dust" + name});    
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

IDRegistry.genItemID("dustLeadAntimony");
Item.createItem("dustLeadAntimony","Lead-Antimony Alloy Dust",{name:"dustLeadAntimony"});

IDRegistry.genItemID("dustSmallLeadAntimony");
Item.createItem("dustSmallLeadAntimony","Small Lead-Antimony Alloy Dust",{name:"dustSmallLeadAntimony"});

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

Callback.addCallback("PreLoaded",function(){
    ETRecipe.addBlockRecipe({id:ItemID.dustLeadAntimony,data:0},{id:ItemID.dustSmallLeadAntimony,data:0});
    Recipes.addShapeless({id:ItemID.dustLeadAntimony,count:2,data:0},[{id:ItemID.dustLead,data:0},{id:ItemID.dustAntimony,data:0}]);

    ETRecipe.addDustRecipe({id:ItemID.lithium6  ,data:0},{id:ItemID.smallLithium6  ,data:0});
    ETRecipe.addDustRecipe({id:ItemID.lithium7  ,data:0},{id:ItemID.smallLithium7  ,data:0});
    ETRecipe.addDustRecipe({id:ItemID.uranium235,data:0},{id:ItemID.smallUranium235,data:0});
    ETRecipe.addDustRecipe({id:ItemID.uranium238,data:0},{id:ItemID.smallUranium238,data:0});

    // 熔炉
    Recipes.addFurnace(ItemID.dustCopper      ,ItemID.ingotCopper  );
    Recipes.addFurnace(ItemID.dustTin         ,ItemID.ingotTin     );
    Recipes.addFurnace(ItemID.dustLead        ,ItemID.ingotLead    );
    Recipes.addFurnace(ItemID.dustIron        ,265                 );
    Recipes.addFurnace(ItemID.dustGold        ,266                 );
    Recipes.addFurnace(ItemID.dustAntimony    ,ItemID.ingotAntimony);
    Recipes.addFurnace(ItemID.dustLithium     ,ItemID.ingotLithium );
    Recipes.addFurnace(ItemID.dustTungsten    ,ItemID.ingotTungsten);
    Recipes.addFurnace(ItemID.dustUranium     ,ItemID.ingotUranium );
    Recipes.addFurnace(ItemID.dustSilver      ,ItemID.ingotSilver  );
    Recipes.addFurnace(ItemID.dustTetrahedrite,ItemID.ingotCopper  );
    
    // 打粉机
    ETRecipe.addMaceratorRecipe({id:ItemID.dustCopper      ,count:2,data:0},{id:ItemID.crushedPurifiedCopper      ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustTin         ,count:2,data:0},{id:ItemID.crushedPurifiedTin         ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustLead        ,count:2,data:0},{id:ItemID.crushedPurifiedLead        ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustIron        ,count:2,data:0},{id:ItemID.crushedPurifiedIron        ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustGold        ,count:2,data:0},{id:ItemID.crushedPurifiedGold        ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustAntimony    ,count:2,data:0},{id:ItemID.crushedPurifiedAntimony    ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustLithium     ,count:2,data:0},{id:ItemID.crushedPurifiedLithium     ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustTungsten    ,count:2,data:0},{id:ItemID.crushedPurifiedTungsten    ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustUranium     ,count:2,data:0},{id:ItemID.crushedPurifiedUranium     ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustSilver      ,count:2,data:0},{id:ItemID.crushedPurifiedSilver      ,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustTetrahedrite,count:2,data:0},{id:ItemID.crushedPurifiedTetrahedrite,data:0});
    
    ETRecipe.addMaceratorRecipe({id:ItemID.dustCopper      ,count:1,data:0},{id:ItemID.ingotCopper      ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustTin         ,count:1,data:0},{id:ItemID.ingotTin         ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustLead        ,count:1,data:0},{id:ItemID.ingotLead        ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustIron        ,count:1,data:0},{id:265                     ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustSteel       ,count:1,data:0},{id:ItemID.ingotSteel       ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustGold        ,count:1,data:0},{id:266                     ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustAntimony    ,count:1,data:0},{id:ItemID.ingotAntimony    ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustLithium     ,count:1,data:0},{id:ItemID.ingotLithium     ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustTungsten    ,count:1,data:0},{id:ItemID.ingotTungsten    ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustUranium     ,count:1,data:0},{id:ItemID.ingotUranium     ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustSilver      ,count:1,data:0},{id:ItemID.ingotSilver      ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustTetrahedrite,count:1,data:0},{id:ItemID.ingotTetrahedrite,count:1,data:0});
});