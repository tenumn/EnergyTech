// ================================================== Machine Casing ================================================== //
IDRegistry.genBlockID("machineCasing");
Block.createBlock("machineCasing",[
    {name:"Basic Machine Casing",texture:[["machine_bottom",0],["machine_top",0],["machine_side",0]],inCreative:true},
    {name:"Advanced Machine Casing",texture:[["machine_bottom",1],["machine_top",1],["machine_side",1]],inCreative:true}
],"opaque");
ToolAPI.registerBlockMaterial(BlockID.machineCasing,"stone",1);
Block.setDestroyTime(BlockID.machineCasing,3);

Callback.addCallback("PreLoaded",function(){
    var hammer = ToolRegistry.getAll("Hammer");
    for(let i = 0;i < hammer.length;i++){
        RecipeRegistry.addShapedRecipe({id:BlockID.machineCasing,count:1,data:0},["abb","bcb","bba"],["a",ItemID.stickIron,0,"b",ItemID.plateIron,0,"c",hammer[i],-1],{4:1});
    }
});

Translation.addTranslation("Basic Machine Casing"   ,{zh_CN:"基础机器外壳"});
Translation.addTranslation("Advanced Machine Casing",{zh_CN:"高级机器外壳"});
// ================================================== Circuit ================================================== //
CreateRegistry.createCircuit = function(id,name,texture){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture);
}

CreateRegistry.createCircuit("circuit","Circuit"                        ,{name:"circuit"               ,meta:0});
CreateRegistry.createCircuit("circuit","Circuit(Overclocker Upgrade)"   ,{name:"overclocker_circuit"   ,meta:0});
CreateRegistry.createCircuit("circuit","Circuit(Energy Storage Upgrade)",{name:"energy_storage_circuit",meta:0});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.circuit,count:1,data:0},["aaa","bcb","aaa"],["a",ItemID.coilCopper,0,"b",331,0,"c",ItemID.plateCarbon,0]);
});

Translation.addTranslation("Circuit"                        ,{zh_CN:"电路板"          });
Translation.addTranslation("Circuit(Overclocker Upgrade)"   ,{zh_CN:"电路板(超频升级)"});
Translation.addTranslation("Circuit(Energy Storage Upgrade)",{zh_CN:"电路板(储能升级)"});
// ================================================== Electric ================================================== //
IDRegistry.genItemID("electricMotor" );
IDRegistry.genItemID("electricPiston");
Item.createItem("electricMotor" ,"Electric Motor" ,{name:"electric_motor" });
Item.createItem("electricPiston","Electric Piston",{name:"electric_piston"});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.electricPiston,count:1,data:0},["aaa","bcb","ada"],["a",ItemID.plateIron,0,"b",ItemID.stickIron,0,"c",ItemID.gearIron  ,0,"d",ItemID.electricMotor,0]);
    Recipes.addShaped({id:ItemID.electricMotor ,count:1,data:0},[" ab","aca","da "],["a",ItemID.plateIron,0,"b",ItemID.stickIron,0,"c",ItemID.coilCopper,0,"d",ItemID.coilTin      ,0]);
});

Translation.addTranslation("Electric Motor" ,{zh_CN:"电动马达"});
Translation.addTranslation("Electric Piston",{zh_CN:"电动活塞"});
// ================================================== Lithium Battery ================================================== //
IDRegistry.genItemID("lithiumBattery");
Item.createItem("lithiumBattery","Lithium Battery",{name:"lithium_battery"},{stack:1,isTech:true});
ChargeItemRegistry.registerItem(ItemID.lithiumBattery,"Eu",16384,16,"storage",true,true);

Item.registerNameOverrideFunction(ItemID.lithiumBattery,function(item,name){
    return name + "\n§7" + Translation.translate("Energy: ") + ChargeItemRegistry.getEnergyStored(item) + "Eu";
});

Item.registerIconOverrideFunction(ItemID.lithiumBattery,function(item,name){
	var capacity = Item.getMaxDamage(item.id) - 1;
	var energy = capacity - item.data + 1;
	return {name:"lithium_battery",meta:Math.round(energy / capacity * 6)}
});

Callback.addCallback("PreLoaded",function(){
	var LithiumBattery = Item.getMaxDamage(ItemID.lithiumBattery);
    Recipes.addShaped({id:ItemID.lithiumBattery,count:1,data:LithiumBattery},[" a ","bcb","bcb"],["a",ItemID.coilTin,0,"b",ItemID.plateLeadAntimony,0,"c",ItemID.dustLithium,0]);
});

Translation.addTranslation("Lithium Battery",{zh_CN:"锂电池"});
// ================================================== Cell ================================================== //
IDRegistry.genItemID("cellEmpty");
IDRegistry.genItemID("cellWater");
IDRegistry.genItemID("cellLava" );
Item.createItem("cellEmpty","Liquid Cell(Empty)",{name:"empty_cell"});
Item.createItem("cellWater","Liquid Cell(Water)",{name:"water_cell"});
Item.createItem("cellLava" ,"Liquid Cell(Lava)" ,{name:"lava_cell" });

Item.setLiquidClip(ItemID.cellEmpty,true);
LiquidRegistry.registerItem("water",{id:ItemID.cellEmpty,data:0},{id:ItemID.cellWater,data:0});
LiquidRegistry.registerItem("lava" ,{id:ItemID.cellEmpty,data:0},{id:ItemID.cellLava ,data:0});

Translation.addTranslation("Liquid Cell(Empty)",{zh_CN:"单元(空)"  });
Translation.addTranslation("Liquid Cell(Water)",{zh_CN:"单元(水)"  });
Translation.addTranslation("Liquid Cell(Lava)" ,{zh_CN:"单元(岩浆)"});