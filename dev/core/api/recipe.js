var Recipe = {
    addShapedRecipe:function(output,recipe,data,extra){
        Recipes.addShaped(output,recipe,data,function(api,field,result){
            for(let i in field){
                if(extra[i] >= 1){
                    field[i].data += extra[i];
                    if(field[i].data >= Item.getMaxDamage(field[i].id)) field[i].id = field[i].count = field[i].data = 0;
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
				if(field[i].id == tool){
					field[i].data++;
					if (field[i].data >= Item.getMaxDamage(tool)) field[i].id = field[i].count = field[i].data = 0;
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

    getRecipeResult:function(name,data){
		var recipe = this.getRecipe(name);
		if(recipe){
			if(data[2]) return recipe[data[0] + ":" + data[1] + ":" + data[2] + ":" + data[3]] || recipe[data[2] + ":" + data[3] + ":" + data[0] + ":" + data[1]];
			return recipe[data[0] + ":" + data[1]];
		}
	},
	
	addMaceratorRecipe:function(input,output){
		var pecipe = this.getRecipe("Macerator");
		pecipe[input.id + ":" + input.data] = output;
	},

	addCompressorRecipe:function(input,output){
		var pecipe = this.getRecipe("Compressor");
		pecipe[input.id + ":" + input.data] = output;
	},

	addBlastFurnaceRecipe:function(input,output){
		var pecipe = this.getRecipe("BlastFurnace");
		pecipe[input.id + ":" + input.data] = output;
	},

	addCrusherRecipe:function(input,output){
		var pecipe = this.getRecipe("Crusher");
		pecipe[input.id + ":" + input.data] = output;
	},

	addCentrifugeRecipe:function(input,output){
		var pecipe = this.getRecipe("Centrifuge");
		pecipe[input.id + ":" + input.data] = output;
	},
	
	addCuttingRecipe:function(input,output){
		var pecipe = this.getRecipe("Cutting");
		pecipe[input.id + ":" + input.data] = output;
	},

	addOreWasherRecipe:function(input,output){
		var pecipe = this.getRecipe("OreWasher");
		pecipe[input.id + ":" + input.data] = output;
	},

	addCanningMachineRecipe:function(input,output,cell){
		var pecipe = this.getRecipe("CanningMachine");
		pecipe[input.id + ":" + input.data] = {output:output,cell:cell};
	},

	addFarmingStationRecipe:function(input,output,dirt){
		var pecipe = this.getRecipe("FarmingStation");
		pecipe[input.id + ":" + input.data] = {output:output,dirt:dirt};
	},

	addWiremillRecipe:function(input,output){
		var pecipe = this.getRecipe("Wiremill");
		pecipe[input.id + ":" + input.data] = {output:output,count:input.count};
	},

	addAutoclaveRecipe:function(input,output){
		var pecipe = this.getRecipe("Autoclave");
		pecipe[input.id + ":" + input.data] = {output:output,count:input.count};
	},

	addDistilleryRecipe:function(input,output){
		var pecipe = this.getRecipe("Distillery");
		pecipe[input.id + ":" + input.data] = {output:output,count:input.count};
	},

	addElectrolyzerRecipe:function(input,output){
		var pecipe = this.getRecipe("Electrolyzer");
		pecipe[input.id + ":" + input.data] = {output:output,count:input.count};
	},

	addAutoSaieveRecipe:function(input,output){
		var pecipe = this.getRecipe("AutoSaieve");
		if(!pecipe[input.id + ":" + input.data]){pecipe[input.id + ":" + input.data] = [];}
		for(let key in output){
			pecipe[input.id + ":" + input.data].push(output[key]);
		}
	},
	
	addFusionReactorRecipe:function(input,output,heat){
		if(!heat){heat = 336;}
		this.getRecipe("FusionReactor")[input[0].id + ":" + input[0].data + ":" + input[1].id + ":" + input[1].data] = {output:output,heat:heat};
	}
}