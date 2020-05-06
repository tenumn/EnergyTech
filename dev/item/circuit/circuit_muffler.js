IDRegistry.genItemID("circuitMuffler");
Item.createItem("circuitMuffler","Circuit (Muffler)",{name:"circuit_muffler"},{stack:4});

Upgrade.registerUpgrade(ItemID.circuitMuffler,"muffler",function(item,machine,container,data,coords){
    if(data.sound_volume) data.sound_volume -= item.count * 4;
});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("circuit",Translation.translate("Circuit"),[ItemID.circuitMuffler]);
    
    Recipes.addShaped({id:ItemID.circuitMuffler,count:1,data:0},[
        " a ",
        "bcb"
    ],["a",35,-1,"b",ItemID.wireCopper,0,"c",ItemID.circuit,0]);
});