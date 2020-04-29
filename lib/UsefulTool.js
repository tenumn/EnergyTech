LIBRARY({name:"UsefulTool",version:3,shared:true,api:"CoreEngine"});

/*
    .__.  .__. ._______. ._______. ._______. .__.  .__. .__.   .________. ._______. ._______. .__.     
	|  |  |  | |  .____| |  .____| |  .____| |  |  |  | |  |   |__.  .__| | .___. | | .___. | |  |     
	|  |  |  | |  |____. |  |____. |  |____. |  |  |  | |  |      |  |    | |   | | | |   | | |  |     
	|  |  |  | |____.  | |  .____| |  .____| |  |  |  | |  |      |  |    | |   | | | |   | | |  |     
	|  |__|  | .____|  | |  |____. |  |      |  |__|  | |  |____. |  |    | |___| | | |___| | |  |____.
	|________| |_______| |_______| |__|      |________| |_______| |__|    |_______| |_______| |_______|
	
	Author: MS_maisui

	Version: 1.2

	Description: Some CEAPIs algorithms are added.
*/

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

var __res__ = __dir__ + "res/";
var __build__ = FileTools.ReadJSON(__dir__ + "build.config");
for(let i in __build__.resources){
    var res = __build__.resources[i];
    if(res.resourceType == "resource") __res__ = __dir__ + res.path;
}

function dip2px(dips){
	return Math.ceil(dips * UI.getContext().getResources().getDisplayMetrics().density);
}

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

var RendererCore = {
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

var LiquidCore = {
    items:{},

    registerItem:function(liquid,empty,full,storage){
        if(!LiquidRegistry.isExists(liquid)) LiquidRegistry.registerLiquid(liquid);

        Item.setLiquidClip(empty,true);
        Item.setMaxDamage(full,storage);
        LiquidRegistry.registerItem(liquid,{id:empty,data:0},{id:full,data:-1});
        this.items[full] = {liquid:liquid,storage:storage,empty:{id:empty,data:0,liquid:liquid}};
    },

    getItemData:function(id,data){
        if(this.items[id]) return this.items[id];
        
        var empty = LiquidRegistry.getEmptyItem(id,data);
        var liquid = LiquidRegistry.getItemLiquid(id,data);
        if(liquid) return {liquid:liquid,storage:1000,empty:{id:empty,data:0,liquid:liquid}};

        return null;
    },

    getItemLiquid:function(id,data){
        var item = this.getItemData(id,data);
        if(item) return item.liquid;

        return LiquidRegistry.getItemLiquid(id,data);
    },

    getEmptyItem:function(id,data){
        var item = this.getItemData(id,data);
        if(item){
            item.empty.amount = (item.storage - data) / 1000;
            return item.empty;
        }

        var empty = LiquidRegistry.getEmptyItem(id,data);
        if(empty){
            var data = {id:empty.id,data:empty.data,liquid:empty.liquid,storage:1,amount:1};
            if(item){
				data.storage = item.storage;
				data.amount = (item.storage - data) / 1000;
            }
            return data;
        }
        
        return null;
    },

    getFullItem:function(id,data,liquid){
        for(let i in this.items){
            var item = this.items[i];
            if(item.liquid == liquid && (id == parseInt(i) && data > 0 || id == item.empty.id)) return {id:parseInt(i),data:0,amount:(data || item.storage) / 1000,storage:item.storage / 1000};
        }

        var full = LiquidRegistry.getFullItem(id,data,liquid);
        if(full) return {id:full.id,data:full.data,amount:1,storage:1};

        return null;
    }
}

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

ICRender.addGroupFor = function(id,groups,data){
	for(let i in groups){
		var group = groups[i];
		ICRender.getGroup(group).add(id,data || -1);
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
	if(!colour) colour = "§7";

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
		if(item.id == id) state(item,heal,satRatio);
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

Player.setHealth = function(health){
    Entity.setHealth(Player.get(),health);
}

Player.getInventoryItemAllCount = function(id,data){
    var count = 0;
    for(let slot = 8;slot <= 48;slot++){
        var inv = Player.getInventorySlot(slot);
        if(inv.id == id && (data == -1 || inv.data == data)) count += inv.count;
    }
    return count;
}

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

ToolAPI.getToolMaterial = function(material){
	return ToolAPI.toolMaterials[material];
}

ToolAPI.getToolBlockType = function(id){
	var data = [],tool = ToolAPI.getToolData(id);
	for(let count in tool.blockMaterials){
		data.push(count);
	}
	return data;
}

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

Callback.addCallback("PreLoaded",function(){
    var lang = Translation.getLanguage();
    if(FileTools.isExists(__res__ + "lang/")){
        var list = FileTools.GetListOfFiles(__res__ + "lang/","lang");
        for(let i in list){
            if(__res__ + "lang/" + lang + ".lang" == list[i]){
                var text = FileTools.ReadKeyValueFile(list[i],"=");
                for(let n in text){
                    var data = {}
                    data[lang] = text[n];
                    Translation.addTranslation(n,data);
                }
                return true;
            }
        }
    
        if(FileTools.isExists(__res__ + "lang/en_US.lang")){
            var text = FileTools.ReadKeyValueFile(__res__ + "lang/en_US.lang","=");
            for(let n in text){
                var data = {}
                data[lang] = text[n];
                Translation.addTranslation(n,data);
            }
            return true;
        }
    }
});

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

Callback.addCallback("tick",function(){
	if(Player.getSneaking()) Callback.invokeCallback("PlayerSneaking",Player.getPosition());
});

Callback.addCallback("EntityDeath",function(entity){
	if(entity == Player.get()) Callback.invokeCallback("PlayerDeath");
});

// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== //

EXPORT("dip2px",dip2px);
EXPORT("Liquid",LiquidCore);
EXPORT("Renderer",RendererCore);