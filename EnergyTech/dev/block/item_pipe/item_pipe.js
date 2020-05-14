var ItemPipe = {
    item:new GameObject("item_pipe",{
        init:function (){
            this.position = {x:0,y:0,z:0};
            this.target = {x:0,y:0,z:0};
            this.item = {id:0,data:0,count:0,extra:{}};
            this.direction = {x:0,y:0,z:0};
            this.velocity = 0.2;
            this.friction = 0;
        },

        update:function(){
            if(this.move()) this.pathfinder();

            var x = Math.floor(this.position.x);
            var y = Math.floor(this.position.y);
            var z = Math.floor(this.position.z);

            var container = World.getContainer(x,y,z);
            if(container && container.tileEntity && container.tileEntity.setPipeFunctions) container.tileEntity.setPipeFunctions(this);

            this.moveAnimation();
            if(this.item.count < 1) this.destroySelf();
            
            if(World.isAirBlock(x,y,z)){
                World.drop(this.position.x,this.position.y,this.position.z,this.item.id,this.item.count,this.item.data);
                this.destroySelf();
            }
        },

        destroySelf:function(){
            this.animation.destroy()
            this.destroy();
        },

        setFriction:function(vel){
            this.friction = vel;
        },

        setVelocity:function(vel){
            this.velocity = vel;
        },

        turnBack:function(){
            this.target = {
                x: Math.floor(this.position.x) - this.direction.x,
                y: Math.floor(this.position.y) - this.direction.y,
                z: Math.floor(this.position.z) - this.direction.z
            }
        },

        setItem:function(item){
            this.item = item;
            this.animate();
        },

        setPosition:function(pos){
            this.position = pos;
            this.direction = {x:0,y:0,z:0}
        },

        setTarget:function(pos){
            this.target = pos;
        },

        animate:function(){
            if(this.animation) this.animation.destroy(),this.animation = null;
            this.animation = new Animation.Item(this.position.x + 0.5, this.position.y + 0.5, this.position.z + 0.5);
            this.animation.describeItem({id:this.item.id,count:1,data:this.item.data,size:0.25,rotation:"x"},{x:-0.5,y:-0.5,z:-0.5,});
            this.animation.load();
        },

        moveAnimation:function(){
           if(this.animation) this.animation.setPos(this.position.x + 0.5,this.position.y + 0.5,this.position.z + 0.5);
        },

        move:function(){
            var dvelocity = Math.min(0.5,Math.max(0.2,this.velocity - this.friction || 0)) / 10;
            if(this.target && dvelocity){
                var delta = {
                    x:this.target.x - this.position.x,
                    y:this.target.y - this.position.y,
                    z:this.target.z - this.position.z,
                };
                var dis = Math.sqrt(delta.x * delta.x + delta.y * delta.y + delta.z * delta.z);
                this.direction = {
                    x:Math.floor(delta.x / dis + 0.5) || 0,
                    y:Math.floor(delta.y / dis + 0.5) || 0,
                    z:Math.floor(delta.z / dis + 0.5) || 0,
                };
                var move = Math.min(dis,dvelocity) / dis || 0;
                this.position.x += delta.x * move;
                this.position.y += delta.y * move;
                this.position.z += delta.z * move;
                return dis <= dvelocity;
            }
            return true;
        },

        pathfinder:function(){
            var containers = ItemPipe.findContainers(this.position.x,this.position.y,this.position.z);
            var resC = ItemPipe.filterDirections(containers,this.direction);
			var cpipe = ItemPipe.isPipe(World.getBlockID(this.position.x,this.position.y,this.position.z)) || {};
            if(resC){
                var dir = resC[parseInt(Math.random() * resC.length)]
                if(dir){
                    var container = World.getContainer(Math.floor(this.position.x) + dir.x,Math.floor(this.position.y) + dir.y,Math.floor(this.position.z) + dir.z);
                    if(container && !cpipe.stopContainerAdding) this.addToContainer(container);
                }
            }

            var dir,path = ItemPipe.findPath(this);
            if(path){
                dir = path[parseInt(Math.random() * path.length)];
            } else {
                dir = this.direction
            }

            try {
                this.target = {
                    x:Math.floor(this.position.x) + dir.x,
                    y:Math.floor(this.position.y) + dir.y,
                    z:Math.floor(this.position.z) + dir.z
                }
            } catch(e) {}
        },

        addToContainer:function(container){
            var tileEntity = container.tileEntity;
            var slots = [];
            var slotsInitialized = false;
            var notNative = container.isContainer;
            if(tileEntity){
                if(tileEntity.addTransportedItem){
                    tileEntity.addTransportedItem(this, this.item, this.direction);
                    return;
                }
                if(tileEntity.getTransportSlots){
                    slots = tileEntity.getTransportSlots().input || [];
                    slotsInitialized = true;
                }
            }

            if(!slotsInitialized){
                if(notNative){
                    for(let name in container.slots) slots.push(name);
                } else {
                    for(let i = 0; i < container.getSize();i++) slots.push(i);
                }
            }

            for(let i in slots){
                var slot = container.getSlot(slots[i]);
                if (this.item.count <= 0) break;
                if (slot.id == 0 || slot.id == this.item.id && slot.data == this.item.data) {
                    var add = Math.min((slot.id > 0?Item.getMaxStack(slot.id):64) - slot.count,this.item.count);
                    this.item.count -= add;
                    slot.count += add;
                    slot.id = this.item.id;
                    slot.data = this.item.data;
                    if (!notNative) container.setSlot(i,slot.id,slot.count,slot.data);
                }
            }
            
            if(notNative) container.validateAll();
        }
    }),

    pipes:{},

    register:function(id,friction){
        this.pipes[id] = {
            friction:friction || 0
        }
    },

    isPipe:function(id){
        return this.pipes[id]?true:false;
    },

    canUseTile:function(tile){
        if (tile.getTransportSlots || tile.addTransportedItem || tile.getTransportedItem) return true;
        return false;
    },

    canConnectTo:function(x,y,z,side){
        var container = World.getContainer(x,y,z);
        var native = {54:true,61:true,62:true,154:true};

        if (this.isPipe(World.getBlockID(x,y,z))) return true;
        if (!side && native[World.getBlockID(x,y,z)]) return true;
        if (!side && container && container.tileEntity && this.canUseTile(container.tileEntity)) return true;

        return false;
    },

    findDirections:function(x,y,z,side){
        var possible = [];
        var directions = [{x:0,y:0,z:-1},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:1,z:0}];

        for(let i in directions){
            var dir = directions[i];
            if (this.canConnectTo(x + dir.x,y + dir.y,z + dir.z,side)) possible.push(dir);
        }

        return possible
    },

    findContainers: function (x, y, z,side) {
        var possible = [];
        var directions = [{x:0,y:0,z:-1},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:1,z:0}];

        for(let i in directions){
            var dir = directions[i];
            if (!this.isPipe(World.getBlockID(x + dir.x,y + dir.y,z + dir.z)) && this.canConnectTo(x + dir.x,y + dir.y,z + dir.z,side)) possible.push(dir);
        }

        return possible
    },

    filterDirections:function(list,dir){
        var possible = [];

        for(let i in list){
            var current = list[i];
            if(!(current.x == -dir.x && current.y == -dir.y && current.z == -dir.z)) possible.push(current);
        }

        return possible;
    },

    findPath:function(item){
        var pipe = this.isPipe(World.getBlockID(item.position.x,item.position.y,item.position.z));
        
        this.setupNativePipeFunctions(item);
        var dirs = this.findDirections(item.position.x,item.position.y,item.position.z);
        var res = this.filterDirections(dirs,item.direction);
        var container = World.getContainer(item.position.x,item.position.y,item.position.z);

        if(container && container.tileEntity && container.tileEntity.getTransportingDirections) res = container.tileEntity.getTransportingDirections(item);
        if(pipe && pipe.getTransportingDirections) res = pipe.getTransportingDirections(item);

        return res
    },

    setupNativePipeFunctions:function(item){
        var pipe = this.isPipe(World.getBlockID(item.position.x,item.position.y,item.position.z));
        if(pipe) item.setFriction(Math.min(0,item.friction + pipe.friction));
    }
}

Callback.addCallback("PreLoaded",function(){
	for(let i in BlockID){
		var tile = TileEntity.getPrototype(BlockID[i]);
		if(tile && tile.getTransportSlots) ICRender.addGroupFor(BlockID[i],[
            "input-item-pipe",
            "output-item-pipe",
            "transport-item-pipe"
        ]);
	}
});

Block.createSpecialType({
    opaque:true,
    destroytime:1
},"pipe");

ICRender.addGroupFor(54,["input-item-pipe","output-item-pipe","transport-item-pipe"]);
ICRender.addGroupFor(61,["input-item-pipe","output-item-pipe","transport-item-pipe"]);
ICRender.addGroupFor(62,["input-item-pipe","output-item-pipe","transport-item-pipe"]);
ICRender.addGroupFor(154,["input-item-pipe","output-item-pipe","transport-item-pipe"]);