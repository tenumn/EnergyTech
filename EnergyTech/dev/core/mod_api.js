ModAPI.registerAPI("ETech",{
    // lib
    ChargeItem:ChargeItemRegistry,
    TileRenderer:TileRenderer,

    // api
    Upgrade:UpgradeRegistry,
    Structure:StructureRegistry,
    Machine:MachineRegistry,
    Recipe:RecipeRegistry,
    Tool:Tool,

	requireGlobal:function(command){
		return eval(command);
	}
});

Logger.Log("ETech Shared","API");