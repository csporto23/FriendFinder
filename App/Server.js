var express = require("express");
const fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Router for our "route" files.
// require("./App/Routing/apiRoutes")(app);
require("./Routing/htmlRoutes")(app);

//Listen for Server Port
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

