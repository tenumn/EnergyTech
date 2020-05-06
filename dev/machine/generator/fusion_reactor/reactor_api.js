var FusionReactor = {
    module:{},

    getData:function(id){
        return this.module[id];
    },

    isModule:function(id){
        return this.module[id]?true:false;
    },

    getModuleData:function(id){
        if(this.isModule(id)){
            return this.getData(id).data;
        }
    },

    getModuleType:function(id){
        if(this.isModule(id)){
            return this.getData(id).type;
        }
    },

    registerModule:function(id,module,type){
        if(!this.isModule(id)){
            this.module[id] = {type:type,data:module};
        }
    }
}