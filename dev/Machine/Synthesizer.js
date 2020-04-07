// 化学反应台
IDRegistry.genBlockID("synthesizer");
Block.createBlock("synthesizer",[
  {name:"Chemical Synthesizer",texture:[["machineBottom",0],["machineTop",0],["machineSide",0],["synthesizer",0],["machineSide",0],["machineSide",0]],inCreative:true}
],"opaque");
TileRenderer.setStandartModel(BlockID.synthesizer,[["machineBottom",0],["machineTop",0],["machineSide",0],["synthesizer",0],["machineSide",0],["machineSide",0]]);
TileRenderer.registerRotationModel(BlockID.synthesizer,0,[["machineBottom",0],["machineTop",0],["machineSide",0],["synthesizer",0],["machineSide",0],["machineSide",0]]);
for(var i = 1;i < 10;i++){TileRenderer.registerRotationModel(BlockID.synthesizer,i * 4,[["machineBottom",0],["machineTop",0],["machineSide",0],["synthesizer",i],["machineSide",0],["machineSide",0]]);}

Machine.setDrop("synthesizer",BlockID.machineCasing,0);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.synthesizer,count:1,data:0},["aba","aca","ada"],["a",ItemID.partIron,0,"b",ItemID.plateRedstone,0,"c",BlockID.machineCasing,0,"d",ItemID.circuit,0]);
});

var GuiSynthesiser = new UI.StandartWindow({
	standart:{
        header:{text:{text:Translation.translate("Chemical Synthesizer")}},
        inventory:{standart:true},
        background:{standart:true}
	},
	
	drawing:[
		{type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
		{type:"bitmap",x:350,y:50,bitmap:"energyBackground",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
	],

	elements:{
		"slotInput1":{type:"slot",x:490,y:100,bitmap:"slotBlank",isValid:Synthesizer.isValidSynthesiser},
		"slotInput2":{type:"slot",x:550,y:100,bitmap:"slotBlank",isValid:Synthesizer.isValidSynthesiser},
		"slotInput3":{type:"slot",x:610,y:100,bitmap:"slotBlank",isValid:Synthesizer.isValidSynthesiser},
		"slotInput4":{type:"slot",x:490,y:160,bitmap:"slotBlank",isValid:Synthesizer.isValidSynthesiser},
		"slotInput5":{type:"slot",x:550,y:160,bitmap:"slotBlank",isValid:Synthesizer.isValidSynthesiser},
		"slotInput6":{type:"slot",x:610,y:160,bitmap:"slotBlank",isValid:Synthesizer.isValidSynthesiser},
		"slotInput7":{type:"slot",x:490,y:220,bitmap:"slotBlank",isValid:Synthesizer.isValidSynthesiser},
		"slotInput8":{type:"slot",x:550,y:220,bitmap:"slotBlank",isValid:Synthesizer.isValidSynthesiser},
		"slotInput9":{type:"slot",x:610,y:220,bitmap:"slotBlank",isValid:Synthesizer.isValidSynthesiser},
		
		"slotOutput":{type:"slot",x:730,y:160,bitmap:"slotBlank",isValid:function(){return false;}},		
		"textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Energy: ") + "0/0Eu"},
		"scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energyScale",scale:GUI_SCALE},
		
		"slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slotCircuit",isValid:Upgrade.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slotCircuit",isValid:Upgrade.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slotCircuit",isValid:Upgrade.isValidUpgrade},
		"slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slotCircuit",isValid:Upgrade.isValidUpgrade}
	}
});

Machine.registerMachine(BlockID.synthesizer,{
	defaultValues:{
		meta:0,
		tier:2,
		progress:0,
		work_time:320,
		isActive:false,
        energy_consumption:16
	},

	setDefaultValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.work_time = this.defaultValues.work_time;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
	},
	
	tick:function(){
		this.renderer();
		Upgrade.executeUpgrades(this);

		let input = [];
		for(let i = 1;i < 10;i++){
			let slot = this.container.getSlot("slotInput" + i);
			input.push([slot.id,slot.count]);
		}

		var recipe = Synthesizer.getRecipe(input);
		if(recipe){if(this.data.energy >= this.data.energy_consumption){
            this.data.energy -= this.data.energy_consumption;
			this.data.progress += 1 / this.data.work_time;
			this.activate();
            if(this.data.progress.toFixed(3) >= 1){
				this.setOutput("slotOutput",recipe.id,recipe.count,recipe.data);
				for(let i = 1; i < 10; i++){
					let slot = this.container.getSlot("slotInput" + i);
					slot.count = 0;
				}
                this.container.validateAll();
                this.data.progress = 0;
            }
		} else {this.deactive();}} else {this.data.progress = 0,this.deactive();}
		
		this.container.setScale("scaleEnergy",this.data.energy / this.getEnergyStorage());
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
	},

	renderer:function(){
        var count = 10;
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (this.data.isActive?4 * (Math.round(this.data.progress / 1 * count * 10) % count) + 4:0));
	},
	
	energyReceive:Machine.energyReceive,
	getGuiScreen:function(){return GuiSynthesiser;}
});
TileRenderer.setRotationPlaceFunction(BlockID.synthesizer);