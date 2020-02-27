// [太阳能发电机]solar Generator
IDRegistry.genBlockID("solarGenerator");
Block.createBlock("solarGenerator",[
	{name:"Solar Generator",texture:[["machine_bottom",1],["solar_generator",0],["machine_side",1]],inCreative:true}
],"opaque");

ETMachine.setDrop("solarGenerator",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.solarGenerator,count:1,data:0},["aaa","bcb","ded"],["a",102,0,"b",ItemID.plateTungsten,0,"c",ItemID.plateCarbon,0,"d",ItemID.circuit,0,"e",BlockID.machineCasing,0]);
});

var GuiSolarGenerator = new UI.StandartWindow({
	standart:{
		header:{text:{text:Translation.translate("Solar Generator")}},
		inventory:{standart:true},
		background:{standart:true}
	},
	
    drawing:[
		{type:"bitmap",x:900,y:400,bitmap:"logo",scale:GUI_SCALE},
		{type:"bitmap",x:350,y:75,bitmap:"energyBackground",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infosmall",scale:GUI_SCALE}
	],
	
	elements:{
		"textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Energy: ") + "0/0Eu"},
		"textEnergyOutput":{type:"text",font:GUI_TEXT,x:700,y:105,width:300,height:30,text:Translation.translate("Energy Output: ") + "0Eu"},
		"scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:75 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energyScale",scale:GUI_SCALE}
	}
});

ETMachine.registerGenerator(BlockID.solarGenerator,{
	tick:function(){
		var EnergyOutput = Math.min(random(1,World.getLightLevel(this.x,this.y + 1,this.z) / 4),this.getMaxVoltage());
        if(isCanSeeSky(this.x,this.y + 1,this.z) && this.data.energy + EnergyOutput < this.getEnergyStorage()){
			this.data.energy += EnergyOutput;
		}
		
		this.container.setScale("scaleEnergy",this.data.energy / this.getEnergyStorage());
		this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
		this.container.setText("textEnergyOutput",Translation.translate("Energy Output: ") + EnergyOutput + "Eu");
	},

	energyTick:function(type,src){
		var output = Math.min(this.getMaxVoltage(),this.data.energy);
		this.data.energy += src.add(output) - output;
	},
	
	getGuiScreen:function(){return GuiSolarGenerator;}
});	