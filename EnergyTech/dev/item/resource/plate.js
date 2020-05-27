// 铜板
IDRegistry.genItemID("plateCopper");
Item.createItem("plateCopper","Copper Plate",{name:"copper_plate"});

// 锡板
IDRegistry.genItemID("plateTin");
Item.createItem("plateTin","Tin Plate",{name:"tin_plate"});

// 青铜板
IDRegistry.genItemID("plateBronze");
Item.createItem("plateBronze","Bronze Plate",{name:"bronze_plate"});

// 铁板
IDRegistry.genItemID("plateIron");
Item.createItem("plateIron","Iron Plate",{name:"iron_plate"});

// 钢板
IDRegistry.genItemID("plateSteel");
Item.createItem("plateSteel","Steel Plate",{name:"steel_plate"});

// 金板
IDRegistry.genItemID("plateGold");
Item.createItem("plateGold","Gold Plate",{name:"gold_plate"});

// 碳板
IDRegistry.genItemID("plateCarbon");
Item.createItem("plateCarbon","Carbon Plate",{name:"carbon_plate"});

// 钨板
IDRegistry.genItemID("plateTungsten");
Item.createItem("plateTungsten","Tungsten Plate",{name:"tungsten_plate"});

// 青金石板
IDRegistry.genItemID("plateLapis");
Item.createItem("plateLapis","Lapis Plate",{name:"lapis_plate"});

// 铅板
IDRegistry.genItemID("plateLead");
Item.createItem("plateLead","Lead Plate",{name:"lead_plate"});

// 铝板
IDRegistry.genItemID("plateAluminium");
Item.createItem("plateAluminium","Aluminium Plate",{name:"aluminium_plate"});

// 锑板
IDRegistry.genItemID("plateAntimony");
Item.createItem("plateAntimony","Antimony Plate",{name:"antimony_plate"});

// 铱板
IDRegistry.genItemID("plateIridium");
Item.createItem("plateIridium","Iridium Plate",{name:"iridium_plate"});

// 恩奈特合金板
IDRegistry.genItemID("plateEnete");
Item.createItem("plateEnete","Enete Alloy Plate",{name:"enete_plate"});

// 铅锑合金板
IDRegistry.genItemID("plateLeadAntimony");
Item.createItem("plateLeadAntimony","Lead-Antimony Alloy Plate",{name:"lead_antimony_plate"});

// 电路板
IDRegistry.genItemID("plateCircuit");
Item.createItem("plateCircuit","Circuit Plate",{name:"circuit_plate"});

// 塑料板
IDRegistry.genItemID("platePlastic");
Item.createItem("platePlastic","Plastic Plate",{name:"plastic_plate"});

// 地狱板
IDRegistry.genItemID("plateNether");
Item.createItem("plateNether","Nether Plate",{name:"nether_plate"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("plate",Translation.translate("Plate"),[
        ItemID.plateCopper,
        ItemID.plateTin,
        ItemID.plateBronze,
        ItemID.plateIron,
        ItemID.plateSteel,
        ItemID.plateGold,
        ItemID.plateCarbon,
        ItemID.plateTungsten,
        ItemID.plateLapis,
        ItemID.plateLead,
        ItemID.plateAluminium,
        ItemID.plateAntimony,
        ItemID.plateIridium,
        ItemID.plateEnete,
        ItemID.plateLeadAntimony,
        ItemID.plateCircuit,
        ItemID.platePlastic,
        ItemID.plateNether
    ]);

    Recipes.addFurnace(ItemID.resin,ItemID.platePlastic);

    RecipeRegistry.addBendingMachineRecipe({id:ItemID.ingotCopper,count:1,data:0},{id:ItemID.plateCopper,count:1,data:0});
    RecipeRegistry.addBendingMachineRecipe({id:ItemID.ingotTin,count:1,data:0},{id:ItemID.plateTin,count:1,data:0});
    RecipeRegistry.addBendingMachineRecipe({id:ItemID.ingotBronze,count:1,data:0},{id:ItemID.plateBronze,count:1,data:0});
    RecipeRegistry.addBendingMachineRecipe({id:265,count:1,data:0},{id:ItemID.plateIron,count:1,data:0});
    RecipeRegistry.addBendingMachineRecipe({id:ItemID.ingotSteel,count:1,data:0},{id:ItemID.plateSteel,count:1,data:0});
    RecipeRegistry.addBendingMachineRecipe({id:266,count:1,data:0},{id:ItemID.plateGold,count:1,data:0});
    RecipeRegistry.addBendingMachineRecipe({id:ItemID.dustCarbon,count:1,data:0},{id:ItemID.plateCarbon,count:1,data:0});
    RecipeRegistry.addBendingMachineRecipe({id:ItemID.ingotTungsten,count:1,data:0},{id:ItemID.plateTungsten,count:1,data:0});
    RecipeRegistry.addBendingMachineRecipe({id:351,count:1,data:4},{id:ItemID.plateLapis,count:1,data:0});
    RecipeRegistry.addBendingMachineRecipe({id:ItemID.ingotLead,count:1,data:0},{id:ItemID.plateLead,count:1,data:0});
    RecipeRegistry.addBendingMachineRecipe({id:ItemID.ingotAluminium,count:1,data:0},{id:ItemID.plateAluminium,count:1,data:0});
    RecipeRegistry.addBendingMachineRecipe({id:ItemID.ingotLeadAntimony,count:1,data:0},{id:ItemID.plateLeadAntimony,count:1,data:0});
    RecipeRegistry.addBendingMachineRecipe({id:ItemID.ingotAntimony,count:1,data:0},{id:ItemID.plateAntimony,count:1,data:0});
    RecipeRegistry.addBendingMachineRecipe({id:405,count:1,data:0},{id:ItemID.plateNether,count:1,data:0});

    var hammer = Tool.getAllTool("Hammer");
    for(let i in hammer){
        RecipeRegistry.addShapeless({id:ItemID.plateCopper,count:1,data:0},[{id:ItemID.ingotCopper,data:0},{id:ItemID.ingotCopper,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateTin,count:1,data:0},[{id:ItemID.ingotTin,data:0},{id:ItemID.ingotTin,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateBronze,count:1,data:0},[{id:ItemID.ingotBronze,data:0},{id:ItemID.ingotBronze,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateIron,count:1,data:0},[{id:265,data:0},{id:265,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateSteel,count:1,data:0},[{id:ItemID.ingotSteel,data:0},{id:ItemID.ingotSteel,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateGold,count:1,data:0},[{id:266,data:0},{id:266,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateCarbon,count:1,data:0},[{id:ItemID.dustCarbon,data:0},{id:ItemID.dustCarbon,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateTungsten,count:1,data:0},[{id:ItemID.ingotTungsten,data:0},{id:ItemID.ingotTungsten,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateLapis,count:1,data:0},[{id:351,data:4},{id:351,data:4}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateLead,count:1,data:0},[{id:ItemID.ingotLead,data:0},{id:ItemID.ingotLead,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateAluminium,count:1,data:0},[{id:ItemID.ingotAluminium,data:0},{id:ItemID.ingotAluminium,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateLeadAntimony,count:1,data:0},[{id:ItemID.ingotLeadAntimony,data:0},{id:ItemID.ingotLeadAntimony,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateAntimony,count:1,data:0},[{id:ItemID.ingotAntimony,data:0},{id:ItemID.ingotAntimony,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateEnete,count:1,data:0},[{id:ItemID.ingotEnete,data:0},{id:ItemID.ingotEnete,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateCircuit,count:1,data:0},[{id:ItemID.platePlastic,data:0},{id:ItemID.dustSiliconDioxide,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateNether,count:1,data:0},[{id:405,data:0},{id:405,data:0}],hammer[i]);
    }
});