// [高压变压器]HV Transformer
IDRegistry.genBlockID("transformerHV");
Block.createBlock("transformerHV",[
    {name:"HV Transformer",texture:[["transformer_side",2],["transformer_side",2],["transformer_side",2],["transformer",2],["transformer_side",2],["transformer_side",2]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.transformerHV,[["transformer_side",2],["transformer_side",2],["transformer_side",2],["transformer",2],["transformer_side",2],["transformer_side",2]]);
TileRenderer.registerFullRotationModel(BlockID.transformerHV,0,[["transformer_side",2],["transformer_side",2],["transformer_side",2],["transformer",2],["transformer_side",2],["transformer_side",2]]);

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("transformer",Translation.translate("Transformer"),[BlockID.transformerHV]);
    Recipes.addShaped({id:BlockID.transformerHV,count:1,data:0},[
        "dcd",
        "aba",
        "dcd"
    ],["a",BlockID.coilGold,0,"b",BlockID.machineCasing,2,"c",ItemID.partGold  ,0,"d",ItemID.stickGold  ,0]);
});

MachineRegistry.registerEUMachine(BlockID.transformerHV,{
	defaultValues:{
        meta:0,
        tier:3,
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

Block.registerPlaceFunction("transformerHV",function(coords,item,block){
    var place = canTileBeReplaced(block.id,block.data)?coords:coords.relative;
    World.setBlock(place.x,place.y,place.z,item.id,item.data);
    var rotation = TileRenderer.getBlockRotation(true);
    var tile = World.addTileEntity(place.x,place.y,place.z);
    tile.data.meta = rotation;
    TileRenderer.mapAtCoords(place.x,place.y,place.z,item.id,rotation);
});