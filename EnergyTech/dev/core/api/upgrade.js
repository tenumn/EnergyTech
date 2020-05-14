var UpgradeRegistry = {
	data: {},
	
	getUpgradeData:function(id){
		return this.data[id];
	},
	
	isValidUpgrade:function(id,count,data,container){
		var upgrades = container.tileEntity.upgrades,upgradeData = UpgradeRegistry.getUpgradeData(id);
		if(upgradeData && (!upgrades || upgrades.indexOf(upgradeData.type) != true)){
			return true;
		}
		return false;
	},

	registerUpgrade:function(id,type,func){
		this.data[id] = {type:type,func:func};
	},

	callUpgrade:function(item,machine,container,data,coords){
		var upgrades = container.tileEntity.upgrades;
		var upgrade = this.getUpgradeData(item.id);
		if(upgrade && (!upgrades || upgrades.indexOf(upgrade.type) != true)){
			upgrade.func(item,machine,container,data,coords);
		}
	},
	
	getUpgrades:function(machine,container){
		var upgrades = [];
		for(let slotName in container.slots){
			if(slotName.match(/Upgrade/)){
				var slot = container.getSlot(slotName);
				if(slot.id){
					var find = false;
					for(let i in upgrades){
						var item = upgrades[i];
						if(item.id == slot.id && item.data == slot.data){
							find = true;
							item.count += slot.count;
						}
					}
					if(!find){
						item = {id:slot.id,count:slot.count,data:slot.data};
						upgrades.push(item);
					}
				}
			}
		}
		return upgrades;
	},

	executeUpgrades:function(machine){
		if(machine.initValues){machine.initValues();}
		
		var container = machine.container,data = machine.data,coords = {x:machine.x,y:machine.y,z:machine.z},upgrades = this.getUpgrades(machine,container);
		for(let i in upgrades){
			this.callUpgrade(upgrades[i],machine,container,data,coords);
		}
		StorageInterface.checkHoppers(machine);
	}
}