// [电解机]Electrolyzer
IDRegistry.genBlockID("electrolyzer");
Block.createBlock("electrolyzer",[
    {name:"Electrolyzer",texture:[["machine_bottom",2],["machine_top",2],["machine_side",2],["electrolyzer",0],["machine_side",2],["machine_side",2]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.electrolyzer,[["machine_bottom",2],["machine_top",2],["machine_side",2],["electrolyzer",0],["machine_side",2],["machine_side",2]]);
TileRenderer.registerRotationModel(BlockID.electrolyzer,0,[["machine_bottom",2],["machine_top",2],["machine_side",2],["electrolyzer",0],["machine_side",2],["machine_side",2]]);
for(let i = 1;i < 8;i++) TileRenderer.registerRotationModel(BlockID.electrolyzer,i * 4,[["machine_bottom",2],["machine_top",2],["machine_side",2],["electrolyzer",i],["machine_side",2],["machine_side",2]]);

MachineRegistry.setDrop("electrolyzer",BlockID.machineCasing,2);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.electrolyzer,count:1,data:0},[
        "aba",
        "aca",
        "ded"
    ],["a",ItemID.wireGold,0,"b",BlockID.glassTank,0,"c",BlockID.machineCasing,2,"d",ItemID.circuit,0,"e",BlockID.coilTin,0]);
});

var GuiElectrolyzer = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Electrolyzer")}},
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
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:200,bitmap:"slot_empty",scale:GUI_SCALE},
        "scaleArrow":{type:"scale",x:600,y:200 + GUI_SCALE,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "slotOutput0":{type:"slot",x:720,y:150,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput1":{type:"slot",x:780,y:150,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput2":{type:"slot",x:720,y:210,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput3":{type:"slot",x:780,y:210,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade}
    }
});

MachineRegistry.registerEUMachine(BlockID.electrolyzer,{
    defaultValues:{
        meta:0,
        tier:3,
        progress:0,
        work_time:320,
        isActive:false,
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
        this.renderer();
        StorageInterface.checkHoppers(this);
		UpgradeRegistry.executeUpgrades(this);

        var input = this.container.getSlot("slotInput");
        var recipe = RecipeRegistry.getRecipeResult("Electrolyzer",[input.id,input.data]);
        if(recipe && input.count >= recipe.count){
            if(this.data.energy >= this.data.energy_consumption){
                this.activate();
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;

                if(this.data.progress.toFixed(3) >= 1){
                    for(let i = 0;i < 4;i++){
                        if(recipe.output[i]) this.setOutputSlot("slotOutput" + i,recipe.output[i].id,recipe.output[i].count,recipe.output[i].data);
                    } input.count -= recipe.count;
                    this.container.validateAll();
                    this.data.progress = 0;
                }
            } else {
                this.deactive();
            }
        } else {
            this.data.progress = 0,this.deactive();
        }
        
        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setScale("scaleArrow",parseInt(this.data.progress / 1 * 22) / 22);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    renderer:function(){
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (this.data.isActive?4 * (parseInt(this.data.progress / 1 * 8 * 10) % 8) + 4:0));
    },

    getGuiScreen:function(){
        return GuiElectrolyzer;
    },

    energyReceive:MachineRegistry.energyReceive
});
TileRenderer.setRotationPlaceFunction(BlockID.electrolyzer);
StorageInterface.createInterface(BlockID.electrolyzer,{
	slots:{
		"slotInput":{input:true},
        "slotOutput1":{output:true},
        "slotOutput2":{output:true},
        "slotOutput3":{output:true},
        "slotOutput4":{output:true}
	},
	isValidInput:function(item){
        return RecipeRegistry.getRecipeResult("Electrolyzer",[item.id,item.data])?true:false;
	}
});