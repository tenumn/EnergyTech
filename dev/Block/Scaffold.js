IDRegistry.genBlockID("scaffoldWood");
Block.createBlock("scaffoldWood",[
    {name:"Wood Scaffold",texture:[["scaffoldWoodBottom",0],["scaffoldWoodTop",0],["scaffoldWoodSide",0],["scaffoldWoodSide",0],["scaffoldWoodSide",0],["scaffoldWoodSide",0]],inCreative:true}
],"scaffold");
ToolAPI.registerBlockMaterial(BlockID.scaffoldWood,"wood");
Block.setDestroyTime(BlockID.scaffoldWood,3);
ETModel.Scaffold(BlockID.scaffoldWood,0);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.scaffoldWood,count:16,data:0},["aaa","bbb","aaa"],["a",5,-1,"b",280,0]);
});

IDRegistry.genBlockID("scaffoldIron");
Block.createBlock("scaffoldIron",[
    {name:"Iron Scaffold",texture:[["scaffoldIronBottom",0],["scaffoldIronTop",0],["scaffoldIronSide",0],["scaffoldIronSide",0],["scaffoldIronSide",0],["scaffoldIronSide",0]],inCreative:true}
],"scaffold");
ToolAPI.registerBlockMaterial(BlockID.scaffoldIron,"stone",1);
Block.setDestroyTime(BlockID.scaffoldIron,3);
ETModel.Scaffold(BlockID.scaffoldIron,0);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.scaffoldIron,count:16,data:0},["aaa","bbb","aaa"],["a",ItemID.plateIron,0,"b",ItemID.stickIron,0]);
});