// [粗制高炉]Crude Blast Furnace
IDRegistry.genBlockID("crudeBlastFurnace");
Block.createBlock("crudeBlastFurnace",[
    {name:"Crude Blast Furnace",texture:[["crudeBlastFurnaceBottom",0],["crudeBlastFurnaceTop",0],["crudeBlastFurnaceSide",0],["crudeBlastFurnace",0],["crudeBlastFurnaceSide",0],["crudeBlastFurnaceSide",0]],inCreative:true}
],"opaque");
TileRenderer.setStandartModel(BlockID.crudeBlastFurnace,[["crudeBlastFurnaceBottom",0],["crudeBlastFurnaceTop",0],["crudeBlastFurnaceSide",0],["crudeBlastFurnace",0],["crudeBlastFurnaceSide",0],["crudeBlastFurnaceSide",0]]);
TileRenderer.registerRotationModel(BlockID.crudeBlastFurnace,0,[["crudeBlastFurnaceBottom",0],["crudeBlastFurnaceTop",0],["crudeBlastFurnaceSide",0],["crudeBlastFurnace",0],["crudeBlastFurnaceSide",0],["crudeBlastFurnaceSide",0]]);
TileRenderer.registerRotationModel(BlockID.crudeBlastFurnace,4,[["crudeBlastFurnaceBottom",0],["crudeBlastFurnaceTop",0],["crudeBlastFurnaceSide",0],["crudeBlastFurnace",1],["crudeBlastFurnaceSide",0],["crudeBlastFurnaceSide",0]]);

Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.crudeBlastFurnace,count:1,data:0},["aba","bcb","aba"],["a",ItemID.plateIron,0,"b",45,0,"c",61,0]);
});

var GuiBlastFurnace = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Blast Furnace")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    drawing:[
        {type:"bitmap",x:900,y:400,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:525,y:225 + GUI_SCALE,bitmap:"arrowBackground",scale:GUI_SCALE},
        {type:"bitmap",x:425 + GUI_SCALE * 4,y:225 + GUI_SCALE * 2,bitmap:"fireBackground",scale:GUI_SCALE}
    ],
    elements:{
        "slotInput":{type:"slot",x:425,y:150,bitmap:"slotBlank",scale:GUI_SCALE},
        "scaleArrow":{type:"scale",x:525,y:225 + GUI_SCALE,direction:0,value:0.5,bitmap:"arrowScale",scale:GUI_SCALE},
        "slotOutput":{type:"slot",x:625,y:225,bitmap:"slotBlank",scale:GUI_SCALE,isValid:function(){return false;}},
		"scaleBurn":{type:"scale",x:425 + GUI_SCALE * 3,y:225 + GUI_SCALE * 2,direction:1,value:0.5,bitmap:"fireScale",scale:GUI_SCALE},
        "slotFuel":{type:"slot",x:425,y:300,bitmap:"slotFuel",isValid:function(id,count,data){return Recipes.getFuelBurnDuration(id,data) > 0;}}
    }
});

ETMachine.registerPrototype(BlockID.crudeBlastFurnace,{
    defaultValues:{
        meta:0,
        burn:0,
        burnMax:0,
        progress:0,
        isActive:false,
    },
    
    tick:function(){
        StorageInterface.checkHoppers(this);
        var input = this.container.getSlot("slotInput"),recipe = ETRecipe.getRecipeResult("BlastFurnace",input.id,input.data);
        
        if(this.data.burn > 0){this.data.burn -= 1;}
		if(this.data.burn == 0 && recipe){this.data.burn = this.data.burnMax = this.getFuel("slotFuel");}
		
        if(recipe){
            if(this.data.burn > 0){
                this.data.progress += 1 / 640;
                this.setActive(true);
                if(this.data.progress.toFixed(3) >= 1){
                    this.setOutput("slotOutput",recipe.id,recipe.count,recipe.data),input.count--;
                    this.container.validateAll();
                    this.data.progress = 0;
                }
            } else {
                this.setActive(false);
            }
        } else {
            this.data.progress = 0;
            this.setActive(false);
        }
        
        this.container.setScale("scaleArrow",Math.round(this.data.progress / 1 * 22) / 22);
        this.container.setScale("scaleBurn",Math.round(this.data.burn / this.data.burnMax * 14) / 14 || 0);
    },

    getGuiScreen:function(){return GuiBlastFurnace;},
    getTransportSlots:function(){return {input:["slotInput"],output:["slotOutput"]};}
});
TileRenderer.setRotationPlaceFunction(BlockID.crudeBlastFurnace);
StorageInterface.createInterface(BlockID.crudeBlastFurnace,{
	slots:{
		"slotInput":{input:true},
        "slotOutput":{output:true}
	},
	isValidInput:function(item){
		return ETRecipe.getRecipeResult("BlastFurnace",item.id,item.data)?true:false;
	}
});
