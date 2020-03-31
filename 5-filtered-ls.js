const fs = require("fs");
var path = require("path");

const directory = fs.readdir(`${process.argv[2]}`, (err, files) => {
	if (err) throw err;
	files.forEach(file => {
		if (path.extname(file) === `.${process.argv[3]}`) {
			console.log(file);
		}
	});
});

// testFolder, (err, files) => {
//     files.forEach(file => {
//       console.log(file);
