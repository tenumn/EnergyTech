IDRegistry.genItemID("ETICON");
Item.createItem("ETICON","Debug",{name:"ETICON"},{isTech:(__config__.getBool("debug")?false:true)});

Callback.addCallback("ItemUse",function(coords,item,block){
    var item = Player.getCarriedItem();
    if(item.id == ItemID.ETICON){
        Game.prevent();
        if(Machine.isMachine(block.id)){
            var tile = World.getTileEntity(coords.x,coords.y,coords.z);
            Debug.message(Translation.translate("Energy: ") + tile.data.energy);
            Debug.message(Translation.translate("Voltage: ") + tile.data.voltage);
            Debug.message(Translation.translate("Power Tier: ") + tile.data.tier);
            Debug.message(Translation.translate("Energy Storage: ") + tile.data.energy_storage);
        }
    }
});