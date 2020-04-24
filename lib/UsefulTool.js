LIBRARY({name:"UsefulTool",version:2,shared:true,api:"CoreEngine"});

/*
    .__.  .__. ._______. ._______. ._______. .__.  .__. .__.   .________. ._______. ._______. .__.     
	|  |  |  | |  .____| |  .____| |  .____| |  |  |  | |  |   |__.  .__| | .___. | | .___. | |  |     
	|  |  |  | |  |____. |  |____. |  |____. |  |  |  | |  |      |  |    | |   | | | |   | | |  |     
	|  |  |  | |____.  | |  .____| |  .____| |  |  |  | |  |      |  |    | |   | | | |   | | |  |     
	|  |__|  | .____|  | |  |____. |  |      |  |__|  | |  |____. |  |    | |___| | | |___| | |  |____.
	|________| |_______| |_______| |__|      |________| |_______| |__|    |_______| |_______| |_______|
	
	Author: MS_maisui

	Version: 1.1

	Description: Some CEAPIs algorithms are added.
*/

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

function dip2px(dips){
	return Math.ceil(dips * UI.getContext().getResources().getDisplayMetrics().density);
}

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

// Basic Rendering Registry
var RendererRegistry = {
    models:{},

	initRenderModel:function(id,data,model){
		if(!this.models[id]){
			this.models[id] = {};
		}
		BlockRenderer.enableCoordMapping(id,(data?data:-1),model);
	},

	registerRenderModel:function(id,data,model){
		if(!this.models[id]){
			this.initRenderModel(id,data,model);
		}
		this.models[id][data] = model;
	},

	getRenderModel:function(id,data){
		var renderer = this.models[id];
		if(renderer){
			return renderer[data];
		}
		return 0;
	},

	mapAtCoords:function(x,y,z,id,data){
		var render = this.getRenderModel(id,data);
		if(render){
			BlockRenderer.mapAtCoords(x,y,z,render);
		}
	}
}

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

UI.getScreenWidth = function(){
    return UI.getContext().getWindowManager().getDefaultDisplay().getWidth();
}

UI.getScreenHeight = function(){
    return UI.getContext().getWindowManager().getDefaultDisplay().getHeight();
}

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

World.getRelativeCoords = function(x,y,z,side){
    var dir = [[0,-1,0],[0,1,0],[0,0,-1],[0,0,1],[-1,0,0],[1,0,0]];
    return {x:x + dir[side][0],y:y + dir[side][1],z:z + dir[side][2]}
}

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

Game.getSetting = function(data){
    return FileTools.ReadKeyValueFile("games/com.mojang/minecraftpe/options.txt")[data];
}

Game.getLanguage = function(){
    return Game.getSetting("game_language");
}

Game.getUIProfile = function(){
    return Game.getSetting("gfx_ui_profile");
}

Game.getGameVolume = function(){
    return Game.getSetting("audio_sound");
}

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

Item.TOOLTIP = {}

Item.getTooltip = function(id){
	return Item.TOOLTIP[id]?Item.TOOLTIP[id]:"";
}

Item.setItemName = function(id,state){
	Item.registerNameOverrideFunction(id,function(item,name){
		return state(item,name,Item.getTooltip(id));
	});
}

Item.addTooltip = function(id,tooltip,colour){
	if(!colour){colour = "§7";}

	if(Item.getTooltip(id)){
		Item.TOOLTIP[id] += "\n" + colour + tooltip + "§n";
	} else {
		Item.TOOLTIP[id] = "\n" + colour + tooltip + "§n"
	}
	
	Item.setItemName(id,function(item,name,tooltip){
		return name + tooltip;
	});
}

Item.registerEatenFunctionForID = function(id,state){
	Callback.addCallback("FoodEaten",function(heal,satRatio){
		var item = Player.getCarriedItem();
		if(item.id == id){
			state(item,heal,satRatio);
		}
	});
}

Item.registerEatenFunction = function(uid,state){
	Item.registerEatenFunctionForID(ItemID[uid],state);
}

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

Player.getSneaking = function(){
    return Entity.getSneaking(Player.get());
}

Player.addEffect = function(id,level,time){
	Entity.addEffect(Player.get(),id,level,time);
}

Player.getHealth = function(){
	return Entity.getHealth(Player.get());
}

Player.getInventoryItemAllCount = function(id,data){
    var count = 0;
    for(let slot = 8;slot <= 48;slot++){
        var inv = Player.getInventorySlot(slot);
        if (inv.id == id && (data == -1 || inv.data == data)){
            count += inv.count;
        }
    }
    return count;
}

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

ToolAPI.getToolMaterial = function(material){
	return ToolAPI.toolMaterials[material];
}

ToolAPI.getToolBlockType = function(id){
	var data = [],tool = ToolAPI.getToolData(id);
	for(let count in data.blockMaterials){
		data.push(count);
	}
	return data;
}

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

IDRegistry.getOreID = function(){
    var ores = [];

    for(id in BlockID){
        var tile = TileEntity.isTileEntityBlock(BlockID[id]);
        if(!tile && id[0] == "o" && id[1] == "r" && id[2] == "e"){
            ores.push(BlockID[id]);
        }
    }

    return ores;
}

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

Callback.addCallback("tick",function(){
	if(Player.getSneaking()){
		Callback.invokeCallback("PlayerSneaking",Player.getPosition());
	}
});

Callback.addCallback("EntityDeath",function(entity){
	if(entity == Player.get()){
		Callback.invokeCallback("PlayerDeath");
	}
});

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

EXPORT("dip2px",dip2px);
EXPORT("Renderer",RendererRegistry);