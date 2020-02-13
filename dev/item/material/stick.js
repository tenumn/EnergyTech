CreateStick = function(id,name,texture){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture);
}

CreateStick("stickCopper","Copper Stick",{name:"copper_stick",meta:0});
CreateStick("stickTin"   ,"Tin Stick"   ,{name:"tin_stick"   ,meta:0});
CreateStick("stickIron"  ,"Iron Stick"  ,{name:"iron_stick"  ,meta:0});
CreateStick("stickSteel" ,"Steel Stick" ,{name:"steel_stick" ,meta:0});
CreateStick("stickGold"  ,"Gold Stick"  ,{name:"gold_stick"  ,meta:0});

Callback.addCallback("PreLoaded",function(){
    ETRecipe.addCutterRecipe({id:ItemID.stickCopper,count:2,data:0},[{id:ItemID.plateCopper,data:0}]);
    ETRecipe.addCutterRecipe({id:ItemID.stickTin   ,count:2,data:0},[{id:ItemID.plateTin   ,data:0}]);
    ETRecipe.addCutterRecipe({id:ItemID.stickIron  ,count:2,data:0},[{id:ItemID.plateIron  ,data:0}]);
    ETRecipe.addCutterRecipe({id:ItemID.stickSteel ,count:2,data:0},[{id:ItemID.plateSteel ,data:0}]);
    ETRecipe.addCutterRecipe({id:ItemID.stickGold  ,count:2,data:0},[{id:ItemID.plateGold  ,data:0}]);
});

Translation.addTranslation("Copper Stick",{zh_CN:"铜棍"});
Translation.addTranslation("Tin Stick"   ,{zh_CN:"锡棍"});
Translation.addTranslation("Iron Stick"  ,{zh_CN:"铁棍"});
Translation.addTranslation("Gold Stick"  ,{zh_CN:"金棍"});
Translation.addTranslation("Steel Stick" ,{zh_CN:"钢棍"});