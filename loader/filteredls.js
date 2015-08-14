/**
 * New node file
 */
var fs = require('fs');
var path = require('path');
var pathstr = process.argv[2];
var mask = '.' + process.argv[3];
var counter = 0;
fs.readdir(pathstr, function(err, files) {
	if (err !== null) {
		console.log(err);
	}
	// console.log(files);
	var l = files.length;
	for(var i=0; i< l; i++) {
		if (path.extname(files[i]) === mask) {
			console.log(files[i]);
		}
	}
	
});