var coils = [[7,0,-4],[-7,0,4],[-4,0,7],[-3,0,7],[-4,0,-7],[-3,0,-7],[-2,0,-7],[-1,0,-8],[0,0,-8],[1,0,-8],[3,0,-7],[4,0,-7],[2,0,-7],[-2,0,7],[-1,0,8],[0,0,8],[1,0,8],[2,0,7],[3,0,7],[4,0,7],[-7,0,3],[-7,0,2],[-8,0,1],[-8,0,0],[-8,0,-1],[-7,0,-2],[-7,0,-3],[-6,0,5],[-5,0,-6],[-5,0,6],[-6,0,-5],[-6,0,6],[-6,0,-6],[5,0,-6],[6,0,6],[6,0,-5],[6,0,5],[6,0,-6],[5,0,6],[-7,0,-4],[7,0,-3],[7,0,-2],[8,0,-1],[8,0,0],[8,0,1],[7,0,2],[7,0,3],[7,0,4]];

// [核聚变反应堆]Fusion Reactor
IDRegistry.genBlockID("fusionReactor");
Block.createBlock("fusionReactor",[
    {name:"Fusion Reactor",texture:[["fusion_reactor_bottom",0],["fusion_reactor_top",0],["fusion_reactor_behind",0],["fusion_reactor",0],["machine_side",2],["machine_side",2]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.fusionReactor,[["fusion_reactor_bottom",0],["fusion_reactor_top",0],["fusion_reactor_behind",0],["fusion_reactor",0],["machine_side",2],["machine_side",2]]);
TileRenderer.registerRotationModel(BlockID.fusionReactor,0,[["fusion_reactor_bottom",0],["fusion_reactor_top",0],["fusion_reactor_behind",0],["fusion_reactor",0],["machine_side",2],["machine_side",2]]);

Machine.setDrop("fusionReactor",BlockID.machineCasing,2);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.fusionReactor,count:1,data:0},[
        "bcb",
        "ada",
        "beb"
    ],["a",BlockID.coilCopper,0,"b",ItemID.circuitEnergyStorage,0,"c",BlockID.superconductor,0,"d",BlockID.networkTerminal,0,"e",BlockID.nuclearReactor,0]);
});

var GuiFusionReactor = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Fusion Reactor")}},
        inventory:{standart:true},
        background:{standart:true}
    },

    drawing:[
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"info",scale:GUI_SCALE},
        {type:"bitmap",x:650 - GUI_SCALE * 21,y:75 - GUI_SCALE * 3,bitmap:"info_fusion",scale:GUI_SCALE}
    ],

    elements:{
        "slotInput1":{type:"slot",x:437,y:75,bitmap:"slot_cell",scale:GUI_SCALE},
        "slotInput2":{type:"slot",x:497,y:75,bitmap:"slot_cell",scale:GUI_SCALE},

        "slotOutput0":{type:"slot",x:437,y:150,bitmap:"slot_cell",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput1":{type:"slot",x:497,y:150,bitmap:"slot_cell",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput2":{type:"slot",x:437,y:210,bitmap:"slot_cell",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput3":{type:"slot",x:497,y:210,bitmap:"slot_cell",scale:GUI_SCALE,isValid:function(){return false;}},

        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Energy: ") + "0/0Eu"},
		"textEnergyOutput":{type:"text",font:GUI_TEXT,x:700,y:105,width:300,height:30,text:Translation.translate("Energy Output: ") + "0Eu"},

        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE}
    }
});

Machine.registerEUMachine(BlockID.fusionReactor,{
    defaultValues:{
        meta:0,
        tier:4,
        heat:0,                                                                                           
        fuel:0,
        progress:0,
        work_time:160,
        isActive:false,
        energy_storage:1048576,
        energy_consumption:4704 
    },

    getModuleData:function(){
        var durability = __config__.getBool("machine.fusion_reactor_durability");
        for(let i in coils){
            var coil = {x:this.x + coils[i][0],y:this.y + coils[i][1],z:this.z + coils[i][2]}

            for(let side = 0;side < 6;side++){
                var coords = World.getRelativeCoords(coil.x,coil.y,coil.z,side);
                var reactor = FusionReactor.getModuleData(World.getBlockID(coords.x,coords.y,coords.z));
                var coil_tile = World.getTileEntity(coords.x,coords.y,coords.z);
                if(reactor && coil_tile){
                    reactor(coords,this.data);
                    if(durability) coil_tile.breakDamage(1);
                }
            }
            
            if(FusionReactor.isModule(World.getBlockID(coil.x,coil.y,coil.z))){
                var reactor = FusionReactor.getModuleData(World.getBlockID(coil.x,coil.y,coil.z));
                var module_tile = World.getTileEntity(coil.x,coil.y,coil.z);
                if(reactor && module_tile){
                    reactor(coil,this.data);
                    if(durability) module_tile.breakDamage(1);
                }
            }
        }
    },

	isCoil:function(){
        var fusion = 0,coil = 0;
        
        for(let i in coils){
            var coords = {x:this.x + coils[i][0],y:this.y + coils[i][1],z:this.z + coils[i][2]};
            var id = World.getBlockID(coords.x,coords.y,coords.z);
            if(FusionReactor.isModule(id) && FusionReactor.getModuleType(id) == "Coil"){
                coil++;
                for(let side = 0;side < 6;side++){
                    var relative = World.getRelativeCoords(coords.x,coords.y,coords.z,side);
                    var id = World.getBlockID(relative.x,relative.y,relative.z);
                    if(FusionReactor.isModule(id)){
                        fusion++;
                    }
                }
            }
        }

        return (coil + fusion >= 236)?true:false;
    },

    initValues:function(){
        this.data.heat = this.defaultValues.heat;
        this.data.fuel = this.defaultValues.fuel;
        this.data.work_time = this.defaultValues.work_time;
    },

    tick:function(){
        this.initValues();
        
        if(this.data.isActive && this.isCoil()){
            this.getModuleData();
    
            var input1 = this.container.getSlot("slotInput1");
            var input2 = this.container.getSlot("slotInput2");
            var recipe = Recipe.getRecipeResult("FusionReactor",[input1.id,input1.data,input2.id,input2.data]);
            
            if(recipe){
                var output = Math.floor(this.data.heat * this.data.fuel);
                if(this.data.energy + output < this.getEnergyStorage()) this.data.energy += output;
                if(this.data.energy >= this.data.energy_consumption){
                    this.data.energy -= this.data.energy_consumption;
                    this.data.progress += 1 / this.data.work_time;
                    if(this.data.progress.toFixed(3) >= 1){
                        if(recipe[0]) this.setOutput("slotOutput0",recipe[0].id,recipe[0].count,recipe[0].data);
                        if(recipe[1]) this.setOutput("slotOutput1",recipe[1].id,recipe[1].count,recipe[1].data);
                        if(recipe[2]) this.setOutput("slotOutput2",recipe[2].id,recipe[2].count,recipe[2].data);
                        if(recipe[3]) this.setOutput("slotOutput3",recipe[3].id,recipe[3].count,recipe[3].data);
                        input1.count--,input2.count--;
                        this.container.validateAll();
                        this.data.progress = 0;
                    }
                }
            } else {
                this.data.progress = 0;
            }
        }

        // Info
		this.container.setScale("scaleEnergy",this.data.energy / this.getEnergyStorage());
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
        this.container.setText("textEnergyOutput",Translation.translate("Energy Output: ") + Math.floor(this.data.heat * this.data.fuel) + "Eu");
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