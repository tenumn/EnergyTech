IDRegistry.genItemID("circuit");
Item.createItem("circuit","Circuit",{name:"circuit"},{stack:16});

IDRegistry.genItemID("circuitOverclocker");
Item.createItem("circuitOverclocker","Circuit(Overclocker Upgrade)",{name:"circuit_overclocker"},{stack:16});

ETUpgrade.registerUpgrade(ItemID.circuitOverclocker,"overclocker",function(item,machine,container,data,coords){
    if(data.work_time){
        data.energy_consumption = Math.round(data.energy_consumption * Math.pow(1.5,item.count));
        data.work_time = Math.round(data.work_time * Math.pow(0.75,item.count));
    }
});

IDRegistry.genItemID("circuitEnergyStorage");
Item.createItem("circuitEnergyStorage","Circuit(Energy Storage Upgrade)",{name:"circuit_energy_storage"},{stack:16});

ETUpgrade.registerUpgrade(ItemID.circuitEnergyStorage,"energyStorage",function(item,machine,container,data,coords){
    data.energy_storage += 16384 * item.count;
});

IDRegistry.genItemID("circuitTransformer");
Item.createItem("circuitTransformer","Circuit(Transformer Upgrade)",{name:"circuit_transformer"},{stack:16});

ETUpgrade.registerUpgrade(ItemID.circuitTransformer,"transformer",function(item,machine,container,data,coords){
    data.tier += item.count;
});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.circuit             ,count:1,data:0},["aaa","bcb","aaa"],["a",ItemID.coilCopper    ,0 ,"b",ItemID.vacuumTube,0,"c",ItemID.plateCarbon,0]);
    Recipes.addShaped({id:ItemID.circuitOverclocker  ,count:1,data:0},[" a ","bcb"      ],["a",BlockID.coolantWater ,0 ,"b",ItemID.coilCopper,0,"c",ItemID.circuit    ,0]);
    Recipes.addShaped({id:ItemID.circuitEnergyStorage,count:1,data:0},[" a ","bcb"      ],["a",ItemID.lithiumBattery,-1,"b",ItemID.coilCopper,0,"c",ItemID.circuit    ,0]);
    for(var i = 0;i < 4;i++){
        Recipes.addShaped({id:ItemID.circuitTransformer,count:1 + i,data:0},[" a ","bcb"      ],["a",BlockID.transformer,i,"b",ItemID.coilCopper,0,"c",ItemID.circuit,0]);
    }
});