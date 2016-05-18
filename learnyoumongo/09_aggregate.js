var mongo = require('mongodb').MongoClient
var size = process.argv[2]
var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db) {
	if(err) throw err

	db.collection('prices')
	.aggregate([
		{ $match: { 
			size: size
		}}
		,{ $group :{
			_id : 'total'
			, total: {
				$avg: '$price'
			}
		}}
		]).toArray(function(err, documents){
		if(err) throw err

		console.log(documents[0].total.toFixed(2))
		db.close()
	})
})