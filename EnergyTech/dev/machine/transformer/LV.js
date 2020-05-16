// 低压变压器
IDRegistry.genBlockID("transformerLV");
Block.createBlock("transformerLV",[
    {name:"LV Transformer",texture:[["transformer_side",0],["transformer_side",0],["transformer_side",0],["transformer",0],["transformer_side",0],["transformer_side",0]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.transformerLV,[["transformer_side",0],["transformer_side",0],["transformer_side",0],["transformer",0],["transformer_side",0],["transformer_side",0]]);
TileRenderer.registerFullRotationModel(BlockID.transformerLV,0,[["transformer_side",0],["transformer_side",0],["transformer_side",0],["transformer",0],["transformer_side",0],["transformer_side",0]]);

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("transformer",Translation.translate("Transformer"),[BlockID.transformerLV]);
    Recipes.addShaped({id:BlockID.transformerLV,count:1,data:0},[
        "dcd",
        "aba",
        "dcd"
    ],["a",BlockID.coilTin,0,"b",BlockID.machineCasing,1,"c",ItemID.partTin,0,"d",ItemID.stickTin,0]);
});

MachineRegistry.registerEUMachine(BlockID.transformerLV,{
	defaultValues:{
        meta:0,
        tier:1,
        mode:false
    },

    redstone:function(signal){
        var mode = signal.power > 0;
        if(mode != this.data.mode){
            this.data.mode = mode;
            EnergyNetBuilder.rebuildTileNet(this);
        }
    },

    energyTick:function(type,src){
        this.data.last_voltage = this.data.voltage;
        this.data.voltage = 0;
    
        var voltage_max = this.getMaxVoltage();
        if(this.data.mode){
            if(this.data.energy >= voltage_max) this.data.energy += src.add(voltage_max,voltage_max) - voltage_max;
        } else {
            if(this.data.energy >= voltage_max / 4){
                var output = this.data.energy;
                this.data.energy += src.add(output,voltage_max / 4) - output;
            }
        }
    },

    destroy:function(){
        BlockRenderer.unmapAtCoords(this.x,this.y,this.z);
    },

    renderer:function(){
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta);
    },

    isEnergySource:function(){
        return true;
    },

    canReceiveEnergy:function(side){
        if(side == this.data.meta) return !this.data.mode;
        return this.data.mode;
    },
    
    canExtractEnergy:function(side){
        if(side == this.data.meta) return this.data.mode;
        return !this.data.mode;
    },

    energyReceive:MachineRegistry.energyReceive
});

Block.registerPlaceFunction("transformerLV",function(coords,item,block){
    var place = canTileBeReplaced(block.id,block.data)?coords:coords.relative;
    World.setBlock(place.x,place.y,place.z,item.id,item.data);
    var rotation = TileRenderer.getBlockRotation(true);
    var tile = World.addTileEntity(place.x,place.y,place.z);
    tile.data.meta = rotation;
    TileRenderer.mapAtCoords(place.x,place.y,place.z,item.id,rotation);
});