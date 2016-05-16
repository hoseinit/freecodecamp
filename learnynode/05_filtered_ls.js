var fs = require('fs');
var dir = process.argv[2]
var ext = process.argv[3]

fs.readdir(dir, function (err, list){
	if(err) throw err

	list.forEach(function(value) {
		if (value.indexOf("." + ext) != -1) {
			console.log(value)
		}
	})
})