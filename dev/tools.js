// ============================================================================================================ //
// ================================================== Wrench ================================================== //
// ============================================================================================================ //
CreateRegistry.createWrench = function(id,name,texture,damage){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    ToolRegistry.addTool(ItemID[id],"Wrench");
    Item.setMaxDamage(ItemID[id],damage);
}

CreateRegistry.createWrench("wrenchIron","Iron Wrench",{name:"iron_wrench",meta:0},128);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.wrenchIron,count:1,data:0},["a a","aba"," b "],["a",ItemID.plateIron,0,"b",265,0]);
});

Translation.addTranslation("Iron Wrench",{zh_CN:"铁扳手"});
// ============================================================================================================ //
// ================================================== Hammer ================================================== //
// ============================================================================================================ //
CreateRegistry.createHammer = function(id,name,texture,damage){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    ToolRegistry.addTool(ItemID[id],"Hammer");
    Item.setMaxDamage(ItemID[id],damage);
}

CreateRegistry.createHammer("hammerIron","Iron Hammer",{name:"iron_hammer",meta:0},128);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.hammerIron,count:1,data:0},[" ab"," ca","c  "],["a",265,0,"b",287,0,"c",280,0]);
});

Translation.addTranslation("Iron Hammer",{zh_CN:"铁锤"});
// ============================================================================================================ //
// ================================================== Cutter ================================================== //
// ============================================================================================================ //
CreateRegistry.createCutter = function(id,name,texture,damage){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    ToolRegistry.addTool(ItemID[id],"Cutter");
    Item.setMaxDamage(ItemID[id],damage);
}

CreateRegistry.createHammer("cutterIron","Iron Cutter",{name:"iron_cutter",meta:0},128);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.cutterIron,count:1,data:0},["a a","aba","b b"],["a",ItemID.plateIron,0,"b",265,0]);
});

Translation.addTranslation("Iron Cutter",{zh_CN:"铁剪线钳"});