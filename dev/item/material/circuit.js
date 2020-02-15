IDRegistry.genItemID("circuit");
Item.createItem("circuit","Circuit",{name:"circuit"});

IDRegistry.genItemID("circuitOverclocker");
Item.createItem("circuitOverclocker","Circuit(Overclocker Upgrade)",{name:"circuit_overclocker"});

IDRegistry.genItemID("circuitEnergyStorage");
Item.createItem("circuitEnergyStorage","Circuit(Energy Storage Upgrade)",{name:"circuit_energy_storage"});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.circuit             ,count:1,data:0},["aaa","bcb","aaa"],["a",ItemID.coilCopper    ,0 ,"b",331              ,0,"c",ItemID.plateCarbon,0]);
    Recipes.addShaped({id:ItemID.circuitOverclocker  ,count:1,data:0},[" a ","bcb"      ],["a",BlockID.coolantWater ,0 ,"b",ItemID.coilCopper,0,"c",ItemID.circuit    ,0]);
    Recipes.addShaped({id:ItemID.circuitEnergyStorage,count:1,data:0},[" a ","bcb"      ],["a",ItemID.lithiumBattery,-1,"b",ItemID.coilCopper,0,"c",ItemID.circuit    ,0]);
});