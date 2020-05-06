// [高炉]Blast Furnace
IDRegistry.genBlockID("blastFurnace");
Block.createBlock("blastFurnace",[
    {name:"Blast Furnace",texture:[["machine_bottom",2],["machine_top",2],["machine_side",2],["blastFurnace",0],["machine_side",2],["machine_side",2]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.blastFurnace,[["machine_bottom",2],["machine_top",2],["machine_side",2],["blastFurnace",0],["machine_side",2],["machine_side",2]]);
TileRenderer.registerRotationModel(BlockID.blastFurnace,0,[["machine_bottom",2],["machine_top",2],["machine_side",2],["blastFurnace",0],["machine_side",2],["machine_side",2]]);
TileRenderer.registerRotationModel(BlockID.blastFurnace,4,[["machine_bottom",2],["machine_top",2],["machine_side",2],["blastFurnace",1],["machine_side",2],["machine_side",2]]);

Machine.setDrop("blastFurnace",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.blastFurnace,count:1,data:0},[
        "dcd",
        "dbd",
        "dad"
    ],["a",BlockID.crudeBlastFurnace,0,"b",BlockID.machineCasing,1,"c",ItemID.circuit,0,"d",ItemID.plateIron,0]);
});

var GuiBlastFurnace = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Blast Furnace")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:50,bitmap:"energyBackground",scale:GUI_SCALE},
        {type:"bitmap",x:620,y:175 + GUI_SCALE * 2,bitmap:"arrow_background",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],

    elements:{
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:175,bitmap:"slot_empty",scale:GUI_SCALE},
        "slotOutput0":{type:"slot",x:720,y:175,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput1":{type:"slot",x:780,y:175,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "scaleArrow":{type:"scale",x:620,y:175 + GUI_SCALE * 2,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energyScale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:Upgrade.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:Upgrade.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:Upgrade.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:Upgrade.isValidUpgrade},
    }
});

Machine.registerEUMachine(BlockID.blastFurnace,{
    defaultValues:{
        meta:0,
        tier:2,
        progress:0,
        work_time:320,
        isActive:false,
        sound_volume:16,
        energy_consumption:4
    },

	initValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.work_time = this.defaultValues.work_time;
        this.data.sound_volume = this.defaultValues.sound_volume;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
	},
	
	tick:function(){
		Upgrade.executeUpgrades(this);
        StorageInterface.checkHoppers(this);
        
        var input = this.container.getSlot("slotInput"),recipe = Recipe.getRecipeResult("BlastFurnace",[input.id,input.data]);

        if(recipe){
            if(this.data.energy >= this.data.energy_consumption){
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;
                this.activate("machine/blast_furnace.ogg");
                if(this.data.progress.toFixed(3) >= 1){
                    if(recipe[0]) this.setOutput("slotOutput0",recipe[0].id,recipe[0].count,recipe[0].data);
                    if(recipe[1]) this.setOutput("slotOutput1",recipe[1].id,recipe[1].count,recipe[1].data);
                    input.count--;
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

        this.container.setScale("scaleArrow",Math.round(this.data.progress / 1 * 22) / 22);
        this.container.setScale("scaleEnergy",Math.round(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },
    
    energyReceive:Machine.energyReceive,
    getGuiScreen:function(){return GuiBlastFurnace;}
});
TileRenderer.setRotationPlaceFunction(BlockID.blastFurnace);
StorageInterface.createInterface(BlockID.blastFurnace,{
	slots:{
		"slotInput":{input:true},
        "slotOutput0":{output:true},
        "slotOutput1":{output:true}
	},
	isValidInput:function(item){return Recipe.getRecipeResult("BlastFurnace",[item.id,item.data])?true:false;}
});