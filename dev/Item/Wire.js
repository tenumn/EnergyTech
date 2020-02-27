ETMachine.wireIDs = {}

ETMachine.isWire = function(id){
    return ETMachine.wireIDs[id];
}

CreateWire = function(id,name,texture,volt,size){
    // Block
	IDRegistry.genBlockID(id);
	Block.createBlock(id, [
        {name:name,texture:[[texture.name,0]],inCreative:false},
        {name:name,texture:[[texture.name,1]],inCreative:false}
	],"wire");

    EU.registerWire(BlockID[id],volt);
    ETMachine.wireIDs[BlockID[id]] = true;
    ETTool.addTooltip(ItemID[id],Translation.translate("Max Voltage: ") + volt + "EU/t");
    
    TileRenderer.setupWireModel(BlockID[id],0,0.0625 *  size     ,"et-wire");
    TileRenderer.setupWireModel(BlockID[id],1,0.0625 * (size + 1),"et-wire");
    
	Block.registerDropFunction(id,function(coords,ID,Data){
        var block = {id:ID,data:Data}
		if(block.data == 1){
            return [[ItemID[id],1,0],[171,1,15]];
        }
        return [[ItemID[id],1,0]];
    }); 
    
    // Item
	IDRegistry.genItemID(id);
	Item.createItem(id,name,texture);
    
    Item.registerUseFunction(id,function(coords,item,block){
        var place = coords;
        if(!isCanTileReplaced(block.id,block.data)){
            place = coords.relative,block = World.getBlock(place.x,place.y,place.z);
            if(!isCanTileReplaced(block.id,block.data)){
                return;
            }
        }
        World.setBlock(place.x,place.y,place.z,BlockID[id],0);
        EnergyTypeRegistry.onWirePlaced(place.x,place.y,place.z);
        Player.decreaseCarriedItem(1);
    });

    Item.registerUseFunctionForID(171,function(coords,item,block){
        if(item.data == 15 && ETMachine.wireIDs[block.id] && block.data == 0){
            Game.prevent();
            World.setBlock(coords.x,coords.y,coords.z,block.id,1);
            Player.setCarriedItem(item.id,item.count - 1,item.data);
        }
    });
}

Callback.addCallback("DestroyBlockStart",function(coords,block){
    var item = Player.getCarriedItem();
    if(ETMachine.isWire(block.id) && ETTool.isTool(item.id,"Cutter")){
        Block.setTempDestroyTime(block.id,0);
        SoundAPI.playSound("tool/wrench.ogg");
        ToolAPI.breakCarriedTool(2);
    }
});

ETRecipe.addWireRecipe = function(output,input){
    Recipes.addShaped(output,[" a ","aba"," a "],["a",input[0].id,input[0].data,"b",input[1].id,input[1].data]);
}

CreateWire("coilTin"      ,"Tin Coil"      ,{name:"coilTin"     ,meta:0},power(1),4);
CreateWire("coilCopper"   ,"Copper Coil"   ,{name:"coilCopper"  ,meta:0},power(2),4);
CreateWire("coilGold"     ,"Gold Coil"     ,{name:"coilGold"    ,meta:0},power(3),6);
CreateWire("coilSteel"    ,"Steel Coil"    ,{name:"coilSteel"   ,meta:0},power(4),8);
CreateWire("coilTungsten" ,"Tungsten Coil" ,{name:"coilTungsten",meta:0},power(5),8);

Callback.addCallback("PreLoaded",function(){
    ETRecipe.addWireRecipe({id:ItemID.coilTin      ,count:1,data:0},[{id:ItemID.stickTin      ,data:0},{id:5,data:-1}]);
    ETRecipe.addWireRecipe({id:ItemID.coilCopper   ,count:1,data:0},[{id:ItemID.stickCopper   ,data:0},{id:5,data:-1}]);
    ETRecipe.addWireRecipe({id:ItemID.coilGold     ,count:1,data:0},[{id:ItemID.stickGold     ,data:0},{id:5,data:-1}]);
    ETRecipe.addWireRecipe({id:ItemID.coilSteel    ,count:1,data:0},[{id:ItemID.stickSteel    ,data:0},{id:5,data:-1}]);
    ETRecipe.addWireRecipe({id:ItemID.coilTungsten ,count:1,data:0},[{id:ItemID.stickTungsten ,data:0},{id:5,data:-1}]);
});