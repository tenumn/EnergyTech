var MachineRegistry = {
    machineIDs:{},

    isMachine:function(id){
        return this.machineIDs[id];
    },

    registerPrototype:function(id,state){
        this.machineIDs[id] = true;
        state.id = id;

        state.playSound = state.playSound || function(name){
            var dimension = Player.getDimension();
            if((!this.__sound || !this.__sound.isPlaying()) && this.dimension == dimension){
                this.__sound = SoundAPI.playSoundAt(this,name,true,this.data.sound_volume || 16);
            }
        }

        state.stopSound = state.stopSound || function(){
            if(this.__sound && this.__sound.isPlaying()){
                this.__sound.stop();
                this.__sound = null;
            }
        }

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

            state.activate = state.activate || function(sound){
                this.setActive(true);
                if(this.__sound){
                    this.playSound(sound);
                }
            }

            state.deactive = state.deactive || function(){
                this.setActive(false);
                if(this.__sound){
                    this.stopSound();
                }
            }

            state.destroy = state.destroy || function(){
                this.deactive();
                BlockRenderer.unmapAtCoords(this.x,this.y,this.z);
            }
		}

		if(!state.init && state.renderer){
			state.init = state.renderer;
        }
        
        state.setOutputSlot = state.setOutputSlot || function(name,id,count,data){
            var slot = this.container.getSlot(name);
            if(slot.id == 0 || slot.id == id && slot.data == data && slot.count < 64){
                slot.id = id,slot.data = data,slot.count += count; 
                this.container.validateSlot(name);
            } else {
                World.drop(this.x + 0.5,this.y + 1.5,this.z + 0.5,id,count,data);
            }
    
            if(slot.count > 64){
                World.drop(this.x + 0.5,this.y + 1.5,this.z + 0.5,slot.id,1,slot.data),slot.count--;
                this.container.validateSlot(name);
            }
        }
    
        state.getSlotBurnDuration = state.getSlotBurnDuration || function(name){
            var slot = this.container.getSlot(name);
            var burn = Recipes.getFuelBurnDuration(slot.id,slot.data);
            if(burn){
                if(Liquid.getItemLiquid(slot.id,slot.data)){
                    var empty = Liquid.getEmptyItem(slot.id,slot.data);
                    slot.id = empty.id,slot.data = empty.data;
                    return burn;
                } slot.count--;
                this.container.validateSlot(name);
                return burn;
            }
            return 0;
        }

        ToolAPI.registerBlockMaterial(id,"stone",1,true);
        TileEntity.registerPrototype(id,state);
    },
    
    registerMachine:function(id,state,type){
        if(state.defaultValues){
            state.defaultValues.tier = state.defaultValues.tier || 1;
            state.defaultValues.energy = 0;
            state.defaultValues.voltage = 0;
            state.defaultValues.last_voltage = 0;
            state.defaultValues.energy_storage = state.defaultValues.energy_storage || 16384;
		} else {
			state.defaultValues = {
                tier:1,
                energy:0,
                voltage:0,
                last_voltage:0,
                energy_storage:16384
			}
        }
        
        state.getTier = state.getTier || function(){
            return this.data.tier;
        }

        state.getMaxVoltage = state.getMaxVoltage || function(){
            return power(this.getTier() + 1);
        }

        state.getEnergyStorage = state.getEnergyStorage || function(){
            return this.data.energy_storage;
        }

        state.energyTick = state.energyTick || function(){
            this.data.last_voltage = this.data.voltage;
            this.data.voltage = 0;
        }

        Tooltip.tier(id,state.defaultValues.tier);
        Item.addTooltip(id,Translation.translate("Destroy Tool Type: ") + Translation.translate("Wrench"));
        
        this.registerPrototype(id,state);
        EnergyTileRegistry.addEnergyTypeForId(id,type || EU);
    },

    registerGenerator:function(id,state,type){
        state.isEnergySource = function(){return true;}
        state.canReceiveEnergy = function(){return false;}

        state.energyTick = state.energyTick || this.energyOutput;

        this.registerMachine(id,state,type || EU);
    },

    registerEnergyStorage:function(id,state,type){
        state.isEnergySource = function(){return true;}
        
        state.energyTick = state.energyTick || this.energyOutput;
        state.energyReceive = state.energyReceive || this.energyReceive;
        
        this.registerMachine(id,state,type || EU);
    },

    registerEUMachine:function(id,state){
        ICRender.getGroup("eu-wire").add(id,-1);

        this.registerMachine(id,state,EU);
    },

    registerEUGenerator:function(id,state){
        ICRender.getGroup("eu-wire").add(id,-1);

        this.registerGenerator(id,state,EU);
    },

    registerEUEnergyStorage:function(id,state){
        ICRender.getGroup("eu-wire").add(id,-1);

        this.registerEnergyStorage(id,state,EU);
    },

    energyReceive:function(type,amount,voltage){
        var voltage_max = this.getMaxVoltage();
        if(voltage > voltage_max){
            var enabled = __config__.getBool("machine.voltage_enabled");
            if(enabled){
                World.explode(this.x + 0.5,this.y + 0.5,this.z + 0.5,0.5,true);
                World.setBlock(this.x,this.y,this.z,0);
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
        this.data.last_voltage = this.data.voltage;
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
            if(Tool.isTool(item.id,"Wrench")){
                World.setBlock(coords.x,coords.y,coords.z,0);
                return [[id,1,data]];
            }

            var block = ToolAPI.getBlockDestroyLevel(id);
            if(level >= block) return [[dropID,1,dropData || 0]];
            return [];
        });
    },

    isValidEUItem:function(id,count,data,container){
		return ChargeItemRegistry.isValidItem(id,"Eu",container.tileEntity.getTier());
	},
	
	isValidEUStorage:function(id,count,data,container){
		return ChargeItemRegistry.isValidStorage(id,"Eu",container.tileEntity.getTier());
    },
    
    wireIDs:{},

    isWire:function(id){
        return this.wireIDs[id];
    },
    
    registerEUWire:function(id,volt){
        this.wireIDs[id] = true;

        EU.registerWire(id,volt,function(voltage){
            for(let key in this.wireMap){
                var coords = key.split(':'),x = Math.floor(coords[0]),y = Math.floor(coords[1]),z = Math.floor(coords[2]);
                World.setBlock(x,y,z,0);
                for(let i = 0;i < 32;i++){
                    var px = x + Math.random(),pz = z + Math.random(),py = y + Math.random();
                    Particles.addFarParticle(ParticleType.smoke,px,py,pz,0,0.01,0);
                }
            }
            EnergyNetBuilder.removeNet(this);
        });
    }
}

Callback.addCallback("DestroyBlockStart",function(coords,block){
    var item = Player.getCarriedItem();
    if(MachineRegistry.isMachine(block.id) && Tool.isTool(item.id,"Wrench")){
        Block.setTempDestroyTime(block.id,0);
        SoundAPI.playSound("tool/wrench.ogg");
        ToolAPI.breakCarriedTool(8);
    }
});