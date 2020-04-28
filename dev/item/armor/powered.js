var POWERED_FUNCS = {
    hurt:function(params,slot,index,maxDamage){
        if(slot.data < maxDamage){
            Player.addEffect(10,params.damage,20);
            Player.addEffect(11,params.damage,20);

            var health = Player.getHealth();
            if(health <= 20) Player.setHealth(Math.min(20 - health,params.damage + health));
            
            var data = Math.min(slot.data + (params.damage * 16),maxDamage);
            Player.setArmorSlot(index,slot.id,slot.count,data,slot.extra);
        }

        return false;
    },

    tick:function(slot,index,maxDamage){
        if(World.getThreadTime()%20 == 0){
            var item = Player.getCarriedItem();
            if(ChargeItemRegistry.isValidItem(item.id,"Eu",1,"tool")){
                var energy = ChargeItemRegistry.addEnergyTo(item,"Eu",maxDamage - slot.data,power(2),1);
                if(energy > 0){
                    Player.setCarriedItem(item.id,1,item.data,item.extra);
                    Player.setArmorSlot(index,slot.id,1,slot.data + energy,slot.extra);
                }
            }
        }

        return false;
    }
}

IDRegistry.genItemID("helmetPowered");
IDRegistry.genItemID("chestplatePowered");
IDRegistry.genItemID("leggingsPowered");
IDRegistry.genItemID("bootsPowered");

Item.createArmorItem("helmetPowered","Powered Helmet",{name:"powered_helmet"},{type:"helmet",armor:10,durability:262144,texture:"armor/powered_1.png",isTech:true});
Item.createArmorItem("chestplatePowered","Powered Chestplate",{name:"powered_chestplate"},{type:"chestplate",armor:13,durability:262144,texture:"armor/powered_1.png",isTech:true});
Item.createArmorItem("leggingsPowered","Powered Leggings",{name:"powered_leggings"},{type:"leggings",armor:12,durability:262144,texture:"armor/powered_2.png",isTech:true});
Item.createArmorItem("bootsPowered","Powered Boots",{name:"powered_boots"},{type:"boots",armor:9,durability:262144,texture:"armor/powered_1.png",isTech:true});

ChargeItemRegistry.registerItem(ItemID.helmetPowered,"Eu",262144,power(2),2,"armor",true);
ChargeItemRegistry.registerItem(ItemID.chestplatePowered,"Eu",262144,power(2),2,"armor",true);
ChargeItemRegistry.registerItem(ItemID.leggingsPowered,"Eu",262144,power(2),2,"armor",true);
ChargeItemRegistry.registerItem(ItemID.bootsPowered,"Eu",262144,power(2),2,"armor",true);

Armor.registerFuncs("helmetPowered"    ,POWERED_FUNCS);
Armor.registerFuncs("chestplatePowered",POWERED_FUNCS);
Armor.registerFuncs("leggingsPowered"  ,POWERED_FUNCS);
Armor.registerFuncs("bootsPowered"     ,POWERED_FUNCS);

Item.setItemName(ItemID.chestplatePowered,Tooltip.energyStored);
Item.setItemName(ItemID.helmetPowered    ,Tooltip.energyStored);
Item.setItemName(ItemID.leggingsPowered  ,Tooltip.energyStored);
Item.setItemName(ItemID.bootsPowered     ,Tooltip.energyStored);