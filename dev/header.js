// lib
IMPORT("ToolLib");
IMPORT("EnergyNet");
IMPORT("ChargeItem");
IMPORT("TileRender");

// API
var EU = EnergyTypeRegistry.assureEnergyType("Eu",1);
var CreateRegistry = {}
var GUI_SCALE = 3.25;
var GUI_TEXT = {size:16,color:android.graphics.Color.parseColor("#96dcdc")}

function power(tier){
    return 32 * Math.pow(4,tier - 1);
}

function random(min,max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

Player.getSneaking = function(){
    return Entity.getSneaking(Player.get());
}

var directions = [[-1,0,0],[1,0,0],[0,-1,0],[0,1,0],[0,0,-1],[0,0,1]];

// BlockType
Block.createSpecialType({
    opaque:false,
    destroytime:0.05
},"wire");

// machines
Translation.addTranslation("Macerator"          ,{zh_CN:"打粉机"     });
Translation.addTranslation("Compressor"         ,{zh_CN:"压缩机"     });
Translation.addTranslation("Blast Furnace"      ,{zh_CN:"高炉"       });
Translation.addTranslation("Solar Generator"    ,{zh_CN:"太阳能发电机"});
Translation.addTranslation("Lithium Battery Box",{zh_CN:"锂电池盒"    });

// text
Translation.addTranslation("Energy: "       ,{zh_CN:"能量: "    });
Translation.addTranslation("Voltage: "      ,{zh_CN:"电压: "    });
Translation.addTranslation("Power Tier: "   ,{zh_CN:"能量等级: "});
Translation.addTranslation("Energy Output: ",{zh_CN:"能量输出: "});