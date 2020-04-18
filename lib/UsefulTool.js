LIBRARY({name:"UsefulTool",version:1,shared:true,api:"CoreEngine"});

var RendererRegistry = {
    models:{},

	initRenderModel:function(id,data,model){
		if(!this.models[id]){this.models[id] = {};}

		var render = new ICRender.Model();
		render.addEntry(model);
		BlockRenderer.enableCoordMapping(id,(data?data:-1),render);
	},

	registerRenderModel:function(id,data,model){
		if(!this.models[id]){this.initRenderModel(id,data,model);}

		var render = new ICRender.Model();
		render.addEntry(model);
		this.models[id][data] = render;
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

function dip2px(dips){
	return Math.ceil(dips * UI.getContext().getResources().getDisplayMetrics().density);
}

UI.getScreenWidth = function(){
    return UI.getContext().getWindowManager().getDefaultDisplay().getWidth();
}

UI.getScreenHeight = function(){
    return UI.getContext().getWindowManager().getDefaultDisplay().getHeight();
}

World.getRelativeCoords = function(x,y,z,side){
    var dir = [[0,-1,0],[0,1,0],[0,0,-1],[0,0,1],[-1,0,0],[1,0,0]];
    return {x:x + dir[side][0],y:y + dir[side][1],z:z + dir[side][2]}
}

Game.getSetting = function(data){
    return FileTools.ReadKeyValueFile("games/com.mojang/minecraftpe/options.txt")[data];
}

Game.getLanguage = function(){
    return Game.getSetting("game_language");
}

Game.getUIProfile = function(){
    return Game.getSetting("gfx_ui_profile");
}

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

ToolAPI.getToolMaterial = function(material){
	return ToolAPI.toolMaterials[material];
}

Recipes.deleteRecipeFor = function(recipe){
	for(let count in recipe){
		Recipes.deleteRecipe(recipe[count]);
	}
}

Recipes.removeFurnaceRecipeFor = function(recipe){
	for(let count in recipe){
		Recipes.removeFurnaceRecipe(recipe[count]);
	}
}

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

EXPORT("dip2px",dip2px);
EXPORT("Renderer",RendererRegistry);
