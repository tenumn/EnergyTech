// lib
IMPORT("ToolLib");
IMPORT("SoundAPI");
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

Player.getSneaking = function(){
    return Entity.getSneaking(Player.get());
};

Player.getInventoryItemCount = function(id,data){
	var count = 0;
	for (var slot = 8;slot <= 48;slot++){
        var inventory = Player.getInventorySlot(slot);
		if (inventory.id == id && (data == -1 || inventory.data == (data || 0))){
			count += inventory.count;
		}
	}
	return count;
}