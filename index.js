var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

var mongo = require('mongodb').MongoClient;
var braData;

mongo.connect('mongodb://localhost:27017/bradb', function (err, db) {
	if (err) throw err;

	db.collection('bras').find().toArray(function (err, result) {
		if (err) throw err;
		console.log(result);
		braData = result;
	});
});

router.use(function(req, res, next){
	console.log("/" + req.method);
	next();
});

router.get("/", function(req,res){
	res.sendFile(path + "index.html");
});

router.post("/", function(req, res){
	res.send(braData);
});

app.use("/", router);

app.use(express.static('scripts'));

//app.use(bodyParser.json());

app.listen(3000, function(){
	console.log("Listening on port 3000");
});