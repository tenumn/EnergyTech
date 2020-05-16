Block.createSpecialType({
    base:1,
    solid:true,
	destroytime:1,
	explosionres:6
},"stone");

// 混凝土块
IDRegistry.genBlockID("blockConcrete");
Block.createBlock("blockConcrete",[
    {name:"Concrete Block",texture:[["concrete_block",0]],inCreative:true}
],"stone");
ToolAPI.registerBlockMaterial(BlockID.blockConcrete,"stone",1,true);
Block.setDestroyLevel("blockConcrete",1);

// 磨制大理石
IDRegistry.genBlockID("polishedMarble");
Block.createBlock("polishedMarble",[
    {name:"Polished Marble",texture:[["polished_marble",0]],inCreative:true}
],"stone");
ToolAPI.registerBlockMaterial(BlockID.polishedMarble,"stone",1,true);
Block.setDestroyLevel("polishedMarble",1);

// 大理石
IDRegistry.genBlockID("marble");
Block.createBlock("marble",[
    {name:"Marble",texture:[["marble",0]],inCreative:true}
],"stone");
ToolAPI.registerBlockMaterial(BlockID.marble,"stone",1,true);
Block.setDestroyLevel("marble",1);

Block.registerDropFunction("marble",function(coords,id,data,level,enchant){
	if(level >= 1) return [[BlockID.cobbleMarble,1,0]];
	return [];
},1);

Callback.addCallback("GenerateChunkUnderground",function(chunkX,chunkZ){
    for(let i = 0;i < 6;i++){
        var coords = GenerationUtils.randomCoords(chunkX,chunkZ,0,255);
        GenerationUtils.generateOre(coords.x,coords.y,coords.z,BlockID.marble,0,32);
    }
});

// 大理石圆石
IDRegistry.genBlockID("cobbleMarble");
Block.createBlock("cobbleMarble",[
    {name:"Marble Cobble",texture:[["marble_cobble",0]],inCreative:true}
],"stone");
ToolAPI.registerBlockMaterial(BlockID.cobbleMarble,"stone",1,true);
Block.setDestroyLevel("cobbleMarble",1);

// 安山岩圆石
IDRegistry.genBlockID("cobbleAndesite");
Block.createBlock("cobbleAndesite",[
    {name:"Andesite Cobble",texture:[["andesite_cobble",0]],inCreative:true}
],"stone");
ToolAPI.registerBlockMaterial(BlockID.cobbleAndesite,"stone",1,true);
Block.setDestroyLevel("cobbleAndesite",1);

// 闪长岩圆石
IDRegistry.genBlockID("cobbleDiorite");
Block.createBlock("cobbleDiorite",[
    {name:"Diorite Cobble",texture:[["diorite_cobble",0]],inCreative:true}
],"stone");
ToolAPI.registerBlockMaterial(BlockID.cobbleDiorite,"stone",1,true);
Block.setDestroyLevel("cobbleDiorite",1);

// 花岗岩圆石
IDRegistry.genBlockID("cobbleGranite");
Block.createBlock("cobbleGranite",[
    {name:"Granite Cobble",texture:[["granite_cobble",0]],inCreative:true}
],"stone");
ToolAPI.registerBlockMaterial(BlockID.cobbleGranite,"stone",1,true);
Block.setDestroyLevel("cobbleGranite",1);

Block.registerDropFunctionForID(1,function(coords,id,data,level,enchant){
	if(level >= 1){
		if(data == 0){
			if(enchant.silk) return [[id,1,data]];
			return [[4,1,0]];
		}
		
		if(data == 1){
			if(enchant.silk) return [[id,1,data]];
			return [[BlockID.cobbleGranite,1,0]];
		}

		if(data == 3){
			if(enchant.silk) return [[id,1,data]];
			return [[BlockID.cobbleDiorite,1,0]];
		}

		if(data == 5){
			if(enchant.silk) return [[id,1,data]];
			return [[BlockID.cobbleAndesite,1,0]];
		}
	}
	return [];
},1);

Callback.addCallback("PreLoaded",function(){
	Recipes.addFurnace(BlockID.cobbleMarble,BlockID.marble,0);
	Recipes.addFurnace(BlockID.cobbleGranite,1,1);
	Recipes.addFurnace(BlockID.cobbleDiorite,1,3);
	Recipes.addFurnace(BlockID.cobbleAndesite,1,5);

	Recipes.addShaped({id:BlockID.polishedMarble,count:4,data:0},[
		"aa",
		"aa"
	],["a",BlockID.marble,0]);
	
	Recipes.addShaped({id:BlockID.blockConcrete,count:3,data:0},[
		"aba",
		"bcb",
		"aba"
	],["a",12,-1,"b",13,0,"c",ItemID.slag,0]);
});

// [小石子]Small Stone
IDRegistry.genBlockID("smallStone");
Block.createBlock("smallStone",[
    {name:"Small Stone",texture:[["small_stone",0]],inCreative:false}
],{base:0,solid:false,opaque:true,destroytime:0});

var shape = new ICRender.CollisionShape();
shape.addEntry().addBox(1,1,1,0,0,0);
BlockRenderer.setCustomCollisionShape(BlockID.smallStone,-1,shape);
Block.setBlockShape(BlockID.smallStone,{x:0.0625,y:0,z:0.0625},{x:0.9375,y:0.0625,z:0.9375},0);

IDRegistry.genItemID("smallStone");
Item.createItem("smallStone","Small Stone",{name:"small_stone"});

Block.registerDropFunction("smallStone",function(coords){
	var stone = OreVein.SMALL_STONE[ChunkRegistry.getChunk(Math.floor(coords.x / 16),Math.floor(coords.z / 16),0)];
	if(stone) return [[stone.id,stone.count,stone.data]];
	if(Math.random() < 0.25) return [[318,1,0]];
	return [[ItemID.smallStone,1,0]];
});

Callback.addCallback("PreLoaded",function(){
    Callback.addCallback("GenerateChunk",function(chunkX,chunkZ){
		for(let i = 0;i < 128;i++){
			var coords = GenerationUtils.randomCoords(chunkX,chunkZ,64,128);
			if(!GenerationUtils.isTransparentBlock(World.getBlockID(coords.x,coords.y - 1,coords.z))){
				if(World.isAirBlock(coords.x,coords.y,coords.z)) World.setBlock(coords.x,coords.y,coords.z,BlockID.smallStone,0);
			}
		}
    });
});