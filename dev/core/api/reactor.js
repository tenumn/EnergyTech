var Reactor = {
    moduleIDs:{},

    module:{},

    data:{},

    getData:function(id){
        return this.data[id];
    },

    getModule:function(id){
        return this.module[id];
    },

    getModuleType:function(id){
        if(this.isModule(id)){
            return this.getData(id).type;
        }
    },

    isModule:function(id){
        return this.moduleIDs[id];
    },

    registerModule:function(id,state,data){
        if(!this.getModule(id)){
            this.moduleIDs[id] = true;
            this.module[id] = state;
            this.data[id] = data;

            wheat.item.addTooltip(id,Translation.translate("Module Type: ") + Translation.translate(data.type));
            
            wheat.item.setItemName(id,function(item,name,tooltip){
                if(item.extra){
                    return name + tooltip + "\n§7" + Translation.translate("Durability: ") + item.extra.getInt("durability");
                }
                return name + tooltip;
            });

            Block.registerDropFunctionForID(id,function(){return [];});
    
            Block.registerPlaceFunctionForID(id,function(coords,item){
                var x = coords.relative.x,y = coords.relative.y,z = coords.relative.z;
                var item = Player.getCarriedItem();
                World.setBlock(x,y,z,item.id,item.data);
                var tile = World.addTileEntity(x,y,z);
                if(item.extra){
                    tile.defaultValues.durability = item.extra.getInt("durability");
                }
            });

            var tile = TileEntity.getPrototype(id);
            if(tile){
                var prototype = TileEntity.getPrototype(id);
                if(prototype.defaultValues){
                    prototype.defaultValues.durability = data.durability;
                } else {
                    prototype.defaultValues = {
                        durability:data.durability
                    }
                }

                prototype.$tick = prototype.tick || function(){};
                prototype.$destroyBlock = prototype.destroyBlock || function(){};

                prototype.tick = function(){
                    this.$tick();
                    if(this.data.durability <= 0){
                        World.setBlock(this.x,this.y,this.z,0)
                    }
                }
                
                prototype.destroyBlock = function(){
                    this.$destroyBlock();
                    var item = Player.getCarriedItem();
                    if(ToolAPI.getBlockDestroyLevel(this.id) <= ToolAPI.getToolLevel(item.id)){
                        var extra = new ItemExtraData();
                        extra.putInt("durability",this.data.durability);
                        World.drop(this.x + 0.5,this.y,this.z + 0.5,0,this.id,1,0,extra);
                    }
                }
            } else {
                Machine.registerPrototype(id,{
                    defaultValues:{
                        durability:data.durability
                    },

                    tick:function(){
                        if(this.data.durability <= 0){
                            World.setBlock(this.x,this.y,this.z,0)
                        }
                    },

                    destroyBlock:function(){
                        var item = Player.getCarriedItem();
                        if(ToolAPI.getBlockDestroyLevel(this.id) <= ToolAPI.getToolLevel(item.id)){
                            var extra = new ItemExtraData();
                            extra.putInt("durability",this.data.durability);
                            World.drop(this.x + 0.5,this.y,this.z + 0.5,0,this.id,1,0,extra);
                        }
                    }
                });
            }
        }
    }
}