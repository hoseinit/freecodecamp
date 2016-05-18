var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/' +process.argv[2]

mongo.connect(url, function(err, db){
	if(err) throw err

	db.collection(process.argv[3])
	.remove({
 		_id: process.argv[4]
	}, function (err){
		if(err) throw err
		db.close()	
	})
})