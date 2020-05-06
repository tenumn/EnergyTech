function CreateBrokenOre(name,random){
    IDRegistry.genItemID("oreChunk" + name);
    Item.createItem("oreChunk" + name,name + " Ore Chunk",{name:"chunk_" + name.toLowerCase(),meta:0});
    
    IDRegistry.genBlockID("gravel" + name);
    Block.createBlock("gravel" + name,[
        {name:name + " Ore Gravel",texture:[["gravel_" + name.toLowerCase(),0]],inCreative:true}
    ],"dust");
    ToolAPI.registerBlockMaterial(BlockID["gravel" + name],"dirt",true);

    IDRegistry.genItemID("orePiece" + name);
    Item.createItem("orePiece" + name,name + " Piece Ore",{name:"piece_" + name.toLowerCase(),meta:0});
    
    IDRegistry.genBlockID("sand" + name);
    Block.createBlock("sand" + name,[
        {name:name + " Ore Sand",texture:[[name.toLowerCase() + "_sand",0]],inCreative:true}
    ],"dust");
    ToolAPI.registerBlockMaterial(BlockID["sand" + name],"dirt",true);

    IDRegistry.genItemID("oreDust" + name);
    Item.createItem("oreDust" + name,name + " Dust Ore",{name:"dust_" + name.toLowerCase()});
    
    IDRegistry.genBlockID("dust" + name);
    Block.createBlock("dust" + name,[
        {name:name + " Ore Dust",texture:[[name.toLowerCase() + "_dust",0]],inCreative:true}
    ],"dust");
    ToolAPI.registerBlockMaterial(BlockID["dust" + name],"dirt",true);

    Callback.addCallback("PreLoaded",function(){
        Item.addCreativeGroup("chunk-1",Translation.translate("Ore Chunk"),[BlockID["gravel" + name]]);
        Item.addCreativeGroup("chunk-2",Translation.translate("Ore Chunk"),[ItemID["oreChunk" + name]]);
        Item.addCreativeGroup("piece-1",Translation.translate("Ore Piece"),[BlockID["sand" + name]]);
        Item.addCreativeGroup("piece-2",Translation.translate("Ore Piece"),[ItemID["orePiece" + name]]);
        Item.addCreativeGroup("dust-1",Translation.translate("Ore Dust"),[BlockID["dust" + name]]);
        Item.addCreativeGroup("dust-2",Translation.translate("Ore Dust"),[ItemID["oreDust" + name]]);

        if(random){
            Recipe.addAutoSaieveRecipe({id:13,data:0},[{id:ItemID["oreChunk" + name],minCount:2,maxCount:4,data:0,random:random}]);
            Recipe.addAutoSaieveRecipe({id:12,data:0},[{id:ItemID["orePiece" + name],minCount:2,maxCount:4,data:0,random:random}]);
            Recipe.addAutoSaieveRecipe({id:12,data:1},[{id:ItemID["orePiece" + name],minCount:2,maxCount:4,data:0,random:random}]);
            Recipe.addAutoSaieveRecipe({id:BlockID.dust,data:0},[{id:ItemID["oreDust" + name],minCount:2,maxCount:4,data:0,random:random}]);
        }
        
        Recipe.addCrusherRecipe({id:BlockID["gravel" + name],data:0},{id:ItemID["orePiece" + name],count:6,data:0});
        Recipe.addCrusherRecipe({id:BlockID["sand" + name],data:0},{id:ItemID["oreDust" + name],count:6,data:0});
        
        Recipes.addShaped({id:BlockID["gravel" + name],count:1,data:0},["aa","aa"],["a",ItemID["oreChunk"+ name],0]);
        Recipes.addShaped({id:BlockID["sand" + name],count:1,data:0},["aa","aa"],["a",ItemID["orePiece"+ name],0]);
        Recipes.addShaped({id:BlockID["dust" + name],count:1,data:0},["aa","aa"],["a",ItemID["oreDust" + name],0]);
        
        Tool.setHammerDestroyDrop(BlockID["gravel"+ name],ItemID["orePiece" + name],4,0,5);
        Tool.setHammerDestroyDrop(BlockID["sand" + name],ItemID["oreDust" + name],4,0,5);
    });
}

CreateBrokenOre("Copper",16);
CreateBrokenOre("Tetrahedrite",16);
CreateBrokenOre("Cassiterite",16);
CreateBrokenOre("Galena",16);
CreateBrokenOre("Iron",16);
CreateBrokenOre("Gold",16);
CreateBrokenOre("Spodumene",16);
CreateBrokenOre("Tungsten",16);
CreateBrokenOre("Uranium",16);
CreateBrokenOre("Silver",16);
CreateBrokenOre("Bauxite",16);

Callback.addCallback("PreLoaded",function(){
    Recipes.addFurnace(BlockID.gravelCopper,ItemID.ingotCopper);
    Recipes.addFurnace(BlockID.gravelTetrahedrite,ItemID.ingotCopper);
    Recipes.addFurnace(BlockID.gravelCassiterite,ItemID.ingotTin);
    Recipes.addFurnace(BlockID.gravelGalena,ItemID.ingotLead);
    Recipes.addFurnace(BlockID.gravelIron,265);
    Recipes.addFurnace(BlockID.gravelGold,266);
    Recipes.addFurnace(BlockID.gravelUranium,ItemID.ingotUranium);
    Recipes.addFurnace(BlockID.gravelSilver,ItemID.ingotSilver);
    Recipes.addFurnace(BlockID.gravelBauxite,ItemID.ingotAluminium);
    
    Recipes.addFurnace(BlockID.sandCopper,ItemID.ingotCopper);
    Recipes.addFurnace(BlockID.sandTetrahedrite,ItemID.ingotCopper);
    Recipes.addFurnace(BlockID.sandCassiterite,ItemID.ingotTin);
    Recipes.addFurnace(BlockID.sandGalena,ItemID.ingotLead);
    Recipes.addFurnace(BlockID.sandIron,265);
    Recipes.addFurnace(BlockID.sandGold,266);
    Recipes.addFurnace(BlockID.sandUranium,ItemID.ingotUranium);
    Recipes.addFurnace(BlockID.sandSilver,ItemID.ingotSilver);
    Recipes.addFurnace(BlockID.sandBauxite,ItemID.ingotAluminium);
    
    Recipes.addFurnace(BlockID.dustCopper,ItemID.ingotCopper);
    Recipes.addFurnace(BlockID.dustTetrahedrite,ItemID.ingotCopper);
    Recipes.addFurnace(BlockID.dustCassiterite,ItemID.ingotTin);
    Recipes.addFurnace(BlockID.dustGalena,ItemID.ingotLead);
    Recipes.addFurnace(BlockID.dustIron,265);
    Recipes.addFurnace(BlockID.dustGold,266);
    Recipes.addFurnace(BlockID.dustUranium,ItemID.ingotUranium);
    Recipes.addFurnace(BlockID.dustSilver,ItemID.ingotSilver);
    Recipes.addFurnace(BlockID.dustBauxite,ItemID.ingotAluminium);

    Recipe.addCrusherRecipe({id:BlockID.oreCopper,data:0},{id:ItemID.oreChunkCopper,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreTetrahedrite,data:0},{id:ItemID.oreChunkTetrahedrite,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreCassiterite,data:0},{id:ItemID.oreChunkCassiterite,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreGalena,data:0},{id:ItemID.oreChunkGalena,count:6,data:0});
    Recipe.addCrusherRecipe({id:15,data:0},{id:ItemID.oreChunkIron,count:6,data:0});
    Recipe.addCrusherRecipe({id:14,data:0},{id:ItemID.oreChunkGold,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreSpodumene,data:0},{id:ItemID.oreChunkSpodumene,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreTungsten,data:0},{id:ItemID.oreChunkTungsten,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreUranium,data:0},{id:ItemID.oreChunkUranium,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreSilver,data:0},{id:ItemID.oreChunkSilver,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreBauxite,data:0},{id:ItemID.oreChunkBauxite,count:6,data:0});

    Recipe.addOreWasherRecipe({id:BlockID.gravelSpodumene,data:0},[{id:ItemID.dustLithium,count:1,data:0},{id:ItemID.dustSmallLithium,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    Recipe.addOreWasherRecipe({id:BlockID.sandSpodumene,data:0},[{id:ItemID.dustLithium,count:1,data:0},{id:ItemID.dustSmallLithium,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    Recipe.addOreWasherRecipe({id:BlockID.dustSpodumene,data:0},[{id:ItemID.dustLithium,count:1,data:0},{id:ItemID.dustSmallLithium,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);

    Recipe.addBlastFurnaceRecipe({id:BlockID.gravelTungsten,data:0},[{id:ItemID.ingotTungsten,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
    Recipe.addBlastFurnaceRecipe({id:BlockID.sandTungsten,data:0},[{id:ItemID.ingotTungsten,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
    Recipe.addBlastFurnaceRecipe({id:BlockID.dustTungsten,data:0},[{id:ItemID.ingotTungsten,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
});