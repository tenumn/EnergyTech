IDRegistry.genBlockID("polishedMarble");
Block.createBlock("polishedMarble",[
    {name:"Polished Marble",texture:[["polishedMarble",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.polishedMarble,"stone",1);
Block.setDestroyTime(BlockID.polishedMarble,3);

IDRegistry.genBlockID("marble");
Block.createBlock("marble",[
    {name:"Marble",texture:[["marble",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.marble,"stone",1);
Block.setDestroyTime(BlockID.marble,3);

Callback.addCallback("GenerateChunkUnderground",function(chunkX,chunkZ){
    for(var i = 0;i < 6;i++){
        var coords = GenerationUtils.randomCoords(chunkX,chunkZ,0,255);
        GenerationUtils.generateOre(coords.x,coords.y,coords.z,BlockID.marble,0,32);
    }
});

IDRegistry.genBlockID("cobbleMarble");
Block.createBlock("cobbleMarble",[
    {name:"Marble Cobble",texture:[["cobbleMarble",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.cobbleMarble,"stone",1);
Block.setDestroyTime(BlockID.cobbleMarble,3);

IDRegistry.genBlockID("cobbleAndesite");
Block.createBlock("cobbleAndesite",[
    {name:"Andesite Cobble",texture:[["cobbleAndesite",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.cobbleAndesite,"stone",1);
Block.setDestroyTime(BlockID.cobbleAndesite,3);

IDRegistry.genBlockID("cobbleDiorite");
Block.createBlock("cobbleDiorite",[
    {name:"Diorite Cobble",texture:[["cobbleDiorite",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.cobbleDiorite,"stone",1);
Block.setDestroyTime(BlockID.cobbleDiorite,3);

IDRegistry.genBlockID("cobbleGranite");
Block.createBlock("cobbleGranite",[
    {name:"Granite Cobble",texture:[["cobbleGranite",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.cobbleGranite,"stone",1);
Block.setDestroyTime(BlockID.cobbleGranite,3);

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
	// 合成
	Recipes.addShaped({id:BlockID.polishedMarble,count:4,data:0},["aa","aa"],["a",BlockID.marble,0]);

	// 熔炉
	Recipes.addFurnace(BlockID.cobbleMarble  ,BlockID.marble,0);
	Recipes.addFurnace(BlockID.cobbleGranite ,1             ,1);
	Recipes.addFurnace(BlockID.cobbleDiorite ,1             ,3);
	Recipes.addFurnace(BlockID.cobbleAndesite,1             ,5);
});