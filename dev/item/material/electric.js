IDRegistry.genItemID("electricMotor");
Item.createItem("electricMotor","Electric Motor",{name:"electric_motor"});

IDRegistry.genItemID("electricPiston");
Item.createItem("electricPiston","Electric Piston",{name:"electric_piston"});

IDRegistry.genItemID("vacuumTube");
Item.createItem("vacuumTube","Vacuum Tube",{name:"vacuum_tube"});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.electricMotor,count:1,data:0},[" ab","aca","da "],["a",ItemID.partTin,0,"b",ItemID.stickIron,0,"c",ItemID.coilCopper,0,"d",ItemID.coilTin,0]);
    Recipes.addShaped({id:ItemID.electricPiston,count:1,data:0},["eae","aca","bdb"],["a",ItemID.plateIron,0,"b",ItemID.stickIron,0,"c",ItemID.electricMotor,0,"d",ItemID.ringIron,0,"e",ItemID.partIron,0]);
    Recipes.addShaped({id:ItemID.vacuumTube,count:1,data:0},[" c ","aba"," d "],["a",ItemID.coilCopper,0,"b",ItemID.dustCarbon,0,"c",20,0,"d",331,0]);
});