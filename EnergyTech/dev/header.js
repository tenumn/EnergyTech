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

// API
World.drop = ModAPI.requireGlobal("Level.dropItem");
canTileBeReplaced = ModAPI.requireGlobal("canTileBeReplaced");
Player.setInventorySlot = ModAPI.requireGlobal("Player.setInventorySlot");
ToolAPI.addBlockDropOnExplosion = ToolLib.addBlockDropOnExplosion;

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
    },

    liquidStored:function(item,name,tooltip){
		return name + tooltip + "\n§7" + (Item.getMaxDamage(item.id) - item.data) + "mB";
    },
    
    energyCard:function(item,name,tooltip){
        if(item.extra){
            var x = Math.abs(item.extra.getInt("x")),y = Math.abs(item.extra.getInt("y")),z = Math.abs(item.extra.getInt("z"));
            return name + tooltip + "\n§7" + Translation.translate("Network IP: ") + x + "." + y + "." + z;
        }
        return name + tooltip;
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

var JSON_LIQUID = FileTools.ReadJSON(__dir__ + "res/data/liquid.json");
for(let i in JSON_LIQUID){
    var liquid = JSON_LIQUID[i];
    LiquidRegistry.registerLiquid(i,liquid.name,["liquid." + liquid.texture]);
}