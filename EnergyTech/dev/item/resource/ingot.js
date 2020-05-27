Block.createSpecialType({
    base:1,
    solid:true,
	destroytime:1,
	explosionres:12
},"block");

// 铜块
IDRegistry.genBlockID("blockCopper");
Block.createBlock("blockCopper",[
    {name:"Copper Block",texture:[["copper_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockCopper,"stone",1,true);
Block.setDestroyLevel("blockCopper",1);

// 锡块
IDRegistry.genBlockID("blockTin");
Block.createBlock("blockTin",[
    {name:"Tin Block",texture:[["tin_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockTin,"stone",1,true);
Block.setDestroyLevel("blockTin",1);

// 青铜块
IDRegistry.genBlockID("blockBronze");
Block.createBlock("blockBronze",[
    {name:"Bronze Block",texture:[["bronze_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockBronze,"stone",1,true);
Block.setDestroyLevel("blockBronze",1);

// 铅块
IDRegistry.genBlockID("blockLead");
Block.createBlock("blockLead",[
    {name:"Lead Block",texture:[["lead_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockLead,"stone",1,true);
Block.setDestroyLevel("blockLead",1);

// 锻铁块
IDRegistry.genBlockID("blockWroughtIron");
Block.createBlock("blockWroughtIron",[
    {name:"Wrought Iron Block",texture:[["wrought_iron_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockWroughtIron,"stone",1,true);
Block.setDestroyLevel("blockWroughtIron",1);

// 钢块
IDRegistry.genBlockID("blockSteel");
Block.createBlock("blockSteel",[
    {name:"Steel Block",texture:[["steel_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockSteel,"stone",1,true);
Block.setDestroyLevel("blockSteel",1);

// 锑块
IDRegistry.genBlockID("blockAntimony");
Block.createBlock("blockAntimony",[
    {name:"Antimony Block",texture:[["antimony_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockAntimony,"stone",1,true);
Block.setDestroyLevel("blockAntimony",1);

// 锂块
IDRegistry.genBlockID("blockLithium");
Block.createBlock("blockLithium",[
    {name:"Lithium Block",texture:[["lithium_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockLithium,"stone",1,true);
Block.setDestroyLevel("blockLithium",1);

// 碳块
IDRegistry.genBlockID("blockCarbon");
Block.createBlock("blockCarbon",[
    {name:"Carbon Block",texture:[["carbon_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockCarbon,"stone",1,true);
Block.setDestroyLevel("blockCarbon",1);

// 钨块
IDRegistry.genBlockID("blockTungsten");
Block.createBlock("blockTungsten",[
    {name:"Tungsten Block",texture:[["tungsten_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockTungsten,"stone",1,true);
Block.setDestroyLevel("blockTungsten",1);

// 铀块
IDRegistry.genBlockID("blockUranium");
Block.createBlock("blockUranium",[
    {name:"Uranium Block",texture:[["uranium_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockUranium,"stone",1,true);
Block.setDestroyLevel("blockUranium",1);

// 银块
IDRegistry.genBlockID("blockSilver");
Block.createBlock("blockSilver",[
    {name:"Silver Block",texture:[["silver_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockSilver,"stone",1,true);
Block.setDestroyLevel("blockSilver",1);

// 铝块
IDRegistry.genBlockID("blockAluminium");
Block.createBlock("blockAluminium",[
    {name:"Aluminium Block",texture:[["aluminium_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockAluminium,"stone",1,true);
Block.setDestroyLevel("blockAluminium",1);

// 铱块
IDRegistry.genBlockID("blockIridium");
Block.createBlock("blockIridium",[
    {name:"Iridium Block",texture:[["iridium_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockIridium,"stone",1,true);
Block.setDestroyLevel("blockIridium",1);

// 恩奈特合金块
IDRegistry.genBlockID("blockEnete");
Block.createBlock("blockEnete",[
    {name:"Enete Block",texture:[["enete_ingot",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockEnete,"stone",1,true);
Block.setDestroyLevel("blockEnete",1);

// 铅锑合金块
IDRegistry.genBlockID("blockLeadAntimony");
Block.createBlock("blockLeadAntimony",[
    {name:"Lead-Antimony Alloy Block",texture:[["lead_antimony_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockLeadAntimony,"stone",1,true);
Block.setDestroyLevel("blockLeadAntimony",1);

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("block",Translation.translate("Block"),[
        BlockID.blockCopper,
        BlockID.blockTin,
        BlockID.blockBronze,
        BlockID.blockLead,
        BlockID.blockWroughtIron,
        BlockID.blockSteel,
        BlockID.blockAntimony,
        BlockID.blockLithium,
        BlockID.blockCarbon,
        BlockID.blockTungsten,
        BlockID.blockUranium,
        BlockID.blockSilver,
        BlockID.blockIridium,
        BlockID.blockEnete,
        BlockID.blockAluminium,
        BlockID.blockLeadAntimony
    ]);

    RecipeRegistry.addCuttingRecipe({id:BlockID.blockCopper,data:0},{id:ItemID.ingotCopper,count:9,data:0});
    RecipeRegistry.addCuttingRecipe({id:BlockID.blockTin,data:0},{id:ItemID.ingotTin,count:9,data:0});
    RecipeRegistry.addCuttingRecipe({id:BlockID.blockBronze,data:0},{id:ItemID.ingotBronze,count:9,data:0});
    RecipeRegistry.addCuttingRecipe({id:BlockID.blockLead,data:0},{id:ItemID.ingotLead,count:9,data:0});
    RecipeRegistry.addCuttingRecipe({id:BlockID.blockWroughtIron,data:0},{id:ItemID.ingotWroughtIron,count:9,data:0});
    RecipeRegistry.addCuttingRecipe({id:BlockID.blockSteel,data:0},{id:ItemID.ingotSteel,count:9,data:0});
    RecipeRegistry.addCuttingRecipe({id:BlockID.blockAntimony,data:0},{id:ItemID.ingotAntimony,count:9,data:0});
    RecipeRegistry.addCuttingRecipe({id:BlockID.blockCarbon,data:0},{id:ItemID.dustCarbon,count:9,data:0});
    RecipeRegistry.addCuttingRecipe({id:BlockID.blockLithium,data:0},{id:ItemID.ingotLithium,count:9,data:0});
    RecipeRegistry.addCuttingRecipe({id:BlockID.blockTungsten,data:0},{id:ItemID.ingotTungsten,count:9,data:0});
    RecipeRegistry.addCompressorRecipe({id:ItemID.ingotUranium,count:9,data:0},{id:BlockID.blockUranium,count:1,data:0});
    RecipeRegistry.addCuttingRecipe({id:BlockID.blockSilver,data:0},{id:ItemID.ingotSilver,count:9,data:0});
    RecipeRegistry.addCuttingRecipe({id:BlockID.blockAluminium,data:0},{id:ItemID.ingotAluminium,count:9,data:0});
    RecipeRegistry.addCuttingRecipe({id:BlockID.blockLeadAntimony,data:0},{id:ItemID.ingotLeadAntimony,count:9,data:0});
    
    RecipeRegistry.addCompressorRecipe({id:ItemID.ingotCopper,count:9,data:0},{id:BlockID.blockCopper,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:ItemID.ingotTin,count:9,data:0},{id:BlockID.blockTin,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:ItemID.ingotBronze,count:9,data:0},{id:BlockID.blockBronze,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:ItemID.ingotLead,count:9,data:0},{id:BlockID.blockLead,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:ItemID.ingotWroughtIron,count:9,data:0},{id:BlockID.blockWroughtIron,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:ItemID.ingotSteel,count:9,data:0},{id:BlockID.blockSteel,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:ItemID.ingotAntimony,count:9,data:0},{id:BlockID.blockAntimony,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:ItemID.dustCarbon,count:9,data:0},{id:BlockID.blockCarbon,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:ItemID.ingotLithium,count:9,data:0},{id:BlockID.blockLithium,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:ItemID.ingotTungsten,count:9,data:0},{id:BlockID.blockTungsten,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:ItemID.ingotUranium,count:9,data:0},{id:BlockID.blockUranium,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:ItemID.ingotSilver,count:9,data:0},{id:BlockID.blockSilver,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:ItemID.ingotAluminium,count:9,data:0},{id:BlockID.blockAluminium,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:ItemID.ingotLeadAntimony,count:9,data:0},{id:BlockID.blockLeadAntimony,count:1,data:0});
});

// ==================================================================================================== //

// 铜锭
IDRegistry.genItemID("ingotCopper");
Item.createItem("ingotCopper","Copper Ingot",{name:"copper_ingot"});

// 锡锭
IDRegistry.genItemID("ingotTin");
Item.createItem("ingotTin","Tin Ingot",{name:"tin_ingot"});

// 铅锭
IDRegistry.genItemID("ingotLead");
Item.createItem("ingotLead","Lead Ingot",{name:"lead_ingot"});

// 青铜锭
IDRegistry.genItemID("ingotBronze");
Item.createItem("ingotBronze","Bronze Ingot",{name:"bronze_ingot"});

// 锻铁锭
IDRegistry.genItemID("ingotWroughtIron");
Item.createItem("ingotWroughtIron","Wrought Iron Ingot",{name:"wrought_iron_ingot"});

// 钢锭
IDRegistry.genItemID("ingotSteel");
Item.createItem("ingotSteel","Steel Ingot",{name:"steel_ingot"});

// 锑锭
IDRegistry.genItemID("ingotAntimony");
Item.createItem("ingotAntimony","Antimony Ingot",{name:"antimony_ingot"});

// 锂锭
IDRegistry.genItemID("ingotLithium");
Item.createItem("ingotLithium","Lithium Ingot",{name:"lithium_ingot"});

// 钨锭
IDRegistry.genItemID("ingotTungsten");
Item.createItem("ingotTungsten","Tungsten Ingot",{name:"tungsten_ingot"});

// 铀锭
IDRegistry.genItemID("ingotUranium");
Item.createItem("ingotUranium","Uranium Ingot",{name:"uranium_ingot"});

// 银锭
IDRegistry.genItemID("ingotSilver");
Item.createItem("ingotSilver","Silver Ingot",{name:"silver_ingot"});

// 铝锭
IDRegistry.genItemID("ingotAluminium");
Item.createItem("ingotAluminium","Aluminium Ingot",{name:"aluminium_ingot"});

// 硅锭
IDRegistry.genItemID("ingotSilicon");
Item.createItem("ingotSilicon","Silicon Ingot",{name:"silicon_ingot"});

// 铱锭
IDRegistry.genItemID("ingotIridium");
Item.createItem("ingotIridium","Iridium Ingot",{name:"iridium_ingot"});

// 恩奈特合金锭
IDRegistry.genItemID("ingotEnete");
Item.createItem("ingotEnete","Enete Alloy Ingot",{name:"enete_ingot"});

// 铅锑合金锭
IDRegistry.genItemID("ingotLeadAntimony");
Item.createItem("ingotLeadAntimony","Lead-Antimony Alloy Ingot",{name:"lead_antimony_ingot"});

// 红宝石
IDRegistry.genItemID("ruby");
Item.createItem("ruby","Ruby",{name:"ruby"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("ingot",Translation.translate("Ingot"),[
        ItemID.ingotCopper,
        ItemID.ingotTin,
        ItemID.ingotLead,
        ItemID.ingotBronze,
        ItemID.ingotWroughtIron,
        ItemID.ingotSteel,
        ItemID.ingotAntimony,
        ItemID.ingotTungsten,
        ItemID.ingotSilver,
        ItemID.ingotAluminium,
        ItemID.ingotSilicon,
        ItemID.ingotIridium,
        ItemID.ingotEnete,
        ItemID.ingotLeadAntimony
    ]);

    Item.addCreativeGroup("gemstone",Translation.translate("Gemstone"),[
        ItemID.ruby
    ]);

    RecipeRegistry.addBlastFurnaceRecipe({id:265,data:0},[{id:ItemID.ingotWroughtIron,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
    RecipeRegistry.addBlastFurnaceRecipe({id:ItemID.ingotWroughtIron,data:0},[{id:ItemID.ingotSteel,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
});