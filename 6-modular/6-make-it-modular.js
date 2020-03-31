const myModule = require("./6-mymodule");

const dir = process.argv[2];
const filterStr = process.argv[3];

myModule(dir, filterStr, (err, data) => {
	if (err) return console.error("There was an error:", err);

	data.forEach(function(file) {
		console.log(file);
	});
});
