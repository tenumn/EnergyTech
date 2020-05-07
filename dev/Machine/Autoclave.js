// [高压釜]Autoclave
IDRegistry.genBlockID("autoclave");
Block.createBlock("autoclave",[
    {name:"Autoclave",texture:[["machine_bottom",2],["machine_top",2],["machine_side",2],["autoclave",0],["machine_side",2],["machine_side",2]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.autoclave,[["machine_bottom",2],["machine_top",2],["machine_side",2],["autoclave",0],["machine_side",2],["machine_side",2]]);
TileRenderer.registerRotationModel(BlockID.autoclave,0,[["machine_bottom",2],["machine_top",2],["machine_side",2],["autoclave",0],["machine_side",2],["machine_side",2]]);
TileRenderer.registerRotationModel(BlockID.autoclave,4,[["machine_bottom",2],["machine_top",2],["machine_side",2],["autoclave",1],["machine_side",2],["machine_side",2]]);

Machine.setDrop("autoclave",BlockID.machineCasing,2);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.autoclave,count:1,data:0},[
        "aba",
        "bcb",
        "aba"
    ],["a",ItemID.partIron,0,"b",ItemID.plateIron,0,"c",BlockID.machineCasing,1]);
});

var GuiAutoclave = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Autoclave")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:620,y:175 + GUI_SCALE * 2,bitmap:"arrow_background",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],

    elements:{
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:175,bitmap:"slot_empty",scale:GUI_SCALE},
        "slotOutput":{type:"slot",x:720,y:175,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "scaleArrow":{type:"scale",x:620,y:175 + GUI_SCALE * 2,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:Upgrade.isValidUpgrade},
        "slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:Upgrade.isValidUpgrade},
        "slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:Upgrade.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:Upgrade.isValidUpgrade},
    }
});

Machine.registerEUMachine(BlockID.autoclave,{
    defaultValues:{
        meta:0,
        tier:3,
        progress:0,
        work_time:320,
        isActive:false,
        sound_volume:16,
        energy_consumption:4
    },

	initValues: function(){
        this.data.tier = this.defaultValues.tier;
        this.data.work_time = this.defaultValues.work_time;
        this.data.sound_volume = this.defaultValues.sound_volume;
        this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
	},
	
	tick:function(){
		Upgrade.executeUpgrades(this);
        StorageInterface.checkHoppers(this);
        
        var input = this.container.getSlot("slotInput"),recipe = Recipe.getRecipeResult("Autoclave",[input.id,input.data]);

        if(recipe && input.count >= recipe.count){
            if(this.data.energy >= this.data.energy_consumption){
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;
                this.activate("machine/autoclave.ogg");
                if(this.data.progress.toFixed(3) >= 1){
                    var output = recipe.output;
                    this.setOutput("slotOutput",output.id,output.count,output.data);
                    input.count -= recipe.count;
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

        this.container.setScale("scaleEnergy",Math.round(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setScale("scaleArrow",Math.round(this.data.progress / 1 * 22) / 22);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },
    
    getGuiScreen:function(){
        return GuiAutoclave;
    },

    energyReceive:Machine.energyReceive
});
TileRenderer.setRotationPlaceFunction(BlockID.autoclave);
StorageInterface.createInterface(BlockID.autoclave,{
	slots:{
		"slotInput":{input:true},
        "slotOutput":{output:true}
	},
	isValidInput:function(item){return Recipe.getRecipeResult("Autoclave",[item.id,item.data])?true:false;}
});