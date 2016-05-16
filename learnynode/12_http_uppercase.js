var http = require("http")

var port = process.argv[2]

var server = http.createServer(function(req, res){
	if (req.method == 'POST') {
		var body = ''
		req.on('data', function (data) {
            body += data.toString().toUpperCase()
            console.log("Partial body: " + body)
        });
        req.on('end', function () {
            res.end(body)
        });
	}
})
server.listen(port)