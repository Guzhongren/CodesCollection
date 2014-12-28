define([
	".././_base/kernel", // kernel.deprecated
	".././_base/lang", // lang.setObject
	"../tree/dndSource"
], function(kernel, lang, dndSource){
	// module:
	//		dijit/_tree/dndSource

	/*=====
	return {
		// summary:
		//		Deprecated module, use dijit/tree/dndSource instead.
	};
	=====*/

	// TODO: remove this file in 2.0
	kernel.deprecated("dijit._tree.dndSource has been moved to dijit.tree.dndSource, use that instead", "", "2.0");

	lang.setObject("dijit._tree.dndSource", dndSource);
});
