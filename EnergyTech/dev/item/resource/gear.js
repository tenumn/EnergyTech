// 青铜齿轮
IDRegistry.genItemID("gearBronze");
Item.createItem("gearBronze","Bronze Gear",{name:"bronze_gear"});

// 铁齿轮
IDRegistry.genItemID("gearIron");
Item.createItem("gearIron","Iron Gear",{name:"iron_gear"});

// 钢齿轮
IDRegistry.genItemID("gearSteel");
Item.createItem("gearSteel","Steel Gear",{name:"steel_gear"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("gear",Translation.translate("Gear"),[
        ItemID.gearBronze,
        ItemID.gearIron,
        ItemID.gearSteel
    ]);

    var wrench = Tool.getAllTool("Wrench");
    for(let i = 0;i < wrench.length;i++){
        RecipeRegistry.addShapedRecipe({id:ItemID.gearBronze,count:1,data:0},[
            "aba",
            "bcb",
            "aba"
        ],["a",ItemID.stickBronze,0,"b",ItemID.plateBronze,0,"c",wrench[i],-1],{4:1});
        
        RecipeRegistry.addShapedRecipe({id:ItemID.gearIron,count:1,data:0},[
            "aba",
            "bcb",
            "aba"
        ],["a",ItemID.stickIron,0,"b",ItemID.plateIron,0,"c",wrench[i],-1],{4:1});

        RecipeRegistry.addShapedRecipe({id:ItemID.gearSteel,count:1,data:0},[
            "aba",
            "bcb",
            "aba"
        ],["a",ItemID.stickSteel,0,"b",ItemID.plateSteel,0,"c",wrench[i],-1],{4:1});
    }
});