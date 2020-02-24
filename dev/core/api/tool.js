var ETTool = {
    tool:{},
    type:ToolType,

    registerTool:function(id,type){
        if(!this.tool[type]){this.tool[type] = []}
        this.tool[type].push(id);
    },
    
    getAllTool:function(type){
        if(!this.tool[type]){this.tool[type] = []}
        return this.tool[type];
    },

    isTool:function(id,type){
        var tool = this.getAllTool(type);
        for(let count in tool){
            if(tool[count] == id){
                return true;
            }
        }
        return false;
    },

    tooltips:{},

    getTooltip:function(id){
        return this.tooltips[id];
    },
    
    addTooltip:function(id,tooltip,colour){
        if(!colour){colour = "§7";}
        if(!this.getTooltip(id)){
            this.tooltips[id] = "\n" + colour + tooltip + "§n"
        } else {
            this.tooltips[id] += "\n" + colour + tooltip + "§n";
        }
        
        Item.registerNameOverrideFunction(id,function(item,name){
            return name + ETTool.getTooltip(item.id);
        });
    },

    setHammerDestroyOreDrop:function(blockID,dropID,dropCount,dropData,random){
        Block.registerDropFunctionForID(blockID,function(coords,id,data){
            var item = Player.getCarriedItem();
            if(ETTool.isTool(item.id,"Hammer")){
                return [[dropID,dropCount + (random?Math.round(Math.random()):0),dropData]];
            }
            return [[id,1,data]];
        });
    },

    setHammerDestroyDrop:function(blockID,dropID,dropCount,dropData,random){
        Block.registerDropFunctionForID(blockID,function(coords,id,data){
            var item = Player.getCarriedItem();
			if(block.id == blockID && ETTool.isTool(item.id,"Hammer")){
                return [[dropID,dropCount + (random?Math.round(Math.random()):0),dropData]];
            };
            return [[id,1,data]];
        });
    }
}

CreateWrench = function(id,name,texture,damage){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    ETTool.registerTool(ItemID[id],"Wrench");
    Item.setMaxDamage(ItemID[id],damage);
}

CreateHammer = function(id,name,texture,material){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    ETTool.registerTool(ItemID[id],"Hammer");
    ToolAPI.setTool(ItemID[id],material.toLowerCase(),ToolType.pickaxe);
}

CreateFile = function(id,name,texture,damage){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    ETTool.registerTool(ItemID[id],"File");
    Item.setMaxDamage(ItemID[id],damage);
}

CreateCutter = function(id,name,texture,damage){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    ETTool.registerTool(ItemID[id],"Cutter");
    Item.setMaxDamage(ItemID[id],damage);
}

CreateMortar = function(id,name,texture,damage){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    ETTool.registerTool(ItemID[id],"Mortar");
    Item.setMaxDamage(ItemID[id],damage);
}

CreateSword = function(id,name,texture,material){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    ETTool.registerTool(ItemID[id],"Sword");
    ToolAPI.setTool(ItemID[id],material,ToolType.sword);
}

CreateShovel = function(id,name,texture,material){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    ETTool.registerTool(ItemID[id],"Shovel");
    ToolAPI.setTool(ItemID[id],material,ToolType.shovel);
}

CreatePickaxe = function(id,name,texture,material){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    ETTool.registerTool(ItemID[id],"Pickaxe");
    ToolAPI.setTool(ItemID[id],material,ToolType.pickaxe);
}

CreateAxe = function(id,name,texture,material){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    ETTool.registerTool(ItemID[id],"Axe");
    ToolAPI.setTool(ItemID[id],material,ToolType.axe);
}

CreateHoe = function(id,name,texture,material){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    ETTool.registerTool(ItemID[id],"Hoe");
    ToolAPI.setTool(ItemID[id],material,ToolType.hoe);
}

CreateTool = function(name,material,data){
    ToolAPI.addToolMaterial(name.toLowerCase(),data);

    CreateSword(  name.toLowerCase() + "Sword"  ,name + " Sword"  ,{name:name.toLowerCase() + "_sword"  },name.toLowerCase());
    CreateShovel( name.toLowerCase() + "Shovel" ,name + " Shovel" ,{name:name.toLowerCase() + "_shovel" },name.toLowerCase());
    CreatePickaxe(name.toLowerCase() + "Pickaxe",name + " Pickaxe",{name:name.toLowerCase() + "_pickaxe"},name.toLowerCase());
    CreateAxe(    name.toLowerCase() + "Axe"    ,name + " Axe"    ,{name:name.toLowerCase() + "_axe"    },name.toLowerCase());
    CreateHoe(    name.toLowerCase() + "Hoe"    ,name + " Hoe"    ,{name:name.toLowerCase() + "_hoe"    },name.toLowerCase());

    Callback.addCallback("PreLoaded",function(){
        Recipes.addShaped({id:ItemID[name.toLowerCase() + "Sword"  ],count:1,data:0},[ "a" , "a" , "b" ],["a",material,0,"b",280,0]);
        Recipes.addShaped({id:ItemID[name.toLowerCase() + "Shovel" ],count:1,data:0},[ "a" , "b" , "b" ],["a",material,0,"b",280,0]);
        Recipes.addShaped({id:ItemID[name.toLowerCase() + "Pickaxe"],count:1,data:0},["aaa"," b "," b "],["a",material,0,"b",280,0]);
        Recipes.addShaped({id:ItemID[name.toLowerCase() + "Axe"    ],count:1,data:0},["aa" ,"ab" ," b" ],["a",material,0,"b",280,0]);
        Recipes.addShaped({id:ItemID[name.toLowerCase() + "Hoe"    ],count:1,data:0},["aa" ," b" ," b" ],["a",material,0,"b",280,0]);
    });
}