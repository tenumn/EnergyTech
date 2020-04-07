function CreateRing(uid,name,texture,data){
    IDRegistry.genItemID(uid);
    Item.createItem(uid,name,texture,data);
    Item.addCreativeGroup("ET-Ring",Translation.translate("Ring"),[ItemID[uid]]);
}

CreateRing("ringIron" ,"Iron Ring" ,{name:"ringIron" });
CreateRing("ringTin"  ,"Tin Ring"  ,{name:"ringTin"  });
CreateRing("ringSteel","Steel Ring",{name:"ringSteel"});

Callback.addCallback("PreLoaded",function(){
    // 合成
    var hammer = Tool.getAllTool("Hammer");
    for(var i in hammer){
        Recipe.addShapeless({id:ItemID.ringIron ,count:1,data:0},[{id:ItemID.stickIron ,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.ringTin  ,count:1,data:0},[{id:ItemID.stickTin  ,data:0}],hammer[i]);
        Recipe.addShapeless({id:ItemID.ringSteel,count:1,data:0},[{id:ItemID.stickSteel,data:0}],hammer[i]);
    }
});