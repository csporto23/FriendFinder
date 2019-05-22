var express = require("express");
var path = require("path");
const fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//post reservation data

//routes for html pages
app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "../FriendFinder/App/Public/home.html"));
});

app.get("/survey", function(request, response) {
    response.sendFile(path.join(__dirname, "../FriendFinder/App/Public/survey.html"));
});



//Listen for Server Port
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

