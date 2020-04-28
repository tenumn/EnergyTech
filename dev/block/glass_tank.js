Block.createSpecialType({
    solid:true,
    opaque:true,
    destroytime:3,
    explosionres:6
},"glass_tank");

// 玻璃储罐
IDRegistry.genBlockID("glassTank");
Block.createBlock("glassTank",[
    {name:"1x Glass Tank",texture:[["glass_tank",0]],inCreative:true},
    {name:"2x Glass Tank",texture:[["glass_tank",1]],inCreative:true},
    {name:"3x Glass Tank",texture:[["glass_tank",2]],inCreative:true},
    {name:"4x Glass Tank",texture:[["glass_tank",3]],inCreative:true},
    {name:"5x Glass Tank",texture:[["glass_tank",4]],inCreative:true},
    {name:"6x Glass Tank",texture:[["glass_tank",5]],inCreative:true},
    {name:"7x Glass Tank",texture:[["glass_tank",6]],inCreative:true},
    {name:"8x Glass Tank",texture:[["glass_tank",7]],inCreative:true},
    {name:"9x Glass Tank",texture:[["glass_tank",8]],inCreative:true},
    {name:"10x Glass Tank",texture:[["glass_tank",9]],inCreative:true},
    {name:"11x Glass Tank",texture:[["glass_tank",10]],inCreative:true},
    {name:"12x Glass Tank",texture:[["glass_tank",11]],inCreative:true},
    {name:"13x Glass Tank",texture:[["glass_tank",12]],inCreative:true},
    {name:"14x Glass Tank",texture:[["glass_tank",13]],inCreative:true},
    {name:"15x Glass Tank",texture:[["glass_tank",14]],inCreative:true},
    {name:"16x Glass Tank",texture:[["glass_tank",15]],inCreative:true}
],"glass_tank");

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.glassTank,count:1,data:0},["ABA","B B","ABA"],["A",102,0,"B",20,0]);
    for(var data = 0;data < 15;data++){
        Recipes.addShaped({id:BlockID.glassTank,count:1,data:data + 1},["ABA","BCB","ABA"],["A",102,0,"B",20,0,"C",BlockID.glassTank,data]);
    }
});

Block.registerDropFunction("glassTank",function(){return [];});

Item.setItemName(BlockID.glassTank,function(item,name,tooltip){
    var item = Player.getCarriedItem();
    if(item.extra){
        return name + tooltip + "\n§7" + LiquidRegistry.getLiquidName(item.extra.getString("liquid_stored")) + ": " + item.extra.getFloat("liquid_amount") * 1000 + " mB";
    }
    return name + tooltip;
});

Block.registerPlaceFunction("glassTank",function(coords,item){
    Game.prevent();

    var place = coords,block = World.getBlock(coords.x,coords.y,coords.z);
    if(!canTileBeReplaced(block.id,block.data)){
        place = coords.relative,block = World.getBlock(place.x,place.y,place.z);
        if(!canTileBeReplaced(block.id,block.data)){
            return;
        }
    }
    
    World.setBlock(place.x,place.y,place.z,item.id,item.data);
    var tile = World.addTileEntity(place.x,place.y,place.z);
    if(item.extra){
        tile.liquidStorage.addLiquid(item.extra.getString("liquid_stored"),item.extra.getFloat("liquid_amount"));
    }

    Player.decreaseCarriedItem(1);
});

Machine.registerPrototype(BlockID.glassTank,{    
    defaultValues:{
        isLoaded:true,
        height:0,
        limit:0
    },

    updateAnim:function(){
        if(this.data.isLoaded){
            var render = new Render();
            var stored = this.liquidStorage.getLiquidStored();
            render.setPart("body",[{type:"box",uv:{x:0,y:0},coords:{x:0,y:-this.data.height / 2,z:0},size:{x:14,y:this.data.height * 0.9375,z:14}}],{});
            this.anim.describe({skin:"models/liquid/" + stored + ".png",render:render.getID()});
            this.anim.load();
        }
    },

    init:function(){
        this.data.limit = 16 * (World.getBlockData(this.x,this.y,this.z) + 1);
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
        var stored = this.liquidStorage.getLiquidStored();
        var amount = this.liquidStorage.getAmount(stored);
        var liquid = Liquid.getItemLiquid(id,data);
        if(liquid){
            if(!stored || stored == liquid && amount <= this.data.limit - 1){
                var empty = Liquid.getEmptyItem(id,data);
                this.liquidStorage.addLiquid(liquid,1);
                Player.decreaseCarriedItem(1);
                Player.addItemToInventory(empty.id,1,empty.data);
            }
            return;
        }

        var full = Liquid.getFullItem(id,data,stored);
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
            if(Math.abs(amount / ((block.data + 1) * 4) - this.data.height) > 0.1) this.updateAnim();
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
            World.dropItem(this.x + 0.5,this.y,this.z + 0.5,0,this.id,1,block.data,extra);
        } else {
            World.drop(this.x + 0.5,this.y,this.z + 0.5,this.id,1,block.data);
        }
    }
});