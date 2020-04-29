// 铁环
IDRegistry.genItemID("ringIron");
Item.createItem("ringIron","Iron Ring",{name:"ringIron"});

// 锡环
IDRegistry.genItemID("ringTin");
Item.createItem("ringTin","Tin Ring",{name:"ringTin"});

// 钢环
IDRegistry.genItemID("ringSteel");
Item.createItem("ringSteel","Steel Ring",{name:"ringSteel"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("ring",Translation.translate("Ring"),[
        ItemID.ringIron,
        ItemID.ringTin,
        ItemID.ringSteel
    ]);

    var hammer = Tool.getAllTool("Hammer");
    for(let i in hammer){
        Recipe.addShapeless({id:ItemID.ringIron,count:1,data:0},[{id:ItemID.stickIron,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.ringTin,count:1,data:0},[{id:ItemID.stickTin,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.ringSteel,count:1,data:0},[{id:ItemID.stickSteel,data:0}],hammer[i]);
    }
});