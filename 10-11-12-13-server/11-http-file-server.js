const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
	filename = process.argv[3];
	let readStream = fs.createReadStream(filename);
	readStream.on("open", () => {
		readStream.pipe(response);
	});
	readStream.on("error", err => {
		console.log(console.err);
	});
});

const PORT = process.argv[2];
server.listen(PORT);
