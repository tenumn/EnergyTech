// 燃料棒(铀)
IDRegistry.genBlockID("fuelRodUranium");
Block.createBlock("fuelRodUranium",[
    {name:"Fuel Rod(Uranium)",texture:[["machine_bottom",0],["machine_top",0],["fuel_rod_uranium",10]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.fuelRodUranium,[["machine_bottom",0],["machine_top",0],["fuel_rod_uranium",0],["fuel_rod_uranium",0],["fuel_rod_uranium",0],["fuel_rod_uranium",0]]);
for(let i = 0;i <= 10;i++){
    TileRenderer.registerRenderModel(BlockID.fuelRodUranium,i,[["machine_bottom",0],["machine_top",0],["fuel_rod_uranium",i],["fuel_rod_uranium",i],["fuel_rod_uranium",i],["fuel_rod_uranium",i]]);
}

Machine.registerPrototype(BlockID.fuelRodUranium,{
    defaultValues:{durability:16384},
    tick:function(){this.renderer();},
    renderer:function(){TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,Math.round(this.data.durability / this.defaultValues.durability * 10));}
});

NuclearReactor.registerModule(BlockID.fuelRodUranium,function(coords,data){
    let heat = 3,fuel = 1;
    for(let side = 0;side < 6;side++){
        var relative = World.getRelativeCoords(coords.x,coords.y,coords.z,side),block = World.getBlock(relative.x,relative.y,relative.z),type = NuclearReactor.getModuleType(block.id);
        if(type == "FuelRod"){heat += 3,fuel += 1;}
    }
    data.heat += heat,data.fuel += fuel;
    return 1;
},{type:"FuelRod",durability:16384});

// 冷却器(水)
IDRegistry.genBlockID("coolantWater");
Block.createBlock("coolantWater",[
    {name:"Coolant Block(Water)",texture:[["machine_bottom",0],["machine_top",0],["coolant_water",10]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.coolantWater,[["machine_bottom",0],["machine_top",0],["coolant_water",0],["coolant_water",0],["coolant_water",0],["coolant_water",0]]);
for(let i = 0;i <= 10;i++){
    TileRenderer.registerRenderModel(BlockID.coolantWater,i,[["machine_bottom",0],["machine_top",0],["coolant_water",i],["coolant_water",i],["coolant_water",i],["coolant_water",i]]);
}

Machine.registerPrototype(BlockID.coolantWater,{
    defaultValues:{durability:16384},
    tick:function(){this.renderer();},
    renderer:function(){TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,Math.round(this.data.durability / this.defaultValues.durability * 10));}
});

NuclearReactor.registerModule(BlockID.coolantWater,function(coords,data){
    let coolant = 3;
    for(let side = 0;side < 6;side++){
        var relative = World.getRelativeCoords(coords.x,coords.y,coords.z,side),block = World.getBlock(relative.x,relative.y,relative.z),type = NuclearReactor.getModuleType(block.id);
        if(type == "Coolant"){coolant += 3;}
    }
    data.coolant += coolant;
    return 1;
},{type:"Coolant",durability:16384});

// 散热器
IDRegistry.genBlockID("heatSink");
Block.createBlock("heatSink",[
    {name:"Heat Sink",texture:[["heatSink",0]],inCreative:true}
],"machine");

NuclearReactor.registerModule(BlockID.heatSink,function(coords,data){
    let heat = 3,coolant = 3;
    for(let side = 0;side < 6;side++){
        var relative = World.getRelativeCoords(coords.x,coords.y,coords.z,side),block = World.getBlock(relative.x,relative.y,relative.z),type = NuclearReactor.getModuleType(block.id);
        if(type == "FuelRod")heat += 3,coolant += 3;
    }
    data.heat += heat;
    data.coolant += coolant;
    return 1;
},{type:"HeatSink",durability:16384});

// 中子反射板
IDRegistry.genBlockID("neutronReflector");
Block.createBlock("neutronReflector",[
    {name:"Neutron Reflector",texture:[["neutron_reflector",0]],inCreative:true}
],"machine");

NuclearReactor.registerModule(BlockID.neutronReflector,function(coords,data){
    let fuel = 0;
    for(let side = 0;side < 6;side++){
        var relative = World.getRelativeCoords(coords.x,coords.y,coords.z,side),block = World.getBlock(relative.x,relative.y,relative.z),type = NuclearReactor.getModuleType(block.id);
        if(type == "FuelRod") fuel += 1;
    }
    data.fuel += fuel;
    return 1;
},{type:"HeatSink",durability:8192});

// 反应堆外壳
IDRegistry.genBlockID("reactorCasing");
Block.createBlock("reactorCasing",[
    {name:"Reactor Casing",texture:[["reactorCasing",0]],inCreative:true}
],"machine");

NuclearReactor.registerModule(BlockID.reactorCasing,function(coords,data){
    let hard = 0;
    for(let side = 0;side < 6;side++){
        var relative = World.getRelativeCoords(coords.x,coords.y,coords.z,side),block = World.getBlock(relative.x,relative.y,relative.z),type = FusionReactor.getModuleType(block.id);
        if(type == "Casing") hard += 1;
    }
    data.hard += hard;
    return 1;
},{type:"Casing",durability:16384});
FusionReactor.registerModule(BlockID.reactorCasing,function(coords,data){
    let hard = 0;
    for(let side = 0;side < 6;side++){
        var relative = World.getRelativeCoords(coords.x,coords.y,coords.z,side),block = World.getBlock(relative.x,relative.y,relative.z),type = FusionReactor.getModuleType(block.id);
        if(type == "Casing") hard += 1;
    }
    data.hard += hard;
    return 1;
},{type:"Casing",durability:16384});

// 锡线圈
IDRegistry.genBlockID("coilTin");
Block.createBlock("coilTin",[
    {name:"Tin Coil",texture:[["machine_bottom",0],["machine_top",0],["tin_coil",0]],inCreative:true}
],"machine");

FusionReactor.registerModule(BlockID.coilTin,function(coords,data){
    let heat = 1,fuel = 1;
    for(let side = 0;side < 6;side++){
        var relative = World.getRelativeCoords(coords.x,coords.y,coords.z,side);
        var block = World.getBlock(relative.x,relative.y,relative.z);
        var type = FusionReactor.getModuleType(block.id);

        if(type == "Coil") heat += 1,fuel += 1;
    }
    data.heat += heat,data.fuel += fuel;
    return 1;
},{type:"Coil",durability:16384});

// 铜线圈
IDRegistry.genBlockID("coilCopper");
Block.createBlock("coilCopper",[
    {name:"Copper Coil",texture:[["machine_bottom",0],["machine_top",0],["copper_coil",0]],inCreative:true}
],"machine");

FusionReactor.registerModule(BlockID.coilCopper,function(coords,data,id){
    let heat = 3,fuel = 1;
    for(let side = 0;side < 6;side++){
        var relative = World.getRelativeCoords(coords.x,coords.y,coords.z,side);
        var block = World.getBlock(relative.x,relative.y,relative.z);
        var type = FusionReactor.getModuleType(block.id);

        if(type == "Coil") heat += 3,fuel += 1;
    }
    data.heat += heat,data.fuel += fuel;
    return 1;
},{type:"Coil",durability:16384});

// 金线圈
IDRegistry.genBlockID("coilGold");
Block.createBlock("coilGold",[
    {name:"Gold Coil",texture:[["machine_bottom",0],["machine_top",0],["gold_coil",0]],inCreative:true}
],"machine");

FusionReactor.registerModule(BlockID.coilGold,function(coords,data){
    let heat = 5,fuel = 1;
    for(let side = 0;side < 6;side++){
        var relative = World.getRelativeCoords(coords.x,coords.y,coords.z,side);
        var block = World.getBlock(relative.x,relative.y,relative.z);
        var type = FusionReactor.getModuleType(block.id);
        
        if(type == "Coil")heat += 5,fuel += 1;
    }
    data.heat += heat,data.fuel += fuel;
    return 1;
},{type:"Coil",durability:16384});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.fuelRodUranium,count:1,data:0},[" a ","aba"," a "],["a",ItemID.plateTin,0,"b",ItemID.enrichedUranium,0]);
	Recipes.addShaped({id:BlockID.coolantWater,count:1,data:0},[" a ","aba"," a "],["a",ItemID.plateTin,0,"b",ItemID.cellWater,0]);
	Recipes.addShaped({id:BlockID.heatSink,count:1,data:0},["aba","bcb","aba"],["a",ItemID.stickIron,0,"b",ItemID.plateIron,0,"c",ItemID.electricMotor,0]);
	Recipes.addShaped({id:BlockID.neutronReflector,count:1,data:0},["aba","bcb","aba"],["a",ItemID.dustTin,0,"b",ItemID.dustCarbon,0,"c",ItemID.plateCopper,0]);
    Recipes.addShaped({id:BlockID.reactorCasing,count:1,data:0},["aa","aa"],["a",ItemID.plateLead,0]);

    Recipes.addShaped({id:BlockID.coilTin,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.wireTin,0]);
    Recipes.addShaped({id:BlockID.coilCopper,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.wireCopper,0]);
    Recipes.addShaped({id:BlockID.coilGold,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.wireGold,0]);
});