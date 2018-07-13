 var express = require("express");
 var app = express();
 var bodyParser = require("body-parser");
 app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var todoList =["e.g: buy a house"];

// =======ROUTE===========

app.get("/", function(req, res){
	res.render("home.ejs", {input: todoList});
});

app.post("/", function(req, res){
	console.log(req.body);
	var newTodo =req.body.name;
	todoList.push(newTodo);
	res.redirect("/");  //  ====== >redirect to app.get("/")

});


app.get("/:reqUrl", function(req, res){
	var reqUrl = req.params.reqUrl;
	// res.send(reqUrl);
	console.log (reqUrl);
	res.redirect("/");
});


 app.listen(process.env.PORT = 30000, process.env.IP, function(){
 	console.log("Server started!!!");
 });