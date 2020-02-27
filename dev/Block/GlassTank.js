var glass_tank = [];
for(var i = 0;i < 16;i++){glass_tank.push({name:(i + 1) + "x " + Translation.translate("Glass Tank"),texture:[["glassTank",i]],inCreative:true});}

IDRegistry.genBlockID("glassTank");
Block.createBlock("glassTank",glass_tank,"glass_tank");

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.glassTank,count:1,data:0},["ABA","B B","ABA"],["A",102,0,"B",20,0]);
    for(var data = 0;data < 15;data++){
        Recipes.addShaped({id:BlockID.glassTank,count:1,data:data + 1},["ABA","BCB","ABA"],["A",102,0,"B",20,0,"C",BlockID.glassTank,data]);
    }
});

Block.registerDropFunction("glassTank",function(){
    return [];
});

Item.registerNameOverrideFunction(BlockID.glassTank,function(item,name){
    var item = Player.getCarriedItem();
    if(item.extra){
        return name + "\n§7" + LiquidRegistry.getLiquidName(item.extra.getString("liquid_stored")) + ": " + item.extra.getFloat("liquid_amount") * 1000 + " mB";
    }
    return name;
});

Block.registerPlaceFunction(BlockID.glassTank,function(coords,item){
    Game.prevent();
    if(GenerationUtils.isTransparentBlock(World.getBlockID(coords.relative.x,coords.relative.y,coords.relative.z))){
        World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z,item.id,item.data);
        var tile = World.addTileEntity(coords.relative.x,coords.relative.y,coords.relative.z);
        if(item.extra){
            tile.liquidStorage.addLiquid(item.extra.getString("liquid_stored"),item.extra.getFloat("liquid_amount"));
        }
    }
});

ETMachine.registerPrototype(BlockID.glassTank,{    
    defaultValues:{
        isLoaded:true,
        height:0,
        limit:0
    },

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
        var block = World.getBlock(this.x,this.y,this.z);
        this.data.limit = 16 * (block.data + 1);
        this.data.isLoaded = true;
        
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
        Game.prevent();

        var stored = this.liquidStorage.getLiquidStored();
        var amount = this.liquidStorage.getAmount(stored);
        var liquid = LiquidRegistry.getItemLiquid(id,data);
        
        if(liquid){
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
        var block = World.getBlock(this.x,this.y,this.z);
        var stored = this.liquidStorage.getLiquidStored();
        var amount = this.liquidStorage.getAmount(stored);

        this.data.height += ((amount / ((block.data + 1) * 4)) * (this.data.limit / ((block.data + 1) * 4)) - this.data.height) * 0.1;
        this.data.height = Math.round(this.data.height * 100) / 100;

        if(stored){
            if(Math.abs(amount / ((block.data + 1) * 4) - this.data.height) > 0.1){
                this.updateAnim();
            }
        } else if(this.anim && this.anim.isLoaded){
            this.anim.destroy();
        }
    },

    destroyBlock:function(){
        var block = World.getBlock(this.x,this.y,this.z);
        var stored = this.liquidStorage.getLiquidStored();
        if(stored){
            var extra = new ItemExtraData();
            extra.putString("liquid_stored",stored);
            extra.putFloat("liquid_amount",this.liquidStorage.getAmount(stored));
            dropItem(this.x + 0.5,this.y,this.z + 0.5,0,BlockID.glassTank,1,block.data,extra);
        } else {
            World.drop(this.x + 0.5,this.y,this.z + 0.5,BlockID.glassTank,1,block.data);
        }
    }
});