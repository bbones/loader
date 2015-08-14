/**
 * File clientrepo.js
 * Created 24/06/15
 * Master data repository
 */


var ClientRepo = (function() {
	var languageMap = new Object();
	var languageList = null;
	var currencyMap = new Object();
	var currencyList = null;
	var afterInit = null;
	
	var counter = 0;
	
	function checkCounter() {
		counter++;
		if (counter > 1) {
			afterInit();
		}
	}
	
	function loadLanguages() {
		jquery.ajax('/protofront/service/masterdata/languages').done(function(dataArray) {

			var length = dataArray.length;
			for(var i = 0; i < length; i++) {
				languageMap[dataArray[i].id] = dataArray[i].name;
			};

			checkCounter();
		});
		
	};
	
	function getLanguageList() {
	};
	
	function init(after) {
		afterInit = after;
		loadLanguages();
	}
	return {
		init : init,
		getLanguageList : getLanguageList
	}
})();

ClientRepo.init(function() {
	console.log("After Init");
	console.log(languageMap);
});

var $ = require('jquery'); 
$.ajax({
	'url' : '/protofront/service/masterdata/languages',
	'method' : 'GET'
});