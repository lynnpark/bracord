var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

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