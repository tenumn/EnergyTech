function CreateWire(id,name,texture,volt,size){
    // Block
	IDRegistry.genBlockID(id);
	Block.createBlock(id,[
        {name:name,texture:[[texture.name,0]],inCreative:false},
        {name:name,texture:[[texture.name,1]],inCreative:false}
	],"wire");

    wheat.item.addTooltip(ItemID[id],Translation.translate("Max Voltage: ") + volt + "EU/t");
    
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
        if(!canTileBeReplaced(block.id,block.data)){
            place = coords.relative,block = World.getBlock(place.x,place.y,place.z);
            if(!canTileBeReplaced(block.id,block.data)){
                return;
            }
        }
        World.setBlock(place.x,place.y,place.z,BlockID[id],0);
        EnergyTypeRegistry.onWirePlaced(place.x,place.y,place.z);
        Player.decreaseCarriedItem(1);
    });

    Item.registerUseFunctionForID(171,function(coords,item,block){
        var wire = Machine.isWire(block.id);
        if(wire && item.data == 15 && block.data == 0){
            Game.prevent();
            World.setBlock(coords.x,coords.y,coords.z,block.id,1);
            Player.setCarriedItem(item.id,item.count - 1,item.data);
        }
    });
}

Callback.addCallback("DestroyBlockStart",function(coords,block){
    var item = Player.getCarriedItem(),wire = Machine.isWire(block.id);
    if(wire && Tool.isTool(item.id,"Cutter")){
        Block.setTempDestroyTime(block.id,0);
        SoundAPI.playSound("tool/wrench.ogg");
        ToolAPI.breakCarriedTool(4);
    }
});

CreateWire("wireTin"      ,"Tin Coil"      ,{name:"wireTin"     ,meta:0},power(1),4);
CreateWire("wireCopper"   ,"Copper Coil"   ,{name:"wireCopper"  ,meta:0},power(2),4);
CreateWire("wireGold"     ,"Gold Coil"     ,{name:"wireGold"    ,meta:0},power(3),6);
CreateWire("wireSteel"    ,"Steel Coil"    ,{name:"wireSteel"   ,meta:0},power(4),6);
CreateWire("wireTungsten" ,"Tungsten Coil" ,{name:"wireTungsten",meta:0},power(5),8);

Callback.addCallback("PreLoaded",function(){
    // 组
    Item.addCreativeGroup("ET-Wire",Translation.translate("Wire"),[
        ItemID.wireTin     ,
        ItemID.wireCopper  ,
        ItemID.wireGold    ,
        ItemID.wireSteel   ,
        ItemID.wireTungsten
    ]);

    // 合成
    Recipes.addShaped({id:ItemID.wireTin     ,count:2,data:0},[" a ","aba"," a "],["a",ItemID.stickTin     ,0,"b",5,-1]);
    Recipes.addShaped({id:ItemID.wireCopper  ,count:2,data:0},[" a ","aba"," a "],["a",ItemID.stickCopper  ,0,"b",5,-1]);
    Recipes.addShaped({id:ItemID.wireGold    ,count:2,data:0},[" a ","aba"," a "],["a",ItemID.stickGold    ,0,"b",5,-1]);
    Recipes.addShaped({id:ItemID.wireSteel   ,count:2,data:0},[" a ","aba"," a "],["a",ItemID.stickSteel   ,0,"b",5,-1]);
    Recipes.addShaped({id:ItemID.wireTungsten,count:2,data:0},[" a ","aba"," a "],["a",ItemID.stickTungsten,0,"b",5,-1]);

    // 线缆轧制机
    Recipe.addWiremillRecipe({id:ItemID.plateTin     ,count:1,data:0},{id:ItemID.wireTin     ,count:1,data:0});
    Recipe.addWiremillRecipe({id:ItemID.plateCopper  ,count:1,data:0},{id:ItemID.wireCopper  ,count:1,data:0});
    Recipe.addWiremillRecipe({id:ItemID.plateGold    ,count:1,data:0},{id:ItemID.wireGold    ,count:1,data:0});
    Recipe.addWiremillRecipe({id:ItemID.plateSteel   ,count:1,data:0},{id:ItemID.wireSteel   ,count:1,data:0});
    Recipe.addWiremillRecipe({id:ItemID.plateTungsten,count:1,data:0},{id:ItemID.wireTungsten,count:1,data:0});
});