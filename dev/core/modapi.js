ModAPI.registerAPI("ETech",{
    // lib
    Charge:ChargeItemRegistry,
    Renderer:TileRenderer,

    // api
    Machine:ETMachine,
    Reactor:ETReactor,
    Recipe:ETRecipe,
    Tool:ETTool,

	requireGlobal:function(command){
		return eval(command);
	}
});

Logger.Log("ETech Shared","API");