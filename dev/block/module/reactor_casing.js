// 反应堆外壳
IDRegistry.genBlockID("reactorCasing");
Block.createBlock("reactorCasing",[
    {name:"Reactor Casing",texture:[["reactor_casing",0]],inCreative:true}
],"machine");

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.reactorCasing,count:1,data:0},[
        "aa ",
        "aa ",
        "   "
    ],["a",ItemID.plateLead,0]);
});

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