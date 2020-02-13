IDRegistry.genItemID("dustCopper");
Item.createItem("dustCopper","Copper Dust",{name:"copper_dust"});

IDRegistry.genItemID("dustTin");
Item.createItem("dustTin","Tin Dust",{name:"tin_dust"});

IDRegistry.genItemID("dustLead");
Item.createItem("dustLead","Lead Dust",{name:"lead_dust"});

IDRegistry.genItemID("dustIron");
Item.createItem("dustIron","Iron Dust",{name:"iron_dust"});

IDRegistry.genItemID("dustSteel");
Item.createItem("dustSteel","Steel Dust",{name:"steel_dust"});

IDRegistry.genItemID("dustGold");
Item.createItem("dustGold","Gold Dust",{name:"gold_dust"});

IDRegistry.genItemID("dustAntimony");
Item.createItem("dustAntimony","Antimony Dust",{name:"antimony_dust"});

IDRegistry.genItemID("dustLithium");
Item.createItem("dustLithium","Lithium Dust",{name:"lithium_dust"});

IDRegistry.genItemID("dustCarbon");
Item.createItem("dustCarbon","Carbon Dust",{name:"carbon_dust"});

IDRegistry.genItemID("dustTungsten");
Item.createItem("dustTungsten","Tungsten Dust",{name:"tungsten_dust"});

IDRegistry.genItemID("dustLeadAntimony");
Item.createItem("dustLeadAntimony","Lead-Antimony Alloy Dust",{name:"lead_antimony_dust"});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShapeless({id:ItemID.dustLeadAntimony,count:2,data:0},[{id:ItemID.dustLead,data:0},{id:ItemID.dustAntimony,data:0}]);

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