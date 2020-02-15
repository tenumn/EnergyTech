var ETRecipe = {
    addShapedRecipe:function(output,recipe,data,extra){
        Recipes.addShaped(output,recipe,data,function(api,field,result){
            for(var i in field){
                if(extra[i] >= 1){
                    field[i].data += extra[i];
                    if(field[i].data >= Item.getMaxDamage(field[i].id)){
                        field[i].id = field[i].count = field[i].data = 0;
                    }
                } else {
                    api.decreaseFieldSlot(i);
                }
            }
        });
    },
    
    addShapeless:function(output,data,tool){
		for(let i = 0;i < tool.length;i += 2){
			data.push({id:tool[i],data:-1});
		}
		Recipes.addShapeless(output,data,function(api,field,result){
			for(var slot in field){
				for(let i = 0;i < tool.length;i += 2){
					if(field[slot].id == tool[i]){
						field[slot].data += (tool[i + 1]?tool[i + 1]:1);
						if(field[slot].data >= Item.getMaxDamage(tool[i])){
							field[slot].id = field[slot].count = field[slot].data = 0;
						}
					} else {
						api.decreaseFieldSlot(slot);
					}
				}
			}
		});
    },
	
	addHammerRecipe:function(output,material,damage){
		var hammer = ETTool.getAllTool("Hammer");
		for(let i = 0;i < hammer.length;i++){
			this.addShapeless(output,material,[hammer[i],damage?damage:1]);
		}
	},

	addCutterRecipe:function(output,material,damage){
		var cutter = ETTool.getAllTool("Cutter");
		for(let i = 0;i < cutter.length;i++){
			this.addShapeless(output,material,[cutter[i],damage?damage:1]);
		}
	},
	
	addMortarRecipe:function(output,material,damage){
		var cutter = ETTool.getAllTool("Mortar");
		for(let i = 0;i < cutter.length;i++){
			this.addShapeless(output,material,[cutter[i],damage?damage:1]);
		}
	},

    recipes:{},

    getMachineRecipe:function(name){
		this.recipes[name] = this.recipes[name] || {}
		return this.recipes[name];
	},

    getMachineRecipeOutput:function(name,id,data){
		var data = this.getMachineRecipe(name);
		if(data){
			return data[id] || data[id + ":" + data];
		}
	},

	addMaceratorRecipe:function(output,input){
		if(!input.data){
			this.getMachineRecipe("Macerator")[input.id] = output;
		} else {
			this.getMachineRecipe("Macerator")[input.id + ":" + input.data] = output;
		}
	},

	addCompressorRecipe:function(output,input){
		if(!input.data){
			this.getMachineRecipe("Compressor")[input.id] = output;
		} else {
			this.getMachineRecipe("Compressor")[input.id + ":" + input.data] = output;
		}
	},

	addBlastFurnaceRecipe:function(output,input){
		if(!input.data){
			this.getMachineRecipe("BlastFurnace")[input.id] = output;
		} else {
			this.getMachineRecipe("BlastFurnace")[input.id + ":" + input.data] = output;
		}
	},

	addCrusherRecipe:function(output,input){
		if(!input.data){
			this.getMachineRecipe("Crusher")[input.id] = output;
		} else {
			this.getMachineRecipe("Crusher")[input.id + ":" + input.data] = output;
		}
	}
}