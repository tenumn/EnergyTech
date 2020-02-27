// [压缩机]Compressor
IDRegistry.genBlockID("compressor");
Block.createBlock("compressor",[
    {name:"Compressor",texture:[["machine_bottom",0],["compressor_top",0],["machine_side",0],["compressor",0],["machine_side",0],["machine_side",0]],inCreative:true}
],"opaque");
TileRenderer.setStandartModel(BlockID.compressor,[["machine_bottom",0],["compressor_top",0],["machine_side",0],["compressor",0],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.compressor,0 ,[["machine_bottom",0],["compressor_top",0],["machine_side",0],["compressor",0],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.compressor,4 ,[["machine_bottom",0],["compressor_top",1],["machine_side",0],["compressor",0],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.compressor,8 ,[["machine_bottom",0],["compressor_top",1],["machine_side",0],["compressor",1],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.compressor,12,[["machine_bottom",0],["compressor_top",1],["machine_side",0],["compressor",2],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.compressor,16,[["machine_bottom",0],["compressor_top",1],["machine_side",0],["compressor",3],["machine_side",0],["machine_side",0]]);

ETMachine.setDrop("compressor",BlockID.machineCasing);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.compressor,count:1,data:0},["a a","bdb","aca"],["a",ItemID.plateIron,0,"b",ItemID.electricPiston,0,"c",ItemID.circuit,0,"d",BlockID.machineCasing,0]);
});

var GuiCompressor = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Compressor")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:900,y:400,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:75,bitmap:"energyBackground",scale:GUI_SCALE},
        {type:"bitmap",x:620,y:175 + GUI_SCALE,bitmap:"arrowBackground",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infosmall",scale:GUI_SCALE}
    ],

    elements:{
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:175,bitmap:"slotBlank",scale:GUI_SCALE},
        "slotUpgrade1":{type:"slot",x:370,y:400,bitmap:"slotCircuit",isValid:ETUpgrade.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:400,bitmap:"slotCircuit",isValid:ETUpgrade.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:400,bitmap:"slotCircuit",isValid:ETUpgrade.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:400,bitmap:"slotCircuit",isValid:ETUpgrade.isValidUpgrade},
        "scaleArrow":{type:"scale",x:620,y:175 + GUI_SCALE,direction:0,value:0.5,bitmap:"arrowScale",scale:GUI_SCALE},
        "slotOutput":{type:"slot",x:720,y:175,bitmap:"slotBlank",scale:GUI_SCALE,isValid:function(){return false;}},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:75 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energyScale",scale:GUI_SCALE}
    }
});

ETMachine.registerMachine(BlockID.compressor,{
    defaultValues:{
        tier:2,
        meta:0,
        work_time:320,
        progress:0,
        isActive:false,
        energy_consumption:4
    },
    
	setDefaultValues:function(){
		this.data.tier = this.defaultValues.tier;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
		this.data.work_time = this.defaultValues.work_time;
	},

	tick:function(){        
		this.setDefaultValues();
		ETUpgrade.executeUpgrades(this);
        StorageInterface.checkHoppers(this);

        var input = this.container.getSlot("slotInput"),recipe = ETRecipe.getRecipeResult("Compressor",input.id,input.data);
        
        if(recipe){
            if(this.data.energy >= this.data.energy_consumption){
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;
                this.setActive(true),this.playSound("machine/compressor.ogg");
                this.renderer();
                if(this.data.progress.toFixed(3) >= 1){
                    this.setOutput("slotOutput",recipe.id,recipe.count,recipe.data),input.count--;
                    this.container.validateAll();
                    this.data.progress = 0;
                }
            } else {
                this.setActive(false),this.stopSound();
            }
        } else {
            this.data.progress = 0;
            this.setActive(false),this.stopSound();
        }
        
        this.renderer();
        this.container.setScale("scaleEnergy",this.data.energy / this.getEnergyStorage());
        this.container.setScale("scaleArrow",Math.round(this.data.progress / 1 * 22) / 22);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    renderer:function(){
        var count = 4;
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (this.data.isActive?4 * (Math.round(this.data.progress / 1 * count * 10) % count) + 4:0));
    },

    energyReceive:ETMachine.energyReceive,
    getGuiScreen:function(){return GuiCompressor;},
    getTransportSlots:function(){return {input:["slotInput"],output:["slotOutput"]};}
});
TileRenderer.setRotationPlaceFunction(BlockID.compressor);
StorageInterface.createInterface(BlockID.compressor,{
	slots:{
		"slotInput":{input:true},
        "slotOutput":{output:true}
	},
	isValidInput:function(item){
		return ETRecipe.getRecipeResult("Compressor",item.id,item.data)?true:false;
	}
});