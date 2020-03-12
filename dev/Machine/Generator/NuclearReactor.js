// [核反应堆]Nuclear Reactor
IDRegistry.genBlockID("nuclearReactor");
Block.createBlock("nuclearReactor",[
    {name:"Nuclear Reactor",texture:[["machine_bottom",0],["machine_top",0],["nuclear_reactor",0]],inCreative:true}
],"opaque");

ETMachine.setDrop("nuclearReactor",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.nuclearReactor,count:1,data:0},["aba","cdc","aea"],["a",ItemID.plateLead,0,"b",ItemID.electricPiston,0,"c",ItemID.circuit,0,"d",BlockID.fireGenerator,0,"e",ItemID.plateLapis,0]);
});

var GuiNuclearReactor = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Nuclear Reactor")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    drawing:[
		{type:"bitmap",x:900,y:400,bitmap:"logo",scale:GUI_SCALE},
		{type:"bitmap",x:350,y:75,bitmap:"energyBackground",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"info",scale:GUI_SCALE}
    ],
    elements:{
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Energy: ") + "0/0Eu"},
		"textEnergyOutput":{type:"text",font:GUI_TEXT,x:700,y:105,width:300,height:30,text:Translation.translate("Energy Output: ") + "0Eu"},
        "textHard":{type:"text",font:GUI_TEXT,x:700,y:135,width:300,height:30,text:Translation.translate("Hard Level: ") + "0"},
        "textHeat":{type:"text",font:GUI_TEXT,x:700,y:165,width:300,height:30,text:Translation.translate("Heat: ") + "0Hu"},
        "textFuel":{type:"text",font:GUI_TEXT,x:700,y:195,width:300,height:30,text:Translation.translate("Fuel: ") + "0"},
        "textCoolant":{type:"text",font:GUI_TEXT,x:700,y:225,width:300,height:30,text:Translation.translate("Coolant: ") + "0"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:75 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energyScale",scale:GUI_SCALE}
    }
});

ETMachine.registerGenerator(BlockID.nuclearReactor,{
    defaultValues:{
        tier:3,
        hard:0,
        heat:0,                                                                                           
        fuel:0,
        coolant:0,
        progress:0
    },

    setDefaultValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.hard = this.defaultValues.hard;
        this.data.heat = this.defaultValues.heat;
        this.data.fuel = this.defaultValues.fuel;
        this.data.coolant = this.defaultValues.coolant;
    },

    tick:function(){
        this.setDefaultValues();

        var reactor_radius = __config__.getNumber("machine.reactor.radius"),range = reactor_radius * 2 + 1;
        for(let x = 0;x <= range;x++){for(let y = 0;y <= range;y++){for(let z = 0;z <= range;z++){
            var coords = {x:this.x - reactor_radius + x,y:this.y - reactor_radius + y,z:this.z - reactor_radius + z},
                tile = World.getTileEntity(coords.x,coords.y,coords.z),
                block = World.getBlock(coords.x,coords.y,coords.z),
                reactor = ETReactor.getModule(block.id);
                if(reactor && tile){tile.data.durability -= reactor(this.id,this.data,coords);}
        }}}

        if(this.data.coolant < this.data.heat){
            this.data.progress += 1 / 160;
            if(this.data.progress.toFixed(3) >= 1){
                var radius = Math.max(0,Math.floor(this.data.fuel - this.data.hard)),height = radius / 2,coords = {x:this.x,y:this.y,z:this.z};
                runOnMainThread(function(){
                    if(radius > 0){
                        for(let x = - radius;x <= radius;x++){for(let y = - height;y <= height;y++){for(let z = - radius;z <= radius;z++){
                            if(Math.sqrt(x * x + y * y * radius + z * z) <= radius){
                                var block = World.getBlock(coords.x + x,coords.y + y,coords.z + z);
                                if(block.id != 7 && block.id != 120){
                                    World.setBlock(coords.x + x,coords.y + y,coords.z + z,0);
                                }
                            }
                        }}}
                    }  
                });
            }
        } else if(this.data.progress > 0){
            this.data.progress -= 1 / 160;
        }

        if(this.data.energy + Math.floor(this.data.heat * this.data.fuel) < this.getEnergyStorage()){
            this.data.energy += Math.floor(this.data.heat * this.data.fuel);
        }

		this.container.setScale("scaleEnergy",this.data.energy / this.getEnergyStorage());
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
        this.container.setText("textEnergyOutput",Translation.translate("Energy Output: ") + Math.floor(this.data.heat * this.data.fuel) + "Eu");
        this.container.setText("textHard",Translation.translate("Hard Level: ") + this.data.hard);
        this.container.setText("textHeat",Translation.translate("Heat: ") + this.data.heat + "Hu");
        this.container.setText("textFuel",Translation.translate("Fuel: ") + this.data.fuel);
        this.container.setText("textCoolant",Translation.translate("Coolant: ") + this.data.coolant);
    },

    energyTick:function(type,src){
		var output = Math.min(this.getMaxVoltage(),this.data.energy);
		this.data.energy += src.add(output) - output;
    },

    getGuiScreen:function(){return GuiNuclearReactor;}
});

// [燃料棒(铀)]Fuel Rod(Uranium)
IDRegistry.genBlockID("fuelRodUranium");
Block.createBlock("fuelRodUranium",[
    {name:"Fuel Rod(Uranium)",texture:[["fuel_rod_bottom",0],["fuel_rod_top",0],["fuel_rod_uranium",10]],inCreative:true}
],"opaque");
TileRenderer.setStandartModel(BlockID.fuelRodUranium,[["fuel_rod_bottom",0],["fuel_rod_top",0],["fuel_rod_uranium",0],["fuel_rod_uranium",0],["fuel_rod_uranium",0],["fuel_rod_uranium",0]]);
for(let i = 0;i <= 10;i++){
    TileRenderer.registerRenderModel(BlockID.fuelRodUranium,i,[["fuel_rod_bottom",0],["fuel_rod_top",0],["fuel_rod_uranium",i],["fuel_rod_uranium",i],["fuel_rod_uranium",i],["fuel_rod_uranium",i]]);
}

Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.fuelRodUranium,count:1,data:0},[" a ","aba"," a "],["a",ItemID.plateTin,0,"b",ItemID.cellUranium,0]);
});

ETMachine.registerPrototype(BlockID.fuelRodUranium,{
    defaultValues:{durability:16384},
    tick:function(){this.renderer();},
    renderer:function(){TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,Math.round(this.data.durability / this.defaultValues.durability * 10));}
});

ETReactor.registerModule(BlockID.fuelRodUranium,function(id,data,coords){
    let heat = 3,fuel = 1;
    for(let index in directions){
        var dir = directions[index],block = World.getBlock(coords.x + dir[0],coords.y + dir[1],coords.z + dir[2]),type = ETReactor.getModuleType(block.id);
            if(type == "FuelRod"){heat += 3,fuel += 1;}
    }
    data.heat += heat,data.fuel += fuel;
    return 1;
},{type:"FuelRod",durability:16384});

// [散热器]Heat Sink
IDRegistry.genBlockID("heatSink");
Block.createBlock("heatSink",[
    {name:"Heat Sink",texture:[["heat_sink",0]],inCreative:true}
],"opaque");

Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.heatSink,count:1,data:0},["aba","bcb","aba"],["a",ItemID.stickIron,0,"b",ItemID.plateIron,0,"c",ItemID.electricMotor,0]);
});

ETReactor.registerModule(BlockID.heatSink,function(id,data,coords){
    let heat = 3,coolant = 3;
    for(let index in directions){
        var dir = directions[index],block = World.getBlock(coords.x + dir[0],coords.y + dir[1],coords.z + dir[2]),type = ETReactor.getModuleType(block.id);
        if(type == "FuelRod"){heat += 3,coolant += 3;}
    }
    data.heat += heat;
    data.coolant += coolant;
    return 1;
},{type:"HeatSink",durability:16384});

// [冷却器(水)]Coolant Block(Water)
IDRegistry.genBlockID("coolantWater");
Block.createBlock("coolantWater",[
    {name:"Coolant Block(Water)",texture:[["machine_bottom",0],["machine_top",0],["coolant_water",10]],inCreative:true}
],"opaque");
TileRenderer.setStandartModel(BlockID.coolantWater,[["machine_bottom",0],["machine_top",0],["coolant_water",0],["coolant_water",0],["coolant_water",0],["coolant_water",0]]);
for(let i = 0;i <= 10;i++){
    TileRenderer.registerRenderModel(BlockID.coolantWater,i,[["machine_bottom",0],["machine_top",0],["coolant_water",i],["coolant_water",i],["coolant_water",i],["coolant_water",i]]);
}

Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.coolantWater,count:1,data:0},[" a ","aba"," a "],["a",ItemID.plateTin,0,"b",ItemID.cellWater,0]);
});

ETMachine.registerPrototype(BlockID.coolantWater,{
    defaultValues:{durability:16384},
    tick:function(){this.renderer();},
    renderer:function(){TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,Math.round(this.data.durability / this.defaultValues.durability * 10));}
});

ETReactor.registerModule(BlockID.coolantWater,function(id,data,coords){
    let coolant = 3;
    for(let index in directions){
        var dir = directions[index],block = World.getBlock(coords.x + dir[0],coords.y + dir[1],coords.z + dir[2]),type = ETReactor.getModuleType(block.id);
        if(type == "Coolant"){coolant += 3;}
    }
    data.coolant += coolant;
    return 1;
},{type:"Coolant",durability:16384});

// [中子反射板]Neutron Reflector
IDRegistry.genBlockID("neutronReflector");
Block.createBlock("neutronReflector",[
    {name:"Neutron Reflector",texture:[["neutron_reflector",0]],inCreative:true}
],"opaque");

Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.neutronReflector,count:1,data:0},["aba","bcb","aba"],["a",ItemID.dustTin,0,"b",ItemID.dustCarbon,0,"c",ItemID.plateCopper,0]);
});

ETReactor.registerModule(BlockID.neutronReflector,function(id,data,coords){
    let fuel = 0;
    for(let index in directions){
        var dir = directions[index],block = World.getBlock(coords.x + dir[0],coords.y + dir[1],coords.z + dir[2]),type = ETReactor.getModuleType(block.id);
        if(type == "FuelRod"){fuel += 1;}
    }
    data.fuel += fuel;
    return 1;
},{type:"HeatSink",durability:8192});