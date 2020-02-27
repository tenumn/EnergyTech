ModAPI.registerAPI("ETech",{
    // lib
    ChargeItem:ChargeItemRegistry,
    Renderer:TileRenderer,

    // api
    Upgrade:ETUpgrade,
    Machine:ETMachine,
    Reactor:ETReactor,
    Recipe:ETRecipe,
    Model:ETModel,
    Tool:ETTool,

	requireGlobal:function(command){
		return eval(command);
	}
});

Logger.Log("ETech Shared","API");