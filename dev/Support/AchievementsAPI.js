ModAPI.addAPICallback("AchievementsAPI",function(api){
    var AchievementAPI = api.AchievementAPI;

    function _text_(text){
        return {text:text,translate:text};
    }

    AchievementAPI.registerGroup({
        unique:"ET-Main",
        name:"ETech",
        width:600,
        height:250,
        size:100,
        bgTexture:"stone",
        icon:{id:ItemID.ETICON}
    });

    // 太阳能发电机
    AchievementAPI.register("ET-Main",{
        unique:"SolarGenerator",
        name:_text_("Renewable Energy"),description:_text_("Make Solar Generator"),
        column:1,row:2,item:{id:BlockID.solarGenerator}
    });
    
    Callback.addCallback("tick",function(){
        if(Player.getInventoryItemCount(BlockID.solarGenerator,-1)){
            AchievementAPI.give("ET-Main","SolarGenerator");
        }
    });

    Translation.addTranslation("Renewable Energy",{zh_CN:"可再生能源"});
    Translation.addTranslation("Make Solar Generator",{zh_CN:"制作太阳能发电机"});

    // 离心机
    AchievementAPI.register("ET-Main",{
        unique:"Centrifuge",parent:{unique:"SolarGenerator"},
        name:_text_("Centrifugal Tech"),description:_text_("Make Centrifuge"),
        column:2,row:2,item:{id:BlockID.centrifuge}
    });
    
    Callback.addCallback("tick",function(){
        if(Player.getInventoryItemCount(BlockID.centrifuge,-1)){
            AchievementAPI.give("ET-Main","Centrifuge");
        }
    });

    Translation.addTranslation("Centrifugal Tech",{zh_CN:"离心科技"});
    Translation.addTranslation("Make Centrifuge",{zh_CN:"制作离心机"});

    // 锂电池
    AchievementAPI.register("ET-Main",{
        unique:"LithiumBattery",parent:{unique:"Centrifuge"},
        name:_text_("Energy Storage"),description:_text_("Make Lithium Battery"),
        column:2,row:1,item:{id:ItemID.lithiumBattery}
    });
    
    Callback.addCallback("tick",function(){
        if(Player.getInventoryItemCount(ItemID.lithiumBattery,-1)){
            AchievementAPI.give("ET-Main","LithiumBattery");
        }
    });

    Translation.addTranslation("Energy Storage",{zh_CN:"能量储存"});
    Translation.addTranslation("Make Lithium Battery",{zh_CN:"制作锂电池"});

    // 火力发电机
    AchievementAPI.register("ET-Main",{
        unique:"FireGenerator",parent:{unique:"LithiumBattery"},
        name:_text_("Heat Unit Transform"),description:_text_("Make Fire Generator"),
        column:3,row:1,item:{id:BlockID.fireGenerator}
    });
    
    Callback.addCallback("tick",function(){
        if(Player.getInventoryItemCount(BlockID.fireGenerator,-1)){
            AchievementAPI.give("ET-Main","FireGenerator");
        }
    });

    Translation.addTranslation("Heat Unit Transform",{zh_CN:"热能转换"});
    Translation.addTranslation("Make Fire Generator",{zh_CN:"制作火力发电机"});
    
    // 锂电池盒
    AchievementAPI.register("ET-Main",{
        unique:"LithiumBatteryBox",parent:{unique:"LithiumBattery"},
        name:_text_("Better Energy Storage"),description:_text_("Make Lithium Battery Box"),
        column:3,row:0,item:{id:BlockID.lithiumBatteryBox}
    });
    
    Callback.addCallback("tick",function(){
        if(Player.getInventoryItemCount(BlockID.lithiumBatteryBox,-1)){
            AchievementAPI.give("ET-Main","LithiumBatteryBox");
        }
    });

    Translation.addTranslation("Better Energy Storage",{zh_CN:"更好的能量储存"});
    Translation.addTranslation("Make Lithium Battery Box",{zh_CN:"制作锂电池盒"});

    // 低压变压器
    AchievementAPI.register("ET-Main",{
        unique:"LVTransformer",
        name:_text_("Energy Transform"),description:_text_("Make LV Transformer"),
        column:5,row:0,item:{id:BlockID.transformer,data:0}
    });

    Callback.addCallback("tick",function(){
        if(Player.getInventoryItemCount(BlockID.transformer,0)){
            AchievementAPI.give("ET-Main","LVTransformer");
        }
    });

    Translation.addTranslation("Energy Transform",{zh_CN:"能量转换"});
    Translation.addTranslation("Make LV Transformer",{zh_CN:"制作低压变压器"});

    // 中压变压器
    AchievementAPI.register("ET-Main",{
        unique:"MVTransformer",
        name:_text_("Energy Transform+"),description:_text_("Make MV Transformer"),
        column:6,row:0,item:{id:BlockID.transformer,data:1}
    });

    Callback.addCallback("tick",function(){
        if(Player.getInventoryItemCount(BlockID.transformer,1)){
            AchievementAPI.give("ET-Main","MVTransformer");
        }
    });

    Translation.addTranslation("Energy Transform+",{zh_CN:"能量转换+"});
    Translation.addTranslation("Make MV Transformer",{zh_CN:"制作中压变压器"});

    // 高压变压器
    AchievementAPI.register("ET-Main",{
        unique:"HVTransformer",
        name:_text_("Energy Transform++"),description:_text_("Make HV Transformer"),
        column:7,row:0,item:{id:BlockID.transformer,data:2}
    });

    Callback.addCallback("tick",function(){
        if(Player.getInventoryItemCount(BlockID.transformer,2)){
            AchievementAPI.give("ET-Main","HVTransformer");
        }
    });

    Translation.addTranslation("Energy Transform++",{zh_CN:"能量转换++"});
    Translation.addTranslation("Make HV Transformer",{zh_CN:"制作中压变压器"});

    // 超高压变压器
    AchievementAPI.register("ET-Main",{
        unique:"EVTransformer",
        name:_text_("Energy Transform+++"),description:_text_("Make EV Transformer"),
        column:8,row:0,item:{id:BlockID.transformer,data:3}
    });

    Callback.addCallback("tick",function(){
        if(Player.getInventoryItemCount(BlockID.transformer,3)){
            AchievementAPI.give("ET-Main","EVTransformer");
        }
    });

    Translation.addTranslation("Energy Transform+++",{zh_CN:"能量转换+++"});
    Translation.addTranslation("Make EV Transformer",{zh_CN:"制作超高压变压器"});

    // 粗制高炉
    AchievementAPI.register("ET-Main",{
        unique:"CrudeBlastFurnace",
        name:_text_("Ancient Steelmaking Technology"),description:_text_("Make Crude Blast Furnace"),
        column:3,row:2,item:{id:BlockID.crudeBlastFurnace}
    });

    Callback.addCallback("tick",function(){
        if(Player.getInventoryItemCount(BlockID.crudeBlastFurnace,-1)){
            AchievementAPI.give("ET-Main","CrudeBlastFurnace");
        }
    });

    Translation.addTranslation("Ancient Steelmaking Technology",{zh_CN:"古老的炼钢工艺"});
    Translation.addTranslation("Make Crude Blast Furnace",{zh_CN:"制作粗制高炉"});
});