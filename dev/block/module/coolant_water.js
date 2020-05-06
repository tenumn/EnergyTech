// 冷却器(水)
IDRegistry.genBlockID("coolantWater");
Block.createBlock("coolantWater",[
    {name:"Coolant Block(Water)",texture:[["machine_bottom",1],["machine_top",1],["coolant_water",0]],inCreative:true}
],{base:1,solid:true,opaque:true,destroyTime:5});

Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.coolantWater,count:1,data:0},[
        " a ",
        "aba",
        " a "
    ],["a",ItemID.plateTin,0,"b",ItemID.cellWater,0]);
});

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