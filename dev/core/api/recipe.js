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

	addFileRecipe:function(output,material,damage){
		var file = ETTool.getAllTool("File");
		for(let i = 0;i < file.length;i++){
			this.addShapeless(output,material,[file[i],damage?damage:1]);
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

	addMaceratorRecipe:function(output,input){
		if(!input.data){
			this.getRecipe("Macerator")[input.id] = output;
		} else {
			this.getRecipe("Macerator")[input.id + ":" + input.data] = output;
		}
	},

	addCompressorRecipe:function(output,input){
		if(!input.data){
			this.getRecipe("Compressor")[input.id] = output;
		} else {
			this.getRecipe("Compressor")[input.id + ":" + input.data] = output;
		}
	},

	addBlastFurnaceRecipe:function(output,input){
		if(!input.data){
			this.getRecipe("BlastFurnace")[input.id] = output;
		} else {
			this.getRecipe("BlastFurnace")[input.id + ":" + input.data] = output;
		}
	},

	addCrusherRecipe:function(output,input){
		if(!input.data){
			this.getRecipe("Crusher")[input.id] = output;
		} else {
			this.getRecipe("Crusher")[input.id + ":" + input.data] = output;
		}
	},

	addCentrifugeRecipe:function(output,input){
		if(!input.data){
			this.getRecipe("Centrifuge")[input.id] = output;
		} else {
			this.getRecipe("Centrifuge")[input.id + ":" + input.data] = output;
		}
	},

	addCuttingRecipe:function(output,input){
		if(!input.data){
			this.getRecipe("Cutting")[input.id] = output;
		} else {
			this.getRecipe("Cutting")[input.id + ":" + input.data] = output;
		}
	},

	addOreWasherRecipe:function(output,input){
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

ETRecipe.addFarmingStationRecipe({id:6,data:0},[{id:17,count:4,data:0},{id:6,count:1,data:0},{id:260,count:1,data:0}],{id:3,data:0});
ETRecipe.addFarmingStationRecipe({id:6,data:1},[{id:17,count:4,data:1},{id:6,count:1,data:1}],{id:3,data:0});
ETRecipe.addFarmingStationRecipe({id:6,data:2},[{id:17,count:4,data:2},{id:6,count:1,data:2}],{id:3,data:0});
ETRecipe.addFarmingStationRecipe({id:6,data:3},[{id:17,count:4,data:3},{id:6,count:1,data:3}],{id:3,data:0});
ETRecipe.addFarmingStationRecipe({id:6,data:4},[{id:162,count:4,data:0},{id:6,count:1,data:4}],{id:3,data:0});
ETRecipe.addFarmingStationRecipe({id:6,data:5},[{id:162,count:4,data:1},{id:6,count:1,data:5}],{id:3,data:0});
ETRecipe.addFarmingStationRecipe({id:81,data:0},[{id:81,count:2,data:0}],{id:12,data:-1});
ETRecipe.addFarmingStationRecipe({id:83,data:0},[{id:83,count:2,data:0}],{id:12,data:-1});
ETRecipe.addFarmingStationRecipe({id:295,data:0},[{id:296,count:1,data:0},{id:295,count:1,data:0}],{id:3,data:0});
ETRecipe.addFarmingStationRecipe({id:361,data:0},[{id:86,count:1,data:0}],{id:3,data:0});
ETRecipe.addFarmingStationRecipe({id:362,data:0},[{id:103,count:1,data:0}],{id:3,data:0});
ETRecipe.addFarmingStationRecipe({id:372,data:0},[{id:372,count:2,data:0}],{id:88,data:0});
ETRecipe.addFarmingStationRecipe({id:391,data:0},[{id:391,count:1,data:0}],{id:3,data:0});
ETRecipe.addFarmingStationRecipe({id:392,data:0},[{id:392,count:1,data:0},{id:394,count:1,data:0}],{id:3,data:0});
ETRecipe.addFarmingStationRecipe({id:435,data:0},[{id:434,count:1,data:0},{id:435,count:1,data:0}],{id:3,data:0});