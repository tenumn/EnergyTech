IDRegistry.genItemID("hammerIron");
IDRegistry.genItemID("wrenchIron");
IDRegistry.genItemID("cutterIron");
IDRegistry.genItemID("mortarIron");
IDRegistry.genItemID("fileIron");
IDRegistry.genItemID("lighterIron");

Item.createItem("hammerIron","Iron Hammer",{name:"iron_hammer"},{stack:1});
Item.createItem("wrenchIron","Iron Wrench",{name:"iron_wrench"},{stack:1});
Item.createItem("cutterIron","Iron Cutter",{name:"iron_cutter"},{stack:1});
Item.createItem("mortarIron","Iron Mortar",{name:"iron_mortar"},{stack:1});
Item.createItem("fileIron","Iron File",{name:"iron_file"},{stack:1});
Item.createItem("lighterIron","Iron Lighter",{name:"iron_lighter"},{stack:1});

Tool.registerTool(ItemID.hammerIron,"Hammer");
Tool.registerTool(ItemID.wrenchIron,"Wrench");
Tool.registerTool(ItemID.cutterIron,"Cutter");
Tool.registerTool(ItemID.mortarIron,"Mortar");
Tool.registerTool(ItemID.fileIron,"File");
Tool.registerTool(ItemID.lighterIron,"Lighter");

ToolAPI.setTool(ItemID.hammerIron,"iron",ToolType.hammer);
ToolAPI.setTool(ItemID.lighterIron,"iron",ToolType.lighter);

Item.setMaxDamage(ItemID.wrenchIron,ToolAPI.getToolMaterial("iron").durability);
Item.setMaxDamage(ItemID.cutterIron,ToolAPI.getToolMaterial("iron").durability);
Item.setMaxDamage(ItemID.mortarIron,ToolAPI.getToolMaterial("iron").durability);
Item.setMaxDamage(ItemID.fileIron,ToolAPI.getToolMaterial("iron").durability);

Callback.addCallback("PreLoaded",function(){
    Item.addRepairItemIds(ItemID.wrenchIron,[265]);
    Item.addRepairItemIds(ItemID.cutterIron,[265]);
    Item.addRepairItemIds(ItemID.mortarIron,[265]);
    Item.addRepairItemIds(ItemID.fileIron,[265]);
    Item.addRepairItemIds(ItemID.lighterIron,[265]);

    Item.addCreativeGroup("hammer",Translation.translate("Hammer"),[ItemID.hammerIron]);
    Item.addCreativeGroup("wrench",Translation.translate("Wrench"),[ItemID.wrenchIron]);
    Item.addCreativeGroup("cutter",Translation.translate("Cutter"),[ItemID.cutterIron]);
    Item.addCreativeGroup("mortar",Translation.translate("Mortar"),[ItemID.mortarIron]);
    Item.addCreativeGroup("file",Translation.translate("File"),[ItemID.fileIron]);
    Item.addCreativeGroup("lighter",Translation.translate("Lighter"),[ItemID.lighterIron]);

    var file = Tool.getAllTool("File");
    for(let i = 0;i < file.length;i++){
        RecipeRegistry.addShapedRecipe({id:ItemID.wrenchIron,count:1,data:0},[" ac","eba","de "],["a",ItemID.plateIron,0,"b",265,0,"c",file[i],-1,"d",ItemID.ringIron,0,"e",ItemID.stickIron,0],{2:1});
    }
    Recipes.addShaped({id:ItemID.hammerIron,count:1,data:0},[" ab"," ca","c  "],["a",265,0,"b",287,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.cutterIron,count:1,data:0},["a a","aba","b b"],["a",ItemID.plateIron,0,"b",265,0]);
    Recipes.addShaped({id:ItemID.mortarIron,count:1,data:0},["  c","aba"," a "],["a",ItemID.plateIron,0,"b",318,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.fileIron,count:1,data:0},["a","a","b"],["a",ItemID.plateIron,0,"b",280,0]);
    Recipes.addShaped({id:ItemID.lighterIron,count:1,data:0},["aba"],["a",ItemID.plateIron,0,"b",318,0]);
});