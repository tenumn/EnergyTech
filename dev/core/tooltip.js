var TooltipRegistry = {
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