// [恩奈特电池盒]Enete Battery Box
IDRegistry.genBlockID("eneteBatteryBox");
Block.createBlock("eneteBatteryBox",[
    {name:"Enete Battery Box",texture:[["machine_bottom",0],["machine_top",0],["enete_battery_box",0]],inCreative:true}
],"machine");

Item.addTooltip(BlockID.eneteBatteryBox,Translation.translate("Energy Storage: ") + 589824 + "Eu");
Machine.setDrop("eneteBatteryBox",BlockID.machineCasing,2);

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
	Recipes.addShaped({id:BlockID.eneteBatteryBox,count:1,data:0},["aba","bcb","aba"],["a",ItemID.partIron,0,"b",ItemID.eneteBattery,-1,"c",ItemID.wireCopper,0]);
});

var GuiEneteBatteryBox = new UI.StandartWindow({
	standart:{
		header:{text:{text:Translation.translate("Enete Battery Box")}},
		inventory:{standart:true},
		background:{standart:true}
    },

    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
		{type:"bitmap",x:350,y:50,bitmap:"energyBackground",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],
    
	elements:{
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energyScale",scale:GUI_SCALE},
        "slot.battery_input":{type:"slot",x:510,y:300,bitmap:"slot.battery_input",scale:GUI_SCALE,isValid:Machine.isValidEUItem},
        "slot.battery_output":{type:"slot",x:450,y:300,bitmap:"slot.battery_output",scale:GUI_SCALE,isValid:Machine.isValidEUStorage}
	}
});

Machine.registerEnergyStorage(BlockID.eneteBatteryBox,{
    defaultValues:{tier:2,energy_storage:589824},

    tick:function(){
        this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slot.battery_output"),"Eu",this.getEnergyStorage() - this.data.energy,2);
        this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot.battery_input"),"Eu",this.data.energy,2);
        
        this.container.setScale("scaleEnergy",this.data.energy / this.getEnergyStorage());
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },
    
    getGuiScreen:function(){return GuiEneteBatteryBox;}
});