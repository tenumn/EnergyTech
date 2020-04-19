var coils = [[7,0,-4],[-7,0,4],[-4,0,7],[-3,0,7],[-4,0,-7],[-3,0,-7],[-2,0,-7],[-1,0,-8],[0,0,-8],[1,0,-8],[3,0,-7],[4,0,-7],[2,0,-7],[-2,0,7],[-1,0,8],[0,0,8],[1,0,8],[2,0,7],[3,0,7],[4,0,7],[-7,0,3],[-7,0,2],[-8,0,1],[-8,0,0],[-8,0,-1],[-7,0,-2],[-7,0,-3],[-6,0,5],[-5,0,-6],[-5,0,6],[-6,0,-5],[-6,0,6],[-6,0,-6],[5,0,-6],[6,0,6],[6,0,-5],[6,0,5],[6,0,-6],[5,0,6],[-7,0,-4],[7,0,-3],[7,0,-2],[8,0,-1],[8,0,0],[8,0,1],[7,0,2],[7,0,3],[7,0,4]];

// [核聚变反应堆]Fusion Reactor
IDRegistry.genBlockID("fusionReactor");
Block.createBlock("fusionReactor",[
    {name:"Fusion Reactor",texture:[["fusion_reactor_bottom",0],["fusion_reactor_top",0],["fusion_reactor_behind",0],["fusion_reactor",0],["machine_side",1],["machine_side",1]],inCreative:true}
],"opaque");
TileRenderer.setStandartModel(BlockID.fusionReactor,[["fusion_reactor_bottom",0],["fusion_reactor_top",0],["fusion_reactor_behind",0],["fusion_reactor",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.fusionReactor,0,[["fusion_reactor_bottom",0],["fusion_reactor_top",0],["fusion_reactor_behind",0],["fusion_reactor",0],["machine_side",1],["machine_side",1]]);

Machine.setDrop("fusionReactor",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.fusionReactor,count:1,data:0},["bcb","ada","beb"],["a",BlockID.coilCopper,0,"b",ItemID.circuitEnergyStorage,0,"c",BlockID.superconductor,0,"d",BlockID.networkTerminal,0,"e",BlockID.nuclearReactor,0]);
});

var GuiFusionReactor = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Fusion Reactor")}},
        inventory:{standart:true},
        background:{standart:true}
    },

    drawing:[
        {type:"bitmap",x:350,y:50,bitmap:"energyBackground",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:325,bitmap:"heatBackground",scale:GUI_SCALE},
        {type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"info",scale:GUI_SCALE},
        {type:"bitmap",x:650 - GUI_SCALE * 21,y:75 - GUI_SCALE * 3,bitmap:"infoFusionReactor",scale:GUI_SCALE}
    ],

    elements:{
        "slotInput1":{type:"slot",x:437,y:75,bitmap:"slotCell",scale:GUI_SCALE},
        "slotInput2":{type:"slot",x:497,y:75,bitmap:"slotCell",scale:GUI_SCALE},

        "slotOutput0":{type:"slot",x:437,y:150,bitmap:"slotCell",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput1":{type:"slot",x:497,y:150,bitmap:"slotCell",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput2":{type:"slot",x:437,y:210,bitmap:"slotCell",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput3":{type:"slot",x:497,y:210,bitmap:"slotCell",scale:GUI_SCALE,isValid:function(){return false;}},

        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Energy: ") + "0/0Eu"},
		"textEnergyOutput":{type:"text",font:GUI_TEXT,x:700,y:105,width:300,height:30,text:Translation.translate("Energy Output: ") + "0Eu"},
        "textHard":{type:"text",font:GUI_TEXT,x:700,y:135,width:300,height:30,text:Translation.translate("Hard Level: ") + "0"},
        "textHeat":{type:"text",font:GUI_TEXT,x:700,y:165,width:300,height:30,text:Translation.translate("Heat: ") + "0Hu"},
        "textFuel":{type:"text",font:GUI_TEXT,x:700,y:195,width:300,height:30,text:Translation.translate("Fuel: ") + "0"},

        "scaleBurn":{type:"scale",x:350 + GUI_SCALE * 4,y:325 + GUI_SCALE * 4,direction:0,value:0.5,bitmap:"heatScale",scale:GUI_SCALE},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energyScale",scale:GUI_SCALE}
    }
});

Machine.registerMachine(BlockID.fusionReactor,{
    defaultValues:{
        meta:0,
        tier:4,
        hard:0,
        heat:0,                                                                                           
        fuel:0,
        coolant:0,
        progress:0,
        work_time:160,
        isActive:false,
        blast_progress:0,
        energy_consumption:6272,
        energy_storage:1048576
    },

    getModuleData:function(){
        var durability = __config__.getBool("machine.reactor.isDurability");
        for(let i in coils){
            var coil = {x:this.x + coils[i][0],y:this.y + coils[i][1],z:this.z + coils[i][2]}
            for(let side = 0;side < 6;side++){
                var coords = World.getRelativeCoords(coil.x,coil.y,coil.z,side);
                var block = World.getBlock(coords.x,coords.y,coords.z);
                var type = Reactor.getModuleType(block.id);
                if(type == "Casing" || type == "Coolant"){
                    var tile = World.getTileEntity(coords.x,coords.y,coords.z);
                    var reactor = Reactor.getModule(block.id);
                    if(reactor && tile){
                        durability?tile.data.durability -= reactor(this.id,this.data,coords):reactor(this.id,this.data,coords);
                    }
                }
            }
            tile = World.getTileEntity(coil.x,coil.y,coil.z),reactor = Reactor.getModule(World.getBlockID(coil.x,coil.y,coil.z));
            if(reactor && tile){
                durability?tile.data.durability -= reactor(this.id,this.data,coil):reactor(this.id,this.data,coil);
            }
        }
    },

	isCoil:function(){
        var count = 0;
        
        for(var i in coils){
            var coil = {x:this.x + coils[i][0],y:this.y + coils[i][1],z:this.z + coils[i][2]},block = World.getBlock(coil.x,coil.y,coil.z);
            if(Reactor.isModule(block.id) && Reactor.getModuleType(block.id) == "Coil"){
                count += 1;
            }
        }

        return (count == 48)?true:false;
    },

    blast:function(){
        if(this.data.coolant < this.data.heat){
            this.data.blast_progress += 1 / 160;
            if(this.data.blast_progress.toFixed(3) >= 1){
                World.explode(this.x + 0.5,this.y + 0.5,this.z + 0.5,Math.max(0.5,Math.floor(this.data.heat + this.data.fuel - (this.data.hard + this.data.coolant))),true);
            }
        } else if(this.data.blast_progress > 0){
            this.data.blast_progress -= 1 / 160;
        }
    },

    initValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.hard = this.defaultValues.hard;
        this.data.heat = this.defaultValues.heat;
        this.data.fuel = this.defaultValues.fuel;
        this.data.coolant = this.defaultValues.coolant;
        this.data.work_time = this.defaultValues.work_time;
        this.data.energy_consumption = this.defaultValues.energy_consumption;
    },

    tick:function(){
        this.initValues();
        
        if(this.data.isActive){
            if(this.isCoil()){
                this.getModuleData();

                var input1 = this.container.getSlot("slotInput1"),input2 = this.container.getSlot("slotInput2"),recipe = Recipe.getRecipeResult("FusionReactor",[input1.id,input1.data,input2.id,input2.data]);
                var heat = this.data.heat - Math.max(0,this.data.coolant - this.data.heat);
                if(recipe && (recipe.heat >= heat/2 && recipe.heat <= heat*2)){
                    if(this.data.energy +  Math.floor(this.data.heat * this.data.fuel) < this.getEnergyStorage()){
                        this.data.energy += Math.floor(this.data.heat * this.data.fuel);
                    }
    
                    if(this.data.energy >= this.data.energy_consumption){
                        this.data.energy -= this.data.energy_consumption;
                        this.data.progress += 1 / this.data.work_time;
                        if(this.data.progress.toFixed(3) >= 1){
                            for(let i = 0;i <= 3;i++){
                                var output = recipe.output[i];
                                if(output){this.setOutput("slotOutput" + i,output.id,output.count,output.data);}
                            }
                            input1.count--,input2.count--;
                            this.container.validateAll();
                            this.data.progress = 0;
                        }
                    }
                } else {
                    this.data.progress = 0;
                }
            }
        }

        this.blast();
        
        // Info
        this.container.setScale("scaleBurn",this.data.blast_progress);
		this.container.setScale("scaleEnergy",this.data.energy / this.getEnergyStorage());
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
        this.container.setText("textEnergyOutput",Translation.translate("Energy Output: ") + Math.floor(this.data.heat * this.data.fuel) + "Eu");
        this.container.setText("textHard",Translation.translate("Hard Level: ") + this.data.hard);
        this.container.setText("textHeat",Translation.translate("Heat: ") + (this.data.heat - Math.max(0,this.data.coolant - this.data.heat)) + "Hu");
        this.container.setText("textFuel",Translation.translate("Fuel: ") + this.data.fuel);
    },

    energyTick:function(type,src){
		var output = Math.min(this.getMaxVoltage(),this.data.energy);
		this.data.energy += src.add(output) - output;
    },
    
    isEnergySource:function(){
        return true;
    },

    getGuiScreen:function(){
        return GuiFusionReactor;
    },

    redstone:function(params){
        if(params.power > 0){
            this.activate();
        } else {
            this.deactive();
        }
    },

    energyReceive:Machine.energyReceive
});
TileRenderer.setRotationPlaceFunction(BlockID.fusionReactor);