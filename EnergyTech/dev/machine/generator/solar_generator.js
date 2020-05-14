// [太阳能发电机]solar Generator
IDRegistry.genBlockID("solarGenerator");
Block.createBlock("solarGenerator",[
	{name:"Solar Generator",texture:[["machine_bottom",1],["solar_generator",0],["machine_side",1]],inCreative:true}
],"machine");

MachineRegistry.setDrop("solarGenerator",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.solarGenerator,count:1,data:0},[
		"aaa",
		"bcb",
		"ded"
	],["a",102,0,"b",ItemID.plateTungsten,0,"c",ItemID.plateCarbon,0,"d",ItemID.circuit,0,"e",BlockID.machineCasing,1]);
});

var GuiSolarGenerator = new UI.StandartWindow({
	standart:{
		header:{text:{text:Translation.translate("Solar Generator")}},
		inventory:{standart:true},
		background:{standart:true}
	},
	
    drawing:[
		{type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
		{type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
	],
	
	elements:{
		"textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
		"textEnergyOutput":{type:"text",font:GUI_TEXT,x:700,y:105,width:300,height:TEXT_SIZE,text:Translation.translate("Energy Output: ") + "0Eu"},
		"scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE}
	}
});

MachineRegistry.registerEUGenerator(BlockID.solarGenerator,{
	tick:function(){
		if(World.getThreadTime()%20 == 0){
			var output = Math.min(random(1,World.getLightLevel(this.x,this.y + 1,this.z)),this.getMaxVoltage());
			if(GenerationUtils.canSeeSky(this.x,this.y + 1,this.z) && this.data.energy + output < this.getEnergyStorage()){
				this.data.energy += output;
			}

			this.container.setText("textEnergyOutput",Translation.translate("Energy Output: ") + output + "Eu");
		}

		this.container.setScale("scaleEnergy",this.data.energy / this.getEnergyStorage());
		this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
	},

	energyTick:function(type,src){
		var output = Math.min(this.getMaxVoltage(),this.data.energy);
		this.data.energy += src.add(output) - output;
	},
	
	getGuiScreen:function(){return GuiSolarGenerator;}
});