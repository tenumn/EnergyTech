// lib
IMPORT("ToolLib");
IMPORT("SoundAPI");
IMPORT("UsefulTool");
IMPORT("EnergyNet");
IMPORT("ChargeItem");
IMPORT("TileRender");
IMPORT("StorageInterface");

var ChunkRegistry = {
    chunk:{},
    
    getChunk:function(x,z){
        return this.chunk[x + ":" + z];
    }
},network = {}

// API
World.drop = ModAPI.requireGlobal("Level.dropItem");
canTileBeReplaced = ModAPI.requireGlobal("canTileBeReplaced");
Player.setInventorySlot = ModAPI.requireGlobal("Player.setInventorySlot");

var EU = EnergyTypeRegistry.assureEnergyType("Eu",1);

var GUI_SCALE = 3.2;
var GUI_TEXT = {size:16,color:android.graphics.Color.parseColor("#96dcdc")}

function ENERGY_STORED(item,name,tooltip){
    return name + tooltip + "\n§7" + Translation.translate("Energy: ") + ChargeItemRegistry.getEnergyStored(item) + "Eu";
}

Block.createSpecialType({
    base:1,
    opaque:false,
    destroytime:3
},"transparent");

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