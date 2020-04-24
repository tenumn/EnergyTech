Block.createSpecialType({
    opaque:false,
    destroytime:0.25
},"small_stone");

// 石子
IDRegistry.genBlockID("smallStone");
Block.createBlock("smallStone",[
    {name:"Small Stone",texture:[["small_stone",0]],inCreative:false}
],"small_stone");

var shape = new ICRender.CollisionShape();
shape.addEntry().addBox(1,1,1,0,0,0);
BlockRenderer.setCustomCollisionShape(BlockID.smallStone,-1,shape);

var render = new ICRender.Model(),model = new BlockRenderer.Model();
model.addBox(0,0,0,0.9375,0.0625,0.9375,BlockID.smallStone,0);
render.addEntry(model);
BlockRenderer.enableCoordMapping(BlockID.smallStone,-1,render);

IDRegistry.genItemID("smallStone");
Item.createItem("smallStone","Small Stone",{name:"small_stone"});

var SMALL_STONE = {
    // 煤炭矿脉
    "Coal":{id:ItemID.tinyCoal,count:1,data:0},
    
    // 铝土矿脉
    "Bauxite":{id:ItemID.oreChunkBauxite,count:1,data:0},
    
    // 黝铜矿脉
    "Tetrahedrite":{id:ItemID.oreChunkTetrahedrite,count:1,data:0},
    
    // 钻石矿脉
    "Diamonds":{id:ItemID.dustSmallDiamond,count:1,data:0},

    // 铀矿脉
    "Uranium":{id:ItemID.oreChunkUranium,count:1,data:0},

    // 锡石矿脉
    "Cassiterite":{id:ItemID.oreChunkCassiterite,count:1,data:0},

    // 铁矿脉
    "Iron":{id:ItemID.oreChunkIron,count:1,data:0},

    // 方铅矿脉
    "Galena":{id:ItemID.oreChunkGalena,count:1,data:0},

    // 岩盐矿脉
    "Salt":{id:ItemID.dustSmallSalt,count:1,data:0},

    // 红石矿脉
    "Redstone":{id:ItemID.dustSmallRedstone,count:1,data:0}
}

Block.registerDropFunction("smallStone",function(coords){
	var chunk = ChunkRegistry.getChunk(Math.floor(coords.x / 16),Math.floor(coords.z / 16));
	var stone = SMALL_STONE[chunk];
	if(stone){return [[stone.id,stone.count,stone.data]];}
	if(Math.random() < 0.25){return [[318,1,0]];}
	return [[ItemID.smallStone,1,0]];
});

Callback.addCallback("PreLoaded",function(){
    Callback.addCallback("GenerateChunk",function(chunkX,chunkZ){
		for(let i = 0;i < 64;i++){
			var coords = GenerationUtils.randomCoords(chunkX,chunkZ,64,128);
			if(!GenerationUtils.isTransparentBlock(World.getBlock(coords.x,coords.y - 1,coords.z).id)){
				if(World.getBlock(coords.x,coords.y,coords.z).id == 0){
					World.setBlock(coords.x,coords.y,coords.z,BlockID.smallStone,0);
				}
			}
		}
    });
});

// 矿渣
IDRegistry.genItemID("slag");
Item.createItem("slag","Slag",{name:"slag"});

// 树脂
IDRegistry.genItemID("resin");
Item.createItem("resin","Resin",{name:"resin"});

// 浓缩铀
IDRegistry.genItemID("enrichedUranium");
Item.createItem("enrichedUranium","Enriched Uranium",{name:"enriched_uranium"});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.enrichedUranium,count:1,data:0},["aaa","bbb","aaa"],["a",ItemID.uranium238,0,"b",ItemID.smallUranium235,0]);
});

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
    Recipes.addShapeless({id:263,count:1,data:0},[{id:ItemID.tinyCoal,data:0},{id:ItemID.tinyCoal,data:0},{id:ItemID.tinyCoal,data:0},{id:ItemID.tinyCoal,data:0},{id:ItemID.tinyCoal,data:0},{id:ItemID.tinyCoal,data:0},{id:ItemID.tinyCoal,data:0},{id:ItemID.tinyCoal,data:0}]);

    Recipes.addShapeless({id:ItemID.tinyCharcoal,count:9,data:0},[{id:263,data:1}]);
    Recipes.addShapeless({id:263,count:1,data:1},[{id:ItemID.tinyCharcoal,data:0},{id:ItemID.tinyCharcoal,data:0},{id:ItemID.tinyCharcoal,data:0},{id:ItemID.tinyCharcoal,data:0},{id:ItemID.tinyCharcoal,data:0},{id:ItemID.tinyCharcoal,data:0},{id:ItemID.tinyCharcoal,data:0},{id:ItemID.tinyCharcoal,data:0}]);
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
    Recipes.addShaped({id:ItemID.electricMotor,count:1,data:0},[" ab","aca","da "],["a",ItemID.partTin,0,"b",ItemID.stickIron,0,"c",ItemID.wireCopper,0,"d",ItemID.wireTin,0]);
    Recipes.addShaped({id:ItemID.electricPiston,count:1,data:0},["eae","aca","bdb"],["a",ItemID.plateIron,0,"b",ItemID.stickIron,0,"c",ItemID.electricMotor,0,"d",ItemID.ringIron,0,"e",ItemID.partIron,0]);
    Recipes.addShaped({id:ItemID.vacuumTube,count:1,data:0},[" c ","aba"," d "],["a",ItemID.wireCopper,0,"b",ItemID.dustCarbon,0,"c",20,0,"d",331,0]);
});

// 机器外壳
IDRegistry.genBlockID("machineCasing");
Block.createBlock("machineCasing",[
    {name:"Basic Machine Casing",texture:[["machine_bottom",0],["machine_top",0],["machine_side",0]],inCreative:true},
    {name:"Advanced Machine Casing",texture:[["machine_bottom",1],["machine_top",1],["machine_side",1]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.machineCasing,"stone",1);
Block.setDestroyTime(BlockID.machineCasing,3);
Block.setDestroyLevel("machineCasing",1);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.machineCasing,count:1,data:0},["abb","bcb","bba"],["a",ItemID.stickIron ,0,"b",ItemID.plateIron ,0,"c",ItemID.gearIron ,0]);
    Recipes.addShaped({id:BlockID.machineCasing,count:1,data:1},["abb","bcb","bba"],["a",ItemID.stickSteel,0,"b",ItemID.plateSteel,0,"c",ItemID.gearSteel,0]);
});

// 尘土
IDRegistry.genBlockID("dust");
Block.createBlock("dust",[
    {name:"Dust",texture:[["dust",0]],inCreative:true}
],"dust");
ToolAPI.registerBlockMaterial(BlockID.dust,"dirt");
Block.setDestroyTime(BlockID.dust,1);

Callback.addCallback("PreLoaded",function(){
    Recipes.addFurnace(BlockID.dust,BlockID.clearGlass);

    Callback.addCallback("GenerateChunkUnderground",function(chunkX,chunkZ){
        for(var i = 0;i < 6;i++){
            var coords = GenerationUtils.randomCoords(chunkX,chunkZ,0,255);
            GenerationUtils.generateOre(coords.x,coords.y,coords.z,BlockID.dust,0,32);
        }
    });
});

// 通透玻璃
IDRegistry.genBlockID("clearGlass");
Block.createBlock("clearGlass",[
    {name:"Clear Glass",texture:[["clear_glass",0]],inCreative:true}
],"transparent");
Block.setDestroyTime(BlockID.clearGlass,0.5);

Block.registerDropFunction("clearGlass",function(coords,id,data,level,enchant){
    if(enchant.silk){
        return [[id,1,data]];
    }
    return [];
});

// 混凝土块
IDRegistry.genBlockID("blockConcrete");
Block.createBlock("blockConcrete",[
    {name:"Concrete Block",texture:[["blockConcrete",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.blockConcrete,"stone",1);
Block.setDestroyTime(BlockID.blockConcrete,1);
Block.setDestroyLevel("blockConcrete",1);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.blockConcrete,count:3,data:0},["aba","bcb","aba"],["a",12,-1,"b",13,0,"c",ItemID.slag,0]);
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
    Recipes.addShapeless({id:ItemID.smallLithium6,count:9,data:0},[{id:ItemID.lithium6,data:0}]);
    Recipes.addShaped({id:ItemID.lithium6,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.smallLithium6,0]);

    Recipes.addShapeless({id:ItemID.smallLithium7,count:9,data:0},[{id:ItemID.lithium7,data:0}]);
    Recipes.addShaped({id:ItemID.lithium7,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.smallLithium7,0]);

    Recipes.addShapeless({id:ItemID.smallUranium235,count:9,data:0},[{id:ItemID.uranium235,data:0}]);
    Recipes.addShaped({id:ItemID.uranium235,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.smallUranium235,0]);

    Recipes.addShapeless({id:ItemID.smallUranium238,count:9,data:0},[{id:ItemID.uranium238,data:0}]);
    Recipes.addShaped({id:ItemID.uranium238,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.smallUranium238,0]);

    Recipe.addCentrifugeRecipe({id:ItemID.dustLithium,data:0},[{id:ItemID.lithium7  ,count:1,data:0},{id:ItemID.smallLithium6  ,count:1,data:0}]);
    Recipe.addCentrifugeRecipe({id:ItemID.dustUranium,data:0},[{id:ItemID.uranium238,count:4,data:0},{id:ItemID.smallUranium235,count:1,data:0}]);
});