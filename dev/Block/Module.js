// 燃料棒(铀)
IDRegistry.genBlockID("fuelRodUranium");
Block.createBlock("fuelRodUranium",[
    {name:"Fuel Rod(Uranium)",texture:[["machine_bottom",1],["machine_top",1],["fuel_rod_uranium",0]],inCreative:true}
],{base:1,solid:true,opaque:true,destroyTime:5});

var render = new ICRender.Model(),model = new BlockRenderer.Model();
model.addBox(0,0,0,1,1,1,[["machine_bottom",1],["machine_top",1],["reactor_module",0]]);
model.addBox(0.0625,0.0625,0.0625,0.9375,0.9375,0.9375,[["reactor_module_background",0]]);
render.addEntry(model);
BlockRenderer.enableCoordMapping(BlockID.fuelRodUranium,-1,render);

Block.registerDropFunction("fuelRodUranium",function(){return [];});
Block.registerPlaceFunction("fuelRodUranium",function(coords,item,block){
    var place = coords;
    if(!canTileBeReplaced(block.id,block.data)){
        place = coords.relative,block = World.getBlock(place.x,place.y,place.z);
        if(!canTileBeReplaced(block.id,block.data)) return;
    }

    World.setBlock(place.x,place.y,place.z,item.id,item.data);
    var tile = World.addTileEntity(place.x,place.y,place.z);
    if(item.extra){
        tile.liquidStorage.addLiquid(item.extra.getString("liquid_stored"),item.extra.getFloat("liquid_amount"));
    } else {
        tile.liquidStorage.addLiquid("uranium",16);
    }
});

Machine.registerPrototype(BlockID.fuelRodUranium,{
    defaultValues:{height:0},

    updateAnim:function(){
        if(this.anim){
            var render = new Render();
            render.setPart("body",[{type:"box",uv:{x:0,y:0},coords:{x:0,y:-this.data.height / 2,z:0},size:{x:15,y:this.data.height * 0.9375,z:15}}],{});
            this.anim.describe({skin:"models/liquid/uranium.png",render:render.getID()});
            this.anim.load();
        }
    },

    init:function(){
        this.anim = new Animation.Base(this.x + 0.5,this.y - 1.5,this.z + 0.5);
        this.updateAnim();

        this.liquidStorage.setLimit("uranium",16);
    },

    breakDamage:function(damage){
        var amount = this.liquidStorage.getAmount("uranium");
        this.liquidStorage.setAmount("uranium",amount - (damage / 1000));
    },

    tick:function(){
        var stored = this.liquidStorage.getLiquidStored();
        var amount = this.liquidStorage.getAmount("uranium");

        this.data.height += ((amount / 4) * 4 - this.data.height) * 0.1;
        this.data.height = Math.round(this.data.height * 100) / 100;
        
        if(stored){
            if(Math.abs(amount / 4 - this.data.height) > 0.1) this.updateAnim();
        } else if(this.anim) this.anim.destroy();
    },

    destroy:function(){
        if(this.anim){
            this.anim.destroy();
            this.anim = null;
        }

        var stored = this.liquidStorage.getLiquidStored();
        if(stored){
            var extra = new ItemExtraData();
            extra.putString("liquid_stored",stored);
            extra.putFloat("liquid_amount",this.liquidStorage.getAmount(stored));
            World.dropItem(this.x + 0.5,this.y + 1,this.z + 0.5,0,this.id,1,0,extra);
        } else {
            World.drop(this.x + 0.5,this.y + 1,this.z + 0.5,0,ItemID.cellEmpty,1,0);
        }
    }
});

NuclearReactor.registerModule(BlockID.fuelRodUranium,function(coords,data){
    let heat = 3,fuel = 1;
    for(let side = 0;side < 6;side++){
        var relative = World.getRelativeCoords(coords.x,coords.y,coords.z,side);
        var id = World.getBlockID(relative.x,relative.y,relative.z);
        if(NuclearReactor.getModuleType(id) == "FuelRod"){
            heat += 3,fuel += 1;
        }
    }
    data.heat += heat,data.fuel += fuel;
},"FuelRod");

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

// 冷却器(水)
IDRegistry.genBlockID("coolantWater");
Block.createBlock("coolantWater",[
    {name:"Coolant Block(Water)",texture:[["machine_bottom",1],["machine_top",1],["coolant_water",0]],inCreative:true}
],{base:1,solid:true,opaque:true,destroyTime:5});

var render = new ICRender.Model(),model = new BlockRenderer.Model();
model.addBox(0,0,0,1,1,1,[["machine_bottom",1],["machine_top",1],["reactor_module",0]]);
model.addBox(0.0625,0.0625,0.0625,0.9375,0.9375,0.9375,[["reactor_module_background",0]]);
render.addEntry(model);
BlockRenderer.enableCoordMapping(BlockID.coolantWater,-1,render);

Block.registerDropFunction("coolantWater",function(){return [];});
Block.registerPlaceFunction("coolantWater",function(coords,item,block){
    var place = coords;
    if(!canTileBeReplaced(block.id,block.data)){
        place = coords.relative,block = World.getBlock(place.x,place.y,place.z);
        if(!canTileBeReplaced(block.id,block.data)) return;
    }

    World.setBlock(place.x,place.y,place.z,item.id,item.data);
    var tile = World.addTileEntity(place.x,place.y,place.z);
    if(item.extra){
        tile.liquidStorage.addLiquid(item.extra.getString("liquid_stored"),item.extra.getFloat("liquid_amount"));
    } else tile.liquidStorage.addLiquid("water",16);
});

Machine.registerPrototype(BlockID.coolantWater,{
    defaultValues:{height:0},

    updateAnim:function(){
        if(this.anim){
            var render = new Render();
            render.setPart("body",[{type:"box",uv:{x:0,y:0},coords:{x:0,y:-this.data.height / 2,z:0},size:{x:15,y:this.data.height * 0.9375,z:15}}],{});
            this.anim.describe({skin:"models/liquid/water.png",render:render.getID()});
            this.anim.load();
        }
    },

    init:function(){
        this.anim = new Animation.Base(this.x + 0.5,this.y - 1.5,this.z + 0.5);
        this.updateAnim();

        this.liquidStorage.setLimit("water",16);
    },

    breakDamage:function(damage){
        var amount = this.liquidStorage.getAmount("water");
        this.liquidStorage.setAmount("water",amount - (damage / 1000));
    },

    tick:function(){
        var stored = this.liquidStorage.getLiquidStored();
        var amount = this.liquidStorage.getAmount("water");

        this.data.height += ((amount / 4) * 4 - this.data.height) * 0.1;
        this.data.height = Math.round(this.data.height * 100) / 100;
        
        if(stored){
            if(Math.abs(amount / 4 - this.data.height) > 0.1) {this.updateAnim();}
        } else if(this.anim) this.anim.destroy();
    },

    destroy:function(){
        if(this.anim){
            this.anim.destroy();
            this.anim = null;
        }

        var stored = this.liquidStorage.getLiquidStored();
        if(stored){
            var extra = new ItemExtraData();
            extra.putString("liquid_stored",stored);
            extra.putFloat("liquid_amount",this.liquidStorage.getAmount(stored));
            World.dropItem(this.x + 0.5,this.y + 1,this.z + 0.5,0,this.id,1,0,extra);
        } else {
            World.drop(this.x + 0.5,this.y + 1,this.z + 0.5,0,ItemID.cellEmpty,1,0);
        }
    }
});

NuclearReactor.registerModule(BlockID.coolantWater,function(coords,data){
    let coolant = 3;
    for(let side = 0;side < 6;side++){
        var relative = World.getRelativeCoords(coords.x,coords.y,coords.z,side);
        var id = World.getBlockID(relative.x,relative.y,relative.z);
        if(NuclearReactor.getModuleType(id) == "Coolant"){
            coolant += 3;
        }
    }
    data.coolant += coolant;
},"Coolant");

FusionReactor.registerModule(BlockID.coolantWater,function(coords,data){
    let coolant = 3;
    for(let side = 0;side < 6;side++){
        var relative = World.getRelativeCoords(coords.x,coords.y,coords.z,side);
        var id = World.getBlockID(relative.x,relative.y,relative.z);
        if(NuclearReactor.getModuleType(id) == "Coolant"){
            coolant += 3;
        }
    }
    data.coolant += coolant;
},"Coolant");

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

// 散热器
IDRegistry.genBlockID("heatSink");
Block.createBlock("heatSink",[
    {name:"Heat Sink",texture:[["heatSink",0]],inCreative:true}
],"machine");

Block.registerDropFunction("heatSink",function(){return [];});
Block.registerPlaceFunction("heatSink",function(coords,item,block){
    var place = coords;
    if(!canTileBeReplaced(block.id,block.data)){
        place = coords.relative,block = World.getBlock(place.x,place.y,place.z);
        if(!canTileBeReplaced(block.id,block.data)) return;
    }

    World.setBlock(place.x,place.y,place.z,item.id,item.data);
    var tile = World.addTileEntity(place.x,place.y,place.z);
    if(item.extra) tile.defaultValues.durability = item.extra.getInt("durability");
});

Machine.registerPrototype(BlockID.heatSink,{
    defaultValues:{durability:16384},

    breakDamage:function(damage){
        this.data.durability -= damage;
    },

    tick:function(){
        if(this.data.durability <= 0) this.selfDestroy();
    },

    destroy:function(){
        if(this.data.durability > 0){
            var extra = new ItemExtraData();
            extra.putInt("durability",this.data.durability);
            World.drop(this.x + 0.5,this.y,this.z + 0.5,0,this.id,1,0,extra);
        } else {
            World.drop(this.x + 0.5,this.y + 1,this.z + 0.5,0,ItemID.cellEmpty,1,0);
        }
    }
});

NuclearReactor.registerModule(BlockID.heatSink,function(coords,data){
    let heat = 3,coolant = 3;
    for(let side = 0;side < 6;side++){
        var relative = World.getRelativeCoords(coords.x,coords.y,coords.z,side);
        var id = World.getBlockID(relative.x,relative.y,relative.z);
        if(NuclearReactor.getModuleType(id) == "FuelRod"){
            heat += 3,coolant += 3;
        }
    }
    data.heat += heat;
    data.coolant += coolant;
},"HeatSink");

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

// 中子反射板
IDRegistry.genBlockID("neutronReflector");
Block.createBlock("neutronReflector",[
    {name:"Neutron Reflector",texture:[["neutron_reflector",0]],inCreative:true}
],"machine");

Block.registerDropFunction("neutronReflector",function(){return [];});
Block.registerPlaceFunction("neutronReflector",function(coords,item,block){
    var place = coords;
    if(!canTileBeReplaced(block.id,block.data)){
        place = coords.relative,block = World.getBlock(place.x,place.y,place.z);
        if(!canTileBeReplaced(block.id,block.data)) return;
    }

    World.setBlock(place.x,place.y,place.z,item.id,item.data);
    var tile = World.addTileEntity(place.x,place.y,place.z);
    if(item.extra) tile.defaultValues.durability = item.extra.getInt("durability");
});

Machine.registerPrototype(BlockID.neutronReflector,{
    defaultValues:{durability:16384},

    breakDamage:function(damage){
        this.data.durability -= damage;
    },

    tick:function(){
        if(this.data.durability <= 0) this.selfDestroy();
    },

    destroy:function(){
        if(this.data.durability > 0){
            var extra = new ItemExtraData();
            extra.putInt("durability",this.data.durability);
            World.drop(this.x + 0.5,this.y,this.z + 0.5,0,this.id,1,0,extra);
        } else {
            World.drop(this.x + 0.5,this.y + 1,this.z + 0.5,0,ItemID.cellEmpty,1,0);
        }
    }
});

NuclearReactor.registerModule(BlockID.neutronReflector,function(coords,data){
    let fuel = 0;
    for(let side = 0;side < 6;side++){
        var relative = World.getRelativeCoords(coords.x,coords.y,coords.z,side);
        var id = World.getBlockID(relative.x,relative.y,relative.z);
        if(NuclearReactor.getModuleType(id) == "FuelRod"){
            fuel += 1;
        }
    }
    data.fuel += fuel;
},"HeatSink");

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

// 反应堆外壳
IDRegistry.genBlockID("reactorCasing");
Block.createBlock("reactorCasing",[
    {name:"Reactor Casing",texture:[["reactorCasing",0]],inCreative:true}
],"machine");

Block.registerDropFunction("reactorCasing",function(){return [];});
Block.registerPlaceFunction("reactorCasing",function(coords,item,block){
    var place = coords;
    if(!canTileBeReplaced(block.id,block.data)){
        place = coords.relative,block = World.getBlock(place.x,place.y,place.z);
        if(!canTileBeReplaced(block.id,block.data)) return;
    }

    World.setBlock(place.x,place.y,place.z,item.id,item.data);
    var tile = World.addTileEntity(place.x,place.y,place.z);
    if(item.extra) tile.defaultValues.durability = item.extra.getInt("durability");
});

Machine.registerPrototype(BlockID.reactorCasing,{
    defaultValues:{durability:16384},

    breakDamage:function(damage){
        this.data.durability -= damage;
    },

    tick:function(){
        if(this.data.durability <= 0) this.selfDestroy();
    },

    destroy:function(){
        if(this.data.durability > 0){
            var extra = new ItemExtraData();
            extra.putInt("durability",this.data.durability);
            World.drop(this.x + 0.5,this.y,this.z + 0.5,0,this.id,1,0,extra);
        } else {
            World.drop(this.x + 0.5,this.y + 1,this.z + 0.5,0,ItemID.cellEmpty,1,0);
        }
    }
});

NuclearReactor.registerModule(BlockID.reactorCasing,function(coords,data){
    let hard = 0;
    for(let side = 0;side < 6;side++){
        var relative = World.getRelativeCoords(coords.x,coords.y,coords.z,side);
        var id = World.getBlockID(relative.x,relative.y,relative.z);
        if(NuclearReactor.getModuleType(id) == "Casing"){
            hard += 1;
        }
    }
    data.hard += hard;
},"Casing");

FusionReactor.registerModule(BlockID.reactorCasing,function(coords,data){
    let hard = 0;
    for(let side = 0;side < 6;side++){
        var relative = World.getRelativeCoords(coords.x,coords.y,coords.z,side);
        var id = World.getBlockID(relative.x,relative.y,relative.z);
        if(FusionReactor.getModuleType(id) == "Casing"){
            hard += 1;
        }
    }
    data.hard += hard;
},"Casing");

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

// 锡线圈
IDRegistry.genBlockID("coilTin");
Block.createBlock("coilTin",[
    {name:"Tin Coil",texture:[["machine_bottom",1],["machine_top",1],["tin_coil",0]],inCreative:true}
],"machine");

Block.registerDropFunction("coilTin",function(){return [];});
Block.registerPlaceFunction("coilTin",function(coords,item,block){
    var place = coords;
    if(!canTileBeReplaced(block.id,block.data)){
        place = coords.relative,block = World.getBlock(place.x,place.y,place.z);
        if(!canTileBeReplaced(block.id,block.data)) return;
    }

    World.setBlock(place.x,place.y,place.z,item.id,item.data);
    var tile = World.addTileEntity(place.x,place.y,place.z);
    if(item.extra) tile.defaultValues.durability = item.extra.getInt("durability");
});

Machine.registerPrototype(BlockID.coilTin,{
    defaultValues:{durability:16384},

    breakDamage:function(damage){
        this.data.durability -= damage;
    },

    tick:function(){
        if(this.data.durability <= 0) this.selfDestroy();
    },

    destroy:function(){
        if(this.data.durability > 0){
            var extra = new ItemExtraData();
            extra.putInt("durability",this.data.durability);
            World.drop(this.x + 0.5,this.y,this.z + 0.5,0,this.id,1,0,extra);
        } else {
            World.drop(this.x + 0.5,this.y + 1,this.z + 0.5,0,ItemID.cellEmpty,1,0);
        }
    }
});

FusionReactor.registerModule(BlockID.coilTin,function(coords,data){
    let heat = 1,fuel = 1,coolant = 1;
    for(let side = 0;side < 6;side++){
        var relative = World.getRelativeCoords(coords.x,coords.y,coords.z,side);
        var id = World.getBlockID(relative.x,relative.y,relative.z);
        if(FusionReactor.getModuleType(id) == "Coil"){
            heat += 1,fuel += 1,coolant += 1;
        }
    }
    data.heat += heat,data.fuel += fuel,data.coolant += coolant;
},"Coil");

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

// 铜线圈
IDRegistry.genBlockID("coilCopper");
Block.createBlock("coilCopper",[
    {name:"Copper Coil",texture:[["machine_bottom",1],["machine_top",1],["copper_coil",0]],inCreative:true}
],"machine");

Block.registerDropFunction("coilCopper",function(){return [];});
Block.registerPlaceFunction("coilCopper",function(coords,item,block){
    var place = coords;
    if(!canTileBeReplaced(block.id,block.data)){
        place = coords.relative,block = World.getBlock(place.x,place.y,place.z);
        if(!canTileBeReplaced(block.id,block.data)) return;
    }

    World.setBlock(place.x,place.y,place.z,item.id,item.data);
    var tile = World.addTileEntity(place.x,place.y,place.z);
    if(item.extra) tile.defaultValues.durability = item.extra.getInt("durability");
});

Machine.registerPrototype(BlockID.coilCopper,{
    defaultValues:{durability:16384},

    breakDamage:function(damage){
        this.data.durability -= damage;
    },

    tick:function(){
        if(this.data.durability <= 0) this.selfDestroy();
    },

    destroy:function(){
        if(this.data.durability > 0){
            var extra = new ItemExtraData();
            extra.putInt("durability",this.data.durability);
            World.drop(this.x + 0.5,this.y,this.z + 0.5,0,this.id,1,0,extra);
        } else {
            World.drop(this.x + 0.5,this.y + 1,this.z + 0.5,0,ItemID.cellEmpty,1,0);
        }
    }
});

FusionReactor.registerModule(BlockID.coilCopper,function(coords,data,id){
    let heat = 3,fuel = 1,coolant = 3;
    for(let side = 0;side < 6;side++){
        var relative = World.getRelativeCoords(coords.x,coords.y,coords.z,side);
        var id = World.getBlockID(relative.x,relative.y,relative.z);
        if(FusionReactor.getModuleType(id) == "Coil"){
            heat += 3,fuel += 1,coolant += 3;
        }
    }
    data.heat += heat,data.fuel += fuel,data.coolant += coolant;
},"Coil");

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

// 金线圈
IDRegistry.genBlockID("coilGold");
Block.createBlock("coilGold",[
    {name:"Gold Coil",texture:[["machine_bottom",1],["machine_top",1],["gold_coil",0]],inCreative:true}
],"machine");

Block.registerDropFunction("coilGold",function(){return [];});
Block.registerPlaceFunction("coilGold",function(coords,item,block){
    var place = coords;
    if(!canTileBeReplaced(block.id,block.data)){
        place = coords.relative,block = World.getBlock(place.x,place.y,place.z);
        if(!canTileBeReplaced(block.id,block.data)) return;
    }

    World.setBlock(place.x,place.y,place.z,item.id,item.data);
    var tile = World.addTileEntity(place.x,place.y,place.z);
    if(item.extra) tile.defaultValues.durability = item.extra.getInt("durability");
});

Machine.registerPrototype(BlockID.coilGold,{
    defaultValues:{durability:16384},

    breakDamage:function(damage){
        this.data.durability -= damage;
    },

    tick:function(){
        if(this.data.durability <= 0) this.selfDestroy();
    },

    destroy:function(){
        if(this.data.durability > 0){
            var extra = new ItemExtraData();
            extra.putInt("durability",this.data.durability);
            World.drop(this.x + 0.5,this.y,this.z + 0.5,0,this.id,1,0,extra);
        } else {
            World.drop(this.x + 0.5,this.y + 1,this.z + 0.5,0,ItemID.cellEmpty,1,0);
        }
    }
});

FusionReactor.registerModule(BlockID.coilGold,function(coords,data){
    let heat = 5,fuel = 1,coolant = 5;
    for(let side = 0;side < 6;side++){
        var relative = World.getRelativeCoords(coords.x,coords.y,coords.z,side);
        var id = World.getBlockID(relative.x,relative.y,relative.z);
        if(FusionReactor.getModuleType(id) == "Coil"){
            heat += 5,fuel += 1,coolant += 5;
        }
    }
    data.heat += heat,data.fuel += fuel,data.coolant += coolant;
},"Coil");

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.fuelRodUranium,count:1,data:0},[" a ","aba"," a "],["a",ItemID.plateTin,0,"b",ItemID.enrichedUranium,0]);
	Recipes.addShaped({id:BlockID.coolantWater,count:1,data:0},[" a ","aba"," a "],["a",ItemID.plateTin,0,"b",ItemID.cellWater,0]);
	Recipes.addShaped({id:BlockID.heatSink,count:1,data:0},["aba","bcb","aba"],["a",ItemID.stickIron,0,"b",ItemID.plateIron,0,"c",ItemID.electricMotor,0]);
	Recipes.addShaped({id:BlockID.neutronReflector,count:1,data:0},["aba","bcb","aba"],["a",ItemID.dustTin,0,"b",ItemID.dustCarbon,0,"c",ItemID.plateCopper,0]);
    Recipes.addShaped({id:BlockID.reactorCasing,count:1,data:0},["aa","aa"],["a",ItemID.plateLead,0]);

    Recipes.addShaped({id:BlockID.coilTin,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.wireTin,0]);
    Recipes.addShaped({id:BlockID.coilCopper,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.wireCopper,0]);
    Recipes.addShaped({id:BlockID.coilGold,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.wireGold,0]);
});