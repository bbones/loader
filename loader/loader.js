/**
 * JSON file loader
 * 
 * Attention! It works with modification of request module!
 * Request.prototype.form = function (form) {
 *  var self = this
 *  if (form) {
 *    self.setHeader('content-type', 'application/x-www-form-urlencoded') change to 'application/x-www-form-urlencoded;charset=UTF-8;'
 */
var Loader = (function(){
	var fs = require('fs');
	var request = require('request');

	function composeName(name) {
		var result = {};
		result.name = name.ORG_NAME;
		return result;
	}
	
	function sendEnterprise(enterprise) {
		console.log(enterprise);
	}
	
	function composeEnterprise(org) {
		var result = {};
		result.eskId = org.ORG_ID;

		return result;
	}
	return {
		parsefile : function(fileName) {
			var str = fs.readFileSync(fileName, 'utf8');
			return JSON.parse(str);
		},
		composeAndSend : function(org) {
			console.log('*****************  ' + org.ORG_ID + '  **********************');
			request({
						uri: 'http://localhost:9200/test/enterprise/' + org.ORG_ID,
						json : org,
						method : 'POST'
				},	function (error, response, body) {
					// console.log(body);
					// console.log(response);
					if (error) {console.log(error);
				} 
			});
			
		}
	};
})();

var arr = Loader.parsefile('org-utf8.json');
arr.forEach(function(org) {
	Loader.composeAndSend(org);
});
