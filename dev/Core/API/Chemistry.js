var Element = {},Molecule = {};

var Chemistry = {
	registerElement:function(number,symbol,name){
		IDRegistry.genItemID("element_" + symbol);
		Item.createItem("element_" + symbol,name,{name:"element_" + symbol});
		wheat.item.addTooltip(ItemID["element_" + symbol],symbol + "(" + number + ")");
		Item.addCreativeGroup("ET-Element",Translation.translate("Element"),[ItemID["element_" + symbol]]);

		Element[symbol] = ItemID["element_" + symbol];
	},

	registerMolecule:function(uid,name,formation){
		IDRegistry.genItemID("molecule_" + uid);
		Item.createItem("molecule_" + uid,name,{name:"molecule_" + uid});
		Item.addCreativeGroup("ET-Molecule",Translation.translate("Molecule"),[ItemID["molecule_" + uid]]);

		Molecule[uid] = ItemID["molecule_" + uid];
		
		var array = [];   
		for(let key in formation){
			array.push([key,formation[key]]);
		}
		Decomposer.addRecipe(Molecule[uid],-1,formation);
		Synthesizer.addRecipe({id:Molecule[uid]},array);
	},

	isElement:function(id){
		for(let key in Element){
			if(Element[key] == id){
				return true;
			}
		}
		return false;
	},

	isMolecule:function(id){
		for(let key in Molecule){
			if(Molecule[key] == id){
				return true;
			}
		}
		return false;
	}
};