var __size = [[0,0.9375,0,1,1,1],[0,0,0,1,0.0625,1],[0,0,0.9375,1,1,1],[0,0,0,1,1,0.0625],[0.9375,0,0,1,1,1],[0,0,0,0.0625,1,1]];
var CoverIDs = {}
TileRenderer.setCoverModel = function(id,texture){
    CoverIDs[id] = true;
    for(var i = 0;i < 6;i++){
        var box = __size[i],render = new ICRender.Model(),model = new BlockRenderer.Model();
        model.addBox(box[0],box[1],box[2],box[3],box[4],box[5],texture);
        render.addEntry(model);
        BlockRenderer.enableCoordMapping(id,i,render);
        Block.setBlockShape(id,{x:box[0],y:box[1],z:box[2]},{x:box[3],y:box[4],z:box[5]},i);
    }
}

TileRenderer.registerCoverModel = function(id,data,texture){
    for(var i = 0;i < 6;i++){
        var box = __size[i],render = new ICRender.Model(),model = new BlockRenderer.Model();
        model.addBox(box[0],box[1],box[2],box[3],box[4],box[5],texture);
        render.addEntry(model);
        if(!TileRenderer.data[id]){TileRenderer.data[id] = {};}
        TileRenderer.data[id][i + data] = render;
    }
}

TileRenderer.setCoverRotationPlace = function(id){
    Item.registerUseFunction(id,function(coords,item,block){
        if(World.getBlock(coords.relative.x,coords.relative.y,coords.relative.z).id == 0){
            var x = coords.relative.x,y = coords.relative.y,z = coords.relative.z;
            World.setBlock(x,y,z,BlockID[id],coords.side);
            var tile = World.addTileEntity(x,y,z);
            tile.data.meta = coords.side;
            TileRenderer.mapAtCoords(x,y,z,BlockID[id],coords.side);
            Player.decreaseCarriedItem(1);
        }
    });

    Block.registerDropFunction(id,function(coords,id,data,level,enchant){
        return [[ItemID[id],1,0]];
    });
}

Block.createSpecialType({
    opaque:false
},"cover");

IDRegistry.genItemID("coverEnergyDisplay");
Item.createItem("coverEnergyDisplay","Energy Display Cover",{name:"cover_energy_display",meta:0});

IDRegistry.genBlockID("coverEnergyDisplay");
Block.createBlock("coverEnergyDisplay",[
    {name:"Energy Display Cover",texture:[["cover_energy_display",0]],inCreative:false},
    {name:"Energy Display Cover",texture:[["cover_energy_display",0]],inCreative:false},
    {name:"Energy Display Cover",texture:[["cover_energy_display",0]],inCreative:false},
    {name:"Energy Display Cover",texture:[["cover_energy_display",0]],inCreative:false},
    {name:"Energy Display Cover",texture:[["cover_energy_display",0]],inCreative:false},
    {name:"Energy Display Cover",texture:[["cover_energy_display",0]],inCreative:false}
],"cover");

TileRenderer.setCoverModel(BlockID.coverEnergyDisplay,[["cover_energy_display",0],["cover_energy_display",0],["cover_energy_display",0],["cover_energy_display",0],["cover_energy_display",0],["cover_energy_display",0]]);
for(let i = 0;i <= 10;i++){
    TileRenderer.registerCoverModel(BlockID.coverEnergyDisplay,i * 6,[["cover_energy_display",i],["cover_energy_display",i],["cover_energy_display",i],["cover_energy_display",i],["cover_energy_display",i],["cover_energy_display",i]]);
}

Callback.addCallback("PreLoaded",function(){
    var wrench = ETTool.getAllTool("Wrench");
    for(let i = 0;i < wrench.length;i++){
        ETRecipe.addShapedRecipe({id:ItemID.coverEnergyDisplay,count:1,data:0},["ea ","dbd"," c "],["a",ItemID.stickIron,0,"b",ItemID.plateIron,0,"c",ItemID.circuitEnergyStorage,0,"d",ItemID.coilTin,0,"e",wrench[i],-1],{0:1});
    }
});

ETMachine.registerPrototype(BlockID.coverEnergyDisplay,{
    defaultValues:{meta:0},
    tick:function(){this.renderer();},
    renderer:function(){
        var dirs = directions[this.data.meta],tile = World.getTileEntity(this.x + dirs[0],this.y + dirs[1],this.z + dirs[2]);
        
        if(tile && tile.data.energy && tile.getEnergyStorage()){
            TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (Math.round(tile.data.energy / tile.getEnergyStorage() * 10) * 6));
        }
    },

    getGuiScreen:function(){
        var dirs = directions[this.data.meta],block = World.getBlock(this.x + dirs[0],this.y + dirs[1],this.z + dirs[2]),tile = World.getTileEntity(this.x + dirs[0],this.y + dirs[1],this.z + dirs[2]);
        if(!CoverIDs[block.id]){
            if(tile && tile.getGuiScreen()){
                return tile.getGuiScreen();
            }
        }
        return null;
    }
});
TileRenderer.setCoverRotationPlace("coverEnergyDisplay");

IDRegistry.genItemID("coverProgressDisplay");
Item.createItem("coverProgressDisplay","Progress Display Cover",{name:"cover_progress_display",meta:0});

IDRegistry.genBlockID("coverProgressDisplay");
Block.createBlock("coverProgressDisplay",[
    {name:"Progress Display Cover",texture:[["cover_progress_display",0]],inCreative:false},
    {name:"Progress Display Cover",texture:[["cover_progress_display",0]],inCreative:false},
    {name:"Progress Display Cover",texture:[["cover_progress_display",0]],inCreative:false},
    {name:"Progress Display Cover",texture:[["cover_progress_display",0]],inCreative:false},
    {name:"Progress Display Cover",texture:[["cover_progress_display",0]],inCreative:false},
    {name:"Progress Display Cover",texture:[["cover_progress_display",0]],inCreative:false}
],"cover");

TileRenderer.setCoverModel(BlockID.coverProgressDisplay,[["cover_progress_display",0],["cover_progress_display",0],["cover_progress_display",0],["cover_progress_display",0],["cover_progress_display",0],["cover_progress_display",0]]);
for(let i = 0;i <= 11;i++){
    TileRenderer.registerCoverModel(BlockID.coverProgressDisplay,i * 6,[["cover_progress_display",i],["cover_progress_display",i],["cover_progress_display",i],["cover_progress_display",i],["cover_progress_display",i],["cover_progress_display",i]]);
}

Callback.addCallback("PreLoaded",function(){
    var wrench = ETTool.getAllTool("Wrench");
    for(let i = 0;i < wrench.length;i++){
        ETRecipe.addShapedRecipe({id:ItemID.coverProgressDisplay,count:1,data:0},["ea ","dbd"," c "],["a",ItemID.stickIron,0,"b",ItemID.plateIron,0,"c",ItemID.circuitOverclocker,0,"d",ItemID.coilTin,0,"e",wrench[i],-1],{0:1});
    }
});

ETMachine.registerPrototype(BlockID.coverProgressDisplay,{
    defaultValues:{meta:0},
    tick:function(){this.renderer();},
    renderer:function(){
        var dirs = directions[this.data.meta],tile = World.getTileEntity(this.x + dirs[0],this.y + dirs[1],this.z + dirs[2]);
        
        if(tile && tile.data.progress){
            TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (tile.data.isActive?(Math.round(tile.data.progress / 1 * 11) * 6):0));
        }
    },

    getGuiScreen:function(){
        var dirs = directions[this.data.meta],block = World.getBlock(this.x + dirs[0],this.y + dirs[1],this.z + dirs[2]),tile = World.getTileEntity(this.x + dirs[0],this.y + dirs[1],this.z + dirs[2]);
        if(!CoverIDs[block.id]){
            if(tile && tile.getGuiScreen()){
                return tile.getGuiScreen();
            }
        }
        return null;
    }
});
TileRenderer.setCoverRotationPlace("coverProgressDisplay");