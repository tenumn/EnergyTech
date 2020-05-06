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