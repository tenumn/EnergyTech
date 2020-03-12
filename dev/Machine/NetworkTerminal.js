// [网络终端]Network Terminal
IDRegistry.genBlockID("networkTerminal");
Block.createBlock("networkTerminal",[
    {name:"Network Terminal",texture:[["machine_bottom",1],["machine_top",1],["machine_side",1],["network_terminal",0],["machine_side",1],["machine_side",1]],inCreative:true}
],"opaque");
TileRenderer.setStandartModel(BlockID.networkTerminal,[["machine_bottom",1],["machine_top",1],["machine_side",1],["network_terminal",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.networkTerminal,0,[["machine_bottom",1],["machine_top",1],["machine_side",1],["network_terminal",0],["machine_side",1],["machine_side",1]]);

ETMachine.setDrop("networkTerminal",BlockID.machineCasing,1);
Recipes.addShaped({id:BlockID.networkTerminal,count:1,data:0},[
    "aab",
    "cdb",
    "aab"
],["a",ItemID.plateIron,0,"b",BlockID.clearGlass,0,"c",ItemID.coilGold,0,"d",BlockID.machineCasing,1]);

var GuiNetworkTerminal = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Network Terminal")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    drawing:[
		{type:"bitmap",x:900,y:400,bitmap:"logo",scale:GUI_SCALE},
		{type:"bitmap",x:350,y:75,bitmap:"energyBackground",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"info",scale:GUI_SCALE}
    ],
    elements:{
        "textNetwork":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Network IP: ") + "0.0.0"},
        "textLoad":{type:"text",font:GUI_TEXT,x:700,y:105,width:300,height:30,text:Translation.translate("Load: ") + "0/0"},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:135,width:300,height:30,text:Translation.translate("Energy: ") + "0/0Et"},
        "textRange":{type:"text",font:GUI_TEXT,x:700,y:165,width:300,height:30,text:Translation.translate("Range: ") + "0"},
        "textVoltage":{type:"text",font:GUI_TEXT,x:700,y:195,width:300,height:30,text:Translation.translate("Voltage: ") + "0"},

        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:75 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energyScale",scale:GUI_SCALE},
        "slotCard":{type:"slot",x:350 + GUI_SCALE * 3 - GUI_SCALE / 2,y:275,bitmap:"slotCard",scale:GUI_SCALE,isValid:function(id){return ETTool.isTool(id,"EnergyCard");}}
    }
});

ETMachine.registerMachine(BlockID.networkTerminal,{
    defaultValues:{
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

    tick:function(){
        var card = this.container.getSlot("slotCard");
        if(ETTool.isTool(card.id,"EnergyCard")){
            if(!card.extra){card.extra = new ItemExtraData();}
            card.extra.putInt("network_x",this.x);
            card.extra.putInt("network_y",this.y);
            card.extra.putInt("network_z",this.z);
        }

        var net = this.getNetwork(this.x,this.y,this.z);
    	if(net){
        net.range = this.defaultValues.range;
        net.load = this.defaultValues.load;
        net.load_limit = this.defaultValues.load_limit;
        net.voltage = power(this.data.tier);
        net.energy_storage = this.defaultValues.energy_storage;

            for(let count in net.machine){
                var machine = net.machine[count];
                net.load += 1;
    
                if(net.load > net.loadLimit){
                    World.explode(this.x,this.y,this.z,1,true);
                }
    
                if(__config__.getBool("machine.voltage.enabled")){
                    if(machine.voltage && machine.voltage > net.voltage){
                        World.explode(this.x + 0.5,this.y + 0.5,this.z + 0.5,0.5,true);
                    }
                }
            }
    
            var energy_output = power(this.data.tier);
            if(this.data.energy >= energy_output && net.energy + energy_output < net.energy_storage){
                this.data.energy -= energy_output;
                net.energy += energy_output;
            }
    
            if(net.energy < 0){net.energy = 0;}
            if(net.energy > net.energy_storage){net.energy = net.energy_storage;}

            this.container.setText("textRange",Translation.translate("Range: ") + net.range);
            this.container.setText("textVoltage",Translation.translate("Voltage: ") + net.voltage);
            this.container.setText("textLoad",Translation.translate("Load: ") + net.load + "/" + net.load_limit);
            this.container.setText("textEnergy",Translation.translate("Energy: ") + net.energy + "/" + net.energy_storage + "Et");
        } else {
            this.container.setText("textRange",Translation.translate("Range: ") + "0");
            this.container.setText("textVoltage",Translation.translate("Voltage: ") + "0");
            this.container.setText("textLoad",Translation.translate("Load: ") + "0/0");
            this.container.setText("textEnergy",Translation.translate("Energy: ") + "0/0Et");
        }
        
        this.container.setScale("scaleEnergy",this.data.energy / this.data.energy_storage);
        this.container.setText("textNetwork",Translation.translate("Network IP: ") + Math.abs(this.x) + "." + Math.abs(this.y) + "." + Math.abs(this.z));
    },

    destroy:function(){
        var net = this.getNetwork(this.x,this.y,this.z);
        if(net){
            delete network[this.x + ":" + this.y + ":" + this.z];
        }
    },

    energyReceive:ETMachine.energyReceive,
    getGuiScreen:function(){return GuiNetworkTerminal;}
});
TileRenderer.setRotationPlaceFunction(BlockID.networkTerminal);