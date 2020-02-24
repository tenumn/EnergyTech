CreateTool("Tin",ItemID.ingotTin,{durability:192,level:2,efficiency:6,damage:2,enchantability:8});

CreateWrench("tinWrench","Tin Wrench",{name:"tin_wrench"},96);
CreateHammer("tinHammer","Tin Hammer",{name:"tin_hammer"},"Tin");
CreateCutter("tinCutter","Tin Cutter",{name:"tin_cutter"},96);
CreateMortar("tinMortar","Tin Mortar",{name:"tin_mortar"},96);
CreateFile("tinFile","Tin File",{name:"tin_file"},96);

Callback.addCallback("PreLoaded",function(){
    var file = ETTool.getAllTool("File");
    for(let i = 0;i < file.length;i++){
        ETRecipe.addShapedRecipe({id:ItemID.tinWrench,count:1,data:0},[" ac","eba","de "],["a",ItemID.plateIron,0,"b",ItemID.ingotTin,0,"c",file[i],-1,"d",ItemID.ringIron,0,"e",ItemID.stickIron,0],{2:1});
    }
    Recipes.addShaped({id:ItemID.tinHammer,count:1,data:0},[" ab"," ca","c  "],["a",ItemID.ingotTin,0,"b",287,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.tinCutter,count:1,data:0},["a a","aba","b b"],["a",ItemID.plateTin,0,"b",ItemID.ingotTin,0]);
    Recipes.addShaped({id:ItemID.tinMortar,count:1,data:0},["  c","aba"," a "],["a",ItemID.plateTin,0,"b",318,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.tinFile,count:1,data:0},["a","a","b"],["a",ItemID.plateTin,0,"b",280,0]);
});