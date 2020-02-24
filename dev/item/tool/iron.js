CreateWrench("ironWrench","Iron Wrench",{name:"iron_wrench"},128);
CreateHammer("ironHammer","Iron Hammer",{name:"iron_hammer"},"Iron");
CreateCutter("ironCutter","Iron Cutter",{name:"iron_cutter"},128);
CreateMortar("ironMortar","Iron Mortar",{name:"iron_mortar"},128);
CreateFile("ironFile","Iron File",{name:"iron_file"},128);

Callback.addCallback("PreLoaded",function(){
    var file = ETTool.getAllTool("File");
    for(let i = 0;i < file.length;i++){
        ETRecipe.addShapedRecipe({id:ItemID.ironWrench,count:1,data:0},[" ac","eba","de "],["a",ItemID.plateIron,0,"b",265,0,"c",file[i],-1,"d",ItemID.ringIron,0,"e",ItemID.stickIron,0],{2:1});
    }
    Recipes.addShaped({id:ItemID.ironHammer,count:1,data:0},[" ab"," ca","c  "],["a",265,0,"b",287,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.ironCutter,count:1,data:0},["a a","aba","b b"],["a",ItemID.plateIron,0,"b",265,0]);
    Recipes.addShaped({id:ItemID.ironMortar,count:1,data:0},["  c","aba"," a "],["a",ItemID.plateIron,0,"b",318,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.ironFile,count:1,data:0},["a","a","b"],["a",ItemID.plateIron,0,"b",280,0]);
});