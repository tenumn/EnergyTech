IDRegistry.genItemID("plateCopper");
Item.createItem("plateCopper","Copper Plate",{name:"plateCopper"});

IDRegistry.genItemID("plateTin");
Item.createItem("plateTin","Tin Plate",{name:"plateTin"});

IDRegistry.genItemID("plateIron");
Item.createItem("plateIron","Iron Plate",{name:"plateIron"});

IDRegistry.genItemID("plateSteel");
Item.createItem("plateSteel","Steel Plate",{name:"plateSteel"});

IDRegistry.genItemID("plateGold");
Item.createItem("plateGold","Gold Plate",{name:"plateGold"});

IDRegistry.genItemID("plateCarbon");
Item.createItem("plateCarbon","Carbon Plate",{name:"plateCarbon"});

IDRegistry.genItemID("plateTungsten");
Item.createItem("plateTungsten","Tungsten Plate",{name:"plateTungsten"});

IDRegistry.genItemID("plateLapis");
Item.createItem("plateLapis","Lapis Plate",{name:"plateLapis"});

IDRegistry.genItemID("plateLead");
Item.createItem("plateLead","Lead Plate",{name:"plateLead"});

IDRegistry.genItemID("plateLeadAntimony");
Item.createItem("plateLeadAntimony","Lead-Antimony Alloy Plate",{name:"plateLeadAntimony"});

Callback.addCallback("PreLoaded",function(){
    var hammer = ETTool.getAllTool("Hammer");
    for(var i in hammer){
        ETRecipe.addShapeless({id:ItemID.plateCopper      ,count:1,data:0},[{id:ItemID.ingotCopper      ,data:0},{id:ItemID.ingotCopper      ,data:0}],hammer[i]);
        ETRecipe.addShapeless({id:ItemID.plateTin         ,count:1,data:0},[{id:ItemID.ingotTin         ,data:0},{id:ItemID.ingotTin         ,data:0}],hammer[i]);
        ETRecipe.addShapeless({id:ItemID.plateIron        ,count:1,data:0},[{id:265                     ,data:0},{id:265                     ,data:0}],hammer[i]);
        ETRecipe.addShapeless({id:ItemID.plateSteel       ,count:1,data:0},[{id:ItemID.ingotSteel       ,data:0},{id:ItemID.ingotSteel       ,data:0}],hammer[i]);
        ETRecipe.addShapeless({id:ItemID.plateGold        ,count:1,data:0},[{id:266                     ,data:0},{id:266                     ,data:0}],hammer[i]);
        ETRecipe.addShapeless({id:ItemID.plateCarbon      ,count:1,data:0},[{id:ItemID.dustCarbon       ,data:0},{id:ItemID.dustCarbon       ,data:0}],hammer[i]);
        ETRecipe.addShapeless({id:ItemID.plateTungsten    ,count:1,data:0},[{id:ItemID.ingotTungsten    ,data:0},{id:ItemID.ingotTungsten    ,data:0}],hammer[i]);
        ETRecipe.addShapeless({id:ItemID.plateLapis       ,count:1,data:0},[{id:351                     ,data:4},{id:351                     ,data:4}],hammer[i]);
        ETRecipe.addShapeless({id:ItemID.plateLead        ,count:1,data:0},[{id:ItemID.ingotLead        ,data:0},{id:ItemID.ingotLead        ,data:0}],hammer[i]);
        ETRecipe.addShapeless({id:ItemID.plateLeadAntimony,count:1,data:0},[{id:ItemID.ingotLeadAntimony,data:0},{id:ItemID.ingotLeadAntimony,data:0}],hammer[i]);
    }

    ETRecipe.addCompressorRecipe({id:ItemID.plateCopper      ,count:1,data:0},{id:ItemID.ingotCopper      ,data:0});
    ETRecipe.addCompressorRecipe({id:ItemID.plateTin         ,count:1,data:0},{id:ItemID.ingotTin         ,data:0});
    ETRecipe.addCompressorRecipe({id:ItemID.plateIron        ,count:1,data:0},{id:265                     ,data:0});
    ETRecipe.addCompressorRecipe({id:ItemID.plateSteel       ,count:1,data:0},{id:ItemID.ingotSteel       ,data:0});
    ETRecipe.addCompressorRecipe({id:ItemID.plateGold        ,count:1,data:0},{id:266                     ,data:0});
    ETRecipe.addCompressorRecipe({id:ItemID.plateCarbon      ,count:1,data:0},{id:ItemID.dustCarbon       ,data:0});
    ETRecipe.addCompressorRecipe({id:ItemID.plateTungsten    ,count:1,data:0},{id:ItemID.ingotTungsten    ,data:0});
    ETRecipe.addCompressorRecipe({id:ItemID.plateLapis       ,count:1,data:0},{id:351                     ,data:4});
    ETRecipe.addCompressorRecipe({id:ItemID.plateLead        ,count:1,data:0},{id:ItemID.ingotLead        ,data:0});
    ETRecipe.addCompressorRecipe({id:ItemID.plateLeadAntimony,count:1,data:0},{id:ItemID.ingotLeadAntimony,data:0});
});

