/*
  
    ._______.. .__. .__.  ._______.. .______..   ._____.. .__.   .__.. .________.. ._______..  .______.. .__.. .__..
    |  .____|| |  \\|  || |  .____|| |  .__. \\ / .____|| |  \\  /  || |__.  .__|| |  .____|| /  .____|| |  ||_|  ||
    |  ||___.. |   \|  || |  ||___.. |  |__| || | ||._..   \  \\/  //     |  ||    |  ||___.. |  ||      |        ||
    |  .____|| |  ..   || |  .____|| |  .____/  | |||_.\\   \.   .//      |  ||    |  .____|| |  ||      |  .__.  ||
    |  ||___.. |  ||\  || |  ||___.. |  |\  \\  | ||__|||    |   ||       |  ||    |  ||___.. |  ||___.  |  || |  ||
    |_______|| |__|| \_|| |_______|| |__||\__\\ \______//    |___||       |__||    |_______|| \_______|| |__|| |__||

    ================================================== * V3.0.0 * ==================================================
    
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

    ToolAPI.addBlockDropOnExplosion = function(uid){

    }
} else {
    ToolAPI.addBlockDropOnExplosion = ToolLib.addBlockDropOnExplosion;
}

// API
World.drop = ModAPI.requireGlobal("Level.dropItem");
canTileBeReplaced = ModAPI.requireGlobal("canTileBeReplaced");
Player.setInventorySlot = ModAPI.requireGlobal("Player.setInventorySlot");

var EU = EnergyTypeRegistry.assureEnergyType("Eu",1);

var GUI_SCALE = 3.2;
var TEXT_SIZE = __config__.getNumber("text_size");
var GUI_TEXT = {size:TEXT_SIZE / 2,color:android.graphics.Color.parseColor("#96dcdc")}

var ChunkRegistry = {
    chunk:{},
    
    getChunk:function(x,z,dimension){
        var chunk = this.chunk[dimension + ":" + x + ":" + z];
        if(chunk) return chunk;
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

LiquidRegistry.registerLiquid("steam","Steam",["liquid_steam"]);
LiquidRegistry.registerLiquid("helium","Helium",["liquid_helium"]);
LiquidRegistry.registerLiquid("plasmaHelium","Plasma Helium",["helium_plasma"]);
LiquidRegistry.registerLiquid("helium3","Helium-3",["liquid_helium3"]);
LiquidRegistry.registerLiquid("lithium6","Lithium-6",["liquid_lithium6"]);
LiquidRegistry.registerLiquid("lithium7","Lithium-7",["liquid_lithium7"]);
LiquidRegistry.registerLiquid("uranium235","Uranium-235",["liquid_uranium235"]);
LiquidRegistry.registerLiquid("uranium238","Uranium-238",["liquid_uranium238"]);
LiquidRegistry.registerLiquid("tritium","Tritium",["liquid_tritium"]);
LiquidRegistry.registerLiquid("deuterium","Deuterium",["liquid_deuterium"]);
LiquidRegistry.registerLiquid("heavyWater","Heavy Water",["liquid_heavy_water"]);
LiquidRegistry.registerLiquid("distilledWater","Distilled Water",["liquid_distilled_water"]);