ToolAPI.addToolMaterial("copper",{durability:250,level:2,efficiency:4,damage:4,enchantability:6});

IDRegistry.genItemID("swordCopper");
IDRegistry.genItemID("shovelCopper");
IDRegistry.genItemID("pickaxeCopper");
IDRegistry.genItemID("axeCopper");
IDRegistry.genItemID("hoeCopper");

Item.createItem("swordCopper","Copper Sword",{name:"copper_sword"},{stack:1});
Item.createItem("shovelCopper","Copper Shovel",{name:"copper_shovel"},{stack:1});
Item.createItem("pickaxeCopper","Copper Pickaxe",{name:"copper_pickaxe"},{stack:1});
Item.createItem("axeCopper","Copper Axe",{name:"copper_axe"},{stack:1});
Item.createItem("hoeCopper","Copper Hoe",{name:"copper_hoe"},{stack:1});

Tool.registerTool(ItemID.swordCopper,"Sword");
Tool.registerTool(ItemID.shovelCopper,"Shovel");
Tool.registerTool(ItemID.pickaxeCopper,"Pickaxe");
Tool.registerTool(ItemID.axeCopper,"Axe");
Tool.registerTool(ItemID.hoeCopper,"Hoe");

ToolAPI.setTool(ItemID.swordCopper,"copper",ToolType.sword);
ToolAPI.setTool(ItemID.shovelCopper,"copper",ToolType.shovel);
ToolAPI.setTool(ItemID.pickaxeCopper,"copper",ToolType.pickaxe);
ToolAPI.setTool(ItemID.axeCopper,"copper",ToolType.axe);
ToolAPI.setTool(ItemID.hoeCopper,"copper",ToolType.hoe);

Callback.addCallback("PreLoaded",function(){
    Item.addRepairItemIds(ItemID.swordCopper,[ItemID.ingotCopper]);
    Item.addRepairItemIds(ItemID.shovelCopper,[ItemID.ingotCopper]);
    Item.addRepairItemIds(ItemID.pickaxeCopper,[ItemID.ingotCopper]);
    Item.addRepairItemIds(ItemID.axeCopper,[ItemID.ingotCopper]);
    Item.addRepairItemIds(ItemID.hoeCopper,[ItemID.ingotCopper]);

    Item.addCreativeGroup("sword",Translation.translate("Sword"),[ItemID.swordCopper]);
    Item.addCreativeGroup("shovel",Translation.translate("Shovel"),[ItemID.shovelCopper]);
    Item.addCreativeGroup("pickaxe",Translation.translate("Pickaxe"),[ItemID.pickaxeCopper]);
    Item.addCreativeGroup("axe",Translation.translate("Axe"),[ItemID.axeCopper]);
    Item.addCreativeGroup("hoe",Translation.translate("Hoe"),[ItemID.hoeCopper]);

    var file = Tool.getAllTool("File"),hammer = Tool.getAllTool("Hammer");
    for(let i = 0;i < file.length;i++){
        for(let ii = 0;ii < hammer.length;ii++){
            RecipeRegistry.addShapedRecipe({id:ItemID.swordCopper,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateCopper,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.shovelCopper,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateCopper,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.pickaxeCopper,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateCopper,0,"b",280,0,"c",ItemID.ingotCopper,0,"d",file[i],0,"e",hammer[ii],0],{3:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.axeCopper,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateCopper,0,"b",280,0,"c",ItemID.ingotCopper,0,"d",file[i],0,"e",hammer[ii],0],{2:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.hoeCopper,count:1,data:0},["aac","db "," b "],["a",ItemID.plateCopper,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{2:1,3:1});
        }
    }
});