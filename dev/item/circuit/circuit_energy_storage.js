IDRegistry.genItemID("circuitEnergyStorage");
Item.createItem("circuitEnergyStorage","Circuit(Energy Storage Upgrade)",{name:"circuit_energy_storage"},{stack:4});

Upgrade.registerUpgrade(ItemID.circuitEnergyStorage,"energyStorage",function(item,machine,container,data,coords){
    data.energy_storage += 16384 * item.count;
});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("circuit",Translation.translate("Circuit"),[ItemID.circuitEnergyStorage]);

    Recipe.addAssemblyTableRecipe([{id:ItemID.circuit,data:0},{id:ItemID.lithiumBattery,data:0}],{id:ItemID.circuitEnergyStorage,count:1,data:0});
    Recipe.addAssemblyTableRecipe([{id:ItemID.circuit,data:0},{id:ItemID.eneteBattery,data:0}],{id:ItemID.circuitEnergyStorage,count:2,data:0});
    Recipe.addAssemblyTableRecipe([{id:ItemID.circuit,data:0},{id:ItemID.energyCrystal,data:0}],{id:ItemID.circuitEnergyStorage,count:3,data:0});
    Recipe.addAssemblyTableRecipe([{id:ItemID.circuit,data:0},{id:ItemID.lapotronCrystal,data:0}],{id:ItemID.circuitEnergyStorage,count:4,data:0});
});