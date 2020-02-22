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

CreateBlock("blockCopper"      ,"Copper Block"             ,[["copper_block"       ,0]]);
CreateBlock("blockTin"         ,"Tin Block"                ,[["tin_block"          ,0]]);
CreateBlock("blockLead"        ,"Lead Block"               ,[["lead_block"         ,0]]);
CreateBlock("blockWroughtIron" ,"Wrought Iron Block"       ,[["wrought_iron_block" ,0]]);
CreateBlock("blockSteel"       ,"Steel Block"              ,[["steel_block"        ,0]]);
CreateBlock("blockAntimony"    ,"Antimony Block"           ,[["antimony_block"     ,0]]);
CreateBlock("blockLithium"     ,"Lithium Block"            ,[["lithium_block"      ,0]]);
CreateBlock("blockCarbon"      ,"Carbon Block"             ,[["carbon_block"       ,0]]);
CreateBlock("blockTungsten"    ,"Tungsten Block"           ,[["tungsten_block"     ,0]]);
CreateBlock("blockSilver"      ,"Silver Block"             ,[["silver_block"       ,0]]);
CreateBlock("blockTetrahedrite","Tetrahedrite Block"       ,[["tetrahedrite_block" ,0]]);
CreateBlock("blockLeadAntimony","Lead-Antimony Alloy Block",[["lead_antimony_block",0]]);

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
    ETRecipe.addBlockRecipe({id:BlockID.blockLeadAntimony,data:0},{id:ItemID.ingotLeadAntimony,data:0});
});