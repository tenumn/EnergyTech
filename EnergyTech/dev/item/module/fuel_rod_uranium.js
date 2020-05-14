// 燃料棒(铀)
IDRegistry.genItemID("fuelRodUranium");
Item.createItem("fuelRodUranium","Fuel Rod(Uranium)",{name:"fuel_rod_uranium"});

ReactorRegistry.registerPrototype(ItemID.fuelRodUranium,{
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

    type:"fuel-rod"
});