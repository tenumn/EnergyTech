var Synthesizer = {
	data:{},

	addRecipe:function(result,pattern,shaped){
		result.count = result.count || 1;
		result.data = result.data || 0;

		if(shaped){
			for(let i = 0; i < 9; i++){
				pattern[i] = pattern[i] ? (Element[pattern[i][0]] || Molecule[pattern[i][0]]) + ":" + pattern[i][1] :"0:0";
			}
			this.data[pattern.join(",")] = result;
			return;
		}
		var obj = {},arr = [];
		for(let i = pattern.length; i--;){
			obj[pattern[i][0]] = (obj[pattern[i][0]] || 0) + pattern[i][1];
		}
		for(let key in obj){
			arr.push((Element[key] || Molecule[key]) + ":" + obj[key]);
		}
		this.data[arr.sort().join(",")] = result;
	},

	getRecipe:function(pattern){
		var obj = {};
		let str = "";
		for(let i = 9; i--;){
			if(pattern[i][0]){
				obj[pattern[i][0]] = (obj[pattern[i][0]] || 0) + pattern[i][1];
			}
			pattern[i] = pattern[i].join(":");
		}
		str = pattern.join(",");
		if(this.data[str]){
			return this.data[str];
		}
		var arr = [];
		for(let key in obj){
			arr.push(key + ":" + obj[key]);
		}
		str = arr.sort().join(",");
		return this.data[str];
	},

	isValidSynthesiser:function(id,count,data){
		if(Chemistry.isElement(id) || Chemistry.isMolecule(id)){
			return true;
		}
		return false;
	},

	getPattern:function(id,data,raw){
		for(let key in this.data){
			if(this.data[key].id == id && this.data[key].data == data){
				return raw ? key : this.decodePattern(key);
			}
		}
	},
	
	decodePattern:function(str){
		str = str.split(",");
		for(let i = str.length; i--;){
			str[i] = str[i].split(":");
		}
		return str;
	},
};