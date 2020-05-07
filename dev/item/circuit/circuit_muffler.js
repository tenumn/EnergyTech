IDRegistry.genItemID("circuitMuffler");
Item.createItem("circuitMuffler","Circuit (Muffler)",{name:"circuit_muffler"},{stack:4});

Upgrade.registerUpgrade(ItemID.circuitMuffler,"muffler",function(item,machine,container,data,coords){
    if(data.sound_volume) data.sound_volume -= item.count * 8;
});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("circuit",Translation.translate("Circuit"),[ItemID.circuitMuffler]);
    
    Recipe.addAssemblyTableRecipe([{id:ItemID.circuit,data:0},{id:35,data:-1}],{id:ItemID.circuitMuffler,count:1,data:0});
});