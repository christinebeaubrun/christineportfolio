var express = require("express");
var jade = require("jade");

var app = express();
app.set("view engine", "jade");
app.set("view options", { layout: 'layout.jade' });
app.use("/public", express.static(__dirname + "/public"));

 /* serves main page */
 app.get("/", function(req, res) {
    res.render('./index.jade');
 });

 app.get("/aboutme", function(req, res) {
    res.render('./about.jade');
 });
 
 var port = process.env.PORT || 5000;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });
