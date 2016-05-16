var fs = require("fs")
b = fs.readFile(process.argv[2], function (err, data) {
	if (err) throw err;
	var lines = data.toString().split('\n').length - 1
	console.log(lines)
})
