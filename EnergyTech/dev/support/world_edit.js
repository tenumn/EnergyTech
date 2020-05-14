ModAPI.addAPICallback("WorldEdit",function(api){
    let core_coords = null;
		
    Callback.addCallback("ItemUse",function(coords,item){
        if(item.id == 268){
            core_coords = coords;
            Game.message("set struct core.");
        }
    });
    
    api.addCommand({
        name:"/save",
        description:"Save structure.",
        args:"<name>",
        selectedArea:true,
        event:function(args){
            if(core_coords){
                var arr = [],pos = api.getPosition();
            
                for(let x = pos.pos1.x;x <= pos.pos2.x;x++){for(let y = pos.pos1.y;y <= pos.pos2.y;y++){for(let z = pos.pos1.z;z <= pos.pos2.z;z++){
                    if(World.isAirBlock(x,y,z)) continue;
    
                    arr.push([x - core_coords.x,y - core_coords.y,z - core_coords.z,World.getBlock(x,y,z)]);
                }}}
                
                StructureRegistry.save(args[0],arr);
                Game.message("Saved to " + StructureRegistry.dir + args[0] + ".str");
            }
        }
    });
});