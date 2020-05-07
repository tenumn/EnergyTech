IDRegistry.genItemID("circuitOverclocker");
Item.createItem("circuitOverclocker","Circuit(Overclocker Upgrade)",{name:"circuit_overclocker"},{stack:4});

Upgrade.registerUpgrade(ItemID.circuitOverclocker,"overclocker",function(item,machine,container,data,coords){
    if(data.work_time){
        data.energy_consumption = Math.round(data.energy_consumption * Math.pow(1.5,item.count));
        data.work_time = Math.round(data.work_time * Math.pow(0.75,item.count));
    }
});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("circuit",Translation.translate("Circuit"),[ItemID.circuitOverclocker]);

    Recipe.addAssemblyTableRecipe([{id:ItemID.circuit,data:0},{id:BlockID.coolantWater,data:0}],{id:ItemID.circuitOverclocker,count:1,data:0});
});