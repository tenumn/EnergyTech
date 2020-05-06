var Tool = {
    tool:{},
    
    registerTool:function(id,type){
        if(!this.tool[type]) this.tool[type] = [];
        this.tool[type].push(id);
    },
    
    getAllTool:function(type){
        if(!this.tool[type]) this.tool[type] = [];
        return this.tool[type];
    },
    
    isTool:function(id,type){
        var tool = this.getAllTool(type);
        for(let count in tool){
            if(tool[count] == id) return true;
        }
        return false;
    },
    
    HAMMER_RECIOE:{},
    
    getHammerRecioe:function(block){
        return this.HAMMER_RECIOE[block];
    },

    setHammerDestroyDrop:function(blockID,dropID,maxCount,dropData,minCount){
        if(!minCount) minCount = maxCount;
        
        this.HAMMER_RECIOE[blockID] = {id:dropID,count:[minCount,maxCount],data:dropData || 0}

        Block.registerDropFunctionForID(blockID,function(coords,id,data){
            var drop = Tool.getHammerRecioe(id);
            if(Tool.isTool(Player.getCarriedItem().id,"Hammer")){
                return [[drop.id,random(drop.count[0],drop.count[1]),drop.data]];
            }
            return [[id,1,data]];
        });
    }
}

ToolType.lighter = {
    useItem:function(coords,item,block){
        var x = coords.relative.x,y = coords.relative.y,z = coords.relative.z;
        if(World.isAirBlock(x,y,z)){
            World.setBlock(x,y,z,51);
            World.playSoundAtEntity(Player.get(),"fire.ignite",1,0.8);
            ToolAPI.breakCarriedTool(1);
        }
    }
}

ToolType.hammer = {
    enchantType:Native.EnchantType.pickaxe,
    damage:2,
    blockTypes:["dirt","stone"]
}