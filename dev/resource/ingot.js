// 铜块
IDRegistry.genBlockID("blockCopper");
Block.createBlock("blockCopper",[
    {name:"Copper Block",texture:[["copper_block",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockCopper,"stone",1);
Block.setDestroyTime(BlockID.blockCopper,1);
Block.setDestroyLevel("blockCopper",1);

// 锡块
IDRegistry.genBlockID("blockTin");
Block.createBlock("blockTin",[
    {name:"Tin Block",texture:[["tin_block",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockTin,"stone",1);
Block.setDestroyTime(BlockID.blockTin,1);
Block.setDestroyLevel("blockTin",1);

// 铅块
IDRegistry.genBlockID("blockLead");
Block.createBlock("blockLead",[
    {name:"Lead Block",texture:[["lead_block",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockLead,"stone",1);
Block.setDestroyTime(BlockID.blockLead,1);
Block.setDestroyLevel("blockLead",1);

// 锻铁块
IDRegistry.genBlockID("blockWroughtIron");
Block.createBlock("blockWroughtIron",[
    {name:"Wrought Iron Block",texture:[["wrought_iron_block",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockWroughtIron,"stone",1);
Block.setDestroyTime(BlockID.blockWroughtIron,1);
Block.setDestroyLevel("blockWroughtIron",1);

// 钢块
IDRegistry.genBlockID("blockSteel");
Block.createBlock("blockSteel",[
    {name:"Steel Block",texture:[["steel_block",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockSteel,"stone",1);
Block.setDestroyTime(BlockID.blockSteel,1);
Block.setDestroyLevel("blockSteel",1);

// 锑块
IDRegistry.genBlockID("blockAntimony");
Block.createBlock("blockAntimony",[
    {name:"Antimony Block",texture:[["antimony_block",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockAntimony,"stone",1);
Block.setDestroyTime(BlockID.blockAntimony,1);
Block.setDestroyLevel("blockAntimony",1);

// 锂块
IDRegistry.genBlockID("blockLithium");
Block.createBlock("blockLithium",[
    {name:"Lithium Block",texture:[["lithium_block",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockLithium,"stone",1);
Block.setDestroyTime(BlockID.blockLithium,1);
Block.setDestroyLevel("blockLithium",1);

// 碳块
IDRegistry.genBlockID("blockCarbon");
Block.createBlock("blockCarbon",[
    {name:"Carbon Block",texture:[["carbon_block",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockCarbon,"stone",1);
Block.setDestroyTime(BlockID.blockCarbon,1);
Block.setDestroyLevel("blockCarbon",1);

// 钨块
IDRegistry.genBlockID("blockTungsten");
Block.createBlock("blockTungsten",[
    {name:"Tungsten Block",texture:[["tungsten_block",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockTungsten,"stone",1);
Block.setDestroyTime(BlockID.blockTungsten,1);
Block.setDestroyLevel("blockTungsten",1);

// 银块
IDRegistry.genBlockID("blockSilver");
Block.createBlock("blockSilver",[
    {name:"Silver Block",texture:[["silver_block",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockSilver,"stone",1);
Block.setDestroyTime(BlockID.blockSilver,1);
Block.setDestroyLevel("blockSilver",1);

// 铝块
IDRegistry.genBlockID("blockAluminium");
Block.createBlock("blockAluminium",[
    {name:"Aluminium Block",texture:[["aluminium_block",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockAluminium,"stone",1);
Block.setDestroyTime(BlockID.blockAluminium,1);
Block.setDestroyLevel("blockAluminium",1);

// 铅锑合金块
IDRegistry.genBlockID("blockLeadAntimony");
Block.createBlock("blockLeadAntimony",[
    {name:"Lead-Antimony Alloy Block",texture:[["lead_antimony_block",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockLeadAntimony,"stone",1);
Block.setDestroyTime(BlockID.blockLeadAntimony,1);
Block.setDestroyLevel("blockLeadAntimony",1);

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("block",Translation.translate("Block"),[
        BlockID.blockCopper,
        BlockID.blockTin,
        BlockID.blockLead,
        BlockID.blockWroughtIron,
        BlockID.blockSteel,
        BlockID.blockAntimony,
        BlockID.blockLithium,
        BlockID.blockCarbon,
        BlockID.blockTungsten,
        BlockID.blockSilver,
        BlockID.blockAluminium,
        BlockID.blockLeadAntimony
    ]);

    Recipes.addShapeless({id:ItemID.ingotCopper,count:9,data:0},[{id:BlockID.blockCopper,data:0}]);
    Recipes.addShaped({id:BlockID.blockCopper,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotCopper,0]);

    Recipes.addShapeless({id:ItemID.ingotTin,count:9,data:0},[{id:BlockID.blockTin,data:0}]);
    Recipes.addShaped({id:BlockID.blockTin,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotTin,0]);

    Recipes.addShapeless({id:ItemID.ingotLead,count:9,data:0},[{id:BlockID.blockLead,data:0}]);
    Recipes.addShaped({id:BlockID.blockLead,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotLead,0]);

    Recipes.addShapeless({id:ItemID.ingotWroughtIron,count:9,data:0},[{id:BlockID.blockWroughtIron,data:0}]);
    Recipes.addShaped({id:BlockID.blockWroughtIron,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotWroughtIron,0]);

    Recipes.addShapeless({id:ItemID.ingotSteel,count:9,data:0},[{id:BlockID.blockSteel,data:0}]);
    Recipes.addShaped({id:BlockID.blockSteel,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotSteel,0]);

    Recipes.addShapeless({id:ItemID.ingotAntimony,count:9,data:0},[{id:BlockID.blockAntimony,data:0}]);
    Recipes.addShaped({id:BlockID.blockAntimony,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotAntimony,0]);

    Recipes.addShapeless({id:ItemID.ingotLithium,count:9,data:0},[{id:BlockID.blockLithium,data:0}]);
    Recipes.addShaped({id:BlockID.blockLithium,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotLithium,0]);

    Recipes.addShapeless({id:ItemID.dustCarbon,count:9,data:0},[{id:BlockID.blockCarbon,data:0}]);
    Recipes.addShaped({id:BlockID.blockCarbon,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustCarbon,0]);

    Recipes.addShapeless({id:ItemID.ingotTungsten,count:9,data:0},[{id:BlockID.blockTungsten,data:0}]);
    Recipes.addShaped({id:BlockID.blockTungsten,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotTungsten,0]);

    Recipes.addShapeless({id:ItemID.ingotSilver,count:9,data:0},[{id:BlockID.blockSilver,data:0}]);
    Recipes.addShaped({id:BlockID.blockSilver,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotSilver,0]);

    Recipes.addShapeless({id:ItemID.ingotAluminium,count:9,data:0},[{id:BlockID.blockAluminium,data:0}]);
    Recipes.addShaped({id:BlockID.blockAluminium,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotAluminium,0]);

    Recipes.addShapeless({id:ItemID.ingotLeadAntimony,count:9,data:0},[{id:BlockID.blockLeadAntimony,data:0}]);
    Recipes.addShaped({id:BlockID.blockLeadAntimony,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotLeadAntimony,0]);
});

// ==================================================================================================== //

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

// 铝锭
IDRegistry.genItemID("ingotAluminium");
Item.createItem("ingotAluminium","Aluminium Ingot",{name:"ingotAluminium"});

// 夏洛特合金锭
IDRegistry.genItemID("ingotEnete");
Item.createItem("ingotEnete","Enete Alloy Ingot",{name:"ingotEnete"});

// 铅锑合金锭
IDRegistry.genItemID("ingotLeadAntimony");
Item.createItem("ingotLeadAntimony","Lead-Antimony Alloy Ingot",{name:"ingotLeadAntimony"});

// 红宝石
IDRegistry.genItemID("ruby");
Item.createItem("ruby","Ruby",{name:"ruby"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("ingot",Translation.translate("Ingot"),[
        ItemID.ingotCopper,
        ItemID.ingotTin,
        ItemID.ingotLead,
        ItemID.ingotWroughtIron,
        ItemID.ingotSteel,
        ItemID.ingotAntimony,
        ItemID.ingotLithium,
        ItemID.ingotTungsten,
        ItemID.ingotUranium,
        ItemID.ingotSilver,
        ItemID.ingotAluminium,
        ItemID.ingotEnete,
        ItemID.ingotLeadAntimony
    ]);

    Recipe.addBlastFurnaceRecipe({id:265,data:0},[{id:ItemID.ingotWroughtIron,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
    Recipe.addBlastFurnaceRecipe({id:ItemID.ingotWroughtIron,data:0},[{id:ItemID.ingotSteel,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
});