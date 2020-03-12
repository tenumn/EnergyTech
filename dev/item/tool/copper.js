CreateTool("Copper",{durability:192,level:2,efficiency:6,damage:2,enchantability:8});

Callback.addCallback("PreLoaded",function(){
    var file = ETTool.getAllTool("File"),hammer = ETTool.getAllTool("Hammer");
    for(let i = 0;i < file.length;i++){
        for(let ii = 0;ii < hammer.length;ii++){
            ETRecipe.addShapedRecipe({id:ItemID.swordCopper,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateCopper,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            ETRecipe.addShapedRecipe({id:ItemID.shovelCopper,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateCopper,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            ETRecipe.addShapedRecipe({id:ItemID.pickaxeCopper,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateCopper,0,"b",280,0,"c",ItemID.ingotCopper,0,"d",file[i],0,"e",hammer[ii],0],{3:1,5:1});
            ETRecipe.addShapedRecipe({id:ItemID.axeCopper,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateCopper,0,"b",280,0,"c",ItemID.ingotCopper,0,"d",file[i],0,"e",hammer[ii],0],{2:1,5:1});
            ETRecipe.addShapedRecipe({id:ItemID.hoeCopper,count:1,data:0},["aac","db "," b "],["a",ItemID.plateCopper,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{2:1,3:1});
        }
    }
});