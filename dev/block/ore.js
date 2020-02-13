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

CreateOre("oreCopper"      ,"Copper Ore"      ,[["copper_ore",0]]      ,2,"copper"      );
CreateOre("oreTetrahedrite","Tetrahedrite Ore",[["tetrahedrite_ore",0]],2,"tetrahedrite");
CreateOre("oreTin"         ,"Tin Ore"         ,[["tin_ore",0]]         ,2,"tin"         );
CreateOre("oreLead"        ,"Lead Ore"        ,[["lead_ore",0]]        ,2,"lead"        );
CreateOre("oreLithium"     ,"Lithium Ore"     ,[["lithium_ore",0]]     ,2,"lithium"     );
CreateOre("oreGraphite"    ,"Graphite Ore"    ,[["graphite_ore",0]]    ,2,"graphite"    );
CreateOre("oreTungsten"    ,"Tungsten Ore"    ,[["tungsten_ore",0]]    ,2,"tungsten"    );

Block.registerDropFunction("oreGraphite",function(coords,id,data,level,enchant){
	var count = random(1 * (enchant.fortune + 1),4 * (enchant.fortune + 1));
	if(enchant.silk){
		return [[BlockID.oreGraphite,1,0]];
	}
	return [[ItemID.dustCarbon,count,0]];
});