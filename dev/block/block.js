CreateBlock = function(id,name,texture){
    IDRegistry.genBlockID(id);
    Block.createBlock(id,[
        {name:name,texture:texture,inCreative:true}
    ],"opaque");
    ToolAPI.registerBlockMaterial(BlockID[id],"stone",1);
    Block.setDestroyTime(BlockID[id],3);
}

ETRecipe.addBlockRecipe = function(output,input){
    Recipes.addShaped(output,["aaa","aaa","aaa"],["a",input[0].id,input[0].data]);
    Recipes.addShapeless({id:input[0].id,count:9,data:input[0].data},[{id:output.id,data:output.data}]);
}

CreateBlock("blockCopper"      ,"Copper Block"       ,[["copper_block"       ,0]]);
CreateBlock("blockTin"         ,"Tin Block"          ,[["tin_block"          ,0]]);
CreateBlock("blockLead"        ,"Lead Block"         ,[["lead_block"         ,0]]);
CreateBlock("blockWroughtIron" ,"Wrought Iron Block" ,[["wrought_iron_block" ,0]]);
CreateBlock("blockSteel"       ,"Steel Block"        ,[["steel_block"        ,0]]);
CreateBlock("blockAntimony"    ,"Antimony Block"     ,[["antimony_block"     ,0]]);
CreateBlock("blockLithium"     ,"Lithium Block"      ,[["lithium_block"      ,0]]);
CreateBlock("blockCarbon"      ,"Carbon Block"       ,[["carbon_block"       ,0]]);
CreateBlock("blockTungsten"    ,"Tungsten Block"     ,[["tungsten_block"     ,0]]);
CreateBlock("blockLeadAntimony","Lead-Antimony Block",[["lead_antimony_block",0]]);

Callback.addCallback("PreLoaded",function(){
    ETRecipe.addBlockRecipe({id:BlockID.blockCopper      ,count:1,data:0},[{id:ItemID.ingotCopper      ,data:0}]);
    ETRecipe.addBlockRecipe({id:BlockID.blockTin         ,count:1,data:0},[{id:ItemID.ingotTin         ,data:0}]);
    ETRecipe.addBlockRecipe({id:BlockID.blockLead        ,count:1,data:0},[{id:ItemID.ingotLead        ,data:0}]);
    ETRecipe.addBlockRecipe({id:BlockID.blockWroughtIron ,count:1,data:0},[{id:ItemID.ingotWroughtIron ,data:0}]);
    ETRecipe.addBlockRecipe({id:BlockID.blockSteel       ,count:1,data:0},[{id:ItemID.ingotSteel       ,data:0}]);
    ETRecipe.addBlockRecipe({id:BlockID.blockAntimony    ,count:1,data:0},[{id:ItemID.ingotAntimony    ,data:0}]);
    ETRecipe.addBlockRecipe({id:BlockID.blockLithium     ,count:1,data:0},[{id:ItemID.ingotLithium     ,data:0}]);
    ETRecipe.addBlockRecipe({id:BlockID.blockCarbon      ,count:1,data:0},[{id:ItemID.dustCarbon       ,data:0}]);
    ETRecipe.addBlockRecipe({id:BlockID.blockTungsten    ,count:1,data:0},[{id:ItemID.dustTungsten     ,data:0}]);
    ETRecipe.addBlockRecipe({id:BlockID.blockLeadAntimony,count:1,data:0},[{id:ItemID.ingotLeadAntimony,data:0}]);
});