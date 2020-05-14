ToolAPI.addToolMaterial("steel",{durability:490,level:3,efficiency:7,damage:6,enchantability:10});

IDRegistry.genItemID("swordSteel");
IDRegistry.genItemID("shovelSteel");
IDRegistry.genItemID("pickaxeSteel");
IDRegistry.genItemID("axeSteel");
IDRegistry.genItemID("hoeSteel");
IDRegistry.genItemID("hammerSteel");
IDRegistry.genItemID("wrenchSteel");
IDRegistry.genItemID("cutterSteel");
IDRegistry.genItemID("mortarSteel");
IDRegistry.genItemID("fileSteel");
IDRegistry.genItemID("lighterSteel");

Item.createItem("swordSteel","Steel Sword",{name:"steel_sword"},{stack:1});
Item.createItem("shovelSteel","Steel Shovel",{name:"steel_shovel"},{stack:1});
Item.createItem("pickaxeSteel","Steel Pickaxe",{name:"steel_pickaxe"},{stack:1});
Item.createItem("axeSteel","Steel Axe",{name:"steel_axe"},{stack:1});
Item.createItem("hoeSteel","Steel Hoe",{name:"steel_hoe"},{stack:1});
Item.createItem("hammerSteel","Steel Hammer",{name:"steel_hammer"},{stack:1});
Item.createItem("wrenchSteel","Steel Wrench",{name:"steel_wrench"},{stack:1});
Item.createItem("cutterSteel","Steel Cutter",{name:"steel_cutter"},{stack:1});
Item.createItem("mortarSteel","Steel Mortar",{name:"steel_mortar"},{stack:1});
Item.createItem("fileSteel","Steel File",{name:"steel_file"},{stack:1});
Item.createItem("lighterSteel","Steel Lighter",{name:"steel_lighter"},{stack:1});

Tool.registerTool(ItemID.swordSteel,"Sword");
Tool.registerTool(ItemID.shovelSteel,"Shovel");
Tool.registerTool(ItemID.pickaxeSteel,"Pickaxe");
Tool.registerTool(ItemID.axeSteel,"Axe");
Tool.registerTool(ItemID.hoeSteel,"Hoe");
Tool.registerTool(ItemID.hammerSteel,"Hammer");
Tool.registerTool(ItemID.wrenchSteel,"Wrench");
Tool.registerTool(ItemID.cutterSteel,"Cutter");
Tool.registerTool(ItemID.mortarSteel,"Mortar");
Tool.registerTool(ItemID.fileSteel,"File");
Tool.registerTool(ItemID.lighterSteel,"Lighter");

ToolAPI.setTool(ItemID.swordSteel,"steel",ToolType.sword);
ToolAPI.setTool(ItemID.shovelSteel,"steel",ToolType.shovel);
ToolAPI.setTool(ItemID.pickaxeSteel,"steel",ToolType.pickaxe);
ToolAPI.setTool(ItemID.axeSteel,"steel",ToolType.axe);
ToolAPI.setTool(ItemID.hoeSteel,"steel",ToolType.hoe);
ToolAPI.setTool(ItemID.hammerSteel,"steel",ToolType.hammer);
ToolAPI.setTool(ItemID.lighterSteel,"steel",ToolType.lighter);

Item.setMaxDamage(ItemID.wrenchSteel,ToolAPI.getToolMaterial("steel").durability);
Item.setMaxDamage(ItemID.cutterSteel,ToolAPI.getToolMaterial("steel").durability);
Item.setMaxDamage(ItemID.mortarSteel,ToolAPI.getToolMaterial("steel").durability);
Item.setMaxDamage(ItemID.fileSteel,ToolAPI.getToolMaterial("steel").durability);

Callback.addCallback("PreLoaded",function(){
    Item.addRepairItemIds(ItemID.swordSteel,[ItemID.ingotSteel]);
    Item.addRepairItemIds(ItemID.shovelSteel,[ItemID.ingotSteel]);
    Item.addRepairItemIds(ItemID.pickaxeSteel,[ItemID.ingotSteel]);
    Item.addRepairItemIds(ItemID.axeSteel,[ItemID.ingotSteel]);
    Item.addRepairItemIds(ItemID.hoeSteel,[ItemID.ingotSteel]);
    Item.addRepairItemIds(ItemID.hammerSteel,[ItemID.ingotSteel]);
    Item.addRepairItemIds(ItemID.wrenchSteel,[ItemID.ingotSteel]);
    Item.addRepairItemIds(ItemID.cutterSteel,[ItemID.ingotSteel]);
    Item.addRepairItemIds(ItemID.mortarSteel,[ItemID.ingotSteel]);
    Item.addRepairItemIds(ItemID.fileSteel,[ItemID.ingotSteel]);
    Item.addRepairItemIds(ItemID.lighterSteel,[ItemID.ingotSteel]);

    Item.addCreativeGroup("sword",Translation.translate("Sword"),[ItemID.swordSteel]);
    Item.addCreativeGroup("shovel",Translation.translate("Shovel"),[ItemID.shovelSteel]);
    Item.addCreativeGroup("pickaxe",Translation.translate("Pickaxe"),[ItemID.pickaxeSteel]);
    Item.addCreativeGroup("axe",Translation.translate("Axe"),[ItemID.axeSteel]);
    Item.addCreativeGroup("hoe",Translation.translate("Hoe"),[ItemID.hoeSteel]);
    Item.addCreativeGroup("hammer",Translation.translate("Hammer"),[ItemID.hammerSteel]);
    Item.addCreativeGroup("wrench",Translation.translate("Wrench"),[ItemID.wrenchSteel]);
    Item.addCreativeGroup("cutter",Translation.translate("Cutter"),[ItemID.cutterSteel]);
    Item.addCreativeGroup("mortar",Translation.translate("Mortar"),[ItemID.mortarSteel]);
    Item.addCreativeGroup("file",Translation.translate("File"),[ItemID.fileSteel]);
    Item.addCreativeGroup("lighter",Translation.translate("Lighter"),[ItemID.lighterSteel]);

    var file = Tool.getAllTool("File"),hammer = Tool.getAllTool("Hammer");
    for(let i = 0;i < file.length;i++){
        for(let ii = 0;ii < hammer.length;ii++){
            RecipeRegistry.addShapedRecipe({id:ItemID.swordSteel,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateSteel,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.shovelSteel,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateSteel,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.pickaxeSteel,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateSteel,0,"b",280,0,"c",ItemID.ingotSteel,0,"d",file[i],0,"e",hammer[ii],0],{3:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.axeSteel,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateSteel,0,"b",280,0,"c",ItemID.ingotSteel,0,"d",file[i],0,"e",hammer[ii],0],{2:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.hoeSteel,count:1,data:0},["aac","db "," b "],["a",ItemID.plateSteel,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{2:1,3:1});
        }
        RecipeRegistry.addShapedRecipe({id:ItemID.wrenchSteel,count:1,data:0},[" ac","eba","de "],["a",ItemID.plateSteel,0,"b",ItemID.ingotSteel,0,"c",file[i],-1,"d",ItemID.ringSteel,0,"e",ItemID.stickSteel,0],{2:1});
    }

    Recipes.addShaped({id:ItemID.hammerSteel,count:1,data:0},[" ab"," ca","c  "],["a",ItemID.ingotSteel,0,"b",287,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.cutterSteel,count:1,data:0},["a a","aba","b b"],["a",ItemID.plateSteel,0,"b",ItemID.ingotSteel,0]);
    Recipes.addShaped({id:ItemID.mortarSteel,count:1,data:0},["  c","aba"," a "],["a",ItemID.plateSteel,0,"b",318,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.fileSteel,count:1,data:0},[ "a" , "a" , "b" ],["a",ItemID.plateSteel,0,"b",280,0]);
    Recipes.addShaped({id:ItemID.lighterSteel,count:1,data:0},["aba"],["a",ItemID.plateSteel,0,"b",318,0]);
});