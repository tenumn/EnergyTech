wheat.renderer.renderScaffoldModel = function(id,data){
    var model0 = new BlockRenderer.Model();
    model0.addBox(0,0.8125,0,1,1,1,id,data);
    model0.addBox(0.0625,0.1875,0.0625,0.9375,0.8125,0.9375,id,data);
    model0.addBox(0,0,0,1,0.1875,1,id,data);
    wheat.renderer.initRenderModel(id,data,model0);
    wheat.renderer.registerRenderModel(id,0,model0);

    var model1 = new BlockRenderer.Model();
    model1.addBox(0,0.8125,0,1,1,1,id,data);
    model1.addBox(0.0625,0,0.0625,0.9375,0.8125,0.9375,id,data);
    wheat.renderer.registerRenderModel(id,1,model1);
    
    var model2 = new BlockRenderer.Model();
    model2.addBox(0.0625,0,0.0625,0.9375,1,0.9375,id,data);
    wheat.renderer.registerRenderModel(id,2,model2);
    
    var model3 = new BlockRenderer.Model();
    model3.addBox(0.0625,0.1875,0.0625,0.9375,1,0.9375,id,data);
    model3.addBox(0,0,0,1,0.1875,1,id,data);
    wheat.renderer.registerRenderModel(id,3,model3);

    Item.addCreativeGroup("ET-Scaffold",Translation.translate("Scaffold"),[id]);
}

// 木脚手架
IDRegistry.genBlockID("scaffoldWood");
Block.createBlock("scaffoldWood",[
    {name:"Wood Scaffold",texture:[["scaffoldWoodBottom",0],["scaffoldWoodTop",0],["scaffoldWoodSide",0]],inCreative:true}
],"scaffold");
wheat.renderer.renderScaffoldModel(BlockID.scaffoldWood,0);

Machine.registerPrototype(BlockID.scaffoldWood,{
    defaultValues:{
        meta:0
    },

    tick:function(){
        this.deactive();

        var bottom = World.getBlock(this.x,this.y - 1,this.z).id;
        if(bottom == 0){World.destroyBlock(this.x,this.y,this.z,true);}
    },

    deactive:function(){
        var top = World.getBlock(this.x,this.y + 1,this.z).id,bottom = World.getBlock(this.x,this.y - 1,this.z).id;
        if(top != this.id && bottom != this.id){this.data.meta = 0;}
        if(top != this.id && bottom == this.id){this.data.meta = 1;}
        if(top == this.id && bottom == this.id){this.data.meta = 2;}
        if(top == this.id && bottom != this.id){this.data.meta = 3;}
        wheat.renderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta);
    },

    destroy:function(){
        this.deactive();
        BlockRenderer.unmapAtCoords(this.x,this.y,this.z);
    }
});

// 铁脚手架
IDRegistry.genBlockID("scaffoldIron");
Block.createBlock("scaffoldIron",[
    {name:"Iron Scaffold",texture:[["scaffoldIronBottom",0],["scaffoldIronTop",0],["scaffoldIronSide",0]],inCreative:true}
],"scaffold");
wheat.renderer.renderScaffoldModel(BlockID.scaffoldIron,0);

Machine.registerPrototype(BlockID.scaffoldIron,{
    defaultValues:{
        meta:0
    },

    tick:function(){
        this.deactive();

        var bottom = World.getBlock(this.x,this.y - 1,this.z).id;
        if(bottom == 0){World.destroyBlock(this.x,this.y,this.z,true);}
    },

    deactive:function(){
        var top = World.getBlock(this.x,this.y + 1,this.z).id,bottom = World.getBlock(this.x,this.y - 1,this.z).id;
        if(top != this.id && bottom != this.id){this.data.meta = 0;}
        if(top != this.id && bottom == this.id){this.data.meta = 1;}
        if(top == this.id && bottom == this.id){this.data.meta = 2;}
        if(top == this.id && bottom != this.id){this.data.meta = 3;}
        wheat.renderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta);
    },

    destroy:function(){
        this.deactive();
        BlockRenderer.unmapAtCoords(this.x,this.y,this.z);
    }
});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.scaffoldWood,count:16,data:0},["aaa","bbb","aaa"],["a",5               ,-1,"b",280             ,0]);
    Recipes.addShaped({id:BlockID.scaffoldIron,count:16,data:0},["aaa","bbb","aaa"],["a",ItemID.plateIron,0 ,"b",ItemID.stickIron,0]);
});