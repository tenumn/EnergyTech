ModAPI.addAPICallback("RecipeViewer",function(api){
    let Core = api.Core;

    // [粗制高炉]Crude Blast Furnace
    Core.registerRecipeType("ET-CrudeBlastFurnace",{
		contents:{
            icon:BlockID.crudeBlastFurnace,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"slot.empty",size:120},
				"output0":{type:"slot",x:600,y:190,bitmap:"slot.empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = Recipe.getRecipeResult("BlastFurnace",[id,data]);
                return result?[{input:[{id:id,count:1,data:data}],output:result}]:[];
            }

            let item,list = [],recipe = Recipe.getRecipe("BlastFurnace");
            for(let key in recipe){
                result = recipe[key];
                if(result[0].id == id && (result[0].data == data || data == -1)){
                    item = key.split(":");
                    list.push({input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1] || 0)}],output:result});
                }
            }

            return list;
		}
    });

    // [高炉]Blast Furnace
    Core.registerRecipeType("ET-BlastFurnace",{
		contents:{
            icon:BlockID.blastFurnace,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"slot.empty",size:120},
                "output0":{type:"slot",x:600,y:190,bitmap:"slot.empty",size:120},
                "output1":{type:"slot",x:720,y:190,bitmap:"slot.empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = Recipe.getRecipeResult("BlastFurnace",[id,data]);
                return result?[{input:[{id:id,count:1,data:data}],output:result}]:[];
            }

            let item,list = [],recipe = Recipe.getRecipe("BlastFurnace");
            for(let key in recipe){
                result = recipe[key];
                for(let i in result){
                    if(result[i].id == id && (result[i].data == data || data == -1)){
                        item = key.split(":");
                        list.push({input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1] || 0)}],output:result});
                    }
                }
            }

            return list;
		}
    });

    // [压缩机]Compressor
    Core.registerRecipeType("ET-Compressor",{
		contents:{
            icon:BlockID.compressor,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"slot.empty",size:120},
				"output0":{type:"slot",x:600,y:190,bitmap:"slot.empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = Recipe.getRecipeResult("Compressor",[id,data]);
                return result?[{input:[{id:id,count:1,data:data}],output:[result]}]:[];
            }

            let item,list = [],recipe = Recipe.getRecipe("Compressor");
            for(let key in recipe){
                result = recipe[key];
                if(result.id == id && (result.data == data || data == -1)){
                    item = key.split(":");
                    list.push({input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1] || 0)}],output:[result]});
                }
            }

            return list;
		}
    });

    // [破碎机]Crusher
    Core.registerRecipeType("ET-Crusher",{
		contents:{
            icon:BlockID.crusher,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"slot.empty",size:120},
				"output0":{type:"slot",x:600,y:190,bitmap:"slot.empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = Recipe.getRecipeResult("Crusher",[id,data]);
                return result?[{input:[{id:id,count:1,data:data}],output:[result]}]:[];
            }

            let list = [],recipe = Recipe.getRecipe("Crusher");
            for(let key in recipe){
                result = recipe[key];
                if(result.id == id && (result.data == data || data == -1)){
                    item = key.split(":");
                    list.push({input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1] || 0)}],output:[result]});
                }
            }

            return list;
		}
	});

    // [打粉机]Macerator
    Core.registerRecipeType("ET-Macerator",{
		contents:{
            icon:BlockID.macerator,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"slot.empty",size:120},
				"output0":{type:"slot",x:600,y:190,bitmap:"slot.empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = Recipe.getRecipeResult("Macerator",[id,data]);
                return result?[{input:[{id:id,count:1,data:data}],output:[result]}]:[];
            }

            let item,list = [],recipe = Recipe.getRecipe("Macerator");
            for(let key in recipe){
                result = recipe[key];
                if(result.id == id && (result.data == data || data == -1)){
                    item = key.split(":");
                    list.push({
                        input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1] || 0)}],
                        output:[result]
                    });
                }
            }

            return list;
		}
    });

    // [切割机]Cutting
    Core.registerRecipeType("ET-Cutting",{
		contents:{
            icon:BlockID.cutting,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"slot.empty",size:120},
				"output0":{type:"slot",x:600,y:190,bitmap:"slot.empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = Recipe.getRecipeResult("Cutting",[id,data]);
                return result?[{input:[{id:id,count:1,data:data}],output:[result]}]:[];
            }

            let item,list = [],recipe = Recipe.getRecipe("Cutting");
            for(let key in recipe){
                result = recipe[key];
                if(result.id == id && (result.data == data || data == -1)){
                    item = key.split(":");
                    list.push({
                        input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1] || 0)}],
                        output:[result]
                    });
                }
            }

            return list;
		}
    });
    
    // [离心机]Centrifuge
    Core.registerRecipeType("ET-Centrifuge",{
		contents:{
            icon:BlockID.centrifuge,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"slot.empty",size:120},
                "output0":{type:"slot",x:600,y:130,bitmap:"slot.empty",size:120},
                "output1":{type:"slot",x:720,y:130,bitmap:"slot.empty",size:120},
                "output2":{type:"slot",x:600,y:250,bitmap:"slot.empty",size:120},
                "output3":{type:"slot",x:720,y:250,bitmap:"slot.empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = Recipe.getRecipeResult("Centrifuge",[id,data]);
                return result?[{input:[{id:id,count:1,data:data}],output:result}]:[];
            }

            let item,list = [],recipe = Recipe.getRecipe("Centrifuge");
            for(let key in recipe){
                result = recipe[key];
                for(let i = 0;i <= 4;i++){
                    if(result[i] && result[i].id == id && (result[i].data == data || data == -1)){
                        item = key.split(":");
                        list.push({input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1] || 0)}],output:result});
                    }
                }
            }

            return list;
		}
	});

    // [洗矿机]Ore Washer
    Core.registerRecipeType("ET-OreWasher",{
		contents:{
            icon:BlockID.oreWasher,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"slot.empty",size:120},
                "output0":{type:"slot",x:600,y:130,bitmap:"slot.empty",size:120},
                "output1":{type:"slot",x:720,y:130,bitmap:"slot.empty",size:120},
                "output2":{type:"slot",x:600,y:250,bitmap:"slot.empty",size:120},
                "output3":{type:"slot",x:720,y:250,bitmap:"slot.empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = Recipe.getRecipeResult("OreWasher",[id,data]);
                return result?[{input:[{id:id,count:1,data:data}],output:result}]:[];
            }

            let item,list = [],recipe = Recipe.getRecipe("OreWasher");
            for(let key in recipe){
                result = recipe[key];
                for(let i = 0;i <= 4;i++){
                    if(result[i] && result[i].id == id && (result[i].data == data || data == -1)){
                        item = key.split(":");
                        list.push({input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1] || 0)}],output:result});
                    }
                }
            }

            return list;
		}
	});
	
	// [种植站]Farming Station
    Core.registerRecipeType("ET-FarmingStation",{
		contents:{
            icon:BlockID.farmingStation,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
                "input0":{type:"slot",x:280,y:190,bitmap:"slot.empty",size:120},
                "input1":{type:"slot",x:280,y:310,bitmap:"slot.empty",size:120},
                "output0":{type:"slot",x:600,y:130,bitmap:"slot.empty",size:120},
                "output1":{type:"slot",x:720,y:130,bitmap:"slot.empty",size:120},
                "output2":{type:"slot",x:600,y:250,bitmap:"slot.empty",size:120},
                "output3":{type:"slot",x:720,y:250,bitmap:"slot.empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = Recipe.getRecipeResult("FarmingStation",[id,data]);
                return result?[{input:[{id:id,count:1,data:data},{id:recipe.dirt.id,count:1,data:recipe.dirt.data}],output:result.output}]:[];
            }

            let item,list = [],recipe = Recipe.getRecipe("FarmingStation");
            for(let key in recipe.output){
                result = recipe.output[key];
                for(let i = 0;i <= 4;i++){
                    if(result[i] && result[i].id == id && (result[i].data == data || data == -1)){
                        item = key.split(":");
                        list.push({input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1] || 0)},{id:recipe.dirt.id,count:1,data:recipe.dirt.data}],output:result});
                    }
                }
            }

            return list;
		}
    });
    
    // [锤子]Hammer
    Core.registerRecipeType("ET-Hammer",{
		contents:{
            icon:ItemID.hammerIron,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"slot.empty",size:120},
				"output0":{type:"slot",x:600,y:190,bitmap:"slot.empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = Tool.HAMMER_RECIOE[id];
                return result?[{input:[{id:id,count:1,data:data}],output:[result]}]:[];
            }

            let item,list = [],recipe = Tool.HAMMER_RECIOE;
            for(let key in recipe){
                result = recipe[key];
                if(result.id == id && (result.data == data || data == -1)){
                    item = key.split(":");
                    list.push({
                        input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1] || 0)}],
                        output:[result]
                    });
                }
            }

            return list;
		}
    });

    // [线缆轧制机]Wiremill
    Core.registerRecipeType("ET-Wiremill",{
		contents:{
            icon:BlockID.wiremill,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"slot.empty",size:120},
				"output0":{type:"slot",x:600,y:190,bitmap:"slot.empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = Recipe.getRecipeResult("Wiremill",[id,data]);
                return result?[{input:[{id:id,count:result.count,data:data}],output:[result.output]}]:[];
            }

            let item,list = [],recipe = Recipe.getRecipe("Wiremill");
            for(let key in recipe.output){
                result = recipe.output[key];
                if(result.id == id && (result.data == data || data == -1)){
                    item = key.split(":");
                    list.push({input:[{id:parseInt(item[0]),count:result.count,data:parseInt(item[1] || 0)}],output:[result.output]});
                }
            }

            return list;
		}
    });

    // [高压釜]Autoclave
    Core.registerRecipeType("ET-Autoclave",{
		contents:{
            icon:BlockID.autoclave,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"slot.empty",size:120},
				"output0":{type:"slot",x:600,y:190,bitmap:"slot.empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = Recipe.getRecipeResult("Autoclave",[id,data]);
                return result?[{input:[{id:id,count:result.count,data:data}],output:[result.output]}]:[];
            }

            let item,list = [],recipe = Recipe.getRecipe("Autoclave");
            for(let key in recipe.output){
                result = recipe.output[key];
                if(result.id == id && (result.data == data || data == -1)){
                    item = key.split(":");
                    list.push({input:[{id:parseInt(item[0]),count:result.count,data:parseInt(item[1] || 0)}],output:[result.output]});
                }
            }

            return list;
		}
    });

    // [电解机]Electrolyzer
    Core.registerRecipeType("ET-Electrolyzer",{
    	contents:{
    		icon:BlockID.electrolyzer,
        
    		drawing:[
    			{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
    			{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
    		],
        
    		elements:{
    			"input0":{type:"slot",x:280,y:190,bitmap:"slot.empty",size:120},
                "output0":{type:"slot",x:600,y:130,bitmap:"slot.empty",size:120},
                "output1":{type:"slot",x:720,y:130,bitmap:"slot.empty",size:120},
                "output2":{type:"slot",x:600,y:250,bitmap:"slot.empty",size:120},
                "output3":{type:"slot",x:720,y:250,bitmap:"slot.empty",size:120}
    		}
    	},
    
    	getList:function(id,data,isUsage){
    		if(isUsage){
    			let result = Recipe.getRecipeResult("Electrolyzer",[id,data]);
    			return result?[{input:[{id:id,count:result.count,data:data}],output:result.output}]:[];
    		}
        
    		let item,list = [],recipe = Recipe.getRecipe("Electrolyzer");
    		for(let key in recipe.output){
    			result = recipe.output[key];
    			if(result.id == id && (result.data == data || data == -1)){
    				item = key.split(":");
    				list.push({input:[{id:parseInt(item[0]),count:result.count,data:parseInt(item[1] || 0)}],output:result.output});
    			}
    		}
        
    		return list;
    	}
    });
    
    // [蒸馏室]Distillery
    Core.registerRecipeType("ET-Distillery",{
    	contents:{
    		icon:BlockID.distillery,
        
    		drawing:[
    			{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
    			{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
    		],
        
    		elements:{
    			"input0":{type:"slot",x:280,y:190,bitmap:"slot.empty",size:120},
                "output0":{type:"slot",x:600,y:130,bitmap:"slot.empty",size:120},
                "output1":{type:"slot",x:720,y:130,bitmap:"slot.empty",size:120},
                "output2":{type:"slot",x:600,y:250,bitmap:"slot.empty",size:120},
                "output3":{type:"slot",x:720,y:250,bitmap:"slot.empty",size:120}
    		}
    	},
    
    	getList:function(id,data,isUsage){
    		if(isUsage){
    			let result = Recipe.getRecipeResult("Distillery",[id,data]);
    			return result?[{input:[{id:id,count:result.count,data:data}],output:result.output}]:[];
    		}
        
    		let item,list = [],recipe = Recipe.getRecipe("Distillery");
    		for(let key in recipe.output){
    			result = recipe.output[key];
    			if(result.id == id && (result.data == data || data == -1)){
    				item = key.split(":");
    				list.push({input:[{id:parseInt(item[0]),count:result.count,data:parseInt(item[1] || 0)}],output:result.output});
    			}
    		}
        
    		return list;
    	}
    });

    // [核聚变反应堆]Fusion Reactor
    Core.registerRecipeType("ET-FusionReactor",{
    	contents:{
    		icon:BlockID.fusionReactor,
        
    		drawing:[
    			{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
    			{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
    		],
        
    		elements:{
                "input0":{type:"slot",x:280,y:130,bitmap:"slot.empty",size:120},
                "input1":{type:"slot",x:280,y:250,bitmap:"slot.empty",size:120},
                
                "output0":{type:"slot",x:600,y:130,bitmap:"slot.empty",size:120},
                "output1":{type:"slot",x:720,y:130,bitmap:"slot.empty",size:120},
                "output2":{type:"slot",x:600,y:250,bitmap:"slot.empty",size:120},
                "output3":{type:"slot",x:720,y:250,bitmap:"slot.empty",size:120},

                "textHeat":{type:"text",x:430,y:410}
    		}
    	},
        
    	getList:function(id,data,isUsage){
            let list = [],recipe = Recipe.getRecipe("FusionReactor");
            
            if(isUsage){
                for(let key in recipe){
                    let item = key.split(":");
                    if(parseInt(item[0]) == id && parseInt(item[1]) == data){
                        let result = Recipe.getRecipeResult("FusionReactor",[parseInt(item[0]),parseInt(item[1]),parseInt(item[2]),parseInt(item[3])]);
                        return result?[{input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1])},{id:parseInt(item[2]),count:1,data:parseInt(item[3])}],output:result.output,heat:result.heat}]:[];
                    }
                    if(parseInt(item[2]) == id && parseInt(item[3]) == data){
                        let result = Recipe.getRecipeResult("FusionReactor",[parseInt(item[0]),parseInt(item[1]),parseInt(item[2]),parseInt(item[3])]);
                        return result?[{input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1])},{id:parseInt(item[2]),count:1,data:parseInt(item[3])}],output:result.output,heat:result.heat}]:[];
                    }
                }
            }

            for(let key in recipe.output){
                result = recipe.output[key];
                if(result.id == id && result.data == data){
                    let item = key.split(":");
                    let result = Recipe.getRecipeResult("FusionReactor",[parseInt(item[0]),parseInt(item[1]),parseInt(item[2]),parseInt(item[3])]);
                    list.push({input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1])},{id:parseInt(item[2]),count:1,data:parseInt(item[3])}],output:result.output,heat:result.heat});
                }
            }

    		return list;
        },
        
		onOpen:function(elements,data){
			let element = elements.get("textHeat");
			element.onBindingUpdated("text",data?"Heat: " + data.heat/2 + " ~ " + data.heat*2:"");
		}
    });

    // [装罐机]Canning Machine
    Core.registerRecipeType("ET-CanningMachine",{
		contents:{
            icon:BlockID.canningMachine,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
                "input0":{type:"slot",x:280,y:190,bitmap:"slot.empty",size:120},
                "input1":{type:"slot",x:280,y:310,bitmap:"slot.cell",size:120},
                "output":{type:"slot",x:600,y:130,bitmap:"slot.empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = Recipe.getRecipeResult("CanningMachine",[id,data]);
                return result?[{input:[{id:id,count:1,data:data},{id:recipe.cell.id,count:1,data:recipe.cell.data}],output:result.output}]:[];
            }

            let item,list = [],recipe = Recipe.getRecipe("CanningMachine");
            for(let key in recipe.output){
                result = recipe.output[key];
                for(let i = 0;i <= 4;i++){
                    if(result[i] && result[i].id == id && (result[i].data == data || data == -1)){
                        item = key.split(":");
                        list.push({input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1] || 0)},{id:recipe.cell.id,count:1,data:recipe.cell.data}],output:result});
                    }
                }
            }

            return list;
		}
    });
});