IDRegistry.genItemID("ringIron");
Item.createItem("ringIron","Iron Ring",{name:"iron_ring"});

Callback.addCallback("PreLoaded",function(){
    ETRecipe.addHammerRecipe({id:ItemID.ringIron,count:1,data:0},[{id:ItemID.stickIron,data:0}]);
});