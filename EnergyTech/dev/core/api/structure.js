var StructureRegistry = {
    structures:{},

    dir:__dir__ + "res/structures/",

    read:function(name){
		if(!this.structures[name]){
			if(FileTools.isExists(this.dir + name + ".str")){
				this.structures[name] = JSON.parse(FileTools.ReadText(this.dir + name + ".str"));
			} else {
				return false;
			}
        }
        
		return this.structures[name];
    },

    save:function(name,struct){
		if(!FileTools.isExists(this.dir)) FileTools.mkdir(this.dir);
		
		for(let i = 0;i < struct.length;i++){
			struct[i][3].id = (IDRegistry.getNameByID(struct[i][3].id) || struct[i][3].id);
			
			if(struct[i][3].data == 0) struct[i][3] = struct[i][3].id;
		}
		
		this.structures[name] = struct;
		FileTools.WriteText(this.dir + name + ".str",JSON.stringify(struct));
    },

    getStructure:function(name,x,y,z,isRotate){
        var struct = this.read(name);
        if(struct){
            var rotates = (isRotate?[[0,0,1,0,1,0,-1,0,0],[0,0,-1,0,1,0,1,0,0],[0,0,1,0,1,0,1,0,0],[1,0,0,0,1,0,0,0,1]]:[[1,0,0,0,-1,0,0,0,-1],[0,0,1,0,1,0,1,0,0],[-1,0,0,0,-1,0,0,0,1],[1,0,0,0,0,1,0,-1,0],[0,0,-1,0,1,0,1,0,0],[0,1,0,-1,0,0,0,0,1],[1,0,0,0,0,-1,0,1,0],[0,0,1,0,1,0,-1,0,0],[0,-1,0,1,0,0,0,0,1],[1,0,0,0,1,0,0,0,1]]);
            for(var i = 0; i < rotates.length; i++){
                var rotate = rotates[i];
                for(var k = 0;k < struct.length;k++){
                    var id = 0,data = 0;

                    if(typeof struct[k][3] == "number"){
                        id = struct[k][3];
                    } else if(typeof struct[k][3] == "string"){
                        id = BlockID[struct[k][3]];
                    } else {
                        id = struct[k][3].id;
                        data = struct[k][3].data;
                    }
                    
                    var coords = {
                        x:struct[k][0] * rotate[0] + struct[k][1] * rotate[1] + struct[k][2] * rotate[2],
                        y:struct[k][0] * rotate[3] + struct[k][1] * rotate[4] + struct[k][2] * rotate[5],
                        z:struct[k][0] * rotate[6] + struct[k][1] * rotate[7] + struct[k][2] * rotate[8]
                    };
                    var block = World.getBlock(x + coords.x,y + coords.y,z + coords.z);
                    if(block.id != id || block.data != data) break;
                    if(block.id == id && block.data == data && k == struct.length - 1) return true;
                }
            }
        }

        return false;
    }
}