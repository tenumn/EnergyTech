var NuclearReactor = {
    data:{},

    getData:function(id){
        if(this.isModule(id)){
            return this.data[id];
        }
        return null;
    },

    isModule:function(id){
        if(this.data[id]){
            return true;
        }
        return false;
    },

    getModule:function(id){
        return this.getData(id).module;
    },

    getModuleType:function(id){
        return this.getData(id).type;
    },

    registerModule:function(id,prototype,data){
        if(!this.isModule(id)){
            data.module = prototype;
            this.data[id] = data;

            Tooltip.moduleType(id,data.type);
            
            Item.setItemName(id,function(item,name,tooltip){
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

            var state = TileEntity.getPrototype(id);
            if(state){
                if(state.defaultValues){
                    state.defaultValues.durability = data.durability;
                } else {
                    state.defaultValues = {
                        durability:data.durability
                    }
                }

                state.$tick = state.tick || function(){};
                state.$destroyBlock = state.destroyBlock || function(){};

                state.tick = function(){
                    this.$tick();

                    if(this.data.durability <= 0){
                        this.selfDestroy();
                    }
                }
                
                state.destroyBlock = function(){
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
                            this.selfDestroy();
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