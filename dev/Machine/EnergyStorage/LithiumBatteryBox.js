// [锂电池盒]Lithium Battery Box
IDRegistry.genBlockID("lithiumBatteryBox");
Block.createBlock("lithiumBatteryBox",[
    {name:"Lithium Battery Box",texture:[["battery_bottom",0],["battery_top",0],["lithium_battery",0]],inCreative:true}
],"opaque");
TileRenderer.setStandartModel(BlockID.lithiumBatteryBox,[["battery_bottom",0],["battery_top",0],["lithium_battery",0],["lithium_battery",0],["lithium_battery",0],["lithium_battery",0]]);
for(let i = 0;i < 9;i++){
    TileRenderer.registerRenderModel(BlockID.lithiumBatteryBox,i,[["battery_bottom",0],["battery_top",0],["lithium_battery",i],["lithium_battery",i],["lithium_battery",i],["lithium_battery",i]]);
}

wheat.item.addTooltip(BlockID.lithiumBatteryBox,Translation.translate("Energy Input: ") + Translation.translate("Top Side"));
wheat.item.addTooltip(BlockID.lithiumBatteryBox,Translation.translate("Energy Output: ") + Translation.translate("Bottom Side"));
wheat.item.addTooltip(BlockID.lithiumBatteryBox,Translation.translate("Energy Storage: ") + 65536 + "Eu");

ETMachine.setDrop("lithiumBatteryBox",BlockID.machineCasing);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.lithiumBatteryBox,count:1,data:0},["aba","bcb","aba"],["a",ItemID.partIron,0,"b",ItemID.lithiumBattery,-1,"c",ItemID.coilTin,0]);
});

var GuiLithiumBatteryBox = new UI.StandartWindow({
	standart:{
		header:{text:{text:Translation.translate("Lithium Battery Box")}},
		inventory:{standart:true},
		background:{standart:true}
    },

    drawing:[
		{type:"bitmap",x:350,y:75,bitmap:"energyBackground",scale:GUI_SCALE},
		{type:"bitmap",x:900,y:400,bitmap:"logo",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],
    
	elements:{
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Energy: ") + "0/0Eu"},
		"scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:75 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energyScale",scale:GUI_SCALE}
	}
});

ETMachine.registerEnergyStorage(BlockID.lithiumBatteryBox,{
    defaultValues:{
        energy_storage:65536
    },

    tick:function(){
        this.renderer();
        this.container.setScale("scaleEnergy",this.data.energy / this.getEnergyStorage());
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },
    
    getGuiScreen:function(){return GuiLithiumBatteryBox;},
    canReceiveEnergy:function(side){return side == BlockSide.UP;},
    canExtractEnergy:function(side){return side == BlockSide.DOWN;},
    renderer:function(){TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,Math.round(this.data.energy / this.getEnergyStorage() * 8));}
});