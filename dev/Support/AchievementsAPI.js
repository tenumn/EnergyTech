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

    // 工业高炉
    AchievementAPI.register("ET-Main",{
        unique:"BlastFurnace",parent:{unique:"CrudeBlastFurnace"},
        name:_text_("Modern Steelmaking Technology"),description:_text_("Make Blast Furnace"),
        column:0,row:1,item:{id:BlockID.blastFurnace}
    });

    Callback.addCallback("tick",function(){
        var item = {id:BlockID.blastFurnace,data:0},data = AchievementAPI.getData("ET-Main","BlastFurnace");
        if(!data[item.id] && wheat.player.getInventoryItemCount(item.id,item.data)){
            data[item.id] = true;
            AchievementAPI.give("ET-Main","BlastFurnace");
        }
    });

    // 粗制高炉
    AchievementAPI.register("ET-Main",{
        unique:"CrudeBlastFurnace",
        name:_text_("Ancient Steelmaking Technology"),description:_text_("Make Crude Blast Furnace"),
        column:0,row:2,item:{id:BlockID.crudeBlastFurnace}
    });

    Callback.addCallback("tick",function(){
        var item = {id:BlockID.crudeBlastFurnace,data:0},data = AchievementAPI.getData("ET-Main","CrudeBlastFurnace");
        if(!data[item.id] && wheat.player.getInventoryItemCount(item.id,item.data)){
            data[item.id] = true;
            AchievementAPI.give("ET-Main","CrudeBlastFurnace");
        }
    });

    // 火力发电机
    AchievementAPI.register("ET-Main",{
        unique:"FireGenerator",parent:{unique:"LithiumBattery"},
        name:_text_("Heat Unit Transform"),description:_text_("Make Fire Generator"),
        column:1,row:1,item:{id:BlockID.fireGenerator}
    });
    
    Callback.addCallback("tick",function(){
        let item = {id:BlockID.fireGenerator,data:0},data = AchievementAPI.getData("ET-Main","FireGenerator");
        if(!data[item.id] && wheat.player.getInventoryItemCount(item.id,item.data)){
            data[item.id] = true;
            AchievementAPI.give("ET-Main","FireGenerator");
        }
    });

    // 太阳能发电机
    AchievementAPI.register("ET-Main",{
        unique:"SolarGenerator",parent:{unique:"CrudeBlastFurnace"},
        name:_text_("Renewable Energy"),description:_text_("Make Solar Generator"),
        column:1,row:2,item:{id:BlockID.solarGenerator}
    });
    
    Callback.addCallback("tick",function(){
        var item = {id:BlockID.solarGenerator,data:0},data = AchievementAPI.getData("ET-Main","SolarGenerator");
        if(!data[item.id] && wheat.player.getInventoryItemCount(item.id,item.data)){
            data[item.id] = true;
            AchievementAPI.give("ET-Main","SolarGenerator");
        }
    });

    // 夏洛克电池
    AchievementAPI.register("ET-Main",{
        unique:"SherlockBattery",parent:{unique:"LithiumBattery"},
        name:_text_("A Study in Scarlet"),description:_text_("Make Sherlock Battery"),
        column:2,row:0,item:{id:ItemID.sherlockBattery}
    });
    
    Callback.addCallback("tick",function(){
        var item = {id:ItemID.sherlockBattery,data:0},data = AchievementAPI.getData("ET-Main","SherlockBattery");
        if(!data[item.id] && wheat.player.getInventoryItemCount(item.id,item.data)){
            data[item.id] = true;
            AchievementAPI.give("ET-Main","SherlockBattery");
        }
    });

    // 锂电池
    AchievementAPI.register("ET-Main",{
        unique:"LithiumBattery",parent:{unique:"Centrifuge"},
        name:_text_("Energy Storage"),description:_text_("Make Lithium Battery"),
        column:2,row:1,item:{id:ItemID.lithiumBattery}
    });
    
    Callback.addCallback("tick",function(){
        var item = {id:ItemID.lithiumBattery,data:0},data = AchievementAPI.getData("ET-Main","LithiumBattery");
        if(!data[item.id] && wheat.player.getInventoryItemCount(item.id,item.data)){
            data[item.id] = true;
            AchievementAPI.give("ET-Main","LithiumBattery");
        }
    });

    // 离心机
    AchievementAPI.register("ET-Main",{
        unique:"Centrifuge",parent:{unique:"SolarGenerator"},
        name:_text_("Centrifugal Tech"),description:_text_("Make Centrifuge"),
        column:2,row:2,item:{id:BlockID.centrifuge}
    });
    
    Callback.addCallback("tick",function(){
        var item = {id:BlockID.centrifuge,data:0},data = AchievementAPI.getData("ET-Main","Centrifuge");
        if(!data[item.id] && wheat.player.getInventoryItemCount(item.id,item.data)){
            data[item.id] = true;
            AchievementAPI.give("ET-Main","Centrifuge");
        }
    });
    
    // 破碎机
    AchievementAPI.register("ET-Main",{
        unique:"Crusher",parent:{unique:"SolarGenerator"},
        name:_text_("They are all chips!"),description:_text_("Make Crusher"),
        column:2,row:3,item:{id:BlockID.crusher}
    });
    
    Callback.addCallback("tick",function(){
        var item = {id:BlockID.crusher,data:0},data = AchievementAPI.getData("ET-Main","Crusher");
        if(!data[item.id] && wheat.player.getInventoryItemCount(item.id,item.data)){
            data[item.id] = true;
            AchievementAPI.give("ET-Main","Crusher");
        }
    });

    // 夏洛克电池盒
    AchievementAPI.register("ET-Main",{
        unique:"SherlockBatteryBox",parent:{unique:"SherlockBattery"},
        name:_text_("Signature: Sherlock·Holmes"),description:_text_("Make Sherlock Battery Box"),
        column:3,row:0,item:{id:BlockID.sherlockBatteryBox}
    });
    
    Callback.addCallback("tick",function(){
        var item = {id:BlockID.sherlockBatteryBox,data:0},data = AchievementAPI.getData("ET-Main","SherlockBatteryBox");
        if(!data[item.id] && wheat.player.getInventoryItemCount(item.id,item.data)){
            data[item.id] = true;
            AchievementAPI.give("ET-Main","SherlockBatteryBox");
        }
    });

    // 锂电池盒
    AchievementAPI.register("ET-Main",{
        unique:"LithiumBatteryBox",parent:{unique:"LithiumBattery"},
        name:_text_("Better Energy Storage"),description:_text_("Make Lithium Battery Box"),
        column:3,row:1,item:{id:BlockID.lithiumBatteryBox}
    });
    
    Callback.addCallback("tick",function(){
        var item = {id:BlockID.lithiumBatteryBox,data:0},data = AchievementAPI.getData("ET-Main","LithiumBatteryBox");
        if(!data[item.id] && wheat.player.getInventoryItemCount(item.id,item.data)){
            data[item.id] = true;
            AchievementAPI.give("ET-Main","LithiumBatteryBox");
        }
    });

    // 打粉机
    AchievementAPI.register("ET-Main",{
        unique:"Macerator",parent:{unique:"Crusher"},
        name:_text_("Smash strike!"),description:_text_("Make Macerator"),
        column:3,row:3,item:{id:BlockID.macerator}
    });
    
    Callback.addCallback("tick",function(){
        var item = {id:BlockID.macerator,data:0},data = AchievementAPI.getData("ET-Main","Macerator");
        if(!data[item.id] && wheat.player.getInventoryItemCount(item.id,item.data)){
            data[item.id] = true;
            AchievementAPI.give("ET-Main","Macerator");
        }
    });

    // 低压变压器
    AchievementAPI.register("ET-Main",{
        unique:"LVTransformer",
        name:_text_("Energy Transform"),description:_text_("Make LV Transformer"),
        column:5,row:0,item:{id:BlockID.transformer,data:0}
    });

    Callback.addCallback("tick",function(){
        var item = {id:BlockID.transformer,data:0},data = AchievementAPI.getData("ET-Main","LVTransformer");
        if(!data[item.id] && wheat.player.getInventoryItemCount(item.id,item.data)){
            data[item.id] = true;
            AchievementAPI.give("ET-Main","LVTransformer");
        }
    });

    // 中压变压器
    AchievementAPI.register("ET-Main",{
        unique:"MVTransformer",
        name:_text_("Energy Transform+"),description:_text_("Make MV Transformer"),
        column:6,row:0,item:{id:BlockID.transformer,data:1}
    });

    Callback.addCallback("tick",function(){
        var item = {id:BlockID.transformer,data:1},data = AchievementAPI.getData("ET-Main","MVTransformer");
        if(!data[item.id] && wheat.player.getInventoryItemCount(item.id,item.data)){
            data[item.id] = true;
            AchievementAPI.give("ET-Main","MVTransformer");
        }
    });

    // 高压变压器
    AchievementAPI.register("ET-Main",{
        unique:"HVTransformer",
        name:_text_("Energy Transform++"),description:_text_("Make HV Transformer"),
        column:7,row:0,item:{id:BlockID.transformer,data:2}
    });

    Callback.addCallback("tick",function(){
        var item = {id:BlockID.transformer,data:2},data = AchievementAPI.getData("ET-Main","HVTransformer");
        if(!data[item.id] && wheat.player.getInventoryItemCount(item.id,item.data)){
            data[item.id] = true;
            AchievementAPI.give("ET-Main","HVTransformer");
        }
    });

    // 超高压变压器
    AchievementAPI.register("ET-Main",{
        unique:"EVTransformer",
        name:_text_("Energy Transform+++"),description:_text_("Make EV Transformer"),
        column:8,row:0,item:{id:BlockID.transformer,data:3}
    });

    Callback.addCallback("tick",function(){
        var item = {id:BlockID.transformer,data:3},data = AchievementAPI.getData("ET-Main","EVTransformer");
        if(!data[item.id] && wheat.player.getInventoryItemCount(item.id,item.data)){
            data[item.id] = true;
            AchievementAPI.give("ET-Main","EVTransformer");
        }
    });
});