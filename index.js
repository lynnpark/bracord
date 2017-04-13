var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/bradb', function (err, db) {
	if (err) throw err;

	db.collection('bras').find().toArray(function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});

router.use(function(req, res, next){
	console.log("/" + req.method);
	next();
});

router.get("/", function(req,res){
	res.sendFile(path + "index.html");
});

app.use("/", router);

//app.use(bodyParser.json());

app.listen(3000, function(){
	console.log("Listening on port 3000");
});