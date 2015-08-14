/**
 * New node file
 */
module.exports=function(pathstr, mask, callback) {
	var fs = require('fs');
	var path = require('path');
	fs.readdir(pathstr, 
		function(err, files) {

			if (err) {
				callback(err);
				return;
			}
			var l = files.length;
			var result = [];
			for(var i=0; i< l; i++) {
				if (path.extname(files[i]) === '.' + mask) {
					result.push(files[i]);
				}
			}
			callback(null, result);
		}
	);
};