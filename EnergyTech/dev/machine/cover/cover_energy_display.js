// [能量显示面板]Energy Display Cover
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
for(let i = 0;i <= 10;i++){
    Renderer.registerCoverModel(BlockID.coverEnergyDisplay,i * 6,[["cover_energy_display",i],["cover_energy_display",i],["cover_energy_display",i],["cover_energy_display",i],["cover_energy_display",i],["cover_energy_display",i]]);
}

Callback.addCallback("PreLoaded",function(){
    var wrench = Tool.getAllTool("Wrench");
    for(let i = 0;i < wrench.length;i++){
        RecipeRegistry.addShapedRecipe({id:ItemID.coverEnergyDisplay,count:1,data:0},[
            "ea ",
            "dbd",
            " c "
        ],["a",ItemID.stickIron,0,"b",ItemID.plateAluminium,0,"c",ItemID.circuitEnergyStorage,0,"d",ItemID.wireTin,0,"e",wrench[i],-1],{0:1});
    }
});

MachineRegistry.registerPrototype(BlockID.coverEnergyDisplay,{
    defaultValues:{
        meta:0
    },

    tick:function(){
        var coords = World.getRelativeCoords(this.x,this.y,this.z,this.data.meta),tile = World.getTileEntity(coords.x,coords.y,coords.z);
        if(tile && tile.data.energy && tile.getEnergyStorage()){
            Renderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (parseInt(tile.data.energy / tile.getEnergyStorage() * 10) * 6));
        }
    },

    destroy:function(){
        BlockRenderer.unmapAtCoords(this.x,this.y,this.z);
    }
});
Renderer.setCoverRotationPlace("coverEnergyDisplay");