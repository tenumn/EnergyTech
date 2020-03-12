
CreateOre = function(name,data){
    var json = FileTools.ReadJSON(__dir__ + "res/config/ore.json"),ore = json[name.toLowerCase()],config = {enabled:ore.enabled,count:ore.count,size:ore.size,minHeight:ore.minHeight,maxHeight:ore.maxHeight}
    if(!data.ore){
        IDRegistry.genBlockID("ore" + name);
        Block.createBlock("ore" + name,[{name:name + " Ore",texture:[["ore" + name,0]],inCreative:true}],"opaque");
        ToolAPI.registerBlockMaterial(BlockID["ore" + name],"stone",data.level);
        Block.setDestroyTime(BlockID["ore" + name],3);

        if(config.enabled){
            Callback.addCallback("GenerateChunkUnderground",function(chunkX,chunkZ){
                for(var i = 0;i < config.count;i++){
                    var coords = GenerationUtils.randomCoords(chunkX,chunkZ,config.minHeight,config.maxHeight);
                    GenerationUtils.generateOre(coords.x,coords.y,coords.z,BlockID["ore" + name],0,config.size);
                }
            });
        }
    }
    
    if(!data.oreNether){
        IDRegistry.genBlockID("oreNether" + name);
        Block.createBlock("oreNether" + name,[{name:"Nether " + name + " Ore",texture:[["oreNether" + name,0]],inCreative:true}],"opaque");
        ToolAPI.registerBlockMaterial(BlockID["oreNether" + name],"stone",data.level);
        Block.setDestroyTime(BlockID["oreNether" + name],3);
        
        if(config.enabled){
            Callback.addCallback("GenerateNetherChunk",function(chunkX,chunkZ){
                for(var i = 0;i < config.count;i++){
                    var coords = GenerationUtils.randomCoords(chunkX,chunkZ,config.minHeight,config.maxHeight);
                    GenerationUtils.generateOre(coords.x,coords.y,coords.z,BlockID["oreNether" + name],0,config.size);
                }
            });
        }
    }
    
    if(!data.oreEnder){
        IDRegistry.genBlockID("oreEnder" + name);
        Block.createBlock("oreEnder" + name,[{name:"Ender " + name + " Ore",texture:[["oreEnder" + name,0]],inCreative:true}],"opaque");
        ToolAPI.registerBlockMaterial(BlockID["oreEnder" + name],"stone",data.level);
        Block.setDestroyTime(BlockID["oreEnder" + name],3);

        if(config.enabled){
            Callback.addCallback("GenerateEndChunk",function(chunkX,chunkZ){
                for(var i = 0;i < config.count;i++){
                    var coords = GenerationUtils.randomCoords(chunkX,chunkZ,config.minHeight,config.maxHeight);
                    GenerationUtils.generateOre(coords.x,coords.y,coords.z,BlockID["oreEnder" + name],0,config.size);
                }
            });
        }
    }
}

CreateOre("Copper"      ,{level:2});
CreateOre("Tetrahedrite",{level:2});
CreateOre("Tin"         ,{level:2});
CreateOre("Lead"        ,{level:2});
CreateOre("Iron"        ,{level:2,ore:true});
CreateOre("Gold"        ,{level:2,ore:true});
CreateOre("Lithium"     ,{level:2});
CreateOre("Graphite"    ,{level:2});
CreateOre("Tungsten"    ,{level:3});
CreateOre("Antimony"    ,{level:2});
CreateOre("Uranium"     ,{level:2});
CreateOre("Silver"      ,{level:2});
CreateOre("Aluminium"   ,{level:2});

Callback.addCallback("PreLoaded",function(){
    // 熔炉
    Recipes.addFurnace(BlockID.oreCopper      ,ItemID.ingotCopper      );
    Recipes.addFurnace(BlockID.oreTetrahedrite,ItemID.ingotTetrahedrite);
    Recipes.addFurnace(BlockID.oreTin         ,ItemID.ingotTin         );
    Recipes.addFurnace(BlockID.oreLead        ,ItemID.ingotLead        );
    Recipes.addFurnace(BlockID.oreLithium     ,ItemID.ingotLithium     );
    Recipes.addFurnace(BlockID.oreGraphite    ,ItemID.dustCarbon       );
    Recipes.addFurnace(BlockID.oreAntimony    ,ItemID.ingotAntimony    );
    Recipes.addFurnace(BlockID.oreUranium     ,ItemID.ingotUranium     );
    Recipes.addFurnace(BlockID.oreSilver      ,ItemID.ingotSilver      );
    Recipes.addFurnace(BlockID.oreAluminium   ,ItemID.ingotAluminium   );

    Recipes.addFurnace(BlockID.oreNetherCopper      ,ItemID.ingotCopper      );
    Recipes.addFurnace(BlockID.oreNetherTetrahedrite,ItemID.ingotTetrahedrite);
    Recipes.addFurnace(BlockID.oreNetherTin         ,ItemID.ingotTin         );
    Recipes.addFurnace(BlockID.oreNetherLead        ,ItemID.ingotLead        );
    Recipes.addFurnace(BlockID.oreNetherIron        ,265                     );
    Recipes.addFurnace(BlockID.oreNetherGold        ,266                     );
    Recipes.addFurnace(BlockID.oreNetherLithium     ,ItemID.ingotLithium     );
    Recipes.addFurnace(BlockID.oreNetherGraphite    ,ItemID.dustCarbon       );
    Recipes.addFurnace(BlockID.oreNetherAntimony    ,ItemID.ingotAntimony    );
    Recipes.addFurnace(BlockID.oreNetherUranium     ,ItemID.ingotUranium     );
    Recipes.addFurnace(BlockID.oreNetherSilver      ,ItemID.ingotSilver      );
    Recipes.addFurnace(BlockID.oreNetherAluminium   ,ItemID.ingotAluminium   );

    Recipes.addFurnace(BlockID.oreEnderCopper      ,ItemID.ingotCopper      );
    Recipes.addFurnace(BlockID.oreEnderTetrahedrite,ItemID.ingotTetrahedrite);
    Recipes.addFurnace(BlockID.oreEnderTin         ,ItemID.ingotTin         );
    Recipes.addFurnace(BlockID.oreEnderLead        ,ItemID.ingotLead        );
    Recipes.addFurnace(BlockID.oreEnderIron        ,265                     );
    Recipes.addFurnace(BlockID.oreEnderGold        ,266                     );
    Recipes.addFurnace(BlockID.oreEnderLithium     ,ItemID.ingotLithium     );
    Recipes.addFurnace(BlockID.oreEnderGraphite    ,ItemID.dustCarbon       );
    Recipes.addFurnace(BlockID.oreEnderAntimony    ,ItemID.ingotAntimony    );
    Recipes.addFurnace(BlockID.oreEnderUranium     ,ItemID.ingotUranium     );
    Recipes.addFurnace(BlockID.oreEnderSilver      ,ItemID.ingotSilver      );
    Recipes.addFurnace(BlockID.oreEnderAluminium   ,ItemID.ingotAluminium   );

    // 锤子
    ETTool.setHammerDestroyDrop(BlockID.oreCopper      ,ItemID.oreChunkCopper      ,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreTetrahedrite,ItemID.oreChunkTetrahedrite,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreTin         ,ItemID.oreChunkTin         ,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreLead        ,ItemID.oreChunkLead        ,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreLithium     ,ItemID.oreChunkLithium     ,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreTungsten    ,ItemID.oreChunkTungsten    ,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreAntimony    ,ItemID.oreChunkAntimony    ,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreUranium     ,ItemID.oreChunkUranium     ,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreSilver      ,ItemID.oreChunkSilver      ,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreAluminium   ,ItemID.oreChunkAluminium   ,4,0,true);
    
    ETTool.setHammerDestroyDrop(BlockID.oreNetherCopper      ,ItemID.oreChunkNetherCopper      ,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreNetherTetrahedrite,ItemID.oreChunkNetherTetrahedrite,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreNetherTin         ,ItemID.oreChunkNetherTin         ,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreNetherLead        ,ItemID.oreChunkNetherLead        ,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreNetherLithium     ,ItemID.oreChunkNetherLithium     ,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreNetherTungsten    ,ItemID.oreChunkNetherTungsten    ,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreNetherAntimony    ,ItemID.oreChunkNetherAntimony    ,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreNetherUranium     ,ItemID.oreChunkNetherUranium     ,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreNetherSilver      ,ItemID.oreChunkNetherSilver      ,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreNetherAluminium   ,ItemID.oreChunkNetherAluminium   ,4,0,true);
    
    ETTool.setHammerDestroyDrop(BlockID.oreEnderCopper      ,ItemID.oreChunkEnderCopper      ,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreEnderTetrahedrite,ItemID.oreChunkEnderTetrahedrite,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreEnderTin         ,ItemID.oreChunkEnderTin         ,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreEnderLead        ,ItemID.oreChunkEnderLead        ,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreEnderLithium     ,ItemID.oreChunkEnderLithium     ,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreEnderTungsten    ,ItemID.oreChunkEnderTungsten    ,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreEnderAntimony    ,ItemID.oreChunkEnderAntimony    ,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreEnderUranium     ,ItemID.oreChunkEnderUranium     ,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreEnderSilver      ,ItemID.oreChunkEnderSilver      ,4,0,true);
    ETTool.setHammerDestroyDrop(BlockID.oreEnderAluminium   ,ItemID.oreChunkEnderAluminium   ,4,0,true);

    // 高炉
    ETRecipe.addBlastFurnaceRecipe({id:BlockID.oreTungsten      ,data:0},[{id:ItemID.ingotTungsten,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
    ETRecipe.addBlastFurnaceRecipe({id:BlockID.oreNetherTungsten,data:0},[{id:ItemID.ingotTungsten,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
    ETRecipe.addBlastFurnaceRecipe({id:BlockID.oreEnderTungsten ,data:0},[{id:ItemID.ingotTungsten,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
});

Block.registerDropFunction("oreGraphite",function(coords,id,data,level,enchant){
	if(level >= 2){
        if(enchant.silk){
            return [[id,1,data]];
        }
        return [[ItemID.dustCarbon,random(1 * (enchant.fortune + 1),4 * (enchant.fortune + 1)),0]];
    }
    return [];
},2);