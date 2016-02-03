var net = require('net');
var strftime = require('strftime');
var portNumber = process.argv[2];


var server = net.createServer(function(socket) {
  var currentTime = strftime('%F %H:%M');
  socket.end(currentTime + '\n');
});
server.listen(portNumber);
