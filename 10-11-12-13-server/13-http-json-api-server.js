const http = require("http");
const url = require("url");

const server = http.createServer((request, response) => {
	let url_parts = url.parse(request.url, true);
	let query = url_parts.query.iso;
	console.log(query);
	if (request.method === "GET") {
		if (url_parts.pathname === "/api/parsetime") {
			let date = new Date(query).toISOString();
			let hour = new Date(date).getHours();
			let minute = new Date(date).getMinutes();
			let second = new Date(date).getSeconds();
			response.end(
				JSON.stringify({
					hour: hour,
					minute: minute,
					second: second
				})
			);
		} else if (url_parts.pathname === "/api/unixtime") {
			let date = new Date(query).toISOString();
			let unixtime = new Date(date).getTime();
			response.end(JSON.stringify({ unixtime }));
		} else {
			response.writeHead(400);
			console.log("File path not found");
		}
	} else {
		response.writeHead(405);
		console.log(Error);
		console.log("This API only accepts GET requests");
	}
});

const PORT = process.argv[2];
server.listen(PORT);
