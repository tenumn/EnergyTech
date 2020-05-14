// [装罐机]Canning Machine
IDRegistry.genBlockID("canningMachine");
Block.createBlock("canningMachine",[
    {name:"Canning Machine",texture:[["machine_bottom",1],["machine_top",1],["machine_side",1],["canningMachine",0],["machine_side",1],["machine_side",1]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.canningMachine,[["machine_bottom",1],["machine_top",1],["machine_side",1],["canningMachine",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.canningMachine,0,[["machine_bottom",1],["machine_top",1],["machine_side",1],["canningMachine",0],["machine_side",1],["machine_side",1]]);

MachineRegistry.setDrop("canningMachine",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.canningMachine,count:1,data:0},[
        "dcd",
        "dcd",
        "aba"
    ],["a",ItemID.circuit,0,"b",BlockID.machineCasing,1,"c",ItemID.cellEmpty,0,"d",ItemID.plateIron,0]);
});

var GuiCanningMachine = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Canning Machine")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:600,y:175 + GUI_SCALE * 2,bitmap:"arrow_background",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],

    elements:{
        "slotCell":{type:"slot",x:350 + GUI_SCALE * 43,y:220,bitmap:"slot_cell",scale:GUI_SCALE},
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:135,bitmap:"slot_empty",scale:GUI_SCALE},
        "scaleArrow":{type:"scale",x:600,y:175 + GUI_SCALE * 2,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "slotOutput":{type:"slot",x:720,y:170,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},

        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade}
    }
});

MachineRegistry.registerEUMachine(BlockID.canningMachine,{
    defaultValues:{
        meta:0,
        tier:2,
        progress:0,
        work_time:320,
        energy_consumption:4
    },

    upgrades:["energyStorage","overclocker","transformer"],

	initValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.work_time = this.defaultValues.work_time;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
	},
	
	tick:function(){
		UpgradeRegistry.executeUpgrades(this);
        StorageInterface.checkHoppers(this);

        var input1 = this.container.getSlot("slotInput1");
        var input2 = this.container.getSlot("slotInput2");    
        var recipe = RecipeRegistry.getRecipeResult("CanningMachine",[input1.id,input1.data,input2.id,input2.data]);
        
        if(recipe){if(this.data.energy >= this.data.energy_consumption){
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
            if(this.data.progress.toFixed(3) >= 1){
                this.setOutputSlot("slotOutput",recipe.output.id,recipe.output.count,recipe.output.data),input1.count--,input2.count--;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }} else {this.data.progress = 0;}

        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setScale("scaleArrow",parseInt(this.data.progress / 1 * 22) / 22);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    getGuiScreen:function(){
        return GuiCanningMachine;
    },

    energyReceive:MachineRegistry.energyReceive
});
TileRenderer.setRotationPlaceFunction(BlockID.canningMachine);
StorageInterface.createInterface(BlockID.canningMachine,{
	slots:{
        "slotInput1":{input:true},
        "slotInput2":{input:true},
        "slotOutput":{output:true}
	},
	isValidInput:function(item){return RecipeRegistry.getRecipeResult("CanningMachine",[item.id,item.data])?true:false;}
});