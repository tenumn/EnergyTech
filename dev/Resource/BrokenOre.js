function CreateBrokenOre(name){
    // oreChunk
    IDRegistry.genItemID("oreChunk" + name);
    Item.createItem("oreChunk" + name,name + " Ore Chunk",{name:"oreChunk" + name,meta:0});
    
    IDRegistry.genBlockID("gravel" + name);
    Block.createBlock("gravel" + name,[
        {name:name + " Ore Gravel",texture:[["gravel" + name,0]],inCreative:true}
    ],"gravel");
    ToolAPI.registerBlockMaterial(BlockID["gravel" + name],"dirt");
    Block.setDestroyTime(BlockID["gravel" + name],3);

    // oreChunkNether
    IDRegistry.genItemID("oreChunkNether" + name);
    Item.createItem("oreChunkNether" + name,"Nether " + name + " Ore Chunk",{name:"oreChunkNether" + name,meta:0});
    
    IDRegistry.genBlockID("gravelNether" + name);
    Block.createBlock("gravelNether" + name,[
        {name:"Nether " + name + " Ore Gravel",texture:[["gravelNether" + name,0]],inCreative:true}
    ],"gravel");
    ToolAPI.registerBlockMaterial(BlockID["gravelNether" + name],"dirt");
    Block.setDestroyTime(BlockID["gravelNether" + name],3);

    // oreChunkEnder
    IDRegistry.genItemID("oreChunkEnder" + name);
    Item.createItem("oreChunkEnder" + name,"Ender " + name + " Ore Chunk",{name:"oreChunkEnder" + name,meta:0});
    
    IDRegistry.genBlockID("gravelEnder" + name);
    Block.createBlock("gravelEnder" + name,[
        {name:"Ender " + name + " Ore Gravel",texture:[["gravelEnder" + name,0]],inCreative:true}
    ],"gravel");
    ToolAPI.registerBlockMaterial(BlockID["gravelEnder" + name],"dirt");
    Block.setDestroyTime(BlockID["gravelEnder" + name],3);
    
    // orePiece
    IDRegistry.genItemID("orePiece" + name);
    Item.createItem("orePiece" + name,name + " Piece Ore",{name:"orePiece" + name,meta:0});
    
    IDRegistry.genBlockID("sand" + name);
    Block.createBlock("sand" + name,[
        {name:name + " Ore Sand",texture:[["sand" + name,0]],inCreative:true}
    ],"sand");
    ToolAPI.registerBlockMaterial(BlockID["sand" + name],"dirt");
    Block.setDestroyTime(BlockID["sand" + name],3);

    // oreDust
    IDRegistry.genItemID("oreDust" + name);
    Item.createItem("oreDust" + name,name + " Dust Ore",{name:"oreDust" + name});
    
    IDRegistry.genBlockID("dust" + name);
    Block.createBlock("dust" + name,[
        {name:name + " Ore Dust",texture:[["dust" + name,0]],inCreative:true}
    ],"dust");
    ToolAPI.registerBlockMaterial(BlockID["dust" + name],"dirt");
    Block.setDestroyTime(BlockID["dust" + name],3);

    Callback.addCallback("PreLoaded",function(){
        // 破碎机
        ETRecipe.addCrusherRecipe({id:BlockID["gravel"       + name],data:0},{id:ItemID["orePiece" + name],count:6,data:0});
        ETRecipe.addCrusherRecipe({id:BlockID["gravelNether" + name],data:0},{id:ItemID["orePiece" + name],count:6,data:0});
        ETRecipe.addCrusherRecipe({id:BlockID["gravelEnder"  + name],data:0},{id:ItemID["orePiece" + name],count:6,data:0});
        ETRecipe.addCrusherRecipe({id:BlockID["sand"         + name],data:0},{id:ItemID["oreDust"  + name],count:6,data:0});
        
        // 合成
        Recipes.addShaped({id:BlockID["gravel"       + name],count:1,data:0},["aa","aa"],["a",ItemID["oreChunk"       + name],0]);
        Recipes.addShaped({id:BlockID["gravelNether" + name],count:1,data:0},["aa","aa"],["a",ItemID["oreChunkNether" + name],0]);
        Recipes.addShaped({id:BlockID["gravelEnder"  + name],count:1,data:0},["aa","aa"],["a",ItemID["oreChunkEnder"  + name],0]);
        Recipes.addShaped({id:BlockID["sand"         + name],count:1,data:0},["aa","aa"],["a",ItemID["orePiece"       + name],0]);
        Recipes.addShaped({id:BlockID["dust"         + name],count:1,data:0},["aa","aa"],["a",ItemID["oreDust"        + name],0]);
        
        // 锤子
        ETTool.setHammerDestroyDrop(BlockID["gravel"       + name],ItemID["orePiece" + name],4,0,true);
        ETTool.setHammerDestroyDrop(BlockID["gravelNether" + name],ItemID["orePiece" + name],4,0,true);
        ETTool.setHammerDestroyDrop(BlockID["gravelEnder"  + name],ItemID["orePiece" + name],4,0,true);
        ETTool.setHammerDestroyDrop(BlockID["sand"         + name],ItemID["oreDust"  + name],4,0,true);
    });
}

CreateBrokenOre("Copper"      );
CreateBrokenOre("Tetrahedrite");
CreateBrokenOre("Tin"         );
CreateBrokenOre("Lead"        );
CreateBrokenOre("Iron"        );
CreateBrokenOre("Gold"        );
CreateBrokenOre("Lithium"     );
CreateBrokenOre("Tungsten"    );
CreateBrokenOre("Antimony"    );
CreateBrokenOre("Uranium"     );
CreateBrokenOre("Silver"      );
CreateBrokenOre("Aluminium"   );

Callback.addCallback("PreLoaded",function(){
    // 熔炉
    Recipes.addFurnace(BlockID.gravelCopper      ,ItemID.ingotCopper      );
    Recipes.addFurnace(BlockID.gravelTetrahedrite,ItemID.ingotTetrahedrite);
    Recipes.addFurnace(BlockID.gravelTin         ,ItemID.ingotTin         );
    Recipes.addFurnace(BlockID.gravelLead        ,ItemID.ingotLead        );
    Recipes.addFurnace(BlockID.gravelIron        ,265                     );
    Recipes.addFurnace(BlockID.gravelGold        ,266                     );
    Recipes.addFurnace(BlockID.gravelLithium     ,ItemID.ingotLithium     );
    Recipes.addFurnace(BlockID.gravelTungsten    ,ItemID.dustCarbon       );
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
    Recipes.addFurnace(BlockID.gravelNetherTungsten    ,ItemID.ingotTungsten    );
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
    Recipes.addFurnace(BlockID.gravelEnderTungsten    ,ItemID.ingotTungsten    );
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
    Recipes.addFurnace(BlockID.sandTungsten    ,ItemID.ingotTungsten    );
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
    Recipes.addFurnace(BlockID.dustTungsten    ,ItemID.ingotTungsten    );
    Recipes.addFurnace(BlockID.dustAntimony    ,ItemID.ingotAntimony    );
    Recipes.addFurnace(BlockID.dustUranium     ,ItemID.ingotUranium     );
    Recipes.addFurnace(BlockID.dustSilver      ,ItemID.ingotSilver      );
    Recipes.addFurnace(BlockID.dustAluminium   ,ItemID.ingotAluminium   );

    // 破碎机
    ETRecipe.addCrusherRecipe({id:BlockID.oreCopper      ,data:0},{id:ItemID.gravelCopper      ,count:2,data:0});
    ETRecipe.addCrusherRecipe({id:BlockID.oreTetrahedrite,data:0},{id:ItemID.gravelTetrahedrite,count:2,data:0});
    ETRecipe.addCrusherRecipe({id:BlockID.oreTin         ,data:0},{id:ItemID.gravelTin         ,count:2,data:0});
    ETRecipe.addCrusherRecipe({id:BlockID.oreLead        ,data:0},{id:ItemID.gravelLead        ,count:2,data:0});
    ETRecipe.addCrusherRecipe({id:15                     ,data:0},{id:ItemID.gravelIron        ,count:2,data:0});
    ETRecipe.addCrusherRecipe({id:14                     ,data:0},{id:ItemID.gravelGold        ,count:2,data:0});
    ETRecipe.addCrusherRecipe({id:BlockID.oreLithium     ,data:0},{id:ItemID.gravelLithium     ,count:2,data:0});
    ETRecipe.addCrusherRecipe({id:BlockID.oreTungsten    ,data:0},{id:ItemID.gravelTungsten    ,count:2,data:0});
    ETRecipe.addCrusherRecipe({id:BlockID.oreAntimony    ,data:0},{id:ItemID.gravelAntimony    ,count:2,data:0});
    ETRecipe.addCrusherRecipe({id:BlockID.oreUranium     ,data:0},{id:ItemID.gravelUranium     ,count:2,data:0});
    ETRecipe.addCrusherRecipe({id:BlockID.oreSilver      ,data:0},{id:ItemID.gravelSilver      ,count:2,data:0});
    ETRecipe.addCrusherRecipe({id:BlockID.oreAluminium   ,data:0},{id:ItemID.gravelAluminium   ,count:2,data:0});
});