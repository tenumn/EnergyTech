CreateWrench("ironWrench","Iron Wrench",{name:"iron_wrench"},128);
CreateHammer("ironHammer","Iron Hammer",{name:"iron_hammer"},128);
CreateCutter("ironCutter","Iron Cutter",{name:"iron_cutter"},128);
CreateMortar("ironMortar","Iron Mortar",{name:"iron_mortar"},128);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.ironWrench,count:1,data:0},["a a","aba"," b "],["a",ItemID.plateIron,0,"b",265,0]);
    Recipes.addShaped({id:ItemID.ironHammer,count:1,data:0},[" ab"," ca","c  "],["a",265,0,"b",287,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.ironCutter,count:1,data:0},["a a","aba","b b"],["a",ItemID.plateIron,0,"b",265,0]);
    Recipes.addShaped({id:ItemID.ironMortar,count:1,data:0},["  c","aba"," a "],["a",265,0,"b",318,0,"c",280,0]);
});