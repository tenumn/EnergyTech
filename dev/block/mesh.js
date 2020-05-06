// [筛网]String Mesh
IDRegistry.genBlockID("mesh");
Block.createBlock("mesh",[
    {name:"String Mesh",texture:[["string_mesh",0]],inCreative:true}
],{opaque:true});

Block.setBlockShape(BlockID.mesh,{x:0.0625,y:0,z:0.0625},{x:0.9375,y:0.0625,z:0.9375},0);
Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.mesh,count:1,data:0},[
        "aaa",
        "aaa",
        "aaa"
    ],["a",287,0]);
});

Block.registerPlaceFunction("mesh",function(coords,item,block){
    Game.prevent();
});