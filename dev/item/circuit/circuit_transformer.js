IDRegistry.genItemID("circuitTransformer");
Item.createItem("circuitTransformer","Circuit(Transformer Upgrade)",{name:"circuit_transformer"},{stack:4});

Upgrade.registerUpgrade(ItemID.circuitTransformer,"transformer",function(item,machine,container,data,coords){
    data.tier += item.count;
});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("circuit",Translation.translate("Circuit"),[ItemID.circuitTransformer  ]);
    
    Recipe.addAssemblyTableRecipe([{id:ItemID.circuit,data:0},{id:BlockID.transformerLV,data:-1}],{id:ItemID.circuitTransformer,count:1,data:0});
    Recipe.addAssemblyTableRecipe([{id:ItemID.circuit,data:0},{id:BlockID.transformerMV,data:-1}],{id:ItemID.circuitTransformer,count:2,data:0});
    Recipe.addAssemblyTableRecipe([{id:ItemID.circuit,data:0},{id:BlockID.transformerHV,data:-1}],{id:ItemID.circuitTransformer,count:3,data:0});
    Recipe.addAssemblyTableRecipe([{id:ItemID.circuit,data:0},{id:BlockID.transformerEV,data:-1}],{id:ItemID.circuitTransformer,count:4,data:0});
});