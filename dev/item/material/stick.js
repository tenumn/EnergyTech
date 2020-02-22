IDRegistry.genItemID("stickCopper");
Item.createItem("stickCopper","Copper Stick",{name:"copper_stick"});

IDRegistry.genItemID("stickTin");
Item.createItem("stickTin","Tin Stick",{name:"tin_stick"});

IDRegistry.genItemID("stickIron");
Item.createItem("stickIron","Iron Stick",{name:"iron_stick"});

IDRegistry.genItemID("stickSteel");
Item.createItem("stickSteel","Steel Stick",{name:"steel_stick"});

IDRegistry.genItemID("stickGold");
Item.createItem("stickGold","Gold Stick",{name:"gold_stick"});

Callback.addCallback("PreLoaded",function(){
    ETRecipe.addCuttingRecipe({id:ItemID.stickCopper,count:4,data:0},{id:ItemID.plateCopper,data:0});
    ETRecipe.addCuttingRecipe({id:ItemID.stickTin   ,count:4,data:0},{id:ItemID.plateTin   ,data:0});
    ETRecipe.addCuttingRecipe({id:ItemID.stickIron  ,count:4,data:0},{id:ItemID.plateIron  ,data:0});
    ETRecipe.addCuttingRecipe({id:ItemID.stickSteel ,count:4,data:0},{id:ItemID.plateSteel ,data:0});
    ETRecipe.addCuttingRecipe({id:ItemID.stickGold  ,count:4,data:0},{id:ItemID.plateGold  ,data:0});

    ETRecipe.addCutterRecipe({id:ItemID.stickCopper,count:4,data:0},[{id:ItemID.plateCopper,data:0},{id:ItemID.plateCopper,data:0}]);
    ETRecipe.addCutterRecipe({id:ItemID.stickTin   ,count:4,data:0},[{id:ItemID.plateTin   ,data:0},{id:ItemID.plateTin   ,data:0}]);
    ETRecipe.addCutterRecipe({id:ItemID.stickIron  ,count:4,data:0},[{id:ItemID.plateIron  ,data:0},{id:ItemID.plateIron  ,data:0}]);
    ETRecipe.addCutterRecipe({id:ItemID.stickSteel ,count:4,data:0},[{id:ItemID.plateSteel ,data:0},{id:ItemID.plateSteel ,data:0}]);
    ETRecipe.addCutterRecipe({id:ItemID.stickGold  ,count:4,data:0},[{id:ItemID.plateGold  ,data:0},{id:ItemID.plateGold  ,data:0}]);
});