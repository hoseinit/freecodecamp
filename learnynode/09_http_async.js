var http = require("http")
var async = require("async");

async.series([
  function(callback){
    getData(process.argv[2], callback)
  },
  function(callback){
    getData(process.argv[3], callback)
  },
  function(callback){
    getData(process.argv[4], callback)
  }]
)

function getData(url, callback) {
	var result = ""
	http.get(url, function (response){
	    response.on('data', function(data){
	    	result += data
	    })  
	  	response.on('end', function(){
	  		console.log(result)
	  		callback();
	  	})
	})
} 