CreateTool("Tin",{durability:192,level:2,efficiency:6,damage:2,enchantability:8});

CreateWrench("wrenchTin","Tin Wrench",{name:"wrenchTin"},96);
CreateHammer("hammerTin","Tin Hammer",{name:"hammerTin"},"Tin");
CreateCutter("cutterTin","Tin Cutter",{name:"cutterTin"},96);
CreateMortar("mortarTin","Tin Mortar",{name:"mortarTin"},96);
CreateFile("fileTin","Tin File",{name:"fileTin"},96);

Callback.addCallback("PreLoaded",function(){
    var file = Tool.getAllTool("File"),hammer = Tool.getAllTool("Hammer");
    for(let i = 0;i < file.length;i++){
        for(let ii = 0;ii < hammer.length;ii++){
            Recipe.addShapedRecipe({id:ItemID.swordTin,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateTin,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            Recipe.addShapedRecipe({id:ItemID.shovelTin,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateTin,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            Recipe.addShapedRecipe({id:ItemID.pickaxeTin,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateTin,0,"b",280,0,"c",ItemID.ingotTin,0,"d",file[i],0,"e",hammer[ii],0],{3:1,5:1});
            Recipe.addShapedRecipe({id:ItemID.axeTin,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateTin,0,"b",280,0,"c",ItemID.ingotTin,0,"d",file[i],0,"e",hammer[ii],0],{2:1,5:1});
            Recipe.addShapedRecipe({id:ItemID.hoeTin,count:1,data:0},["aac","db "," b "],["a",ItemID.plateTin,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{2:1,3:1});
        }
        Recipe.addShapedRecipe({id:ItemID.wrenchTin,count:1,data:0},[" ac","eba","de "],["a",ItemID.plateTin,0,"b",ItemID.ingotTin,0,"c",file[i],-1,"d",ItemID.ringTin,0,"e",ItemID.stickTin,0],{2:1});
    }
    
    Recipes.addShaped({id:ItemID.hammerTin,count:1,data:0},[" ab"," ca","c  "],["a",ItemID.ingotTin,0,"b",287,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.cutterTin,count:1,data:0},["a a","aba","b b"],["a",ItemID.plateTin,0,"b",ItemID.ingotTin,0]);
    Recipes.addShaped({id:ItemID.mortarTin,count:1,data:0},["  c","aba"," a "],["a",ItemID.plateTin,0,"b",318,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.fileTin  ,count:1,data:0},[ "a" , "a" , "b" ],["a",ItemID.plateTin,0,"b",280,0]);
});