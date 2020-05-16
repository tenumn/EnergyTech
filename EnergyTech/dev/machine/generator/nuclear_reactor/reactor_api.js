function Reactor(){
    this.isDestroy = true;

    this.getHeat = function(side,slot,coords){
        return 0;
    }

    this.getEnergyOutput = function(side,slot,coords){
        return 0;
    }
    
    this.getCooling = function(side,slot,coords){
        return 0;
    }

    this.getDurability = function(){
        return 10000;
    }

    this.breakDurability = function(side,slot,coords){
        return 1;
    }

    this.destroy = function(side,slot,coords){

    }
}

var ReactorRegistry = {
	prototypes:{},

    registerPrototype:function(id,state){
        if(!this.isPrototype(id)){
            var reactor = new Reactor();
            for(let i in state) reactor[i] = state[i];
            this.prototypes[id] = reactor;
            
            Item.setMaxDamage(id,state.getDurability());
        }
    },

    isPrototype:function(id){
        return this.prototypes[id]?true:false;
    },

    getPrototype:function(id){
        if(this.isPrototype(id)) return this.prototypes[id];
    },

    isValid:function(id,count,data){
        return ReactorRegistry.isPrototype(id);
    },

    getType:function(id){
        return this.getPrototype(id).type || "empty";
    }
}