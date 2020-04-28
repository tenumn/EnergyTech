/*

    ._______. .__. .__. ._______. .______.   .______. .__.   .__. .________. ._______.  .______. .__.  .__.
    |  .____| |  \ |  | |  .____| |  .__. \ / ._____| |  \   /  | |__.  .__| |  .____| /  .____| |  |__|  |
    |  |____. |   \|  | |  |____. |  |__| | | | .___   \  \./  /     |  |    |  |____. |  |      |        |
    |  .____| |  .    | |  .____| |  .____/ | | |_. \   \.   ./      |  |    |  .____| |  |      |  .__.  |
    |  |____. |  |\   | |  |____. |  |\  \  | |___| |    |   |       |  |    |  |____. |  |____. |  |  |  |
    |_______| |__| \__| |_______| |__| \__\ \_______/    |___|       |__|    |_______| \_______| |__|  |__|

*/

// lib
IMPORT("ToolLib");
IMPORT("SoundAPI");
IMPORT("EnergyNet");
IMPORT("ChargeItem");
IMPORT("TileRender");
IMPORT("UsefulTool");
IMPORT("StorageInterface");

if(getCoreAPILevel() < 10){
    Item.addCreativeGroup = function(uid,name,item){
        
    }

    Item.addRepairItemIds = function(id,item){

    }
}

// API
World.dropItem = ModAPI.requireGlobal("Level.dropItem");
canTileBeReplaced = ModAPI.requireGlobal("canTileBeReplaced");
Player.setInventorySlot = ModAPI.requireGlobal("Player.setInventorySlot");

var GUI_SCALE = 3.2;
var EU = EnergyTypeRegistry.assureEnergyType("Eu",1);
var GUI_TEXT = {size:16,color:android.graphics.Color.parseColor("#96dcdc")}

var ChunkRegistry = {
    chunk:{},
    
    getChunk:function(x,z){
        var chunk = this.chunk[x + ":" + z];
        if(chunk){return chunk;}
        return null;
    }
},network = {}

var Tooltip = {
    energyStored:function(item,name,tooltip){
        return name + tooltip + "\n§7" + Translation.translate("Energy: ") + ChargeItemRegistry.getEnergyStored(item) + "Eu"; 
    },

    tier:function(id,tier){
        Item.addTooltip(id,Translation.translate("Power Tier: ") + tier);
        Item.addTooltip(id,Translation.translate("Max Voltage: ") + power(tier) + "Eu");
    },

    destroyType:function(id,type){
        Item.addTooltip(id,Translation.translate("Destroy Tool Type: ") + Translation.translate(type));
    },

    moduleType:function(id,type){
        Item.addTooltip(id,Translation.translate("Module Type: ") + Translation.translate(type));
    },

    toolType:function(id,type){
        Item.addTooltip(id,Translation.translate("Tool Type: ") + Translation.translate(type));
    },

    info:function(id,info){
        Item.addTooltip(id,Translation.translate("Info: ") + Translation.translate(info));
    }
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
        ChunkRegistry.chunk = scope.chunk || {};
    },
    
    function save(){
        return {
            network:network,
            chunk:ChunkRegistry.chunk
        }
    }
);

LiquidRegistry.registerLiquid("helium","Helium","liquid.helium");
LiquidRegistry.registerLiquid("helium3","Helium-3","liquid.helium3");
LiquidRegistry.registerLiquid("lithium6","Lithium-6","liquid.lithium6");
LiquidRegistry.registerLiquid("lithium7","Lithium-7","liquid.lithium7");
LiquidRegistry.registerLiquid("uranium235","Uranium-235","liquid.uranium235");
LiquidRegistry.registerLiquid("uranium238","Uranium-238","liquid.uranium238");
LiquidRegistry.registerLiquid("tritium","Tritium","liquid.tritium");
LiquidRegistry.registerLiquid("deuterium","Deuterium","liquid.deuterium");
LiquidRegistry.registerLiquid("heavyWater","Heavy Water","liquid.heavyWater");
LiquidRegistry.registerLiquid("distilledWater","Distilled Water","liquid.distilledWater");