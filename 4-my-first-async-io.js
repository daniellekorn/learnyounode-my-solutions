const fs = require("fs");

const filePath = fs.readFile(process.argv[2], (err, data) => {
	if (err) throw err;
	str = data.toString();
	str = str.split("\n");
	console.log(str.length - 1);
});
