// 玻璃储罐
for(var i = 0;i < 16;i++){
    var id = "glassTank" + (i + 1);

    IDRegistry.genBlockID(id);
    Block.createBlock(id,[{name:(i + 1) + "x Glass Tank",texture:[["glassTank",i]],inCreative:true},],"glass");

    Block.registerDropFunction(id,function(){return [];});
    Item.addCreativeGroup("ET-GlassTank",Translation.translate("Glass Tank"),[BlockID[id]]);
    wheat.item.setItemName(BlockID[id],function(item,name,tooltip){
        var item = Player.getCarriedItem();
        if(item.extra){
            return name + tooltip + "\n§7" + LiquidRegistry.getLiquidName(item.extra.getString("liquid_stored")) + ": " + item.extra.getFloat("liquid_amount") * 1000 + " mB";
        }
        return name + tooltip;
    });

    Block.registerPlaceFunction(BlockID[id],function(coords,item){
        var block = World.getBlock(coords.relative.x,coords.relative.y,coords.relative.z);
        if(GenerationUtils.isTransparentBlock(block.id)){
            World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z,item.id,item.data);
            var tile = World.addTileEntity(coords.relative.x,coords.relative.y,coords.relative.z);
            if(item.extra){
                tile.liquidStorage.addLiquid(item.extra.getString("liquid_stored"),item.extra.getFloat("liquid_amount"));
            }
        }
    });

    Machine.registerPrototype(BlockID[id],{    
        defaultValues:{limit:16 * (i + 1),height:0,isLoaded:true},
        
        updateAnim:function(){
            if(this.data.isLoaded){
                var stored = this.liquidStorage.getLiquidStored();
                var render = new Render();
                render.setPart("body",[{type:"box",uv:{x:0,y:0},coords:{x:0,y:-this.data.height / 2,z:0},size:{x:15,y:this.data.height * 0.9375,z:15}}],{});
                this.anim.describe({skin:"models/liquid/" + stored + ".png",render:render.getID()});
                this.anim.load();
            }
        },
    
        init:function(){            
            this.anim = new Animation.Base(this.x + 0.5,this.y - 1.5,this.z + 0.5);
            this.updateAnim();
            this.liquidStorage.setLimit(null,this.data.limit);
        },
    
        destroy:function(){
            if(this.anim){
                this.data.isLoaded = false;
                this.anim.destroy();
                this.anim = null;
            }
        },
    
        click:function(id,count,data){
            var stored = this.liquidStorage.getLiquidStored();
            var amount = this.liquidStorage.getAmount(stored);
            var liquid = LiquidRegistry.getItemLiquid(id,data);
            
            if(liquid){
                Game.prevent();
                if(!stored || stored == liquid && amount <= this.data.limit - 1){
                    var empty = LiquidRegistry.getEmptyItem(id,data);
                    this.liquidStorage.addLiquid(liquid,1);
                    Player.decreaseCarriedItem(1);
                    Player.addItemToInventory(empty.id,1,empty.data);
                }
                return;
            }
            
            var full = LiquidRegistry.getFullItem(id,data,stored);
            if(full && amount >= 1){
                this.liquidStorage.getLiquid(stored,1);
                Player.decreaseCarriedItem(1);
                Player.addItemToInventory(full.id,1,full.data);
            }
        },
        
        tick:function(){
            var block = World.getBlock(this.x,this.y,this.z),stored = this.liquidStorage.getLiquidStored(),amount = this.liquidStorage.getAmount(stored);
            this.data.height += ((amount / ((block.data + 1) * 4)) * (this.data.limit / ((block.data + 1) * 4)) - this.data.height) * 0.1;
            this.data.height = Math.round(this.data.height * 100) / 100;
    
            if(stored){
                if(World.getBlock(this.x,this.y - 1,this.z).id == this.id){
                    var tile = World.getTileEntity(this.x,this.y - 1,this.z),tile_stored = tile.liquidStorage.getLiquidStored(),tile_amount = tile.liquidStorage.getAmount(tile_stored);
                    if(!tile_stored || tile_stored == stored && tile_amount <= tile.data.limit - 1){
                        this.liquidStorage.getLiquid(stored,1);
                        tile.liquidStorage.addLiquid(stored,1);
                    }
                }
    
                if(Math.abs(amount / ((block.data + 1) * 4) - this.data.height) > 0.1){
                    this.updateAnim();
                }
            } else if(this.anim && this.anim.isLoaded){
                this.anim.destroy();
            }
        },
    
        destroyBlock:function(){
            var stored = this.liquidStorage.getLiquidStored();
            if(stored){
                var extra = new ItemExtraData();
                extra.putString("liquid_stored",stored);
                extra.putFloat("liquid_amount",this.liquidStorage.getAmount(stored));
                World.drop(this.x + 0.5,this.y + 1,this.z + 0.5,0,this.id,1,0,extra);
            } else {
                World.drop(this.x + 0.5,this.y + 1,this.z + 0.5,this.id,1,0);
            }
        }
    });
}

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.glassTank1 ,count:1,data:0},["ABA","B B","ABA"],["A",102,0,"B",20,0                          ]);
    Recipes.addShaped({id:BlockID.glassTank2 ,count:1,data:0},["ABA","BCB","ABA"],["A",102,0,"B",20,0,"C",BlockID.glassTank1,0 ]);
    Recipes.addShaped({id:BlockID.glassTank3 ,count:1,data:0},["ABA","BCB","ABA"],["A",102,0,"B",20,0,"C",BlockID.glassTank2,0 ]);
    Recipes.addShaped({id:BlockID.glassTank4 ,count:1,data:0},["ABA","BCB","ABA"],["A",102,0,"B",20,0,"C",BlockID.glassTank3,0 ]);
    Recipes.addShaped({id:BlockID.glassTank5 ,count:1,data:0},["ABA","BCB","ABA"],["A",102,0,"B",20,0,"C",BlockID.glassTank4,0 ]);
    Recipes.addShaped({id:BlockID.glassTank6 ,count:1,data:0},["ABA","BCB","ABA"],["A",102,0,"B",20,0,"C",BlockID.glassTank5,0 ]);
    Recipes.addShaped({id:BlockID.glassTank7 ,count:1,data:0},["ABA","BCB","ABA"],["A",102,0,"B",20,0,"C",BlockID.glassTank6,0 ]);
    Recipes.addShaped({id:BlockID.glassTank8 ,count:1,data:0},["ABA","BCB","ABA"],["A",102,0,"B",20,0,"C",BlockID.glassTank7,0 ]);
    Recipes.addShaped({id:BlockID.glassTank9 ,count:1,data:0},["ABA","BCB","ABA"],["A",102,0,"B",20,0,"C",BlockID.glassTank8,0 ]);
    Recipes.addShaped({id:BlockID.glassTank10,count:1,data:0},["ABA","BCB","ABA"],["A",102,0,"B",20,0,"C",BlockID.glassTank9,0 ]);
    Recipes.addShaped({id:BlockID.glassTank11,count:1,data:0},["ABA","BCB","ABA"],["A",102,0,"B",20,0,"C",BlockID.glassTank10,0]);
    Recipes.addShaped({id:BlockID.glassTank12,count:1,data:0},["ABA","BCB","ABA"],["A",102,0,"B",20,0,"C",BlockID.glassTank11,0]);
    Recipes.addShaped({id:BlockID.glassTank13,count:1,data:0},["ABA","BCB","ABA"],["A",102,0,"B",20,0,"C",BlockID.glassTank12,0]);
    Recipes.addShaped({id:BlockID.glassTank14,count:1,data:0},["ABA","BCB","ABA"],["A",102,0,"B",20,0,"C",BlockID.glassTank13,0]);
    Recipes.addShaped({id:BlockID.glassTank15,count:1,data:0},["ABA","BCB","ABA"],["A",102,0,"B",20,0,"C",BlockID.glassTank14,0]);
    Recipes.addShaped({id:BlockID.glassTank16,count:1,data:0},["ABA","BCB","ABA"],["A",102,0,"B",20,0,"C",BlockID.glassTank15,0]);
});