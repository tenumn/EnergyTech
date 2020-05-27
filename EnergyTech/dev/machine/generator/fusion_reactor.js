// [核聚变反应堆]Fusion Reactor
IDRegistry.genBlockID("fusionReactor");
Block.createBlock("fusionReactor",[
    {name:"Fusion Reactor",texture:[["fusion_reactor_bottom",0],["fusion_reactor_top",0],["fusion_reactor_behind",0],["fusion_reactor",0],["machine_side",2],["machine_side",2]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.fusionReactor,[["fusion_reactor_bottom",0],["fusion_reactor_top",0],["fusion_reactor_behind",0],["fusion_reactor",0],["machine_side",2],["machine_side",2]]);
TileRenderer.registerRotationModel(BlockID.fusionReactor,0,[["fusion_reactor_bottom",0],["fusion_reactor_top",0],["fusion_reactor_behind",0],["fusion_reactor",0],["machine_side",2],["machine_side",2]]);

MachineRegistry.setDrop("fusionReactor",BlockID.machineCasing,2);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.fusionReactor,count:1,data:0},[
        "bcb",
        "ada",
        "beb"
    ],["a",BlockID.coilSteel,0,"b",ItemID.circuitEnergyStorage,0,"c",BlockID.superconductor,0,"d",BlockID.networkTerminal,0,"e",BlockID.nuclearReactor,0]);
});

var GuiFusionReactor = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Fusion Reactor")}},
        inventory:{standart:true},
        background:{standart:true}
    },

    drawing:[
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"info",scale:GUI_SCALE}
    ],

    elements:{
        "slotInput1":{type:"slot",x:437,y:75,bitmap:"slot_cell",scale:GUI_SCALE},
        "slotInput2":{type:"slot",x:497,y:75,bitmap:"slot_cell",scale:GUI_SCALE},

        "slotOutput0":{type:"slot",x:437,y:150,bitmap:"slot_cell",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput1":{type:"slot",x:497,y:150,bitmap:"slot_cell",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput2":{type:"slot",x:437,y:210,bitmap:"slot_cell",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput3":{type:"slot",x:497,y:210,bitmap:"slot_cell",scale:GUI_SCALE,isValid:function(){return false;}},

        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE}
    }
});

MachineRegistry.registerMachine(BlockID.fusionReactor,{
    defaultValues:{
        meta:0,
        tier:4,
        progress:0,
        work_time:1200,
        energy_consumption:2048
    },

    tick:function(){
        if(StructureRegistry.getStructure("fusion_reactor",this.x,this.y,this.z,true)){
            var input1 = this.container.getSlot("slotInput1");
            var input2 = this.container.getSlot("slotInput2");    
            var recipe = RecipeRegistry.getRecipeResult("FusionReactor",[input1.id,input1.data,input2.id,input2.data]);
    
            if(recipe && input1.count >= recipe.input[0] && input2.count >= recipe.input[1]){if(this.data.energy >= this.data.energy_consumption){
                    this.data.energy -= this.data.energy_consumption;
                    this.data.progress += 1 / this.data.work_time;
                    if(this.data.progress.toFixed(3) >= 1){
                        for(let i = 0;i < 4;i++){
                            var output = recipe.output[i];
                            if(output) this.setOutputSlot("slotOutput" + i,output.id,output.count,output.data);
                        }
                        input1.count -= recipe.input[0];
                        input2.count -= recipe.input[1];
                        this.container.validateAll();
                        this.data.progress = 0;
                    }
                }
            } else {this.data.progress = 0;}
        }
        
        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    getGuiScreen:function(){
        return GuiFusionReactor;
    },

    energyReceive:MachineRegistry.energyReceive
});
TileRenderer.setRotationPlaceFunction(BlockID.fusionReactor);