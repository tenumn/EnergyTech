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
        {type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"info",scale:GUI_SCALE},

        {type:"bitmap",x:455 - GUI_SCALE * 3,y:75 - GUI_SCALE * 6,bitmap:"liquidBackground",scale:GUI_SCALE},
        {type:"bitmap",x:515 - GUI_SCALE * 3,y:75 - GUI_SCALE * 6,bitmap:"liquidBackground",scale:GUI_SCALE},
        {type:"bitmap",x:585 - GUI_SCALE * 3,y:75 - GUI_SCALE * 6,bitmap:"liquidBackground",scale:GUI_SCALE},
    ],

    elements:{
        "scaleLiquid1":{type:"scale",x:455 + GUI_SCALE * 3,y:75,direction:1,value:0.5,bitmap:"liquidScale",overlay:"liquidScale",scale:GUI_SCALE},
        "slotLiquid1":{type:"slot",x:450,y:260,bitmap:"slot_cell",isValid:function(id,count,data){return Liquid.isItemLiquid(id,data);}},
        "slotLiquid2":{type:"slot",x:450,y:320,bitmap:"slot_cell",isValid:function(){return false;}},

        "scaleLiquid2":{type:"scale",x:515 + GUI_SCALE * 3,y:75,direction:1,value:0.5,bitmap:"liquidScale",overlay:"liquidScale",scale:GUI_SCALE},
        "slotLiquid3":{type:"slot",x:510,y:260,bitmap:"slot_cell",isValid:function(id,count,data){return Liquid.isItemLiquid(id,data);}},
        "slotLiquid4":{type:"slot",x:510,y:320,bitmap:"slot_cell",isValid:function(){return false;}},

        "scaleLiquid3":{type:"scale",x:585 + GUI_SCALE * 3,y:75,direction:1,value:0.5,bitmap:"liquidScale",overlay:"liquidScale",scale:GUI_SCALE},
        "slotLiquid5":{type:"slot",x:585,y:260,bitmap:"slot_cell",isValid:function(id,count,data){return id == ItemID.cellEmpty;}},
        "slotLiquid6":{type:"slot",x:585,y:320,bitmap:"slot_cell",isValid:function(){return false;}},

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

    init:function(){
        this.inputLiquid1 = new TileLiquidExtra(this,"input1",8);
        this.inputLiquid2 = new TileLiquidExtra(this,"input2",8);
        this.outputLiquid1 = new TileLiquidExtra(this,"output",8);
    },
    
    getLiquidInputSlot1:function(){
        var input1 = this.container.getSlot("slotLiquid1");
        var empty = Liquid.getEmptyItem(input1.id,input1.data);
        if(empty){
            var stored = this.inputLiquid1.getLiquidStored();
            var liquid = Liquid.getItemLiquid(input1.id,input1.data);
            var storage = Liquid.getItemStorage(input1.id,input1.data);
            if(!stored || stored == liquid && this.inputLiquid1.getAmount(stored) + storage <= 8){
                this.inputLiquid1.addLiquid(liquid,storage),input1.count--;
                this.setOutputSlot("slotLiquid2",empty.id,1,empty.data);
                this.container.validateAll();
            }
        }
    },

    getLiquidInputSlot2:function(){
        var input1 = this.container.getSlot("slotLiquid3");
        var empty = Liquid.getEmptyItem(input1.id,input1.data);
        if(empty){
            var stored = this.inputLiquid2.getLiquidStored();
            var liquid = Liquid.getItemLiquid(input1.id,input1.data);
            var storage = Liquid.getItemStorage(input1.id,input1.data);
    		if(!stored || stored == liquid && this.inputLiquid2.getAmount(stored) + storage <= 8){
                this.inputLiquid2.addLiquid(liquid,storage),input1.count--;
                this.setOutputSlot("slotLiquid4",empty.id,1,empty.data);
                this.container.validateAll();
            }
        }
    },

    getLiquidOutputSlot:function(){
        var stored = this.outputLiquid1.getLiquidStored();
        var input1 = this.container.getSlot("slotLiquid5");
        var full = Liquid.getFullItem(input1.id,input1.data,stored);
        if(full){
            var amount = this.outputLiquid1.getAmount(stored);
            if(stored && amount >= full.amount){
                this.outputLiquid1.getLiquid(liquid,full.amount),input1.count--;
                this.setOutputSlot("slotLiquid6",empty.id,1,empty.data);
                this.container.validateAll();
            }
        }
    },
    
    tick:function(){
        this.getLiquidInputSlot1();
        this.getLiquidInputSlot2();
        this.getLiquidOutputSlot();
        
        if(StructureRegistry.getStructure("fusion_reactor",this.x,this.y,this.z,true)){
            var stored1 = this.inputLiquid1.getLiquidStored();
            var stored2 = this.inputLiquid2.getLiquidStored();
            var recipe = RecipeRegistry.getRecipeResult("FusionReactor",[stored1,stored2]);
            if(recipe){
                if(this.data.energy >= this.data.energy_consumption){
                    this.data.energy -= this.data.energy_consumption;
                    this.data.progress += 1 / this.data.work_time;

                    if(this.data.progress.toFixed(3) >= 1){
                        this.inputLiquid1.getLiquid(stored1,recipe.input[0] / 1000);
                        this.inputLiquid2.getLiquid(stored2,recipe.input[1] / 1000);
                        this.outputLiquid1.addLiquid(recipe.output.liquid,recipe.output.mB / 1000);
                        this.data.progress = 0;
                    }
                }
            } else {this.data.progress = 0;}
        }
        
        this.inputLiquid1.updateUiScale("scaleLiquid1");
        this.inputLiquid2.updateUiScale("scaleLiquid2");
        this.outputLiquid1.updateUiScale("scaleLiquid3");
        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    getGuiScreen:function(){
        return GuiFusionReactor;
    },

    energyReceive:MachineRegistry.energyReceive
});
TileRenderer.setRotationPlaceFunction(BlockID.fusionReactor);