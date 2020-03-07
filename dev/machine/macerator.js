// [打粉机]Macerator
IDRegistry.genBlockID("macerator");
Block.createBlock("macerator",[
    {name:"Macerator",texture:[["machine_bottom",0],["macerator_top",0],["machine_side",0],["macerator",0],["machine_side",0],["machine_side",0]],inCreative:true}
],"opaque");
TileRenderer.setStandartModel(BlockID.macerator,[["machine_bottom",0],["macerator_top",0],["machine_side",0],["macerator",0],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.macerator,0 ,[["machine_bottom",0],["macerator_top",0],["machine_side",0],["macerator",0],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.macerator,4 ,[["machine_bottom",0],["macerator_top",1],["machine_side",0],["macerator",0],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.macerator,8 ,[["machine_bottom",0],["macerator_top",1],["machine_side",0],["macerator",1],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.macerator,12,[["machine_bottom",0],["macerator_top",1],["machine_side",0],["macerator",2],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.macerator,16,[["machine_bottom",0],["macerator_top",1],["machine_side",0],["macerator",3],["machine_side",0],["machine_side",0]]);

ETMachine.setDrop("macerator",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.macerator,count:1,data:0},["aba","cdc","efe"],["a",ItemID.electricMotor,0,"b",ItemID.electricPiston,0,"c",ItemID.plateIron,0,"d",BlockID.crusher,0,"e",ItemID.stickIron,0,"f",ItemID.circuit,0]);
});

var GuiMacerator = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Macerator")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:900,y:400,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:75,bitmap:"energyBackground",scale:GUI_SCALE},
        {type:"bitmap",x:620,y:175 + GUI_SCALE,bitmap:"arrowBackground",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
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

ETMachine.registerMachine(BlockID.macerator,{
    defaultValues:{
        meta:0,
        tier:2,
        progress:0,
        work_time:320,
        isActive:false,
        energy_consumption:4
    },

	setDefaultValues: function(){
		this.data.tier = this.defaultValues.tier;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
		this.data.work_time = this.defaultValues.work_time;
	},
	
	tick: function(){
        this.renderer();
		this.setDefaultValues();
		ETUpgrade.executeUpgrades(this);
        StorageInterface.checkHoppers(this);
        var input = this.container.getSlot("slotInput"),recipe = ETRecipe.getRecipeResult("Macerator",input.id,input.data);

        if(recipe){if(this.data.energy >= this.data.energy_consumption){
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
            this.activate("machine/macerator.ogg");
            if(this.data.progress.toFixed(3) >= 1){
                this.setOutput("slotOutput",recipe.id,recipe.count,recipe.data),input.count--;
                this.container.validateAll();
                this.data.progress = 0;
            }
        } else {this.deactive();}} else {this.data.progress = 0,this.deactive();}

        this.container.setScale("scaleEnergy",this.data.energy / this.getEnergyStorage());
        this.container.setScale("scaleArrow",Math.round(this.data.progress / 1 * 22) / 22);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    renderer:function(){
        var count = 4;
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (this.data.isActive?4 * (Math.round(this.data.progress / 1 * count * 10) % count) + 4:0));
    },

    energyReceive:ETMachine.energyReceive,
    getGuiScreen:function(){return GuiMacerator;},
    getTransportSlots:function(){return {input:["slotInput"],output:["slotOutput"]};}
});
TileRenderer.setRotationPlaceFunction(BlockID.macerator);
StorageInterface.createInterface(BlockID.macerator,{
	slots:{
		"slotInput":{input:true},
        "slotOutput":{output:true}
	},
	isValidInput:function(item){return ETRecipe.getRecipeResult("Macerator",item.id,item.data)?true:false;}
});