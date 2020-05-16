var RecipeRegistry = {
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
		if(!this.recipes[name]) this.recipes[name] = {};
		return this.recipes[name];
	},

    getRecipeResult:function(name,data){
		var recipe = this.getRecipe(name);
		if(recipe){
			if(data[2]) return recipe[data[0] + ":-1:" + data[2] + ":" + data[3]] || recipe[data[2] + ":-1:" + data[0] + ":" + data[1]] || recipe[data[0] + ":" + data[1] + ":" + data[2] + ":-1"] || recipe[data[2] + ":" + data[3] + ":" + data[0] + ":-1"] || recipe[data[0] + ":" + data[1] + ":" + data[2] + ":" + data[3]] || recipe[data[2] + ":" + data[3] + ":" + data[0] + ":" + data[1]]
			return recipe[data[0] + ":-1"] || recipe[data[0] + ":" + data[1]];
		}
	},

	addMaceratorRecipe:function(input,output){
		var recipe = this.getRecipe("Macerator");
		recipe[input.id + ":" + input.data] = output;
	},

	addCompressorRecipe:function(input,output){
		var recipe = this.getRecipe("Compressor");
		recipe[input.id + ":" + input.data] = output;
	},

	addBlastFurnaceRecipe:function(input,output){
		var recipe = this.getRecipe("BlastFurnace");
		recipe[input.id + ":" + input.data] = output;
	},

	addCrusherRecipe:function(input,output){
		var recipe = this.getRecipe("Crusher");
		recipe[input.id + ":" + input.data] = output;
	},

	addCentrifugeRecipe:function(input,output){
		var recipe = this.getRecipe("Centrifuge");
		recipe[input.id + ":" + input.data] = {output:output,count:input.count};
	},
	
	addCuttingRecipe:function(input,output){
		var recipe = this.getRecipe("Cutting");
		recipe[input.id + ":" + input.data] = output;
	},

	addOreWasherRecipe:function(input,output){
		var recipe = this.getRecipe("OreWasher");
		recipe[input.id + ":" + input.data] = output;
	},

	addCanningMachineRecipe:function(input,output,cell){
		var recipe = this.getRecipe("CanningMachine");
		recipe[input.id + ":" + input.data + ":" + cell.id + ":" + cell.data] = output;
	},

	addFarmingStationRecipe:function(input,output,dirt){
		var recipe = this.getRecipe("FarmingStation");
		recipe[input.id + ":" + input.data] = {output:output,dirt:dirt};
	},

	addWiremillRecipe:function(input,output){
		var recipe = this.getRecipe("Wiremill");
		recipe[input.id + ":" + input.data] = {output:output,count:input.count};
	},

	addAutoclaveRecipe:function(input,output){
		var recipe = this.getRecipe("Autoclave");
		recipe[input.id + ":" + input.data] = {output:output,count:input.count};
	},

	addDistilleryRecipe:function(input,output){
		var recipe = this.getRecipe("Distillery");
		recipe[input.id + ":" + input.data] = {output:output,count:input.count};
	},

	addElectrolyzerRecipe:function(input,output){
		var recipe = this.getRecipe("Electrolyzer");
		recipe[input.id + ":" + input.data] = {output:output,count:input.count};
	},

	addAutoSaieveRecipe:function(input,output){
		var recipe = this.getRecipe("AutoSaieve");
		if(!recipe[input.id + ":" + input.data]) recipe[input.id + ":" + input.data] = [];
		for(let key in output) recipe[input.id + ":" + input.data].push(output[key]);
	},
	
	addFusionReactorRecipe:function(input,output){
		var recipe = this.getRecipe("FusionReactor");
		recipe[input[0].liquid + ":" + input[1].liquid] = {input:[input[0].mB,input[1].mB],output:output};
		recipe[input[1].liquid + ":" + input[0].liquid] = {input:[input[1].mB,input[0].mB],output:output};
	},

	addAssemblyTableRecipe:function(input,output){
		var recipe = this.getRecipe("AssemblyTable");
		recipe[input[0].id + ":" + input[0].data + ":" + input[1].id + ":" + input[1].data] = {output:output,input:[input[0].count,input[1].count]};
		recipe[input[1].id + ":" + input[1].data + ":" + input[0].id + ":" + input[0].data] = {output:output,input:[input[1].count,input[0].count]};
	}
}