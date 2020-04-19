var Tool = {
    tool:{},
    
    registerTool:function(id,type){
        if(!this.tool[type]){this.tool[type] = []}
        this.tool[type].push(id);
        
        Item.addTooltip(id,Translation.translate("Tool Type: ") + Translation.translate(type));
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

Callback.addCallback("DestroyBlock",function(coords,block,player){
    var item = Player.getCarriedItem(),material = ToolAPI.getBlockMaterial(block.id);
    if(Tool.isTool(item.id,"Shovel") && material.dirt){
        Block.setTempDestroyTime(block.id,0.5);
    }
});

var OreIDs = {};
for(id in BlockID){
    var tile = TileEntity.isTileEntityBlock(BlockID[id]);
    if(id[0] == "o" && id[1] == "r" && id[2] == "e" && !tile){
        OreIDs[BlockID[id]] = true;
    }
}