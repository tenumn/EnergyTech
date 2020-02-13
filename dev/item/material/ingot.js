IDRegistry.genItemID("ingotCopper");
Item.createItem("ingotCopper","Copper Ingot",{name:"copper_ingot"});

IDRegistry.genItemID("ingotTin");
Item.createItem("ingotTin","Tin Ingot",{name:"tin_ingot"});

IDRegistry.genItemID("ingotLead");
Item.createItem("ingotLead","Lead Ingot",{name:"lead_ingot"});

IDRegistry.genItemID("ingotWroughtIron");
Item.createItem("ingotWroughtIron","Wrought Iron Ingot",{name:"wrought_iron_ingot"});

IDRegistry.genItemID("ingotSteel");
Item.createItem("ingotSteel","Steel Ingot",{name:"steel_ingot"});

IDRegistry.genItemID("ingotAntimony");
Item.createItem("ingotAntimony","Antimony Ingot",{name:"antimony_ingot"});

IDRegistry.genItemID("ingotLithium");
Item.createItem("ingotLithium","Lithium Ingot",{name:"lithium_ingot"});

IDRegistry.genItemID("ingotTungsten");
Item.createItem("ingotTungsten","Tungsten Ingot",{name:"tungsten_ingot"});

IDRegistry.genItemID("ingotLeadAntimony");
Item.createItem("ingotLeadAntimony","Lead-Antimony Alloy Ingot",{name:"lead_antimony_ingot"});

Callback.addCallback("PreLoaded",function(){
    ETRecipe.addBlastFurnaceRecipe({id:ItemID.ingotWroughtIron,count:1,data:0},{id:265                    ,count:1,data:0});
    ETRecipe.addBlastFurnaceRecipe({id:ItemID.ingotSteel      ,count:1,data:0},{id:ItemID.ingotWroughtIron,count:1,data:0});
});