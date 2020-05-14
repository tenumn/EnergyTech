// [锂电池盒]Lithium Battery Box
IDRegistry.genBlockID("lithiumBatteryBox");
Block.createBlock("lithiumBatteryBox",[
    {name:"Lithium Battery Box",texture:[["battery_bottom",0],["battery_top",0],["lithiumBattery",0]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.lithiumBatteryBox,[["battery_bottom",0],["battery_top",0],["lithiumBattery",0],["lithiumBattery",0],["lithiumBattery",0],["lithiumBattery",0]]);
for(let i = 0;i < 9;i++){
    TileRenderer.registerRenderModel(BlockID.lithiumBatteryBox,i,[["battery_bottom",0],["battery_top",0],["lithiumBattery",i],["lithiumBattery",i],["lithiumBattery",i],["lithiumBattery",i]]);
}

Item.addTooltip(BlockID.lithiumBatteryBox,Translation.translate("Energy Input: ") + Translation.translate("Top Side"));
Item.addTooltip(BlockID.lithiumBatteryBox,Translation.translate("Energy Output: ") + Translation.translate("Bottom Side"));
Item.addTooltip(BlockID.lithiumBatteryBox,Translation.translate("Energy Storage: ") + 65536 + "Eu");

MachineRegistry.setDrop("lithiumBatteryBox",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.lithiumBatteryBox,count:1,data:0},[
        "aba",
        "bcb",
        "aba"
    ],["a",ItemID.partIron,0,"b",ItemID.lithiumBattery,-1,"c",ItemID.wireTin,0]);
});

var GuiLithiumBatteryBox = new UI.StandartWindow({
	standart:{
		header:{text:{text:Translation.translate("Lithium Battery Box")}},
		inventory:{standart:true},
		background:{standart:true}
    },

    drawing:[
		{type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
		{type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],
    
	elements:{
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},
        "slotBatteryInput":{type:"slot",x:510,y:300,bitmap:"slot_battery_input",scale:GUI_SCALE,isValid:MachineRegistry.isValidEUItem},
        "slotBatteryOutput":{type:"slot",x:450,y:300,bitmap:"slot_battery_output",scale:GUI_SCALE,isValid:MachineRegistry.isValidEUStorage}
	}
});

MachineRegistry.registerEUEnergyStorage(BlockID.lithiumBatteryBox,{
    defaultValues:{tier:1,energy_storage:65536},

    tick:function(){
        this.renderer();

        this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotBatteryInput"),"Eu",this.data.energy,1);
        this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotBatteryOutput"),"Eu",this.getEnergyStorage() - this.data.energy,1);

        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },
    
    getGuiScreen:function(){return GuiLithiumBatteryBox;},
    canReceiveEnergy:function(side){return side == BlockSide.UP;},
    canExtractEnergy:function(side){return side == BlockSide.DOWN;},
    renderer:function(){TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,parseInt(this.data.energy / this.getEnergyStorage() * 8));}
});