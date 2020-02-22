IDRegistry.genBlockID("transformer");
Block.createBlock("transformer",[
    {name:"LV Transformer",texture:[["transformer_side",0],["transformer_side",0],["transformer_side",0],["transformer",0],["transformer_side",0],["transformer_side",0]],inCreative:true},
    {name:"MV Transformer",texture:[["transformer_side",1],["transformer_side",1],["transformer_side",1],["transformer",1],["transformer_side",1],["transformer_side",1]],inCreative:true},
    {name:"HV Transformer",texture:[["transformer_side",2],["transformer_side",2],["transformer_side",2],["transformer",2],["transformer_side",2],["transformer_side",2]],inCreative:true},
    {name:"EV Transformer",texture:[["transformer_side",3],["transformer_side",3],["transformer_side",3],["transformer",3],["transformer_side",3],["transformer_side",3]],inCreative:true}
], "opaque");
TileRenderer.setStandartModel(BlockID.transformer,[["transformer_side",0],["transformer_side",0],["transformer_side",0],["transformer",0],["transformer_side",0],["transformer_side",0]]);
TileRenderer.registerFullRotationModel(BlockID.transformer,0 ,[["transformer_side",0],["transformer_side",0],["transformer_side",0],["transformer",0],["transformer_side",0],["transformer_side",0]]);
TileRenderer.registerFullRotationModel(BlockID.transformer,6 ,[["transformer_side",1],["transformer_side",1],["transformer_side",1],["transformer",1],["transformer_side",1],["transformer_side",1]]);
TileRenderer.registerFullRotationModel(BlockID.transformer,12,[["transformer_side",2],["transformer_side",2],["transformer_side",2],["transformer",2],["transformer_side",2],["transformer_side",2]]);
TileRenderer.registerFullRotationModel(BlockID.transformer,18,[["transformer_side",3],["transformer_side",3],["transformer_side",3],["transformer",3],["transformer_side",3],["transformer_side",3]]);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.transformer,count:1,data:0},["dcd","aba","dcd"],["a",ItemID.coilTin   ,0,"b",BlockID.machineCasing,0,"c",ItemID.partTin   ,0,"d",ItemID.stickTin   ,0]);
    Recipes.addShaped({id:BlockID.transformer,count:1,data:1},["dcd","aba","dcd"],["a",ItemID.coilCopper,0,"b",BlockID.machineCasing,0,"c",ItemID.partCopper,0,"d",ItemID.stickCopper,0]);
    Recipes.addShaped({id:BlockID.transformer,count:1,data:2},["dcd","aba","dcd"],["a",ItemID.coilGold  ,0,"b",BlockID.machineCasing,1,"c",ItemID.partGold  ,0,"d",ItemID.stickGold  ,0]);
    Recipes.addShaped({id:BlockID.transformer,count:1,data:3},["dcd","aba","dcd"],["a",ItemID.coilSteel ,0,"b",BlockID.machineCasing,1,"c",ItemID.partSteel ,0,"d",ItemID.stickSteel ,0]);
});

ETMachine.registerMachine(BlockID.transformer,{
	defaultValues:{meta:0,tier:1,mode:false},

    init:function(){
        this.renderer();
        var block = World.getBlock(this.x,this.y,this.z);
        this.data.tier = (block.data + 1);
    },

    redstone:function(signal){
        var new_mode = signal.power > 0;
        if(new_mode != this.data.mode){
            this.data.mode = new_mode;
            EnergyNetBuilder.rebuildTileNet(this);
        }
    },

    energyTick:function(type,src){
        this.data.last_voltage = this.data.voltage;
        this.data.voltage = 0;
    
        var voltage_max = this.getMaxVoltage();
        if(this.data.mode){
            if(this.data.energy >= voltage_max){
                this.data.energy += src.add(voltage_max,voltage_max) - voltage_max;
            }
        } else {
            if(this.data.energy >= voltage_max / 4){
                var output = this.data.energy;
                this.data.energy += src.add(output,voltage_max / 4) - output;
            }
        }
    },

    canReceiveEnergy:function(side){
        if(side == this.data.meta){
            return !this.data.mode;
        }
        return this.data.mode;
    },
    
    canExtractEnergy:function(side){
        if(side == this.data.meta){
            return this.data.mode;
        }
        return !this.data.mode;
    },

    renderer:function(){
        var block = World.getBlock(this.x,this.y,this.z);
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (block.data * 6));
    },

    energyReceive:ETMachine.energyReceive,
    isEnergySource:function(){return true;},
    destroy:function(){BlockRenderer.unmapAtCoords(this.x,this.y,this.z);}
});

Item.registerNameOverrideFunction(BlockID.transformer,function(item,name){
    return name + "\n§7" + Translation.translate("Power Tier: ") + (item.data + 1);
});

Block.registerPlaceFunction(BlockID.transformer,function(coords,item,block){
    var place = isCanTileReplaced(block.id,block.data)?coords:coords.relative;
    World.setBlock(place.x,place.y,place.z,item.id,item.data);
    var rotation = TileRenderer.getBlockRotation(true);
    var tile = World.addTileEntity(place.x, place.y, place.z);
    tile.data.meta = rotation;
    TileRenderer.mapAtCoords(place.x,place.y,place.z,item.id,rotation);
});