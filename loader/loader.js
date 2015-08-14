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
			var enterprise = {eskId : org.ORG_ID, name : org.FULL_ORG_NAME};
			var options = {
				uri: 'http://localhost:8080/protofront/service/enterprises/?languageId=3',
				form : enterprise
			};
			console.log(enterprise);
			request.post(options, function (error, response, body) {
				if (error) {console.log(error);} 
			});
			
		}
	};
})();

var arr = Loader.parsefile('org-3.json');
arr.forEach(function(org) {
	Loader.composeAndSend(org);
});
