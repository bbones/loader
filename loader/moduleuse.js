/**
 * New node file
 */
var mymodule = require('./mymodule');

mymodule(process.argv[2], process.argv[3], function(err, data) {
	if (err) {
		console(err);
	}
	else {
		data.forEach(function(value){
			console.log(value);
		});
	}
});