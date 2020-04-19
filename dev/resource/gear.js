// 铁齿轮
IDRegistry.genItemID("gearIron");
Item.createItem("gearIron","Iron Gear",{name:"gearIron"});

// 钢齿轮
IDRegistry.genItemID("gearSteel");
Item.createItem("gearSteel","Steel Gear",{name:"gearSteel"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("ET-Gear",Translation.translate("Gear"),[
        ItemID.gearIron,
        ItemID.gearSteel
    ]);

    var wrench = Tool.getAllTool("Wrench");
    for(let i = 0;i < wrench.length;i++){
        Recipe.addShapedRecipe({id:ItemID.gearIron,count:1,data:0},["aba","bcb","aba"],["a",ItemID.stickIron,0,"b",ItemID.plateIron,0,"c",wrench[i],-1],{4:1});
        Recipe.addShapedRecipe({id:ItemID.gearSteel,count:1,data:0},["aba","bcb","aba"],["a",ItemID.stickSteel,0,"b",ItemID.plateSteel,0,"c",wrench[i],-1],{4:1});
    }
});