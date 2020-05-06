IDRegistry.genItemID("circuit");
Item.createItem("circuit","Circuit",{name:"circuit",meta:0},{stack:64});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("circuit",Translation.translate("Circuit"),[ItemID.circuit]);

    Recipes.addShaped({id:ItemID.circuit,count:1,data:0},["aaa","bcb","aaa"],["a",ItemID.wireCopper,0,"b",ItemID.vacuumTube,0,"c",ItemID.plateCarbon,0]);
    Recipes.addShaped({id:ItemID.circuit,count:1,data:0},["aaa","bcb","aaa"],["a",ItemID.wireCopper,0,"b",ItemID.vacuumTube,0,"c",ItemID.plateCircuit,0]);
});