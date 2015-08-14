/**
 * New node file
 */
/**
 * New node file
 */
var fs = require('fs');
var buf = fs.readFile(process.argv[2], 'utf-8', function(err, data) {
	console.log(data.split('\n').length-1);
});
