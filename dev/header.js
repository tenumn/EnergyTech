// lib
IMPORT("ToolLib");
IMPORT("SoundAPI");
IMPORT("WheatAPI");
IMPORT("EnergyNet");
IMPORT("ChargeItem");
IMPORT("TileRender");
IMPORT("StorageInterface");

// API
World.drop = ModAPI.requireGlobal("Level.dropItem");
canTileBeReplaced = ModAPI.requireGlobal("canTileBeReplaced");
Player.setInventorySlot = ModAPI.requireGlobal("Player.setInventorySlot");

var EnergyType = {
    EU:EnergyTypeRegistry.assureEnergyType("Eu",1),
    RF:EnergyTypeRegistry.assureEnergyType("RF",0.25)
}

var network = {}
var GUI_SCALE = 3.2;
var directions = [[0,1,0],[0,-1,0],[0,0,1],[0,0,-1],[1,0,0],[-1,0,0]];
var GUI_TEXT = {size:16,color:android.graphics.Color.parseColor("#96dcdc")}

wheat.item.energyStored = function(item,name,tooltip){
    return name + tooltip + "\n§7" + Translation.translate("Energy: ") + ChargeItemRegistry.getEnergyStored(item) + "Eu";
}

function power(tier){
    return 32 * Math.pow(4,tier - 1);
}

function random(min,max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

Saver.addSavesScope("EnergyTech",
    function read(scope){
    	network = scope.network || {};
    },
    
    function save(){
        return {
            network:network
        }
    }
);

// IC
if(getCoreAPILevel() < 10){
    Item.addCreativeGroup = function(uid,name,item){
        
    }

    Item.addRepairItemIds = function(id,item){

    }
}