ToolAPI.addToolMaterial("antimony",{durability:104,level:2,efficiency:4,damage:4,enchantability:20});

IDRegistry.genItemID("swordAntimony");
IDRegistry.genItemID("shovelAntimony");
IDRegistry.genItemID("pickaxeAntimony");
IDRegistry.genItemID("axeAntimony");
IDRegistry.genItemID("hoeAntimony");

Item.createItem("swordAntimony","Antimony Sword",{name:"antimony_sword"},{stack:1});
Item.createItem("shovelAntimony","Antimony Shovel",{name:"antimony_shovel"},{stack:1});
Item.createItem("pickaxeAntimony","Antimony Pickaxe",{name:"antimony_pickaxe"},{stack:1});
Item.createItem("axeAntimony","Antimony Axe",{name:"antimony_axe"},{stack:1});
Item.createItem("hoeAntimony","Antimony Hoe",{name:"antimony_hoe"},{stack:1});

Tool.registerTool(ItemID.swordAntimony,"Sword");
Tool.registerTool(ItemID.shovelAntimony,"Shovel");
Tool.registerTool(ItemID.pickaxeAntimony,"Pickaxe");
Tool.registerTool(ItemID.axeAntimony,"Axe");
Tool.registerTool(ItemID.hoeAntimony,"Hoe");

ToolAPI.setTool(ItemID.swordAntimony,"antimony",ToolType.sword);
ToolAPI.setTool(ItemID.shovelAntimony,"antimony",ToolType.shovel);
ToolAPI.setTool(ItemID.pickaxeAntimony,"antimony",ToolType.pickaxe);
ToolAPI.setTool(ItemID.axeAntimony,"antimony",ToolType.axe);
ToolAPI.setTool(ItemID.hoeAntimony,"antimony",ToolType.hoe);

Callback.addCallback("PreLoaded",function(){
    Item.addRepairItemIds(ItemID.swordAntimony,[ItemID.ingotAntimony]);
    Item.addRepairItemIds(ItemID.shovelAntimony,[ItemID.ingotAntimony]);
    Item.addRepairItemIds(ItemID.pickaxeAntimony,[ItemID.ingotAntimony]);
    Item.addRepairItemIds(ItemID.axeAntimony,[ItemID.ingotAntimony]);
    Item.addRepairItemIds(ItemID.hoeAntimony,[ItemID.ingotAntimony]);

    Item.addCreativeGroup("sword",Translation.translate("Sword"),[ItemID.swordAntimony]);
    Item.addCreativeGroup("shovel",Translation.translate("Shovel"),[ItemID.shovelAntimony]);
    Item.addCreativeGroup("pickaxe",Translation.translate("Pickaxe"),[ItemID.pickaxeAntimony]);
    Item.addCreativeGroup("axe",Translation.translate("Axe"),[ItemID.axeAntimony]);
    Item.addCreativeGroup("hoe",Translation.translate("Hoe"),[ItemID.hoeAntimony]);

    var file = Tool.getAllTool("File"),hammer = Tool.getAllTool("Hammer");
    for(let i = 0;i < file.length;i++){
        for(let ii = 0;ii < hammer.length;ii++){
            RecipeRegistry.addShapedRecipe({id:ItemID.swordAntimony,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateAntimony,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.shovelAntimony,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateAntimony,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.pickaxeAntimony,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateAntimony,0,"b",280,0,"c",ItemID.ingotAntimony,0,"d",file[i],0,"e",hammer[ii],0],{3:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.axeAntimony,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateAntimony,0,"b",280,0,"c",ItemID.ingotAntimony,0,"d",file[i],0,"e",hammer[ii],0],{2:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.hoeAntimony,count:1,data:0},["aac","db "," b "],["a",ItemID.plateAntimony,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{2:1,3:1});
        }
    }
});