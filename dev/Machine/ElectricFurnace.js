// [电炉]Electric Furnace
IDRegistry.genBlockID("electricFurnace");
Block.createBlock("electricFurnace",[
    {name:"Electric Furnace",texture:[["machineBottom",0],["machineTop",0],["machineSide",0],["electric_furnace",0],["machineSide",0],["machineSide",0]],inCreative:true}
],"opaque");
TileRenderer.setStandartModel(BlockID.electricFurnace,[["machineBottom",0],["machineTop",0],["machineSide",0],["electric_furnace",0],["machineSide",0],["machineSide",0]]);
TileRenderer.registerRotationModel(BlockID.electricFurnace,0,[["machineBottom",0],["machineTop",0],["machineSide",0],["electric_furnace",0],["machineSide",0],["machineSide",0]]);
TileRenderer.registerRotationModel(BlockID.electricFurnace,4,[["machineBottom",0],["machineTop",0],["machineSide",0],["electric_furnace",1],["machineSide",0],["machineSide",0]]);

Machine.setDrop("electricFurnace",BlockID.machineCasing);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.electricFurnace,count:1,data:0},["bcb","cac","cdc"],["a",ItemID.circuit,0,"b",ItemID.stickIron,0,"c",ItemID.plateIron,0,"d",61,0]);
});

var GuiElectricFurnace = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Electric Furnace")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:50,bitmap:"energyBackground",scale:GUI_SCALE},
        {type:"bitmap",x:600,y:175 + GUI_SCALE,bitmap:"arrowBackground",scale:GUI_SCALE},
        {type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],

    elements:{
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:175,bitmap:"slotBlank",scale:GUI_SCALE},
        "scaleArrow":{type:"scale",x:600,y:175 + GUI_SCALE,direction:0,value:0.5,bitmap:"arrowScale",scale:GUI_SCALE},
        "slotOutput":{type:"slot",x:720,y:175,bitmap:"slotBlank",scale:GUI_SCALE,isValid:function(){return false;}},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energyScale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slotCircuit",isValid:Upgrade.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slotCircuit",isValid:Upgrade.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slotCircuit",isValid:Upgrade.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slotCircuit",isValid:Upgrade.isValidUpgrade}
    }
});

Machine.registerMachine(BlockID.electricFurnace,{
    defaultValues: {
        meta:0,
        progress:0,
        work_time:130,
        isActive:false,
        energy_consumption:3,
    },
    
	setDefaultValues:function(){
		this.data.tier = this.defaultValues.tier;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
		this.data.work_time = this.defaultValues.work_time;
	},
	
	tick:function(){
		Upgrade.executeUpgrades(this);
        StorageInterface.checkHoppers(this);
        var input = this.container.getSlot("slotInput");
        var recipe = Recipes.getFurnaceRecipeResult(input.id,"iron");
        
        if(recipe){
            if(this.data.energy >= this.data.energy_consumption){
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;
                this.activate("machine/electro_furnace.ogg");
                if(this.data.progress.toFixed(3) >= 1){
                    this.setOutput("slotOutput",recipe.id,1,recipe.data),input.count--;
                    this.container.validateAll();
                    this.data.progress = 0;
                }
            } else {
                this.deactive();
            }
        } else {
            this.data.progress = 0;
            this.deactive();
        }

        if(this.data.progress < 0){this.data.progress = 0;}
        this.container.setScale("scaleEnergy",this.data.energy / this.getEnergyStorage());
        this.container.setScale("scaleArrow",Math.round(this.data.progress / 1 * 22) / 22);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    getGuiScreen:function(){
        return GuiElectricFurnace;
    },

    energyReceive:Machine.energyReceive
});
TileRenderer.setRotationPlaceFunction(BlockID.electricFurnace);
StorageInterface.createInterface(BlockID.electricFurnace,{
	slots:{
		"slotInput":{input:true},
        "slotOutput":{output:true}
	},
	isValidInput:function(item){return Recipes.getFurnaceRecipeResult(item.id,"iron")?true:false;}
});