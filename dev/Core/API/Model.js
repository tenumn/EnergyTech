var ETModel = {
    Standart:function(id,data,model){
        if(!data){data = 0;}
        var render = new ICRender.Model();
        render.addEntry(model);
        BlockRenderer.enableCoordMapping(id,data,render);
    },

    Scaffold:function(id,data){
        if(!data){data = 0;}
        var model = new BlockRenderer.Model();
        model.addBox(0,0.8125,0,1,1,1,id,data);
        model.addBox(0,0,0,1,0.1875,1,id,data);
        model.addBox(0.0625,0.1875,0.0625,0.9375,0.8125,0.9375,id,data);
        this.Standart(id,data,model);
    },

    SherlockBatteryBox:function(id,data){
        if(!data){data = 0;}
        var model = new BlockRenderer.Model();
        model.addBox(0,0,0,1,0.3125,1,id,data);
        model.addBox(0,0.6875,0,1,1,1,id,data);
        model.addBox(0,0.3125,0,0.3125,0.6875,0.3125,id,data);
        model.addBox(0,0.3125,0.6875,0.3125,0.6875,1,id,data);
        model.addBox(0.6875,0.3125,0,1,0.6875,0.3125,id,data);
        model.addBox(0.6875,0.3125,0.6875,1,0.6875,1,id,data);
        model.addBox(0.0625,0.0625,0.0625,0.9375,0.9375,0.9375,id,data);
        this.Standart(id,data,model);
    }
}