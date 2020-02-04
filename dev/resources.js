// ========================================================================================================= //
// ================================================== Ore ================================================== //
// ========================================================================================================= //
CreateRegistry.createOre = function(id,name,texture,level,data){
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

CreateRegistry.createOre("oreCopper"      ,"Copper Ore"      ,[["copper_ore",0]]      ,2,"copper"      );
CreateRegistry.createOre("oreTetrahedrite","Tetrahedrite Ore",[["tetrahedrite_ore",0]],2,"tetrahedrite");
CreateRegistry.createOre("oreTin"         ,"Tin Ore"         ,[["tin_ore",0]]         ,2,"tin"         );
CreateRegistry.createOre("oreLead"        ,"Lead Ore"        ,[["lead_ore",0]]        ,2,"lead"        );
CreateRegistry.createOre("oreLithium"     ,"Lithium Ore"     ,[["lithium_ore",0]]     ,2,"lithium"     );
CreateRegistry.createOre("oreGraphite"    ,"Graphite Ore"    ,[["graphite_ore",0]]    ,2,"graphite"    );
CreateRegistry.createOre("oreTungsten"    ,"Tungsten Ore"    ,[["tungsten_ore",0]]    ,2,"tungsten"    );

Block.registerDropFunction("oreGraphite",function(coords,id,data,level,enchant){
	var count = random(1 * (enchant.fortune + 1),4 * (enchant.fortune + 1));
	if(enchant.silk){
		return [[BlockID.oreGraphite,1,0]];
	}
	return [[ItemID.dustCarbon,count,0]];
});

Translation.addTranslation("Copper Ore"      ,{zh_CN:"铜矿石"  });
Translation.addTranslation("Tetrahedrite Ore",{zh_CN:"黝铜矿石"});
Translation.addTranslation("Tin Ore"         ,{zh_CN:"锡矿石"  });
Translation.addTranslation("Lead Ore"        ,{zh_CN:"铅矿石"  });
Translation.addTranslation("Lithium Ore"     ,{zh_CN:"锂矿石"  });
Translation.addTranslation("Graphite Ore"    ,{zh_CN:"石墨矿石"});
Translation.addTranslation("Tungsten Ore"    ,{zh_CN:"钨矿石"  });
// =========================================================================================================== //
// ================================================== Block ================================================== //
// =========================================================================================================== //
CreateRegistry.createBlock = function(id,name,texture){
    IDRegistry.genBlockID(id);
    Block.createBlock(id,[
        {name:name,texture:texture,inCreative:true}
    ],"opaque");
    ToolAPI.registerBlockMaterial(BlockID[id],"stone",1);
    Block.setDestroyTime(BlockID[id],3);
}

RecipeRegistry.addBlockRecipe = function(output,input){
    Recipes.addShaped(output,["aaa","aaa","aaa"],["a",input[0].id,input[0].data]);
    Recipes.addShapeless({id:input[0].id,count:9,data:input[0].data},[{id:output.id,data:output.data}]);
}

CreateRegistry.createBlock("blockCopper"      ,"Copper Block"       ,[["copper_block"       ,0]]);
CreateRegistry.createBlock("blockTin"         ,"Tin Block"          ,[["tin_block"          ,0]]);
CreateRegistry.createBlock("blockLead"        ,"Lead Block"         ,[["lead_block"         ,0]]);
CreateRegistry.createBlock("blockWroughtIron" ,"Wrought Iron Block" ,[["wrought_iron_block" ,0]]);
CreateRegistry.createBlock("blockSteel"       ,"Steel Block"        ,[["steel_block"        ,0]]);
CreateRegistry.createBlock("blockAntimony"    ,"Antimony Block"     ,[["antimony_block"     ,0]]);
CreateRegistry.createBlock("blockLithium"     ,"Lithium Block"      ,[["lithium_block"      ,0]]);
CreateRegistry.createBlock("blockCarbon"      ,"Carbon Block"       ,[["carbon_block"       ,0]]);
CreateRegistry.createBlock("blockTungsten"    ,"Tungsten Block"     ,[["tungsten_block"     ,0]]);
CreateRegistry.createBlock("blockLeadAntimony","Lead-Antimony Block",[["lead_antimony_block",0]]);

Callback.addCallback("PreLoaded",function(){
    RecipeRegistry.addBlockRecipe({id:BlockID.blockCopper      ,count:1,data:0},[{id:ItemID.ingotCopper      ,data:0}]);
    RecipeRegistry.addBlockRecipe({id:BlockID.blockTin         ,count:1,data:0},[{id:ItemID.ingotTin         ,data:0}]);
    RecipeRegistry.addBlockRecipe({id:BlockID.blockLead        ,count:1,data:0},[{id:ItemID.ingotLead        ,data:0}]);
    RecipeRegistry.addBlockRecipe({id:BlockID.blockWroughtIron ,count:1,data:0},[{id:ItemID.ingotWroughtIron ,data:0}]);
    RecipeRegistry.addBlockRecipe({id:BlockID.blockSteel       ,count:1,data:0},[{id:ItemID.ingotSteel       ,data:0}]);
    RecipeRegistry.addBlockRecipe({id:BlockID.blockAntimony    ,count:1,data:0},[{id:ItemID.ingotAntimony    ,data:0}]);
    RecipeRegistry.addBlockRecipe({id:BlockID.blockLithium     ,count:1,data:0},[{id:ItemID.ingotLithium     ,data:0}]);
    RecipeRegistry.addBlockRecipe({id:BlockID.blockCarbon      ,count:1,data:0},[{id:ItemID.dustCarbon       ,data:0}]);
    RecipeRegistry.addBlockRecipe({id:BlockID.blockTungsten    ,count:1,data:0},[{id:ItemID.dustTungsten     ,data:0}]);
    RecipeRegistry.addBlockRecipe({id:BlockID.blockLeadAntimony,count:1,data:0},[{id:ItemID.ingotLeadAntimony,data:0}]);
});
Translation.addTranslation("Copper Block"             ,{zh_CN:"铜块"      });
Translation.addTranslation("Tin Block"                ,{zh_CN:"锡块"      });
Translation.addTranslation("Lead Block"               ,{zh_CN:"铅块"      });
Translation.addTranslation("Wrought Iron Block"       ,{zh_CN:"锻铁块"    });
Translation.addTranslation("Steel Block"              ,{zh_CN:"钢块"      });
Translation.addTranslation("Antimony Block"           ,{zh_CN:"锑块"      });
Translation.addTranslation("Lithium Block"            ,{zh_CN:"锂块"      });
Translation.addTranslation("Carbon Block"             ,{zh_CN:"碳块"      });
Translation.addTranslation("Tungsten Block"           ,{zh_CN:"钨块"      });
Translation.addTranslation("Lead-Antimony Alloy Block",{zh_CN:"铅锑合金块"});
// ========================================================================================================== //
// ================================================== Dust ================================================== //
// ========================================================================================================== //
CreateRegistry.createDust = function(id,name,texture){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture);
}

CreateRegistry.createDust("dustCopper"      ,"Copper Dust"             ,{name:"copper_dust"       ,meta:0});
CreateRegistry.createDust("dustTin"         ,"Tin Dust"                ,{name:"tin_dust"          ,meta:0});
CreateRegistry.createDust("dustLead"        ,"Lead Dust"               ,{name:"lead_dust"         ,meta:0});
CreateRegistry.createDust("dustIron"        ,"Iron Dust"               ,{name:"iron_dust"         ,meta:0});
CreateRegistry.createDust("dustSteel"       ,"Steel Dust"              ,{name:"steel_dust"        ,meta:0});
CreateRegistry.createDust("dustGold"        ,"Gold Dust"               ,{name:"gold_dust"         ,meta:0});
CreateRegistry.createDust("dustAntimony"    ,"Antimony Dust"           ,{name:"antimony_dust"     ,meta:0});
CreateRegistry.createDust("dustLithium"     ,"Lithium Dust"            ,{name:"lithium_dust"      ,meta:0});
CreateRegistry.createDust("dustCarbon"      ,"Carbon Dust"             ,{name:"carbon_dust"       ,meta:0});
CreateRegistry.createDust("dustTungsten"    ,"Tungsten Dust"           ,{name:"tungsten_dust"     ,meta:0});
CreateRegistry.createDust("dustLeadAntimony","Lead-Antimony Alloy Dust",{name:"lead_antimony_dust",meta:0});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShapeless({id:ItemID.dustLeadAntimony,count:2,data:0},[{id:ItemID.dustLead,data:0},{id:ItemID.dustAntimony,data:0}]);

    RecipeRegistry.addMaceratorRecipe({id:ItemID.dustCopper   ,count:1,data:0},{id:ItemID.ingotCopper   ,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.dustTin      ,count:1,data:0},{id:ItemID.ingotTin      ,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.dustLead     ,count:1,data:0},{id:ItemID.ingotLead     ,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.dustIron     ,count:1,data:0},{id:265                  ,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.dustSteel    ,count:1,data:0},{id:ItemID.ingotSteel    ,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.dustGold     ,count:1,data:0},{id:266                  ,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.dustAntimony ,count:1,data:0},{id:ItemID.ingotAntimony ,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.dustLithium  ,count:1,data:0},{id:ItemID.ingotLithium  ,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.dustTungsten ,count:1,data:0},{id:ItemID.ingotTungsten ,count:1,data:0});
});

Translation.addTranslation("Copper Dust"             ,{zh_CN:"铜粉"      });
Translation.addTranslation("Tin Dust"                ,{zh_CN:"锡粉"      });
Translation.addTranslation("Lead Dust"               ,{zh_CN:"铅粉"      });
Translation.addTranslation("Iron Dust"               ,{zh_CN:"铁粉"      });
Translation.addTranslation("Steel Dust"              ,{zh_CN:"钢粉"      });
Translation.addTranslation("Gold Dust"               ,{zh_CN:"金粉"      });
Translation.addTranslation("Antimony Dust"           ,{zh_CN:"锑粉"      });
Translation.addTranslation("Lithium Dust"            ,{zh_CN:"锂粉"      });
Translation.addTranslation("Carbon Dust"             ,{zh_CN:"碳粉"      });
Translation.addTranslation("Tungsten Dust"           ,{zh_CN:"钨粉"      });
Translation.addTranslation("Lead-Antimony Alloy Dust",{zh_CN:"铅锑合金粉"});

// ================================================================================================================= //
// ================================================== Impure Dust ================================================== //
// ================================================================================================================= //
CreateRegistry.createImpureDust = function(id,name,texture){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture);
}

CreateRegistry.createImpureDust("dustImpureCopper"  ,"Impure Copper Dust"  ,{name:"impure_copper_dust"  ,meta:0});
CreateRegistry.createImpureDust("dustImpureTin"     ,"Impure Tin Dust"     ,{name:"impure_tin_dust"     ,meta:0});
CreateRegistry.createImpureDust("dustImpureLead"    ,"Impure Lead Dust"    ,{name:"impure_lead_dust"    ,meta:0});
CreateRegistry.createImpureDust("dustImpureIron"    ,"Impure Iron Dust"    ,{name:"impure_iron_dust"    ,meta:0});
CreateRegistry.createImpureDust("dustImpureGold"    ,"Impure Gold Dust"    ,{name:"impure_gold_dust"    ,meta:0});
CreateRegistry.createImpureDust("dustImpureAntimony","Impure Antimony Dust",{name:"impure_antimony_dust",meta:0});
CreateRegistry.createImpureDust("dustImpureLithium" ,"Impure Lithium Dust" ,{name:"impure_lithium_dust" ,meta:0});
CreateRegistry.createImpureDust("dustImpureCarbon"  ,"Impure Carbon Dust"  ,{name:"impure_carbon_dust"  ,meta:0});
CreateRegistry.createImpureDust("dustImpureTungsten","Impure Tungsten Dust",{name:"impure_tungsten_dust",meta:0});

Translation.addTranslation("Impure Copper Dust"  ,{zh_CN:"含杂铜粉"});
Translation.addTranslation("Impure Tin Dust"     ,{zh_CN:"含杂锡粉"});
Translation.addTranslation("Impure Lead Dust"    ,{zh_CN:"含杂铅粉"});
Translation.addTranslation("Impure Iron Dust"    ,{zh_CN:"含杂铁粉"});
Translation.addTranslation("Impure Gold Dust"    ,{zh_CN:"含杂金粉"});
Translation.addTranslation("Impure Antimony Dust",{zh_CN:"含杂锑粉"});
Translation.addTranslation("Impure Lithium Dust" ,{zh_CN:"含杂锂粉"});
Translation.addTranslation("Impure Carbon Dust"  ,{zh_CN:"含杂碳粉"});
Translation.addTranslation("Impure Tungsten Dust",{zh_CN:"含杂钨粉"});
// ========================================================================================================== //
// ================================================== Gear ================================================== //
// ========================================================================================================== //
CreateRegistry.createGear = function(id,name,texture){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture);
}

RecipeRegistry.addGearRecipe = function(output,input){
    var wrench = ToolRegistry.getAll("Wrench");
    for(let i = 0;i < wrench.length;i++){
        RecipeRegistry.addShapedRecipe(output,["aba","bcb","aba"],["a",input[0].id,input[0].data,"b",input[1].id,input[1].data,"c",wrench[i],-1],{4:1});
    }
}

CreateRegistry.createDust("gearIron" ,"Iron Gear" ,{name:"iron_gear" ,meta:0});
CreateRegistry.createDust("gearSteel","Steel Gear",{name:"steel_gear",meta:0});

Callback.addCallback("PreLoaded",function(){
    RecipeRegistry.addGearRecipe({id:ItemID.gearIron ,count:1,data:0},[{id:ItemID.stickIron ,data:0},{id:ItemID.plateIron ,data:0}]);
    RecipeRegistry.addGearRecipe({id:ItemID.gearSteel,count:1,data:0},[{id:ItemID.stickSteel,data:0},{id:ItemID.plateSteel,data:0}]);
});

Translation.addTranslation("Iron Gear",{zh_CN:"铁齿轮"});
// =========================================================================================================== //
// ================================================== Ingot ================================================== //
// =========================================================================================================== //
CreateRegistry.createIngot = function(id,name,texture){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture);
}

CreateRegistry.createDust("ingotCopper"      ,"Copper Ingot"             ,{name:"copper_ingot"       ,meta:0});
CreateRegistry.createDust("ingotTin"         ,"Tin Ingot"                ,{name:"tin_ingot"          ,meta:0});
CreateRegistry.createDust("ingotLead"        ,"Lead Ingot"               ,{name:"lead_ingot"         ,meta:0});
CreateRegistry.createDust("ingotWroughtIron" ,"Wrought Iron Ingot"       ,{name:"wrought_iron_ingot" ,meta:0});
CreateRegistry.createDust("ingotSteel"       ,"Steel Ingot"              ,{name:"steel_ingot"        ,meta:0});
CreateRegistry.createDust("ingotAntimony"    ,"Antimony Ingot"           ,{name:"antimony_ingot"     ,meta:0});
CreateRegistry.createDust("ingotLithium"     ,"Lithium Ingot"            ,{name:"lithium_ingot"      ,meta:0});
CreateRegistry.createDust("ingotTungsten"    ,"Tungsten Ingot"           ,{name:"tungsten_ingot"     ,meta:0});
CreateRegistry.createDust("ingotLeadAntimony","Lead-Antimony Alloy Ingot",{name:"lead_antimony_ingot",meta:0});

Callback.addCallback("PreLoaded",function(){
    RecipeRegistry.addBlastFurnaceRecipe({id:ItemID.ingotWroughtIron,count:1,data:0},{id:265,count:1,data:0});
    RecipeRegistry.addBlastFurnaceRecipe({id:ItemID.ingotSteel,count:1,data:0},{id:ItemID.ingotWroughtIron,count:1,data:0});
});

Translation.addTranslation("Copper Ingot"             ,{zh_CN:"铜锭"      });
Translation.addTranslation("Tin Ingot"                ,{zh_CN:"锡锭"      });
Translation.addTranslation("Lead Ingot"               ,{zh_CN:"铅锭"      });
Translation.addTranslation("Wrought Iron Ingot"       ,{zh_CN:"锻铁锭"    });
Translation.addTranslation("Steel Ingot"              ,{zh_CN:"钢锭"      });
Translation.addTranslation("Antimony Ingot"           ,{zh_CN:"锑锭"      });
Translation.addTranslation("Lithium Ingot"            ,{zh_CN:"锂锭"      });
Translation.addTranslation("Tungsten Ingot"           ,{zh_CN:"钨锭"      });
Translation.addTranslation("Lead-Antimony Alloy Ingot",{zh_CN:"铅锑合金锭"});
// =========================================================================================================== //
// ================================================== Plate ================================================== //
// =========================================================================================================== //
CreateRegistry.createPlate = function(id,name,texture){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture);
}

RecipeRegistry.addPlateRecipe = function(output,input){
    RecipeRegistry.addHammerRecipe(output,[{id:input[0].id,data:input[0].data}]);
    RecipeRegistry.addCompressorRecipe(output,{id:input[0].id,count:1,data:input[0].data});
}

CreateRegistry.createDust("plateCopper"      ,"Copper Plate"       ,{name:"copper_plate"       ,meta:0});
CreateRegistry.createDust("plateTin"         ,"Tin Plate"          ,{name:"tin_plate"          ,meta:0});
CreateRegistry.createDust("plateIron"        ,"Iron Plate"         ,{name:"iron_plate"         ,meta:0});
CreateRegistry.createDust("plateSteel"       ,"Steel Plate"        ,{name:"steel_plate"        ,meta:0});
CreateRegistry.createDust("plateGold"        ,"Gold Plate"         ,{name:"gold_plate"         ,meta:0});
CreateRegistry.createDust("plateCarbon"      ,"Carbon Plate"       ,{name:"carbon_plate"       ,meta:0});
CreateRegistry.createDust("plateTungsten"    ,"Tungsten Plate"     ,{name:"tungsten_plate"     ,meta:0});
CreateRegistry.createDust("plateLeadAntimony","Lead-Antimony Plate",{name:"lead_antimony_plate",meta:0});

Callback.addCallback("PreLoaded",function(){
    RecipeRegistry.addPlateRecipe({id:ItemID.plateCopper      ,count:1,data:0},[{id:ItemID.ingotCopper      ,data:0}]);
    RecipeRegistry.addPlateRecipe({id:ItemID.plateTin         ,count:1,data:0},[{id:ItemID.ingotTin         ,data:0}]);
    RecipeRegistry.addPlateRecipe({id:ItemID.plateIron        ,count:1,data:0},[{id:265                     ,data:0}]);
    RecipeRegistry.addPlateRecipe({id:ItemID.plateSteel       ,count:1,data:0},[{id:ItemID.ingotSteel       ,data:0}]);
    RecipeRegistry.addPlateRecipe({id:ItemID.plateGold        ,count:1,data:0},[{id:266                     ,data:0}]);
    RecipeRegistry.addPlateRecipe({id:ItemID.plateCarbon      ,count:1,data:0},[{id:BlockID.blockCarbon     ,data:0}]);
    RecipeRegistry.addPlateRecipe({id:ItemID.plateTungsten    ,count:1,data:0},[{id:BlockID.blockTungsten   ,data:0}]);
    RecipeRegistry.addPlateRecipe({id:ItemID.plateLeadAntimony,count:1,data:0},[{id:ItemID.ingotLeadAntimony,data:0}]);
});
 
Translation.addTranslation("Tin Plate"                ,{zh_CN:"锡板"      });
Translation.addTranslation("Iron Plate"               ,{zh_CN:"铁板"      });
Translation.addTranslation("Gold Plate"               ,{zh_CN:"金板"      });
Translation.addTranslation("Steel Plate"              ,{zh_CN:"钢板"      });
Translation.addTranslation("Copper Plate"             ,{zh_CN:"铜板"      });
Translation.addTranslation("Tungsten Plate"           ,{zh_CN:"钨板"      });
Translation.addTranslation("Lead-Antimony Alloy Plate",{zh_CN:"铅锑合金板"});
// =========================================================================================================== //
// ================================================== Stick ================================================== //
// =========================================================================================================== //
CreateRegistry.createStick = function(id,name,texture){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture);
}

CreateRegistry.createDust("stickCopper","Copper Stick",{name:"copper_stick",meta:0});
CreateRegistry.createDust("stickTin"   ,"Tin Stick"   ,{name:"tin_stick"   ,meta:0});
CreateRegistry.createDust("stickIron"  ,"Iron Stick"  ,{name:"iron_stick"  ,meta:0});
CreateRegistry.createDust("stickSteel" ,"Steel Stick" ,{name:"steel_stick" ,meta:0});
CreateRegistry.createDust("stickGold"  ,"Gold Stick"  ,{name:"gold_stick"  ,meta:0});

Callback.addCallback("PreLoaded",function(){
    RecipeRegistry.addCutterRecipe({id:ItemID.stickCopper,count:2,data:0},[{id:ItemID.plateCopper,data:0}]);
    RecipeRegistry.addCutterRecipe({id:ItemID.stickTin   ,count:2,data:0},[{id:ItemID.plateTin   ,data:0}]);
    RecipeRegistry.addCutterRecipe({id:ItemID.stickIron  ,count:2,data:0},[{id:ItemID.plateIron  ,data:0}]);
    RecipeRegistry.addCutterRecipe({id:ItemID.stickSteel ,count:2,data:0},[{id:ItemID.plateSteel ,data:0}]);
    RecipeRegistry.addCutterRecipe({id:ItemID.stickGold  ,count:2,data:0},[{id:ItemID.plateGold  ,data:0}]);
});

Translation.addTranslation("Copper Stick",{zh_CN:"铜棍"});
Translation.addTranslation("Tin Stick"   ,{zh_CN:"锡棍"});
Translation.addTranslation("Iron Stick"  ,{zh_CN:"铁棍"});
Translation.addTranslation("Gold Stick"  ,{zh_CN:"金棍"});
Translation.addTranslation("Steel Stick" ,{zh_CN:"钢棍"});
// ========================================================================================================== //
// ================================================== Wire ================================================== //
// ========================================================================================================== //
CreateRegistry.createWire = function(id,name,texture,volt,size){
    // Block
	IDRegistry.genBlockID(id);
	Block.createBlock(id, [
        {name:name,texture:[[texture.name,0]],inCreative:false},
        {name:name,texture:[[texture.name,1]],inCreative:false}
	],"wire");

    EU.registerWire(BlockID[id],volt);

    MachineRegistry.wireIDs[BlockID[id]] = true;
    
    TileRenderer.setupWireModel(BlockID[id],0,0.0625 *  size     ,"et-wire");
    TileRenderer.setupWireModel(BlockID[id],1,0.0625 * (size + 1),"et-wire");
    
	Block.registerDropFunction(id,function(coords,ID,Data){
        var block = {id:ID,data:Data}
		if(block.data == 1){
            return [[ItemID[id],1,0],[171,1,15]];
        }
        return [[ItemID[id],1,0]];
    }); 
    
    // Item
	IDRegistry.genItemID(id);
	Item.createItem(id,name,texture);
    
    Item.registerUseFunction(id,function(coords,item,block){
        var place = coords;
        if(!isCanTileReplaced(block.id,block.data)){
            place = coords.relative;
            block = World.getBlock(place.x,place.y,place.z);
            if(!isCanTileReplaced(block.id,block.data)){
                return;
            }
        }
        World.setBlock(place.x,place.y,place.z,BlockID[id],0);
        Player.setCarriedItem(item.id,item.count - 1,item.data);
        EnergyTypeRegistry.onWirePlaced(place.x,place.y,place.z);
    });

    Item.registerUseFunctionForID(171,function(coords,item,block){
        if(item.data == 15 && MachineRegistry.wireIDs[block.id] && block.data == 0){
            Game.prevent();
            World.setBlock(coords.x,coords.y,coords.z,block.id,1);
            Player.setCarriedItem(item.id,item.count - 1,item.data);
        }
    });

    Callback.addCallback("DestroyBlockStart",function(coords,block){
        var item = Player.getCarriedItem();
        if(block.id == BlockID[id] && ToolRegistry.isTool(item.id,"Wrench")){
            Block.setTempDestroyTime(block.id,0);
        }
    });
}

RecipeRegistry.addWireRecipe = function(output,input){
    Recipes.addShaped(output,[" a ","aba"," a "],["a",input[0].id,input[0].data,"b",input[1].id,input[1].data]);
}

CreateRegistry.createWire("coilTin"   ,"Tin Coil"   ,{name:"tin_coil"   ,meta:0},power(1),2);
CreateRegistry.createWire("coilCopper","Copper Coil",{name:"copper_coil",meta:0},power(2),4);
CreateRegistry.createWire("coilGold"  ,"Gold Coil"  ,{name:"gold_coil"  ,meta:0},power(3),6);
CreateRegistry.createWire("coilSteel" ,"Steel Coil" ,{name:"steel_coil" ,meta:0},power(4),8);

Callback.addCallback("PreLoaded",function(){
    RecipeRegistry.addWireRecipe({id:ItemID.coilTin   ,count:1,data:0},[{id:ItemID.stickTin   ,data:0},{id:5,data:-1}]);
    RecipeRegistry.addWireRecipe({id:ItemID.coilCopper,count:1,data:0},[{id:ItemID.stickCopper,data:0},{id:5,data:-1}]);
    RecipeRegistry.addWireRecipe({id:ItemID.coilGold  ,count:1,data:0},[{id:ItemID.stickGold  ,data:0},{id:5,data:-1}]);
    RecipeRegistry.addWireRecipe({id:ItemID.coilSteel ,count:1,data:0},[{id:ItemID.stickSteel ,data:0},{id:5,data:-1}]);
});

Translation.addTranslation("Tin Coil"   ,{zh_CN:"锡线圈"});
Translation.addTranslation("Copper Coil",{zh_CN:"铜线圈"});
Translation.addTranslation("Gold Coil"  ,{zh_CN:"金线圈"});
Translation.addTranslation("Steel Coil" ,{zh_CN:"钢线圈"});