// 冷却单元(恶魂之泪)
IDRegistry.genItemID("coolantCellGhastTear");
Item.createItem("coolantCellGhastTear","Coolant Cell (Ghast Tear)",{name:"coolant_cell_ghast_tear",meta:0});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[ItemID.coolantCellGhastTear]);

    Recipes.addShaped({id:ItemID.coolantCellGhastTear,count:1,data:0},[
        " a ",
        "aba",
        " a "
    ],["a",ItemID.plateNether,0,"b",ItemID.liquidCellGhastTear,0]);
});

ReactorRegistry.registerPrototype(ItemID.coolantCellGhastTear,{
    getDurability:function(){
        return 30000;
    },

    getHeat:function(side){
        var heat = 5;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") heat += 5;
        }
        return heat;
    },

    breakDurability:function(side){
        var damage = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") damage += 30;
        }
        return damage;
    },

    getCooling:function(side){
        var cooling = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") cooling += 30;
        }
        return cooling;
    },

    type:"coolant-cell"
});

// 二联冷却单元(恶魂之泪)
IDRegistry.genItemID("coolantCellDualGhastTear");
Item.createItem("coolantCellDualGhastTear","Dual Coolant Cell (Ghast Tear)",{name:"coolant_cell_ghast_tear",meta:1});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[ItemID.coolantCellDualGhastTear]);

    Recipes.addShaped({id:ItemID.coolantCellDualGhastTear,count:1,data:0},[
        "aba"
    ],["a",ItemID.coolantCellGhastTear,0,"b",ItemID.plateNether,0]);
});

ReactorRegistry.registerPrototype(ItemID.coolantCellDualGhastTear,{
    getDurability:function(){
        return 60000;
    },

    getHeat:function(side){
        var heat = 10;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") heat += 10;
        }
        return heat;
    },

    breakDurability:function(side){
        var damage = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") damage += 60;
        }
        return damage;
    },

    getCooling:function(side){
        var cooling = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") cooling += 60;
        }
        return cooling;
    },

    type:"coolant-cell"
});

// 四联冷却单元(恶魂之泪)
IDRegistry.genItemID("coolantCellQuadGhastTear");
Item.createItem("coolantCellQuadGhastTear","Quad Coolant Cell (Ghast Tear)",{name:"coolant_cell_ghast_tear",meta:2});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[ItemID.coolantCellQuadGhastTear]);

    Recipes.addShaped({id:ItemID.coolantCellQuadGhastTear,count:1,data:0},[
        "aba",
        "cbc",
        "aba"
    ],["a",ItemID.coolantCellGhastTear,0,"b",ItemID.plateNether,0,"c",ItemID.plateCopper,0]);

    Recipes.addShaped({id:ItemID.coolantCellQuadGhastTear,count:1,data:0},[
        " a ",
        "cbc",
        " a "
    ],["a",ItemID.coolantCellDualGhastTear,0,"b",ItemID.plateNether,0,"c",ItemID.plateCopper,0]);
});

ReactorRegistry.registerPrototype(ItemID.coolantCellQuadGhastTear,{
    getDurability:function(){
        return 120000;
    },

    getHeat:function(side){
        var heat = 15;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") heat += 15;
        }
        return heat;
    },

    breakDurability:function(side){
        var damage = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") damage += 120;
        }
        return damage;
    },

    getCooling:function(side){
        var cooling = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") cooling += 120;
        }
        return cooling;
    },

    type:"coolant-cell"
});