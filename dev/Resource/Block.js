CreateBlock = function(id,name,texture){
    IDRegistry.genBlockID(id);
    Block.createBlock(id,[
        {name:name,texture:texture,inCreative:true}
    ],"opaque");
    ToolAPI.registerBlockMaterial(BlockID[id],"stone",1);
    Block.setDestroyTime(BlockID[id],3);
}

ETRecipe.addBlockRecipe = function(output,input){
    Recipes.addShaped({id:output.id,count:1,data:output.data},["aaa","aaa","aaa"],["a",input.id,input.data]);
    Recipes.addShapeless({id:input.id,count:9,data:input.data},[{id:output.id,data:output.data}]);
}

CreateBlock("blockCopper"      ,"Copper Block"             ,[["blockCopper"       ,0]]);
CreateBlock("blockTin"         ,"Tin Block"                ,[["blockTin"          ,0]]);
CreateBlock("blockLead"        ,"Lead Block"               ,[["blockLead"         ,0]]);
CreateBlock("blockWroughtIron" ,"Wrought Iron Block"       ,[["blockWroughtIron"  ,0]]);
CreateBlock("blockSteel"       ,"Steel Block"              ,[["blockAntimony"     ,0]]);
CreateBlock("blockAntimony"    ,"Antimony Block"           ,[["blockAntimony"     ,0]]);
CreateBlock("blockLithium"     ,"Lithium Block"            ,[["blockLithium"      ,0]]);
CreateBlock("blockCarbon"      ,"Carbon Block"             ,[["blockCarbon"       ,0]]);
CreateBlock("blockTungsten"    ,"Tungsten Block"           ,[["blockTungsten"     ,0]]);
CreateBlock("blockSilver"      ,"Silver Block"             ,[["blockSilver"       ,0]]);
CreateBlock("blockTetrahedrite","Tetrahedrite Block"       ,[["blockTetrahedrite" ,0]]);
CreateBlock("blockAluminium"   ,"Aluminium Block"          ,[["blockAluminium"    ,0]]);
CreateBlock("blockLeadAntimony","Lead-Antimony Alloy Block",[["blockLeadAntimony" ,0]]);

Callback.addCallback("PreLoaded",function(){
    ETRecipe.addBlockRecipe({id:BlockID.blockCopper      ,data:0},{id:ItemID.ingotCopper      ,data:0});
    ETRecipe.addBlockRecipe({id:BlockID.blockTin         ,data:0},{id:ItemID.ingotTin         ,data:0});
    ETRecipe.addBlockRecipe({id:BlockID.blockLead        ,data:0},{id:ItemID.ingotLead        ,data:0});
    ETRecipe.addBlockRecipe({id:BlockID.blockWroughtIron ,data:0},{id:ItemID.ingotWroughtIron ,data:0});
    ETRecipe.addBlockRecipe({id:BlockID.blockSteel       ,data:0},{id:ItemID.ingotSteel       ,data:0});
    ETRecipe.addBlockRecipe({id:BlockID.blockAntimony    ,data:0},{id:ItemID.ingotAntimony    ,data:0});
    ETRecipe.addBlockRecipe({id:BlockID.blockLithium     ,data:0},{id:ItemID.ingotLithium     ,data:0});
    ETRecipe.addBlockRecipe({id:BlockID.blockCarbon      ,data:0},{id:ItemID.dustCarbon       ,data:0});
    ETRecipe.addBlockRecipe({id:BlockID.blockTungsten    ,data:0},{id:ItemID.ingotTungsten    ,data:0});
    ETRecipe.addBlockRecipe({id:BlockID.blockSilver      ,data:0},{id:ItemID.ingotSilver      ,data:0});
    ETRecipe.addBlockRecipe({id:BlockID.blockTetrahedrite,data:0},{id:ItemID.ingotTetrahedrite,data:0});
    ETRecipe.addBlockRecipe({id:BlockID.blockAluminium   ,data:0},{id:ItemID.ingotAluminium   ,data:0});
    ETRecipe.addBlockRecipe({id:BlockID.blockLeadAntimony,data:0},{id:ItemID.ingotLeadAntimony,data:0});
});

// [尘土]Dust
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

// [通透玻璃]Clear Glass
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