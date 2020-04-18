// 锂-6
IDRegistry.genItemID("lithium6");
IDRegistry.genItemID("smallLithium6");
Item.createItem("lithium6","Lithium-6",{name:"lithium6"});
Item.createItem("smallLithium6","Small Pile of Lithium-6",{name:"small_lithium6"});

// 锂-7
IDRegistry.genItemID("lithium7");
IDRegistry.genItemID("smallLithium7");
Item.createItem("lithium7","Lithium-7",{name:"lithium7"});
Item.createItem("smallLithium7","Small Pile of Lithium-7",{name:"small_lithium7"});

// 铀-235
IDRegistry.genItemID("uranium235");
IDRegistry.genItemID("smallUranium235");
Item.createItem("uranium235","Uranium-235",{name:"uranium235"});
Item.createItem("smallUranium235","Small Pile of Uranium-235",{name:"small_uranium235"});

// 铀-238
IDRegistry.genItemID("uranium238");
IDRegistry.genItemID("smallUranium238");
Item.createItem("uranium238","Uranium-238",{name:"uranium238"});
Item.createItem("smallUranium238","Small Pile of Uranium-238",{name:"small_uranium238"});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShapeless({id:ItemID.smallLithium6,count:9,data:0},[{id:ItemID.lithium6,data:0}]);
    Recipes.addShaped({id:ItemID.lithium6,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.smallLithium6,0]);

    Recipes.addShapeless({id:ItemID.smallLithium7,count:9,data:0},[{id:ItemID.lithium7,data:0}]);
    Recipes.addShaped({id:ItemID.lithium7,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.smallLithium7,0]);

    Recipes.addShapeless({id:ItemID.smallUranium235,count:9,data:0},[{id:ItemID.uranium235,data:0}]);
    Recipes.addShaped({id:ItemID.uranium235,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.smallUranium235,0]);

    Recipes.addShapeless({id:ItemID.smallUranium238,count:9,data:0},[{id:ItemID.uranium238,data:0}]);
    Recipes.addShaped({id:ItemID.uranium238,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.smallUranium238,0]);

    Recipe.addCentrifugeRecipe({id:ItemID.dustLithium,data:0},[{id:ItemID.lithium7  ,count:1,data:0},{id:ItemID.smallLithium6  ,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.dustUranium,data:0},[{id:ItemID.uranium238,count:4,data:0},{id:ItemID.smallUranium235,count:1,data:0}]);
});

// 矿渣
IDRegistry.genItemID("slag");
Item.createItem("slag","Slag",{name:"slag"});

// 树脂
IDRegistry.genItemID("resin");
Item.createItem("resin","Resin",{name:"resin"});

// 浓缩铀
IDRegistry.genItemID("enrichedUranium");
Item.createItem("enrichedUranium","Enriched Uranium",{name:"enriched_uranium"});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.enrichedUranium,count:1,data:0},["aaa","bbb","aaa"],["a",ItemID.uranium238,0,"b",ItemID.smallUranium235,0]);
});

// 电动马达
IDRegistry.genItemID("electricMotor");
Item.createItem("electricMotor","Electric Motor",{name:"electric_motor"});

// 电动活塞
IDRegistry.genItemID("electricPiston");
Item.createItem("electricPiston","Electric Piston",{name:"electric_piston"});

// 真空管
IDRegistry.genItemID("vacuumTube");
Item.createItem("vacuumTube","Vacuum Tube",{name:"vacuum_tube"});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.electricMotor,count:1,data:0},[" ab","aca","da "],["a",ItemID.partTin,0,"b",ItemID.stickIron,0,"c",ItemID.wireCopper,0,"d",ItemID.wireTin,0]);
    Recipes.addShaped({id:ItemID.electricPiston,count:1,data:0},["eae","aca","bdb"],["a",ItemID.plateIron,0,"b",ItemID.stickIron,0,"c",ItemID.electricMotor,0,"d",ItemID.ringIron,0,"e",ItemID.partIron,0]);
    Recipes.addShaped({id:ItemID.vacuumTube,count:1,data:0},[" c ","aba"," d "],["a",ItemID.wireCopper,0,"b",ItemID.dustCarbon,0,"c",20,0,"d",331,0]);
});

// 机器外壳
IDRegistry.genBlockID("machineCasing");
Block.createBlock("machineCasing",[
    {name:"Basic Machine Casing",texture:[["machine_bottom",0],["machine_top",0],["machine_side",0]],inCreative:true},
    {name:"Advanced Machine Casing",texture:[["machine_bottom",1],["machine_top",1],["machine_side",1]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.machineCasing,"stone",1);
Block.setDestroyTime(BlockID.machineCasing,3);
Block.setDestroyLevel("machineCasing",1);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.machineCasing,count:1,data:0},["abb","bcb","bba"],["a",ItemID.stickIron ,0,"b",ItemID.plateIron ,0,"c",ItemID.gearIron ,0]);
    Recipes.addShaped({id:BlockID.machineCasing,count:1,data:1},["abb","bcb","bba"],["a",ItemID.stickSteel,0,"b",ItemID.plateSteel,0,"c",ItemID.gearSteel,0]);
});

// 尘土
IDRegistry.genBlockID("dust");
Block.createBlock("dust",[
    {name:"Dust",texture:[["dust",0]],inCreative:true}
],"dust");
ToolAPI.registerBlockMaterial(BlockID.dust,"dirt");
Block.setDestroyTime(BlockID.dust,1);

Callback.addCallback("PreLoaded",function(){
    Recipes.addFurnace(BlockID.dust,BlockID.clearGlass);

    Callback.addCallback("GenerateChunkUnderground",function(chunkX,chunkZ){
        for(var i = 0;i < 6;i++){
            var coords = GenerationUtils.randomCoords(chunkX,chunkZ,0,255);
            GenerationUtils.generateOre(coords.x,coords.y,coords.z,BlockID.dust,0,32);
        }
    });
});

// 通透玻璃
IDRegistry.genBlockID("clearGlass");
Block.createBlock("clearGlass",[
    {name:"Clear Glass",texture:[["clear_glass",0]],inCreative:true}
],"transparent");
Block.setDestroyTime(BlockID.clearGlass,0.5);

Block.registerDropFunction("clearGlass",function(coords,id,data,level,enchant){
    if(enchant.silk){
        return [[id,1,data]];
    }
    return [];
});

// 混凝土块
IDRegistry.genBlockID("blockConcrete");
Block.createBlock("blockConcrete",[
    {name:"Concrete Block",texture:[["blockConcrete",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockConcrete,"stone",1);
Block.setDestroyTime(BlockID.blockConcrete,3);
Block.setDestroyLevel("blockConcrete",1);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.blockConcrete,count:3,data:0},["aba","bcb","aba"],["a",12,-1,"b",13,0,"c",ItemID.slag,0]);
});

// ==================================================================================================== //

// 铁齿轮
IDRegistry.genItemID("gearIron");
Item.createItem("gearIron","Iron Gear",{name:"gearIron"});

// 钢齿轮
IDRegistry.genItemID("gearSteel");
Item.createItem("gearSteel","Steel Gear",{name:"gearSteel"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("ET-Gear",Translation.translate("Gear"),[
        ItemID.gearIron,
        ItemID.gearSteel
    ]);

    var wrench = Tool.getAllTool("Wrench");
    for(let i = 0;i < wrench.length;i++){
        Recipe.addShapedRecipe({id:ItemID.gearIron,count:1,data:0},["aba","bcb","aba"],["a",ItemID.stickIron,0,"b",ItemID.plateIron,0,"c",wrench[i],-1],{4:1});
        Recipe.addShapedRecipe({id:ItemID.gearSteel,count:1,data:0},["aba","bcb","aba"],["a",ItemID.stickSteel,0,"b",ItemID.plateSteel,0,"c",wrench[i],-1],{4:1});
    }
});

// ==================================================================================================== //

// 铁制零件
IDRegistry.genItemID("partIron");
Item.createItem("partIron","Iron Part",{name:"partIron"});

// 锡制零件
IDRegistry.genItemID("partTin");
Item.createItem("partTin","Tin Part",{name:"partTin"});

// 铜制零件
IDRegistry.genItemID("partCopper");
Item.createItem("partCopper","Copper Part",{name:"partCopper"});

// 金制零件
IDRegistry.genItemID("partGold");
Item.createItem("partGold","Gold Part",{name:"partGold"});

// 钢制零件
IDRegistry.genItemID("partSteel");
Item.createItem("partSteel","Steel Part",{name:"partSteel"});

// 恩奈特特制零件
IDRegistry.genItemID("partEnete");
Item.createItem("partEnete","Enete Alloy Part",{name:"partEnete"});

// 铅锑特制零件
IDRegistry.genItemID("partLeadAntimony");
Item.createItem("partLeadAntimony","Lead-Antimony Alloy Part",{name:"partLeadAntimony"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("ET-Part",Translation.translate("Part"),[
        ItemID.partIron,
        ItemID.partTin,
        ItemID.partCopper,
        ItemID.partGold,
        ItemID.partSteel,
        ItemID.partEnete,
        ItemID.partLeadAntimony
    ]);

    Recipes.addShaped({id:ItemID.partIron,count:1,data:0},["ab","ba"],["a",ItemID.plateIron,0,"b",ItemID.stickIron,0]);
    Recipes.addShaped({id:ItemID.partTin,count:1,data:0},["ab","ba"],["a",ItemID.plateTin,0,"b",ItemID.stickTin,0]);
    Recipes.addShaped({id:ItemID.partCopper,count:1,data:0},["ab","ba"],["a",ItemID.plateCopper,0,"b",ItemID.stickCopper,0]);
    Recipes.addShaped({id:ItemID.partGold,count:1,data:0},["ab","ba"],["a",ItemID.plateGold,0,"b",ItemID.stickGold,0]);
    Recipes.addShaped({id:ItemID.partSteel,count:1,data:0},["ab","ba"],["a",ItemID.plateSteel,0,"b",ItemID.stickSteel,0]);
    Recipes.addShaped({id:ItemID.partEnete,count:1,data:0},["ab","ba"],["a",ItemID.plateEnete,0,"b",ItemID.stickEnete,0]);
    Recipes.addShaped({id:ItemID.partLeadAntimony,count:1,data:0},["ab","ba"],["a",ItemID.plateLeadAntimony,0,"b",ItemID.stickLeadAntimony,0]);
});

// ==================================================================================================== //

// 铜棍
IDRegistry.genItemID("stickCopper");
Item.createItem("stickCopper","Copper Stick",{name:"stickCopper"});

// 锡棍
IDRegistry.genItemID("stickTin");
Item.createItem("stickTin","Tin Stick",{name:"stickTin"});

// 铁棍
IDRegistry.genItemID("stickIron");
Item.createItem("stickIron","Iron Stick",{name:"stickIron"});

// 钢棍
IDRegistry.genItemID("stickSteel");
Item.createItem("stickSteel","Steel Stick",{name:"stickSteel"});

// 金棍
IDRegistry.genItemID("stickGold");
Item.createItem("stickGold","Gold Stick",{name:"stickGold"});

// 钨棍
IDRegistry.genItemID("stickTungsten");
Item.createItem("stickTungsten","Tungsten Stick",{name:"stickTungsten"});

// 恩奈特合金棍
IDRegistry.genItemID("stickEnete");
Item.createItem("stickEnete","Enete Alloy Stick",{name:"stickEnete"});

// 铅锑合金棍
IDRegistry.genItemID("stickLeadAntimony");
Item.createItem("stickLeadAntimony","Lead-Antimony Alloy Stick",{name:"stickLeadAntimony"});


Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("stick",Translation.translate("Stick"),[
        ItemID.stickCopper,
        ItemID.stickTin,
        ItemID.stickIron,
        ItemID.stickSteel,
        ItemID.stickGold,
        ItemID.stickTungsten,
        ItemID.stickEnete,
        ItemID.stickLeadAntimony,
    ]);

    Recipe.addCuttingRecipe({id:ItemID.plateCopper,data:0},{id:ItemID.stickCopper,count:4,data:0});
    Recipe.addCuttingRecipe({id:ItemID.plateTin,data:0},{id:ItemID.stickTin,count:4,data:0});
    Recipe.addCuttingRecipe({id:ItemID.plateIron,data:0},{id:ItemID.stickIron,count:4,data:0});
    Recipe.addCuttingRecipe({id:ItemID.plateSteel,data:0},{id:ItemID.stickSteel,count:4,data:0});
    Recipe.addCuttingRecipe({id:ItemID.plateGold,data:0},{id:ItemID.stickGold,count:4,data:0});
    Recipe.addCuttingRecipe({id:ItemID.plateTungsten,data:0},{id:ItemID.stickTungsten,count:4,data:0});
    Recipe.addCuttingRecipe({id:ItemID.plateEnete,data:0},{id:ItemID.stickEnete,count:4,data:0});
    Recipe.addCuttingRecipe({id:ItemID.plateLeadAntimony,data:0},{id:ItemID.stickLeadAntimony,count:4,data:0});

    var cutter = Tool.getAllTool("Cutter");
    for(var i in cutter){
        Recipe.addShapeless({id:ItemID.stickCopper,count:4,data:0},[{id:ItemID.plateCopper,data:0},{id:ItemID.plateCopper,data:0}],cutter[i]);
        Recipe.addShapeless({id:ItemID.stickTin,count:4,data:0},[{id:ItemID.plateTin,data:0},{id:ItemID.plateTin,data:0}],cutter[i]);
        Recipe.addShapeless({id:ItemID.stickIron,count:4,data:0},[{id:ItemID.plateIron,data:0},{id:ItemID.plateIron,data:0}],cutter[i]);
        Recipe.addShapeless({id:ItemID.stickSteel,count:4,data:0},[{id:ItemID.plateSteel,data:0},{id:ItemID.plateSteel,data:0}],cutter[i]);
        Recipe.addShapeless({id:ItemID.stickGold,count:4,data:0},[{id:ItemID.plateGold,data:0},{id:ItemID.plateGold,data:0}],cutter[i]);
        Recipe.addShapeless({id:ItemID.stickTungsten,count:4,data:0},[{id:ItemID.plateTungsten,data:0},{id:ItemID.plateTungsten,data:0}],cutter[i]);
        Recipe.addShapeless({id:ItemID.stickLeadAntimony,count:4,data:0},[{id:ItemID.plateLeadAntimony,data:0},{id:ItemID.plateLeadAntimony,data:0}],cutter[i]);
    }
});

// ==================================================================================================== //

// 铁环
IDRegistry.genItemID("ringIron");
Item.createItem("ringIron","Iron Ring",{name:"ringIron"});

// 锡环
IDRegistry.genItemID("ringTin");
Item.createItem("ringTin","Tin Ring",{name:"ringTin"});

// 钢环
IDRegistry.genItemID("ringSteel");
Item.createItem("ringSteel","Steel Ring",{name:"ringSteel"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("ring",Translation.translate("Ring"),[
        ItemID.ringIron,
        ItemID.ringTin,
        ItemID.ringSteel
    ]);

    var hammer = Tool.getAllTool("Hammer");
    for(var i in hammer){
        Recipe.addShapeless({id:ItemID.ringIron,count:1,data:0},[{id:ItemID.stickIron,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.ringTin,count:1,data:0},[{id:ItemID.stickTin,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.ringSteel,count:1,data:0},[{id:ItemID.stickSteel,data:0}],hammer[i]);
    }
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

// ==================================================================================================== //

// 含杂铜粉
IDRegistry.genItemID("dustImpureCopper");
Item.createItem("dustImpureCopper","Impure Copper Dust",{name:"impure_copper_dust"});

// 含杂锡石粉
IDRegistry.genItemID("dustImpureCassiterite");
Item.createItem("dustImpureCassiterite","Impure Cassiterite Dust",{name:"impure_cassiterite_dust"});

// 含杂铅粉
IDRegistry.genItemID("dustImpureGalena");
Item.createItem("dustImpureGalena","Impure Galena Dust",{name:"impure_galena_dust"});

// 含杂铁粉
IDRegistry.genItemID("dustImpureIron");
Item.createItem("dustImpureIron","Impure Iron Dust",{name:"impure_iron_dust"});

// 含杂金粉
IDRegistry.genItemID("dustImpureGold");
Item.createItem("dustImpureGold","Impure Gold Dust",{name:"impure_gold_dust"});

// 含杂锂辉石粉
IDRegistry.genItemID("dustImpureSpodumene");
Item.createItem("dustImpureSpodumene","Impure Spodumene Dust",{name:"impure_lithium_dust"});

// 含杂钨粉
IDRegistry.genItemID("dustImpureTungsten");
Item.createItem("dustImpureTungsten","Impure Tungsten Dust",{name:"impure_tungsten_dust"});

// 含杂铀粉
IDRegistry.genItemID("dustImpureUranium");
Item.createItem("dustImpureUranium","Impure Uranium Dust",{name:"impure_uranium_dust"});

// 含杂银粉
IDRegistry.genItemID("dustImpureSilver");
Item.createItem("dustImpureSilver","Impure Silver Dust",{name:"impure_silver_dust"});

// 含杂黝铜粉
IDRegistry.genItemID("dustImpureTetrahedrite");
Item.createItem("dustImpureTetrahedrite","Impure Tetrahedrite Dust",{name:"impure_tetrahedrite_dust"});

// 含杂铝粉
IDRegistry.genItemID("dustImpureBauxite");
Item.createItem("dustImpureBauxite","Impure Bauxite Dust",{name:"impure_bauxite_dust"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("dustImpure",Translation.translate("Impure Dust"),[
        ItemID.dustImpureCopper,
        ItemID.dustImpureCassiterite,
        ItemID.dustImpureGalena,
        ItemID.dustImpureIron,
        ItemID.dustImpureGold,
        ItemID.dustImpureSpodumene,
        ItemID.dustImpureTungsten,
        ItemID.dustImpureUranium,
        ItemID.dustImpureSilver,
        ItemID.dustImpureTetrahedrite,
        ItemID.dustImpureBauxite     
    ]);

    Recipe.addAutoSaieveRecipe({id:13,data:0},[
        {id:ItemID.dustImpureCopper,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureCassiterite,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureGalena,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureIron,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureGold,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureSpodumene,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureTungsten,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureUranium,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureSilver,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureTetrahedrite,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureBauxite,minCount:1,maxCount:1,data:0,random:16}
    ]);

    Recipes.addFurnace(ItemID.dustImpureCopper,ItemID.ingotCopper);
    Recipes.addFurnace(ItemID.dustImpureCassiterite,ItemID.ingotTin);
    Recipes.addFurnace(ItemID.dustImpureGalena,ItemID.ingotLead);
    Recipes.addFurnace(ItemID.dustImpureIron,265);
    Recipes.addFurnace(ItemID.dustImpureGold,266);
    Recipes.addFurnace(ItemID.dustImpureUranium,ItemID.ingotUranium);
    Recipes.addFurnace(ItemID.dustImpureSilver,ItemID.ingotSilver);
    Recipes.addFurnace(ItemID.dustImpureTetrahedrite,ItemID.ingotCopper);
    Recipes.addFurnace(ItemID.dustImpureBauxite,ItemID.ingotAluminium);
    
    Recipe.addBlastFurnaceRecipe({id:ItemID.dustImpureTungsten,data:0},[{id:ItemID.ingotTungsten,count:1,data:0}]);

    Recipe.addOreWasherRecipe({id:ItemID.dustImpureCopper,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    Recipe.addOreWasherRecipe({id:ItemID.dustImpureCassiterite,data:0},[{id:ItemID.dustTin,count:1,data:0},{id:ItemID.dustSmallIron,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    Recipe.addOreWasherRecipe({id:ItemID.dustImpureGalena,data:0},[{id:ItemID.dustLead,count:1,data:0},{id:ItemID.dustSmallCopper,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    Recipe.addOreWasherRecipe({id:ItemID.dustImpureIron,data:0},[{id:ItemID.dustIron,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    Recipe.addOreWasherRecipe({id:ItemID.dustImpureGold,data:0},[{id:ItemID.dustGold,count:1,data:0},{id:ItemID.dustSmallSilver,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    Recipe.addOreWasherRecipe({id:ItemID.dustImpureSpodumene,data:0},[{id:ItemID.dustLithium,count:1,data:0},{id:ItemID.dustSmallLithium,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    Recipe.addOreWasherRecipe({id:ItemID.dustImpureTungsten,data:0},[{id:ItemID.dustTungsten,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    Recipe.addOreWasherRecipe({id:ItemID.dustImpureUranium,data:0},[{id:ItemID.dustUranium,count:1,data:0},{id:ItemID.dustSmallUranium,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    Recipe.addOreWasherRecipe({id:ItemID.dustImpureSilver,data:0},[{id:ItemID.dustSilver,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    Recipe.addOreWasherRecipe({id:ItemID.dustImpureTetrahedrite,data:0},[{id:ItemID.dustTetrahedrite,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    Recipe.addOreWasherRecipe({id:ItemID.dustImpureBauxite,data:0},[{id:ItemID.dustAluminium,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    
    Recipe.addCentrifugeRecipe({id:ItemID.dustImpureCopper,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.dustImpureCassiterite,data:0},[{id:ItemID.dustTin,count:1,data:0},{id:ItemID.dustSmallIron,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.dustImpureGalena,data:0},[{id:ItemID.dustLead,count:1,data:0},{id:ItemID.dustSmallCopper,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.dustImpureIron,data:0},[{id:ItemID.dustIron,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.dustImpureGold,data:0},[{id:ItemID.dustGold,count:1,data:0},{id:ItemID.dustSmallSilver,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.dustImpureSpodumene,data:0},[{id:ItemID.dustLithium,count:1,data:0},{id:ItemID.dustSmallLithium,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.dustImpureTungsten,data:0},[{id:ItemID.dustTungsten,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.dustImpureUranium,data:0},[{id:ItemID.smallUranium235,count:1,data:0},{id:ItemID.uranium238,count:4,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.dustImpureSilver,data:0},[{id:ItemID.dustSilver,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.dustImpureTetrahedrite,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.dustImpureBauxite,data:0},[{id:ItemID.dustAluminium,count:1,data:0},{id:ItemID.dustSmallAluminium,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    
    var mortar = Tool.getAllTool("Mortar");
    for(var i in mortar){
        Recipe.addShapeless({id:ItemID.dustImpureCopper,count:1,data:0},[{id:BlockID.oreCopper,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustImpureCassiterite,count:1,data:0},[{id:BlockID.oreCassiterite,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustImpureGalena,count:1,data:0},[{id:BlockID.oreGalena,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustImpureIron,count:1,data:0},[{id:15,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustImpureGold,count:1,data:0},[{id:14,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustImpureSpodumene,count:1,data:0},[{id:BlockID.oreSpodumene,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustImpureTungsten,count:1,data:0},[{id:BlockID.oreTungsten,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustImpureUranium,count:1,data:0},[{id:BlockID.oreUranium,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustImpureSilver,count:1,data:0},[{id:BlockID.oreSilver,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustImpureTetrahedrite,count:1,data:0},[{id:BlockID.oreTetrahedrite,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustImpureBauxite,count:1,data:0},[{id:BlockID.oreBauxite,data:0}],mortar[i]);

        Recipe.addShapeless({id:ItemID.dustImpureCopper,count:1,data:0},[{id:ItemID.crushedCopper,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustImpureCassiterite,count:1,data:0},[{id:ItemID.crushedCassiterite,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustImpureGalena,count:1,data:0},[{id:ItemID.crushedGalena,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustImpureIron,count:1,data:0},[{id:ItemID.crushedIron,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustImpureGold,count:1,data:0},[{id:ItemID.crushedGold,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustImpureSpodumene,count:1,data:0},[{id:ItemID.crushedSpodumene,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustImpureTungsten,count:1,data:0},[{id:ItemID.crushedTungsten,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustImpureUranium,count:1,data:0},[{id:ItemID.crushedUranium,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustImpureSilver,count:1,data:0},[{id:ItemID.crushedSilver,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustImpureTetrahedrite,count:1,data:0},[{id:ItemID.crushedTetrahedrite,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustImpureBauxite,count:1,data:0},[{id:ItemID.crushedBauxite,count:1,data:0}],mortar[i]);
    }
    
    Recipe.addMaceratorRecipe({id:BlockID.oreCopper,data:0},{id:ItemID.dustImpureCopper,count:2,data:0});
    Recipe.addMaceratorRecipe({id:BlockID.oreCassiterite,data:0},{id:ItemID.dustImpureCassiterite,count:2,data:0});
    Recipe.addMaceratorRecipe({id:BlockID.oreGalena,data:0},{id:ItemID.dustImpureGalena,count:2,data:0});
    Recipe.addMaceratorRecipe({id:15,data:0},{id:ItemID.dustImpureIron,count:2,data:0});
    Recipe.addMaceratorRecipe({id:14,data:0},{id:ItemID.dustImpureGold,count:2,data:0});
    Recipe.addMaceratorRecipe({id:BlockID.oreSpodumene,data:0},{id:ItemID.dustImpureSpodumene,count:2,data:0});
    Recipe.addMaceratorRecipe({id:BlockID.oreTungsten,data:0},{id:ItemID.dustImpureTungsten,count:2,data:0});
    Recipe.addMaceratorRecipe({id:BlockID.oreUranium,data:0},{id:ItemID.dustImpureUranium,count:2,data:0});
    Recipe.addMaceratorRecipe({id:BlockID.oreSilver,data:0},{id:ItemID.dustImpureSilver,count:2,data:0});
    Recipe.addMaceratorRecipe({id:BlockID.oreTetrahedrite,data:0},{id:ItemID.dustImpureTetrahedrite,count:2,data:0});
    Recipe.addMaceratorRecipe({id:BlockID.oreBauxite,data:0},{id:ItemID.dustImpureBauxite,count:2,data:0});

    Recipe.addMaceratorRecipe({id:ItemID.crushedCopper,data:0},{id:ItemID.dustImpureCopper,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedCassiterite,data:0},{id:ItemID.dustImpureCassiterite,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedGalena,data:0},{id:ItemID.dustImpureGalena,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedIron,data:0},{id:ItemID.dustImpureIron,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedGold,data:0},{id:ItemID.dustImpureGold,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedSpodumene,data:0},{id:ItemID.dustImpureSpodumene,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedTungsten,data:0},{id:ItemID.dustImpureTungsten,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedUranium,data:0},{id:ItemID.dustImpureUranium,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedSilver,data:0},{id:ItemID.dustImpureSilver,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedTetrahedrite,data:0},{id:ItemID.dustImpureTetrahedrite,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedBauxite,data:0},{id:ItemID.dustImpureBauxite,count:2,data:0});
});

// ==================================================================================================== //

// 石粉
IDRegistry.genItemID("dustStone");
IDRegistry.genItemID("dustSmallStone");
Item.createItem("dustStone","Stone Dust",{name:"stone_dust"});
Item.createItem("dustSmallStone","Small Pile of Stone Dust",{name:"small_stone_dust"});

// 末影粉
IDRegistry.genItemID("dustEnder");
IDRegistry.genItemID("dustSmallEnder");
Item.createItem("dustEnder","Ender Dust",{name:"ender_dust"});
Item.createItem("dustSmallEnder","Small Pile of Ender Dust",{name:"small_ender_dust"});

// 燧石粉
IDRegistry.genItemID("dustFlint");
IDRegistry.genItemID("dustSmallFlint");
Item.createItem("dustFlint","Flint Dust",{name:"flint_dust"});
Item.createItem("dustSmallFlint","Small Pile of Flint Dust",{name:"small_flint_dust"});

// 铜粉
IDRegistry.genItemID("dustCopper");
IDRegistry.genItemID("dustSmallCopper");
Item.createItem("dustCopper","Copper Dust",{name:"copper_dust"});
Item.createItem("dustSmallCopper","Small Pile of Copper Dust",{name:"small_copper_dust"});

// 锡粉
IDRegistry.genItemID("dustTin");
IDRegistry.genItemID("dustSmallTin");
Item.createItem("dustTin","Tin Dust",{name:"tin_dust"});
Item.createItem("dustSmallTin","Small Pile of Tin Dust",{name:"small_tin_dust"});

// 铅粉
IDRegistry.genItemID("dustLead");
IDRegistry.genItemID("dustSmallLead");
Item.createItem("dustLead","Lead Dust",{name:"lead_dust"});
Item.createItem("dustSmallLead","Small Pile of Lead Dust",{name:"small_lead_dust"});

// 铁粉
IDRegistry.genItemID("dustIron");
IDRegistry.genItemID("dustSmallIron");
Item.createItem("dustIron","Iron Dust",{name:"iron_dust"});
Item.createItem("dustSmallIron","Small Pile of Iron Dust",{name:"small_iron_dust"});

// 钢粉
IDRegistry.genItemID("dustSteel");
IDRegistry.genItemID("dustSmallSteel");
Item.createItem("dustSteel","Steel Dust",{name:"steel_dust"});
Item.createItem("dustSmallSteel","Small Pile of Steel Dust",{name:"small_steel_dust"});

// 金粉
IDRegistry.genItemID("dustGold");
IDRegistry.genItemID("dustSmallGold");
Item.createItem("dustGold","Gold Dust",{name:"gold_dust"});
Item.createItem("dustSmallGold","Small Pile of Gold Dust",{name:"small_gold_dust"});

// 锑粉
IDRegistry.genItemID("dustAntimony");
IDRegistry.genItemID("dustSmallAntimony");
Item.createItem("dustAntimony","Antimony Dust",{name:"antimony_dust"});
Item.createItem("dustSmallAntimony","Small Pile of Antimony Dust",{name:"small_antimony_dust"});

// 锂粉
IDRegistry.genItemID("dustLithium");
IDRegistry.genItemID("dustSmallLithium");
Item.createItem("dustLithium","Lithium Dust",{name:"lithium_dust"});
Item.createItem("dustSmallLithium","Small Pile of Lithium Dust",{name:"small_lithium_dust"});

// 碳粉
IDRegistry.genItemID("dustCarbon");
IDRegistry.genItemID("dustSmallCarbon");
Item.createItem("dustCarbon","Carbon Dust",{name:"carbon_dust"});
Item.createItem("dustSmallCarbon","Small Pile of Carbon Dust",{name:"small_carbon_dust"});

// 钨粉
IDRegistry.genItemID("dustTungsten");
IDRegistry.genItemID("dustSmallTungsten");
Item.createItem("dustTungsten","Tungsten Dust",{name:"tungsten_dust"});
Item.createItem("dustSmallTungsten","Small Pile of Tungsten Dust",{name:"small_tungsten_dust"});

// 铀粉
IDRegistry.genItemID("dustUranium");
IDRegistry.genItemID("dustSmallUranium");
Item.createItem("dustUranium","Uranium Dust",{name:"uranium_dust"});
Item.createItem("dustSmallUranium","Small Pile of Uranium Dust",{name:"small_uranium_dust"});

// 银粉
IDRegistry.genItemID("dustSilver");
IDRegistry.genItemID("dustSmallSilver");
Item.createItem("dustSilver","Silver Dust",{name:"silver_dust"});
Item.createItem("dustSmallSilver","Small Pile of Silver Dust",{name:"small_silver_dust"});

// 黝铜粉
IDRegistry.genItemID("dustTetrahedrite");
IDRegistry.genItemID("dustSmallTetrahedrite");
Item.createItem("dustTetrahedrite","Tetrahedrite Dust",{name:"tetrahedrite_dust"});
Item.createItem("dustSmallTetrahedrite","Small Pile of Tetrahedrite Dust",{name:"small_tetrahedrite_dust"});

// 铝粉
IDRegistry.genItemID("dustAluminium");
IDRegistry.genItemID("dustSmallAluminium");
Item.createItem("dustAluminium","Aluminium Dust",{name:"aluminium_dust"});
Item.createItem("dustSmallAluminium","Small Pile of Aluminium Dust",{name:"small_aluminium_dust"});

// 钻石粉
IDRegistry.genItemID("dustDiamond");
IDRegistry.genItemID("dustSmallDiamond");
Item.createItem("dustDiamond","Diamond Dust",{name:"diamond_dust"});
Item.createItem("dustSmallDiamond","Small Pile of Diamond Dust",{name:"small_diamond_dust"});

// 恩奈特合金粉
IDRegistry.genItemID("dustEnete");
IDRegistry.genItemID("dustSmallEnete");
Item.createItem("dustEnete","Enete Alloy Dust",{name:"enete_dust"});
Item.createItem("dustSmallEnete","Small Pile of Enete Alloy Dust",{name:"small_enete_dust"});

// 铅锑合金粉
IDRegistry.genItemID("dustLeadAntimony");
IDRegistry.genItemID("dustSmallLeadAntimony");
Item.createItem("dustLeadAntimony","Lead-Antimony Alloy Dust",{name:"lead_antimony_dust"});
Item.createItem("dustSmallLeadAntimony","Small Pile of Lead-Antimony Alloy Dust",{name:"small_lead_antimony_dust"});

// 二氧化硅粉
IDRegistry.genItemID("dustSiliconDioxide");
IDRegistry.genItemID("dustSmallSiliconDioxide");
Item.createItem("dustSiliconDioxide","Silicon Dioxide Dust",{name:"silicon_dioxide_dust"});
Item.createItem("dustSmallSiliconDioxide","Small Pile of Silicon Dioxide Dust",{name:"small_silicon_dioxide_dust"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("dust",Translation.translate("Dust"),[
        ItemID.dustStone,
        ItemID.dustEnder,
        ItemID.dustCopper,
        ItemID.dustTin,
        ItemID.dustLead,
        ItemID.dustIron,
        ItemID.dustSteel,
        ItemID.dustGold,
        ItemID.dustAntimony,
        ItemID.dustLithium,
        ItemID.dustCarbon,
        ItemID.dustTungsten,
        ItemID.dustUranium,
        ItemID.dustSilver,
        ItemID.dustTetrahedrite,
        ItemID.dustAluminium,
        ItemID.dustEnete,
        ItemID.dustLeadAntimony,
        ItemID.dustSiliconDioxide,
        ItemID.dustFlint,
        ItemID.dustDiamond
    ]);

    Item.addCreativeGroup("dustSmall",Translation.translate("Small Dust"),[
        ItemID.dustSmallStone,
        ItemID.dustSmallEnder,
        ItemID.dustSmallCopper,
        ItemID.dustSmallTin,
        ItemID.dustSmallLead,
        ItemID.dustSmallIron,
        ItemID.dustSmallSteel,
        ItemID.dustSmallGold,
        ItemID.dustSmallAntimony,
        ItemID.dustSmallLithium,
        ItemID.dustSmallCarbon,
        ItemID.dustSmallTungsten,
        ItemID.dustSmallUranium,
        ItemID.dustSmallSilver,
        ItemID.dustSmallTetrahedrite,
        ItemID.dustSmallAluminium,
        ItemID.dustSmallEnete,
        ItemID.dustSmallLeadAntimony,
        ItemID.dustSmallSiliconDioxide,
        ItemID.dustSmallFlint,
        ItemID.dustSmallDiamond
    ]);

    Recipes.addShapeless({id:ItemID.dustSmallStone,count:9,data:0},[{id:ItemID.dustStone,data:0}]);
    Recipes.addShaped({id:ItemID.dustStone,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallStone,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallEnder,count:9,data:0},[{id:ItemID.dustEnder,data:0}]);
    Recipes.addShaped({id:ItemID.dustEnder,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallEnder,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallFlint,count:9,data:0},[{id:ItemID.dustFlint,data:0}]);
    Recipes.addShaped({id:ItemID.dustFlint,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallFlint,0]);

    Recipes.addShapeless({id:ItemID.dustSmallCopper,count:9,data:0},[{id:ItemID.dustCopper,data:0}]);
    Recipes.addShaped({id:ItemID.dustCopper,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallCopper,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallTin,count:9,data:0},[{id:ItemID.dustTin,data:0}]);
    Recipes.addShaped({id:ItemID.dustTin,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallTin,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallLead,count:9,data:0},[{id:ItemID.dustLead,data:0}]);
    Recipes.addShaped({id:ItemID.dustLead,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallLead,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallIron,count:9,data:0},[{id:ItemID.dustIron,data:0}]);
    Recipes.addShaped({id:ItemID.dustIron,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallIron,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallSteel,count:9,data:0},[{id:ItemID.dustSteel,data:0}]);
    Recipes.addShaped({id:ItemID.dustSteel,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallSteel,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallGold,count:9,data:0},[{id:ItemID.dustGold,data:0}]);
    Recipes.addShaped({id:ItemID.dustGold,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallGold,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallAntimony,count:9,data:0},[{id:ItemID.dustAntimony,data:0}]);
    Recipes.addShaped({id:ItemID.dustAntimony,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallAntimony,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallLithium,count:9,data:0},[{id:ItemID.dustLithium,data:0}]);
    Recipes.addShaped({id:ItemID.dustLithium,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallLithium,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallCarbon,count:9,data:0},[{id:ItemID.dustCarbon,data:0}]);
    Recipes.addShaped({id:ItemID.dustCarbon,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallCarbon,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallTungsten,count:9,data:0},[{id:ItemID.dustTungsten,data:0}]);
    Recipes.addShaped({id:ItemID.dustTungsten,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallTungsten,0]);

    Recipes.addShapeless({id:ItemID.dustSmallUranium,count:9,data:0},[{id:ItemID.dustUranium,data:0}]);
    Recipes.addShaped({id:ItemID.dustUranium,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallUranium,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallSilver,count:9,data:0},[{id:ItemID.dustSilver,data:0}]);
    Recipes.addShaped({id:ItemID.dustSilver,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallSilver,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallTetrahedrite,count:9,data:0},[{id:ItemID.dustTetrahedrite,data:0}]);
    Recipes.addShaped({id:ItemID.dustTetrahedrite,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallTetrahedrite,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallAluminium,count:9,data:0},[{id:ItemID.dustAluminium,data:0}]);
    Recipes.addShaped({id:ItemID.dustAluminium,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallAluminium,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallDiamond,count:9,data:0},[{id:ItemID.dustDiamond,data:0}]);
    Recipes.addShaped({id:ItemID.dustDiamond,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallDiamond,0]);    

    Recipes.addShapeless({id:ItemID.dustSmallLeadAntimony,count:9,data:0},[{id:ItemID.dustLeadAntimony,data:0}]);
    Recipes.addShaped({id:ItemID.dustLeadAntimony,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallLeadAntimony,0]);

    Recipes.addShapeless({id:ItemID.dustSmallSiliconDioxide,count:9,data:0},[{id:ItemID.dustSiliconDioxide,data:0}]);
    Recipes.addShaped({id:ItemID.dustSiliconDioxide,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallSiliconDioxide,0]);

    Recipes.addShapeless({id:ItemID.dustLeadAntimony,count:2,data:0},[{id:ItemID.dustLead,data:0},{id:ItemID.dustAntimony,data:0}]);
    Recipes.addShaped({id:ItemID.dustEnete,count:3,data:0},["bca","cdc","acb"],["a",348,0,"b",331,0,"c",ItemID.dustEnder,0,"d",ItemID.dustIron,0]);

    Recipe.addCentrifugeRecipe({id:ItemID.dustFlint,data:0},[{id:ItemID.dustSmallSiliconDioxide,count:3,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.dustTetrahedrite,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0}]);
    
    var mortar = Tool.getAllTool("Mortar");
    for(let i in mortar){
        Recipe.addShapeless({id:ItemID.dustFlint,count:1,data:0},[{id:318,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustCopper,count:1,data:0},[{id:ItemID.ingotCopper,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustTin,count:1,data:0},[{id:ItemID.ingotTin,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustLead,count:1,data:0},[{id:ItemID.ingotLead,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustIron,count:1,data:0},[{id:265,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustGold,count:1,data:0},[{id:266,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustAntimony,count:1,data:0},[{id:ItemID.ingotAntimony,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustLithium,count:1,data:0},[{id:ItemID.ingotLithium,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustTungsten,count:1,data:0},[{id:ItemID.ingotTungsten,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustUranium,count:1,data:0},[{id:ItemID.ingotUranium,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustSilver,count:1,data:0},[{id:ItemID.ingotSilver,count:1,data:0}],mortar[i]);
        Recipe.addShapeless({id:ItemID.dustAluminium,count:1,data:0},[{id:ItemID.ingotAluminium,count:1,data:0}],mortar[i]);
    }
    
    Recipes.addFurnace(ItemID.dustCopper,ItemID.ingotCopper);
    Recipes.addFurnace(ItemID.dustTin,ItemID.ingotTin);
    Recipes.addFurnace(ItemID.dustLead,ItemID.ingotLead);
    Recipes.addFurnace(ItemID.dustIron,265);
    Recipes.addFurnace(ItemID.dustGold,266);
    Recipes.addFurnace(ItemID.dustAntimony,ItemID.ingotAntimony);
    Recipes.addFurnace(ItemID.dustLithium,ItemID.ingotLithium);
    Recipes.addFurnace(ItemID.dustUranium,ItemID.ingotUranium);
    Recipes.addFurnace(ItemID.dustSilver,ItemID.ingotSilver);
    Recipes.addFurnace(ItemID.dustAluminium,ItemID.ingotAluminium);
    Recipes.addFurnace(ItemID.dustEnete,ItemID.ingotEnete);
    Recipes.addFurnace(ItemID.dustLeadAntimony,ItemID.ingotLeadAntimony);
    Recipes.addFurnace(ItemID.dustSiliconDioxide,20);

    Recipe.addMaceratorRecipe({id:318,data:0},{id:ItemID.dustFlint,count:1,data:0});
    Recipe.addMaceratorRecipe({id:368,data:0},{id:ItemID.dustEnder,count:1,data:0});
    Recipe.addMaceratorRecipe({id:264,data:0},{id:ItemID.dustDiamond,count:1,data:0});

    Recipe.addBlastFurnaceRecipe({id:ItemID.dustTungsten,data:0},[{id:ItemID.ingotTungsten,count:1,data:0}]);

    Recipe.addMaceratorRecipe({id:ItemID.ingotCopper,data:0},{id:ItemID.dustCopper,count:1,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.ingotTin,data:0},{id:ItemID.dustTin,count:1,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.ingotLead,data:0},{id:ItemID.dustLead,count:1,data:0});
    Recipe.addMaceratorRecipe({id:265,data:0},{id:ItemID.dustIron,count:1,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.ingotSteel,data:0},{id:ItemID.dustSteel,count:1,data:0});
    Recipe.addMaceratorRecipe({id:266,data:0},{id:ItemID.dustGold,count:1,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.ingotAntimony,data:0},{id:ItemID.dustAntimony,count:1,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.ingotLithium,data:0},{id:ItemID.dustLithium,count:1,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.ingotTungsten,data:0},{id:ItemID.dustTungsten,count:1,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.ingotUranium,data:0},{id:ItemID.dustUranium,count:1,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.ingotSilver,data:0},{id:ItemID.dustSilver,count:1,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.ingotAluminium,data:0},{id:ItemID.dustAluminium,count:1,data:0});
    
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedCopper,data:0},{id:ItemID.dustCopper,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedCassiterite,data:0},{id:ItemID.dustTin,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedGalena,data:0},{id:ItemID.dustLead,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedIron,data:0},{id:ItemID.dustIron,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedGold,data:0},{id:ItemID.dustGold,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedAntimony,data:0},{id:ItemID.dustAntimony,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedSpodumene,data:0},{id:ItemID.dustLithium,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedTungsten,data:0},{id:ItemID.dustTungsten,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedUranium,data:0},{id:ItemID.dustUranium,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedSilver,data:0},{id:ItemID.dustSilver,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedTetrahedrite,data:0},{id:ItemID.dustTetrahedrite,count:2,data:0});
    Recipe.addMaceratorRecipe({id:ItemID.crushedPurifiedAluminium,data:0},{id:ItemID.dustAluminium,count:2,data:0});
});

// ==================================================================================================== //

// 铜块
IDRegistry.genBlockID("blockCopper");
Block.createBlock("blockCopper",[
    {name:"Copper Block",texture:[["copper_block",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockCopper,"stone",1);
Block.setDestroyTime(BlockID.blockCopper,3);
Block.setDestroyLevel("blockCopper",1);

// 锡块
IDRegistry.genBlockID("blockTin");
Block.createBlock("blockTin",[
    {name:"Tin Block",texture:[["tin_block",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockTin,"stone",1);
Block.setDestroyTime(BlockID.blockTin,3);
Block.setDestroyLevel("blockTin",1);

// 铅块
IDRegistry.genBlockID("blockLead");
Block.createBlock("blockLead",[
    {name:"Lead Block",texture:[["lead_block",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockLead,"stone",1);
Block.setDestroyTime(BlockID.blockLead,3);
Block.setDestroyLevel("blockLead",1);

// 锻铁块
IDRegistry.genBlockID("blockWroughtIron");
Block.createBlock("blockWroughtIron",[
    {name:"Wrought Iron Block",texture:[["wrought_iron_block",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockWroughtIron,"stone",1);
Block.setDestroyTime(BlockID.blockWroughtIron,3);
Block.setDestroyLevel("blockWroughtIron",1);

// 钢块
IDRegistry.genBlockID("blockSteel");
Block.createBlock("blockSteel",[
    {name:"Steel Block",texture:[["steel_block",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockSteel,"stone",1);
Block.setDestroyTime(BlockID.blockSteel,3);
Block.setDestroyLevel("blockSteel",1);

// 锑块
IDRegistry.genBlockID("blockAntimony");
Block.createBlock("blockAntimony",[
    {name:"Antimony Block",texture:[["antimony_block",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockAntimony,"stone",1);
Block.setDestroyTime(BlockID.blockAntimony,3);
Block.setDestroyLevel("blockAntimony",1);

// 锂块
IDRegistry.genBlockID("blockLithium");
Block.createBlock("blockLithium",[
    {name:"Lithium Block",texture:[["lithium_block",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockLithium,"stone",1);
Block.setDestroyTime(BlockID.blockLithium,3);
Block.setDestroyLevel("blockLithium",1);

// 碳块
IDRegistry.genBlockID("blockCarbon");
Block.createBlock("blockCarbon",[
    {name:"Carbon Block",texture:[["carbon_block",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockCarbon,"stone",1);
Block.setDestroyTime(BlockID.blockCarbon,3);
Block.setDestroyLevel("blockCarbon",1);

// 钨块
IDRegistry.genBlockID("blockTungsten");
Block.createBlock("blockTungsten",[
    {name:"Tungsten Block",texture:[["tungsten_block",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockTungsten,"stone",1);
Block.setDestroyTime(BlockID.blockTungsten,3);
Block.setDestroyLevel("blockTungsten",1);

// 银块
IDRegistry.genBlockID("blockSilver");
Block.createBlock("blockSilver",[
    {name:"Silver Block",texture:[["silver_block",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockSilver,"stone",1);
Block.setDestroyTime(BlockID.blockSilver,3);
Block.setDestroyLevel("blockSilver",1);

// 铝块
IDRegistry.genBlockID("blockAluminium");
Block.createBlock("blockAluminium",[
    {name:"Aluminium Block",texture:[["aluminium_block",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockAluminium,"stone",1);
Block.setDestroyTime(BlockID.blockAluminium,3);
Block.setDestroyLevel("blockAluminium",1);

// 铅锑合金块
IDRegistry.genBlockID("blockLeadAntimony");
Block.createBlock("blockLeadAntimony",[
    {name:"Lead-Antimony Alloy Block",texture:[["lead_antimony_block",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockLeadAntimony,"stone",1);
Block.setDestroyTime(BlockID.blockLeadAntimony,3);
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

// 铜板
IDRegistry.genItemID("plateCopper");
Item.createItem("plateCopper","Copper Plate",{name:"plateCopper"});

// 锡板
IDRegistry.genItemID("plateTin");
Item.createItem("plateTin","Tin Plate",{name:"plateTin"});

// 铁板
IDRegistry.genItemID("plateIron");
Item.createItem("plateIron","Iron Plate",{name:"plateIron"});

// 钢板
IDRegistry.genItemID("plateSteel");
Item.createItem("plateSteel","Steel Plate",{name:"plateSteel"});

// 金板
IDRegistry.genItemID("plateGold");
Item.createItem("plateGold","Gold Plate",{name:"plateGold"});

// 碳板
IDRegistry.genItemID("plateCarbon");
Item.createItem("plateCarbon","Carbon Plate",{name:"plateCarbon"});

// 钨板
IDRegistry.genItemID("plateTungsten");
Item.createItem("plateTungsten","Tungsten Plate",{name:"plateTungsten"});

// 青金石板
IDRegistry.genItemID("plateLapis");
Item.createItem("plateLapis","Lapis Plate",{name:"plateLapis"});

// 铅板
IDRegistry.genItemID("plateLead");
Item.createItem("plateLead","Lead Plate",{name:"plateLead"});

// 铝板
IDRegistry.genItemID("plateAluminium");
Item.createItem("plateAluminium","Aluminium Plate",{name:"plateAluminium"});

// 锑板
IDRegistry.genItemID("plateAntimony");
Item.createItem("plateAntimony","Antimony Plate",{name:"plateAntimony"});

// 恩奈特合金板
IDRegistry.genItemID("plateEnete");
Item.createItem("plateEnete","Enete Alloy Plate",{name:"plateEnete"});

// 铅锑合金板
IDRegistry.genItemID("plateLeadAntimony");
Item.createItem("plateLeadAntimony","Lead-Antimony Alloy Plate",{name:"plateLeadAntimony"});

// 电路板
IDRegistry.genItemID("plateCircuit");
Item.createItem("plateCircuit","Circuit Plate",{name:"plateCircuit"});

// 塑料板
IDRegistry.genItemID("platePlastic");
Item.createItem("platePlastic","Plastic Plate",{name:"platePlastic"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("plate",Translation.translate("Plate"),[
        ItemID.plateCopper,
        ItemID.plateTin,
        ItemID.plateIron,
        ItemID.plateSteel,
        ItemID.plateGold,
        ItemID.plateCarbon,
        ItemID.plateTungsten,
        ItemID.plateLapis,
        ItemID.plateLead,
        ItemID.plateAluminium,
        ItemID.plateAntimony,
        ItemID.plateEnete,
        ItemID.plateLeadAntimony,
        ItemID.plateCircuit,
        ItemID.platePlastic
    ]);

    Recipes.addFurnace(ItemID.resin,ItemID.platePlastic);

    Recipe.addCompressorRecipe({id:ItemID.ingotCopper,data:0},{id:ItemID.plateCopper,count:1,data:0});
    Recipe.addCompressorRecipe({id:ItemID.ingotTin,data:0},{id:ItemID.plateTin,count:1,data:0});
    Recipe.addCompressorRecipe({id:265,data:0},{id:ItemID.plateIron,count:1,data:0});
    Recipe.addCompressorRecipe({id:ItemID.ingotSteel,data:0},{id:ItemID.plateSteel,count:1,data:0});
    Recipe.addCompressorRecipe({id:266,data:0},{id:ItemID.plateGold,count:1,data:0});
    Recipe.addCompressorRecipe({id:ItemID.dustCarbon,data:0},{id:ItemID.plateCarbon,count:1,data:0});
    Recipe.addCompressorRecipe({id:ItemID.ingotTungsten,data:0},{id:ItemID.plateTungsten,count:1,data:0});
    Recipe.addCompressorRecipe({id:351,data:4},{id:ItemID.plateLapis,count:1,data:0});
    Recipe.addCompressorRecipe({id:ItemID.ingotLead,data:0},{id:ItemID.plateLead,count:1,data:0});
    Recipe.addCompressorRecipe({id:ItemID.ingotAluminium,data:0},{id:ItemID.plateAluminium,count:1,data:0});
    Recipe.addCompressorRecipe({id:ItemID.ingotLeadAntimony,data:0},{id:ItemID.plateLeadAntimony,count:1,data:0});
    Recipe.addCompressorRecipe({id:ItemID.ingotAntimony,data:0},{id:ItemID.plateAntimony,count:1,data:0});

    var hammer = Tool.getAllTool("Hammer");
    for(var i in hammer){
        Recipe.addShapeless({id:ItemID.plateCopper,count:1,data:0},[{id:ItemID.ingotCopper,data:0},{id:ItemID.ingotCopper,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateTin,count:1,data:0},[{id:ItemID.ingotTin,data:0},{id:ItemID.ingotTin,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateIron,count:1,data:0},[{id:265,data:0},{id:265,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateSteel,count:1,data:0},[{id:ItemID.ingotSteel,data:0},{id:ItemID.ingotSteel,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateGold,count:1,data:0},[{id:266,data:0},{id:266,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateCarbon,count:1,data:0},[{id:ItemID.dustCarbon,data:0},{id:ItemID.dustCarbon,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateTungsten,count:1,data:0},[{id:ItemID.ingotTungsten,data:0},{id:ItemID.ingotTungsten,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateLapis,count:1,data:0},[{id:351,data:4},{id:351,data:4}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateLead,count:1,data:0},[{id:ItemID.ingotLead,data:0},{id:ItemID.ingotLead,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateAluminium,count:1,data:0},[{id:ItemID.ingotAluminium,data:0},{id:ItemID.ingotAluminium,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateLeadAntimony,count:1,data:0},[{id:ItemID.ingotLeadAntimony,data:0},{id:ItemID.ingotLeadAntimony ,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateAntimony,count:1,data:0},[{id:ItemID.ingotAntimony,data:0},{id:ItemID.ingotAntimony,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateEnete,count:1,data:0},[{id:ItemID.ingotEnete,data:0},{id:ItemID.ingotEnete,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateCircuit,count:1,data:0},[{id:ItemID.platePlastic,data:0},{id:ItemID.dustSiliconDioxide,data:0}],hammer[i]);
    }
});

// ==================================================================================================== //

// 粉碎铜矿石
IDRegistry.genItemID("crushedCopper");
IDRegistry.genItemID("crushedPurifiedCopper");
Item.createItem("crushedCopper","Crushed Copper Ore",{name:"crushed_copper"});
Item.createItem("crushedPurifiedCopper","Purified Crushed Copper Ore",{name:"purified_copper"});

// 粉碎锡石矿石
IDRegistry.genItemID("crushedCassiterite");
IDRegistry.genItemID("crushedPurifiedCassiterite");
Item.createItem("crushedCassiterite","Crushed Cassiterite Ore",{name:"crushed_cassiterite"});
Item.createItem("crushedPurifiedCassiterite","Purified Crushed Cassiterite Ore",{name:"purified_cassiterite"});

//粉碎方铅矿石
IDRegistry.genItemID("crushedGalena");
IDRegistry.genItemID("crushedPurifiedGalena");
Item.createItem("crushedGalena","Crushed Galena Ore",{name:"crushed_galena"});
Item.createItem("crushedPurifiedGalena","Purified Crushed Galena Ore",{name:"purified_galena"});

// 粉碎铁矿石
IDRegistry.genItemID("crushedIron");
IDRegistry.genItemID("crushedPurifiedIron");
Item.createItem("crushedIron","Crushed Iron Ore",{name:"crushed_iron"});
Item.createItem("crushedPurifiedIron","Purified Crushed Iron Ore",{name:"purified_iron"});

// 粉碎金矿石
IDRegistry.genItemID("crushedGold");
IDRegistry.genItemID("crushedPurifiedGold");
Item.createItem("crushedGold","Crushed Gold Ore",{name:"crushed_gold"});
Item.createItem("crushedPurifiedGold","Purified Crushed Gold Ore",{name:"purified_gold"});

// 粉碎锂辉石矿石
IDRegistry.genItemID("crushedSpodumene");
IDRegistry.genItemID("crushedPurifiedSpodumene");
Item.createItem("crushedSpodumene","Crushed Spodumene Ore",{name:"crushed_spodumene"});
Item.createItem("crushedPurifiedSpodumene","Purified Crushed Spodumene Ore",{name:"purified_spodumene"});

// 粉碎钨矿石
IDRegistry.genItemID("crushedTungsten");
IDRegistry.genItemID("crushedPurifiedTungsten");
Item.createItem("crushedTungsten","Crushed Tungsten Ore",{name:"crushed_tungsten"});
Item.createItem("crushedPurifiedTungsten","Purified Crushed Tungsten Ore",{name:"purified_tungsten"});

// 粉碎铀矿石
IDRegistry.genItemID("crushedUranium");
IDRegistry.genItemID("crushedPurifiedUranium");
Item.createItem("crushedUranium","Crushed Uranium Ore",{name:"crushed_uranium"});
Item.createItem("crushedPurifiedUranium","Purified Crushed Uranium Ore",{name:"purified_uranium"});

// 粉碎银矿石
IDRegistry.genItemID("crushedSilver");
IDRegistry.genItemID("crushedPurifiedSilver");
Item.createItem("crushedSilver","Crushed Silver Ore",{name:"crushed_silver"});
Item.createItem("crushedPurifiedSilver","Purified Crushed Silver Ore",{name:"purified_silver"});

// 粉碎黝铜矿石
IDRegistry.genItemID("crushedTetrahedrite");
IDRegistry.genItemID("crushedPurifiedTetrahedrite");
Item.createItem("crushedTetrahedrite","Crushed Tetrahedrite Ore",{name:"crushed_tetrahedrite"});
Item.createItem("crushedPurifiedTetrahedrite","Purified Crushed Tetrahedrite Ore",{name:"purified_tetrahedrite"});

// 粉碎铝土矿石
IDRegistry.genItemID("crushedBauxite");
IDRegistry.genItemID("crushedPurifiedBauxite");
Item.createItem("crushedBauxite","Crushed Bauxite Ore",{name:"crushed_bauxite"});
Item.createItem("crushedPurifiedBauxite","Purified Crushed Bauxite Ore",{name:"purified_bauxite"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("crushed",Translation.translate("Crushed Ore"),[
        ItemID.crushedCopper,
        ItemID.crushedCassiterite,
        ItemID.crushedGalena,
        ItemID.crushedIron,
        ItemID.crushedGold,
        ItemID.crushedSpodumene,
        ItemID.crushedTungsten,
        ItemID.crushedUranium,
        ItemID.crushedSilver,
        ItemID.crushedTetrahedrite,
        ItemID.crushedBauxite
    ]);

    Item.addCreativeGroup("purified",Translation.translate("Purified Crushed Ore"),[
        ItemID.crushedPurifiedCopper,
        ItemID.crushedPurifiedCassiterite,
        ItemID.crushedPurifiedGalena,
        ItemID.crushedPurifiedIron,
        ItemID.crushedPurifiedGold,
        ItemID.crushedPurifiedSpodumene,
        ItemID.crushedPurifiedTungsten,
        ItemID.crushedPurifiedUranium,
        ItemID.crushedPurifiedSilver,
        ItemID.crushedPurifiedTetrahedrite,
        ItemID.crushedPurifiedBauxite
    ]);

    Recipes.addFurnace(ItemID.crushedCopper,ItemID.ingotCopper);
    Recipes.addFurnace(ItemID.crushedCassiterite,ItemID.ingotTin);
    Recipes.addFurnace(ItemID.crushedGalena,ItemID.ingotLead);
    Recipes.addFurnace(ItemID.crushedIron,265);
    Recipes.addFurnace(ItemID.crushedGold,266);
    Recipes.addFurnace(ItemID.crushedUranium,ItemID.ingotUranium);
    Recipes.addFurnace(ItemID.crushedSilver,ItemID.ingotSilver);
    Recipes.addFurnace(ItemID.crushedTetrahedrite,ItemID.ingotCopper);
    Recipes.addFurnace(ItemID.crushedBauxite,ItemID.ingotAluminium);

    Recipes.addFurnace(ItemID.crushedPurifiedCopper,ItemID.ingotCopper);
    Recipes.addFurnace(ItemID.crushedPurifiedCassiterite,ItemID.ingotTin);
    Recipes.addFurnace(ItemID.crushedPurifiedGalena,ItemID.ingotLead);
    Recipes.addFurnace(ItemID.crushedPurifiedIron,265);
    Recipes.addFurnace(ItemID.crushedPurifiedGold,266);
    Recipes.addFurnace(ItemID.crushedPurifiedUranium,ItemID.ingotUranium);
    Recipes.addFurnace(ItemID.crushedPurifiedSilver,ItemID.ingotSilver);
    Recipes.addFurnace(ItemID.crushedPurifiedTetrahedrite,ItemID.ingotCopper);
    Recipes.addFurnace(ItemID.crushedPurifiedBauxite,ItemID.ingotAluminium);

    Recipe.addAutoSaieveRecipe({id:13,data:0},[
        {id:ItemID.crushedCopper,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedCassiterite,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedGalena,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedIron,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedGold,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedSpodumene,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedTungsten,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedUranium,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedSilver,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedTetrahedrite,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedBauxite,minCount:1,maxCount:1,data:0,random:16}
    ]);

    Recipe.addMaceratorRecipe({id:BlockID.oreCopper,data:0},{id:ItemID.crushedCopper,count:2,data:0});
    Recipe.addMaceratorRecipe({id:BlockID.oreCassiterite,data:0},{id:ItemID.crushedCassiterite,count:2,data:0});
    Recipe.addMaceratorRecipe({id:BlockID.oreGalena,data:0},{id:ItemID.crushedGalena,count:2,data:0});
    Recipe.addMaceratorRecipe({id:15,data:0},{id:ItemID.crushedIron,count:2,data:0});
    Recipe.addMaceratorRecipe({id:14,data:0},{id:ItemID.crushedGold,count:2,data:0});
    Recipe.addMaceratorRecipe({id:BlockID.oreSpodumene,data:0},{id:ItemID.crushedSpodumene,count:2,data:0});
    Recipe.addMaceratorRecipe({id:BlockID.oreTungsten,data:0},{id:ItemID.crushedTungsten,count:2,data:0});
    Recipe.addMaceratorRecipe({id:BlockID.oreUranium,data:0},{id:ItemID.crushedUranium,count:2,data:0});
    Recipe.addMaceratorRecipe({id:BlockID.oreSilver,data:0},{id:ItemID.crushedSilver,count:2,data:0});
    Recipe.addMaceratorRecipe({id:BlockID.oreTetrahedrite,data:0},{id:ItemID.crushedTetrahedrite,count:2,data:0});
    Recipe.addMaceratorRecipe({id:BlockID.oreBauxite,data:0},{id:ItemID.crushedBauxite,count:2,data:0});

    var hammer = Tool.getAllTool("Hammer");
    for(let i in hammer){
        Recipe.addShapeless({id:ItemID.crushedCopper,count:1,data:0},[{id:BlockID.oreCopper,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.crushedCassiterite,count:1,data:0},[{id:BlockID.oreCassiterite,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.crushedGalena,count:1,data:0},[{id:BlockID.oreGalena,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.crushedIron,count:1,data:0},[{id:15,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.crushedGold,count:1,data:0},[{id:14,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.crushedSpodumene,count:1,data:0},[{id:BlockID.oreSpodumene,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.crushedTungsten,count:1,data:0},[{id:BlockID.oreTungsten,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.crushedUranium,count:1,data:0},[{id:BlockID.oreUranium,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.crushedSilver,count:1,data:0},[{id:BlockID.oreSilver,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.crushedTetrahedrite,count:1,data:0},[{id:BlockID.oreTetrahedrite,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.crushedBauxite,count:1,data:0},[{id:BlockID.oreBauxite,data:0}],hammer[i]);
    }

    Recipe.addBlastFurnaceRecipe({id:BlockID.crushedTungsten,data:0},[{id:ItemID.ingotTungsten,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
    Recipe.addBlastFurnaceRecipe({id:BlockID.crushedPurifiedTungsten,data:0},[{id:ItemID.ingotTungsten,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
    
    Recipe.addOreWasherRecipe({id:ItemID.crushedCopper,data:0},[{id:ItemID.crushedPurifiedCopper,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    Recipe.addOreWasherRecipe({id:ItemID.crushedCassiterite,data:0},[{id:ItemID.crushedPurifiedCassiterite,count:1,data:0},{id:ItemID.dustSmallIron,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    Recipe.addOreWasherRecipe({id:ItemID.crushedGalena,data:0},[{id:ItemID.crushedPurifiedGalena,count:1,data:0},{id:ItemID.dustSmallCopper,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    Recipe.addOreWasherRecipe({id:ItemID.crushedIron,data:0},[{id:ItemID.crushedPurifiedIron,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    Recipe.addOreWasherRecipe({id:ItemID.crushedGold,data:0},[{id:ItemID.crushedPurifiedGold,count:1,data:0},{id:ItemID.dustSmallSilver,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    Recipe.addOreWasherRecipe({id:ItemID.crushedSpodumene,data:0},[{id:ItemID.crushedPurifiedSpodumene,count:1,data:0},{id:ItemID.dustSmallLithium,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    Recipe.addOreWasherRecipe({id:ItemID.crushedTungsten,data:0},[{id:ItemID.crushedPurifiedTungsten,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    Recipe.addOreWasherRecipe({id:ItemID.crushedUranium,data:0},[{id:ItemID.crushedPurifiedUranium,count:1,data:0},{id:ItemID.dustSmallUranium,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    Recipe.addOreWasherRecipe({id:ItemID.crushedSilver,data:0},[{id:ItemID.crushedPurifiedSilver,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    Recipe.addOreWasherRecipe({id:ItemID.crushedTetrahedrite,data:0},[{id:ItemID.crushedPurifiedTetrahedrite,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    Recipe.addOreWasherRecipe({id:ItemID.crushedBauxite,data:0},[{id:ItemID.crushedPurifiedBauxite,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    
    Recipe.addCentrifugeRecipe({id:ItemID.crushedCopper,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.crushedCassiterite,data:0},[{id:ItemID.dustTin,count:1,data:0},{id:ItemID.dustSmallIron,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.crushedGalena,data:0},[{id:ItemID.dustLead,count:1,data:0},{id:ItemID.dustSmallCopper,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.crushedIron,data:0},[{id:ItemID.dustIron,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.crushedGold,data:0},[{id:ItemID.dustGold,count:1,data:0},{id:ItemID.dustSmallSilver,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.crushedSpodumene,data:0},[{id:ItemID.smallLithium6,count:1,data:0},{id:ItemID.lithium7,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.crushedTungsten,data:0},[{id:ItemID.dustTungsten,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.crushedUranium,data:0},[{id:ItemID.smallUranium235,count:1,data:0},{id:ItemID.uranium238,count:4,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.crushedSilver,data:0},[{id:ItemID.dustSilver,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.crushedTetrahedrite,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.crushedBauxite,data:0},[{id:ItemID.dustAluminium,count:1,data:0},{id:ItemID.dustSmallAluminium,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);

    Recipe.addCentrifugeRecipe({id:ItemID.crushedPurifiedCopper,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.crushedPurifiedCassiterite,data:0},[{id:ItemID.dustTin,count:1,data:0},{id:ItemID.dustSmallIron,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.crushedPurifiedGalena,data:0},[{id:ItemID.dustLead,count:1,data:0},{id:ItemID.dustSmallCopper,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.crushedPurifiedIron,data:0},[{id:ItemID.dustIron,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.crushedPurifiedGold,data:0},[{id:ItemID.dustGold,count:1,data:0},{id:ItemID.dustSmallSilver,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.crushedPurifiedSpodumene,data:0},[{id:ItemID.smallLithium6,count:2,data:0},{id:ItemID.lithium7,count:2,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.crushedPurifiedTungsten,data:0},[{id:ItemID.dustTungsten,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.crushedPurifiedUranium,data:0},[{id:ItemID.smallUranium235,count:2,data:0},{id:ItemID.uranium238,count:5,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.crushedPurifiedSilver,data:0},[{id:ItemID.dustSilver,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.crushedPurifiedTetrahedrite,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallAntimony ,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.crushedPurifiedBauxite,data:0},[{id:ItemID.dustAluminium,count:1,data:0},{id:ItemID.dustSmallAluminium,count:1,data:0}]);
});

// ==================================================================================================== //