IDRegistry.genItemID("ringIron");
Item.createItem("ringIron","Iron Ring",{name:"ringIron"});

Callback.addCallback("PreLoaded",function(){
    var hammer = ETTool.getAllTool("Hammer");
    for(var i in hammer){
        ETRecipe.addShapeless({id:ItemID.ringIron,count:1,data:0},[{id:ItemID.stickIron,data:0}],hammer[i]);
    }
});