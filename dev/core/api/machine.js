var ETMachine = {
    machineIDs:{},

    isMachine:function(id){
        return this.machineIDs[id];
    },

    registerPrototype:function(id,state){
        this.machineIDs[id] = true;

        state.id = id;

        if(state.defaultValues && state.defaultValues.isActive !== undefined){
			state.renderer = state.renderer || function(){
				TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (this.data.isActive?4:0));
			}

			state.setActive = state.setActive || function(isActive){
				if(this.data.isActive != isActive){
					this.data.isActive = isActive;
					this.renderer();
				}
			}

			state.destroy = state.destroy || function(){
				BlockRenderer.unmapAtCoords(this.x,this.y,this.z);
			}
		}

		if(!state.init && state.renderer){
			state.init = state.renderer;
        }
        
        state.setOutput = state.setOutput || function(name,id,count,data){
            var slot = this.container.getSlot(name);
            if(slot.id == id && slot.data == data && slot.count < 64 || slot.id == 0){
                slot.id = id,slot.data = data,slot.count += count;
            } else {
                World.drop(this.x + 0.5,this.y + 1,this.z + 0.5,id,count,data);
            }
    
            if(slot.count > 64){
                World.drop(this.x + 0.5,this.y + 1.5,this.z + 0.5,slot.id,1,slot.data);
                slot.count -= 1;
            }
        }

        state.getFuel = state.getFuel || function(name){
            var fuel = this.container.getSlot(name);
            var burn = Recipes.getFuelBurnDuration(fuel.id,fuel.data);
            if(burn){
                if(LiquidRegistry.getItemLiquid(fuel.id,fuel.data)){
                    var empty = LiquidRegistry.getEmptyItem(fuel.id,fuel.data);
                    fuel.id = empty.id;
                    fuel.data = empty.data;
                    return burn;
                }
                fuel.count -= 1;
                this.container.validateSlot(name);
                return burn;
            }
            return 0;
        }

        ToolAPI.registerBlockMaterial(id,"stone",1);
        Block.setDestroyTime(id,3);

        TileEntity.registerPrototype(id,state);
    },
    
    registerMachine:function(id,state){
        ICRender.getGroup("et-wire").add(id,-1);

        if(state.defaultValues){
            state.defaultValues.energy = 0;
            state.defaultValues.voltage = 0;
            state.defaultValues.voltageLast = 0;
		} else {
			state.defaultValues = {
                energy:0,
                voltage:0,
                voltageLast:0
			}
        }
        
        state.getMaxVoltage = function(){
            return 8 << this.getTier() * 2;
        }

        state.getTier = function(){
            return this.data.tier?this.data.tier:1;
        }

        state.getEnergyStorage = function(){
            return this.data.energyStorage?this.data.energyStorage:16384;
        }

        state.energyTick = state.energyTick || function(){
            this.data.voltageLast = this.data.voltage;
            this.data.voltage = 0;
        }

        this.registerPrototype(id,state);

        EnergyTileRegistry.addEnergyTypeForId(id,EU);
    },

    registerGenerator:function(id,state){
        state.isEnergySource = function(){
            return true;
        }

        state.canReceiveEnergy = function(){
            return false;
        }

        state.energyTick = state.energyTick || this.energyOutput;

        this.registerMachine(id,state,EU);
    },

    registerEnergyStorage:function(id,state){
        state.isEnergySource = function(){
			return true;
        }
        
        state.energyReceive = state.energyReceive || this.energyReceive;
        
        state.energyTick = state.energyTick || this.energyOutput;
        
        this.registerMachine(id,state,EU);
    },

    energyReceive:function(type,amount,voltage){
        var voltage_max = this.getMaxVoltage();
        if(voltage > voltage_max){
            var voltage_enabled = __config__.getBool("machine.voltage.enabled");
            if(voltage_enabled){
                World.explode(this.x + 0.5,this.y + 0.5,this.z + 0.5,0.5,true);
                this.selfDestroy();
                return 1;
            }
            var add = Math.min(voltage_max,this.getEnergyStorage() - this.data.energy);
        } else {
			var add = Math.min(amount,this.getEnergyStorage() - this.data.energy);
        }

        this.data.energy += add;
        this.data.voltage = Math.max(this.data.voltage,voltage);
        return add;
    },

    energyOutput:function(type,src){
        this.data.voltageLast = this.data.voltage;
        this.data.voltage = 0;

		var output = this.getMaxVoltage();
		if(this.data.energy >= output){
			this.data.energy += src.add(output) - output;
        }
    },
    
    setDrop:function(name,dropID,dropData){
        Block.registerDropFunction(name,function(coords,id,data,level){
            BlockRenderer.unmapAtCoords(coords.x,coords.y,coords.z);
            var item = Player.getCarriedItem();
            if(Player.getSneaking()){
                if(ETTool.isTool(item.id,"Wrench")){
                    ToolAPI.breakCarriedTool(8);
                    World.setBlock(coords.x,coords.y,coords.z,0);
                    return [[id,1,data]];
                }
            }
            if(level >= ToolAPI.getBlockDestroyLevel(id)){
                return [[dropID,1,dropData?dropData:0]];
            }
            return [];
        });

        Callback.addCallback("DestroyBlockStart",function(coords,block){
            var item = Player.getCarriedItem();
            if(Player.getSneaking() && block.id == BlockID[name] && ETTool.isTool(item.id,"Wrench")){
                Block.setTempDestroyTime(block.id,0);
            }
        });
    }
}