ETRecipe.addDustRecipe = function(output,input){
    Recipes.addShaped({id:output.id,count:1,data:output.data},["aaa","aaa","aaa"],["a",input.id,input.data]);
    Recipes.addShapeless({id:input.id,count:9,data:input.data},[{id:output.id,data:output.data}]);
}

CreateDust = function(name){
    IDRegistry.genItemID("dust" + name);
    IDRegistry.genItemID("dustSmall" + name);
    Item.createItem("dust" + name,name + " Dust",{name:name.toLowerCase() + "_dust"});    
    Item.createItem("dustSmall" + name,"Small" + name + " Dust",{name:"small_" + name.toLowerCase() + "_dust"});

    Callback.addCallback("PreLoaded",function(){
        ETRecipe.addDustRecipe({id:ItemID["dust" + name],data:0},{id:ItemID["dustSmall" + name],data:0});
    });
}

CreateDust("Stone"   );
CreateDust("Copper"  );
CreateDust("Tin"     );
CreateDust("Lead"    );
CreateDust("Iron"    );
CreateDust("Steel"   );
CreateDust("Gold"    );
CreateDust("Antimony");
CreateDust("Lithium" );
CreateDust("Carbon"  );
CreateDust("Tungsten");
CreateDust("Uranium" );

IDRegistry.genItemID("dustLeadAntimony");
Item.createItem("dustLeadAntimony","Lead-Antimony Alloy Dust",{name:"lead_antimony_dust"});

IDRegistry.genItemID("dustSmallLeadAntimony");
Item.createItem("dustSmallLeadAntimony","Small Lead-Antimony Alloy Dust",{name:"small_lead_antimony_dust"});

Callback.addCallback("PreLoaded",function(){
    ETRecipe.addBlockRecipe({id:ItemID.dustLeadAntimony,data:0},{id:ItemID.dustSmallLeadAntimony,data:0});
    Recipes.addShapeless({id:ItemID.dustLeadAntimony,count:2,data:0},[{id:ItemID.dustLead,data:0},{id:ItemID.dustAntimony,data:0}]);

    // 打粉机
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedPurifiedCopper  ,data:0},{id:ItemID.dustCopper  ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedPurifiedTin     ,data:0},{id:ItemID.dustTin     ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedPurifiedLead    ,data:0},{id:ItemID.dustLead    ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedPurifiedIron    ,data:0},{id:ItemID.dustIron    ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedPurifiedGold    ,data:0},{id:ItemID.dustGold    ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedPurifiedAntimony,data:0},{id:ItemID.dustAntimony,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedPurifiedLithium ,data:0},{id:ItemID.dustLithium ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedPurifiedTungsten,data:0},{id:ItemID.dustTungsten,count:2,data:0});

    ETRecipe.addMaceratorRecipe({id:ItemID.dustCopper   ,count:1,data:0},{id:ItemID.ingotCopper   ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustTin      ,count:1,data:0},{id:ItemID.ingotTin      ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustLead     ,count:1,data:0},{id:ItemID.ingotLead     ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustIron     ,count:1,data:0},{id:265                  ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustSteel    ,count:1,data:0},{id:ItemID.ingotSteel    ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustGold     ,count:1,data:0},{id:266                  ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustAntimony ,count:1,data:0},{id:ItemID.ingotAntimony ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustLithium  ,count:1,data:0},{id:ItemID.ingotLithium  ,count:1,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.dustTungsten ,count:1,data:0},{id:ItemID.ingotTungsten ,count:1,data:0});
});