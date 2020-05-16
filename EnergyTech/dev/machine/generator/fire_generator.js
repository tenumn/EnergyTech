// [火力发电机]Fire Generator
IDRegistry.genBlockID("fireGenerator");
Block.createBlock("fireGenerator",[
	{name:"Fire Generator",texture:[["machine_bottom",1],["machine_top",1],["machine_side",1],["fire_generator",0],["machine_side",1],["machine_side",1]],inCreative:true}
],"machine");

TileRenderer.setStandartModel(BlockID.fireGenerator,[["machine_bottom",1],["machine_top",1],["machine_side",1],["fire_generator",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.fireGenerator,0,[["machine_bottom",1],["machine_top",1],["machine_side",1],["fire_generator",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.fireGenerator,4,[["machine_bottom",1],["machine_top",1],["machine_side",1],["fire_generator",1],["machine_side",1],["machine_side",1]]);

MachineRegistry.setDrop("fireGenerator",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.fireGenerator,count:1,data:0},[
		"dad",
		"dbd",
		"ece"
	],["a",ItemID.lithiumBattery,-1,"b",BlockID.machineCasing,1,"c",BlockID.bronzeBoiler,0,"d",ItemID.stickIron,0,"e",ItemID.partIron,0]);
});

var GuiFireGenerator = new UI.StandartWindow({
	standart:{
		header:{text:{text:Translation.translate("Fire Generator")}},
		inventory:{standart:true},
		background:{standart:true}
	},
	
    drawing:[
		{type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
		{type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
		{type:"bitmap",x:450 + GUI_SCALE * 3,y:75 + GUI_SCALE * 2,bitmap:"fireBackground",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
	],
	
	elements:{
		"textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
		"textEnergyOutput":{type:"text",font:GUI_TEXT,x:700,y:105,width:300,height:TEXT_SIZE,text:Translation.translate("Energy Output: ") + "0Eu"},

		"scaleBurn":{type:"scale",x:450 + GUI_SCALE * 3,y:75 + GUI_SCALE * 2,direction:1,value:0.5,bitmap:"fireScale",scale:GUI_SCALE},
		"scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},
		
		"slotFuel":{type:"slot",x:450,y:150,bitmap:"slot_fuel",isValid:function(id,count,data){return Recipes.getFuelBurnDuration(id,data) > 0;}},

		"slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade}
	}
});

MachineRegistry.registerEUGenerator(BlockID.fireGenerator,{
	defaultValues:{
		meta:0,
		burn:0,
		burnMax:0,
		isActive:false,
		sound_volume:16
	},

	upgrades:["energyStorage","muffler","transformer"],

	initValues:function(){
		this.data.tier = this.defaultValues.tier;
		this.data.sound_volume = this.defaultValues.sound_volume;
		this.data.energy_storage = this.defaultValues.energy_storage;
	},
	
	tick:function(){
		UpgradeRegistry.executeUpgrades(this);
		StorageInterface.checkHoppers(this);

		if(World.getThreadTime()%20 == 0){
			var output = Math.min(this.data.isActive?random(1,this.data.burn / 20):0,this.getMaxVoltage());

			if(this.data.burn <= 0 && this.data.energy + output < this.getEnergyStorage()) this.data.burn = this.data.burnMax = this.getSlotBurnDuration("slotFuel");

			if(this.data.burn > 0 && this.data.energy + output < this.getEnergyStorage()){
				this.data.energy += output;
				this.data.burn -= 1;
				this.activate("generator/fire_generator.ogg");
			} else {this.deactive();}

			this.container.setText("textEnergyOutput",Translation.translate("Energy Output: ") + output + "Eu");
		}

		this.container.setScale("scaleEnergy",this.data.energy / this.getEnergyStorage());
		this.container.setScale("scaleBurn",parseInt(this.data.burn / this.data.burnMax * 14) / 14 || 0);
		this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
	},
	
	energyTick:function(type,src){
		var output = Math.min(this.getMaxVoltage(),this.data.energy);
		this.data.energy += src.add(output) - output;
	},

	getGuiScreen:function(){return GuiFireGenerator;}
});
TileRenderer.setRotationPlaceFunction(BlockID.fireGenerator);
StorageInterface.createInterface(BlockID.fireGenerator,{
	slots:{
		"slotFuel":{input:true}
	},
	isValidInput:function(item){
		return Recipes.getFuelBurnDuration(item.id,item.data) > 0;
	}
});