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