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

	addFarmingStationRecipe:function(output,input){
		if(!input.data){
			this.getRecipe("FarmingStation")[input.id] = output;
		} else {
			this.getRecipe("FarmingStation")[input.id + ":" + input.data] = output;
		}
	}
}

// 小麦
ETRecipe.addFarmingStationRecipe([{id:296,count:1,data:0},{id:295,count:1,data:0}],{id:295,data:0});
// 南瓜
ETRecipe.addFarmingStationRecipe([{id:86,count:1,data:0}],{id:361,data:0});
// 西瓜
ETRecipe.addFarmingStationRecipe([{id:103,count:1,data:0}],{id:362,data:0});
// 胡萝卜
ETRecipe.addFarmingStationRecipe([{id:391,count:1,data:0}],{id:391,data:0});
// 马铃薯
ETRecipe.addFarmingStationRecipe([{id:392,count:1,data:0},{id:394,count:1,data:0}],{id:392,data:0});
// 甜菜
ETRecipe.addFarmingStationRecipe([{id:434,count:1,data:0},{id:435,count:1,data:0}],{id:435,data:0});