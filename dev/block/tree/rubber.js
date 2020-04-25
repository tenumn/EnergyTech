function genTree(x,y,z,data){
    var block = [[x,y + data.height - 2,z + 1],[x,y + data.height - 2,z + 2],[x,y + data.height - 2,z - 1],[x,y + data.height - 2,z - 2],[x + 1,y + data.height - 2,z],[x + 1,y + data.height - 2,z + 1],[x + 1,y + data.height - 2,z + 2],[x + 1,y + data.height - 2,z - 1],[x + 1,y + data.height - 2,z - 2],[x + 2,y + data.height - 2,z],[x + 2,y + data.height - 2,z + 1],[x + 2,y + data.height - 2,z + 2],[x + 2,y + data.height - 2,z - 1],[x + 2,y + data.height - 2,z - 2],[x - 1,y + data.height - 2,z],[x - 1,y + data.height - 2,z + 1],[x - 1,y + data.height - 2,z + 2],[x - 1,y + data.height - 2,z - 1],[x - 1,y + data.height - 2,z - 2],[x - 2,y + data.height - 2,z],[x - 2,y + data.height - 2,z + 1],[x - 2,y + data.height - 2,z + 2],[x - 2,y + data.height - 2,z - 1],[x - 2,y + data.height - 2,z - 2],[x,y + data.height - 3,z + 1],[x,y + data.height - 3,z + 2],[x,y + data.height - 3,z - 1],[x,y + data.height - 3,z - 2],[x + 1,y + data.height - 3,z],[x + 1,y + data.height - 3,z + 1],[x + 1,y + data.height - 3,z + 2],[x + 1,y + data.height - 3,z - 1],[x + 1,y + data.height - 3,z - 2],[x + 2,y + data.height - 3,z],[x + 2,y + data.height - 3,z + 1],[x + 2,y + data.height - 3,z + 2],[x + 2,y + data.height - 3,z - 1],[x + 2,y + data.height - 3,z - 2],[x - 1,y + data.height - 3,z],[x - 1,y + data.height - 3,z + 1],[x - 1,y + data.height - 3,z + 2],[x - 1,y + data.height - 3,z - 1],[x - 1,y + data.height - 3,z - 2],[x - 2,y + data.height - 3,z],[x - 2,y + data.height - 3,z + 1],[x - 2,y + data.height - 3,z + 2],[x - 2,y + data.height - 3,z - 1],[x - 2,y + data.height - 3,z - 2],[x + 1,y + data.height - 1,z],[x - 1,y + data.height - 1,z],[x + 1,y + data.height - 1,z + 1],[x + 1,y + data.height - 1,z - 1],[x - 1,y + data.height - 1,z + 1],[x - 1,y + data.height - 1,z - 1],[x,y + data.height - 1,z + 1],[x,y + data.height - 1,z - 1],[x,y + data.height - 1,z],[x + 1,y + data.height,z],[x - 1,y + data.height,z],[x,y + data.height,z + 1],[x,y + data.height,z - 1]];

    for(let i = 0;i < data.height;i++){
        World.setBlock(x,y + i,z,data.log.id,data.log.data);
    }

    for(let i in block){
        var pos = block[i];
        World.setBlock(pos[0],pos[1],pos[2],data.leaves.id,data.leaves.data);
    }
}

IDRegistry.genBlockID("rubberTreeLog");
Block.createBlock("rubberTreeLog",[
    {name:"Rubber Tree Log",texture:[["rubber_tree_log_bottom",0],["rubber_tree_log_top",0],["rubber_tree_log",0]],inCreative:true},
    {name:"Rubber Tree Log",texture:[["rubber_tree_log_bottom",0],["rubber_tree_log_top",0],["rubber_tree_log",0]],inCreative:false}
],"opaque");
Block.setDestroyTime(BlockID.rubberTreeLog,0.4);
ToolAPI.registerBlockMaterial(BlockID.rubberTreeLog,"wood");

IDRegistry.genBlockID("rubberTreeLeaves");
Block.createBlock("rubberTreeLeaves",[
    {name:"Rubber Tree Leaves",texture:[["rubber_tree_leaves",0]],inCreative:true}
],"opaque");
Block.setDestroyTime(BlockID.rubberTreeLog,0.2);
ToolAPI.registerBlockMaterial(BlockID.rubberTreeLeaves,"plant");

Block.registerDropFunction("rubberTreeLog",function(coords,id,data,level,enchant){
    if(data == 0){
        return [[id,1,0]];
    } else if(data == 1){
        return [[id,1,0],[ItemID.resin,1,0]];
    }
});

Callback.addCallback("GenerateChunk",function(chunkX,chunkZ){
    if(Math.random() < 0.25){
        for(let i = 0;i < 4;i++){
            var coords = GenerationUtils.randomCoords(chunkX,chunkZ,255,0);
            genTree(coords.x,coords.y,coords.z,{height:8,log:{id:BlockID.rubberTreeLog,data:1},leaves:{id:BlockID.rubberTreeLeaves,data:1}});
        }
    }
});