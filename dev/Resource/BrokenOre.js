function CreateBrokenOre(name,random){
    // oreChunk
    IDRegistry.genItemID("oreChunk" + name);
    Item.createItem("oreChunk" + name,name + " Ore Chunk",{name:"oreChunk" + name,meta:0});
    
    IDRegistry.genBlockID("gravel" + name);
    Block.createBlock("gravel" + name,[
        {name:name + " Ore Gravel",texture:[["gravel" + name,0]],inCreative:true}
    ],"gravel");
    ToolAPI.registerBlockMaterial(BlockID["gravel" + name],"dirt");
    Block.setDestroyTime(BlockID["gravel" + name],1);

    // oreChunkNether
    IDRegistry.genItemID("oreChunkNether" + name);
    Item.createItem("oreChunkNether" + name,"Nether " + name + " Ore Chunk",{name:"oreChunkNether" + name,meta:0});
    
    IDRegistry.genBlockID("gravelNether" + name);
    Block.createBlock("gravelNether" + name,[
        {name:"Nether " + name + " Ore Gravel",texture:[["gravelNether" + name,0]],inCreative:true}
    ],"gravel");
    ToolAPI.registerBlockMaterial(BlockID["gravelNether" + name],"dirt");
    Block.setDestroyTime(BlockID["gravelNether" + name],1);

    // oreChunkEnder
    IDRegistry.genItemID("oreChunkEnder" + name);
    Item.createItem("oreChunkEnder" + name,"Ender " + name + " Ore Chunk",{name:"oreChunkEnder" + name,meta:0});
    
    IDRegistry.genBlockID("gravelEnder" + name);
    Block.createBlock("gravelEnder" + name,[
        {name:"Ender " + name + " Ore Gravel",texture:[["gravelEnder" + name,0]],inCreative:true}
    ],"gravel");
    ToolAPI.registerBlockMaterial(BlockID["gravelEnder" + name],"dirt");
    Block.setDestroyTime(BlockID["gravelEnder" + name],1);
    
    // orePiece
    IDRegistry.genItemID("orePiece" + name);
    Item.createItem("orePiece" + name,name + " Piece Ore",{name:"orePiece" + name,meta:0});
    
    IDRegistry.genBlockID("sand" + name);
    Block.createBlock("sand" + name,[
        {name:name + " Ore Sand",texture:[["sand" + name,0]],inCreative:true}
    ],"sand");
    ToolAPI.registerBlockMaterial(BlockID["sand" + name],"dirt");
    Block.setDestroyTime(BlockID["sand" + name],1);

    // oreDust
    IDRegistry.genItemID("oreDust" + name);
    Item.createItem("oreDust" + name,name + " Dust Ore",{name:"oreDust" + name});
    
    IDRegistry.genBlockID("dust" + name);
    Block.createBlock("dust" + name,[
        {name:name + " Ore Dust",texture:[["dust" + name,0]],inCreative:true}
    ],"dust");
    ToolAPI.registerBlockMaterial(BlockID["dust" + name],"dirt");
    Block.setDestroyTime(BlockID["dust" + name],1);

    Callback.addCallback("PreLoaded",function(){
        // 自动筛子
        if(random){
            Recipe.addAutoSaieveRecipe({id:13          ,data:0},[{id:ItemID["oreChunk" + name],minCount:2,maxCount:4,data:0,random:random}]);
            Recipe.addAutoSaieveRecipe({id:12          ,data:0},[{id:ItemID["orePiece" + name],minCount:2,maxCount:4,data:0,random:random}]);
            Recipe.addAutoSaieveRecipe({id:12          ,data:1},[{id:ItemID["orePiece" + name],minCount:2,maxCount:4,data:0,random:random}]);
            Recipe.addAutoSaieveRecipe({id:BlockID.dust,data:0},[{id:ItemID["oreDust"  + name],minCount:2,maxCount:4,data:0,random:random}]);
        }
        
        // 破碎机
        Recipe.addCrusherRecipe({id:BlockID["gravel"       + name],data:0},{id:ItemID["orePiece" + name],count:6,data:0});
        Recipe.addCrusherRecipe({id:BlockID["gravelNether" + name],data:0},{id:ItemID["orePiece" + name],count:6,data:0});
        Recipe.addCrusherRecipe({id:BlockID["gravelEnder"  + name],data:0},{id:ItemID["orePiece" + name],count:6,data:0});
        Recipe.addCrusherRecipe({id:BlockID["sand"         + name],data:0},{id:ItemID["oreDust"  + name],count:6,data:0});
        
        // 合成
        Recipes.addShaped({id:BlockID["gravel"       + name],count:1,data:0},["aa","aa"],["a",ItemID["oreChunk"       + name],0]);
        Recipes.addShaped({id:BlockID["gravelNether" + name],count:1,data:0},["aa","aa"],["a",ItemID["oreChunkNether" + name],0]);
        Recipes.addShaped({id:BlockID["gravelEnder"  + name],count:1,data:0},["aa","aa"],["a",ItemID["oreChunkEnder"  + name],0]);
        Recipes.addShaped({id:BlockID["sand"         + name],count:1,data:0},["aa","aa"],["a",ItemID["orePiece"       + name],0]);
        Recipes.addShaped({id:BlockID["dust"         + name],count:1,data:0},["aa","aa"],["a",ItemID["oreDust"        + name],0]);
        
        // 锤子
        Tool.setHammerDestroyDrop(BlockID["gravel"       + name],ItemID["orePiece" + name],4,0,true);
        Tool.setHammerDestroyDrop(BlockID["gravelNether" + name],ItemID["orePiece" + name],4,0,true);
        Tool.setHammerDestroyDrop(BlockID["gravelEnder"  + name],ItemID["orePiece" + name],4,0,true);
        Tool.setHammerDestroyDrop(BlockID["sand"         + name],ItemID["oreDust"  + name],4,0,true);
    });
}

CreateBrokenOre("Copper"      ,16);
CreateBrokenOre("Tetrahedrite",16);
CreateBrokenOre("Tin"         ,16);
CreateBrokenOre("Lead"        ,16);
CreateBrokenOre("Iron"        ,16);
CreateBrokenOre("Gold"        ,16);
CreateBrokenOre("Lithium"     ,16);
CreateBrokenOre("Tungsten"    ,16);
CreateBrokenOre("Antimony"    ,16);
CreateBrokenOre("Uranium"     ,16);
CreateBrokenOre("Silver"      ,16);
CreateBrokenOre("Aluminium"   ,16);

Callback.addCallback("PreLoaded",function(){
    // 组
    Item.addCreativeGroup("ET-OreChunk-1",Translation.translate("Ore Chunk"),[
        BlockID.gravelCopper      ,
        BlockID.gravelTetrahedrite,
        BlockID.gravelTin         ,
        BlockID.gravelLead        ,
        BlockID.gravelIron        ,
        BlockID.gravelGold        ,
        BlockID.gravelLithium     ,
        BlockID.gravelTungsten    ,
        BlockID.gravelAntimony    ,
        BlockID.gravelUranium     ,
        BlockID.gravelSilver      ,
        BlockID.gravelAluminium   
    ]);

    Item.addCreativeGroup("ET-OreChunk-2",Translation.translate("Ore Chunk"),[
        ItemID.oreChunkCopper      ,
        ItemID.oreChunkTetrahedrite,
        ItemID.oreChunkTin         ,
        ItemID.oreChunkLead        ,
        ItemID.oreChunkIron        ,
        ItemID.oreChunkGold        ,
        ItemID.oreChunkLithium     ,
        ItemID.oreChunkTungsten    ,
        ItemID.oreChunkAntimony    ,
        ItemID.oreChunkUranium     ,
        ItemID.oreChunkSilver      ,
        ItemID.oreChunkAluminium   
    ]);

    Item.addCreativeGroup("ET-NetherOreChunk-1",Translation.translate("Nether Ore Chunk"),[
        BlockID.gravelNetherCopper      ,
        BlockID.gravelNetherTetrahedrite,
        BlockID.gravelNetherTin         ,
        BlockID.gravelNetherLead        ,
        BlockID.gravelNetherIron        ,
        BlockID.gravelNetherGold        ,
        BlockID.gravelNetherLithium     ,
        BlockID.gravelNetherTungsten    ,
        BlockID.gravelNetherAntimony    ,
        BlockID.gravelNetherUranium     ,
        BlockID.gravelNetherSilver      ,
        BlockID.gravelNetherAluminium   
    ]);

    Item.addCreativeGroup("ET-NetherOreChunk-2",Translation.translate("Nether Ore Chunk"),[
        ItemID.oreChunkNetherCopper      ,
        ItemID.oreChunkNetherTetrahedrite,
        ItemID.oreChunkNetherTin         ,
        ItemID.oreChunkNetherLead        ,
        ItemID.oreChunkNetherIron        ,
        ItemID.oreChunkNetherGold        ,
        ItemID.oreChunkNetherLithium     ,
        ItemID.oreChunkNetherTungsten    ,
        ItemID.oreChunkNetherAntimony    ,
        ItemID.oreChunkNetherUranium     ,
        ItemID.oreChunkNetherSilver      ,
        ItemID.oreChunkNetherAluminium   
    ]);

    Item.addCreativeGroup("ET-EnderOreChunk-1",Translation.translate("Ender Ore Chunk"),[
        BlockID.gravelEnderCopper      ,
        BlockID.gravelEnderTetrahedrite,
        BlockID.gravelEnderTin         ,
        BlockID.gravelEnderLead        ,
        BlockID.gravelEnderIron        ,
        BlockID.gravelEnderGold        ,
        BlockID.gravelEnderLithium     ,
        BlockID.gravelEnderTungsten    ,
        BlockID.gravelEnderAntimony    ,
        BlockID.gravelEnderUranium     ,
        BlockID.gravelEnderSilver      ,
        BlockID.gravelEnderAluminium   
    ]);

    Item.addCreativeGroup("ET-EnderOreChunk-2",Translation.translate("Ender Ore Chunk"),[
        ItemID.oreChunkEnderCopper      ,
        ItemID.oreChunkEnderTetrahedrite,
        ItemID.oreChunkEnderTin         ,
        ItemID.oreChunkEnderLead        ,
        ItemID.oreChunkEnderIron        ,
        ItemID.oreChunkEnderGold        ,
        ItemID.oreChunkEnderLithium     ,
        ItemID.oreChunkEnderTungsten    ,
        ItemID.oreChunkEnderAntimony    ,
        ItemID.oreChunkEnderUranium     ,
        ItemID.oreChunkEnderSilver      ,
        ItemID.oreChunkEnderAluminium   ,
    ]);

    Item.addCreativeGroup("ET-OrePiece-1",Translation.translate("Ore Piece"),[
        BlockID.sandCopper      ,
        BlockID.sandTetrahedrite,
        BlockID.sandTin         ,
        BlockID.sandLead        ,
        BlockID.sandIron        ,
        BlockID.sandGold        ,
        BlockID.sandLithium     ,
        BlockID.sandTungsten    ,
        BlockID.sandAntimony    ,
        BlockID.sandUranium     ,
        BlockID.sandSilver      ,
        BlockID.sandAluminium   
    ]);

    Item.addCreativeGroup("ET-OrePiece-2",Translation.translate("Ore Piece"),[
        ItemID.orePieceCopper      ,
        ItemID.orePieceTetrahedrite,
        ItemID.orePieceTin         ,
        ItemID.orePieceLead        ,
        ItemID.orePieceIron        ,
        ItemID.orePieceGold        ,
        ItemID.orePieceLithium     ,
        ItemID.orePieceTungsten    ,
        ItemID.orePieceAntimony    ,
        ItemID.orePieceUranium     ,
        ItemID.orePieceSilver      ,
        ItemID.orePieceAluminium   
    ]);

    Item.addCreativeGroup("ET-OreDust-1",Translation.translate("Ore Dust"),[
        BlockID.dustCopper      ,
        BlockID.dustTetrahedrite,
        BlockID.dustTin         ,
        BlockID.dustLead        ,
        BlockID.dustIron        ,
        BlockID.dustGold        ,
        BlockID.dustLithium     ,
        BlockID.dustTungsten    ,
        BlockID.dustAntimony    ,
        BlockID.dustUranium     ,
        BlockID.dustSilver      ,
        BlockID.dustAluminium   
    ]);

    Item.addCreativeGroup("ET-OreDust-2",Translation.translate("Ore Dust"),[
        ItemID.oreDustCopper      ,
        ItemID.oreDustTetrahedrite,
        ItemID.oreDustTin         ,
        ItemID.oreDustLead        ,
        ItemID.oreDustIron        ,
        ItemID.oreDustGold        ,
        ItemID.oreDustLithium     ,
        ItemID.oreDustTungsten    ,
        ItemID.oreDustAntimony    ,
        ItemID.oreDustUranium     ,
        ItemID.oreDustSilver      ,
        ItemID.oreDustAluminium   
    ]);

    // 熔炉
    Recipes.addFurnace(BlockID.gravelCopper      ,ItemID.ingotCopper      );
    Recipes.addFurnace(BlockID.gravelTetrahedrite,ItemID.ingotTetrahedrite);
    Recipes.addFurnace(BlockID.gravelTin         ,ItemID.ingotTin         );
    Recipes.addFurnace(BlockID.gravelLead        ,ItemID.ingotLead        );
    Recipes.addFurnace(BlockID.gravelIron        ,265                     );
    Recipes.addFurnace(BlockID.gravelGold        ,266                     );
    Recipes.addFurnace(BlockID.gravelLithium     ,ItemID.ingotLithium     );
    Recipes.addFurnace(BlockID.gravelAntimony    ,ItemID.ingotAntimony    );
    Recipes.addFurnace(BlockID.gravelUranium     ,ItemID.ingotUranium     );
    Recipes.addFurnace(BlockID.gravelSilver      ,ItemID.ingotSilver      );
    Recipes.addFurnace(BlockID.gravelAluminium   ,ItemID.ingotAluminium   );
    
    Recipes.addFurnace(BlockID.gravelNetherCopper      ,ItemID.ingotCopper      );
    Recipes.addFurnace(BlockID.gravelNetherTetrahedrite,ItemID.ingotTetrahedrite);
    Recipes.addFurnace(BlockID.gravelNetherTin         ,ItemID.ingotTin         );
    Recipes.addFurnace(BlockID.gravelNetherLead        ,ItemID.ingotLead        );
    Recipes.addFurnace(BlockID.gravelNetherIron        ,265                     );
    Recipes.addFurnace(BlockID.gravelNetherGold        ,266                     );
    Recipes.addFurnace(BlockID.gravelNetherLithium     ,ItemID.ingotLithium     );
    Recipes.addFurnace(BlockID.gravelNetherAntimony    ,ItemID.ingotAntimony    );
    Recipes.addFurnace(BlockID.gravelNetherUranium     ,ItemID.ingotUranium     );
    Recipes.addFurnace(BlockID.gravelNetherSilver      ,ItemID.ingotSilver      );
    Recipes.addFurnace(BlockID.gravelNetherAluminium   ,ItemID.ingotAluminium   );
    
    Recipes.addFurnace(BlockID.gravelEnderCopper      ,ItemID.ingotCopper      );
    Recipes.addFurnace(BlockID.gravelEnderTetrahedrite,ItemID.ingotTetrahedrite);
    Recipes.addFurnace(BlockID.gravelEnderTin         ,ItemID.ingotTin         );
    Recipes.addFurnace(BlockID.gravelEnderLead        ,ItemID.ingotLead        );
    Recipes.addFurnace(BlockID.gravelEnderIron        ,265                     );
    Recipes.addFurnace(BlockID.gravelEnderGold        ,266                     );
    Recipes.addFurnace(BlockID.gravelEnderLithium     ,ItemID.ingotLithium     );
    Recipes.addFurnace(BlockID.gravelEnderAntimony    ,ItemID.ingotAntimony    );
    Recipes.addFurnace(BlockID.gravelEnderUranium     ,ItemID.ingotUranium     );
    Recipes.addFurnace(BlockID.gravelEnderSilver      ,ItemID.ingotSilver      );
    Recipes.addFurnace(BlockID.gravelEnderAluminium   ,ItemID.ingotAluminium   );
    
    Recipes.addFurnace(BlockID.sandCopper      ,ItemID.ingotCopper      );
    Recipes.addFurnace(BlockID.sandTetrahedrite,ItemID.ingotTetrahedrite);
    Recipes.addFurnace(BlockID.sandTin         ,ItemID.ingotTin         );
    Recipes.addFurnace(BlockID.sandLead        ,ItemID.ingotLead        );
    Recipes.addFurnace(BlockID.sandIron        ,265                     );
    Recipes.addFurnace(BlockID.sandGold        ,266                     );
    Recipes.addFurnace(BlockID.sandLithium     ,ItemID.ingotLithium     );
    Recipes.addFurnace(BlockID.sandAntimony    ,ItemID.ingotAntimony    );
    Recipes.addFurnace(BlockID.sandUranium     ,ItemID.ingotUranium     );
    Recipes.addFurnace(BlockID.sandSilver      ,ItemID.ingotSilver      );
    Recipes.addFurnace(BlockID.sandAluminium   ,ItemID.ingotAluminium   );
    
    Recipes.addFurnace(BlockID.dustCopper      ,ItemID.ingotCopper      );
    Recipes.addFurnace(BlockID.dustTetrahedrite,ItemID.ingotTetrahedrite);
    Recipes.addFurnace(BlockID.dustTin         ,ItemID.ingotTin         );
    Recipes.addFurnace(BlockID.dustLead        ,ItemID.ingotLead        );
    Recipes.addFurnace(BlockID.dustIron        ,265                     );
    Recipes.addFurnace(BlockID.dustGold        ,266                     );
    Recipes.addFurnace(BlockID.dustLithium     ,ItemID.ingotLithium     );
    Recipes.addFurnace(BlockID.dustAntimony    ,ItemID.ingotAntimony    );
    Recipes.addFurnace(BlockID.dustUranium     ,ItemID.ingotUranium     );
    Recipes.addFurnace(BlockID.dustSilver      ,ItemID.ingotSilver      );
    Recipes.addFurnace(BlockID.dustAluminium   ,ItemID.ingotAluminium   );

    // 高炉
    Recipe.addBlastFurnaceRecipe({id:BlockID.gravelTungsten      ,data:0},[{id:ItemID.ingotTungsten,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
    Recipe.addBlastFurnaceRecipe({id:BlockID.gravelNetherTungsten,data:0},[{id:ItemID.ingotTungsten,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
    Recipe.addBlastFurnaceRecipe({id:BlockID.gravelEnderTungsten ,data:0},[{id:ItemID.ingotTungsten,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
    Recipe.addBlastFurnaceRecipe({id:BlockID.sandTungsten        ,data:0},[{id:ItemID.ingotTungsten,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
    Recipe.addBlastFurnaceRecipe({id:BlockID.dustTungsten        ,data:0},[{id:ItemID.ingotTungsten,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);

    // 破碎机
    Recipe.addCrusherRecipe({id:BlockID.oreCopper      ,data:0},{id:ItemID.oreChunkCopper      ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreTetrahedrite,data:0},{id:ItemID.oreChunkTetrahedrite,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreTin         ,data:0},{id:ItemID.oreChunkTin         ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreLead        ,data:0},{id:ItemID.oreChunkLead        ,count:6,data:0});
    Recipe.addCrusherRecipe({id:15                     ,data:0},{id:ItemID.oreChunkIron        ,count:6,data:0});
    Recipe.addCrusherRecipe({id:14                     ,data:0},{id:ItemID.oreChunkGold        ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreLithium     ,data:0},{id:ItemID.oreChunkLithium     ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreTungsten    ,data:0},{id:ItemID.oreChunkTungsten    ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreAntimony    ,data:0},{id:ItemID.oreChunkAntimony    ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreUranium     ,data:0},{id:ItemID.oreChunkUranium     ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreSilver      ,data:0},{id:ItemID.oreChunkSilver      ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreAluminium   ,data:0},{id:ItemID.oreChunkAluminium   ,count:6,data:0});

    Recipe.addCrusherRecipe({id:BlockID.oreNetherCopper      ,data:0},{id:ItemID.oreChunkNetherCopper      ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreNetherTetrahedrite,data:0},{id:ItemID.oreChunkNetherTetrahedrite,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreNetherTin         ,data:0},{id:ItemID.oreChunkNetherTin         ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreNetherLead        ,data:0},{id:ItemID.oreChunkNetherLead        ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreNetherIron        ,data:0},{id:ItemID.oreChunkNetherIron        ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreNetherGold        ,data:0},{id:ItemID.oreChunkNetherGold        ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreNetherLithium     ,data:0},{id:ItemID.oreChunkNetherLithium     ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreNetherTungsten    ,data:0},{id:ItemID.oreChunkNetherTungsten    ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreNetherAntimony    ,data:0},{id:ItemID.oreChunkNetherAntimony    ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreNetherUranium     ,data:0},{id:ItemID.oreChunkNetherUranium     ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreNetherSilver      ,data:0},{id:ItemID.oreChunkNetherSilver      ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreNetherAluminium   ,data:0},{id:ItemID.oreChunkNetherAluminium   ,count:6,data:0});

    Recipe.addCrusherRecipe({id:BlockID.oreEnderCopper      ,data:0},{id:ItemID.oreChunkCopper      ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreEnderTetrahedrite,data:0},{id:ItemID.oreChunkTetrahedrite,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreEnderTin         ,data:0},{id:ItemID.oreChunkTin         ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreEnderLead        ,data:0},{id:ItemID.oreChunkLead        ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreEnderIron        ,data:0},{id:ItemID.oreChunkIron        ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreEnderGold        ,data:0},{id:ItemID.oreChunkGold        ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreEnderLithium     ,data:0},{id:ItemID.oreChunkLithium     ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreEnderTungsten    ,data:0},{id:ItemID.oreChunkTungsten    ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreEnderAntimony    ,data:0},{id:ItemID.oreChunkAntimony    ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreEnderUranium     ,data:0},{id:ItemID.oreChunkUranium     ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreEnderSilver      ,data:0},{id:ItemID.oreChunkSilver      ,count:6,data:0});
    Recipe.addCrusherRecipe({id:BlockID.oreEnderAluminium   ,data:0},{id:ItemID.oreChunkAluminium   ,count:6,data:0});
});