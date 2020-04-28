Block.createSpecialType({
    base:1,
    solid:true,
    opaque:true,
    destroytime:5,
    explosionres:16
},"superconductor");

// [超导体]Superconductor
IDRegistry.genBlockID("superconductor");
Block.createBlock("superconductor",[
    {name:"Superconductor",texture:[["superconductor",0]],inCreative:true},
    {name:"Superconductor",texture:[["superconductor",0]],inCreative:false}
],"superconductor");

Block.setBlockShape(BlockID.superconductor,{x:0.375,y:0.375,z:0},{x:0.625,y:0.625,z:1},0);
TileRenderer.setupWireModel(BlockID.superconductor,1,0.25,"et-wire",true);

Tooltip.info(BlockID.superconductor,"You can use it to connect to the Network Terminal to transmit energy.");

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.superconductor,count:1,data:0},["dcd","aba","dcd"],["a",ItemID.wireTungsten,0,"b",ItemID.circuitTransformer,0,"c",ItemID.plateSteel,0,"d",ItemID.partSteel,0]);
});

Machine.setDrop("superconductor",BlockID.superconductor);
Block.registerPlaceFunction("superconductor",function(coords,item){
    Game.prevent();
    var block = World.getBlock(coords.x,coords.y,coords.z),place = coords;
    if(!canTileBeReplaced(block.id,block.data)){
        place = coords.relative,block = World.getBlock(place.x,place.y,place.z);
        if(!canTileBeReplaced(block.id,block.data)){return;}
    }
    World.setBlock(place.x,place.y,place.z,item.id,1);
    World.addTileEntity(place.x,place.y,place.z);
    Player.decreaseCarriedItem(1);
});

var GuiSuperconductorCoil = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Superconductor")}},
        inventory:{standart:true},
        background:{standart:true}
    },

    drawing:[
        {type:"bitmap",x:350,y:50,bitmap:"energyBackground",scale:GUI_SCALE},
        {type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"info",scale:GUI_SCALE}
    ],

    elements:{
        "textNetwork":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Network IP: ") + "0.0.0"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energyScale",scale:GUI_SCALE},
        "slot.card":{type:"slot",x:350 + GUI_SCALE * 3 - GUI_SCALE / 2,y:250,bitmap:"slot.card",scale:GUI_SCALE,isValid:function(id){return Tool.isTool(id,"EnergyCard");}},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot.circuit",isValid:Upgrade.isValidUpgrade},
        "slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot.circuit",isValid:Upgrade.isValidUpgrade},
        "slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot.circuit",isValid:Upgrade.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot.circuit",isValid:Upgrade.isValidUpgrade}
    }
});

Machine.registerGenerator(BlockID.superconductor,{
    defaultValues:{x:0,y:0,z:0},

    destroyMachine:function(){
        var net = network[this.data.x + ":" + this.data.y + ":" + this.data.z];
        if(net){delete net.machine[this.x + ":" + this.y + ":" + this.z];}
    },

    initValues:function(){
        this.data.tier = this.defaultValues.tier;
		this.data.energy_storage = this.defaultValues.energy_storage;
	},
    
    getNetwork:function(x,y,z){
        return network[x + ":" + y + ":" + z];
    },
    
	tick:function(){
		Upgrade.executeUpgrades(this);
        var slot = this.container.getSlot("slot.card"),net = this.getNetwork(this.data.x,this.data.y,this.data.z),range = Math.abs(this.data.x - this.x) + Math.abs(this.data.y - this.y) + Math.abs(this.data.z - this.z);

        if(Tool.isTool(slot.id,"EnergyCard") && slot.extra){
            this.destroyMachine();
            this.data.x = slot.extra.getInt("x");
            this.data.y = slot.extra.getInt("y");
            this.data.z = slot.extra.getInt("z");

            if(net && range < net.range){
                network[this.data.x + ":" + this.data.y + ":" + this.data.z].machine[this.x + ":" + this.y + ":" + this.z] = {voltage:power(this.data.tier)};
            }
        }

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
    getGuiScreen:function(){return GuiSuperconductorCoil;}
});