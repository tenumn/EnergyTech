Block.createSpecialType({
    base:17,
    solid:true,
    destroytime:2,
    explosionres:10
},"log");

IDRegistry.genBlockID("rubberTreeLog");
Block.createBlock("rubberTreeLog",[
    {name:"Rubber Tree Log",texture:[["rubber_tree_log_bottom",0],["rubber_tree_log_top",0],["rubber_tree_log",0]],inCreative:true},
    {name:"Rubber Tree Log",texture:[["rubber_tree_log_bottom",0],["rubber_tree_log_top",0],["rubber_tree_log",0]],inCreative:false}
],"log");
ToolAPI.registerBlockMaterial(BlockID.rubberTreeLog,"wood",true);

Block.registerDropFunction("rubberTreeLog",function(coords,id,data,level,enchant){
    if(data == 0){
        return [[id,1,0]];
    }
    
    if(data == 1){
        return [[id,1,0],[ItemID.resin,1,0]];
    }
});

Block.createSpecialType({
    base:16,
    destroytime:0.2,
    explosionres:1
},"leaves");

IDRegistry.genBlockID("rubberTreeLeaves");
Block.createBlock("rubberTreeLeaves",[
    {name:"Rubber Tree Leaves",texture:[["rubber_tree_leaves",0]],inCreative:true}
],"leaves");
ToolAPI.registerBlockMaterial(BlockID.rubberTreeLeaves,"plant",true);