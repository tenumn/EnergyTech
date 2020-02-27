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
		data.push({id:tool,data:-1});
		Recipes.addShapeless(output,data,function(api,field,output){
			for (var i in field){
				if (field[i].id == tool){
					field[i].data++;
					if (field[i].data >= Item.getMaxDamage(tool)){
						field[i].id = field[i].count = field[i].data = 0;
					}
				} else {
					api.decreaseFieldSlot(i);
				}
			}
		});
    },

    recipes:{},

    getRecipe:function(name){
		if(!this.recipes[name]){this.recipes[name] = {}}
		return this.recipes[name];
	},

    getRecipeResult:function(name,id,data){
		var data = this.getRecipe(name);
		if(data){
			return data[id] || data[id + ":" + data];
		}
	},

	addMaceratorRecipe:function(input,output){
		if(!input.data){
			this.getRecipe("Macerator")[input.id] = output;
		} else {
			this.getRecipe("Macerator")[input.id + ":" + input.data] = output;
		}
	},

	addCompressorRecipe:function(input,output){
		if(!input.data){
			this.getRecipe("Compressor")[input.id] = output;
		} else {
			this.getRecipe("Compressor")[input.id + ":" + input.data] = output;
		}
	},

	addBlastFurnaceRecipe:function(input,output){
		if(!input.data){
			this.getRecipe("BlastFurnace")[input.id] = output;
		} else {
			this.getRecipe("BlastFurnace")[input.id + ":" + input.data] = output;
		}
	},

	addCrusherRecipe:function(input,output){
		if(!input.data){
			this.getRecipe("Crusher")[input.id] = output;
		} else {
			this.getRecipe("Crusher")[input.id + ":" + input.data] = output;
		}
	},

	addCentrifugeRecipe:function(input,output){
		if(!input.data){
			this.getRecipe("Centrifuge")[input.id] = output;
		} else {
			this.getRecipe("Centrifuge")[input.id + ":" + input.data] = output;
		}
	},

	addCuttingRecipe:function(input,output){
		if(!input.data){
			this.getRecipe("Cutting")[input.id] = output;
		} else {
			this.getRecipe("Cutting")[input.id + ":" + input.data] = output;
		}
	},

	addOreWasherRecipe:function(input,output){
		if(!input.data){
			this.getRecipe("OreWasher")[input.id] = output;
		} else {
			this.getRecipe("OreWasher")[input.id + ":" + input.data] = output;
		}
	},

	addFarmingStationRecipe:function(input,output,dirt){
		if(!input.data){
			this.getRecipe("FarmingStation")[input.id] = {output:output,dirt:dirt};
		} else {
			this.getRecipe("FarmingStation")[input.id + ":" + input.data] = {output:output,dirt:dirt};
		}
	}
}