// [火力发电机]Fire Generator
IDRegistry.genBlockID("fireGenerator");
Block.createBlock("fireGenerator",[
	{name:"Fire Generator",texture:[["machine_bottom",0],["machine_top",0],["machine_side",0],["fire_generator",0],["machine_side",0],["machine_side",0]],inCreative:true}
],"opaque");

TileRenderer.setStandartModel(BlockID.fireGenerator,[["machine_bottom",0],["machine_top",0],["machine_side",0],["fire_generator",0],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.fireGenerator,0,[["machine_bottom",0],["machine_top",0],["machine_side",0],["fire_generator",0],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.fireGenerator,4,[["machine_bottom",0],["machine_top",0],["machine_side",0],["fire_generator",1],["machine_side",0],["machine_side",0]]);

ETMachine.setDrop("fireGenerator",BlockID.machineCasing);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.fireGenerator,count:1,data:0},["dad","dbd","ece"],["a",ItemID.lithiumBattery,0,"b",BlockID.machineCasing,0,"c",61,0,"d",ItemID.stickIron,0,"e",ItemID.partIron,0]);
});

var GuiFireGenerator = new UI.StandartWindow({
	standart:{
		header:{text:{text:Translation.translate("Fire Generator")}},
		inventory:{standart:true},
		background:{standart:true}
    },
    drawing:[
		{type:"bitmap",x:900,y:400,bitmap:"logo",scale:GUI_SCALE},
		{type:"bitmap",x:350,y:75,bitmap:"energy_scale_0",scale:GUI_SCALE},
		{type:"bitmap",x:450 + GUI_SCALE * 3,y:225 + GUI_SCALE * 2,bitmap:"fire_scale_0",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"info_scale_small",scale:GUI_SCALE}
    ],
	elements:{
		"slotUpgrade1":{type:"slot",x:370,y:400,bitmap:"circuit_slot",isValid:ETUpgrade.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:400,bitmap:"circuit_slot",isValid:ETUpgrade.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:400,bitmap:"circuit_slot",isValid:ETUpgrade.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:400,bitmap:"circuit_slot",isValid:ETUpgrade.isValidUpgrade},
		"textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Energy: ") + "0/0Eu"},
		"scaleBurn":{type:"scale",x:450 + GUI_SCALE * 3,y:225 + GUI_SCALE * 2,direction:1,value:0.5,bitmap:"fire_scale_1",scale:GUI_SCALE},
		"textEnergyOutput":{type:"text",font:GUI_TEXT,x:700,y:105,width:300,height:30,text:Translation.translate("Energy Output: ") + "0Eu"},
		"scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:75 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale_1",scale:GUI_SCALE},
		"slotFuel":{type:"slot",x:450,y:300,bitmap:"fuel_slot",isValid:function(id,count,data){return Recipes.getFuelBurnDuration(id,data) > 0;}}
	}
});

ETMachine.registerGenerator(BlockID.fireGenerator,{
	defaultValues:{
		meta:0,
		burn:0,
		burnMax:0,
		isActive:false
	},

	setDefaultValues: function(){
		this.data.tier = this.defaultValues.tier;
		this.data.energy_storage = this.defaultValues.energy_storage;
	},
	
	tick: function(){
		this.setDefaultValues();
		ETUpgrade.executeUpgrades(this);
		StorageInterface.checkHoppers(this);
		EnergyOutput = Math.min((this.data.isActive?random(1,this.data.burn / 20):0),this.getMaxVoltage());

		if(this.data.burn <= 0 && this.data.energy + EnergyOutput < this.getEnergyStorage()){
			this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
		}

		if(this.data.burn > 0 && this.data.energy + EnergyOutput < this.getEnergyStorage()){
			this.data.energy += EnergyOutput;
			this.data.burn -= 1;
			this.setActive(true),this.playSound("generator/fire_generator.ogg");
		} else {
			this.setActive(false),this.stopSound();
		}

		this.container.setScale("scaleBurn",Math.round(this.data.burn / this.data.burnMax * 14) / 14 || 0);
		this.container.setScale("scaleEnergy",this.data.energy / this.getEnergyStorage());
		this.container.setText("textEnergyOutput",Translation.translate("Energy Output: ") + EnergyOutput + "Eu");
		this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
	},
	
	energyTick:function(type,src){
		var output = Math.min(this.getMaxVoltage(),this.data.energy);
		this.data.energy += src.add(output) - output;
	},

	getGuiScreen:function(){return GuiFireGenerator;},
	getTransportSlots:function(){return {input:["slotFuel"]};}
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