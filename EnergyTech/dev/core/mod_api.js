ModAPI.registerAPI("ETech",{
    // lib
    ChargeItem:ChargeItemRegistry,
    TileRenderer:TileRenderer,

    // api
    Structure:StructureRegistry,
    Upgrade:UpgradeRegistry,
    Reactor:ReactorRegistry,
    Machine:MachineRegistry,
    Recipe:RecipeRegistry,
    Tool:Tool,

	requireGlobal:function(command){
		return eval(command);
	}
});

Logger.Log("ETech Shared","API");