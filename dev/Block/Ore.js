// 铜矿石
IDRegistry.genBlockID("oreCopper");
Block.createBlock("oreCopper",[
    {name:"Copper Ore",texture:[["copper_ore",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.oreCopper,"stone",2);
Block.setDestroyTime(BlockID.oreCopper,3);
Block.setDestroyLevel("oreCopper",2);

// 黝铜矿石
IDRegistry.genBlockID("oreTetrahedrite");
Block.createBlock("oreTetrahedrite",[
    {name:"Tetrahedrite Ore",texture:[["tetrahedrite_ore",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.oreTetrahedrite,"stone",2);
Block.setDestroyTime(BlockID.oreTetrahedrite,3);
Block.setDestroyLevel("oreTetrahedrite",2);

// 锡石矿石
IDRegistry.genBlockID("oreCassiterite");
Block.createBlock("oreCassiterite",[
    {name:"Cassiterite Ore",texture:[["cassiterite_ore",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.oreCassiterite,"stone",2);
Block.setDestroyTime(BlockID.oreCassiterite,3);
Block.setDestroyLevel("oreCassiterite",2);

// 方铅矿石
IDRegistry.genBlockID("oreGalena");
Block.createBlock("oreGalena",[
    {name:"Galena Ore",texture:[["galena_ore",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.oreGalena,"stone",2);
Block.setDestroyTime(BlockID.oreGalena,3);
Block.setDestroyLevel("oreGalena",2);

// 锂辉石矿石
IDRegistry.genBlockID("oreSpodumene");
Block.createBlock("oreSpodumene",[
    {name:"Spodumene Ore",texture:[["spodumene_ore",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.oreSpodumene,"stone",2);
Block.setDestroyTime(BlockID.oreSpodumene,3);
Block.setDestroyLevel("oreSpodumene",2);

// 石墨矿石
IDRegistry.genBlockID("oreGraphite");
Block.createBlock("oreGraphite",[
    {name:"Graphite Ore",texture:[["graphite_ore",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.oreGraphite,"stone",2);
Block.setDestroyTime(BlockID.oreGraphite,3);
Block.setDestroyLevel("oreGraphite",2);

// 钨矿石
IDRegistry.genBlockID("oreTungsten");
Block.createBlock("oreTungsten",[
    {name:"Tungsten Ore",texture:[["tungsten_ore",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.oreTungsten,"stone",3);
Block.setDestroyTime(BlockID.oreTungsten,3);
Block.setDestroyLevel("oreTungsten",3);

// 铀矿石
IDRegistry.genBlockID("oreUranium");
Block.createBlock("oreUranium",[
    {name:"Uranium Ore",texture:[["uranium_ore",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.oreUranium,"stone",3);
Block.setDestroyTime(BlockID.oreUranium,3);
Block.setDestroyLevel("oreUranium",3);

// 银矿石
IDRegistry.genBlockID("oreSilver");
Block.createBlock("oreSilver",[
    {name:"Silver Ore",texture:[["silver_ore",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.oreSilver,"stone",2);
Block.setDestroyTime(BlockID.oreSilver,3);
Block.setDestroyLevel("oreSilver",2);

// 铝土矿石
IDRegistry.genBlockID("oreBauxite");
Block.createBlock("oreBauxite",[
    {name:"Bauxite Ore",texture:[["bauxite_ore",0]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.oreBauxite,"stone",2);
Block.setDestroyTime(BlockID.oreBauxite,3);
Block.setDestroyLevel("oreBauxite",2);

var VEIN = [
    // 煤炭矿脉
    {name:"Coal",ores:[{id:16,data:0}],minHeight:48,maxHeight:128,size:10},

    // 铝土矿脉
    {name:"Bauxite",ores:[{id:BlockID.oreBauxite,data:0}],minHeight:64,maxHeight:96,size:5},

    // 黝铜矿脉
    {name:"Tetrahedrite",ores:[{id:BlockID.oreTetrahedrite,data:0},{id:BlockID.oreCopper,data:0}],minHeight:64,maxHeight:128,size:9},

    // 钻石矿脉
    {name:"Diamonds",ores:[{id:56,data:0},{id:16,data:0},{id:BlockID.oreGraphite,data:0}],minHeight:4,maxHeight:16,size:4},

    // 铀矿脉
    {name:"Uranium",ores:[{id:BlockID.oreUranium,data:0}],minHeight:8,maxHeight:32,size:3},

    // 锡石矿脉
    {name:"Cassiterite",ores:[{id:BlockID.oreCassiterite,data:0},{id:BlockID.oreTungsten,data:0}],minHeight:32,maxHeight:96,size:11},

    // 铁矿脉
    {name:"Iron",ores:[{id:15,data:0}],minHeight:16,maxHeight:32,size:8},

    // 方铅矿脉
    {name:"Galena",ores:[{id:BlockID.oreGalena,data:0},{id:BlockID.oreSilver,data:0}],minHeight:32,maxHeight:64,size:4},

    // 岩盐矿脉
    {name:"Salt",ores:[{id:BlockID.oreSpodumene,data:0}],minHeight:48,maxHeight:64,size:2}
];

Callback.addCallback("PreLoaded",function(){
    Callback.addCallback("GenerateChunkUnderground",function(chunkX,chunkZ){
        if(Math.random() < 0.25 && (chunkX + chunkZ)%2 == 0){
            var ore = VEIN[Math.floor(Math.random() * VEIN.length)],coords = GenerationUtils.randomCoords(chunkX,chunkZ,ore.minHeight,ore.maxHeight);
            runOnMainThread(function(){
                for(let x = 0;x <= ore.size;x++){for(let y = 0;y <= ore.size;y++){for(let z = 0;z <= ore.size;z++){
                    var pointed = {x:Math.floor(coords.x - ore.size + x),y:Math.floor(coords.y - ore.size + y),z:Math.floor(coords.z - ore.size + z)}
                    if(Math.random() < 0.75 && World.getBlock(pointed.x,pointed.y,pointed.z).id == 1){
                        var ores = ore.ores[Math.floor(Math.random() * ore.ores.length)];
                        World.setBlock(pointed.x,pointed.y,pointed.z,ores.id,ores.data);
                    }
                }}}
            });
            ChunkRegistry.chunk[chunkX + ":" + chunkZ] = ore.name;
            if(__config__.getBool("debug")){Debug.message(coords.x + " " + coords.y + " " + coords.z);}
        }
    });

    Recipes.addFurnace(BlockID.oreCopper,ItemID.ingotCopper);
    Recipes.addFurnace(BlockID.oreTetrahedrite,ItemID.ingotCopper);
    Recipes.addFurnace(BlockID.oreGalena,ItemID.ingotLead);
    Recipes.addFurnace(BlockID.oreGraphite,ItemID.dustCarbon);
    Recipes.addFurnace(BlockID.oreUranium,ItemID.ingotUranium);
    Recipes.addFurnace(BlockID.oreSilver,ItemID.ingotSilver);
    Recipes.addFurnace(BlockID.oreBauxite,ItemID.ingotAluminium);

    Tool.setHammerDestroyDrop(BlockID.oreCopper,ItemID.oreChunkCopper,4,0,true);
    Tool.setHammerDestroyDrop(BlockID.oreTetrahedrite,ItemID.oreChunkTetrahedrite,4,0,true);
    Tool.setHammerDestroyDrop(BlockID.oreCassiterite,ItemID.oreChunkCassiterite,4,0,true);
    Tool.setHammerDestroyDrop(BlockID.oreGalena,ItemID.oreChunkGalena,4,0,true);
    Tool.setHammerDestroyDrop(BlockID.oreSpodumene,ItemID.oreChunkSpodumene,4,0,true);
    Tool.setHammerDestroyDrop(BlockID.oreTungsten,ItemID.oreChunkTungsten,4,0,true);
    Tool.setHammerDestroyDrop(BlockID.oreUranium,ItemID.oreChunkUranium,4,0,true);
    Tool.setHammerDestroyDrop(BlockID.oreSilver,ItemID.oreChunkSilver,4,0,true);
    Tool.setHammerDestroyDrop(BlockID.oreBauxite,ItemID.oreChunkBauxite,4,0,true);

    Recipe.addBlastFurnaceRecipe({id:BlockID.oreTungsten,data:0},[{id:ItemID.ingotTungsten,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
});

Block.registerDropFunction("oreGraphite",function(coords,id,data,level,enchant){
	if(level >= 2){
        if(enchant.silk){return [[id,1,data]];}
        return [[ItemID.dustCarbon,random(1 * (enchant.fortune + 1),4 * (enchant.fortune + 1)),0]];
    }
    return [];
},2);