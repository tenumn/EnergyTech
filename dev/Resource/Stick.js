function CreateStick(uid,name,texture,data){
    IDRegistry.genItemID(uid);
    Item.createItem(uid,name,texture,data);
    Item.addCreativeGroup("ET-Stick",Translation.translate("Stick"),[ItemID[uid]]);
}

CreateStick("stickCopper"      ,"Copper Stick"             ,{name:"stickCopper"      });
CreateStick("stickTin"         ,"Tin Stick"                ,{name:"stickTin"         });
CreateStick("stickIron"        ,"Iron Stick"               ,{name:"stickIron"        });
CreateStick("stickSteel"       ,"Steel Stick"              ,{name:"stickSteel"       });
CreateStick("stickGold"        ,"Gold Stick"               ,{name:"stickGold"        });
CreateStick("stickTungsten"    ,"Tungsten Stick"           ,{name:"stickTungsten"    });
CreateStick("stickSherlock"    ,"Sherlock Alloy Stick"     ,{name:"stickSherlock"    });
CreateStick("stickLeadAntimony","Lead-Antimony Alloy Stick",{name:"stickLeadAntimony"});

Callback.addCallback("PreLoaded",function(){
    // 切割机
    Recipe.addCuttingRecipe({id:ItemID.plateCopper      ,data:0},{id:ItemID.stickCopper      ,count:4,data:0});
    Recipe.addCuttingRecipe({id:ItemID.plateTin         ,data:0},{id:ItemID.stickTin         ,count:4,data:0});
    Recipe.addCuttingRecipe({id:ItemID.plateIron        ,data:0},{id:ItemID.stickIron        ,count:4,data:0});
    Recipe.addCuttingRecipe({id:ItemID.plateSteel       ,data:0},{id:ItemID.stickSteel       ,count:4,data:0});
    Recipe.addCuttingRecipe({id:ItemID.plateGold        ,data:0},{id:ItemID.stickGold        ,count:4,data:0});
    Recipe.addCuttingRecipe({id:ItemID.plateTungsten    ,data:0},{id:ItemID.stickTungsten    ,count:4,data:0});
    Recipe.addCuttingRecipe({id:ItemID.plateSherlock    ,data:0},{id:ItemID.stickSherlock    ,count:4,data:0});
    Recipe.addCuttingRecipe({id:ItemID.plateLeadAntimony,data:0},{id:ItemID.stickLeadAntimony,count:4,data:0});

    // 合成
    var cutter = Tool.getAllTool("Cutter");
    for(var i in cutter){
        Recipe.addShapeless({id:ItemID.stickCopper      ,count:4,data:0},[{id:ItemID.plateCopper      ,data:0},{id:ItemID.plateCopper      ,data:0}],cutter[i]);
        Recipe.addShapeless({id:ItemID.stickTin         ,count:4,data:0},[{id:ItemID.plateTin         ,data:0},{id:ItemID.plateTin         ,data:0}],cutter[i]);
        Recipe.addShapeless({id:ItemID.stickIron        ,count:4,data:0},[{id:ItemID.plateIron        ,data:0},{id:ItemID.plateIron        ,data:0}],cutter[i]);
        Recipe.addShapeless({id:ItemID.stickSteel       ,count:4,data:0},[{id:ItemID.plateSteel       ,data:0},{id:ItemID.plateSteel       ,data:0}],cutter[i]);
        Recipe.addShapeless({id:ItemID.stickGold        ,count:4,data:0},[{id:ItemID.plateGold        ,data:0},{id:ItemID.plateGold        ,data:0}],cutter[i]);
        Recipe.addShapeless({id:ItemID.stickTungsten    ,count:4,data:0},[{id:ItemID.plateTungsten    ,data:0},{id:ItemID.plateTungsten    ,data:0}],cutter[i]);
        Recipe.addShapeless({id:ItemID.stickLeadAntimony,count:4,data:0},[{id:ItemID.plateLeadAntimony,data:0},{id:ItemID.plateLeadAntimony,data:0}],cutter[i]);
    }
});