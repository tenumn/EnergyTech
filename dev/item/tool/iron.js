CreateWrench("wrenchIron","Iron Wrench",{name:"wrenchIron"},128);
CreateHammer("hammerIron","Iron Hammer",{name:"hammerIron"},"Iron");
CreateCutter("cutterIron","Iron Cutter",{name:"cutterIron"},128);
CreateMortar("mortarIron","Iron Mortar",{name:"mortarIron"},128);
CreateFile("fileIron","Iron File",{name:"fileIron"},128);

Callback.addCallback("PreLoaded",function(){
    var file = Tool.getAllTool("File");
    for(let i = 0;i < file.length;i++){
        Recipe.addShapedRecipe({id:ItemID.wrenchIron,count:1,data:0},[" ac","eba","de "],["a",ItemID.plateIron,0,"b",265,0,"c",file[i],-1,"d",ItemID.ringIron,0,"e",ItemID.stickIron,0],{2:1});
    }
    Recipes.addShaped({id:ItemID.hammerIron,count:1,data:0},[" ab"," ca","c  "],["a",265,0,"b",287,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.cutterIron,count:1,data:0},["a a","aba","b b"],["a",ItemID.plateIron,0,"b",265,0]);
    Recipes.addShaped({id:ItemID.mortarIron,count:1,data:0},["  c","aba"," a "],["a",ItemID.plateIron,0,"b",318,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.fileIron  ,count:1,data:0},[ "a" , "a" , "b" ],["a",ItemID.plateIron,0,"b",280,0]);
});