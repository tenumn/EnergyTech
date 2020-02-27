IDRegistry.genItemID("ringIron");
Item.createItem("ringIron","Iron Ring",{name:"ringIron"});

IDRegistry.genItemID("ringTin");
Item.createItem("ringTin","Tin Ring",{name:"ringTin"});

IDRegistry.genItemID("ringSteel");
Item.createItem("ringSteel","Steel Ring",{name:"ringSteel"});

Callback.addCallback("PreLoaded",function(){
    var hammer = ETTool.getAllTool("Hammer");
    for(var i in hammer){
        ETRecipe.addShapeless({id:ItemID.ringIron ,count:1,data:0},[{id:ItemID.stickIron ,data:0}],hammer[i]);
        ETRecipe.addShapeless({id:ItemID.ringTin  ,count:1,data:0},[{id:ItemID.stickTin  ,data:0}],hammer[i]);
        ETRecipe.addShapeless({id:ItemID.ringSteel,count:1,data:0},[{id:ItemID.stickSteel,data:0}],hammer[i]);
    }
});