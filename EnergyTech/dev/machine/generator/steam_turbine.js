// [蒸汽轮机]Steam Turbine
IDRegistry.genBlockID("steamTurbine");
Block.createBlock("steamTurbine",[
	{name:"Steam Turbine",texture:[["machine_bottom",1],["machine_top",1],["machine_side",1],["steam_turbine",0],["machine_side",1],["machine_side",1]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.steamTurbine,[["machine_bottom",1],["machine_top",1],["machine_side",1],["steam_turbine",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.steamTurbine,0,[["machine_bottom",1],["machine_top",1],["machine_side",1],["steam_turbine",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.steamTurbine,4,[["machine_bottom",1],["machine_top",1],["machine_side",1],["steam_turbine",1],["machine_side",1],["machine_side",1]]);

MachineRegistry.setDrop("steamTurbine",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.steamTurbine,count:1,data:0},[
        "cdc",
        "dbd",
        "cac"
    ],["a",ItemID.wireTin,0,"b",BlockID.machineCasing,1,"c",ItemID.stickIron,0,"d",ItemID.plateIron,0]);
});

var GuiSteamTurbine = new UI.StandartWindow({
	standart:{
		header:{text:{text:Translation.translate("Steam Turbine")}},
		inventory:{standart:true},
		background:{standart:true}
    },

    drawing:[
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE},
        {type:"bitmap",x:900 - GUI_SCALE * 3,y:175 - GUI_SCALE * 6,bitmap:"liquidBackground",scale:GUI_SCALE}
    ],
    
	elements:{
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
		"textEnergyOutput":{type:"text",font:GUI_TEXT,x:700,y:105,width:300,height:TEXT_SIZE,text:Translation.translate("Energy Output: ") + "0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},
        
        "scaleLiquid":{type:"scale",x:900 + GUI_SCALE * 3,y:175,direction:1,value:0.5,bitmap:"liquidScale",overlay:"liquidScale",scale:GUI_SCALE},
        "slotLiquid1":{type:"slot",x:720,y:325,bitmap:"slot_cell",isValid:function(id,count,data){return Liquid.getItemLiquid(id,data) == "steam";}},
        "slotLiquid2":{type:"slot",x:780,y:325,bitmap:"slot_cell",isValid:function(){return false;}}
	}
});

MachineRegistry.registerEUGenerator(BlockID.steamTurbine,{
    defaultValues:{
        meta:0,
        isActive:false
    },

    init:function(){
		this.liquidStorage.setLimit("steam",4);
		this.renderer();
    },

    tick:function(){
        this.renderer();
        
        if(World.getThreadTime()%20 == 0){
            if(this.liquidStorage.getAmount("steam") >= (25 / 1000)){
                this.liquidStorage.getLiquid("steam",(25 / 1000));
                this.data.energy += 20;
                this.activate();
            } else {
                this.deactive();
            }
        }

        var liquid1 = this.container.getSlot("slotLiquid1");
        var liquid2 = this.container.getSlot("slotLiquid2");
        var empty = Liquid.getEmptyItem(liquid1.id,liquid1.data);
        if(empty && empty.liquid == "steam"){
            var storage = Liquid.getItemStorage(liquid1.id,liquid1.data);
            if(this.liquidStorage.getAmount("steam") + storage <= 4 && (liquid2.id == empty.id && liquid2.data == empty.data && liquid2.count < Item.getMaxStack(empty.id) || liquid2.id == 0)){
                this.liquidStorage.addLiquid("steam",storage),liquid1.count--;
                liquid2.id = empty.id,liquid2.data = empty.data,liquid2.count++;
                this.container.validateAll();
            }
        }

        this.liquidStorage.updateUiScale("scaleLiquid","steam");
        this.container.setText("textEnergyOutput",Translation.translate("Energy Output: ") + 20 + "Eu");
        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
		this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    renderer:function(){
        var amount = this.liquidStorage.getAmount("steam");
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (this.data.isActive?4 * (parseInt(amount / Math.ceil(amount) * 2) % 2):0));
    },
    
    energyTick:function(type,src){
		var output = Math.min(this.getMaxVoltage(),this.data.energy);
		this.data.energy += src.add(output) - output;
    },
    
	getGuiScreen:function(){
        return GuiSteamTurbine;
    }
});
TileRenderer.setRotationPlaceFunction(BlockID.steamTurbine);