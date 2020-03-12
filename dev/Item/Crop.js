IDRegistry.genCropID("cropCotton");
wheat.crop.createCrop("cropCotton","Cotton Seed",{
    seed:{name:"cropCotton"},
    crop:[["cropCotton",0],["cropCotton",1],["cropCotton",2],["cropCotton",3]]
},{
    farmland:{id:60,data:-1},
    growTime:3600,
    growSpeed:1,
    growLight:8,
    drop:[[ItemID.cotton,1,0,100],[ItemID.cotton,1,0,75],[ItemID.cotton,1,0,50],[ItemID.cotton,1,0,25]]
});

wheat.crop.addGrassDrop(ItemID.cropCotton,1,0);

IDRegistry.genItemID("cotton");
Item.createItem("cotton","Cotton",{name:"cotton"});

Callback.addCallback("PreLoaded",function(){
    ETRecipe.addFarmingStationRecipe({id:ItemID.cropCotton,data:0},[{id:ItemID.cotton,count:1,data:0},{id:ItemID.cotton,count:1,data:0},{id:ItemID.cotton,count:1,data:0},{id:ItemID.cotton,count:1,data:0}],{id:3,data:0});
});