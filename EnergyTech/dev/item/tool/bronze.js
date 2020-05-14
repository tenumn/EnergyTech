ToolAPI.addToolMaterial("bronze",{durability:80,level:2,efficiency:6,damage:4,enchantability:6});

IDRegistry.genItemID("swordBronze");
IDRegistry.genItemID("shovelBronze");
IDRegistry.genItemID("pickaxeBronze");
IDRegistry.genItemID("axeBronze");
IDRegistry.genItemID("hoeBronze");
IDRegistry.genItemID("hammerBronze");
IDRegistry.genItemID("wrenchBronze");
IDRegistry.genItemID("cutterBronze");
IDRegistry.genItemID("mortarBronze");
IDRegistry.genItemID("fileBronze");
IDRegistry.genItemID("lighterBronze");

Item.createItem("swordBronze","Bronze Sword",{name:"bronze_sword"},{stack:1});
Item.createItem("shovelBronze","Bronze Shovel",{name:"bronze_shovel"},{stack:1});
Item.createItem("pickaxeBronze","Bronze Pickaxe",{name:"bronze_pickaxe"},{stack:1});
Item.createItem("axeBronze","Bronze Axe",{name:"bronze_axe"},{stack:1});
Item.createItem("hoeBronze","Bronze Hoe",{name:"bronze_hoe"},{stack:1});
Item.createItem("hammerBronze","Bronze Hammer",{name:"bronze_hammer"},{stack:1});
Item.createItem("wrenchBronze","Bronze Wrench",{name:"bronze_wrench"},{stack:1});
Item.createItem("cutterBronze","Bronze Cutter",{name:"bronze_cutter"},{stack:1});
Item.createItem("mortarBronze","Bronze Mortar",{name:"bronze_mortar"},{stack:1});
Item.createItem("fileBronze","Bronze File",{name:"bronze_file"},{stack:1});
Item.createItem("lighterBronze","Bronze Lighter",{name:"bronze_lighter"},{stack:1});

Tool.registerTool(ItemID.swordBronze,"Sword");
Tool.registerTool(ItemID.shovelBronze,"Shovel");
Tool.registerTool(ItemID.pickaxeBronze,"Pickaxe");
Tool.registerTool(ItemID.axeBronze,"Axe");
Tool.registerTool(ItemID.hoeBronze,"Hoe");
Tool.registerTool(ItemID.hammerBronze,"Hammer");
Tool.registerTool(ItemID.wrenchBronze,"Wrench");
Tool.registerTool(ItemID.cutterBronze,"Cutter");
Tool.registerTool(ItemID.mortarBronze,"Mortar");
Tool.registerTool(ItemID.fileBronze,"File");
Tool.registerTool(ItemID.lighterBronze,"Lighter");

ToolAPI.setTool(ItemID.swordBronze,"bronze",ToolType.sword);
ToolAPI.setTool(ItemID.shovelBronze,"bronze",ToolType.shovel);
ToolAPI.setTool(ItemID.pickaxeBronze,"bronze",ToolType.pickaxe);
ToolAPI.setTool(ItemID.axeBronze,"bronze",ToolType.axe);
ToolAPI.setTool(ItemID.hoeBronze,"bronze",ToolType.hoe);
ToolAPI.setTool(ItemID.hammerBronze,"bronze",ToolType.hammer);
ToolAPI.setTool(ItemID.lighterBronze,"bronze",ToolType.lighter);

Item.setMaxDamage(ItemID.wrenchBronze,ToolAPI.getToolMaterial("bronze").durability);
Item.setMaxDamage(ItemID.cutterBronze,ToolAPI.getToolMaterial("bronze").durability);
Item.setMaxDamage(ItemID.mortarBronze,ToolAPI.getToolMaterial("bronze").durability);
Item.setMaxDamage(ItemID.fileBronze,ToolAPI.getToolMaterial("bronze").durability);

Callback.addCallback("PreLoaded",function(){
    Item.addRepairItemIds(ItemID.swordBronze,[ItemID.ingotBronze]);
    Item.addRepairItemIds(ItemID.shovelBronze,[ItemID.ingotBronze]);
    Item.addRepairItemIds(ItemID.pickaxeBronze,[ItemID.ingotBronze]);
    Item.addRepairItemIds(ItemID.axeBronze,[ItemID.ingotBronze]);
    Item.addRepairItemIds(ItemID.hoeBronze,[ItemID.ingotBronze]);
    Item.addRepairItemIds(ItemID.hammerBronze,[ItemID.ingotBronze]);
    Item.addRepairItemIds(ItemID.wrenchBronze,[ItemID.ingotBronze]);
    Item.addRepairItemIds(ItemID.cutterBronze,[ItemID.ingotBronze]);
    Item.addRepairItemIds(ItemID.mortarBronze,[ItemID.ingotBronze]);
    Item.addRepairItemIds(ItemID.fileBronze,[ItemID.ingotBronze]);
    Item.addRepairItemIds(ItemID.lighterBronze,[ItemID.ingotBronze]);

    Item.addCreativeGroup("sword",Translation.translate("Sword"),[ItemID.swordBronze]);
    Item.addCreativeGroup("shovel",Translation.translate("Shovel"),[ItemID.shovelBronze]);
    Item.addCreativeGroup("pickaxe",Translation.translate("Pickaxe"),[ItemID.pickaxeBronze]);
    Item.addCreativeGroup("axe",Translation.translate("Axe"),[ItemID.axeBronze]);
    Item.addCreativeGroup("hoe",Translation.translate("Hoe"),[ItemID.hoeBronze]);
    Item.addCreativeGroup("hammer",Translation.translate("Hammer"),[ItemID.hammerBronze]);
    Item.addCreativeGroup("wrench",Translation.translate("Wrench"),[ItemID.wrenchBronze]);
    Item.addCreativeGroup("cutter",Translation.translate("Cutter"),[ItemID.cutterBronze]);
    Item.addCreativeGroup("mortar",Translation.translate("Mortar"),[ItemID.mortarBronze]);
    Item.addCreativeGroup("file",Translation.translate("File"),[ItemID.fileBronze]);
    Item.addCreativeGroup("lighter",Translation.translate("Lighter"),[ItemID.lighterBronze]);

    var file = Tool.getAllTool("File"),hammer = Tool.getAllTool("Hammer");
    for(let i = 0;i < file.length;i++){
        for(let ii = 0;ii < hammer.length;ii++){
            RecipeRegistry.addShapedRecipe({id:ItemID.swordBronze,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateBronze,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.shovelBronze,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateBronze,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.pickaxeBronze,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateBronze,0,"b",280,0,"c",ItemID.ingotBronze,0,"d",file[i],0,"e",hammer[ii],0],{3:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.axeBronze,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateBronze,0,"b",280,0,"c",ItemID.ingotBronze,0,"d",file[i],0,"e",hammer[ii],0],{2:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.hoeBronze,count:1,data:0},["aac","db "," b "],["a",ItemID.plateBronze,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{2:1,3:1});
        }
        RecipeRegistry.addShapedRecipe({id:ItemID.wrenchBronze,count:1,data:0},[" ac","eba","de "],["a",ItemID.plateBronze,0,"b",ItemID.ingotBronze,0,"c",file[i],-1,"d",ItemID.ringBronze,0,"e",ItemID.stickBronze,0],{2:1});
    }

    Recipes.addShaped({id:ItemID.hammerBronze,count:1,data:0},[" ab"," ca","c  "],["a",ItemID.ingotBronze,0,"b",287,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.cutterBronze,count:1,data:0},["a a","aba","b b"],["a",ItemID.plateBronze,0,"b",ItemID.ingotBronze,0]);
    Recipes.addShaped({id:ItemID.mortarBronze,count:1,data:0},["  c","aba"," a "],["a",ItemID.plateBronze,0,"b",318,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.fileBronze,count:1,data:0},[ "a" , "a" , "b" ],["a",ItemID.plateBronze,0,"b",280,0]);
    Recipes.addShaped({id:ItemID.lighterBronze,count:1,data:0},["aba"],["a",ItemID.plateBronze,0,"b",318,0]);
});