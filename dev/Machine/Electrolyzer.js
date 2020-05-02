// [电解机]Electrolyzer
IDRegistry.genBlockID("electrolyzer");
Block.createBlock("electrolyzer",[
    {name:"Electrolyzer",texture:[["machine_bottom",1],["machine_top",1],["machine_side",1],["electrolyzer",0],["machine_side",1],["machine_side",1]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.electrolyzer,[["machine_bottom",1],["machine_top",1],["machine_side",1],["electrolyzer",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.electrolyzer,0,[["machine_bottom",1],["machine_top",1],["machine_side",1],["electrolyzer",0],["machine_side",1],["machine_side",1]]);
for(let i = 1;i < 8;i++){TileRenderer.registerRotationModel(BlockID.electrolyzer,i * 4,[["machine_bottom",1],["machine_top",1],["machine_side",1],["electrolyzer",i],["machine_side",1],["machine_side",1]]);}

Machine.setDrop("electrolyzer",BlockID.machineCasing,2);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.electrolyzer,count:1,data:0},["aba","aca","ded"],["a",ItemID.wireGold,0,"b",BlockID.glassTank,0,"c",BlockID.machineCasing,2,"d",ItemID.circuit,0,"e",ItemID.wireTin,0]);
});

var GuiElectrolyzer = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Electrolyzer")}},
        inventory:{standart:true},
        background:{standart:true}
    },

    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:50,bitmap:"energyBackground",scale:GUI_SCALE},
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
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energyScale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:Upgrade.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:Upgrade.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:Upgrade.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:Upgrade.isValidUpgrade}
    }
});

Machine.registerMachine(BlockID.electrolyzer,{
    defaultValues:{
        meta:0,
        tier:3,
        progress:0,
        work_time:320,
        isActive:false,
        energy_consumption:4
    },

	initValues: function(){
        this.data.tier = this.defaultValues.tier;
        this.data.work_time = this.defaultValues.work_time;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
	},
	
	tick:function(){
        this.renderer();
		Upgrade.executeUpgrades(this);
        StorageInterface.checkHoppers(this);
        var input = this.container.getSlot("slotInput"),recipe = Recipe.getRecipeResult("Electrolyzer",[input.id,input.data]);
        
        if(recipe && input.count >= recipe.count){if(this.data.energy >= this.data.energy_consumption){
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
            this.activate();
            if(this.data.progress.toFixed(3) >= 1){
                var output = recipe.output;
                if(output[0]) this.setOutput("slotOutput0",output[0].id,output[0].count,output[0].data);
                if(output[1]) this.setOutput("slotOutput1",output[1].id,output[1].count,output[1].data);
                if(output[2]) this.setOutput("slotOutput2",output[2].id,output[2].count,output[2].data);
                if(output[3]) this.setOutput("slotOutput3",output[3].id,output[3].count,output[3].data);
                input.count -= recipe.count;
                this.container.validateAll();
                this.data.progress = 0;
            }
        } else {this.deactive();}} else {this.data.progress = 0,this.deactive();}
        
        this.container.setScale("scaleEnergy",Math.round(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setScale("scaleArrow",Math.round(this.data.progress / 1 * 22) / 22);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    renderer:function(){
        var count = 8;
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (this.data.isActive?4 * (Math.round(this.data.progress / 1 * count * 10) % count) + 4:0));
    },

    energyReceive:Machine.energyReceive,
    getGuiScreen:function(){return GuiElectrolyzer;}
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
        return Recipe.getRecipeResult("Electrolyzer",[item.id,item.data])?true:false;
	}
});