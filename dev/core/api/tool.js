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

ToolType.lighter = {
    useItem:function(coords,item,block){
        var x = coords.relative.x,y = coords.relative.y,z = coords.relative.z;
        if(World.getBlock(x,y,z).id == 0){
            World.setBlock(x,y,z,51);
            World.playSoundAtEntity(Player.get(),"fire.ignite",1,0.8);
            ToolAPI.breakCarriedTool(1);
        }
    }
}