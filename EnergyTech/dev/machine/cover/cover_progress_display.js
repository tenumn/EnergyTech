// [进度显示面板]Progress Display Cover
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
for(let i = 0;i <= 11;i++){
    Renderer.registerCoverModel(BlockID.coverProgressDisplay,i * 6,[["cover_progress_display",i],["cover_progress_display",i],["cover_progress_display",i],["cover_progress_display",i],["cover_progress_display",i],["cover_progress_display",i]]);
}

Callback.addCallback("PreLoaded",function(){
    var wrench = Tool.getAllTool("Wrench");
    for(let i = 0;i < wrench.length;i++){
        RecipeRegistry.addShapedRecipe({id:ItemID.coverProgressDisplay,count:1,data:0},[
            "ea ",
            "dbd",
            " c "
        ],["a",ItemID.stickIron,0,"b",ItemID.plateAluminium,0,"c",ItemID.circuitOverclocker,0,"d",ItemID.wireTin,0,"e",wrench[i],-1],{0:1});
    }
});

MachineRegistry.registerPrototype(BlockID.coverProgressDisplay,{
    defaultValues:{
        meta:0
    },

    tick:function(){
        var coords = World.getRelativeCoords(this.x,this.y,this.z,this.data.meta),tile = World.getTileEntity(coords.x,coords.y,coords.z);
        if(tile && tile.data.progress){
            Renderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (tile.data.isActive?(parseInt(tile.data.progress / 1 * 11) * 6):0));
        }
    },

    destroy:function(){
        BlockRenderer.unmapAtCoords(this.x,this.y,this.z);
    }
});
Renderer.setCoverRotationPlace("coverProgressDisplay");