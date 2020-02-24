IDRegistry.genItemID("ingotCopper");
Item.createItem("ingotCopper","Copper Ingot",{name:"ingotCopper"});

IDRegistry.genItemID("ingotTin");
Item.createItem("ingotTin","Tin Ingot",{name:"ingotTin"});

IDRegistry.genItemID("ingotLead");
Item.createItem("ingotLead","Lead Ingot",{name:"ingotLead"});

IDRegistry.genItemID("ingotWroughtIron");
Item.createItem("ingotWroughtIron","Wrought Iron Ingot",{name:"ingotWroughtIron"});

IDRegistry.genItemID("ingotSteel");
Item.createItem("ingotSteel","Steel Ingot",{name:"ingotSteel"});

IDRegistry.genItemID("ingotAntimony");
Item.createItem("ingotAntimony","Antimony Ingot",{name:"ingotAntimony"});

IDRegistry.genItemID("ingotLithium");
Item.createItem("ingotLithium","Lithium Ingot",{name:"ingotLithium"});

IDRegistry.genItemID("ingotTungsten");
Item.createItem("ingotTungsten","Tungsten Ingot",{name:"ingotTungsten"});

IDRegistry.genItemID("ingotUranium");
Item.createItem("ingotUranium","Uranium Ingot",{name:"ingotUranium"});

IDRegistry.genItemID("ingotSilver");
Item.createItem("ingotSilver","Silver Ingot",{name:"ingotSilver"});

IDRegistry.genItemID("ingotTetrahedrite");
Item.createItem("ingotTetrahedrite","Tetrahedrite Ingot",{name:"ingotTetrahedrite"});

IDRegistry.genItemID("ingotLeadAntimony");
Item.createItem("ingotLeadAntimony","Lead-Antimony Alloy Ingot",{name:"ingotLeadAntimony"});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShapeless({id:ItemID.ingotLithium,count:1,data:0},[{id:ItemID.lithium6  ,data:0},{id:ItemID.lithium7  ,data:0}]);
    Recipes.addShapeless({id:ItemID.ingotUranium,count:1,data:0},[{id:ItemID.uranium235,data:0},{id:ItemID.uranium238,data:0}]);

    ETRecipe.addBlastFurnaceRecipe({id:ItemID.ingotWroughtIron,count:1,data:0},{id:265                    ,count:1,data:0});
    ETRecipe.addBlastFurnaceRecipe({id:ItemID.ingotSteel      ,count:1,data:0},{id:ItemID.ingotWroughtIron,count:1,data:0});

    ETRecipe.addCentrifugeRecipe([{id:ItemID.lithium7,count:1,data:0},{id:ItemID.smallLithium6,count:1,data:0}],{id:ItemID.dustLithium,data:0});
    ETRecipe.addCentrifugeRecipe([{id:ItemID.smallUranium235,count:1,data:0},
        {id:ItemID.uranium238,count:1,data:0},
        {id:ItemID.uranium238,count:1,data:0},
        {id:ItemID.uranium238,count:1,data:0},
        {id:ItemID.uranium238,count:1,data:0}
    ],{id:ItemID.dustUranium,data:0});
});