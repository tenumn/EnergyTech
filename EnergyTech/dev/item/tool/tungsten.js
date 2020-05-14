ToolAPI.addToolMaterial("tungsten",{durability:640,level:3,efficiency:6,damage:5,enchantability:7});

IDRegistry.genItemID("swordTungsten");
IDRegistry.genItemID("shovelTungsten");
IDRegistry.genItemID("pickaxeTungsten");
IDRegistry.genItemID("axeTungsten");
IDRegistry.genItemID("hoeTungsten");

Item.createItem("swordTungsten","Tungsten Sword",{name:"tungsten_sword"},{stack:1});
Item.createItem("shovelTungsten","Tungsten Shovel",{name:"tungsten_shovel"},{stack:1});
Item.createItem("pickaxeTungsten","Tungsten Pickaxe",{name:"tungsten_pickaxe"},{stack:1});
Item.createItem("axeTungsten","Tungsten Axe",{name:"tungsten_axe"},{stack:1});
Item.createItem("hoeTungsten","Tungsten Hoe",{name:"tungsten_hoe"},{stack:1});

Tool.registerTool(ItemID.swordTungsten,"Sword");
Tool.registerTool(ItemID.shovelTungsten,"Shovel");
Tool.registerTool(ItemID.pickaxeTungsten,"Pickaxe");
Tool.registerTool(ItemID.axeTungsten,"Axe");
Tool.registerTool(ItemID.hoeTungsten,"Hoe");

ToolAPI.setTool(ItemID.swordTungsten,"tungsten",ToolType.sword);
ToolAPI.setTool(ItemID.shovelTungsten,"tungsten",ToolType.shovel);
ToolAPI.setTool(ItemID.pickaxeTungsten,"tungsten",ToolType.pickaxe);
ToolAPI.setTool(ItemID.axeTungsten,"tungsten",ToolType.axe);
ToolAPI.setTool(ItemID.hoeTungsten,"tungsten",ToolType.hoe);

Callback.addCallback("PreLoaded",function(){
    Item.addRepairItemIds(ItemID.swordTungsten,[ItemID.ingotTungsten]);
    Item.addRepairItemIds(ItemID.shovelTungsten,[ItemID.ingotTungsten]);
    Item.addRepairItemIds(ItemID.pickaxeTungsten,[ItemID.ingotTungsten]);
    Item.addRepairItemIds(ItemID.axeTungsten,[ItemID.ingotTungsten]);
    Item.addRepairItemIds(ItemID.hoeTungsten,[ItemID.ingotTungsten]);

    Item.addCreativeGroup("sword",Translation.translate("Sword"),[ItemID.swordTungsten]);
    Item.addCreativeGroup("shovel",Translation.translate("Shovel"),[ItemID.shovelTungsten]);
    Item.addCreativeGroup("pickaxe",Translation.translate("Pickaxe"),[ItemID.pickaxeTungsten]);
    Item.addCreativeGroup("axe",Translation.translate("Axe"),[ItemID.axeTungsten]);
    Item.addCreativeGroup("hoe",Translation.translate("Hoe"),[ItemID.hoeTungsten]);

    var file = Tool.getAllTool("File"),hammer = Tool.getAllTool("Hammer");
    for(let i = 0;i < file.length;i++){
        for(let ii = 0;ii < hammer.length;ii++){
            RecipeRegistry.addShapedRecipe({id:ItemID.swordTungsten,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateTungsten,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.shovelTungsten,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateTungsten,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.pickaxeTungsten,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateTungsten,0,"b",280,0,"c",ItemID.ingotTungsten,0,"d",file[i],0,"e",hammer[ii],0],{3:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.axeTungsten,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateTungsten,0,"b",280,0,"c",ItemID.ingotTungsten,0,"d",file[i],0,"e",hammer[ii],0],{2:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.hoeTungsten,count:1,data:0},["aac","db "," b "],["a",ItemID.plateTungsten,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{2:1,3:1});
        }
    }
});