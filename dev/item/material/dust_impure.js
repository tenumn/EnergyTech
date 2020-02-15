IDRegistry.genItemID("dustImpureCopper");
Item.createItem("dustImpureCopper","Impure Copper Dust",{name:"impure_copper_dust"});

IDRegistry.genItemID("dustImpureTin");
Item.createItem("dustImpureTin","Impure Tin Dust",{name:"impure_tin_dust"});

IDRegistry.genItemID("dustImpureLead");
Item.createItem("dustImpureLead","Impure Lead Dust",{name:"impure_lead_dust"});

IDRegistry.genItemID("dustImpureIron");
Item.createItem("dustImpureIron","Impure Iron Dust",{name:"impure_iron_dust"});

IDRegistry.genItemID("dustImpureGold");
Item.createItem("dustImpureGold","Impure Gold Dust",{name:"impure_gold_dust"});

IDRegistry.genItemID("dustImpureAntimony");
Item.createItem("dustImpureAntimony","Impure Antimony Dust",{name:"impure_antimony_dust"});

IDRegistry.genItemID("dustImpureLithium");
Item.createItem("dustImpureLithium","Impure Lithium Dust",{name:"impure_lithium_dust"});

IDRegistry.genItemID("dustImpureCarbon");
Item.createItem("dustImpureCarbon","Impure Carbon Dust",{name:"impure_carbon_dust"});

IDRegistry.genItemID("dustImpureTungsten");
Item.createItem("dustImpureTungsten","Impure Tungsten Dust",{name:"impure_tungsten_dust"});

IDRegistry.genItemID("dustImpureUranium");
Item.createItem("dustImpureUranium","Impure Uranium Dust",{name:"impure_uranium_dust"});

Callback.addCallback("PreLoaded",function(){
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureCopper  ,count:1,data:0},[{id:BlockID.oreCopper  ,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureTin     ,count:1,data:0},[{id:BlockID.oreTin     ,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureLead    ,count:1,data:0},[{id:BlockID.oreLead    ,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureIron    ,count:1,data:0},[{id:15                 ,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureGold    ,count:1,data:0},[{id:14                 ,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureAntimony,count:1,data:0},[{id:BlockID.oreAntimony,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureLithium ,count:1,data:0},[{id:BlockID.oreLithium ,data:0}]);
    ETRecipe.addMortarRecipe({id:ItemID.dustImpureTungsten,count:1,data:0},[{id:BlockID.oreTungsten,data:0}]);
    
    // 打粉机
    ETRecipe.addMaceratorRecipe({id:BlockID.oreCopper  ,data:0},{id:ItemID.dustImpureCopper  ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreTin     ,data:0},{id:ItemID.dustImpureTin     ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreLead    ,data:0},{id:ItemID.dustImpureLead    ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:15                 ,data:0},{id:ItemID.dustImpureIron    ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:14                 ,data:0},{id:ItemID.dustImpureGold    ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreAntimony,data:0},{id:ItemID.dustImpureAntimony,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreLithium ,data:0},{id:ItemID.dustImpureLithium ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:BlockID.oreTungsten,data:0},{id:ItemID.dustImpureTungsten,count:2,data:0});
    
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedCopper  ,data:0},{id:ItemID.dustImpureCopper  ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedTin     ,data:0},{id:ItemID.dustImpureTin     ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedLead    ,data:0},{id:ItemID.dustImpureLead    ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedIron    ,data:0},{id:ItemID.dustImpureIron    ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedGold    ,data:0},{id:ItemID.dustImpureGold    ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedAntimony,data:0},{id:ItemID.dustImpureAntimony,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedLithium ,data:0},{id:ItemID.dustImpureLithium ,count:2,data:0});
    ETRecipe.addMaceratorRecipe({id:ItemID.crushedTungsten,data:0},{id:ItemID.dustImpureTungsten,count:2,data:0});
});