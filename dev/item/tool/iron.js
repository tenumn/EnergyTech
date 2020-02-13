CreateWrench("wrenchIron","Iron Wrench",{name:"iron_wrench",meta:0},128);
CreateHammer("hammerIron","Iron Hammer",{name:"iron_hammer",meta:0},128);
CreateCutter("cutterIron","Iron Cutter",{name:"iron_cutter",meta:0},128);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.wrenchIron,count:1,data:0},["a a","aba"," b "],["a",ItemID.plateIron,0,"b",265,0]);
    Recipes.addShaped({id:ItemID.hammerIron,count:1,data:0},[" ab"," ca","c  "],["a",265,0,"b",287,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.cutterIron,count:1,data:0},["a a","aba","b b"],["a",ItemID.plateIron,0,"b",265,0]);
});