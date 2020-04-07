// 分解反应台
IDRegistry.genBlockID("decomposer");
Block.createBlock("decomposer",[
  {name:"Chemical Decomposer",texture:[["machineBottom",0],["machineTop",0],["machineSide",0],["decomposer",0],["machineSide",0],["machineSide",0]],inCreative:true}
],"opaque");
TileRenderer.setStandartModel(BlockID.decomposer,[["machineBottom",0],["machineTop",0],["machineSide",0],["decomposer",0],["machineSide",0],["machineSide",0]]);
TileRenderer.registerRotationModel(BlockID.decomposer,0,[["machineBottom",0],["machineTop",0],["machineSide",0],["decomposer",0],["machineSide",0],["machineSide",0]]);
TileRenderer.registerRotationModel(BlockID.decomposer,4,[["machineBottom",0],["machineTop",0],["machineSide",0],["decomposer",0],["machineSide",0],["machineSide",0]]);
TileRenderer.registerRotationModel(BlockID.decomposer,8,[["machineBottom",0],["machineTop",0],["machineSide",0],["decomposer",1],["machineSide",0],["machineSide",0]]);

Machine.setDrop("decomposer",BlockID.machineCasing,0);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.decomposer,count:1,data:0},["aba","bcb","ada"],["a",ItemID.partIron,0,"b",ItemID.plateIron,0,"c",BlockID.machineCasing,0,"d",ItemID.circuit,0]);
});

var elements = {
    "scaleLiquid":{type:"scale",x:456,y:126,bitmap:"liquidScaleSmall",overlay:"liquidScaleSmall",direction:1,scale:3.2},
    "buttonDump":{type:"button",x:456,y:70,bitmap:"close_button_up",bitmap2:"close_button_down",scale:2.4,clicker:{onClick:function(con,tile){for(let key in tile.liquidStorage.liquidAmounts){delete tile.liquidStorage.liquidAmounts[key];}}}},
    "slotInput":{type:"slot",x:390,y:130,size:40,bitmap:"slotCell"},
    "slotOutput":{type:"slot",x:390,y:200,size:40,bitmap:"slotCell",isValid:function(){return false;}},
    "slotSource":{type:"slot",x:630,y:150,bitmap:"slotBlank",isValid:function(id,count,data){return !!Decomposer.getRecipe(id,data);}},
    "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Energy: ") + "0/0Eu"}
}

for(let i = 0;i < 18;i++){
    elements["slot" + i] = {type:"slot",x:60 * (i % 9) + 390,y:60 * (i / 9 | 0) + 270,bitmap:"slotBlank",isValid:function(){return false;}};
}

var GuiDecomposer = new UI.StandartWindow({
	standart:{
		header:{text:{text:Translation.translate("Chemical Decomposer")}},
		inventory:{standart:true},
		background:{standart:true}
	},
  
	drawing:[
        {type:"bitmap",x:636,y:230,bitmap:"triangleDown",scale:3.2},
        {type:"bitmap",x:450,y:120,bitmap:"liquidBackgroundSmall",scale:3.2},
        {type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
	],
  
	elements:elements
});

Machine.registerMachine(BlockID.decomposer,{
    defaultValues:{
        meta:0,
        tier:2,
        progress:0,
        work_time:320,
        energy_consumption:4
    },

    setDefaultValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.work_time = this.defaultValues.work_time;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
    },
    
    canAddLiquid:function(item){
        var output = this.container.getSlot("slotOutput");
        if(!output.id || output.id == item.id && output.data == item.data && output.count < Item.getMaxStack(item.id)){
            output.id = item.id,output.data = item.data,output.count++;
            return true;
        }
        return false;
    },
    
    tick:function(){
        this.setDefaultValues();
        let input = this.container.getSlot("slotInput"),inside = LiquidRegistry.getItemLiquid(input.id,input.data),liquid = this.liquidStorage.getLiquidStored();
      
        if(inside){if((!liquid || liquid == inside && this.liquidStorage.getAmount(inside) + 1 <= this.liquidStorage.getLimit(inside)) && this.canAddLiquid(LiquidRegistry.getEmptyItem(input.id,input.data))){
            input.count--;
            this.container.validateSlot("slotInput");
            this.liquidStorage.addLiquid(inside,1);
        }} else {
            let full = LiquidRegistry.getFullItem(input.id,input.data,liquid);
            if(full && this.liquidStorage.getAmount(liquid) >= 1 && this.canAddLiquid(full)){
                input.count--;
                this.container.validateSlot("slotInput");
                this.liquidStorage.getLiquid(liquid,1);
            }
        }
        
        let source = this.container.getSlot("slotSource"),result = Decomposer.getRecipe(source.id,source.data);
        if(result){if(this.data.energy >= this.data.energy_consumption){
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
            if(this.data.progress.toFixed(3) >= 1){
                for(let slot in result()){this.setOutput(result()[slot],1,0);}
                source.count--;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }}

        var recipe = Decomposer.getRecipeLiquid(liquid);
        if(recipe){if(this.data.energy >= this.data.energy_consumption){
            if(recipe && this.liquidStorage.getAmount(liquid) >= recipe.amount){
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;
                if(this.data.progress.toFixed(3) >= 1){
                    for(let slot in recipe()){this.setOutput(recipe()[slot],1,0);}
                    this.liquidStorage.getLiquid(liquid,recipe.amount);
                    this.data.progress = 0;
                }
            }
        }}
    
        this.liquidStorage.updateUiScale("scaleLiquid",liquid);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },
    
    renderer:function(){
        var count = 2;
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (this.data.isActive?4 * (Math.round(this.data.progress / 1 * count * 10) % count) + 4:0));
    },

    setOutput:function(id,count,data){
        for(var slot = 0;slot < 18;slot++){
            var output = this.container.getSlot("slot" + slot);
            if(output.id == 0 || output.id == id && output.data == data && output.count < 64){
                if(output.count + count > 64){
                    var output_count = 64 - output.count;
                    output.id = id,output.data = data,output.count += output_count;
                    this.setOutput(id,(output.count + count - 64) - output_count,data);
                } else {
                    output.id = id,output.data = data,output.count += count;
                }
                return true;
            }
        }
        World.drop(this.x + 0.5,this.y + 1.5,this.z + 0.5,id,count,data);
    },

    energyReceive:Machine.energyReceive,
    getGuiScreen:function(){return GuiDecomposer;},
    init:function(){this.liquidStorage.setLimit(null,5);}
});