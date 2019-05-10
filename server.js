var express = require("express");
var path = require("path");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(path);

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

// const apiRoutes = require("./routes/apiRoutes");
// apiRoutes(app);
// // require("./routes/htmlRoutes")(app);

// const htmlRoutes = require("./routes/htmlRoutes");
// htmlRoutes(app);


// Add the application routes
const apiRoutes = require(path.join(__dirname, './app/routes/apiRoutes'));
apiRoutes(app);

const htmlRoutes = require(path.join(__dirname, './app/routes/htmlRoutes'));
htmlRoutes(app);


// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
