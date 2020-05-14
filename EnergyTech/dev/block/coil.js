// 锡线圈
IDRegistry.genBlockID("coilTin");
Block.createBlock("coilTin",[
    {name:"Tin Coil",texture:[["tin_coil_bottom",0],["tin_coil_top",0],["tin_coil",0]],inCreative:true}
],"machine");

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.coilTin,count:1,data:0},[
        "aaa",
        "aaa",
        "aaa"
    ],["a",ItemID.wireTin,0]);
});

// 铜线圈
IDRegistry.genBlockID("coilCopper");
Block.createBlock("coilCopper",[
    {name:"Copper Coil",texture:[["copper_coil_bottom",0],["copper_coil_top",0],["copper_coil",0]],inCreative:true}
],"machine");

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.coilCopper,count:1,data:0},[
        "aaa",
        "aaa",
        "aaa"
    ],["a",ItemID.wireCopper,0]);
});

// 金线圈
IDRegistry.genBlockID("coilGold");
Block.createBlock("coilGold",[
    {name:"Gold Coil",texture:[["gold_coil_bottom",0],["gold_coil_top",0],["gold_coil",0]],inCreative:true}
],"machine");

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.coilGold,count:1,data:0},[
        "aaa",
        "aaa",
        "aaa"
    ],["a",ItemID.wireGold,0]);
});

// 钢线圈
IDRegistry.genBlockID("coilSteel");
Block.createBlock("coilSteel",[
    {name:"Steel Coil",texture:[["steel_coil_bottom",0],["steel_coil_top",0],["steel_coil",0]],inCreative:true}
],"machine");

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.coilSteel,count:1,data:0},[
        "aaa",
        "aaa",
        "aaa"
    ],["a",ItemID.wireSteel,0]);
});