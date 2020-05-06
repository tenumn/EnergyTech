// 钢线圈
IDRegistry.genBlockID("coilSteel");
Block.createBlock("coilSteel",[
    {name:"Steel Coil",texture:[["steel_coil_bottom",0],["steel_coil_top",0],["steel_coil",0]],inCreative:true}
],"machine");

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.coilSteel,count:1,data:0},[
        "aaa",
        "aaa",
        "aaa"
    ],["a",ItemID.wireSteel,0]);
});

Block.registerDropFunction("coilSteel",function(){return [];});
Block.registerPlaceFunction("coilSteel",function(coords,item,block){
    var place = coords;
    if(!canTileBeReplaced(block.id,block.data)){
        place = coords.relative,block = World.getBlock(place.x,place.y,place.z);
        if(!canTileBeReplaced(block.id,block.data)) return;
    }

    World.setBlock(place.x,place.y,place.z,item.id,item.data);
    var tile = World.addTileEntity(place.x,place.y,place.z);
    if(item.extra) tile.defaultValues.durability = item.extra.getInt("durability");
});

Machine.registerPrototype(BlockID.coilSteel,{
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

FusionReactor.registerModule(BlockID.coilSteel,function(coords,data){
    let heat = 7,fuel = 1;
    for(let side = 0;side < 6;side++){
        var relative = World.getRelativeCoords(coords.x,coords.y,coords.z,side);
        var id = World.getBlockID(relative.x,relative.y,relative.z);
        if(FusionReactor.getModuleType(id) == "Coil"){
            heat += 7,fuel += 1;
        }
    }
    data.heat += heat,data.fuel += fuel;
},"Coil");