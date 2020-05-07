// [种植站]Farming Station
IDRegistry.genBlockID("farmingStation");
Block.createBlock("farmingStation",[
    {name:"Farming Station",texture:[["machine_bottom",1],["farming_station_top",0],["machine_side",1],["farming_station",0],["machine_side",1],["machine_side",1]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.farmingStation,[["machine_bottom",1],["farming_station_top",0],["machine_side",1],["farming_station",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.farmingStation,0 ,[["machine_bottom",1],["farming_station_top",0],["machine_side",1],["farming_station",0],["machine_side",1],["machine_side",1]]);
for(let i = 1;i < 9;i++){TileRenderer.registerRotationModel(BlockID.farmingStation,i * 4,[["machine_bottom",1],["farming_station_top",1],["machine_side",1],["farming_station",i],["machine_side",1],["machine_side",1]]);}

Machine.setDrop("farmingStation",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.farmingStation,count:1,data:0},["ada","beb","cfc"],["a",ItemID.partIron,0,"b",ItemID.plateIron,0,"c",ItemID.cellWater,0,"d",292,0,"e",BlockID.machineCasing,1,"f",ItemID.circuit,0]);
});

var GuiFarmingStation = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Farming Station")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:600,y:200 + GUI_SCALE,bitmap:"arrow_background",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],

    elements:{
        "slotDirt":{type:"slot",x:350 + GUI_SCALE * 43,y:220,bitmap:"slot_empty",scale:GUI_SCALE},
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:135,bitmap:"slot_empty",scale:GUI_SCALE},
        "scaleArrow":{type:"scale",x:600,y:200 + GUI_SCALE,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "slotOutput0":{type:"slot",x:720,y:170,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput1":{type:"slot",x:780,y:170,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput2":{type:"slot",x:720,y:230,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput3":{type:"slot",x:780,y:230,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:Upgrade.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:Upgrade.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:Upgrade.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:Upgrade.isValidUpgrade}
    }
});

Machine.registerEUMachine(BlockID.farmingStation,{
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
        var input = this.container.getSlot("slotInput"),recipe = Recipe.getRecipeResult("FarmingStation",[input.id,input.data]),dirt = this.container.getSlot("slotDirt");
        
        if(recipe && (recipe.dirt.id == -1 || recipe.dirt.id == dirt.id) && (recipe.dirt.data == -1 || recipe.dirt.data == dirt.data)){if(this.data.energy >= this.data.energy_consumption){
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
            this.activate();
            if(this.data.progress.toFixed(3) >= 1){
                var output = recipe.output;
                if(output[0] && Math.random() <= 1.00){this.setOutput("slotOutput0",output[0].id,output[0].count,output[0].data);}
                if(output[1] && Math.random() <= 0.75){this.setOutput("slotOutput1",output[1].id,output[1].count,output[1].data);}
                if(output[2] && Math.random() <= 0.50){this.setOutput("slotOutput2",output[2].id,output[2].count,output[2].data);}
                if(output[3] && Math.random() <= 0.25){this.setOutput("slotOutput3",output[3].id,output[3].count,output[3].data);}
                if(Math.random() <= 0.25) dirt.count--;
                input.count--;
                this.container.validateAll();
                this.data.progress = 0;
            }
        } else {this.deactive();}} else {this.data.progress = 0,this.deactive();}

        this.container.setScale("scaleEnergy",Math.round(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setScale("scaleArrow",Math.round(this.data.progress / 1 * 22) / 22);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    renderer:function(){
        var count = 9;
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta+(this.data.isActive?4*Math.round(this.data.progress/1*count)+4:0));
    },

    energyReceive:Machine.energyReceive,
    getGuiScreen:function(){return GuiFarmingStation;}
});
TileRenderer.setRotationPlaceFunction(BlockID.farmingStation);
StorageInterface.createInterface(BlockID.farmingStation,{
	slots:{
		"slotInput":{input:true},
        "slotOutput1":{output:true},
        "slotOutput2":{output:true},
        "slotOutput3":{output:true},
        "slotOutput4":{output:true}
	},
	isValidInput:function(item){return Recipe.getRecipeResult("FarmingStation",[item.id,item.data])?true:false;}
});