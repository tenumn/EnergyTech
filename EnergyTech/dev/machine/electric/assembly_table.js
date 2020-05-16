// [装配台]Assembly Table
IDRegistry.genBlockID("assemblyTable");
Block.createBlock("assemblyTable",[
    {name:"Assembly Table",texture:[["machine_bottom",1],["assembly_table_top",0],["assembly_table_side",0]],inCreative:true}
],{base:1,solid:true,opaque:true,destroytime:5,explosionres:16});

MachineRegistry.setDrop("assemblyTable",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.assemblyTable,count:1,data:0},[
        "a",
        "b",
        "c"
    ],["a",ItemID.circuit,0,"b",BlockID.machineCasing,1,"c",58,0]);
});

var render = new ICRender.Model(),model = new BlockRenderer.Model();
model.addBox(0,0,0,1,0.0625,1,BlockID.assemblyTable,0);
model.addBox(0,0.1875,0,1,0.5625,1,BlockID.assemblyTable,0);
model.addBox(0.125,0.0625,0.125,0.875,0.1875,0.875,BlockID.assemblyTable,0);
model.addBox(0.1875,0.0625,0.0625,0.25,0.1875,0.125,[["azure",0]]);
model.addBox(0.0625,0.0625,0.625,0.125,0.1875,0.6875,[["azure",0]]);
model.addBox(0.0625,0.0625,0.75,0.125,0.1875,0.8125,[["azure",0]]);
model.addBox(0.625,0.0625,0.875,0.6875,0.1875,0.9375,[["azure",0]]);
model.addBox(0.75,0.0625,0.875,0.8125,0.1875,0.9375,[["azure",0]]);
model.addBox(0.875,0.0625,0.1875,0.9375,0.1875,0.25,[["azure",0]]);
model.addBox(0.875,0.0625,0.3125,0.9375,0.1875,0.375,[["azure",0]]);
model.addBox(0.3125,0.0625,0.0625,0.375,0.1875,0.125,[["azure",0]]);
render.addEntry(model);
BlockRenderer.enableCoordMapping(BlockID.assemblyTable,-1,render);
Block.setBlockShape(BlockID.assemblyTable,{x:0,y:0,z:0},{x:1,y:0.5,z:1});

var GuiAssemblyTable = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Assembly Table")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:615,y:170 + GUI_SCALE * 2,bitmap:"arrow_background",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],

    elements:{
        "slotInput1":{type:"slot",x:460,y:170,bitmap:"slot_circuit",scale:GUI_SCALE},
        "slotInput2":{type:"slot",x:520,y:170,bitmap:"slot_empty",scale:GUI_SCALE},
        "scaleArrow":{type:"scale",x:615,y:170 + GUI_SCALE * 2,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "slotOutput":{type:"slot",x:720,y:170,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},

        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade}
    }
});

MachineRegistry.registerEUMachine(BlockID.assemblyTable,{
    defaultValues:{
        meta:0,
        tier:1,
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
        var recipe = RecipeRegistry.getRecipeResult("AssemblyTable",[input1.id,input1.data,input2.id,input2.data]);

        if(recipe && input1.count >= recipe.input[0] && input2.count >= recipe.input[1]){if(this.data.energy >= this.data.energy_consumption){
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;
                if(this.data.progress.toFixed(3) >= 1){
                    this.setOutputSlot("slotOutput",recipe.output.id,recipe.output.count,recipe.output.data);
                    input1.count -= recipe.input[0];
                    input2.count -= recipe.input[1];
                    this.container.validateAll();
                    this.data.progress = 0;
                }
            }
        } else {this.data.progress = 0;}

        this.container.setScale("scaleArrow",parseInt(this.data.progress / 1 * 22) / 22);
        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    getGuiScreen:function(){
        return GuiAssemblyTable;
    },

    energyReceive:MachineRegistry.energyReceive
});
TileRenderer.setRotationPlaceFunction(BlockID.assemblyTable);
StorageInterface.createInterface(BlockID.assemblyTable,{
	slots:{
        "slotInput1":{input:true},
        "slotInput2":{input:true},
        "slotOutput":{output:true}
	},
	isValidInput:function(item){return RecipeRegistry.getRecipeResult("AssemblyTable",[item.id,item.data])?true:false;}
});