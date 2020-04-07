// 铜锭
IDRegistry.genItemID("ingotCopper");
Item.createItem("ingotCopper","Copper Ingot",{name:"ingotCopper"});

// 锡锭
IDRegistry.genItemID("ingotTin");
Item.createItem("ingotTin","Tin Ingot",{name:"ingotTin"});

// 铅锭
IDRegistry.genItemID("ingotLead");
Item.createItem("ingotLead","Lead Ingot",{name:"ingotLead"});

// 锻铁锭
IDRegistry.genItemID("ingotWroughtIron");
Item.createItem("ingotWroughtIron","Wrought Iron Ingot",{name:"ingotWroughtIron"});

// 钢锭
IDRegistry.genItemID("ingotSteel");
Item.createItem("ingotSteel","Steel Ingot",{name:"ingotSteel"});

// 锑锭
IDRegistry.genItemID("ingotAntimony");
Item.createItem("ingotAntimony","Antimony Ingot",{name:"ingotAntimony"});

// 锂锭
IDRegistry.genItemID("ingotLithium");
Item.createItem("ingotLithium","Lithium Ingot",{name:"ingotLithium"});

// 钨锭
IDRegistry.genItemID("ingotTungsten");
Item.createItem("ingotTungsten","Tungsten Ingot",{name:"ingotTungsten"});

// 铀锭
IDRegistry.genItemID("ingotUranium");
Item.createItem("ingotUranium","Uranium Ingot",{name:"ingotUranium"});

// 银锭
IDRegistry.genItemID("ingotSilver");
Item.createItem("ingotSilver","Silver Ingot",{name:"ingotSilver"});

// 黝铜锭
IDRegistry.genItemID("ingotTetrahedrite");
Item.createItem("ingotTetrahedrite","Tetrahedrite Ingot",{name:"ingotTetrahedrite"});

// 铝锭
IDRegistry.genItemID("ingotAluminium");
Item.createItem("ingotAluminium","Aluminium Ingot",{name:"ingotAluminium"});

// 红石锭
IDRegistry.genItemID("ingotRedstone");
Item.createItem("ingotRedstone","Redstone Ingot",{name:"ingotRedstone"});

// 夏洛特合金锭
IDRegistry.genItemID("ingotSherlock");
Item.createItem("ingotSherlock","Sherlock Alloy Ingot",{name:"ingotSherlock"});

// 铅锑合金锭
IDRegistry.genItemID("ingotLeadAntimony");
Item.createItem("ingotLeadAntimony","Lead-Antimony Alloy Ingot",{name:"ingotLeadAntimony"});

Callback.addCallback("PreLoaded",function(){
    // 组
    Item.addCreativeGroup("ET-Ingot",Translation.translate("Ingot"),[
        ItemID.ingotCopper      ,
        ItemID.ingotTin         ,
        ItemID.ingotLead        ,
        ItemID.ingotWroughtIron ,
        ItemID.ingotSteel       ,
        ItemID.ingotAntimony    ,
        ItemID.ingotLithium     ,
        ItemID.ingotTungsten    ,
        ItemID.ingotUranium     ,
        ItemID.ingotSilver      ,
        ItemID.ingotTetrahedrite,
        ItemID.ingotAluminium   ,
        ItemID.ingotRedstone    ,
        ItemID.ingotSherlock    ,
        ItemID.ingotLeadAntimony
    ]);

    // 分解反应台
    Decomposer.addRecipe(ItemID.ingotCopper      ,-1,{Cu:16});
    Decomposer.addRecipe(ItemID.ingotTin         ,-1,{Sn:16});
    Decomposer.addRecipe(ItemID.ingotLead        ,-1,{Pb:16});
    Decomposer.addRecipe(ItemID.ingotWroughtIron ,-1,{Fe:14,C:2});
    Decomposer.addRecipe(ItemID.ingotSteel       ,-1,{Fe:15,C:1});
    Decomposer.addRecipe(ItemID.ingotAntimony    ,-1,{Sb:16});
    Decomposer.addRecipe(ItemID.ingotLithium     ,-1,{Li:16});
    Decomposer.addRecipe(ItemID.ingotTungsten    ,-1,{W:16});
    Decomposer.addRecipe(ItemID.ingotUranium     ,-1,{U:16});
    Decomposer.addRecipe(ItemID.ingotSilver      ,-1,{Ag:16});
    Decomposer.addRecipe(ItemID.ingotTetrahedrite,-1,{Cu:14,Sb:2});
    Decomposer.addRecipe(ItemID.ingotAluminium   ,-1,{Al:16});
    Decomposer.addRecipe(ItemID.ingotRedstone    ,-1,{iron3oxide:4,Cu:20});
    Decomposer.addRecipe(ItemID.ingotSherlock    ,-1,{iron3oxide:2,Cu:2,P:2,Fe:16,Es:4,calciumCarbonate:32});
    Decomposer.addRecipe(ItemID.ingotLeadAntimony,-1,{Pb:8,Sb:8});
    
    // 化学反应台
    Synthesizer.addRecipe({id:ItemID.ingotCopper      ,count:16,data:0},[["Cu",16]]);
    Synthesizer.addRecipe({id:ItemID.ingotTin         ,count:16,data:0},[["Sn",16]]);
    Synthesizer.addRecipe({id:ItemID.ingotLead        ,count:16,data:0},[["Pb",16]]);
    Synthesizer.addRecipe({id:ItemID.ingotWroughtIron ,count:16,data:0},[["Fe",14],["C",2]]);
    Synthesizer.addRecipe({id:ItemID.ingotSteel       ,count:16,data:0},[["Fe",15],["C",1]]);
    Synthesizer.addRecipe({id:ItemID.ingotAntimony    ,count:16,data:0},[["Sb",16]]);
    Synthesizer.addRecipe({id:ItemID.ingotLithium     ,count:16,data:0},[["Li",16]]);
    Synthesizer.addRecipe({id:ItemID.ingotTungsten    ,count:16,data:0},[["W",16]]);
    Synthesizer.addRecipe({id:ItemID.ingotUranium     ,count:16,data:0},[["U",16]]);
    Synthesizer.addRecipe({id:ItemID.ingotSilver      ,count:16,data:0},[["Ag",16]]);
    Synthesizer.addRecipe({id:ItemID.ingotTetrahedrite,count:16,data:0},[["Cu",14],["Sb",2]]);
    Synthesizer.addRecipe({id:ItemID.ingotAluminium   ,count:16,data:0},[["Al",16]]);
    Synthesizer.addRecipe({id:ItemID.ingotRedstone    ,count:16,data:0},[["iron3oxide",4],["Cu",20]]);
    Synthesizer.addRecipe({id:ItemID.ingotSherlock    ,count:16,data:0},[["iron3oxide",2],["Cu",2],["P",2],["Fe",16],["Es",4],["calciumCarbonate",32]]);
    Synthesizer.addRecipe({id:ItemID.ingotLeadAntimony,count:16,data:0},[["Pb",8],["Sb",8]]);

    // 合成
    Recipes.addShaped({id:ItemID.ingotRedstone,count:1,data:0},[" a ","aba"," a "],["a",331,0,"b",ItemID.ingotCopper,0]);

    // 高炉
    Recipe.addBlastFurnaceRecipe({id:265                    ,data:0},[{id:ItemID.ingotWroughtIron,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
    Recipe.addBlastFurnaceRecipe({id:ItemID.ingotWroughtIron,data:0},[{id:ItemID.ingotSteel      ,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
});