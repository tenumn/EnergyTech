// 玻璃储罐
IDRegistry.genBlockID("glassTank");
Block.createBlock("glassTank",[
    {name:"Glass Tank",texture:[["glass_tank_bottom",0],["glass_tank_top",0],["glass_tank",0]],inCreative:true}
],{opaque:true,destroytime:3});
Block.setBlockShape(BlockID.glassTank,{x:0.0625,y:0,z:0.0625},{x:0.9375,y:1,z:0.9375},-1);

ICRender.addGroupFor(BlockID.glassTank,["input-liquid-pipe","output-liquid-pipe","transport-liquid-pipe"]);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.glassTank,count:1,data:0},["ABA","B B","ABA"],["A",102,0,"B",20,0]);
});

MachineRegistry.registerPrototype(BlockID.glassTank,{
    defaultValues:{
        height:0
    },

    updateAnim:function(){
        if(this.anim){
            var stored = this.liquidStorage.getLiquidStored();
            var render = new Render();
            render.setPart("body",[{type:"box",uv:{x:0,y:0},coords:{x:0,y:-this.data.height / 2,z:0},size:{x:13,y:this.data.height * 0.9375,z:13}}],{});
            this.anim.describe({skin:"models/liquid/" + stored + ".png",render:render.getID()});
            this.anim.load();
        }
    },

    init:function(){
        this.anim = new Animation.Base(this.x + 0.5,this.y - 1.5,this.z + 0.5);
        this.updateAnim();

        this.liquidStorage.setLimit(null,16);
    },

    destroy:function(){
        if(this.anim){
            this.anim.destroy();
            this.anim = null;
        }
    },

    click:function(id,count,data){
        var stored = this.liquidStorage.getLiquidStored();
        var amount = this.liquidStorage.getAmount(stored);
        var liquid = Liquid.getItemLiquid(id,data);
        var storage = Liquid.getItemStorage(id,data);

        if(liquid){
            if(!stored || stored == liquid && amount + storage <= 16){
                this.liquidStorage.addLiquid(liquid,storage);
                Player.decreaseCarriedItem(1);

                var empty = Liquid.getEmptyItem(id,data);
                Player.addItemToInventory(empty.id,1,empty.data);
            }
            return true;
        }

        var full = Liquid.getFullItem(id,data,stored);
        if(full && amount >= full.amount){
            this.liquidStorage.getLiquid(stored,full.amount);
            Player.addItemToInventory(full.id,1,full.data);
            Player.decreaseCarriedItem(1);
        }

        Game.message(LiquidRegistry.getLiquidName(stored) + " - " + parseInt(amount * 1000) + "mB");
    },
    
    tick:function(){
        var stored = this.liquidStorage.getLiquidStored();
        var amount = this.liquidStorage.getAmount(stored);

        this.data.height += ((amount / 4) * 4 - this.data.height) * 0.1;
        this.data.height = parseInt(this.data.height * 100) / 100;

        if(stored){
            if(World.getBlockID(this.x,this.y - 1,this.z) == this.id){
                var tile = World.getTileEntity(this.x,this.y - 1,this.z);
                if(tile){
                    var tile_stored = tile.liquidStorage.getLiquidStored();
                    var tile_amount = tile.liquidStorage.getAmount(tile_stored);
                    if(!tile_stored || tile_stored == stored && tile_amount < 16){
                        this.liquidStorage.getLiquid(stored,1);
                        tile.liquidStorage.addLiquid(stored,1);
                    }
                }
            }
            if(Math.abs(amount / 4 - this.data.height) > 0.1) {this.updateAnim();}
        } else if(this.anim) {this.anim.destroy();}
    }
});