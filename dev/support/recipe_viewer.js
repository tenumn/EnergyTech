ModAPI.addAPICallback("RecipeViewer",function(api){
    let RVCore = api.Core;

    // [粗制高炉]]Crude Blast Furnace
    RVCore.registerRecipeType("ETCrudeBlastFurnace",{
		contents:{
            icon:BlockID.crudeBlastFurnace,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_0"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"blank_slot",size:120},
				"output0":{type:"slot",x:600,y:190,bitmap:"blank_slot",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = ETRecipe.getRecipeResult("BlastFurnace",id,data);
                return result?[{input:[{id:id,count:1,data:data}],output:[result]}]:[];
            }

            let item,list = [],recipe = ETRecipe.getRecipe("BlastFurnace");
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
    
    // [压缩机]Compressor
    RVCore.registerRecipeType("ETCompressor",{
		contents:{
            icon:BlockID.compressor,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_0"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"blank_slot",size:120},
				"output0":{type:"slot",x:600,y:190,bitmap:"blank_slot",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = ETRecipe.getRecipeResult("Compressor",id,data);
                return result?[{input:[{id:id,count:1,data:data}],output:[result]}]:[];
            }

            let item,list = [],recipe = ETRecipe.getRecipe("Compressor");
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
    RVCore.registerRecipeType("ETCrusher",{
		contents:{
            icon:BlockID.crusher,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_0"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"blank_slot",size:120},
				"output0":{type:"slot",x:600,y:190,bitmap:"blank_slot",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = ETRecipe.getRecipeResult("Crusher",id,data);
                return result?[{input:[{id:id,count:1,data:data}],output:[result]}]:[];
            }

            let item,list = [],recipe = ETRecipe.getRecipe("Crusher");
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
    RVCore.registerRecipeType("ETMacerator",{
		contents:{
            icon:BlockID.macerator,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_0"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"blank_slot",size:120},
				"output0":{type:"slot",x:600,y:190,bitmap:"blank_slot",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = ETRecipe.getRecipeResult("Macerator",id,data);
                return result?[{input:[{id:id,count:1,data:data}],output:[result]}]:[];
            }

            let item,list = [],recipe = ETRecipe.getRecipe("Macerator");
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
    RVCore.registerRecipeType("ETCutting",{
		contents:{
            icon:BlockID.cutting,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_0"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"blank_slot",size:120},
				"output0":{type:"slot",x:600,y:190,bitmap:"blank_slot",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = ETRecipe.getRecipeResult("Cutting",id,data);
                return result?[{input:[{id:id,count:1,data:data}],output:[result]}]:[];
            }

            let item,list = [],recipe = ETRecipe.getRecipe("Cutting");
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
    RVCore.registerRecipeType("ETCentrifuge",{
		contents:{
            icon:BlockID.centrifuge,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_0"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"blank_slot",size:120},
                "output0":{type:"slot",x:600,y:130,bitmap:"blank_slot",size:120},
                "output1":{type:"slot",x:720,y:130,bitmap:"blank_slot",size:120},
                "output2":{type:"slot",x:600,y:250,bitmap:"blank_slot",size:120},
                "output3":{type:"slot",x:720,y:250,bitmap:"blank_slot",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = ETRecipe.getRecipeResult("Centrifuge",id,data);
                return result?[{input:[{id:id,count:1,data:data}],output:result}]:[];
            }

            let item,list = [],recipe = ETRecipe.getRecipe("Centrifuge");
            for(let key in recipe){
                result = recipe[key];
                for(var i = 0;i <= 4;i++){
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
    RVCore.registerRecipeType("ETOreWasher",{
		contents:{
            icon:BlockID.oreWasher,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_0"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"blank_slot",size:120},
                "output0":{type:"slot",x:600,y:130,bitmap:"blank_slot",size:120},
                "output1":{type:"slot",x:720,y:130,bitmap:"blank_slot",size:120},
                "output2":{type:"slot",x:600,y:250,bitmap:"blank_slot",size:120},
                "output3":{type:"slot",x:720,y:250,bitmap:"blank_slot",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = ETRecipe.getRecipeResult("OreWasher",id,data);
                return result?[{input:[{id:id,count:1,data:data}],output:result}]:[];
            }

            let item,list = [],recipe = ETRecipe.getRecipe("OreWasher");
            for(let key in recipe){
                result = recipe[key];
                for(var i = 0;i <= 4;i++){
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
    RVCore.registerRecipeType("ETFarmingStation",{
		contents:{
            icon:BlockID.farmingStation,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_0"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"blank_slot",size:120},
                "output0":{type:"slot",x:600,y:130,bitmap:"blank_slot",size:120},
                "output1":{type:"slot",x:720,y:130,bitmap:"blank_slot",size:120},
                "output2":{type:"slot",x:600,y:250,bitmap:"blank_slot",size:120},
                "output3":{type:"slot",x:720,y:250,bitmap:"blank_slot",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = ETRecipe.getRecipeResult("FarmingStation",id,data);
                return result?[{input:[{id:id,count:1,data:data}],output:result}]:[];
            }

            let item,list = [],recipe = ETRecipe.getRecipe("FarmingStation");
            for(let key in recipe){
                result = recipe[key];
                for(var i = 0;i <= 4;i++){
                    if(result[i] && result[i].id == id && (result[i].data == data || data == -1)){
                        item = key.split(":");
                        list.push({input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1] || 0)}],output:result});
                    }
                }
            }

            return list;
		}
	});
});