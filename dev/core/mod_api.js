ModAPI.registerAPI("ETech",{
    // lib
    ChargeItem:ChargeItemRegistry,
    TileRenderer:TileRenderer,

    // api
    NuclearReactor:NuclearReactor,
    FusionReactor:FusionReactor,
    Upgrade:Upgrade,
    Machine:Machine,
    Recipe:Recipe,
    Tool:Tool,

	requireGlobal:function(command){
		return eval(command);
	}
});

Logger.Log("ETech Shared","API");