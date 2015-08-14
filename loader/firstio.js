/**
 * New node file
 */
var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var subs=str.split('\n');
console.log(subs.length-1);
