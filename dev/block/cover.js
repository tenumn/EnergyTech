Block.createSpecialType({
    opaque:false,
    destroytime:3
},"cover");

Renderer.initCoverModel = function(id,texture){
    var size = [[0,0.9375,0,1,1,1],[0,0,0,1,0.0625,1],[0,0,0.9375,1,1,1],[0,0,0,1,1,0.0625],[0.9375,0,0,1,1,1],[0,0,0,0.0625,1,1]];
    for(var i = 0;i < 6;i++){
        var box = size[i],model = new BlockRenderer.Model();
        model.addBox(box[0],box[1],box[2],box[3],box[4],box[5],texture);
        Renderer.initRenderModel(id,i,model);

        Block.setBlockShape(id,{x:box[0],y:box[1],z:box[2]},{x:box[3],y:box[4],z:box[5]},i);
    }
}

Renderer.registerCoverModel = function(id,data,texture){
    var size = [[0,0.9375,0,1,1,1],[0,0,0,1,0.0625,1],[0,0,0.9375,1,1,1],[0,0,0,1,1,0.0625],[0.9375,0,0,1,1,1],[0,0,0,0.0625,1,1]];
    for(var i = 0;i < 6;i++){
        var box = size[i],model = new BlockRenderer.Model();
        model.addBox(box[0],box[1],box[2],box[3],box[4],box[5],texture);
        Renderer.registerRenderModel(id,data + i,model);
    }
}

Renderer.setCoverRotationPlace = function(id){
    Item.registerUseFunction(id,function(coords,item,block){
        if(World.getBlock(coords.relative.x,coords.relative.y,coords.relative.z).id == 0){
            var x = coords.relative.x,y = coords.relative.y,z = coords.relative.z;
            World.setBlock(x,y,z,BlockID[id],coords.side);
            var tile = World.addTileEntity(x,y,z);
            tile.data.meta = coords.side;
            Renderer.mapAtCoords(x,y,z,BlockID[id],coords.side);
            Player.decreaseCarriedItem(1);
        }
    });

    Block.registerDropFunction(id,function(coords,id,data,level,enchant){
        return [[ItemID[id],1,0]];
    });
}

// 能量显示面板
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

Renderer.initCoverModel(BlockID.coverEnergyDisplay,[["cover_energy_display",0],["cover_energy_display",0],["cover_energy_display",0],["cover_energy_display",0],["cover_energy_display",0],["cover_energy_display",0]]);
for(let i = 0;i <= 10;i++){
    Renderer.registerCoverModel(BlockID.coverEnergyDisplay,i * 6,[["cover_energy_display",i],["cover_energy_display",i],["cover_energy_display",i],["cover_energy_display",i],["cover_energy_display",i],["cover_energy_display",i]]);
}

Callback.addCallback("PreLoaded",function(){
    var wrench = Tool.getAllTool("Wrench");
    for(let i = 0;i < wrench.length;i++){
        Recipe.addShapedRecipe({id:ItemID.coverEnergyDisplay,count:1,data:0},["ea ","dbd"," c "],["a",ItemID.stickIron,0,"b",ItemID.plateAluminium,0,"c",ItemID.circuitEnergyStorage,0,"d",ItemID.wireTin,0,"e",wrench[i],-1],{0:1});
    }
});

Machine.registerPrototype(BlockID.coverEnergyDisplay,{
    defaultValues:{meta:0},

    tick:function(){this.renderer();},
    
    renderer:function(){
        var coords = World.getRelativeCoords(this.x,this.y,this.z,this.data.meta),tile = World.getTileEntity(coords.x,coords.y,coords.z);
        if(tile && tile.data.energy && tile.getEnergyStorage()){
            Renderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (Math.round(tile.data.energy / tile.getEnergyStorage() * 10) * 6));
        }
    }
});
Renderer.setCoverRotationPlace("coverEnergyDisplay");

// 进度显示面板
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

Renderer.initCoverModel(BlockID.coverProgressDisplay,[["cover_progress_display",0],["cover_progress_display",0],["cover_progress_display",0],["cover_progress_display",0],["cover_progress_display",0],["cover_progress_display",0]]);
for(let i = 0;i <= 11;i++){
    Renderer.registerCoverModel(BlockID.coverProgressDisplay,i * 6,[["cover_progress_display",i],["cover_progress_display",i],["cover_progress_display",i],["cover_progress_display",i],["cover_progress_display",i],["cover_progress_display",i]]);
}

Callback.addCallback("PreLoaded",function(){
    var wrench = Tool.getAllTool("Wrench");
    for(let i = 0;i < wrench.length;i++){
        Recipe.addShapedRecipe({id:ItemID.coverProgressDisplay,count:1,data:0},["ea ","dbd"," c "],["a",ItemID.stickIron,0,"b",ItemID.plateAluminium,0,"c",ItemID.circuitOverclocker,0,"d",ItemID.wireTin,0,"e",wrench[i],-1],{0:1});
    }
});

Machine.registerPrototype(BlockID.coverProgressDisplay,{
    defaultValues:{meta:0},
    tick:function(){this.renderer();},
    
    renderer:function(){
        var coords = World.getRelativeCoords(this.x,this.y,this.z,this.data.meta),tile = World.getTileEntity(coords.x,coords.y,coords.z);
        if(tile && tile.data.progress){
            Renderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (tile.data.isActive?(Math.round(tile.data.progress / 1 * 11) * 6):0));
        }
    }
});
Renderer.setCoverRotationPlace("coverProgressDisplay");