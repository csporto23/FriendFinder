var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./routing/htmlRoutes")(app);

//Listen for Server Port
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
