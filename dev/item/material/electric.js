IDRegistry.genItemID("electricMotor" );
Item.createItem("electricMotor" ,"Electric Motor" ,{name:"electric_motor" });
IDRegistry.genItemID("electricPiston");

Item.createItem("electricPiston","Electric Piston",{name:"electric_piston"});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.electricMotor,count:1,data:0},[
        " ab",
        "aca",
        "da "
    ],[
        "a",ItemID.plateIron ,0,
        "b",ItemID.stickIron ,0,
        "c",ItemID.coilCopper,0,
        "d",ItemID.coilTin   ,0
    ]);

    Recipes.addShaped({id:ItemID.electricPiston,count:1,data:0},[
        "aaa",
        "bcb",
        "ada"
    ],[
        "a",ItemID.plateIron    ,0,
        "b",ItemID.stickIron    ,0,
        "c",ItemID.gearIron     ,0,
        "d",ItemID.electricMotor,0
    ]);
});