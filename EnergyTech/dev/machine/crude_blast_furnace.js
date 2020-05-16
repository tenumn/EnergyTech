// [高炉砖]Blast Furnace Brick
IDRegistry.genBlockID("blastFurnaceBrick");
Block.createBlock("blastFurnaceBrick",[
    {name:"Blast Furnace Brick",texture:[["blast_furnace_brick",0]],inCreative:true}
],"stone");

// [粗制高炉]Crude Blast Furnace
IDRegistry.genBlockID("crudeBlastFurnace");
Block.createBlock("crudeBlastFurnace",[
    {name:"Crude Blast Furnace",texture:[["blast_furnace_brick",0],["blast_furnace_brick",0],["blast_furnace_brick",0],["crude_blast_furnace",0],["blast_furnace_brick",0],["blast_furnace_brick",0]],inCreative:true}
],{solid:true,destroytime:3,explosionres:12});
TileRenderer.setStandartModel(BlockID.crudeBlastFurnace,[["blast_furnace_brick",0],["blast_furnace_brick",0],["blast_furnace_brick",0],["crude_blast_furnace",0],["blast_furnace_brick",0],["blast_furnace_brick",0]]);
TileRenderer.registerRotationModel(BlockID.crudeBlastFurnace,0,[["blast_furnace_brick",0],["blast_furnace_brick",0],["blast_furnace_brick",0],["crude_blast_furnace",0],["blast_furnace_brick",0],["blast_furnace_brick",0]]);
TileRenderer.registerRotationModel(BlockID.crudeBlastFurnace,4,[["blast_furnace_brick",0],["blast_furnace_brick",0],["blast_furnace_brick",0],["crude_blast_furnace",1],["blast_furnace_brick",0],["blast_furnace_brick",0]]);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.blastFurnaceBrick,count:4,data:0},[
        "aba",
        "b b",
        "aba"
    ],["a",337,0,"b",45,0]);

	Recipes.addShaped({id:BlockID.crudeBlastFurnace,count:1,data:0},[
        "aba",
        "bcb",
        "aba"
    ],["a",ItemID.plateIron,0,"b",45,0,"c",61,0]);
});

var GuiCrudeBlastFurnace = new UI.StandartWindow({
	standart:{
		header:{text:{text:Translation.translate("Blast Furnace")}},
		inventory:{standart:true},
		background:{standart:true}
    },

    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:525,y:225 + GUI_SCALE,bitmap:"arrow_background",scale:GUI_SCALE},
        {type:"bitmap",x:425 + GUI_SCALE * 4,y:225 + GUI_SCALE * 2,bitmap:"fireBackground",scale:GUI_SCALE}
    ],
    
	elements:{
        "slotInput":{type:"slot",x:425,y:150,bitmap:"slot_empty",scale:GUI_SCALE},
        "scaleArrow":{type:"scale",x:525,y:225 + GUI_SCALE,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "slotOutput":{type:"slot",x:625,y:225,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
		"scaleBurn":{type:"scale",x:425 + GUI_SCALE * 3,y:225 + GUI_SCALE * 2,direction:1,value:0.5,bitmap:"fireScale",scale:GUI_SCALE},
        "slotFuel":{type:"slot",x:425,y:300,bitmap:"slot_fuel",isValid:function(id,count,data){return Recipes.getFuelBurnDuration(id,data) > 0;}}
	}
});

MachineRegistry.registerPrototype(BlockID.crudeBlastFurnace,{
    defaultValues:{
        meta:0,
        burn:0,
        burnMax:0,
        progress:0,
        isActive:false
    },
    
    tick:function(){
        if(StructureRegistry.getStructure("crude_blast_furnace",this.x,this.y,this.z,true)){
            StorageInterface.checkHoppers(this);
        
            var input = this.container.getSlot("slotInput");
            var recipe = RecipeRegistry.getRecipeResult("BlastFurnace",[input.id,input.data]);
            
            if(this.data.burn > 0) this.data.burn -= 1;
            if(this.data.burn == 0 && recipe) this.data.burn = this.data.burnMax = this.getSlotBurnDuration("slotFuel");
            
            if(recipe){if(this.data.burn > 0){
                this.activate();
                this.data.progress += 1 / 6000;
                
                if(this.data.progress.toFixed(3) >= 1){
                    this.setOutputSlot("slotOutput",recipe[0].id,recipe[0].count,recipe[0].data),input.count--;
                    this.container.validateAll();
                    this.data.progress = 0;
                }
            } else {this.deactive();}} else {this.deactive(),this.data.progress = 0;}
        } else {this.deactive(),this.data.progress = 0;}
        
        this.container.setScale("scaleArrow",parseInt(this.data.progress / 1 * 22) / 22);
        this.container.setScale("scaleBurn",parseInt(this.data.burn / this.data.burnMax * 14) / 14 || 0);
    },

    getGuiScreen:function(){
        return GuiCrudeBlastFurnace;
    }
});
TileRenderer.setRotationPlaceFunction(BlockID.crudeBlastFurnace);
StorageInterface.createInterface(BlockID.crudeBlastFurnace,{
	slots:{
		"slotInput":{input:true},
        "slotOutput":{output:true}
    },
    
	isValidInput:function(item){
		return RecipeRegistry.getRecipeResult("BlastFurnace",[item.id,item.data])?true:false;
	}
});