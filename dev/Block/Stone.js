Block.createSpecialType({
    base:1,
    opaque:true,
    destroytime:3
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

Block.registerDropFunction("smallStone",function(coords){
	var chunk = ChunkRegistry.getChunk(Math.floor(coords.x / 16),Math.floor(coords.z / 16));
	if(ItemID["oreChunk" + chunk]){return [[ItemID["oreChunk" + chunk],1,0]];}
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

// 磨制大理石
IDRegistry.genBlockID("polishedMarble");
Block.createBlock("polishedMarble",[
    {name:"Polished Marble",texture:[["polishedMarble",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.polishedMarble,"stone",1);
Block.setDestroyTime(BlockID.polishedMarble,3);
Block.setDestroyLevel("polishedMarble",1);

// 大理石
IDRegistry.genBlockID("marble");
Block.createBlock("marble",[
    {name:"Marble",texture:[["marble",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.marble,"stone",1);
Block.setDestroyTime(BlockID.marble,3);
Block.setDestroyLevel("marble",1);

Callback.addCallback("GenerateChunkUnderground",function(chunkX,chunkZ){
    for(var i = 0;i < 6;i++){
        var coords = GenerationUtils.randomCoords(chunkX,chunkZ,0,255);
        GenerationUtils.generateOre(coords.x,coords.y,coords.z,BlockID.marble,0,32);
    }
});

// 大理石圆石
IDRegistry.genBlockID("cobbleMarble");
Block.createBlock("cobbleMarble",[
    {name:"Marble Cobble",texture:[["cobbleMarble",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.cobbleMarble,"stone",1);
Block.setDestroyTime(BlockID.cobbleMarble,3);
Block.setDestroyLevel("cobbleMarble",1);

// 安山岩圆石
IDRegistry.genBlockID("cobbleAndesite");
Block.createBlock("cobbleAndesite",[
    {name:"Andesite Cobble",texture:[["cobbleAndesite",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.cobbleAndesite,"stone",1);
Block.setDestroyTime(BlockID.cobbleAndesite,3);
Block.setDestroyLevel("cobbleAndesite",1);

// 闪长岩圆石
IDRegistry.genBlockID("cobbleDiorite");
Block.createBlock("cobbleDiorite",[
    {name:"Diorite Cobble",texture:[["cobbleDiorite",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.cobbleDiorite,"stone",1);
Block.setDestroyTime(BlockID.cobbleDiorite,3);
Block.setDestroyLevel("cobbleDiorite",1);

// 花岗岩圆石
IDRegistry.genBlockID("cobbleGranite");
Block.createBlock("cobbleGranite",[
    {name:"Granite Cobble",texture:[["cobbleGranite",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.cobbleGranite,"stone",1);
Block.setDestroyTime(BlockID.cobbleGranite,3);
Block.setDestroyLevel("cobbleGranite",1);

Block.registerDropFunctionForID(1,function(coords,id,data,level,enchant){
	if(level >= 1){
		if(data == 0){
			if(enchant.silk){return [[id,1,data]];}
			return [[4,1,0]];
		} else if(data == 1){
			if(enchant.silk){return [[id,1,data]];}
			return [[BlockID.cobbleGranite,1,0]];
		} else if(data == 3){
			if(enchant.silk){return [[id,1,data]];}
			return [[BlockID.cobbleDiorite,1,0]];
		} else if(data == 5){
			if(enchant.silk){return [[id,1,data]];}
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

	Recipes.addShaped({id:BlockID.polishedMarble,count:4,data:0},["aa","aa"],["a",BlockID.marble,0]);
});