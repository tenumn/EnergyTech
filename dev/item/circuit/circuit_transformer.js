IDRegistry.genItemID("circuitTransformer");
Item.createItem("circuitTransformer","Circuit(Transformer Upgrade)",{name:"circuit_transformer"},{stack:4});

Upgrade.registerUpgrade(ItemID.circuitTransformer,"transformer",function(item,machine,container,data,coords){
    data.tier += item.count;
});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("circuit",Translation.translate("Circuit"),[ItemID.circuitTransformer  ]);
    
    Recipes.addShaped({id:ItemID.circuitTransformer,count:1,data:0},[" a ","bcb"],["a",BlockID.transformerLV,0,"b",ItemID.wireCopper,0,"c",ItemID.circuit,0]);
    Recipes.addShaped({id:ItemID.circuitTransformer,count:2,data:0},[" a ","bcb"],["a",BlockID.transformerMV,0,"b",ItemID.wireCopper,0,"c",ItemID.circuit,0]);
    Recipes.addShaped({id:ItemID.circuitTransformer,count:3,data:0},[" a ","bcb"],["a",BlockID.transformerHV,0,"b",ItemID.wireCopper,0,"c",ItemID.circuit,0]);
    Recipes.addShaped({id:ItemID.circuitTransformer,count:4,data:0},[" a ","bcb"],["a",BlockID.transformerEV,0,"b",ItemID.wireCopper,0,"c",ItemID.circuit,0]);
});