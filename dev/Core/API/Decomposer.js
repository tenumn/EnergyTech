var Decomposer = {
    chance:{},
    solid:{},
    liquid:{},
    
    recipe:{},

    decode:function(obj){
        var result = [];
        for(let key in obj){for(let i = obj[key]; i--;){
            result.push(Element[key] || Molecule[key] || "");
        }}
        return result;
    },
    
    addRecipe:function(id,data,obj,chance){
        var result = this.decode(obj);
        this.solid[data == -1 ? id :id + ":" + data] = chance?function(){if(Math.random() < chance){return result;}return [];}:function(){return result;};
    },
  
    addRecipeSelect:function(id,data,array,chance){
        for(let i = array.length; i--;){array[i] = this.decode(array[i]);}
        this.solid[data == -1 ? id :id + ":" + data] = chance ?function(){if(Math.random() < chance){return array[Math.random() * array.length | 0];}return [];}:function(){return array[Math.random() * array.length | 0];};
    },
  
    getRecipe:function(id,data){
        return this.solid[id] || this.solid[id + ":" + data];
    },
  
    addRecipeLiquid:function(liquid,amount,obj,chance){
        var result = this.decode(obj);
        this.liquid[liquid] = {amount:amount,func:chance?function(){if(Math.random() < chance){return result;}return [];}:function(){return result;}};
    },
  
    addRecipeLiquidSelect:function(liquid,amount,array,chance){
        for(let i = array.length; i--;){
            array[i] = this.decode(array[i]);
        }
        this.liquid[liquid] = {amount:amount,func:chance?function(){if(Math.random() < chance){return array[Math.random() * array.length | 0];}return [];}:function(){return array[Math.random() * array.length | 0];}
      };
    },
  
    getRecipeLiquid:function(liquid){
        return this.liquid[liquid];
    }
  }