/**
 * New node file
 */
var length = process.argv.length;
var sum = 0;
for (var i = 2; i< length; i++) {
	value = Number(process.argv[i]);
	sum+=value;
}
console.log(sum);