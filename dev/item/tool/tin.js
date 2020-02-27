CreateTool("Tin",ItemID.ingotTin,{durability:192,level:2,efficiency:6,damage:2,enchantability:8});

CreateWrench("wrenchTin","Tin Wrench",{name:"wrenchTin"},96);
CreateHammer("hammerTin","Tin Hammer",{name:"hammerTin"},"Tin");
CreateCutter("cutterTin","Tin Cutter",{name:"cutterTin"},96);
CreateMortar("mortarTin","Tin Mortar",{name:"mortarTin"},96);
CreateFile("fileTin","Tin File",{name:"fileTin"},96);

Callback.addCallback("PreLoaded",function(){
    var file = ETTool.getAllTool("File");
    for(let i = 0;i < file.length;i++){
        ETRecipe.addShapedRecipe({id:ItemID.wrenchTin,count:1,data:0},[" ac","eba","de "],["a",ItemID.plateTin,0,"b",ItemID.ingotTin,0,"c",file[i],-1,"d",ItemID.ringTin,0,"e",ItemID.stickTin,0],{2:1});
    }
    Recipes.addShaped({id:ItemID.hammerTin,count:1,data:0},[" ab"," ca","c  "],["a",ItemID.ingotTin,0,"b",287,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.cutterTin,count:1,data:0},["a a","aba","b b"],["a",ItemID.plateTin,0,"b",ItemID.ingotTin,0]);
    Recipes.addShaped({id:ItemID.mortarTin,count:1,data:0},["  c","aba"," a "],["a",ItemID.plateTin,0,"b",318,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.fileTin  ,count:1,data:0},[ "a" , "a" , "b" ],["a",ItemID.plateTin,0,"b",280,0]);
});