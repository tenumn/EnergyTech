// [青铜锅炉]Bronze Boiler
IDRegistry.genBlockID("bronzeBoiler");
Block.createBlock("bronzeBoiler",[
    {name:"Bronze Boiler",texture:[["machine_bottom",0],["machine_bottom",0],["machine_side",0],["bronze_boiler",0],["machine_side",0],["machine_side",0]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.bronzeBoiler,[["machine_bottom",0],["machine_bottom",0],["machine_side",0],["bronze_boiler",0],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.bronzeBoiler,0,[["machine_bottom",0],["machine_bottom",0],["machine_side",0],["bronze_boiler",0],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.bronzeBoiler,4,[["machine_bottom",0],["machine_bottom",0],["machine_side",0],["bronze_boiler",1],["machine_side",0],["machine_side",0]]);

MachineRegistry.setDrop("bronzeBoiler",BlockID.machineCasing,0);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.bronzeBoiler,count:1,data:0},[
        "a",
        "b",
        "c"
    ],["a",ItemID.plateBronze,0,"b",BlockID.machineCasing,0,"c",61,0]);
});

var GuiBronzeBoiler = new UI.StandartWindow({
	standart:{
		header:{text:{text:Translation.translate("Bronze Boiler")}},
		inventory:{standart:true},
		background:{standart:true}
    },

    drawing:[
        {type:"bitmap",x:450 + GUI_SCALE * 3,y:75 + GUI_SCALE * 2,bitmap:"fireBackground",scale:GUI_SCALE},
        {type:"bitmap",x:900 - GUI_SCALE * 3,y:175 - GUI_SCALE * 6,bitmap:"liquidBackground",scale:GUI_SCALE}
    ],
    
	elements:{
        "scaleBurn":{type:"scale",x:450 + GUI_SCALE * 3,y:75 + GUI_SCALE * 2,direction:1,value:0.5,bitmap:"fireScale",scale:GUI_SCALE},
		"slotFuel":{type:"slot",x:450,y:150,bitmap:"slot_fuel",isValid:function(id,count,data){return Recipes.getFuelBurnDuration(id,data) > 0;}},

        "scaleLiquid":{type:"scale",x:900 + GUI_SCALE * 3,y:175,direction:1,value:0.5,bitmap:"liquidScale",overlay:"liquidScale",scale:GUI_SCALE},

        "slotLiquid1":{type:"slot",x:720,y:325,bitmap:"slot_cell",isValid:function(id,count,data){return Liquid.getItemLiquid(id,data) == "water";}},
        "slotLiquid2":{type:"slot",x:780,y:325,bitmap:"slot_cell",isValid:function(){return false;}}
	}
});

MachineRegistry.registerPrototype(BlockID.bronzeBoiler,{
    defaultValues:{
        meta:0,
        burn:0,
        burnMax:0,
        isActive:false
    },
    
    init:function(){
		this.liquidStorage.setLimit("water",8);
		this.renderer();
    },

    tick:function(){
        StorageInterface.checkHoppers(this);

        if(World.getBlockID(this.x,this.y + 1,this.z) == BlockID.ironTank){
            if(this.data.burn <= 0) this.data.burn = this.data.burnMax = this.getSlotBurnDuration("slotFuel");

            if(this.data.burn > 0){
                this.activate();
                this.data.burn--;
                
                if(World.getThreadTime()%20 == 0){
                    if(this.liquidStorage.getAmount("water") >= (8 / 1000)){
                        this.liquidStorage.getLiquid("water",8 / 1000);
                        
                        var tile = World.getTileEntity(this.x,this.y + 1,this.z);
                        var stored = tile.liquidStorage.getLiquidStored();
                        var amount = tile.liquidStorage.getAmount(stored);
                        
                        if(tile && (!stored || stored == "steam" && amount < 16)){
                            tile.liquidStorage.addLiquid("steam",16 / 1000);
                        }
                    }
                }
            } else {this.deactive();}
        }

        var liquid1 = this.container.getSlot("slotLiquid1"),liquid2 = this.container.getSlot("slotLiquid2");
        var empty = Liquid.getEmptyItem(liquid1.id,liquid1.data);
        if(empty && empty.liquid == "water"){
            var storage = Liquid.getItemStorage(liquid1.id,liquid1.data);
            if(this.liquidStorage.getAmount("water") + storage <= 8 && (liquid2.id == empty.id && liquid2.data == empty.data && liquid2.count < Item.getMaxStack(empty.id) || liquid2.id == 0)){
                this.liquidStorage.addLiquid("water",storage);
                liquid1.count--;
                liquid2.id = empty.id;
                liquid2.data = empty.data;
                liquid2.count++;
                this.container.validateAll();
            }
        }

        this.liquidStorage.updateUiScale("scaleLiquid","water");
        this.container.setScale("scaleBurn",parseInt(this.data.burn / this.data.burnMax * 14) / 14 || 0);
    },

    getGuiScreen:function(){
        return GuiBronzeBoiler;
    }
});
TileRenderer.setRotationPlaceFunction(BlockID.bronzeBoiler);
StorageInterface.createInterface(BlockID.bronzeBoiler,{
	slots:{
		"slotFuel":{input:true}
    },
    
	isValidInput:function(item){
        return Recipes.getFuelBurnDuration(item.id,item.data) > 0;
	}
});