ToolAPI.addToolMaterial("lead",{durability:474,level:2,efficiency:5,damage:4,enchantability:14});

IDRegistry.genItemID("swordLead");
IDRegistry.genItemID("shovelLead");
IDRegistry.genItemID("pickaxeLead");
IDRegistry.genItemID("axeLead");
IDRegistry.genItemID("hoeLead");

Item.createItem("swordLead","Lead Sword",{name:"lead_sword"},{stack:1});
Item.createItem("shovelLead","Lead Shovel",{name:"lead_shovel"},{stack:1});
Item.createItem("pickaxeLead","Lead Pickaxe",{name:"lead_pickaxe"},{stack:1});
Item.createItem("axeLead","Lead Axe",{name:"lead_axe"},{stack:1});
Item.createItem("hoeLead","Lead Hoe",{name:"lead_hoe"},{stack:1});

Tool.registerTool(ItemID.swordLead,"Sword");
Tool.registerTool(ItemID.shovelLead,"Shovel");
Tool.registerTool(ItemID.pickaxeLead,"Pickaxe");
Tool.registerTool(ItemID.axeLead,"Axe");
Tool.registerTool(ItemID.hoeLead,"Hoe");

ToolAPI.setTool(ItemID.swordLead,"lead",ToolType.sword);
ToolAPI.setTool(ItemID.shovelLead,"lead",ToolType.shovel);
ToolAPI.setTool(ItemID.pickaxeLead,"lead",ToolType.pickaxe);
ToolAPI.setTool(ItemID.axeLead,"lead",ToolType.axe);
ToolAPI.setTool(ItemID.hoeLead,"lead",ToolType.hoe);

Callback.addCallback("PreLoaded",function(){
    Item.addRepairItemIds(ItemID.swordLead,[ItemID.ingotLead]);
    Item.addRepairItemIds(ItemID.shovelLead,[ItemID.ingotLead]);
    Item.addRepairItemIds(ItemID.pickaxeLead,[ItemID.ingotLead]);
    Item.addRepairItemIds(ItemID.axeLead,[ItemID.ingotLead]);
    Item.addRepairItemIds(ItemID.hoeLead,[ItemID.ingotLead]);

    Item.addCreativeGroup("sword",Translation.translate("Sword"),[ItemID.swordLead]);
    Item.addCreativeGroup("shovel",Translation.translate("Shovel"),[ItemID.shovelLead]);
    Item.addCreativeGroup("pickaxe",Translation.translate("Pickaxe"),[ItemID.pickaxeLead]);
    Item.addCreativeGroup("axe",Translation.translate("Axe"),[ItemID.axeLead]);
    Item.addCreativeGroup("hoe",Translation.translate("Hoe"),[ItemID.hoeLead]);
    
    var file = Tool.getAllTool("File"),hammer = Tool.getAllTool("Hammer");
    for(let i = 0;i < file.length;i++){
        for(let ii = 0;ii < hammer.length;ii++){
            RecipeRegistry.addShapedRecipe({id:ItemID.swordLead,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateLead,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.shovelLead,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateLead,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.pickaxeLead,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateLead,0,"b",280,0,"c",ItemID.ingotLead,0,"d",file[i],0,"e",hammer[ii],0],{3:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.axeLead,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateLead,0,"b",280,0,"c",ItemID.ingotLead,0,"d",file[i],0,"e",hammer[ii],0],{2:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.hoeLead,count:1,data:0},["aac","db "," b "],["a",ItemID.plateLead,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{2:1,3:1});
        }
    }
});