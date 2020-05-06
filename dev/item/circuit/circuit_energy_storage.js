IDRegistry.genItemID("circuitEnergyStorage");
Item.createItem("circuitEnergyStorage","Circuit(Energy Storage Upgrade)",{name:"circuit_energy_storage"},{stack:4});

Upgrade.registerUpgrade(ItemID.circuitEnergyStorage,"energyStorage",function(item,machine,container,data,coords){
    data.energy_storage += 16384 * item.count;
});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("circuit",Translation.translate("Circuit"),[ItemID.circuitEnergyStorage]);

    Recipes.addShaped({id:ItemID.circuitEnergyStorage,count:1,data:0},[" a ","bcb"],["a",ItemID.lithiumBattery,-1,"b",ItemID.wireCopper,0,"c",ItemID.circuit,0]);
});