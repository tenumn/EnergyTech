// [网络终端]Network Terminal
IDRegistry.genBlockID("networkTerminal");
Block.createBlock("networkTerminal",[
    {name:"Network Terminal",texture:[["machine_bottom",2],["machine_top",2],["machine_side",2],["network_terminal",0],["machine_side",2],["machine_side",2]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.networkTerminal,[["machine_bottom",2],["machine_top",2],["machine_side",2],["network_terminal",0],["machine_side",2],["machine_side",2]]);
TileRenderer.registerRotationModel(BlockID.networkTerminal,0,[["machine_bottom",2],["machine_top",2],["machine_side",2],["network_terminal",0],["machine_side",2],["machine_side",2]]);

MachineRegistry.setDrop("networkTerminal",BlockID.machineCasing,2);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.networkTerminal,count:1,data:0},[
        "aab",
        "cdb",
        "aab"
    ],["a",ItemID.plateIron,0,"b",20,0,"c",ItemID.wireGold,0,"d",BlockID.machineCasing,2]);
});

var GuiNetworkTerminal = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Network Terminal")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:450,y:50,bitmap:"energy_background",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"info",scale:GUI_SCALE}
    ],

    elements:{
        "textNetwork":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Network IP: ") + "0.0.0"},
        "textLoad":{type:"text",font:GUI_TEXT,x:700,y:105,width:300,height:TEXT_SIZE,text:Translation.translate("Load: ") + "0/0"},
        "textEnergy1":{type:"text",font:GUI_TEXT,x:700,y:135,width:300,height:TEXT_SIZE,text:Translation.translate("Machine Energy: ") + "0/0Et"},
        "textEnergy2":{type:"text",font:GUI_TEXT,x:700,y:165,width:300,height:TEXT_SIZE,text:Translation.translate("Network Energy: ") + "0/0Et"},
        "textRange":{type:"text",font:GUI_TEXT,x:700,y:195,width:300,height:TEXT_SIZE,text:Translation.translate("Range: ") + "0"},
        "textVoltage":{type:"text",font:GUI_TEXT,x:700,y:225,width:300,height:TEXT_SIZE,text:Translation.translate("Voltage: ") + "0"},

        "scaleEnergy1":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},
        "scaleEnergy2":{type:"scale",x:450 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale_network",scale:GUI_SCALE},
        "slotCard":{type:"slot",x:350 + GUI_SCALE * 3 - GUI_SCALE / 2,y:275,bitmap:"slot_card",scale:GUI_SCALE,isValid:function(id){return Tool.isTool(id,"EnergyCard");}}
    }
});

MachineRegistry.registerEUMachine(BlockID.networkTerminal,{
    defaultValues:{
        meta:0,
        load:0,
        tier:3,
        range:64,
        load_limit:16,
        energy_storage:16384
    },

    getNetwork:function(x,y,z){
        return network[x + ":" + y + ":" + z];
    },

    init:function(){
		if(!this.getNetwork(this.x,this.y,this.z)){
			network[this.x + ":" + this.y + ":" + this.z] = {
                range:this.data.range,
                load:this.data.load,
                load_limit:this.data.load_limit,
                voltage:power(this.data.tier),
                energy:this.data.energy,
                energy_storage:this.getEnergyStorage(),
                machine:{}
            };
        }
    },

    initValues:function(net){
        net.range = this.defaultValues.range;
        net.voltage = power(this.data.tier);
        net.energy_storage = this.defaultValues.energy_storage;
        net.load = this.defaultValues.load;
        net.load_limit = this.defaultValues.load_limit;
    },

    getCard:function(){
        var card = this.container.getSlot("slotCard");
        if(Tool.isTool(card.id,"EnergyCard")){
            if(!card.extra) card.extra = new ItemExtraData();
            card.extra.putInt("x",this.x);
            card.extra.putInt("y",this.y);
            card.extra.putInt("z",this.z);
        }
    },

    tick:function(){
        this.getCard();

        var net = this.getNetwork(this.x,this.y,this.z);
    	if(net){
            this.initValues(net);
            for(let i in net.machine){
                var machine = net.machine[i];
                net.load++;
    
                if(net.load > net.load_limit){
                    World.explode(this.x + 0.5,this.y + 0.5,this.z + 0.5,0.5,true);
                    World.setBlock(this.x,this.y,this.z,0);
                    this.selfDestroy();
                }
    
                var enabled = __config__.getBool("machine.voltage_enabled");
                if(enabled && machine.voltage && machine.voltage > net.voltage){
                    World.explode(this.x + 0.5,this.y + 0.5,this.z + 0.5,0.5,true);
                    World.setBlock(this.x,this.y,this.z,0);
                    this.selfDestroy();
                }
            }
    
            var voltage = power(this.data.tier);
            if(this.data.energy >= voltage && net.energy + voltage < net.energy_storage){
                this.data.energy -= voltage;
                net.energy += voltage;
            }
    
            if(net.energy < 0) net.energy = 0;
            if(net.energy > net.energy_storage) net.energy = net.energy_storage;

            this.container.setText("textRange",Translation.translate("Range: ") + net.range);
            this.container.setText("textVoltage",Translation.translate("Voltage: ") + net.voltage);
            this.container.setText("textLoad",Translation.translate("Load: ") + net.load + "/" + net.load_limit);
            this.container.setText("textEnergy2",Translation.translate("Network Energy: ") + net.energy + "/" + net.energy_storage + "Eu");

            this.container.setScale("scaleEnergy2",parseInt(net.energy / net.energy_storage * 47) / 47);
        } else {
            this.container.setText("textRange",Translation.translate("Range: ") + "0");
            this.container.setText("textVoltage",Translation.translate("Voltage: ") + "0");
            this.container.setText("textLoad",Translation.translate("Load: ") + "0/0");
            this.container.setText("textEnergy2",Translation.translate("Network Energy: ") + "0/0Eu");

            this.container.setScale("scaleEnergy2",0);
        }
        
        this.container.setScale("scaleEnergy1",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setText("textEnergy1",Translation.translate("Machine Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
        this.container.setText("textNetwork",Translation.translate("Network IP: ") + Math.abs(this.x) + "." + Math.abs(this.y) + "." + Math.abs(this.z));
    },

    destroy:function(){
        if(this.getNetwork(this.x,this.y,this.z)){
            delete network[this.x + ":" + this.y + ":" + this.z];
        }
    },

    energyReceive:MachineRegistry.energyReceive,
    getGuiScreen:function(){return GuiNetworkTerminal;}
});
TileRenderer.setRotationPlaceFunction(BlockID.networkTerminal);