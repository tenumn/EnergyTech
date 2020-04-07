// 铜块
IDRegistry.genBlockID("blockCopper");
Block.createBlock("blockCopper",[
    {name:"Copper Block",texture:[["blockCopper",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockCopper,"stone",1);
Block.setDestroyTime(BlockID.blockCopper,3);

// 锡块
IDRegistry.genBlockID("blockTin");
Block.createBlock("blockTin",[
    {name:"Tin Block",texture:[["blockTin",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockTin,"stone",1);
Block.setDestroyTime(BlockID.blockTin,3);

// 铅块
IDRegistry.genBlockID("blockLead");
Block.createBlock("blockLead",[
    {name:"Lead Block",texture:[["blockLead",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockLead,"stone",1);
Block.setDestroyTime(BlockID.blockLead,3);

// 锻铁块
IDRegistry.genBlockID("blockWroughtIron");
Block.createBlock("blockWroughtIron",[
    {name:"Wrought Iron Block",texture:[["blockWroughtIron"  ,0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockWroughtIron,"stone",1);
Block.setDestroyTime(BlockID.blockWroughtIron,3);

// 钢块
IDRegistry.genBlockID("blockSteel");
Block.createBlock("blockSteel",[
    {name:"Steel Block",texture:[["blockAntimony",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockSteel,"stone",1);
Block.setDestroyTime(BlockID.blockSteel,3);

// 锑块
IDRegistry.genBlockID("blockAntimony");
Block.createBlock("blockAntimony",[
    {name:"Antimony Block",texture:[["blockAntimony",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockAntimony,"stone",1);
Block.setDestroyTime(BlockID.blockAntimony,3);

// 锂块
IDRegistry.genBlockID("blockLithium");
Block.createBlock("blockLithium",[
    {name:"Lithium Block",texture:[["blockLithium",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockLithium,"stone",1);
Block.setDestroyTime(BlockID.blockLithium,3);

// 碳块
IDRegistry.genBlockID("blockCarbon");
Block.createBlock("blockCarbon",[
    {name:"Carbon Block",texture:[["blockCarbon",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockCarbon,"stone",1);
Block.setDestroyTime(BlockID.blockCarbon,3);

// 钨块
IDRegistry.genBlockID("blockTungsten");
Block.createBlock("blockTungsten",[
    {name:"Tungsten Block",texture:[["blockTungsten",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockTungsten,"stone",1);
Block.setDestroyTime(BlockID.blockTungsten,3);

// 银块
IDRegistry.genBlockID("blockSilver");
Block.createBlock("blockSilver",[
    {name:"Silver Block",texture:[["blockSilver",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockSilver,"stone",1);
Block.setDestroyTime(BlockID.blockSilver,3);

// 黝铜块
IDRegistry.genBlockID("blockTetrahedrite");
Block.createBlock("blockTetrahedrite",[
    {name:"Tetrahedrite Block",texture:[["blockTetrahedrite",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockTetrahedrite,"stone",1);
Block.setDestroyTime(BlockID.blockTetrahedrite,3);

// 铝块
IDRegistry.genBlockID("blockAluminium");
Block.createBlock("blockAluminium",[
    {name:"Aluminium Block",texture:[["blockAluminium",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockAluminium,"stone",1);
Block.setDestroyTime(BlockID.blockAluminium,3);

// 铅锑合金块
IDRegistry.genBlockID("blockLeadAntimony");
Block.createBlock("blockLeadAntimony",[
    {name:"Lead-Antimony Alloy Block",texture:[["blockLeadAntimony",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockLeadAntimony,"stone",1);
Block.setDestroyTime(BlockID.blockLeadAntimony,3);

Callback.addCallback("PreLoaded",function(){
    // 合成
    Recipes.addShapeless({id:ItemID.ingotCopper      ,count:9,data:0},[{id:BlockID.blockCopper      ,data:0}]);
    Recipes.addShapeless({id:ItemID.ingotTin         ,count:9,data:0},[{id:BlockID.blockTin         ,data:0}]);
    Recipes.addShapeless({id:ItemID.ingotLead        ,count:9,data:0},[{id:BlockID.blockLead        ,data:0}]);
    Recipes.addShapeless({id:ItemID.ingotWroughtIron ,count:9,data:0},[{id:BlockID.blockWroughtIron ,data:0}]);
    Recipes.addShapeless({id:ItemID.ingotSteel       ,count:9,data:0},[{id:BlockID.blockSteel       ,data:0}]);
    Recipes.addShapeless({id:ItemID.ingotAntimony    ,count:9,data:0},[{id:BlockID.blockAntimony    ,data:0}]);
    Recipes.addShapeless({id:ItemID.ingotLithium     ,count:9,data:0},[{id:BlockID.blockLithium     ,data:0}]);
    Recipes.addShapeless({id:ItemID.dustCarbon       ,count:9,data:0},[{id:BlockID.blockCarbon      ,data:0}]);
    Recipes.addShapeless({id:ItemID.ingotTungsten    ,count:9,data:0},[{id:BlockID.blockTungsten    ,data:0}]);
    Recipes.addShapeless({id:ItemID.ingotSilver      ,count:9,data:0},[{id:BlockID.blockSilver      ,data:0}]);
    Recipes.addShapeless({id:ItemID.ingotTetrahedrite,count:9,data:0},[{id:BlockID.blockTetrahedrite,data:0}]);
    Recipes.addShapeless({id:ItemID.ingotAluminium   ,count:9,data:0},[{id:BlockID.blockAluminium   ,data:0}]);
    Recipes.addShapeless({id:ItemID.ingotLeadAntimony,count:9,data:0},[{id:BlockID.blockLeadAntimony,data:0}]);

    Recipes.addShaped({id:BlockID.blockCopper      ,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotCopper      ,0]);
    Recipes.addShaped({id:BlockID.blockTin         ,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotTin         ,0]);
    Recipes.addShaped({id:BlockID.blockLead        ,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotLead        ,0]);
    Recipes.addShaped({id:BlockID.blockWroughtIron ,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotWroughtIron ,0]);
    Recipes.addShaped({id:BlockID.blockSteel       ,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotSteel       ,0]);
    Recipes.addShaped({id:BlockID.blockAntimony    ,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotAntimony    ,0]);
    Recipes.addShaped({id:BlockID.blockLithium     ,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotLithium     ,0]);
    Recipes.addShaped({id:BlockID.blockCarbon      ,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustCarbon       ,0]);
    Recipes.addShaped({id:BlockID.blockTungsten    ,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotTungsten    ,0]);
    Recipes.addShaped({id:BlockID.blockSilver      ,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotSilver      ,0]);
    Recipes.addShaped({id:BlockID.blockTetrahedrite,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotTetrahedrite,0]);
    Recipes.addShaped({id:BlockID.blockAluminium   ,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotAluminium   ,0]);
    Recipes.addShaped({id:BlockID.blockLeadAntimony,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotLeadAntimony,0]);
});

// 机器外壳
IDRegistry.genBlockID("machineCasing");
Block.createBlock("machineCasing",[
    {name:"Basic Machine Casing",texture:[["machineBottom",0],["machineTop",0],["machineSide",0]],inCreative:true},
    {name:"Advanced Machine Casing",texture:[["machineBottom",1],["machineTop",1],["machineSide",1]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.machineCasing,"stone",1);
Block.setDestroyTime(BlockID.machineCasing,3);

Callback.addCallback("PreLoaded",function(){
    // 合成
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

Callback.addCallback("GenerateChunkUnderground",function(chunkX,chunkZ){
    for(var i = 0;i < 6;i++){
        var coords = GenerationUtils.randomCoords(chunkX,chunkZ,0,255);
        GenerationUtils.generateOre(coords.x,coords.y,coords.z,BlockID.dust,0,32);
    }
});

Callback.addCallback("PreLoaded",function(){
    Recipes.addFurnace(BlockID.dust,BlockID.clearGlass);
});

// 通透玻璃
IDRegistry.genBlockID("clearGlass");
Block.createBlock("clearGlass",[
    {name:"Clear Glass",texture:[["clearGlass",0]],inCreative:true}
],"glass");
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

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.blockConcrete,count:3,data:0},["aba","bcb","aba"],["a",12,-1,"b",13,0,"c",ItemID.slag,0]);
});