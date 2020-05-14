// [恩奈特电池盒]Enete Battery Box
IDRegistry.genBlockID("eneteBatteryBox");
Block.createBlock("eneteBatteryBox",[
    {name:"Enete Battery Box",texture:[["machine_bottom",1],["machine_top",1],["enete_battery_box",0]],inCreative:true}
],"machine");

Item.addTooltip(BlockID.eneteBatteryBox,Translation.translate("Energy Storage: ") + 589824 + "Eu");
MachineRegistry.setDrop("eneteBatteryBox",BlockID.machineCasing,2);

var render = new ICRender.Model(),model = new BlockRenderer.Model();
model.addBox(0,0,0,1,0.3125,1,BlockID.eneteBatteryBox,0);
model.addBox(0,0.6875,0,1,1,1,BlockID.eneteBatteryBox,0);
model.addBox(0,0.3125,0,0.3125,0.6875,0.3125,BlockID.eneteBatteryBox,0);
model.addBox(0,0.3125,0.6875,0.3125,0.6875,1,BlockID.eneteBatteryBox,0);
model.addBox(0.6875,0.3125,0,1,0.6875,0.3125,BlockID.eneteBatteryBox,0);
model.addBox(0.6875,0.3125,0.6875,1,0.6875,1,BlockID.eneteBatteryBox,0);
model.addBox(0.0625,0.0625,0.0625,0.9375,0.9375,0.9375,BlockID.eneteBatteryBox,0);
render.addEntry(model);
BlockRenderer.enableCoordMapping(BlockID.eneteBatteryBox,-1,render);

Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.eneteBatteryBox,count:1,data:0},[
        "aba",
        "bcb",
        "aba"
    ],["a",ItemID.partIron,0,"b",ItemID.eneteBattery,-1,"c",ItemID.wireCopper,0]);
});

var GuiEneteBatteryBox = new UI.StandartWindow({
	standart:{
		header:{text:{text:Translation.translate("Enete Battery Box")}},
		inventory:{standart:true},
		background:{standart:true}
    },

    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
		{type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],
    
	elements:{
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},
        "slotBatteryInput":{type:"slot",x:510,y:300,bitmap:"slot_battery_input",scale:GUI_SCALE,isValid:MachineRegistry.isValidEUItem},
        "slotBatteryOutput":{type:"slot",x:450,y:300,bitmap:"slot_battery_output",scale:GUI_SCALE,isValid:MachineRegistry.isValidEUStorage}
	}
});

MachineRegistry.registerEUEnergyStorage(BlockID.eneteBatteryBox,{
    defaultValues:{tier:2,energy_storage:589824},

    tick:function(){
        this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotBatteryInput"),"Eu",this.data.energy,2);
        this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotBatteryOutput"),"Eu",this.getEnergyStorage() - this.data.energy,2);
        
        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },
    
    getGuiScreen:function(){return GuiEneteBatteryBox;}
});