// 冷却单元(氦)
IDRegistry.genItemID("coolantCellHelium");
Item.createItem("coolantCellHelium","Coolant Cell (Helium)",{name:"coolant_cell_helium",meta:0});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[ItemID.coolantCellHelium]);

    Recipes.addShaped({id:ItemID.coolantCellHelium,count:1,data:0},[
        " a ",
        "aba",
        " a "
    ],["a",ItemID.plateTin,0,"b",ItemID.cellHelium,0]);
});

ReactorRegistry.registerPrototype(ItemID.coolantCellHelium,{
    getDurability:function(){
        return 40000;
    },

    breakDurability:function(side){
        var damage = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") damage += 40;
        }
        return damage;
    },

    getCooling:function(side){
        var cooling = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") cooling += 40;
        }
        return cooling;
    },

    type:"coolant-cell"
});

// 二联冷却单元(氦)
IDRegistry.genItemID("coolantCellDualHelium");
Item.createItem("coolantCellDualHelium","Dual Coolant Cell (Helium)",{name:"coolant_cell_helium",meta:1});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[ItemID.coolantCellDualHelium]);

    Recipes.addShaped({id:ItemID.coolantCellDualHelium,count:1,data:0},[
        "aba"
    ],["a",ItemID.coolantCellHelium,0,"b",ItemID.plateTin,0]);
});

ReactorRegistry.registerPrototype(ItemID.coolantCellDualHelium,{
    getDurability:function(){
        return 80000;
    },

    breakDurability:function(side){
        var damage = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") damage += 80;
        }
        return damage;
    },

    getCooling:function(side){
        var cooling = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") cooling += 80;
        }
        return cooling;
    },

    type:"coolant-cell"
});

// 四联冷却单元(氦)
IDRegistry.genItemID("coolantCellQuadHelium");
Item.createItem("coolantCellQuadHelium","Quad Coolant Cell (Helium)",{name:"coolant_cell_helium",meta:2});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[ItemID.coolantCellQuadHelium]);

    Recipes.addShaped({id:ItemID.coolantCellQuadHelium,count:1,data:0},[
        "aba",
        "cbc",
        "aba"
    ],["a",ItemID.coolantCellHelium,0,"b",ItemID.plateTin,0,"c",ItemID.plateCopper,0]);

    Recipes.addShaped({id:ItemID.coolantCellQuadHelium,count:1,data:0},[
        " a ",
        "cbc",
        " a "
    ],["a",ItemID.coolantCellDualHelium,0,"b",ItemID.plateTin,0,"c",ItemID.plateCopper,0]);
});

ReactorRegistry.registerPrototype(ItemID.coolantCellQuadHelium,{
    getDurability:function(){
        return 160000;
    },

    breakDurability:function(side){
        var damage = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") damage += 160;
        }
        return damage;
    },

    getCooling:function(side){
        var cooling = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") cooling += 160;
        }
        return cooling;
    },

    type:"coolant-cell"
});