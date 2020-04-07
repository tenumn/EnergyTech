// [线缆轧制机]Wiremill
IDRegistry.genBlockID("wiremill");
Block.createBlock("wiremill",[
    {name:"Wiremill",texture:[["machineBottom",0],["wiremill_top",0],["machineSide",0],["wiremill",0],["machineSide",0],["machineSide",0]],inCreative:true}
],"opaque");
TileRenderer.setStandartModel(BlockID.wiremill,[["machineBottom",0],["wiremill_top",0],["machineSide",0],["wiremill",0],["machineSide",0],["machineSide",0]]);
TileRenderer.registerRotationModel(BlockID.wiremill,0,[["machineBottom",0],["wiremill_top",0],["machineSide",0],["wiremill",0],["machineSide",0],["machineSide",0]]);
for(var i = 1;i < 22;i++){TileRenderer.registerRotationModel(BlockID.wiremill,i * 4,[["machineBottom",0],["wiremill_top",1],["machineSide",0],["wiremill",i],["machineSide",0],["machineSide",0]]);}

Machine.setDrop("wiremill",BlockID.machineCasing);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.wiremill,count:1,data:0},["aba","cdc"],["a",ItemID.partIron,0,"b",ItemID.gearIron,0,"c",ItemID.circuit,0,"d",BlockID.machineCasing,0]);
});

var GuiWiremill = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Wiremill")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:50,bitmap:"energyBackground",scale:GUI_SCALE},
        {type:"bitmap",x:600,y:175 + GUI_SCALE * 2,bitmap:"arrowBackground",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],

    elements:{
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:175,bitmap:"slotBlank",scale:GUI_SCALE},
        "slotOutput":{type:"slot",x:720,y:175,bitmap:"slotBlank",scale:GUI_SCALE,isValid:function(){return false;}},
        "scaleArrow":{type:"scale",x:600,y:175 + GUI_SCALE * 2,direction:0,value:0.5,bitmap:"arrowScale",scale:GUI_SCALE},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energyScale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slotCircuit",isValid:Upgrade.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slotCircuit",isValid:Upgrade.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slotCircuit",isValid:Upgrade.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slotCircuit",isValid:Upgrade.isValidUpgrade}
    }
});

Machine.registerMachine(BlockID.wiremill,{
    defaultValues:{
        tier:2,
        meta:0,
        progress:0,
        work_time:320,
        isActive:false,
        energy_consumption:4
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
        StorageInterface.checkHoppers(this);
        var input = this.container.getSlot("slotInput"),recipe = Recipe.getRecipeResult("Wiremill",[input.id,input.data]);
        
        if(recipe && input.count >= recipe.count){
            if(this.data.energy >= this.data.energy_consumption){
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;
                this.activate("machine/wiremill.ogg");
                if(this.data.progress.toFixed(3) >= 1){
                    this.setOutput("slotOutput",recipe.output.id,recipe.output.count,recipe.output.data),input.count -= recipe.count;
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

    renderer:function(){
        var count = 22;
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (this.data.isActive?4 * (Math.round(this.data.progress / 1 * count * 10) % count) + 4:0));
    },

    energyReceive:Machine.energyReceive,
    getGuiScreen:function(){return GuiWiremill;}
});
TileRenderer.setRotationPlaceFunction(BlockID.wiremill);
StorageInterface.createInterface(BlockID.wiremill,{
	slots:{
		"slotInput":{input:true},
        "slotOutput":{output:true}
	},
	isValidInput:function(item){
        return Recipe.getRecipeResult("Wiremill",[item.id,item.data])?true:false;
    }
});