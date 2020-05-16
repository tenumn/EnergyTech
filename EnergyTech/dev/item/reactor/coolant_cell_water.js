// 冷却单元(水)
IDRegistry.genItemID("coolantCellWater");
Item.createItem("coolantCellWater","Coolant Cell (Water)",{name:"coolant_cell_water",meta:0});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[ItemID.coolantCellWater]);

    Recipes.addShaped({id:ItemID.coolantCellWater,count:1,data:0},[
        " a ",
        "aba",
        " a "
    ],["a",ItemID.plateTin,0,"b",ItemID.cellWater,0]);
});

ReactorRegistry.registerPrototype(ItemID.coolantCellWater,{
    getDurability:function(){
        return 10000;
    },

    breakDurability:function(side){
        var damage = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") damage += 10;
        }
        return damage;
    },

    getCooling:function(side){
        var cooling = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") cooling += 10;
        }
        return cooling;
    },

    type:"coolant-cell"
});

// 二联冷却单元(水)
IDRegistry.genItemID("coolantCellDualWater");
Item.createItem("coolantCellDualWater","Dual Coolant Cell (Water)",{name:"coolant_cell_water",meta:1});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[ItemID.coolantCellDualWater]);

    Recipes.addShaped({id:ItemID.coolantCellDualWater,count:1,data:0},[
        "aba"
    ],["a",ItemID.coolantCellWater,0,"b",ItemID.plateTin,0]);
});

ReactorRegistry.registerPrototype(ItemID.coolantCellDualWater,{
    getDurability:function(){
        return 20000;
    },

    breakDurability:function(side){
        var damage = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") damage += 20;
        }
        return damage;
    },

    getCooling:function(side){
        var cooling = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") cooling += 20;
        }
        return cooling;
    },

    type:"coolant-cell"
});

// 四联冷却单元(水)
IDRegistry.genItemID("coolantCellQuadWater");
Item.createItem("coolantCellQuadWater","Quad Coolant Cell (Water)",{name:"coolant_cell_water",meta:2});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[ItemID.coolantCellQuadWater]);

    Recipes.addShaped({id:ItemID.coolantCellQuadWater,count:1,data:0},[
        "aba",
        "cbc",
        "aba"
    ],["a",ItemID.coolantCellWater,0,"b",ItemID.plateTin,0,"c",ItemID.plateCopper,0]);

    Recipes.addShaped({id:ItemID.coolantCellQuadWater,count:1,data:0},[
        " a ",
        "cbc",
        " a "
    ],["a",ItemID.coolantCellDualWater,0,"b",ItemID.plateTin,0,"c",ItemID.plateCopper,0]);
});

ReactorRegistry.registerPrototype(ItemID.coolantCellQuadWater,{
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