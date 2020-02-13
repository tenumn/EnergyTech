IDRegistry.genItemID("circuit");
Item.createItem("circuit","Circuit",{name:"circuit"});

IDRegistry.genItemID("circuitOverclocker");
Item.createItem("circuitOverclocker","Circuit(Overclocker Upgrade)",{name:"overclocker_circuit"});

IDRegistry.genItemID("circuitEnergyStorage");
Item.createItem("circuitEnergyStorage","Circuit(Energy Storage Upgrade)",{name:"energy_storage_circuit"});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.circuit,count:1,data:0},[
        "aaa",
        "bcb",
        "aaa"
    ],[
        "a",ItemID.coilCopper ,0,
        "b",331               ,0,
        "c",ItemID.plateCarbon,0
    ]);
});