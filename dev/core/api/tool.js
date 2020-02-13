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
        for(let count = 0;count < tool.length;count++){
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
            return name + TooltipRegistry.getTooltip(item.id);
        });
    }
}

CreateWrench = function(id,name,texture,damage){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    ETTool.registerTool(ItemID[id],"Wrench");
    Item.setMaxDamage(ItemID[id],damage);
}

CreateHammer = function(id,name,texture,damage){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    ETTool.registerTool(ItemID[id],"Hammer");
    Item.setMaxDamage(ItemID[id],damage);
}

CreateCutter = function(id,name,texture,damage){
    IDRegistry.genItemID(id);
    Item.createItem(id,name,texture,{stack:1});
    ETTool.registerTool(ItemID[id],"Cutter");
    Item.setMaxDamage(ItemID[id],damage);
}