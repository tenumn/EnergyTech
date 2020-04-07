// 燃料棒(铀)
IDRegistry.genBlockID("fuelRodUranium");
Block.createBlock("fuelRodUranium",[
    {name:"Fuel Rod(Uranium)",texture:[["fuel_rod_bottom",0],["fuel_rod_top",0],["fuel_rod_uranium",10]],inCreative:true}
],"opaque");
TileRenderer.setStandartModel(BlockID.fuelRodUranium,[["fuel_rod_bottom",0],["fuel_rod_top",0],["fuel_rod_uranium",0],["fuel_rod_uranium",0],["fuel_rod_uranium",0],["fuel_rod_uranium",0]]);
for(let i = 0;i <= 10;i++){
    TileRenderer.registerRenderModel(BlockID.fuelRodUranium,i,[["fuel_rod_bottom",0],["fuel_rod_top",0],["fuel_rod_uranium",i],["fuel_rod_uranium",i],["fuel_rod_uranium",i],["fuel_rod_uranium",i]]);
}

Callback.addCallback("PreLoaded",function(){
    // 合成
	Recipes.addShaped({id:BlockID.fuelRodUranium,count:1,data:0},[" a ","aba"," a "],["a",ItemID.plateTin,0,"b",ItemID.enrichedUranium,0]);
});

Machine.registerPrototype(BlockID.fuelRodUranium,{
    defaultValues:{durability:16384},
    tick:function(){this.renderer();},
    renderer:function(){TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,Math.round(this.data.durability / this.defaultValues.durability * 10));}
});

Reactor.registerModule(BlockID.fuelRodUranium,function(id,data,coords){
    let heat = 3,fuel = 1;
    for(let index in directions){
        var dir = directions[index],block = World.getBlock(coords.x + dir[0],coords.y + dir[1],coords.z + dir[2]),type = Reactor.getModuleType(block.id);
            if(type == "FuelRod"){heat += 3,fuel += 1;}
    }
    data.heat += heat,data.fuel += fuel;
    return 1;
},{type:"FuelRod",durability:16384});

// 冷却器(水)
IDRegistry.genBlockID("coolantWater");
Block.createBlock("coolantWater",[
    {name:"Coolant Block(Water)",texture:[["machineBottom",0],["machineTop",0],["coolant_water",10]],inCreative:true}
],"opaque");
TileRenderer.setStandartModel(BlockID.coolantWater,[["machineBottom",0],["machineTop",0],["coolant_water",0],["coolant_water",0],["coolant_water",0],["coolant_water",0]]);
for(let i = 0;i <= 10;i++){
    TileRenderer.registerRenderModel(BlockID.coolantWater,i,[["machineBottom",0],["machineTop",0],["coolant_water",i],["coolant_water",i],["coolant_water",i],["coolant_water",i]]);
}

Callback.addCallback("PreLoaded",function(){
    // 合成
	Recipes.addShaped({id:BlockID.coolantWater,count:1,data:0},[" a ","aba"," a "],["a",ItemID.plateTin,0,"b",ItemID.cellWater,0]);
});

Machine.registerPrototype(BlockID.coolantWater,{
    defaultValues:{durability:16384},
    tick:function(){this.renderer();},
    renderer:function(){TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,Math.round(this.data.durability / this.defaultValues.durability * 10));}
});

Reactor.registerModule(BlockID.coolantWater,function(id,data,coords){
    let coolant = 3;
    for(let index in directions){
        var dir = directions[index],block = World.getBlock(coords.x + dir[0],coords.y + dir[1],coords.z + dir[2]),type = Reactor.getModuleType(block.id);
        if(type == "Coolant"){coolant += 3;}
    }
    data.coolant += coolant;
    return 1;
},{type:"Coolant",durability:16384});

// 散热器
IDRegistry.genBlockID("heatSink");
Block.createBlock("heatSink",[
    {name:"Heat Sink",texture:[["heatSink",0]],inCreative:true}
],"opaque");

Callback.addCallback("PreLoaded",function(){
    // 合成
	Recipes.addShaped({id:BlockID.heatSink,count:1,data:0},["aba","bcb","aba"],["a",ItemID.stickIron,0,"b",ItemID.plateIron,0,"c",ItemID.electricMotor,0]);
});

Reactor.registerModule(BlockID.heatSink,function(id,data,coords){
    let heat = 3,coolant = 3;
    for(let index in directions){
        var dir = directions[index],block = World.getBlock(coords.x + dir[0],coords.y + dir[1],coords.z + dir[2]),type = Reactor.getModuleType(block.id);
        if(type == "FuelRod"){heat += 3,coolant += 3;}
    }
    data.heat += heat;
    data.coolant += coolant;
    return 1;
},{type:"HeatSink",durability:16384});

// 中子反射板
IDRegistry.genBlockID("neutronReflector");
Block.createBlock("neutronReflector",[
    {name:"Neutron Reflector",texture:[["neutron_reflector",0]],inCreative:true}
],"opaque");

Callback.addCallback("PreLoaded",function(){
    // 合成
	Recipes.addShaped({id:BlockID.neutronReflector,count:1,data:0},["aba","bcb","aba"],["a",ItemID.dustTin,0,"b",ItemID.dustCarbon,0,"c",ItemID.plateCopper,0]);
});

Reactor.registerModule(BlockID.neutronReflector,function(id,data,coords){
    let fuel = 0;
    for(let index in directions){
        var dir = directions[index],block = World.getBlock(coords.x + dir[0],coords.y + dir[1],coords.z + dir[2]),type = Reactor.getModuleType(block.id);
        if(type == "FuelRod"){fuel += 1;}
    }
    data.fuel += fuel;
    return 1;
},{type:"HeatSink",durability:8192});

// 反应堆外壳
IDRegistry.genBlockID("reactorCasing");
Block.createBlock("reactorCasing",[
    {name:"Reactor Casing",texture:[["reactorCasing",0]],inCreative:true}
],"opaque");

Reactor.registerModule(BlockID.reactorCasing,function(id,data,coords){
    let hard = 0;
    for(let index in directions){
        var dir = directions[index],block = World.getBlock(coords.x + dir[0],coords.y + dir[1],coords.z + dir[2]),type = Reactor.getModuleType(block.id);
        if(type == "Casing"){hard += 1;}
    }
    data.hard += hard;
    return 1;
},{type:"Casing",durability:16384});

Callback.addCallback("PreLoaded",function(){
    // 合成
    Recipes.addShaped({id:BlockID.reactorCasing,count:1,data:0},["aa","aa"],["a",ItemID.plateLead,0]);
});

// 铜线圈
IDRegistry.genBlockID("coilCopper");
Block.createBlock("coilCopper",[
    {name:"Copper Coil",texture:[["machineBottom",0],["machineTop",0],["coilCopper",0]],inCreative:true}
],"opaque");

Reactor.registerModule(BlockID.coilCopper,function(id,data,coords){
    let durable = 0,heat = 3,fuel = 1,coolant = 3;
    for(let index in directions){
        var dir = directions[index],block = World.getBlock(coords.x + dir[0],coords.y + dir[1],coords.z + dir[2]),type = Reactor.getModuleType(block.id);
        if(type == "Coil"){heat += 3,fuel += 1,coolant += 3;}
        if(type != "Coil" || type != "Casing" || type != "Coolant"){durable += 2;}
    }
    data.heat += heat,data.fuel += fuel,data.coolant += coolant;
    return durable;
},{type:"Coil",durability:16384});

// 锡线圈
IDRegistry.genBlockID("coilTin");
Block.createBlock("coilTin",[
    {name:"Tin Coil",texture:[["machineBottom",0],["machineTop",0],["coilTin",0]],inCreative:true}
],"opaque");

Reactor.registerModule(BlockID.coilTin,function(id,data,coords){
    let durable = 0,heat = 1,fuel = 1,coolant = 1;
    for(let index in directions){
        var dir = directions[index],block = World.getBlock(coords.x + dir[0],coords.y + dir[1],coords.z + dir[2]),type = Reactor.getModuleType(block.id);
        if(type == "Coil"){heat += 1,fuel += 1,coolant += 1;}
        if(type != "Coil" || type != "Casing" || type != "Coolant"){durable += 2;}
    }
    data.heat += heat,data.fuel += fuel,data.coolant += coolant;
    return durable;
},{type:"Coil",durability:16384});

Callback.addCallback("PreLoaded",function(){
    // 合成
    Recipes.addShaped({id:BlockID.coilCopper,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.wireCopper,0]);
	Recipes.addShaped({id:BlockID.coilTin   ,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.wireTin   ,0]);
});