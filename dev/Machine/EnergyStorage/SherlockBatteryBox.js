// [夏洛克电池盒]Sherlock Battery Box
IDRegistry.genBlockID("sherlockBatteryBox");
Block.createBlock("sherlockBatteryBox",[
    {name:"Sherlock Battery Box",texture:[["machine_bottom",0],["machine_top",0],["sherlock_battery_box",0]],inCreative:true}
],"opaque");

wheat.item.addTooltip(BlockID.sherlockBatteryBox,Translation.translate("Energy Storage: ") + 589824 + "Eu");
ETMachine.setDrop("sherlockBatteryBox",BlockID.machineCasing,2);
ETModel.SherlockBatteryBox(BlockID.sherlockBatteryBox,0);

Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.sherlockBatteryBox,count:1,data:0},["aba","bcb","aba"],["a",ItemID.partIron,0,"b",ItemID.sherlockBattery,-1,"c",ItemID.coilCopper,0]);
});

var GuiSherlockBatteryBox = new UI.StandartWindow({
	standart:{
		header:{text:{text:Translation.translate("Sherlock Battery Box")}},
		inventory:{standart:true},
		background:{standart:true}
    },

    drawing:[
        {type:"bitmap",x:900,y:400,bitmap:"logo",scale:GUI_SCALE},
		{type:"bitmap",x:350,y:75,bitmap:"energyBackground",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],
    
	elements:{
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Energy: ") + "0/0Eu"},
		"scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:75 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energyScale",scale:GUI_SCALE}
	}
});

ETMachine.registerEnergyStorage(BlockID.sherlockBatteryBox,{
    defaultValues:{
		tier:2,
        energy_storage:589824
    },

    tick:function(){
        this.container.setScale("scaleEnergy",this.data.energy / this.getEnergyStorage());
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },
    
    getGuiScreen:function(){return GuiSherlockBatteryBox;}
});