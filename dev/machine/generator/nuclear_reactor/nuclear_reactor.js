// [核反应堆]Nuclear Reactor
IDRegistry.genBlockID("nuclearReactor");
Block.createBlock("nuclearReactor",[
    {name:"Nuclear Reactor",texture:[["machine_bottom",0],["machine_top",0],["nuclear_reactor",0]],inCreative:true}
],"machine");

Machine.setDrop("nuclearReactor",BlockID.machineCasing,1);
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
        {type:"bitmap",x:350,y:50,bitmap:"energyBackground",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:325,bitmap:"heatBackground",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"info",scale:GUI_SCALE}
    ],

    elements:{
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Energy: ") + "0/0Eu"},
		"textEnergyOutput":{type:"text",font:GUI_TEXT,x:700,y:105,width:300,height:30,text:Translation.translate("Energy Output: ") + "0Eu"},
        "textHard":{type:"text",font:GUI_TEXT,x:700,y:135,width:300,height:30,text:Translation.translate("Hard Level: ") + "0"},
        "textHeat":{type:"text",font:GUI_TEXT,x:700,y:165,width:300,height:30,text:Translation.translate("Heat: ") + "0Hu"},
        "textFuel":{type:"text",font:GUI_TEXT,x:700,y:195,width:300,height:30,text:Translation.translate("Fuel: ") + "0"},
        "textCoolant":{type:"text",font:GUI_TEXT,x:700,y:225,width:300,height:30,text:Translation.translate("Coolant: ") + "0"},

        "scaleBurn":{type:"scale",x:350 + GUI_SCALE * 4,y:325 + GUI_SCALE * 4,direction:0,value:0.5,bitmap:"heatScale",scale:GUI_SCALE},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energyScale",scale:GUI_SCALE}
    }
});

Machine.registerGenerator(BlockID.nuclearReactor,{
    defaultValues:{
        tier:3,
        hard:0,
        heat:0,                                                                                           
        fuel:0,
        coolant:0,
        isActive:false,
        blast_progress:0
    },

    initValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.hard = this.defaultValues.hard;
        this.data.heat = this.defaultValues.heat;
        this.data.fuel = this.defaultValues.fuel;
        this.data.coolant = this.defaultValues.coolant;
    },
    
    getModuleData:function(){
        var radius = __config__.getNumber("machine.nuclear_reactor_radius");
        for(let x = 0;x <= (radius * 2 + 1);x++){
            for(let y = 0;y <= (radius * 2 + 1);y++){
                for(let z = 0;z <= (radius * 2 + 1);z++){
                    var coords = {x:this.x - radius + x,y:this.y - radius + y,z:this.z - radius + z};
                    var tile = World.getTileEntity(coords.x,coords.y,coords.z);
                    var reactor = NuclearReactor.getModule(World.getBlock(coords.x,coords.y,coords.z).id);
                    if(reactor && tile){
                        __config__.getBool("machine.nuclear_reactor_durability")?tile.data.durability -= reactor(coords,this.data,this.id):reactor(coords,this.data,this.id);
                    }
                }
            }
        }
    },

    blast:function(){
        if(this.data.coolant < this.data.heat){
            this.data.blast_progress += 1 / 160;
            if(this.data.blast_progress.toFixed(3) >= 1){
                World.explode(this.x + 0.5,this.y + 0.5,this.z + 0.5,Math.max(0.5,Math.floor(this.data.heat + this.data.fuel - (this.data.hard + this.data.coolant))),true);
            }
        } else if(this.data.blast_progress > 0){
            this.data.blast_progress -= 1 / 160;
        }
    },

    tick:function(){
        this.initValues();
        
        var energy_output = Math.floor(this.data.heat * this.data.fuel);

        if(this.data.isActive){
            this.getModuleData();
            if(this.data.energy + energy_output < this.getEnergyStorage()){
                this.data.energy += energy_output;
            }
        }

        this.blast();
        
        this.container.setScale("scaleBurn",this.data.blast_progress);
		this.container.setScale("scaleEnergy",this.data.energy / this.getEnergyStorage());
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
        this.container.setText("textEnergyOutput",Translation.translate("Energy Output: ") + energy_output + "Eu");
        this.container.setText("textHard",Translation.translate("Hard Level: ") + this.data.hard);
        this.container.setText("textHeat",Translation.translate("Heat: ") + this.data.heat + "Hu");
        this.container.setText("textFuel",Translation.translate("Fuel: ") + this.data.fuel);
        this.container.setText("textCoolant",Translation.translate("Coolant: ") + this.data.coolant);
    },

    energyTick:function(type,src){
		var output = Math.min(this.getMaxVoltage(),this.data.energy);
		this.data.energy += src.add(output) - output;
    },

    getGuiScreen:function(){
        return GuiNuclearReactor;
    },

    redstone:function(params){
        if(params.power > 0){
            this.activate();
        } else {
            this.deactive();
        }
    }
});