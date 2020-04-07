var Tool = {
    tool:{},
    
    registerTool:function(id,type){
        if(!this.tool[type]){this.tool[type] = []}
        this.tool[type].push(id);
        
        Item.setCategory(id,Native.ItemCategory.TOOL);
        wheat.item.addTooltip(id,Translation.translate("Tool Type: ") + Translation.translate(type));
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
    
    HAMMER_RECIOE:{},
    
    setHammerDestroyDrop:function(blockID,dropID,dropCount,dropData,random){
        this.HAMMER_RECIOE[blockID] = {id:dropID,count:dropCount,data:dropData}
        Block.registerDropFunctionForID(blockID,function(coords,id,data){
            var item = Player.getCarriedItem();
			if(Tool.isTool(item.id,"Hammer")){
                return [[dropID,dropCount + (random?Math.round(Math.random()):0),dropData]];
            };
            return [[id,1,data]];
        });
    }
}

CreateWrench = function(id,name,texture,damage){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    Tool.registerTool(ItemID[id],"Wrench");
    Item.setMaxDamage(ItemID[id],damage);
    Item.addCreativeGroup("ET-Wrench",Translation.translate("Wrench"),[ItemID[id]]);
}

CreateHammer = function(id,name,texture,material){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    Tool.registerTool(ItemID[id],"Hammer");
    ToolAPI.setTool(ItemID[id],material.toLowerCase(),ToolType.pickaxe);
    Item.addCreativeGroup("ET-Hammer",Translation.translate("Hammer"),[ItemID[id]]);
}

CreateFile = function(id,name,texture,damage){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    Tool.registerTool(ItemID[id],"File");
    Item.setMaxDamage(ItemID[id],damage);
    Item.addCreativeGroup("ET-File",Translation.translate("File"),[ItemID[id]]);
}

CreateCutter = function(id,name,texture,damage){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    Tool.registerTool(ItemID[id],"Cutter");
    Item.setMaxDamage(ItemID[id],damage);
    Item.addCreativeGroup("ET-Cutter",Translation.translate("Cutter"),[ItemID[id]]);
}

CreateMortar = function(id,name,texture,damage){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    Tool.registerTool(ItemID[id],"Mortar");
    Item.setMaxDamage(ItemID[id],damage);
    Item.addCreativeGroup("ET-Mortar",Translation.translate("Mortar"),[ItemID[id]]);
}

CreateSword = function(id,name,texture,material){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    Tool.registerTool(ItemID[id],"Sword");
    ToolAPI.setTool(ItemID[id],material,ToolType.sword);
    Item.addCreativeGroup("ET-Sword",Translation.translate("Sword"),[ItemID[id]]);
}

CreateShovel = function(id,name,texture,material){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    Tool.registerTool(ItemID[id],"Shovel");
    ToolAPI.setTool(ItemID[id],material,ToolType.shovel);
    Item.addCreativeGroup("ET-Shovel",Translation.translate("Shovel"),[ItemID[id]]);
}

CreatePickaxe = function(id,name,texture,material){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    Tool.registerTool(ItemID[id],"Pickaxe");
    ToolAPI.setTool(ItemID[id],material,ToolType.pickaxe);
    Item.addCreativeGroup("ET-Pickaxe",Translation.translate("Pickaxe"),[ItemID[id]]);
}

CreateAxe = function(id,name,texture,material){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    Tool.registerTool(ItemID[id],"Axe");
    ToolAPI.setTool(ItemID[id],material,ToolType.axe);
    Item.addCreativeGroup("ET-Axe",Translation.translate("Axe"),[ItemID[id]]);
}

CreateHoe = function(id,name,texture,material){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    Tool.registerTool(ItemID[id],"Hoe");
    ToolAPI.setTool(ItemID[id],material,ToolType.hoe);
    Item.addCreativeGroup("ET-Hoe",Translation.translate("Hoe"),[ItemID[id]]);
}

CreateTool = function(name,data){
    ToolAPI.addToolMaterial(name.toLowerCase(),data);

    CreateSword  ("sword"   + name,name + " Sword"  ,{name:"sword"   + name},name.toLowerCase());
    CreateShovel ("shovel"  + name,name + " Shovel" ,{name:"shovel"  + name},name.toLowerCase());
    CreatePickaxe("pickaxe" + name,name + " Pickaxe",{name:"pickaxe" + name},name.toLowerCase());
    CreateAxe    ("axe"     + name,name + " Axe"    ,{name:"axe"     + name},name.toLowerCase());
    CreateHoe    ("hoe"     + name,name + " Hoe"    ,{name:"hoe"     + name},name.toLowerCase());
}

Callback.addCallback("DestroyBlock",function(coords,block,player){
    var item = Player.getCarriedItem(),material = ToolAPI.getBlockMaterial(block.id);
    if(Tool.isTool(item.id,"Shovel") && material.dirt){
        Block.setTempDestroyTime(block.id,0.5);
    }
});