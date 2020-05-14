var ReactorRegistry = {
	prototypes:{},

    registerPrototype:function(id,state){
        state.getHeat = state.getHeat || function(side){
            return 0;
        }
        
        state.getEnergyOutput = state.getEnergyOutput || function(side){
            return 0;
        }

        state.getHeatLimit = state.getHeatLimit || function(side){
            return 0;
        }
        
        state.getCooling = state.getCooling || function(side){
            return 0;
        }

        // Durability
        state.getDurability = state.getDurability || function(){
            return 16384;
        }

        state.breakDurability = state.breakDurability || function(side){
            return 1;
        }

        // Destroy
        state.isDestroy = state.isDestroy || true;
        state.destroy = state.destroy || function(side,slot){}

        this.prototypes[id] = state;
        Item.setMaxDamage(id,state.getDurability());
    },

    isPrototype:function(id){
        return this.prototypes[id]?true:false;
    },

    getPrototype:function(id){
        return this.isPrototype(id)?this.prototypes[id]:false;
    },

    isValid:function(id,count,data){
        return ReactorRegistry.isPrototype(id);
    },

    getType:function(id){
        return this.getPrototype(id).type || "empty";
    }
}