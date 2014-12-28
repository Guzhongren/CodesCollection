// summary:
//		Test whether the require function loads modules as it should.

var dojoConfig = {
	baseUrl: "../../../../../",
	packages: [{
		name: "dojo", location: "dojo"
	}]
};

importScripts("../../../../dojo.js", "console.js");

try{
	require(["strings"], function(strings){
		self.postMessage({
			type: "testResult",
			test: "require is working",
			value: true
		});
	});
}catch(e){
	self.postMessage({
		type: "testResult",
		test: "require is working",
		value: false
	});
}
