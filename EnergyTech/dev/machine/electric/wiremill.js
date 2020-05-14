// [线缆轧制机]Wiremill
IDRegistry.genBlockID("wiremill");
Block.createBlock("wiremill",[
    {name:"Wiremill",texture:[["machine_bottom",1],["wiremill_top",0],["machine_side",1],["wiremill",0],["machine_side",1],["machine_side",1]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.wiremill,[["machine_bottom",1],["wiremill_top",0],["machine_side",1],["wiremill",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.wiremill,0,[["machine_bottom",1],["wiremill_top",0],["machine_side",1],["wiremill",0],["machine_side",1],["machine_side",1]]);
for(let i = 1;i < 22;i++){TileRenderer.registerRotationModel(BlockID.wiremill,i * 4,[["machine_bottom",1],["wiremill_top",1],["machine_side",1],["wiremill",i],["machine_side",1],["machine_side",1]]);}

MachineRegistry.setDrop("wiremill",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.wiremill,count:1,data:0},["aba","cdc"],["a",ItemID.partIron,0,"b",ItemID.gearIron,0,"c",ItemID.circuit,0,"d",BlockID.machineCasing,1]);
});

var GuiWiremill = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Wiremill")}},
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
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:175,bitmap:"slot_empty",scale:GUI_SCALE},
        "slotOutput":{type:"slot",x:720,y:175,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "scaleArrow":{type:"scale",x:600,y:175 + GUI_SCALE * 2,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade}
    }
});

MachineRegistry.registerEUMachine(BlockID.wiremill,{
    defaultValues:{
        tier:2,
        meta:0,
        progress:0,
        work_time:320,
        isActive:false,
        sound_volume:16,
        energy_consumption:4
    },
    
    upgrades:["energyStorage","muffler","overclocker","transformer"],
    
	initValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.work_time = this.defaultValues.work_time;
        this.data.sound_volume = this.defaultValues.sound_volume;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
    },

	tick:function(){
        this.renderer();
		UpgradeRegistry.executeUpgrades(this);
        StorageInterface.checkHoppers(this);

        var input = this.container.getSlot("slotInput");
        var recipe = RecipeRegistry.getRecipeResult("Wiremill",[input.id,input.data]);
        
        if(recipe && input.count >= recipe.count){if(this.data.energy >= this.data.energy_consumption){
            this.activate("machine/wiremill.ogg");
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;

            if(this.data.progress.toFixed(3) >= 1){
                this.setOutputSlot("slotOutput",recipe.output.id,recipe.output.count,recipe.output.data),input.count -= recipe.count;
                this.container.validateAll();
                this.data.progress = 0;
            }
        } else {this.deactive();}} else {this.deactive(),this.data.progress = 0;}
        
        this.container.setScale("scaleArrow",parseInt(this.data.progress / 1 * 22) / 22);
        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    renderer:function(){
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (this.data.isActive?4 * (parseInt(this.data.progress / 1 * 22 * 10)%22) + 4:0));
    },

    getGuiScreen:function(){
        return GuiWiremill;
    },

    energyReceive:MachineRegistry.energyReceive
});
TileRenderer.setRotationPlaceFunction(BlockID.wiremill);
StorageInterface.createInterface(BlockID.wiremill,{
	slots:{
		"slotInput":{input:true},
        "slotOutput":{output:true}
	},
	isValidInput:function(item){
        return RecipeRegistry.getRecipeResult("Wiremill",[item.id,item.data])?true:false;
    }
});