// 锂-6
IDRegistry.genItemID("lithium6");
IDRegistry.genItemID("smallLithium6");
Item.createItem("lithium6","Lithium-6",{name:"lithium6"});
Item.createItem("smallLithium6","Small Pile of Lithium-6",{name:"small_lithium6"});

// 锂-7
IDRegistry.genItemID("lithium7");
IDRegistry.genItemID("smallLithium7");
Item.createItem("lithium7","Lithium-7",{name:"lithium7"});
Item.createItem("smallLithium7","Small Pile of Lithium-7",{name:"small_lithium7"});

// 铀-235
IDRegistry.genItemID("uranium235");
IDRegistry.genItemID("smallUranium235");
Item.createItem("uranium235","Uranium-235",{name:"uranium235"});
Item.createItem("smallUranium235","Small Pile of Uranium-235",{name:"small_uranium235"});

// 铀-238
IDRegistry.genItemID("uranium238");
IDRegistry.genItemID("smallUranium238");
Item.createItem("uranium238","Uranium-238",{name:"uranium238"});
Item.createItem("smallUranium238","Small Pile of Uranium-238",{name:"small_uranium238"});

Callback.addCallback("PreLoaded",function(){
    // 合成
    Recipe.addDustRecipe({id:ItemID.lithium6  ,data:0},{id:ItemID.smallLithium6  ,data:0});
    Recipe.addDustRecipe({id:ItemID.lithium7  ,data:0},{id:ItemID.smallLithium7  ,data:0});
    Recipe.addDustRecipe({id:ItemID.uranium235,data:0},{id:ItemID.smallUranium235,data:0});
    Recipe.addDustRecipe({id:ItemID.uranium238,data:0},{id:ItemID.smallUranium238,data:0});

    // 离心机
    Recipe.addCentrifugeRecipe({id:ItemID.dustLithium,data:0},[{id:ItemID.lithium7,count:1,data:0},{id:ItemID.smallLithium6,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.dustUranium,data:0},[{id:ItemID.uranium238,count:4,data:0},{id:ItemID.smallUranium235,count:1,data:0}]);
});

// 矿渣
IDRegistry.genItemID("slag");
Item.createItem("slag","Slag",{name:"slag"});

// 树脂
IDRegistry.genItemID("resin");
Item.createItem("resin","Resin",{name:"resin"});

// 浓缩铀
IDRegistry.genItemID("enrichedUranium");
Item.createItem("enrichedUranium","Enriched Uranium",{name:"enrichedUranium"});

Callback.addCallback("PreLoaded",function(){
    // 合成
    Recipes.addShaped({id:ItemID.enrichedUranium,count:1,data:0},["aaa","bbb","aaa"],["a",ItemID.uranium238,0,"b",ItemID.smallUranium235,0]);
});

// 电动马达
IDRegistry.genItemID("electricMotor");
Item.createItem("electricMotor","Electric Motor",{name:"electric_motor"});

// 电动活塞
IDRegistry.genItemID("electricPiston");
Item.createItem("electricPiston","Electric Piston",{name:"electric_piston"});

// 真空管
IDRegistry.genItemID("vacuumTube");
Item.createItem("vacuumTube","Vacuum Tube",{name:"vacuum_tube"});

Callback.addCallback("PreLoaded",function(){
    // 合成
    Recipes.addShaped({id:ItemID.electricMotor,count:1,data:0},[" ab","aca","da "],["a",ItemID.partTin,0,"b",ItemID.stickIron,0,"c",ItemID.wireCopper,0,"d",ItemID.wireTin,0]);
    Recipes.addShaped({id:ItemID.electricPiston,count:1,data:0},["eae","aca","bdb"],["a",ItemID.plateIron,0,"b",ItemID.stickIron,0,"c",ItemID.electricMotor,0,"d",ItemID.ringIron,0,"e",ItemID.partIron,0]);
    Recipes.addShaped({id:ItemID.vacuumTube,count:1,data:0},[" c ","aba"," d "],["a",ItemID.wireCopper,0,"b",ItemID.dustCarbon,0,"c",20,0,"d",331,0]);
});