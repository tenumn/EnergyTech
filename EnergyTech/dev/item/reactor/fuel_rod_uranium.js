// 燃料棒(铀)
IDRegistry.genItemID("fuelRodUranium");
Item.createItem("fuelRodUranium","Fuel Rod(Uranium)",{name:"fuel_rod_uranium",meta:0});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[ItemID.fuelRodUranium]);
});

ReactorRegistry.registerPrototype(ItemID.fuelRodUranium,{
    getDurability:function(){
        return 10000;
    },

    getHeat:function(side){
        var heat = 5,pulse = 1;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") pulse++;
        }
        return heat * pulse;
    },

    getEnergyOutput:function(side){
        var output = 5,pulse = 1;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") pulse++;
        }
        return output * pulse;
    },

    destroy:function(side,slot){
        slot.id = ItemID.fuelRodDepletedUranium;
    },

    type:"fuel-rod"
});

// 双联燃料棒(铀)
IDRegistry.genItemID("fuelRodDualUranium");
Item.createItem("fuelRodDualUranium","Dual Fuel Rod(Uranium)",{name:"fuel_rod_uranium",meta:1});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[ItemID.fuelRodDualUranium]);

    Recipes.addShaped({id:ItemID.fuelRodDualUranium,count:1,data:0},[
        "aba"
    ],["a",ItemID.fuelRodUranium,0,"b",ItemID.plateIron,0]);
});

ReactorRegistry.registerPrototype(ItemID.fuelRodDualUranium,{
    getDurability:function(){
        return 20000;
    },

    getHeat:function(side){
        var heat = 10,pulse = 1;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") pulse++;
        }
        return heat * pulse;
    },

    getEnergyOutput:function(side){
        var output = 10,pulse = 1;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") pulse++;
        }
        return output * pulse;
    },

    destroy:function(side,slot){
        slot.id = ItemID.fuelRodDualDepletedUranium;
    },

    type:"fuel-rod"
});

// 四联燃料棒(铀)
IDRegistry.genItemID("fuelRodQuadUranium");
Item.createItem("fuelRodQuadUranium","Quad Fuel Rod(Uranium)",{name:"fuel_rod_uranium",meta:2});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[ItemID.fuelRodQuadUranium]);

    Recipes.addShaped({id:ItemID.fuelRodQuadUranium,count:1,data:0},[
        "aba",
        "cbc",
        "aba"
    ],["a",ItemID.fuelRodUranium,0,"b",ItemID.plateIron,0,"c",ItemID.plateCopper,0]);

    Recipes.addShaped({id:ItemID.fuelRodQuadUranium,count:1,data:0},[
        " a ",
        "cbc",
        " a "
    ],["a",ItemID.fuelRodDualUranium,0,"b",ItemID.plateIron,0,"c",ItemID.plateCopper,0]);
});

ReactorRegistry.registerPrototype(ItemID.fuelRodQuadUranium,{
    getDurability:function(){
        return 40000;
    },

    getHeat:function(side){
        var heat = 20;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") heat += 20;
        }
        return heat;
    },

    getEnergyOutput:function(side){
        var output = 20;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") output += 20;
        }
        return output;
    },

    destroy:function(side,slot){
        slot.id = ItemID.fuelRodQuadDepletedUranium;
    },

    type:"fuel-rod"
});

IDRegistry.genItemID("fuelRodDepletedUranium");
Item.createItem("fuelRodDepletedUranium","Fuel Rod(Depleted Uranium)",{name:"fuel_rod_depleted_uranium",meta:0});

IDRegistry.genItemID("fuelRodDualDepletedUranium");
Item.createItem("fuelRodDualDepletedUranium","Dual Fuel Rod(Depleted Uranium)",{name:"fuel_rod_depleted_uranium",meta:1});

IDRegistry.genItemID("fuelRodQuadDepletedUranium");
Item.createItem("fuelRodQuadDepletedUranium","Quad Fuel Rod(Depleted Uranium)",{name:"fuel_rod_depleted_uranium",meta:2});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[
        ItemID.fuelRodDepletedUranium,
        ItemID.fuelRodDualDepletedUranium,
        ItemID.fuelRodQuadDepletedUranium
    ]);
});