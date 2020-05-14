// [洗矿机]Ore Washer
IDRegistry.genBlockID("oreWasher");
Block.createBlock("oreWasher",[
    {name:"Ore Washer",texture:[["machine_bottom",1],["oreWasherTop",0],["machine_side",1],["oreWasher",0],["oreWasherSide",0],["oreWasherSide",0]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.oreWasher,[["machine_bottom",1],["oreWasherTop",0],["machine_side",1],["oreWasher",0],["oreWasherSide",0],["oreWasherSide",0]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,0 ,[["machine_bottom",1],["oreWasherTop",0],["machine_side",1],["oreWasher",0 ],["oreWasherSide",0],["oreWasherSide",0]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,4 ,[["machine_bottom",1],["oreWasherTop",1],["machine_side",1],["oreWasher",0 ],["oreWasherSide",0],["oreWasherSide",0]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,8 ,[["machine_bottom",1],["oreWasherTop",1],["machine_side",1],["oreWasher",1 ],["oreWasherSide",0],["oreWasherSide",0]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,12,[["machine_bottom",1],["oreWasherTop",1],["machine_side",1],["oreWasher",2 ],["oreWasherSide",1],["oreWasherSide",1]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,16,[["machine_bottom",1],["oreWasherTop",1],["machine_side",1],["oreWasher",3 ],["oreWasherSide",1],["oreWasherSide",1]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,20,[["machine_bottom",1],["oreWasherTop",1],["machine_side",1],["oreWasher",4 ],["oreWasherSide",2],["oreWasherSide",2]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,24,[["machine_bottom",1],["oreWasherTop",1],["machine_side",1],["oreWasher",5 ],["oreWasherSide",2],["oreWasherSide",2]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,28,[["machine_bottom",1],["oreWasherTop",1],["machine_side",1],["oreWasher",6 ],["oreWasherSide",3],["oreWasherSide",3]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,32,[["machine_bottom",1],["oreWasherTop",1],["machine_side",1],["oreWasher",7 ],["oreWasherSide",3],["oreWasherSide",3]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,36,[["machine_bottom",1],["oreWasherTop",1],["machine_side",1],["oreWasher",8 ],["oreWasherSide",4],["oreWasherSide",4]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,40,[["machine_bottom",1],["oreWasherTop",1],["machine_side",1],["oreWasher",9 ],["oreWasherSide",4],["oreWasherSide",4]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,44,[["machine_bottom",1],["oreWasherTop",1],["machine_side",1],["oreWasher",10],["oreWasherSide",5],["oreWasherSide",5]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,48,[["machine_bottom",1],["oreWasherTop",1],["machine_side",1],["oreWasher",11],["oreWasherSide",5],["oreWasherSide",5]]);

MachineRegistry.setDrop("oreWasher",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.oreWasher,count:1,data:0},[
        "aaa",
        "bcb",
        "ded"
    ],["a",ItemID.plateIron,0,"b",ItemID.cellWater,0,"c",BlockID.machineCasing,1,"d",ItemID.electricMotor,0,"e",ItemID.circuit,0]);
});

var GuiOreWasher = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Ore Washer")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:600,y:200 + GUI_SCALE,bitmap:"arrow_background",scale:GUI_SCALE},
        {type:"bitmap",x:900 - GUI_SCALE * 3,y:175 - GUI_SCALE * 6,bitmap:"liquidBackground",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],

    elements:{
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:200,bitmap:"slot_empty",scale:GUI_SCALE},
        "scaleArrow":{type:"scale",x:600,y:200 + GUI_SCALE,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "slotOutput0":{type:"slot",x:720,y:175,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput1":{type:"slot",x:780,y:175,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput2":{type:"slot",x:720,y:235,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput3":{type:"slot",x:780,y:235,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},
        "scaleLiquid":{type:"scale",x:900 + GUI_SCALE * 3,y:175,direction:1,value:0.5,bitmap:"liquidScale",overlay:"liquidScale",scale:GUI_SCALE},

        "slotLiquid1":{type:"slot",x:720,y:325,bitmap:"slot_cell",isValid:function(id,count,data){return Liquid.getItemLiquid(id,data) == "water";}},
        "slotLiquid2":{type:"slot",x:780,y:325,bitmap:"slot_cell",isValid:function(){return false;}},
        
        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade}
    }
});

MachineRegistry.registerEUMachine(BlockID.oreWasher,{
    defaultValues:{
        meta:0,
        tier:2,
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
    
    init:function(){
		this.liquidStorage.setLimit("water",8);
		this.renderer();
    },
    
	tick:function(){
        this.renderer();
		UpgradeRegistry.executeUpgrades(this);
        StorageInterface.checkHoppers(this);
        
        var liquid1 = this.container.getSlot("slotLiquid1");
		var liquid2 = this.container.getSlot("slotLiquid2");
		var empty = Liquid.getEmptyItem(liquid1.id,liquid1.data);
		if(empty && empty.liquid == "water"){
			if(this.liquidStorage.getAmount("water") < 8 && (liquid2.id == empty.id && liquid2.data == empty.data && liquid2.count < Item.getMaxStack(empty.id) || liquid2.id == 0)){
				this.liquidStorage.addLiquid("water",1);
				liquid1.count--;
				liquid2.id = empty.id;
				liquid2.data = empty.data;
				liquid2.count++;
				this.container.validateAll();
			}
		}

        var input = this.container.getSlot("slotInput");
        var recipe = RecipeRegistry.getRecipeResult("OreWasher",[input.id,input.data]);
        
        if(recipe && this.liquidStorage.getAmount("water") > 0){if(this.data.energy >= this.data.energy_consumption){
            this.activate();
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
            
            if(this.data.progress.toFixed(3) >= 1){
                this.liquidStorage.getLiquid("water",1);
                for(let i = 0;i < 4;i++){
                    if(recipe[i]){
                        this.setOutputSlot("slotOutput" + i,recipe[i].id,recipe[i].count,recipe[i].data);
                    }
                } input.count--;
                this.container.validateAll();
                this.data.progress = 0;
            }
        } else {this.deactive();}} else {this.deactive(),this.data.progress = 0;}

        this.liquidStorage.updateUiScale("scaleLiquid","water");
        this.container.setScale("scaleArrow",parseInt(this.data.progress / 1 * 22) / 22);
        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    renderer:function(){
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (this.data.isActive?4 * (count - parseInt(this.data.progress / 1 * 12 * 10)%12) + 4:0));
    },

    getGuiScreen:function(){
        return GuiOreWasher;
    },

    energyReceive:MachineRegistry.energyReceive
});
TileRenderer.setRotationPlaceFunction(BlockID.oreWasher);
StorageInterface.createInterface(BlockID.oreWasher,{
	slots:{
		"slotInput":{input:true},
        "slotOutput1":{output:true},
        "slotOutput2":{output:true},
        "slotOutput3":{output:true},
        "slotOutput4":{output:true}
	},
	isValidInput:function(item){return RecipeRegistry.getRecipeResult("OreWasher",[item.id,item.data])?true:false;}
});