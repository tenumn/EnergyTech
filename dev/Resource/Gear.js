Recipe.addGearRecipe = function(output,input){
    var wrench = Tool.getAllTool("Wrench");
    for(let i = 0;i < wrench.length;i++){
        Recipe.addShapedRecipe(output,["aba","bcb","aba"],["a",input[0].id,input[0].data,"b",input[1].id,input[1].data,"c",wrench[i],-1],{4:1});
    }
}

// 铁齿轮
IDRegistry.genItemID("gearIron");
Item.createItem("gearIron","Iron Gear",{name:"gearIron"});

// 钢齿轮
IDRegistry.genItemID("gearSteel");
Item.createItem("gearSteel","Steel Gear",{name:"gearSteel"});

Callback.addCallback("PreLoaded",function(){
    // 组
    Item.addCreativeGroup("ET-Gear",Translation.translate("Gear"),[
        ItemID.gearIron ,
        ItemID.gearSteel
    ]);

    // 合成
    Recipe.addGearRecipe({id:ItemID.gearIron ,count:1,data:0},[{id:ItemID.stickIron ,data:0},{id:ItemID.plateIron ,data:0}]);
    Recipe.addGearRecipe({id:ItemID.gearSteel,count:1,data:0},[{id:ItemID.stickSteel,data:0},{id:ItemID.plateSteel,data:0}]);
});