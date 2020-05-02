ToolAPI.addToolMaterial("flint",{durability:190,level:2,efficiency:4,damage:2,enchantability:4});

IDRegistry.genItemID("swordFlint");
IDRegistry.genItemID("shovelFlint");
IDRegistry.genItemID("pickaxeFlint");
IDRegistry.genItemID("axeFlint");
IDRegistry.genItemID("hoeFlint");

Item.createItem("swordFlint","Flint Sword",{name:"flint_sword"},{stack:1});
Item.createItem("shovelFlint","Flint Shovel",{name:"flint_shovel"},{stack:1});
Item.createItem("pickaxeFlint","Flint Pickaxe",{name:"flint_pickaxe"},{stack:1});
Item.createItem("axeFlint","Flint Axe",{name:"flint_axe"},{stack:1});
Item.createItem("hoeFlint","Flint Hoe",{name:"flint_hoe"},{stack:1});

Tool.registerTool(ItemID.swordFlint,"Sword");
Tool.registerTool(ItemID.shovelFlint,"Shovel");
Tool.registerTool(ItemID.pickaxeFlint,"Pickaxe");
Tool.registerTool(ItemID.axeFlint,"Axe");
Tool.registerTool(ItemID.hoeFlint,"Hoe");

ToolAPI.setTool(ItemID.swordFlint,"flint",ToolType.sword);
ToolAPI.setTool(ItemID.shovelFlint,"flint",ToolType.shovel);
ToolAPI.setTool(ItemID.pickaxeFlint,"flint",ToolType.pickaxe);
ToolAPI.setTool(ItemID.axeFlint,"flint",ToolType.axe);
ToolAPI.setTool(ItemID.hoeFlint,"flint",ToolType.hoe);

Callback.addCallback("PreLoaded",function(){
    Item.addRepairItemIds(ItemID.swordFlint,[318]);
    Item.addRepairItemIds(ItemID.shovelFlint,[318]);
    Item.addRepairItemIds(ItemID.pickaxeFlint,[318]);
    Item.addRepairItemIds(ItemID.axeFlint,[318]);
    Item.addRepairItemIds(ItemID.hoeFlint,[318]);

    Item.addCreativeGroup("sword",Translation.translate("Sword"),[ItemID.swordFlint]);
    Item.addCreativeGroup("shovel",Translation.translate("Shovel"),[ItemID.shovelFlint]);
    Item.addCreativeGroup("pickaxe",Translation.translate("Pickaxe"),[ItemID.pickaxeFlint]);
    Item.addCreativeGroup("axe",Translation.translate("Axe"),[ItemID.axeFlint]);
    Item.addCreativeGroup("hoe",Translation.translate("Hoe"),[ItemID.hoeFlint]);

    Recipes.addShaped({id:ItemID.swordFlint,count:1,data:0},["a","a","b"],["a",318,0,"b",280,0]);
    Recipes.addShaped({id:ItemID.shovelFlint,count:1,data:0},["a","b","b"],["a",318,0,"b",280,0]);
    Recipes.addShaped({id:ItemID.pickaxeFlint,count:1,data:0},["aaa"," b "," b "],["a",318,0,"b",280,0]);
    Recipes.addShaped({id:ItemID.axeFlint,count:1,data:0},["aa ","ab "," b "],["a",318,0,"b",280,0]);
    Recipes.addShaped({id:ItemID.hoeFlint,count:1,data:0},["aa "," b "," b "],["a",318,0,"b",280,0]);
});