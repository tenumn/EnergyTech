// [中压变压器]MV Transformer
IDRegistry.genBlockID("transformerMV");
Block.createBlock("transformerMV",[
    {name:"MV Transformer",texture:[["transformer_side",1],["transformer_side",1],["transformer_side",1],["transformer",1],["transformer_side",1],["transformer_side",1]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.transformerMV,[["transformer_side",1],["transformer_side",1],["transformer_side",1],["transformer",1],["transformer_side",1],["transformer_side",1]]);
TileRenderer.registerFullRotationModel(BlockID.transformerMV,0,[["transformer_side",1],["transformer_side",1],["transformer_side",1],["transformer",1],["transformer_side",1],["transformer_side",1]]);

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("transformer",Translation.translate("Transformer"),[BlockID.transformerMV]);
    Recipes.addShaped({id:BlockID.transformerMV,count:1,data:0},[
        "dcd",
        "aba",
        "dcd"
    ],["a",BlockID.coilCopper,0,"b",BlockID.machineCasing,1,"c",ItemID.partCopper,0,"d",ItemID.stickCopper,0]);
});

MachineRegistry.registerEUMachine(BlockID.transformerMV,{
	defaultValues:{
        meta:0,
        tier:2,
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

Block.registerPlaceFunction("transformerMV",function(coords,item,block){
    var place = canTileBeReplaced(block.id,block.data)?coords:coords.relative;
    World.setBlock(place.x,place.y,place.z,item.id,item.data);
    var rotation = TileRenderer.getBlockRotation(true);
    var tile = World.addTileEntity(place.x,place.y,place.z);
    tile.data.meta = rotation;
    TileRenderer.mapAtCoords(place.x,place.y,place.z,item.id,rotation);
});