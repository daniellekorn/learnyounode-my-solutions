const http = require("http");
const map = require("through2-map");

const server = http.createServer((request, response) => {
	if (request.method === "POST") {
		response.writeHead(200, { "Content-Type": "text/plain" });
		request
			.pipe(
				map(function(chunk) {
					return chunk.toString().toUpperCase();
				})
			)
			.pipe(response);
	} else {
		response.writeHead(400);
		console.log(Error);
		console.log("We only except POST requests");
	}
});

const PORT = process.argv[2];
server.listen(PORT);
