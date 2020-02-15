IDRegistry.genItemID("cellEmpty");
Item.createItem("cellEmpty","Liquid Cell(Empty)",{name:"empty_cell"});
Item.setLiquidClip(ItemID.cellEmpty,true);

IDRegistry.genItemID("cellWater");
Item.createItem("cellWater","Liquid Cell(Water)",{name:"water_cell"});
LiquidRegistry.registerItem("water",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellWater,data:0});

IDRegistry.genItemID("cellLava");
Item.createItem("cellLava","Liquid Cell(Lava)",{name:"lava_cell"});
LiquidRegistry.registerItem("lava",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellLava,data:0});

IDRegistry.genItemID("cellUranium");
Item.createItem("cellUranium","Liquid Cell(Uranium)",{name:"uranium_cell"});
LiquidRegistry.registerItem("uranium",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellUranium,data:0});

IDRegistry.genItemID("cellLithium");
Item.createItem("cellLithium","Liquid Cell(Lithium)",{name:"lithium_cell"});
LiquidRegistry.registerItem("lithium",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellLithium,data:0});