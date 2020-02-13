IDRegistry.genBlockID("machineCasing");
Block.createBlock("machineCasing",[
    {name:"Basic Machine Casing",texture:[["machine_bottom",0],["machine_top",0],["machine_side",0]],inCreative:true},
    {name:"Advanced Machine Casing",texture:[["machine_bottom",1],["machine_top",1],["machine_side",1]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.machineCasing,"stone",1);
Block.setDestroyTime(BlockID.machineCasing,3);

Callback.addCallback("PreLoaded",function(){
    var hammer = ETTool.getAllTool("Hammer");
    for(let i = 0;i < hammer.length;i++){
        ETRecipe.addShapedRecipe({id:BlockID.machineCasing,count:1,data:0},["abb","bcb","bba"],["a",ItemID.stickIron,0,"b",ItemID.plateIron,0,"c",hammer[i],-1],{4:1});
    }
});