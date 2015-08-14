var net = require('net');
var strftime = require('strftime');
var server = net.createServer(function (socket) {
	var str = strftime('%F %H:%M', new Date());
	socket.end(str);
});
server.listen(process.argv[2]);