ToolType.drill = {
    enchantType:Native.EnchantType.pickaxe,

    damage:0,

    blockTypes:["stone"],

    onDestroy:function(item,coords,block){
        var damage = 16;
        for(let x = 0;x < 3;x++){
            for(let y = 0;y < 3;y++){
                for(let z = 0;z < 3;z++){
                    var id = World.getBlockID(coords.x - 1 + x,coords.y - 1 + y,coords.z - 1 + z);
                    var level = ToolAPI.getBlockDestroyLevel(id);
                    var material = ToolAPI.getBlockMaterialName(id);
                    if(this.toolMaterial.level >= level && material == "stone") damage += 16;
                }
            }
        }

		if(Block.getDestroyTime(block.id) > 0){
            var max_damage = Item.getMaxDamage(item.id);
            if(item.data + damage < max_damage){
                item.data += damage;
                return true;
            } else if(item.data + damage > max_damage){
                item.data = (max_damage - 1);
                return false;
            }
        }
        
		return false;
    },
    
    destroyBlock:function(coords,side,item,block){
        var damage = Item.getMaxDamage(item.id);
        if(item.data < damage){
            for(let x = 0;x < 3;x++){for(let y = 0;y < 3;y++){for(let z = 0;z < 3;z++){
                var id = World.getBlock(coords.x - 1 + x,coords.y - 1 + y,coords.z - 1 + z).id;
                var level = ToolAPI.getBlockDestroyLevel(id),material = ToolAPI.getBlockMaterialName(id);
                if(this.toolMaterial.level >= level && material == "stone") World.destroyBlock(coords.x - 1 + x,coords.y - 1 + y,coords.z - 1 + z,true);
            }}}
        }
    },

    onBroke:function(item){
        return true;
    }
}

// 钻头
IDRegistry.genItemID("drill");
Item.createItem("drill","Drill",{name:"drill"},{stack:1,isTech:true});
Tool.registerTool(ItemID.drill,"Drill");
ToolAPI.setTool(ItemID.drill,"iron",ToolType.drill);
ChargeItemRegistry.registerItem(ItemID.drill,"Eu",16384,power(1),1,"tool",true);

Tooltip.tier(ItemID.drill,1);
Item.setItemName(ItemID.drill,Tooltip.energyStored);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.drill,count:1,data:Item.getMaxDamage(ItemID.drill)},[
        "bc ",
        "cbc",
        " ca"
    ],["a",ItemID.electricMotor,0,"b",ItemID.plateIron,0,"c",ItemID.gearIron,0]);
});