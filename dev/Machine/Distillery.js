// [蒸馏室]Distillery
IDRegistry.genBlockID("distillery");
Block.createBlock("distillery",[
    {name:"Distillery",texture:[["machine_bottom",0],["machine_top",0],["machine_side",0],["distillery",0],["machine_side",0],["machine_side",0]],inCreative:true}
],"opaque");
TileRenderer.setStandartModel(BlockID.distillery,[["machine_bottom",0],["machine_top",0],["machine_side",0],["distillery",0],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.distillery,0,[["machine_bottom",0],["machine_top",0],["machine_side",0],["distillery",0],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.distillery,4,[["machine_bottom",0],["machine_top",0],["machine_side",0],["distillery",1],["machine_side",0],["machine_side",0]]);

Machine.setDrop("distillery",BlockID.machineCasing);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.distillery,count:1,data:0},["ebe","dad","ece"],["a",BlockID.machineCasing,0,"b",BlockID.glassTank,0,"c",410,0,"d",369,0,"e",ItemID.plateIron,0]);
});

var GuiDistillery = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Distillery")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:50,bitmap:"energyBackground",scale:GUI_SCALE},
        {type:"bitmap",x:600,y:200 + GUI_SCALE * 2,bitmap:"arrowBackground",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],

    elements:{
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:200,bitmap:"slotBlank",scale:GUI_SCALE},
        "scaleArrow":{type:"scale",x:600,y:200 + GUI_SCALE * 2,direction:0,value:0.5,bitmap:"arrowScale",scale:GUI_SCALE},
        "slotOutput0":{type:"slot",x:720,y:175,bitmap:"slotBlank",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput1":{type:"slot",x:780,y:175,bitmap:"slotBlank",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput2":{type:"slot",x:720,y:235,bitmap:"slotBlank",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput3":{type:"slot",x:780,y:235,bitmap:"slotBlank",scale:GUI_SCALE,isValid:function(){return false;}},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energyScale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slotCircuit",isValid:Upgrade.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slotCircuit",isValid:Upgrade.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slotCircuit",isValid:Upgrade.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slotCircuit",isValid:Upgrade.isValidUpgrade}
    }
});

Machine.registerMachine(BlockID.distillery,{
    defaultValues:{
        meta:0,
        tier:2,
        progress:0,
        work_time:320,
        isActive:false,
        energy_consumption:4
    },

	initValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.work_time = this.defaultValues.work_time;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
	},
    
	tick:function(){
        this.renderer();
		Upgrade.executeUpgrades(this);
        StorageInterface.checkHoppers(this);

        var input = this.container.getSlot("slotInput"),recipe = Recipe.getRecipeResult("Distillery",[input.id,input.data]);
        if(recipe && input.count >= recipe.count){
            if(this.data.energy >= this.data.energy_consumption){
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;
                this.activate();
                if(this.data.progress.toFixed(3) >= 1){
                    for(let i = 0;i <= 3;i++){
                        var output = recipe.output[i];
                        if(output){this.setOutput("slotOutput" + i,output.id,output.count,output.data);}
                    }
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

        this.container.setScale("scaleEnergy",this.data.energy / this.getEnergyStorage());
        this.container.setScale("scaleArrow",Math.round(this.data.progress / 1 * 22) / 22);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    energyReceive:Machine.energyReceive,
    getGuiScreen:function(){return GuiDistillery;}
});
TileRenderer.setRotationPlaceFunction(BlockID.distillery);
StorageInterface.createInterface(BlockID.distillery,{
	slots:{
		"slotInput":{input:true},
        "slotOutput1":{output:true},
        "slotOutput2":{output:true},
        "slotOutput3":{output:true},
        "slotOutput4":{output:true}
	},
	isValidInput:function(item){return Recipe.getRecipeResult("Distillery",[item.id,item.data])?true:false;}
});