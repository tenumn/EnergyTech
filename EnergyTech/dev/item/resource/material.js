// 矿渣
IDRegistry.genItemID("slag");
Item.createItem("slag","Slag",{name:"slag"});

// 树脂
IDRegistry.genItemID("resin");
Item.createItem("resin","Resin",{name:"resin"});

// 小块煤炭
IDRegistry.genItemID("tinyCoal");
Item.createItem("tinyCoal","Tiny Coal",{name:"tiny_coal"});
Recipes.addFurnaceFuel(ItemID.tinyCoal,0,200);

// 小块木炭
IDRegistry.genItemID("tinyCharcoal");
Item.createItem("tinyCharcoal","Tiny Charcoal",{name:"tiny_charcoal"});
Recipes.addFurnaceFuel(ItemID.tinyCharcoal,0,200);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShapeless({id:ItemID.tinyCoal,count:9,data:0},[{id:263,data:0}]);
	Recipes.addShaped({id:263,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.tinyCoal,0]);
    
    Recipes.addShapeless({id:ItemID.tinyCharcoal,count:9,data:0},[{id:263,data:1}]);
    Recipes.addShaped({id:263,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.tinyCharcoal,0]);
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
    Recipes.addShaped({id:ItemID.electricMotor,count:1,data:0},[
        " ab",
        "aca",
        "da "
    ],["a",ItemID.partTin,0,"b",ItemID.stickIron,0,"c",ItemID.wireCopper,0,"d",ItemID.wireTin,0]);

    Recipes.addShaped({id:ItemID.electricPiston,count:1,data:0},[
        "eae",
        "aca",
        "bdb"
    ],["a",ItemID.plateIron,0,"b",ItemID.stickIron,0,"c",ItemID.electricMotor,0,"d",ItemID.ringIron,0,"e",ItemID.partIron,0]);

    Recipes.addShaped({id:ItemID.vacuumTube,count:1,data:0},[
        " c ",
        "aba",
        " d "
    ],["a",ItemID.wireCopper,0,"b",ItemID.dustCarbon,0,"c",20,0,"d",331,0]);
});

Block.createSpecialType({
    base:1,
    solid:true,
    destroyTime:5
},"machine");

// 机器外壳
IDRegistry.genBlockID("machineCasing");
Block.createBlock("machineCasing",[
    // 青铜
    {name:"Machine Casing",texture:[["machine_bottom",0],["machine_top",0],["machine_side",0]],inCreative:true},
    // 基础 (铁)
    {name:"Machine Casing",texture:[["machine_bottom",1],["machine_top",1],["machine_side",1]],inCreative:true},
    // 高级 (钢)
    {name:"Machine Casing",texture:[["machine_bottom",2],["machine_top",2],["machine_side",2]],inCreative:true}
],"machine");
ToolAPI.registerBlockMaterial(BlockID.machineCasing,"stone",1,true);
Block.setDestroyLevel("machineCasing",1);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.machineCasing,count:1,data:0},[
        "abb",
        "bcb",
        "bba"
    ],["a",ItemID.stickBronze,0,"b",ItemID.plateBronze,0,"c",ItemID.gearBronze,0]);
    
    Recipes.addShaped({id:BlockID.machineCasing,count:1,data:1},[
        "abb",
        "bcb",
        "bba"
    ],["a",ItemID.stickIron,0,"b",ItemID.plateIron,0,"c",ItemID.gearIron,0]);
    
    Recipes.addShaped({id:BlockID.machineCasing,count:1,data:2},[
        "abb",
        "bcb",
        "bba"
    ],["a",ItemID.stickSteel,0,"b",ItemID.plateSteel,0,"c",ItemID.gearSteel,0]);
});

// 反应堆外壳
IDRegistry.genBlockID("reactorCasing");
Block.createBlock("reactorCasing",[
    {name:"Reactor Casing",texture:[["machine_top",1]],inCreative:true}
],"machine");

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[BlockID.reactorCasing]);

    Recipes.addShaped({id:BlockID.reactorCasing,count:1,data:0},[
        "aa",
        "aa"
    ],["a",ItemID.plateLead,0]);
});

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
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[
        ItemID.lithium6,
        ItemID.smallLithium6,
        ItemID.lithium7,
        ItemID.smallLithium7,
        ItemID.uranium235,
        ItemID.smallUranium235,
        ItemID.uranium238,
        ItemID.smallUranium238
    ]);

    Recipes.addShapeless({id:ItemID.smallLithium6,count:9,data:0},[{id:ItemID.lithium6,data:0}]);
    Recipes.addShaped({id:ItemID.lithium6,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.smallLithium6,0]);

    Recipes.addShapeless({id:ItemID.smallLithium7,count:9,data:0},[{id:ItemID.lithium7,data:0}]);
    Recipes.addShaped({id:ItemID.lithium7,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.smallLithium7,0]);

    Recipes.addShapeless({id:ItemID.smallUranium235,count:9,data:0},[{id:ItemID.uranium235,data:0}]);
    Recipes.addShaped({id:ItemID.uranium235,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.smallUranium235,0]);

    Recipes.addShapeless({id:ItemID.smallUranium238,count:9,data:0},[{id:ItemID.uranium238,data:0}]);
    Recipes.addShaped({id:ItemID.uranium238,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.smallUranium238,0]);

    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustLithium,count:1,data:0},[{id:ItemID.lithium7,count:1,data:0},{id:ItemID.smallLithium6,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustUranium,count:1,data:0},[{id:ItemID.uranium238,count:4,data:0},{id:ItemID.smallUranium235,count:1,data:0}]);
});

// 贫化浓缩铀
IDRegistry.genItemID("enrichedUraniumDepleted");
Item.createItem("enrichedUraniumDepleted","Depleted Enriched Uranium",{name:"enriched_uranium",meta:0});

// 精炼浓缩铀
IDRegistry.genItemID("enrichedUraniumRefined");
Item.createItem("enrichedUraniumRefined","Refined Enriched Uranium",{name:"enriched_uranium",meta:1});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[
        ItemID.enrichedUraniumDepleted,
        ItemID.enrichedUraniumRefined
    ]);
    
    Recipes.addShaped({id:ItemID.enrichedUraniumDepleted,count:1,data:0},[
        "aaa",
        "bbb",
        "aaa"
    ],["a",ItemID.uranium238,0,"b",ItemID.smallUranium235,0]);

    Recipes.addShaped({id:ItemID.enrichedUraniumRefined,count:1,data:0},[
        "aaa",
        "bbb",
        "aaa"
    ],["a",ItemID.smallUranium235,0,"b",ItemID.uranium238,0]);
});