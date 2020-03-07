// lib
IMPORT("ToolLib");
IMPORT("SoundAPI");
IMPORT("WheatAPI");
IMPORT("EnergyNet");
IMPORT("ChargeItem");
IMPORT("TileRender");
IMPORT("StorageInterface");

// API
var GUI_SCALE = 3.25;
var EU = EnergyTypeRegistry.assureEnergyType("Eu",1);
var directions = [[0,1,0],[0,-1,0],[0,0,1],[0,0,-1],[1,0,0],[-1,0,0]];
var GUI_TEXT = {size:16,color:android.graphics.Color.parseColor("#96dcdc")}

function power(tier){
    return 32 * Math.pow(4,tier - 1);
}

function random(min,max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}