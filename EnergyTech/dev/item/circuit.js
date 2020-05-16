// [电路板]Circuit
IDRegistry.genItemID("circuit");
Item.createItem("circuit","Circuit",{name:"circuit",meta:0},{stack:64});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("circuit",Translation.translate("Circuit"),[ItemID.circuit]);

    Recipes.addShaped({id:ItemID.circuit,count:1,data:0},["aaa","bcb","aaa"],["a",ItemID.wireCopper,0,"b",ItemID.vacuumTube,0,"c",ItemID.plateCarbon,0]);
    Recipes.addShaped({id:ItemID.circuit,count:1,data:0},["aaa","bcb","aaa"],["a",ItemID.wireCopper,0,"b",ItemID.vacuumTube,0,"c",ItemID.plateCircuit,0]);
});

// [电路板(储能升级)]Circuit (Energy Storage Upgrade)
IDRegistry.genItemID("circuitEnergyStorage");
Item.createItem("circuitEnergyStorage","Circuit (Energy Storage Upgrade)",{name:"circuit_energy_storage"},{stack:4});

UpgradeRegistry.registerUpgrade(ItemID.circuitEnergyStorage,"energyStorage",function(item,machine,container,data,coords){
    data.energy_storage += 16384 * item.count;
});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("circuit",Translation.translate("Circuit"),[ItemID.circuitEnergyStorage]);

    RecipeRegistry.addAssemblyTableRecipe([{id:ItemID.circuit,count:1,data:0},{id:ItemID.lithiumBattery,count:1,data:0}],{id:ItemID.circuitEnergyStorage,count:1,data:0});
    RecipeRegistry.addAssemblyTableRecipe([{id:ItemID.circuit,count:1,data:0},{id:ItemID.eneteBattery,count:1,data:0}],{id:ItemID.circuitEnergyStorage,count:2,data:0});
    RecipeRegistry.addAssemblyTableRecipe([{id:ItemID.circuit,count:1,data:0},{id:ItemID.energyCrystal,count:1,data:0}],{id:ItemID.circuitEnergyStorage,count:3,data:0});
    RecipeRegistry.addAssemblyTableRecipe([{id:ItemID.circuit,count:1,data:0},{id:ItemID.lapotronCrystal,count:1,data:0}],{id:ItemID.circuitEnergyStorage,count:4,data:0});
});

// [电路板(消音升级)]Circuit (Muffler Upgrade)
IDRegistry.genItemID("circuitMuffler");
Item.createItem("circuitMuffler","Circuit (Muffler Upgrade)",{name:"circuit_muffler"},{stack:4});

UpgradeRegistry.registerUpgrade(ItemID.circuitMuffler,"muffler",function(item,machine,container,data,coords){
    if(data.sound_volume) data.sound_volume -= item.count * 8;
});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("circuit",Translation.translate("Circuit"),[ItemID.circuitMuffler]);
    
    RecipeRegistry.addAssemblyTableRecipe([{id:ItemID.circuit,count:1,data:0},{id:35,count:1,data:-1}],{id:ItemID.circuitMuffler,count:1,data:0});
});

// [电路板(超频升级)]Circuit(Overclocker Upgrade)
IDRegistry.genItemID("circuitOverclocker");
Item.createItem("circuitOverclocker","Circuit (Overclocker Upgrade)",{name:"circuit_overclocker"},{stack:4});

UpgradeRegistry.registerUpgrade(ItemID.circuitOverclocker,"overclocker",function(item,machine,container,data,coords){
    if(data.work_time){
        data.energy_consumption = parseInt(data.energy_consumption * Math.pow(1.5,item.count));
        data.work_time = parseInt(data.work_time * Math.pow(0.75,item.count));
    }
});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("circuit",Translation.translate("Circuit"),[ItemID.circuitOverclocker]);

    RecipeRegistry.addAssemblyTableRecipe([{id:ItemID.circuit,count:1,data:0},{id:ItemID.cellWater,count:1,data:0}],{id:ItemID.circuitOverclocker,count:1,data:0});
});

// [电路板(高压升级)]Circuit(Transformer Upgrade)
IDRegistry.genItemID("circuitTransformer");
Item.createItem("circuitTransformer","Circuit (Transformer Upgrade)",{name:"circuit_transformer"},{stack:4});

UpgradeRegistry.registerUpgrade(ItemID.circuitTransformer,"transformer",function(item,machine,container,data,coords){
    data.tier += item.count;
});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("circuit",Translation.translate("Circuit"),[ItemID.circuitTransformer  ]);
    
    RecipeRegistry.addAssemblyTableRecipe([{id:ItemID.circuit,count:1,data:0},{id:BlockID.transformerLV,count:1,data:-1}],{id:ItemID.circuitTransformer,count:1,data:0});
    RecipeRegistry.addAssemblyTableRecipe([{id:ItemID.circuit,count:1,data:0},{id:BlockID.transformerMV,count:1,data:-1}],{id:ItemID.circuitTransformer,count:2,data:0});
    RecipeRegistry.addAssemblyTableRecipe([{id:ItemID.circuit,count:1,data:0},{id:BlockID.transformerHV,count:1,data:-1}],{id:ItemID.circuitTransformer,count:3,data:0});
    RecipeRegistry.addAssemblyTableRecipe([{id:ItemID.circuit,count:1,data:0},{id:BlockID.transformerEV,count:1,data:-1}],{id:ItemID.circuitTransformer,count:4,data:0});
});