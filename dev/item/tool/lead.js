CreateTool("Lead",{durability:256,level:2,efficiency:8,damage:2,enchantability:16});

Callback.addCallback("PreLoaded",function(){
    var file = Tool.getAllTool("File"),hammer = Tool.getAllTool("Hammer");
    for(let i = 0;i < file.length;i++){
        for(let ii = 0;ii < hammer.length;ii++){
            Recipe.addShapedRecipe({id:ItemID.swordLead,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateLead,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            Recipe.addShapedRecipe({id:ItemID.shovelLead,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateLead,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            Recipe.addShapedRecipe({id:ItemID.pickaxeLead,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateLead,0,"b",280,0,"c",ItemID.ingotLead,0,"d",file[i],0,"e",hammer[ii],0],{3:1,5:1});
            Recipe.addShapedRecipe({id:ItemID.axeLead,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateLead,0,"b",280,0,"c",ItemID.ingotLead,0,"d",file[i],0,"e",hammer[ii],0],{2:1,5:1});
            Recipe.addShapedRecipe({id:ItemID.hoeLead,count:1,data:0},["aac","db "," b "],["a",ItemID.plateLead,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{2:1,3:1});
        }
    }
});