var module = require('./06_make_it_modular_module.js')
var dir = process.argv[2]
var ext = process.argv[3]

module(dir, ext, function (err, files) {
	for (var i = 0; i < files.length; i++) {
		console.log(files[i])
	}
})