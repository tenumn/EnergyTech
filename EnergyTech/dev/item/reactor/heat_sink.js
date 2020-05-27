// [散热片]Heat Sink
IDRegistry.genItemID("heatSink");
Item.createItem("heatSink","Heat Sink",{name:"heat_sink"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[ItemID.heatSink]);

	Recipes.addShaped({id:ItemID.heatSink,count:1,data:0},[
        "aba",
        "bcb",
        "aba"
    ],["a",ItemID.stickIron,0,"b",ItemID.plateIron,0,"c",ItemID.electricMotor,0]);
});

ReactorRegistry.registerPrototype(ItemID.heatSink,{
    getDurability:function(){
        return 10000;
    },

    breakDurability:function(side){
        var heat = 0;
        for(let i in side){
            var type = ReactorRegistry.getType(side[i].id);
            if(type == "fuel-rod") heat += 5;
        }
        return heat;
    },

    getCooling:function(side){
        var heat = 0;
        for(let i in side){
            var type = ReactorRegistry.getType(side[i].id);
            if(type == "fuel-rod") heat += 5;
        }
        return heat;
    },

    type:"heat-sink"
});