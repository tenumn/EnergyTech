// 低压变压器
IDRegistry.genBlockID("transformerLV");
Block.createBlock("transformerLV",[
    {name:"LV Transformer",texture:[["transformer_side",0],["transformer_side",0],["transformer_side",0],["transformer",0],["transformer_side",0],["transformer_side",0]],inCreative:true}
], "opaque");
TileRenderer.setStandartModel(BlockID.transformerLV,[["transformer_side",0],["transformer_side",0],["transformer_side",0],["transformer",0],["transformer_side",0],["transformer_side",0]]);
TileRenderer.registerFullRotationModel(BlockID.transformerLV,0,[["transformer_side",0],["transformer_side",0],["transformer_side",0],["transformer",0],["transformer_side",0],["transformer_side",0]]);

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("transformer",Translation.translate("Transformer"),[BlockID.transformerLV]);
    Recipes.addShaped({id:BlockID.transformerLV,count:1,data:0},["dcd","aba","dcd"],["a",ItemID.wireTin,0,"b",BlockID.machineCasing,0,"c",ItemID.partTin,0,"d",ItemID.stickTin,0]);
});

Machine.registerMachine(BlockID.transformerLV,{
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

    renderer:function(){
        var block = World.getBlock(this.x,this.y,this.z);
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (block.data * 6));
    },

    energyReceive:Machine.energyReceive,
    isEnergySource:function(){return true;},
    destroy:function(){BlockRenderer.unmapAtCoords(this.x,this.y,this.z);},
    canReceiveEnergy:function(side){if(side == this.data.meta){return !this.data.mode;}return this.data.mode;},
    canExtractEnergy:function(side){if(side == this.data.meta){return this.data.mode;}return !this.data.mode;}
});

Item.setItemName(BlockID.transformerLV,function(item,name,tooltip){
    return name + tooltip + "\n§7" + Translation.translate("Power Tier: ") + (item.data + 1);
});

Block.registerPlaceFunction(BlockID.transformerLV,function(coords,item,block){
    var place = canTileBeReplaced(block.id,block.data)?coords:coords.relative;
    World.setBlock(place.x,place.y,place.z,item.id,item.data);
    var rotation = TileRenderer.getBlockRotation(true);
    var tile = World.addTileEntity(place.x, place.y, place.z);
    tile.data.meta = rotation;
    TileRenderer.mapAtCoords(place.x,place.y,place.z,item.id,rotation);
});

// [中压变压器]MV Transformer
IDRegistry.genBlockID("transformerMV");
Block.createBlock("transformerMV",[
    {name:"MV Transformer",texture:[["transformer_side",1],["transformer_side",1],["transformer_side",1],["transformer",1],["transformer_side",1],["transformer_side",1]],inCreative:true}
], "opaque");
TileRenderer.setStandartModel(BlockID.transformerMV,[["transformer_side",1],["transformer_side",1],["transformer_side",1],["transformer",1],["transformer_side",1],["transformer_side",1]]);
TileRenderer.registerFullRotationModel(BlockID.transformerMV,0,[["transformer_side",1],["transformer_side",1],["transformer_side",1],["transformer",1],["transformer_side",1],["transformer_side",1]]);

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("transformer",Translation.translate("Transformer"),[BlockID.transformerMV]);
    Recipes.addShaped({id:BlockID.transformerMV,count:1,data:0},["dcd","aba","dcd"],["a",ItemID.wireCopper,0,"b",BlockID.machineCasing,0,"c",ItemID.partCopper,0,"d",ItemID.stickCopper,0]);
});

Machine.registerMachine(BlockID.transformerMV,{
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

    renderer:function(){
        var block = World.getBlock(this.x,this.y,this.z);
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (block.data * 6));
    },

    energyReceive:Machine.energyReceive,
    isEnergySource:function(){return true;},
    destroy:function(){BlockRenderer.unmapAtCoords(this.x,this.y,this.z);},
    canReceiveEnergy:function(side){if(side == this.data.meta){return !this.data.mode;}return this.data.mode;},
    canExtractEnergy:function(side){if(side == this.data.meta){return this.data.mode;}return !this.data.mode;}
});

Item.setItemName(BlockID.transformerMV,function(item,name,tooltip){
    return name + tooltip + "\n§7" + Translation.translate("Power Tier: ") + (item.data + 1);
});

Block.registerPlaceFunction(BlockID.transformerMV,function(coords,item,block){
    var place = canTileBeReplaced(block.id,block.data)?coords:coords.relative;
    World.setBlock(place.x,place.y,place.z,item.id,item.data);
    var rotation = TileRenderer.getBlockRotation(true);
    var tile = World.addTileEntity(place.x, place.y, place.z);
    tile.data.meta = rotation;
    TileRenderer.mapAtCoords(place.x,place.y,place.z,item.id,rotation);
});

// [高压变压器]HV Transformer
IDRegistry.genBlockID("transformerHV");
Block.createBlock("transformerHV",[
    {name:"HV Transformer",texture:[["transformer_side",2],["transformer_side",2],["transformer_side",2],["transformer",2],["transformer_side",2],["transformer_side",2]],inCreative:true}
], "opaque");
TileRenderer.setStandartModel(BlockID.transformerHV,[["transformer_side",2],["transformer_side",2],["transformer_side",2],["transformer",2],["transformer_side",2],["transformer_side",2]]);
TileRenderer.registerFullRotationModel(BlockID.transformerHV,0,[["transformer_side",2],["transformer_side",2],["transformer_side",2],["transformer",2],["transformer_side",2],["transformer_side",2]]);

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("transformer",Translation.translate("Transformer"),[BlockID.transformerHV]);
    Recipes.addShaped({id:BlockID.transformerHV,count:1,data:0},["dcd","aba","dcd"],["a",ItemID.wireGold  ,0,"b",BlockID.machineCasing,1,"c",ItemID.partGold  ,0,"d",ItemID.stickGold  ,0]);
});

Machine.registerMachine(BlockID.transformerHV,{
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

    renderer:function(){
        var block = World.getBlock(this.x,this.y,this.z);
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (block.data * 6));
    },

    energyReceive:Machine.energyReceive,
    isEnergySource:function(){return true;},
    destroy:function(){BlockRenderer.unmapAtCoords(this.x,this.y,this.z);},
    canReceiveEnergy:function(side){if(side == this.data.meta){return !this.data.mode;}return this.data.mode;},
    canExtractEnergy:function(side){if(side == this.data.meta){return this.data.mode;}return !this.data.mode;}
});

Item.setItemName(BlockID.transformerHV,function(item,name,tooltip){
    return name + tooltip + "\n§7" + Translation.translate("Power Tier: ") + (item.data + 1);
});

Block.registerPlaceFunction(BlockID.transformerHV,function(coords,item,block){
    var place = canTileBeReplaced(block.id,block.data)?coords:coords.relative;
    World.setBlock(place.x,place.y,place.z,item.id,item.data);
    var rotation = TileRenderer.getBlockRotation(true);
    var tile = World.addTileEntity(place.x, place.y, place.z);
    tile.data.meta = rotation;
    TileRenderer.mapAtCoords(place.x,place.y,place.z,item.id,rotation);
});

// [特高压变压器]EV Transformer
IDRegistry.genBlockID("transformerEV");
Block.createBlock("transformerEV",[
    {name:"EV Transformer",texture:[["transformer_side",3],["transformer_side",3],["transformer_side",3],["transformer",3],["transformer_side",3],["transformer_side",3]],inCreative:true}
], "opaque");
TileRenderer.setStandartModel(BlockID.transformerEV,[["transformer_side",3],["transformer_side",3],["transformer_side",3],["transformer",3],["transformer_side",3],["transformer_side",3]]);
TileRenderer.registerFullRotationModel(BlockID.transformerEV,0,[["transformer_side",3],["transformer_side",3],["transformer_side",3],["transformer",3],["transformer_side",3],["transformer_side",3]]);

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("transformer",Translation.translate("Transformer"),[BlockID.transformerEV]);
    Recipes.addShaped({id:BlockID.transformerEV,count:1,data:0},["dcd","aba","dcd"],["a",ItemID.wireSteel ,0,"b",BlockID.machineCasing,1,"c",ItemID.partSteel ,0,"d",ItemID.stickSteel ,0]);
});

Machine.registerMachine(BlockID.transformerEV,{
	defaultValues:{
        meta:0,
        tier:4,
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

    renderer:function(){
        var block = World.getBlock(this.x,this.y,this.z);
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (block.data * 6));
    },

    energyReceive:Machine.energyReceive,
    isEnergySource:function(){return true;},
    destroy:function(){BlockRenderer.unmapAtCoords(this.x,this.y,this.z);},
    canReceiveEnergy:function(side){if(side == this.data.meta){return !this.data.mode;}return this.data.mode;},
    canExtractEnergy:function(side){if(side == this.data.meta){return this.data.mode;}return !this.data.mode;}
});

Item.setItemName(BlockID.transformerEV,function(item,name,tooltip){
    return name + tooltip + "\n§7" + Translation.translate("Power Tier: ") + (item.data + 1);
});

Block.registerPlaceFunction(BlockID.transformerEV,function(coords,item,block){
    var place = canTileBeReplaced(block.id,block.data)?coords:coords.relative;
    World.setBlock(place.x,place.y,place.z,item.id,item.data);
    var rotation = TileRenderer.getBlockRotation(true);
    var tile = World.addTileEntity(place.x, place.y, place.z);
    tile.data.meta = rotation;
    TileRenderer.mapAtCoords(place.x,place.y,place.z,item.id,rotation);
});