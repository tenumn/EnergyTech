// [切割机]Cutting
IDRegistry.genBlockID("cutting");
Block.createBlock("cutting",[
    {name:"Cutting",texture:[["machine_bottom",0],["cutting_top",0],["machine_side",0],["cutting",0],["machine_side",0],["machine_side",0]],inCreative:true}
],"opaque");
TileRenderer.setStandartModel(BlockID.cutting,[["machine_bottom",0],["cutting_top",0],["machine_side",0],["cutting",0],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.cutting,0 ,[["machine_bottom",0],["cutting_top",0],["machine_side",0],["cutting",0],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.cutting,4 ,[["machine_bottom",0],["cutting_top",1],["machine_side",0],["cutting",0],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.cutting,8 ,[["machine_bottom",0],["cutting_top",1],["machine_side",0],["cutting",1],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.cutting,12,[["machine_bottom",0],["cutting_top",1],["machine_side",0],["cutting",2],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.cutting,16,[["machine_bottom",0],["cutting_top",1],["machine_side",0],["cutting",3],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.cutting,20,[["machine_bottom",0],["cutting_top",1],["machine_side",0],["cutting",4],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.cutting,24,[["machine_bottom",0],["cutting_top",1],["machine_side",0],["cutting",5],["machine_side",0],["machine_side",0]]);

ETMachine.setDrop("cutting",BlockID.machineCasing);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.cutting,count:1,data:0},["fef","cac","bdb"],["a",BlockID.machineCasing,0,"b",ItemID.electricMotor,0,"c",ItemID.plateIron,0,"d",ItemID.stickIron,0,"e",ItemID.circuit,0,"f",ItemID.partIron,0]);
});

var GuiCutting = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Cutting")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    drawing:[
        {type:"bitmap",x:900,y:400,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:75,bitmap:"energy_scale_0",scale:GUI_SCALE},
        {type:"bitmap",x:620,y:175 + GUI_SCALE,bitmap:"arrow_0",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"info_scale_small",scale:GUI_SCALE}
    ],
    elements:{
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:175,bitmap:"blank_slot",scale:GUI_SCALE},
        "slotUpgrade1":{type:"slot",x:370,y:400,bitmap:"circuit_slot",isValid:ETUpgrade.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:400,bitmap:"circuit_slot",isValid:ETUpgrade.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:400,bitmap:"circuit_slot",isValid:ETUpgrade.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:400,bitmap:"circuit_slot",isValid:ETUpgrade.isValidUpgrade},
        "scaleArrow":{type:"scale",x:620,y:175 + GUI_SCALE,direction:0,value:0.5,bitmap:"arrow_1",scale:GUI_SCALE},
        "slotOutput":{type:"slot",x:720,y:175,bitmap:"blank_slot",scale:GUI_SCALE,isValid:function(){return false;}},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:75 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale_1",scale:GUI_SCALE}
    }
});

ETMachine.registerMachine(BlockID.cutting,{
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
		this.setDefaultValues();
		ETUpgrade.executeUpgrades(this);
        StorageInterface.checkHoppers(this);
        var input = this.container.getSlot("slotInput"),recipe = ETRecipe.getRecipeResult("Cutting",input.id,input.data);

        if(recipe){
            if(this.data.energy >= this.data.energy_consumption){
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;
                this.setActive(true);
                this.renderer();
                if(this.data.progress.toFixed(3) >= 1){
                    this.setOutput("slotOutput",recipe.id,recipe.count,recipe.data),input.count--;
                    this.container.validateAll();
                    this.data.progress = 0;
                }
            } else {
                this.setActive(false);
            }
        } else {
            this.data.progress = 0;
            this.setActive(false);
        }

        this.renderer();
        this.container.setScale("scaleEnergy",this.data.energy / this.getEnergyStorage());
        this.container.setScale("scaleArrow",Math.round(this.data.progress / 1 * 22) / 22);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    renderer:function(){
        var count = 6;
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (this.data.isActive?4 * (Math.round(this.data.progress / 1 * count * 10) % count) + 4:0));
    },
    
    energyReceive:ETMachine.energyReceive,
    getGuiScreen:function(){return GuiCutting;},
    getTransportSlots:function(){return {input:["slotInput"],output:["slotOutput"]};}
});
TileRenderer.setRotationPlaceFunction(BlockID.cutting);
StorageInterface.createInterface(BlockID.cutting,{
	slots:{
		"slotInput":{input:true},
        "slotOutput":{output:true}
	},
	isValidInput:function(item){
		return ETRecipe.getRecipeResult("Cutting",item.id,item.data)?true:false;
	}
});