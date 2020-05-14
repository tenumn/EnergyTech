// 中子反射板
IDRegistry.genItemID("neutronReflector");
Item.createItem("neutronReflector","Neutron Reflector",{name:"neutron_reflector"});

Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:ItemID.neutronReflector,count:1,data:0},[
        "aba",
        "bcb",
        "aba"
    ],["a",ItemID.dustTin,0,"b",ItemID.dustCarbon,0,"c",ItemID.plateCopper,0]);
});

ReactorRegistry.registerPrototype(ItemID.neutronReflector,{
    breakDurability:function(side){
        var damage = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") damage += 5;
        }
        return damage;
    },

    getEnergyOutput:function(side){
        var output = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod"){
                var reactor = ReactorRegistry.isPrototype(side[i].id);
                output += reactor.getEnergyOutput(side);
            }
        }
        return output;
    },

    type:"neutron-reflector"
});