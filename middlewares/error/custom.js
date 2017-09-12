"use strict";

/* Generic Error Handler
 * =====================
 * Handles custom errors based on the data passed to next. If no custom error
 * handler is defined, the error is delegated to the next error-handling
 * middleware.
 *
 * ========================================================================= */

var middleware = function(err, req, res, next) {
    var context;

    switch (err) {
        case "":
            // Define a custom error here
            break;
    }

    if (context) {
        res.render("error.html.njk", context); // If we set a context, we must have recognized the error
    } else {
        next(err);                         // Otherwise, we should delegate this error to the generic handler
    }
};

module.exports = middleware;
