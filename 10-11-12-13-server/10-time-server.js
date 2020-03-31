const net = require("net");
const strftime = require("strftime");

const server = net.createServer(socket => {
	let currentDate = strftime(`%F %H:%M\n`, new Date());
	socket.end(currentDate);
});

const PORT = process.argv[2];
server.listen(PORT);
