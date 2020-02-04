var ToolRegistry = {
    tool:{},

    addTool:function(id,type){
        if(!this.tool[type]){this.tool[type] = []}
        this.tool[type].push(id);
    },

    getAll:function(type){
        if(!this.tool[type]){this.tool[type] = []}
        return this.tool[type];
    },

    isTool:function(id,type){
        var tool = this.getAll(type);
        for(let count = 0;count < tool.length;count++){
            if(tool[count] == id){
                return true;
            }
        }
        return false;
    }
}