ETRecipe.addGearRecipe = function(output,input){
    var wrench = ETTool.getAllTool("Wrench");
    for(let i = 0;i < wrench.length;i++){
        ETRecipe.addShapedRecipe(output,["aba","bcb","aba"],["a",input[0].id,input[0].data,"b",input[1].id,input[1].data,"c",wrench[i],-1],{4:1});
    }
}

IDRegistry.genItemID("gearIron");
Item.createItem("gearIron","Iron Gear",{name:"gearIron"});

IDRegistry.genItemID("gearSteel");
Item.createItem("gearSteel","Steel Gear",{name:"gearSteel"});

Callback.addCallback("PreLoaded",function(){
    ETRecipe.addGearRecipe({id:ItemID.gearIron ,count:1,data:0},[{id:ItemID.stickIron ,data:0},{id:ItemID.plateIron ,data:0}]);
    ETRecipe.addGearRecipe({id:ItemID.gearSteel,count:1,data:0},[{id:ItemID.stickSteel,data:0},{id:ItemID.plateSteel,data:0}]);
});