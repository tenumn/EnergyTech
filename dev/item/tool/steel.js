CreateTool("Steel",ItemID.ingotSteel,{durability:512,level:3,efficiency:12,damage:2,enchantability:20});

CreateWrench("wrenchSteel","Steel Wrench",{name:"wrenchSteel"},256);
CreateHammer("hammerSteel","Steel Hammer",{name:"hammerSteel"},"Steel");
CreateCutter("cutterSteel","Steel Cutter",{name:"cutterSteel"},256);
CreateMortar("mortarSteel","Steel Mortar",{name:"mortarSteel"},256);
CreateFile("fileSteel","Steel File",{name:"fileSteel"},256);

Callback.addCallback("PreLoaded",function(){
    var file = ETTool.getAllTool("File");
    for(let i = 0;i < file.length;i++){
        ETRecipe.addShapedRecipe({id:ItemID.wrenchSteel,count:1,data:0},[" ac","eba","de "],["a",ItemID.plateSteel,0,"b",ItemID.ingotSteel,0,"c",file[i],-1,"d",ItemID.ringSteel,0,"e",ItemID.stickSteel,0],{2:1});
    }
    Recipes.addShaped({id:ItemID.hammerSteel,count:1,data:0},[" ab"," ca","c  "],["a",ItemID.ingotSteel,0,"b",287,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.cutterSteel,count:1,data:0},["a a","aba","b b"],["a",ItemID.plateSteel,0,"b",ItemID.ingotSteel,0]);
    Recipes.addShaped({id:ItemID.mortarSteel,count:1,data:0},["  c","aba"," a "],["a",ItemID.plateSteel,0,"b",318,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.fileSteel  ,count:1,data:0},[ "a" , "a" , "b" ],["a",ItemID.plateSteel,0,"b",280,0]);
});