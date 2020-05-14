// [铁储罐]Iron Tank
IDRegistry.genBlockID("ironTank");
Block.createBlock("ironTank",[
    {name:"Iron Tank",texture:[["iron_tank_bottom",0],["iron_tank_top",0],["iron_tank",0]],inCreative:true}
],{opaque:true,destroytime:3});
Block.setBlockShape(BlockID.ironTank,{x:0.0625,y:0,z:0.0625},{x:0.9375,y:1,z:0.9375},-1);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.ironTank,count:1,data:0},["AAA","BCB","AAA"],["A",20,0,"B",ItemID.plateIron,0,"C",BlockID.glassTank,0]);
});

MachineRegistry.registerPrototype(BlockID.ironTank,{
    init:function(){
        this.liquidStorage.setLimit(null,32);
    },

    click:function(id,count,data){
        var stored = this.liquidStorage.getLiquidStored();
        var amount = this.liquidStorage.getAmount(stored);
        var liquid = Liquid.getItemLiquid(id,data);
        var storage = Liquid.getItemStorage(id,data);

        if(liquid){
            if(!stored || stored == liquid && amount + storage <= 32){
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

        if(stored){
            if(World.getBlockID(this.x,this.y - 1,this.z) == this.id){
                var tile = World.getTileEntity(this.x,this.y - 1,this.z);
                var tile_stored = tile.liquidStorage.getLiquidStored();
                var tile_amount = tile.liquidStorage.getAmount(tile_stored);
                if(tile && (!tile_stored || tile_stored == stored && tile_amount < 32)){
                    this.liquidStorage.getLiquid(stored,1);
                    tile.liquidStorage.addLiquid(stored,1);
                }
            }
        }
    }
});