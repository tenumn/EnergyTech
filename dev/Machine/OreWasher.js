// [洗矿机]Ore Washer
IDRegistry.genBlockID("oreWasher");
Block.createBlock("oreWasher",[
    {name:"Ore Washer",texture:[["machine_bottom",0],["ore_washer_top",0],["machine_side",0],["ore_washer",0],["ore_washer_side",0],["ore_washer_side",0]],inCreative:true}
],"opaque");
TileRenderer.setStandartModel(BlockID.oreWasher,[["machine_bottom",0],["ore_washer_top",0],["machine_side",0],["ore_washer",0],["ore_washer_side",0],["ore_washer_side",0]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,0 ,[["machine_bottom",0],["ore_washer_top",0],["machine_side",0],["ore_washer",0 ],["ore_washer_side",0],["ore_washer_side",0]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,4 ,[["machine_bottom",0],["ore_washer_top",1],["machine_side",0],["ore_washer",0 ],["ore_washer_side",0],["ore_washer_side",0]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,8 ,[["machine_bottom",0],["ore_washer_top",1],["machine_side",0],["ore_washer",1 ],["ore_washer_side",0],["ore_washer_side",0]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,12,[["machine_bottom",0],["ore_washer_top",1],["machine_side",0],["ore_washer",2 ],["ore_washer_side",1],["ore_washer_side",1]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,16,[["machine_bottom",0],["ore_washer_top",1],["machine_side",0],["ore_washer",3 ],["ore_washer_side",1],["ore_washer_side",1]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,20,[["machine_bottom",0],["ore_washer_top",1],["machine_side",0],["ore_washer",4 ],["ore_washer_side",2],["ore_washer_side",2]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,24,[["machine_bottom",0],["ore_washer_top",1],["machine_side",0],["ore_washer",5 ],["ore_washer_side",2],["ore_washer_side",2]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,28,[["machine_bottom",0],["ore_washer_top",1],["machine_side",0],["ore_washer",6 ],["ore_washer_side",3],["ore_washer_side",3]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,32,[["machine_bottom",0],["ore_washer_top",1],["machine_side",0],["ore_washer",7 ],["ore_washer_side",3],["ore_washer_side",3]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,36,[["machine_bottom",0],["ore_washer_top",1],["machine_side",0],["ore_washer",8 ],["ore_washer_side",4],["ore_washer_side",4]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,40,[["machine_bottom",0],["ore_washer_top",1],["machine_side",0],["ore_washer",9 ],["ore_washer_side",4],["ore_washer_side",4]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,44,[["machine_bottom",0],["ore_washer_top",1],["machine_side",0],["ore_washer",10],["ore_washer_side",5],["ore_washer_side",5]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,48,[["machine_bottom",0],["ore_washer_top",1],["machine_side",0],["ore_washer",11],["ore_washer_side",5],["ore_washer_side",5]]);

ETMachine.setDrop("oreWasher",BlockID.machineCasing);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.oreWasher,count:1,data:0},["aaa","bcb","ded"],["a",ItemID.plateIron,0,"b",ItemID.cellWater,0,"c",BlockID.machineCasing,0,"d",ItemID.electricMotor,0,"e",ItemID.circuit,0]);
});

var GuiOreWasher = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Ore Washer")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:900,y:400,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:75,bitmap:"energyBackground",scale:GUI_SCALE},
        {type:"bitmap",x:600,y:200 + GUI_SCALE,bitmap:"arrowBackground",scale:GUI_SCALE},
        {type:"bitmap",x:900 - GUI_SCALE * 3,y:175 - GUI_SCALE * 6,bitmap:"liquidBackground",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infosmall",scale:GUI_SCALE}
    ],

    elements:{
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:200,bitmap:"slotBlank",scale:GUI_SCALE},
        "slotUpgrade1":{type:"slot",x:370,y:400,bitmap:"slotCircuit",isValid:ETUpgrade.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:400,bitmap:"slotCircuit",isValid:ETUpgrade.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:400,bitmap:"slotCircuit",isValid:ETUpgrade.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:400,bitmap:"slotCircuit",isValid:ETUpgrade.isValidUpgrade},
        "scaleArrow":{type:"scale",x:600,y:200 + GUI_SCALE,direction:0,value:0.5,bitmap:"arrowScale",scale:GUI_SCALE},
        "slotOutput1":{type:"slot",x:720,y:175,bitmap:"slotBlank",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput2":{type:"slot",x:780,y:175,bitmap:"slotBlank",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput3":{type:"slot",x:720,y:235,bitmap:"slotBlank",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput4":{type:"slot",x:780,y:235,bitmap:"slotBlank",scale:GUI_SCALE,isValid:function(){return false;}},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:75 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energyScale",scale:GUI_SCALE},
        "scaleLiquid":{type:"scale",x:900 + GUI_SCALE * 3,y:175,direction:1,value:0.5,bitmap:"liquid_scale_water",overlay:"liquid_scale_water_overlay",scale:GUI_SCALE},

        "slotLiquid1":{type:"slot",x:720,y:400,bitmap:"slotCell",isValid:function(id,count,data){return LiquidRegistry.getItemLiquid(id,data) == "water";}},
		"slotLiquid2":{type:"slot",x:780,y:400,bitmap:"slotCell",isValid:function(){return false;}}
    }
});

ETMachine.registerMachine(BlockID.oreWasher,{
    defaultValues:{
        meta:0,
        tier:2,
        progress:0,
        work_time:320,
        isActive:false,
        energy_consumption:4
    },

	setDefaultValues:function(){
		this.data.tier = this.defaultValues.tier;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
		this.data.work_time = this.defaultValues.work_time;
	},
    
    init:function(){
		this.liquidStorage.setLimit("water",8);
		this.renderer();
    },
    
	tick:function(){
		this.setDefaultValues();
		ETUpgrade.executeUpgrades(this);
        StorageInterface.checkHoppers(this);
        var input = this.container.getSlot("slotInput"),recipe = ETRecipe.getRecipeResult("OreWasher",input.id,input.data);
        
        var liquid1 = this.container.getSlot("slotLiquid1");
		var liquid2 = this.container.getSlot("slotLiquid2");
		var empty = LiquidRegistry.getEmptyItem(liquid1.id, liquid1.data);
		if(empty && empty.liquid == "water"){
			if(this.liquidStorage.getAmount("water") <= 7 && (liquid2.id == empty.id && liquid2.data == empty.data && liquid2.count < Item.getMaxStack(empty.id) || liquid2.id == 0)){
				this.liquidStorage.addLiquid("water",1);
				liquid1.count--;
				liquid2.id = empty.id;
				liquid2.data = empty.data;
				liquid2.count++;
				this.container.validateAll();
			}
		}

        if(recipe && this.liquidStorage.getAmount("water") >= 1){
            if(this.data.energy >= this.data.energy_consumption){
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;
                this.setActive(true);
                if(this.data.progress.toFixed(3) >= 1){
                    this.liquidStorage.getLiquid("water",1);
                    if(recipe[0]){this.setOutput("slotOutput1",recipe[0].id,recipe[0].count,recipe[0].data);}
                    if(recipe[1]){this.setOutput("slotOutput2",recipe[1].id,recipe[1].count,recipe[1].data);}
                    if(recipe[2]){this.setOutput("slotOutput3",recipe[2].id,recipe[2].count,recipe[2].data);}
                    if(recipe[3]){this.setOutput("slotOutput3",recipe[3].id,recipe[3].count,recipe[3].data);}
                    input.count--;
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
        this.liquidStorage.updateUiScale("scaleLiquid","water");
        this.container.setScale("scaleEnergy",this.data.energy / this.getEnergyStorage());
        this.container.setScale("scaleArrow",Math.round(this.data.progress / 1 * 22) / 22);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    renderer:function(){
        var count = 12;
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (this.data.isActive?4 * (count - Math.round(this.data.progress / 1 * count)) + 4:0));
    },

    energyReceive:ETMachine.energyReceive,
    getGuiScreen:function(){return GuiOreWasher;},
    getTransportSlots:function(){return {input:["slotInput"],output:["slotOutput"]};}
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
	isValidInput:function(item){
        return ETRecipe.getRecipeResult("OreWasher",item.id,item.data)?true:false;
	}
});