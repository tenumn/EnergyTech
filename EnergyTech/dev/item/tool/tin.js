ToolAPI.addToolMaterial("tin",{durability:235,level:2,efficiency:5,damage:4,enchantability:7});

IDRegistry.genItemID("swordTin");
IDRegistry.genItemID("shovelTin");
IDRegistry.genItemID("pickaxeTin");
IDRegistry.genItemID("axeTin");
IDRegistry.genItemID("hoeTin");
IDRegistry.genItemID("hammerTin");
IDRegistry.genItemID("wrenchTin");
IDRegistry.genItemID("cutterTin");
IDRegistry.genItemID("mortarTin");
IDRegistry.genItemID("fileTin");

Item.createItem("swordTin","Tin Sword",{name:"tin_sword"},{stack:1});
Item.createItem("shovelTin","Tin Shovel",{name:"tin_shovel"},{stack:1});
Item.createItem("pickaxeTin","Tin Pickaxe",{name:"tin_pickaxe"},{stack:1});
Item.createItem("axeTin","Tin Axe",{name:"tin_axe"},{stack:1});
Item.createItem("hoeTin","Tin Hoe",{name:"tin_hoe"},{stack:1});
Item.createItem("hammerTin","Tin Hammer",{name:"tin_hammer"},{stack:1});
Item.createItem("wrenchTin","Tin Wrench",{name:"tin_wrench"},{stack:1});
Item.createItem("cutterTin","Tin Cutter",{name:"tin_cutter"},{stack:1});
Item.createItem("mortarTin","Tin Mortar",{name:"tin_mortar"},{stack:1});
Item.createItem("fileTin","Tin File",{name:"tin_file"},{stack:1});

Tool.registerTool(ItemID.swordTin,"Sword");
Tool.registerTool(ItemID.shovelTin,"Shovel");
Tool.registerTool(ItemID.pickaxeTin,"Pickaxe");
Tool.registerTool(ItemID.axeTin,"Axe");
Tool.registerTool(ItemID.hoeTin,"Hoe");
Tool.registerTool(ItemID.hammerTin,"Hammer");
Tool.registerTool(ItemID.wrenchTin,"Wrench");
Tool.registerTool(ItemID.cutterTin,"Cutter");
Tool.registerTool(ItemID.mortarTin,"Mortar");
Tool.registerTool(ItemID.fileTin,"File");

ToolAPI.setTool(ItemID.swordTin,"tin",ToolType.sword);
ToolAPI.setTool(ItemID.shovelTin,"tin",ToolType.shovel);
ToolAPI.setTool(ItemID.pickaxeTin,"tin",ToolType.pickaxe);
ToolAPI.setTool(ItemID.axeTin,"tin",ToolType.axe);
ToolAPI.setTool(ItemID.hoeTin,"tin",ToolType.hoe);
ToolAPI.setTool(ItemID.hammerTin,"tin",ToolType.hammer);

Item.setMaxDamage(ItemID.wrenchTin,ToolAPI.getToolMaterial("tin").durability);
Item.setMaxDamage(ItemID.cutterTin,ToolAPI.getToolMaterial("tin").durability);
Item.setMaxDamage(ItemID.mortarTin,ToolAPI.getToolMaterial("tin").durability);
Item.setMaxDamage(ItemID.fileTin,ToolAPI.getToolMaterial("tin").durability);

Callback.addCallback("PreLoaded",function(){
    Item.addRepairItemIds(ItemID.swordTin,[ItemID.ingotTin]);
    Item.addRepairItemIds(ItemID.shovelTin,[ItemID.ingotTin]);
    Item.addRepairItemIds(ItemID.pickaxeTin,[ItemID.ingotTin]);
    Item.addRepairItemIds(ItemID.axeTin,[ItemID.ingotTin]);
    Item.addRepairItemIds(ItemID.hoeTin,[ItemID.ingotTin]);
    Item.addRepairItemIds(ItemID.hammerTin,[ItemID.ingotTin]);
    Item.addRepairItemIds(ItemID.wrenchTin,[ItemID.ingotTin]);
    Item.addRepairItemIds(ItemID.cutterTin,[ItemID.ingotTin]);
    Item.addRepairItemIds(ItemID.mortarTin,[ItemID.ingotTin]);
    Item.addRepairItemIds(ItemID.fileTin,[ItemID.ingotTin]);

    Item.addCreativeGroup("sword",Translation.translate("Sword"),[ItemID.swordTin]);
    Item.addCreativeGroup("shovel",Translation.translate("Shovel"),[ItemID.shovelTin]);
    Item.addCreativeGroup("pickaxe",Translation.translate("Pickaxe"),[ItemID.pickaxeTin]);
    Item.addCreativeGroup("axe",Translation.translate("Axe"),[ItemID.axeTin]);
    Item.addCreativeGroup("hoe",Translation.translate("Hoe"),[ItemID.hoeTin]);
    Item.addCreativeGroup("hammer",Translation.translate("Hammer"),[ItemID.hammerTin]);
    Item.addCreativeGroup("wrench",Translation.translate("Wrench"),[ItemID.wrenchTin]);
    Item.addCreativeGroup("cutter",Translation.translate("Cutter"),[ItemID.cutterTin]);
    Item.addCreativeGroup("mortar",Translation.translate("Mortar"),[ItemID.mortarTin]);
    Item.addCreativeGroup("file",Translation.translate("File"),[ItemID.fileTin]);

    var file = Tool.getAllTool("File"),hammer = Tool.getAllTool("Hammer");
    for(let i = 0;i < file.length;i++){
        for(let ii = 0;ii < hammer.length;ii++){
            RecipeRegistry.addShapedRecipe({id:ItemID.swordTin,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateTin,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.shovelTin,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateTin,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.pickaxeTin,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateTin,0,"b",280,0,"c",ItemID.ingotTin,0,"d",file[i],0,"e",hammer[ii],0],{3:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.axeTin,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateTin,0,"b",280,0,"c",ItemID.ingotTin,0,"d",file[i],0,"e",hammer[ii],0],{2:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.hoeTin,count:1,data:0},["aac","db "," b "],["a",ItemID.plateTin,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{2:1,3:1});
        }
        RecipeRegistry.addShapedRecipe({id:ItemID.wrenchTin,count:1,data:0},[" ac","eba","de "],["a",ItemID.plateTin,0,"b",ItemID.ingotTin,0,"c",file[i],-1,"d",ItemID.ringTin,0,"e",ItemID.stickTin,0],{2:1});
    }
    
    Recipes.addShaped({id:ItemID.hammerTin,count:1,data:0},[" ab"," ca","c  "],["a",ItemID.ingotTin,0,"b",287,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.cutterTin,count:1,data:0},["a a","aba","b b"],["a",ItemID.plateTin,0,"b",ItemID.ingotTin,0]);
    Recipes.addShaped({id:ItemID.mortarTin,count:1,data:0},["  c","aba"," a "],["a",ItemID.plateTin,0,"b",318,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.fileTin,count:1,data:0},[ "a" , "a" , "b" ],["a",ItemID.plateTin,0,"b",280,0]);
});