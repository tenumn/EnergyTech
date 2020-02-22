IDRegistry.genBlockID("machineCasing");
Block.createBlock("machineCasing",[
    {name:"Basic Machine Casing",texture:[["machine_bottom",0],["machine_top",0],["machine_side",0]],inCreative:true},
    {name:"Advanced Machine Casing",texture:[["machine_bottom",1],["machine_top",1],["machine_side",1]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.machineCasing,"stone",1);
Block.setDestroyTime(BlockID.machineCasing,3);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.machineCasing,count:1,data:0},["abb","bcb","bba"],["a",ItemID.stickIron ,0,"b",ItemID.plateIron ,0,"c",ItemID.gearIron ,0]);
    Recipes.addShaped({id:BlockID.machineCasing,count:1,data:1},["abb","bcb","bba"],["a",ItemID.stickSteel,0,"b",ItemID.plateSteel,0,"c",ItemID.gearSteel,0]);
});