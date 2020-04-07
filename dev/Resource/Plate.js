function CreatePlate(uid,name,texture,data){
    IDRegistry.genItemID(uid);
    Item.createItem(uid,name,texture,data);
    Item.addCreativeGroup("ET-Plate",Translation.translate("Plate"),[ItemID[uid]]);
}

CreatePlate("plateCopper"      ,"Copper Plate"             ,{name:"plateCopper"      });
CreatePlate("plateTin"         ,"Tin Plate"                ,{name:"plateTin"         });
CreatePlate("plateIron"        ,"Iron Plate"               ,{name:"plateIron"        });
CreatePlate("plateSteel"       ,"Steel Plate"              ,{name:"plateSteel"       });
CreatePlate("plateGold"        ,"Gold Plate"               ,{name:"plateGold"        });
CreatePlate("plateCarbon"      ,"Carbon Plate"             ,{name:"plateCarbon"      });
CreatePlate("plateTungsten"    ,"Tungsten Plate"           ,{name:"plateTungsten"    });
CreatePlate("plateLapis"       ,"Lapis Plate"              ,{name:"plateLapis"       });
CreatePlate("plateLead"        ,"Lead Plate"               ,{name:"plateLead"        });
CreatePlate("plateAluminium"   ,"Aluminium Plate"          ,{name:"plateAluminium"   });
CreatePlate("plateAntimony"    ,"Antimony Plate"           ,{name:"plateAntimony"    });
CreatePlate("plateDiamond"     ,"Diamond Plate"            ,{name:"plateDiamond"     });
CreatePlate("plateRedstone"    ,"Redstone Plate"           ,{name:"plateRedstone"    });
CreatePlate("plateSherlock"    ,"Sherlock Alloy Plate"     ,{name:"plateSherlock"    });
CreatePlate("plateLeadAntimony","Lead-Antimony Alloy Plate",{name:"plateLeadAntimony"});
CreatePlate("plateCircuit"     ,"Circuit Plate"            ,{name:"plateCircuit"     });
CreatePlate("platePlastic"     ,"Plastic Plate"            ,{name:"platePlastic"     });

Callback.addCallback("PreLoaded",function(){
    // 熔炉
    Recipes.addFurnace(ItemID.resin,ItemID.platePlastic);

    // 压缩机
    Recipe.addCompressorRecipe({id:ItemID.ingotCopper      ,data:0},{id:ItemID.plateCopper      ,count:1,data:0});
    Recipe.addCompressorRecipe({id:ItemID.ingotTin         ,data:0},{id:ItemID.plateTin         ,count:1,data:0});
    Recipe.addCompressorRecipe({id:265                     ,data:0},{id:ItemID.plateIron        ,count:1,data:0});
    Recipe.addCompressorRecipe({id:ItemID.ingotSteel       ,data:0},{id:ItemID.plateSteel       ,count:1,data:0});
    Recipe.addCompressorRecipe({id:266                     ,data:0},{id:ItemID.plateGold        ,count:1,data:0});
    Recipe.addCompressorRecipe({id:ItemID.dustCarbon       ,data:0},{id:ItemID.plateCarbon      ,count:1,data:0});
    Recipe.addCompressorRecipe({id:ItemID.ingotTungsten    ,data:0},{id:ItemID.plateTungsten    ,count:1,data:0});
    Recipe.addCompressorRecipe({id:351                     ,data:4},{id:ItemID.plateLapis       ,count:1,data:0});
    Recipe.addCompressorRecipe({id:ItemID.ingotLead        ,data:0},{id:ItemID.plateLead        ,count:1,data:0});
    Recipe.addCompressorRecipe({id:ItemID.ingotAluminium   ,data:0},{id:ItemID.plateAluminium   ,count:1,data:0});
    Recipe.addCompressorRecipe({id:ItemID.ingotLeadAntimony,data:0},{id:ItemID.plateLeadAntimony,count:1,data:0});
    Recipe.addCompressorRecipe({id:ItemID.ingotAntimony    ,data:0},{id:ItemID.plateAntimony    ,count:1,data:0});
    Recipe.addCompressorRecipe({id:264                     ,data:0},{id:ItemID.plateDiamond     ,count:1,data:0});
    Recipe.addCompressorRecipe({id:ItemID.ingotRedstone    ,data:0},{id:ItemID.plateRedstone    ,count:1,data:0});

    // 合成
    var hammer = Tool.getAllTool("Hammer");
    for(var i in hammer){
        Recipe.addShapeless({id:ItemID.plateCopper      ,count:1,data:0},[{id:ItemID.ingotCopper      ,data:0},{id:ItemID.ingotCopper       ,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateTin         ,count:1,data:0},[{id:ItemID.ingotTin         ,data:0},{id:ItemID.ingotTin          ,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateIron        ,count:1,data:0},[{id:265                     ,data:0},{id:265                      ,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateSteel       ,count:1,data:0},[{id:ItemID.ingotSteel       ,data:0},{id:ItemID.ingotSteel        ,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateGold        ,count:1,data:0},[{id:266                     ,data:0},{id:266                      ,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateCarbon      ,count:1,data:0},[{id:ItemID.dustCarbon       ,data:0},{id:ItemID.dustCarbon        ,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateTungsten    ,count:1,data:0},[{id:ItemID.ingotTungsten    ,data:0},{id:ItemID.ingotTungsten     ,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateLapis       ,count:1,data:0},[{id:351                     ,data:4},{id:351                      ,data:4}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateLead        ,count:1,data:0},[{id:ItemID.ingotLead        ,data:0},{id:ItemID.ingotLead         ,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateAluminium   ,count:1,data:0},[{id:ItemID.ingotAluminium   ,data:0},{id:ItemID.ingotAluminium    ,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateLeadAntimony,count:1,data:0},[{id:ItemID.ingotLeadAntimony,data:0},{id:ItemID.ingotLeadAntimony ,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateAntimony    ,count:1,data:0},[{id:ItemID.ingotAntimony    ,data:0},{id:ItemID.ingotAntimony     ,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateDiamond     ,count:1,data:0},[{id:264                     ,data:0},{id:264                      ,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateRedstone    ,count:1,data:0},[{id:ItemID.ingotRedstone    ,data:0},{id:ItemID.ingotRedstone     ,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateSherlock    ,count:1,data:0},[{id:ItemID.ingotSherlock    ,data:0},{id:ItemID.ingotSherlock     ,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.plateCircuit     ,count:1,data:0},[{id:ItemID.platePlastic     ,data:0},{id:ItemID.dustSiliconDioxide,data:0}],hammer[i]);
    }
});