CreateTool("Tungsten",{durability:1024,level:4,efficiency:16,damage:2,enchantability:24});

Callback.addCallback("PreLoaded",function(){
    var file = Tool.getAllTool("File"),hammer = Tool.getAllTool("Hammer");
    for(let i = 0;i < file.length;i++){
        for(let ii = 0;ii < hammer.length;ii++){
            Recipe.addShapedRecipe({id:ItemID.swordTungsten,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateTungsten,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            Recipe.addShapedRecipe({id:ItemID.shovelTungsten,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateTungsten,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            Recipe.addShapedRecipe({id:ItemID.pickaxeTungsten,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateTungsten,0,"b",280,0,"c",ItemID.ingotTungsten,0,"d",file[i],0,"e",hammer[ii],0],{3:1,5:1});
            Recipe.addShapedRecipe({id:ItemID.axeTungsten,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateTungsten,0,"b",280,0,"c",ItemID.ingotTungsten,0,"d",file[i],0,"e",hammer[ii],0],{2:1,5:1});
            Recipe.addShapedRecipe({id:ItemID.hoeTungsten,count:1,data:0},["aac","db "," b "],["a",ItemID.plateTungsten,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{2:1,3:1});
        }
    }
});