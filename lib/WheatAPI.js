LIBRARY({name:"WheatAPI",version:1,shared:true,api:"CoreEngine"});

var _data_ = {
	tooltip:{}
}

var _game_ = {
	getSetting:function(data){
		return FileTools.ReadKeyValueFile("games/com.mojang/minecraftpe/options.txt")[data];
	},

	getLanguage:function(){
		return this.getSetting("game_language");
	}
}

var _player_ = {
	getInventoryItemCount:function(id,data){
		var count = 0;
		for (var slot = 8;slot <= 48;slot++){
			var inventory = Player.getInventorySlot(slot);
			if (inventory.id == id && (data == -1 || inventory.data == (data || 0))){
				count += inventory.count;
			}
		}
		return count;
	},

	getSneaking:function(){
		return Entity.getSneaking(Player.get());
	}
}

Callback.addCallback("tick",function(){
	if(_player_.getSneaking()){
		Callback.invokeCallback("PlayerSneaking");
	}
});

Callback.addCallback("EntityDeath",function(entity){
	if(entity == Player.get()){
		Callback.invokeCallback("PlayerDeath");
	}
});

var _item_ = {
	getTooltip:function(id){
		return _data_.tooltip[id]?_data_.tooltip[id]:"";
	},

	addTooltip:function(id,tooltip,colour){
		if(!colour){colour = "§7";}

        if(!this.getTooltip(id)){
            _data_.tooltip[id] = "\n" + colour + tooltip + "§n"
        } else {
            _data_.tooltip[id] += "\n" + colour + tooltip + "§n";
        }
        
        this.setItemName(id,function(item,name,tooltip){
            return name + tooltip;
        });
	},

	setItemName:function(id,state){
		Item.registerNameOverrideFunction(id,function(item,name){
			var tooltip = _item_.getTooltip(id);
            return state(item,name,tooltip);
        });
	}
}

var wheat = {game:_game_,item:_item_,player:_player_}

EXPORT("wheat",wheat);