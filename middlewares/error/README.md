# Error-handling
Middlewares for catching and handling errors.

## Middlewares
 - **Logger**; logs errors.
 - **Custom**; handles custom errors.
 - **Generic**; handles generic errors.
 - **Not Found**; handles 404s gracefully by delegating any request as a 404 error.

## Usage
Load all of the middlewares simply by loading the module.

    var error = require("/path/to/error");

... or load whichever you would like individually.

    var errLogger  = require("/path/to/error").logger;
    var errHandler = require("/path/to/error").generic;

Place your desired middlewares at the very end of the middleware stack in the main application, e.g.:

    var error = require("./path/to/error");

    // ... other middlewares, etc

    app.use(error.logger);
    app.use(error.generic);

    // ... server initialization, etc

The order in which these middlewares are registered is important: you may omit as many as you would like, but whichever you do use must conform in this order:
 1. Not Found
 2. Logger
 3. Custom
 4. Generic
