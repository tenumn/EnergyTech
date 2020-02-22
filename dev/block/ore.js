CreateOre = function(id,name,texture,level,data){
    IDRegistry.genBlockID(id);
    Block.createBlock(id,[{name:name,texture:texture,inCreative:true}],"opaque");
    ToolAPI.registerBlockMaterial(BlockID[id],"stone",level);
    Block.setDestroyTime(BlockID[id],3);
    
    if(data){
        var config = {
            enabled:  __config__.getBool(  "ore." + data + ".enabled"  ),
            count:    __config__.getNumber("ore." + data + ".count"    ),
            size:     __config__.getNumber("ore." + data + ".size"     ),
            minHeight:__config__.getNumber("ore." + data + ".minHeight"),
            maxHeight:__config__.getNumber("ore." + data + ".maxHeight")
        }
    
        if(config.enabled){
            Callback.addCallback("GenerateChunkUnderground",function(chunkX,chunkZ){
                for(var i = 0;i < config.count;i++){
                    var coords = GenerationUtils.randomCoords(chunkX,chunkZ,config.minHeight,config.maxHeight);
                    GenerationUtils.generateOre(coords.x,coords.y,coords.z,BlockID[id],0,config.size);
                }
            });
        }
    }
}

CreateOre("oreCopper"      ,"Copper Ore"      ,[["copper_ore"      ,0]],2,"copper"      );
CreateOre("oreTetrahedrite","Tetrahedrite Ore",[["tetrahedrite_ore",0]],2,"tetrahedrite");
CreateOre("oreTin"         ,"Tin Ore"         ,[["tin_ore"         ,0]],2,"tin"         );
CreateOre("oreLead"        ,"Lead Ore"        ,[["lead_ore"        ,0]],2,"lead"        );
CreateOre("oreLithium"     ,"Lithium Ore"     ,[["lithium_ore"     ,0]],2,"lithium"     );
CreateOre("oreGraphite"    ,"Graphite Ore"    ,[["graphite_ore"    ,0]],2,"graphite"    );
CreateOre("oreTungsten"    ,"Tungsten Ore"    ,[["tungsten_ore"    ,0]],2,"tungsten"    );
CreateOre("oreAntimony"    ,"Antimony Ore"    ,[["antimony_ore"    ,0]],2,"antimony"    );
CreateOre("oreUranium"     ,"Uranium Ore"     ,[["uranium_ore"     ,0]],2,"uranium"     );
CreateOre("oreSilver"      ,"Silver Ore"      ,[["silver_ore"      ,0]],2,"silver"      );

Callback.addCallback("PreLoaded",function(){
    Recipes.addFurnace(BlockID.oreCopper      ,ItemID.ingotCopper  );
    Recipes.addFurnace(BlockID.oreTetrahedrite,ItemID.ingotCopper  );
    Recipes.addFurnace(BlockID.oreTin         ,ItemID.ingotTin     );
    Recipes.addFurnace(BlockID.oreLead        ,ItemID.ingotLead    );
    Recipes.addFurnace(BlockID.oreLithium     ,ItemID.ingotLithium );
    Recipes.addFurnace(BlockID.oreGraphite    ,ItemID.dustCarbon   );
    Recipes.addFurnace(BlockID.oreAntimony    ,ItemID.ingotAntimony);
    Recipes.addFurnace(BlockID.oreUranium     ,ItemID.ingotUranium );

    ETRecipe.addBlastFurnaceRecipe({id:ItemID.ingotTungsten,count:1,data:0},{id:BlockID.oreTungsten,count:1,data:0});
});

Block.registerDropFunction("oreGraphite",function(coords,id,data,level,enchant){
	if(level >= 2){
        if(enchant.silk){
            return [[id,1,data]];
        }
        return [[ItemID.dustCarbon,random(1 * (enchant.fortune + 1),4 * (enchant.fortune + 1)),0]];
    }
},2);