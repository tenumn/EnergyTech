// [核反应堆]Nuclear Reactor
IDRegistry.genBlockID("nuclearReactor");
Block.createBlock("nuclearReactor",[
    {name:"Nuclear Reactor",texture:[["machine_bottom",1],["machine_top",1],["nuclear_reactor",0]],inCreative:true}
],"machine");

MachineRegistry.setDrop("nuclearReactor",BlockID.machineCasing,2);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.nuclearReactor,count:1,data:0},[
        "aba",
        "cdc",
        "aea"
    ],["a",ItemID.plateLead,0,"b",ItemID.electricPiston,0,"c",ItemID.circuit,0,"d",BlockID.fireGenerator,0,"e",ItemID.plateLapis,0]);
});

var GuiNuclearReactor = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Nuclear Reactor")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:330,y:330,bitmap:"heatBackground",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"info",scale:GUI_SCALE}
    ],

    elements:{
        "slot1:1":{type:"slot",x:350,y:30,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot1:2":{type:"slot",x:350,y:90,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot1:3":{type:"slot",x:350,y:150,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot1:4":{type:"slot",x:350,y:210,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot1:5":{type:"slot",x:350,y:270,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},

        "slot2:1":{type:"slot",x:410,y:30,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot2:2":{type:"slot",x:410,y:90,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot2:3":{type:"slot",x:410,y:150,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot2:4":{type:"slot",x:410,y:210,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot2:5":{type:"slot",x:410,y:270,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},

        "slot3:1":{type:"slot",x:470,y:30,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot3:2":{type:"slot",x:470,y:90,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot3:3":{type:"slot",x:470,y:150,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot3:4":{type:"slot",x:470,y:210,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot3:5":{type:"slot",x:470,y:270,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},

        "slot4:1":{type:"slot",x:530,y:30,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot4:2":{type:"slot",x:530,y:90,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot4:3":{type:"slot",x:530,y:150,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot4:4":{type:"slot",x:530,y:210,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot4:5":{type:"slot",x:530,y:270,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},

        "slot5:1":{type:"slot",x:590,y:30,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot5:2":{type:"slot",x:590,y:90,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot5:3":{type:"slot",x:590,y:150,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot5:4":{type:"slot",x:590,y:210,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot5:5":{type:"slot",x:590,y:270,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},

        "scaleBurn":{type:"scale",x:330 + GUI_SCALE * 4,y:330 + GUI_SCALE * 4,direction:0,value:0.5,bitmap:"heatScale",scale:GUI_SCALE},

        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
		"textEnergyOutput":{type:"text",font:GUI_TEXT,x:700,y:105,width:300,height:TEXT_SIZE,text:Translation.translate("Energy Output: ") + "0Eu"}
    }
});

MachineRegistry.registerEUGenerator(BlockID.nuclearReactor,{
    defaultValues:{
        tier:3,
        heat:0,
        maxHeat:10000,
        isEnabled:false,
        energy_output:0
    },

    getEnergyOutput:function(){
        return this.data.energy_output;
    },

    getMaxHeat:function(){
        return this.data.maxHeat;
    },

    getSlotFor4Side:function(x,y){
        var side = [],pos = [[x + 1,y],[x - 1,y],[x,y + 1],[x,y - 1]];
        for(let i in pos){
            var slot = this.container.getSlot("slot" + pos[i][0] + ":" + pos[i][1]);
            if(slot && slot.id != 0) side.push(slot);
        }
        return side;
    },
    
    tick:function(){
        if(World.getThreadTime()%20 == 0){
            this.data.energy_output = this.defaultValues.energy_output;
            if(this.data.isEnabled){
                for(let x = 1;x <= 5;x++){for(let y = 1;y <= 5;y++){
                    var slot = this.container.getSlot("slot" + x + ":" + y),side = this.getSlotFor4Side(x,y);
                    if(ReactorRegistry.isPrototype(slot.id)){
                        var reactor = ReactorRegistry.getPrototype(slot.id);
                        
                        this.data.heat += reactor.getHeat(side,slot,{x:x,y:y});
                        this.data.energy_output += reactor.getEnergyOutput(side,slot,{x:x,y:y});
                        this.data.heat -= reactor.getCooling(side,slot,{x:x,y:y});
    
                        if(slot.data >= Item.getMaxDamage(slot.id)){
                            if(reactor.isDestroy){
                                reactor.destroy(side,slot,{x:x,y:y});
                                this.container.validateSlot("slot" + x + ":" + y);
                            }
                        } else {
                            slot.data += reactor.breakDurability(side,slot,{x:x,y:y});
                        }
                    }
                }}

                this.data.energy += this.getEnergyOutput();
            } else if(this.data.heat > 0){
                this.data.heat -= Math.min(this.data.heat,this.getMaxHeat() / 1024);
            }
        }

        if(this.data.heat > this.getMaxHeat()){
            World.explode(this.x + 0.5,this.y + 0.5,this.z + 0.5,(this.getMaxHeat() / 1000) / 4,true);
            World.setBlock(this.x,this.y,this.z,0);
            this.selfDestroy();
        }

        this.container.setScale("scaleBurn",this.data.heat / this.getMaxHeat());
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
		this.container.setText("textEnergyOutput",Translation.translate("Energy Output: ") + this.getEnergyOutput() + "Eu");
    },

    redstone:function(params){
        this.data.isEnabled = params.power > 0?true:false;
    },

    energyTick:function(type,src){
		var output = Math.min(this.getMaxVoltage(),this.data.energy);
		this.data.energy += src.add(output) - output;
    },

    getGuiScreen:function(){
        return GuiNuclearReactor;
    }
});