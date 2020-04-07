ModAPI.registerAPI("ETech",{
    // lib
    ChargeItem:ChargeItemRegistry,
    TileRenderer:TileRenderer,

    // api
    Upgrade:Upgrade,
    Machine:Machine,
    Reactor:Reactor,
    Recipe:Recipe,
    Model:Model,
    Tool:Tool,

	requireGlobal:function(command){
		return eval(command);
	}
});

Logger.Log("ETech Shared","API");