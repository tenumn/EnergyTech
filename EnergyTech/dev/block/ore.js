Block.createSpecialType({
    base:1,
    solid:true,
    destroytime:3,
    explosionres:3
},"ore");

// 铜矿石
IDRegistry.genBlockID("oreCopper");
Block.createBlock("oreCopper",[
    {name:"Copper Ore",texture:[["copper_ore",0]],inCreative:true}
],"ore");
ToolAPI.registerBlockMaterial(BlockID.oreCopper,"stone",2,true);
ToolAPI.addBlockDropOnExplosion("oreCopper");
Block.setDestroyLevel("oreCopper",2);

// 黝铜矿石
IDRegistry.genBlockID("oreTetrahedrite");
Block.createBlock("oreTetrahedrite",[
    {name:"Tetrahedrite Ore",texture:[["tetrahedrite_ore",0]],inCreative:true}
],"ore");
ToolAPI.registerBlockMaterial(BlockID.oreTetrahedrite,"stone",2,true);
ToolAPI.addBlockDropOnExplosion("oreTetrahedrite");
Block.setDestroyLevel("oreTetrahedrite",2);

// 锡石矿石
IDRegistry.genBlockID("oreCassiterite");
Block.createBlock("oreCassiterite",[
    {name:"Cassiterite Ore",texture:[["cassiterite_ore",0]],inCreative:true}
],"ore");
ToolAPI.registerBlockMaterial(BlockID.oreCassiterite,"stone",2,true);
ToolAPI.addBlockDropOnExplosion("oreCassiterite");
Block.setDestroyLevel("oreCassiterite",2);

// 方铅矿石
IDRegistry.genBlockID("oreGalena");
Block.createBlock("oreGalena",[
    {name:"Galena Ore",texture:[["galena_ore",0]],inCreative:true}
],"ore");
ToolAPI.registerBlockMaterial(BlockID.oreGalena,"stone",2,true);
Block.setDestroyLevel("oreGalena",2);

// 锂辉石矿石
IDRegistry.genBlockID("oreSpodumene");
Block.createBlock("oreSpodumene",[
    {name:"Spodumene Ore",texture:[["spodumene_ore",0]],inCreative:true}
],"ore");
ToolAPI.registerBlockMaterial(BlockID.oreSpodumene,"stone",2,true);
ToolAPI.addBlockDropOnExplosion("oreSpodumene");
Block.setDestroyLevel("oreSpodumene",2);

// 石墨矿石
IDRegistry.genBlockID("oreGraphite");
Block.createBlock("oreGraphite",[
    {name:"Graphite Ore",texture:[["graphite_ore",0]],inCreative:true}
],"ore");
ToolAPI.registerBlockMaterial(BlockID.oreGraphite,"stone",2,true);
ToolAPI.addBlockDropOnExplosion("oreGraphite");
Block.setDestroyLevel("oreGraphite",2);

Block.registerDropFunction("oreGraphite",function(coords,id,data,level,enchant){
	if(level >= 2){
        if(enchant.silk){return [[id,1,data]];}
        return [[ItemID.dustCarbon,random(1 * (enchant.fortune + 1),4 * (enchant.fortune + 1)),0]];
    }
    return [];
},2);

// 钨矿石
IDRegistry.genBlockID("oreTungsten");
Block.createBlock("oreTungsten",[
    {name:"Tungsten Ore",texture:[["tungsten_ore",0]],inCreative:true}
],"ore");
ToolAPI.registerBlockMaterial(BlockID.oreTungsten,"stone",3,true);
ToolAPI.addBlockDropOnExplosion("oreTungsten");
Block.setDestroyLevel("oreTungsten",3);

// 铀矿石
IDRegistry.genBlockID("oreUranium");
Block.createBlock("oreUranium",[
    {name:"Uranium Ore",texture:[["uranium_ore",0]],inCreative:true}
],"ore");
ToolAPI.registerBlockMaterial(BlockID.oreUranium,"stone",3,true);
ToolAPI.addBlockDropOnExplosion("oreUranium");
Block.setDestroyLevel("oreUranium",3);

// 银矿石
IDRegistry.genBlockID("oreSilver");
Block.createBlock("oreSilver",[
    {name:"Silver Ore",texture:[["silver_ore",0]],inCreative:true}
],"ore");
ToolAPI.registerBlockMaterial(BlockID.oreSilver,"stone",2,true);
ToolAPI.addBlockDropOnExplosion("oreSilver");
Block.setDestroyLevel("oreSilver",2);

// 铝土矿石
IDRegistry.genBlockID("oreBauxite");
Block.createBlock("oreBauxite",[
    {name:"Bauxite Ore",texture:[["bauxite_ore",0]],inCreative:true}
],"ore");
ToolAPI.registerBlockMaterial(BlockID.oreBauxite,"stone",2,true);
ToolAPI.addBlockDropOnExplosion("oreBauxite");
Block.setDestroyLevel("oreBauxite",2);

// 盐矿石
IDRegistry.genBlockID("oreSalt");
Block.createBlock("oreSalt",[
    {name:"Salt Ore",texture:[["salt_ore",0]],inCreative:true}
],"ore");
ToolAPI.registerBlockMaterial(BlockID.oreSalt,"stone",1,true);
ToolAPI.addBlockDropOnExplosion("oreSalt");
Block.setDestroyLevel("oreSalt",1);

Block.registerDropFunction("oreSalt",function(coords,id,data,level,enchant){
	if(level >= 1){
        if(enchant.silk) return [[id,1,data]];
        return [[ItemID.dustSalt,random(1 * (enchant.fortune + 1),4 * (enchant.fortune + 1)),0]];
    }
    return [];
},1);

// 红宝石矿石
IDRegistry.genBlockID("oreRuby");
Block.createBlock("oreRuby",[
    {name:"Ruby Ore",texture:[["ruby_ore",0]],inCreative:true}
],"ore");
ToolAPI.registerBlockMaterial(BlockID.oreRuby,"stone",3,true);
ToolAPI.addBlockDropOnExplosion("oreRuby");
Block.setDestroyLevel("oreRuby",3);

Block.registerDropFunction("oreRuby",function(coords,id,data,level,enchant){
	if(level >= 3){
        if(enchant.silk) return [[id,1,data]];
        return [[ItemID.ruby,Math.floor(Math.random() * enchant.fortune + 1),0]];
    }
    return [];
},3);

var OreVein = {
    VEIN:{
        OVERWORLD_VEIN:[

        ],

        NETHER_VEIN:[

        ],
        
        ENDER_VEIN:[

        ]
    },

    OVERWORLD_VEIN:[  

    ],

    NETHER_VEIN:[

    ],

    ENDER_VEIN:[

    ],

    SMALL_STONE:{
        
    },
    
    registerOreVein:function(name,random,ores,min,max,size,stone){
        var ore = [];
        for(let i in ores){
            var item = ores[i];
            for(let n = 0;n < item.count;n++) ore.push({id:item.id,data:item.data});
        }

        for(let i = 0;i < random;i++) this.OVERWORLD_VEIN.push({name:name,ore:ore,minHeight:min,maxHeight:max,size:size});

        if(stone) this.SMALL_STONE[name] = stone;

        this.VEIN.OVERWORLD_VEIN.push({name:name,ore:ores,minHeight:min,maxHeight:max,size:size});
    },

    registerOreVeinNether:function(name,random,ores,min,max,size,stone){
        var ore = [];
        for(let i in ores){
            var item = ores[i];
            for(let n = 0;n < item.count;n++) ore.push({id:item.id,data:item.data});
        }
        
        for(let i = 0;i < random;i++) this.NETHER_VEIN.push({name:name,ore:ore,minHeight:min,maxHeight:max,size:size});

        if(stone) this.SMALL_STONE[name] = stone;

        this.VEIN.NETHER_VEIN.push({name:name,ore:ores,minHeight:min,maxHeight:max,size:size});
    },

    registerOreVeinEnder:function(name,random,ores,min,max,size,stone){
        var ore = [];
        for(let i in ores){
            var item = ores[i];
            for(let n = 0;n < item.count;n++) ore.push({id:item.id,data:item.data});
        }

        for(let i = 0;i < random;i++) this.ENDER_VEIN.push({name:name,ore:ore,minHeight:min,maxHeight:max,size:size});

        if(stone) this.SMALL_STONE[name] = stone;

        this.VEIN.ENDER_VEIN.push({name:name,ore:ores,minHeight:min,maxHeight:max,size:size});
    }
}

Callback.addCallback("PreLoaded",function(){
    // 煤炭矿脉
    OreVein.registerOreVein("Coal",80,[{id:16,count:64,data:0}],48,80,16,{id:ItemID.tinyCoal,count:1,data:0});
    
    // 铝土矿脉
    OreVein.registerOreVein("Bauxite",80,[{id:BlockID.oreBauxite,count:64,data:0}],48,96,16,{id:ItemID.dustSmallAluminium,count:1,data:0});
    
    // 黝铜矿脉
    OreVein.registerOreVein("Tetrahedrite",150,[{id:BlockID.oreTetrahedrite,count:48,data:0},{id:BlockID.oreCopper,count:24,data:0}],64,128,30,{id:ItemID.dustSmallTetrahedrite,count:1,data:0});
    
    // 钻石矿脉
    OreVein.registerOreVein("Diamonds",60,[{id:56,count:6,data:0},{id:16,count:64,data:0},{id:BlockID.oreGraphite,count:48,data:0}],0,16,12,{id:ItemID.dustSmallDiamond,count:1,data:0});
    
    // 沥青铀矿脉
    OreVein.registerOreVein("Pitchblende",40,[{id:BlockID.oreUranium,count:12,data:0}],8,32,8,{id:ItemID.dustSmallUranium,count:1,data:0});
    
    // 锡石矿脉
    OreVein.registerOreVein("Cassiterite",170,[{id:BlockID.oreCassiterite,count:24,data:0},{id:BlockID.oreTungsten,count:6,data:0}],32,96,34,{id:ItemID.dustSmallTin,count:1,data:0});
    
    // 铁矿脉
    OreVein.registerOreVein("Iron",120,[{id:15,count:48,data:0}],16,32,24,{id:ItemID.dustSmallIron,count:1,data:0});
    
    // 方铅矿脉
    OreVein.registerOreVein("Galena",40,[{id:BlockID.oreGalena,count:48,data:0},{id:BlockID.oreSilver,count:12,data:0}],32,64,8,{id:ItemID.dustSmallLead,count:1,data:0});
    
    // 岩盐矿脉
    OreVein.registerOreVein("Salt",30,[{id:BlockID.oreSalt,count:48,data:0},{id:BlockID.oreSpodumene,count:64,data:0}],48,64,8,{id:ItemID.dustSmallSalt,count:1,data:0});
    
    // 红石矿脉
    OreVein.registerOreVein("Redstone",60,[{id:73,count:48,data:0},{id:BlockID.oreRuby,count:6,data:0}],16,48,12,{id:ItemID.dustSmallRedstone,count:1,data:0});

    Callback.addCallback("GenerateChunkUnderground",function(chunkX,chunkZ){
        var vein = OreVein.OVERWORLD_VEIN[Math.floor(Math.random() * OreVein.OVERWORLD_VEIN.length)];
        if(vein){
            var coords = {
                x:chunkX * 16 + (UsefulTool.isNegative(chunkX * 16)?-8:8),
                y:random(vein.minHeight,vein.maxHeight),
                z:chunkZ * 16 + (UsefulTool.isNegative(chunkZ * 16)?-8:8)
            }

            if(chunkX%4 == 0 && chunkZ%4 == 0){
                for(let x = 0;x < vein.size;x++){
                    for(let y = 0;y < vein.size;y++){
                        for(let z = 0;z < vein.size;z++){
                            var pointed = {
                                x:Math.floor(coords.x - (vein.size / 2) + x),
                                y:Math.floor(coords.y - (vein.size / 2) + y),
                                z:Math.floor(coords.z - (vein.size / 2) + z)
                            }
                        
                            if(Math.random() < 0.5 && World.getBlockID(pointed.x,pointed.y,pointed.z) == 1){
                                var ore = vein.ore[Math.floor(Math.random() * vein.ore.length)];
                                World.setBlock(pointed.x,pointed.y,pointed.z,ore.id,ore.data);
                                ChunkRegistry.chunk["0:" + chunkX + ":" + chunkZ] = vein.name;
                            }
                        }
                    }
                }
    
                if(__config__.getBool("debug")) Debug.message("Ore Vein: " + coords.x + " " + coords.y + " " + coords.z);
            }
        }
    });

    Callback.addCallback("GenerateNetherChunk",function(chunkX,chunkZ){
        var vein = OreVein.NETHER_VEIN[Math.floor(Math.random() * OreVein.NETHER_VEIN.length)];
        if(vein){
            var coords = {
                x:chunkX * 16 + (UsefulTool.isNegative(chunkX * 16)?-8:8),
                y:random(vein.minHeight,vein.maxHeight),
                z:chunkZ * 16 + (UsefulTool.isNegative(chunkZ * 16)?-8:8)
            }

            if(chunkX%4 == 0 && chunkZ%4 == 0){
                for(let x = 0;x < vein.size;x++){
                    for(let y = 0;y < vein.size;y++){
                        for(let z = 0;z < vein.size;z++){
                            var pointed = {
                                x:Math.floor(coords.x - (vein.size / 2) + x),
                                y:Math.floor(coords.y - (vein.size / 2) + y),
                                z:Math.floor(coords.z - (vein.size / 2) + z)
                            }

                            if(Math.random() < 0.75 && World.getBlockID(pointed.x,pointed.y,pointed.z) == 87){
                                var ore = vein.ore[Math.floor(Math.random() * vein.ore.length)];
                                World.setBlock(pointed.x,pointed.y,pointed.z,ore.id,ore.data);
                                ChunkRegistry.chunk["1:" + chunkX + ":" + chunkZ] = vein.name;
                            }
                        }
                    }
                }
                
                if(__config__.getBool("debug")) Debug.message("Ore Vein: " + coords.x + " " + coords.y + " " + coords.z);
            }
        }
    });

    Callback.addCallback("GenerateEndChunk",function(chunkX,chunkZ){
        var vein = OreVein.ENDER_VEIN[Math.floor(Math.random() * OreVein.ENDER_VEIN.length)];
        if(vein){
            var coords = {
                x:chunkX * 16 + (UsefulTool.isNegative(chunkX * 16)?-8:8),
                y:random(vein.minHeight,vein.maxHeight),
                z:chunkZ * 16 + (UsefulTool.isNegative(chunkZ * 16)?-8:8)
            }

            if(chunkX%4 == 0 && chunkZ%4 == 0){
                for(let x = 0;x < vein.size;x++){
                    for(let y = 0;y < vein.size;y++){
                        for(let z = 0;z < vein.size;z++){
                            var pointed = {
                                x:Math.floor(coords.x - (vein.size / 2) + x),
                                y:Math.floor(coords.y - (vein.size / 2) + y),
                                z:Math.floor(coords.z - (vein.size / 2) + z)
                            }
                        
                            if(Math.random() < 0.75 && World.getBlockID(pointed.x,pointed.y,pointed.z) == 121){
                                var ore = vein.ore[Math.floor(Math.random() * vein.ore.length)];
                                World.setBlock(pointed.x,pointed.y,pointed.z,ore.id,ore.data);
                                ChunkRegistry.chunk["2:" + chunkX + ":" + chunkZ] = vein.name;
                            }
                        }
                    }
                }

                if(__config__.getBool("debug")) Debug.message("Ore Vein: " + coords.x + " " + coords.y + " " + coords.z);
            }
        }
    });

    Item.addCreativeGroup("ore",Translation.translate("Ore"),[
        BlockID.oreCopper,
        BlockID.oreTetrahedrite,
        BlockID.oreCassiterite,
        BlockID.oreGalena,
        BlockID.oreSpodumene,
        BlockID.oreGraphite,
        BlockID.oreTungsten,
        BlockID.oreUranium,
        BlockID.oreSilver,
        BlockID.oreBauxite,
        BlockID.oreSalt,
        BlockID.oreRuby
    ]);

    Recipes.addFurnace(BlockID.oreCopper,ItemID.ingotCopper);
    Recipes.addFurnace(BlockID.oreTetrahedrite,ItemID.ingotCopper);
    Recipes.addFurnace(BlockID.oreGalena,ItemID.ingotLead);
    Recipes.addFurnace(BlockID.oreGraphite,ItemID.dustCarbon);
    Recipes.addFurnace(BlockID.oreUranium,ItemID.ingotUranium);
    Recipes.addFurnace(BlockID.oreSilver,ItemID.ingotSilver);
    Recipes.addFurnace(BlockID.oreBauxite,ItemID.ingotAluminium);
    Recipes.addFurnace(BlockID.oreRuby,ItemID.ruby);

    Tool.setHammerDestroyDrop(BlockID.oreCopper,ItemID.crushedCopper,1,0);
    Tool.setHammerDestroyDrop(BlockID.oreTetrahedrite,ItemID.crushedTetrahedrite,1,0);
    Tool.setHammerDestroyDrop(BlockID.oreCassiterite,ItemID.crushedCassiterite,1,0);
    Tool.setHammerDestroyDrop(BlockID.oreGalena,ItemID.crushedGalena,1,0);
    Tool.setHammerDestroyDrop(BlockID.oreSpodumene,ItemID.crushedSpodumene,1,0);
    Tool.setHammerDestroyDrop(BlockID.oreTungsten,ItemID.crushedTungsten,1,0);
    Tool.setHammerDestroyDrop(BlockID.oreUranium,ItemID.crushedUranium,1,0);
    Tool.setHammerDestroyDrop(BlockID.oreSilver,ItemID.crushedSilver,1,0);
    Tool.setHammerDestroyDrop(BlockID.oreBauxite,ItemID.crushedBauxite,1,0);

    RecipeRegistry.addBlastFurnaceRecipe({id:BlockID.oreTungsten,data:0},[{id:ItemID.ingotTungsten,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
});