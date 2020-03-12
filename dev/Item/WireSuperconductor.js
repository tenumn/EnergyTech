// Item
IDRegistry.genItemID("coilSuperconductor");
Item.createItem("coilSuperconductor","Superconductor Coil",{name:"coilSuperconductor"});

wheat.item.addTooltip(ItemID.coilSuperconductor,Translation.translate("Power Tier: ") + 1);
wheat.item.addTooltip(ItemID.coilSuperconductor,Translation.translate("Max Voltage: ") + power(1) + "EU/t");
wheat.item.addTooltip(ItemID.coilSuperconductor,Translation.translate("Destroy Tool Type: ") + Translation.translate("Wrench"));
wheat.item.addTooltip(ItemID.coilSuperconductor,Translation.translate("Info: ") + Translation.translate("You can use it to connect to the Network Terminal to transmit energy."));

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.coilSuperconductor,count:1,data:0},["dcd","aba","dcd"],["a",ItemID.coilTungsten,0,"b",ItemID.circuitTransformer,0,"c",ItemID.plateSteel,0,"d",ItemID.partSteel,0]);
});

Item.registerUseFunction("coilSuperconductor",function(coords,item,block){
    var place = coords;
    if(!isCanTileReplaced(block.id,block.data)){
        place = coords.relative,block = World.getBlock(place.x,place.y,place.z);
        if(!isCanTileReplaced(block.id,block.data)){
            return;
        }
    }
    World.setBlock(place.x,place.y,place.z,BlockID.coilSuperconductor,0);
    World.addTileEntity(place.x,place.y,place.z);
    Player.decreaseCarriedItem(1);
});

// Block
IDRegistry.genBlockID("coilSuperconductor");
Block.createBlock("coilSuperconductor",[
    {name:"Superconductor Coil",texture:[["coilSuperconductor",0]],inCreative:false}
],"wire");

TileRenderer.setupWireModel(BlockID.coilSuperconductor,0,0.25,"et-wire");

Block.registerDropFunction("coilSuperconductor",function(Coords,ID,Data){
    return [[ItemID.coilSuperconductor,1,0]];
}); 

var GuiSuperconductorCoil = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Superconductor Coil")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    drawing:[
		{type:"bitmap",x:900,y:400,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:75,bitmap:"energyBackground",scale:GUI_SCALE},
        {type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"info",scale:GUI_SCALE}
    ],
    elements:{
        "slotUpgrade1":{type:"slot",x:370,y:400,bitmap:"slotCircuit",isValid:ETUpgrade.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:400,bitmap:"slotCircuit",isValid:ETUpgrade.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:400,bitmap:"slotCircuit",isValid:ETUpgrade.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:400,bitmap:"slotCircuit",isValid:ETUpgrade.isValidUpgrade},
        "textNetwork":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Network IP: ") + "0.0.0"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:75 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energyScale",scale:GUI_SCALE},
        "slotCard":{type:"slot",x:350 + GUI_SCALE * 3 - GUI_SCALE / 2,y:275,bitmap:"slotCard",scale:GUI_SCALE,isValid:function(id){return ETTool.isTool(id,"EnergyCard");}}
    }
});

ETMachine.registerGenerator(BlockID.coilSuperconductor,{
    defaultValues:{x:0,y:0,z:0},

    destroyMachine:function(){
        var net = network[this.data.x + ":" + this.data.y + ":" + this.data.z];
        if(net){delete net.machine[this.x + ":" + this.y + ":" + this.z];}
    },

    setDefaultValues:function(){
        this.data.tier = this.defaultValues.tier;
		this.data.energy_storage = this.defaultValues.energy_storage;
	},
	
	tick:function(){
		this.setDefaultValues();
		ETUpgrade.executeUpgrades(this);
        var slot = this.container.getSlot("slotCard"),net = this.getNetwork(this.data.x,this.data.y,this.data.z),range = this.getRange(this.data.x,this.data.y,this.data.z);
        if(ETTool.isTool(slot.id,"EnergyCard") && slot.extra){
            this.destroyMachine();
            this.data.x = slot.extra.getInt("network_x");
            this.data.y = slot.extra.getInt("network_y");
            this.data.z = slot.extra.getInt("network_z");

            if(net && range < net.range){
                network[this.data.x + ":" + this.data.y + ":" + this.data.z].machine[this.x + ":" + this.y + ":" + this.z] = {voltage:power(this.data.tier)};
            }
        }

        var net = this.getNetwork(this.data.x,this.data.y,this.data.z),range = this.getRange(this.data.x,this.data.y,this.data.z);
		if(net && range <= net.range){
            var energy_output = power(this.data.tier);
            if(net.energy >= energy_output && this.data.energy + energy_output < this.data.energy_storage){
                this.data.energy += energy_output;
                net.energy -= energy_output;
            }
		} else {
			this.destroyMachine();
			this.data.x = 0,this.data.y = 0,this.data.z = 0;
        }

        this.container.setScale("scaleEnergy",this.data.energy / this.data.energy_storage);
        this.container.setText("textNetwork",Translation.translate("Network IP: ") + Math.abs(this.data.x) + "." + Math.abs(this.data.y) + "." + Math.abs(this.data.z));
    },
    
    energyTick:function(type,src){
		var output = Math.min(this.getMaxVoltage(),this.data.energy);
		this.data.energy += src.add(output) - output;
	},

    destroy:function(){this.destroyMachine();},
    getGuiScreen:function(){return GuiSuperconductorCoil;},
    getNetwork:function(x,y,z){return network[x + ":" + y + ":" + z];},
    getRange:function(x,y,z){return Math.abs(x - this.x) + Math.abs(y - this.y) + Math.abs(z - this.z);}
});