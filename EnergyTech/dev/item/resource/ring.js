// 铁环
IDRegistry.genItemID("ringIron");
Item.createItem("ringIron","Iron Ring",{name:"iron_ring"});

// 锡环
IDRegistry.genItemID("ringTin");
Item.createItem("ringTin","Tin Ring",{name:"tin_ring"});

// 钢环
IDRegistry.genItemID("ringSteel");
Item.createItem("ringSteel","Steel Ring",{name:"steel_ring"});

// 青铜环
IDRegistry.genItemID("ringBronze");
Item.createItem("ringBronze","Bronze Ring",{name:"bronze_ring"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("ring",Translation.translate("Ring"),[
        ItemID.ringIron,
        ItemID.ringTin,
        ItemID.ringSteel,
        ItemID.ringBronze
    ]);

    var hammer = Tool.getAllTool("Hammer");
    for(let i in hammer){
        RecipeRegistry.addShapeless({id:ItemID.ringIron,count:1,data:0},[{id:ItemID.stickIron,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.ringTin,count:1,data:0},[{id:ItemID.stickTin,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.ringSteel,count:1,data:0},[{id:ItemID.stickSteel,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.ringBronze,count:1,data:0},[{id:ItemID.stickBronze,data:0}],hammer[i]);
    }
});