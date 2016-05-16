var fs = require('fs');
var path = require('path')

module.exports = function(dir, ext, callback){

	fs.readdir(dir, function (err, list){
	if(err) {
		callback(err, null);
	}
	else {
		result = [];
		list.forEach(function(value) {
			if (path.extname(value) == "." + ext) {
				result.push(value)
			}
		})
		callback(null, result)
	}
    })
}