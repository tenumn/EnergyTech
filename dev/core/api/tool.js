var Tool = {
    tool:{},
    
    registerTool:function(id,type){
        if(!this.tool[type]){this.tool[type] = []}
        this.tool[type].push(id);
        
        Tooltip.toolType(id,type);
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
    
    setHammerDestroyDrop:function(blockID,dropID,dropMaxCount,dropData,dropMinCount){
        dropData = dropData || 0,dropMinCount = dropMinCount || dropMaxCount;
        this.HAMMER_RECIOE[blockID] = {id:dropID,count:dropMaxCount,data:dropData}
        Block.registerDropFunctionForID(blockID,function(coords,id,data){
            var item = Player.getCarriedItem();
			if(Tool.isTool(item.id,"Hammer")){
                return [[dropID,random(dropMinCount,dropMaxCount),dropData]];
            };
            return [[id,1,data]];
        });
    }
}