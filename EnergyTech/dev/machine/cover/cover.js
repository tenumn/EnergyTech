Renderer.registerCoverModel = function(id,data,texture){
    var size = [[0,0.9375,0,1,1,1],[0,0,0,1,0.0625,1],[0,0,0.9375,1,1,1],[0,0,0,1,1,0.0625],[0.9375,0,0,1,1,1],[0,0,0,0.0625,1,1]];
    
    for(let i = 0;i < 6;i++){
        var render = new ICRender.Model(),model = new BlockRenderer.Model();
        model.addBox(size[i][0],size[i][1],size[i][2],size[i][3],size[i][4],size[i][5],texture);
		render.addEntry(model);
        Renderer.registerRenderModel(id,data + i,render);

        Block.setBlockShape(id,{x:size[i][0],y:size[i][1],z:size[i][2]},{x:size[i][3],y:size[i][4],z:size[i][5]},i);
    }

    Item.addCreativeGroup("cover",Translation.translate("Cover"),[id]);
}

Renderer.setCoverRotationPlace = function(id){
    Item.registerUseFunction(id,function(coords,item,block){
        if(World.isAirBlock(coords.relative.x,coords.relative.y,coords.relative.z)){
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

Block.createSpecialType({
    opaque:false,
    destroytime:5,
    explosionres:1
},"cover");