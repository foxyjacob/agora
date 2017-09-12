"use strict";

/* Application Index
 * =================
 * Initializes and serves the application.
 *
 * IMPORTANT
 * ---------
 *   - The NODE_ENV environmental variable should be set to either "production"
 *     or "development" to reflect the environment.
 *
 * ========================================================================= */


var express      = require("express")                // Lightweight framework; for abstracting common tasks
  , nunjucks     = require("nunjucks")               // Templating engine; for rendering dynamic documents
  , bunyan       = require("bunyan")                 // JSON logging utility
  , controllers  = require("./controllers")          // Controllers...
  , error        = require("./middlewares/error")    // Error-handling middlewares
  , config       = require("./settings");            // Load configuration



// Initialize an Express application
// ---------------------------------
var app = express();

// Put the configuration in the application's locals
// -------------------------------------------------
app.locals.config = config;

// Set up logging
// --------------
app.locals.log = bunyan.createLogger({
    name : config.APPLICATION.NAME,

    serializers : {
        err : bunyan.stdSerializers.err,
        req : bunyan.stdSerializers.req,
        res : bunyan.stdSerializers.res
    },

    streams : [{
        type: "file",
        path: `${config.APPLICATION.LOGGING_DIRECTORY}/info.log`,
        level: "info"
    }]
});

// Set Express settings
// --------------------
// Get rid of the default "X-Powered-By: Express" header
app.set("x-powered-by", false);

// Send strong (as determined by Express) etag headers
app.set("etag", "strong");

// Configure proxy (XXX THIS CONFIGURATION MAY NOT BE CORRECT)
app.set("trust proxy", true);

// Configure and initialize Nunjucks
// ---------------------------------
nunjucks.configure("views", {
    autoescape: false, // Turn off autoescaping (XXX remember to explicity enable escaping where necesary)
    express: app
});

// Register routes
// ---------------
app.use("/", controllers.main);

// Handle errors
// -------------
// Pass a 404 error for all requests that make it here
app.use(error.notFound);
// Log errors
app.use(error.log);
// Handle all other errors
app.use(error.generic);

// Start serving the application
// -----------------------------
app.listen(config.APPLICATION.PORT, () => {
    console.log(`App started! Listening on port ${config.APPLICATION.PORT}.`);
});
