"use strict";

/* 404 Handler
 * ===========
 * Express middleware that catches "not found" errors by assuming if this
 * middleware was reached, the requested [file] was not found.
 *
 * IMPORTANT
 * ---------
 * This module pays no attention to the request verb, it will delegate the
 * request to be handled by the error-handling middleware(s) regardless of
 * what kind of request is being handled (i.e. it will have the server respond
 * with a 404 page whether the request was GET, POST, PUT, etc.).
 *
 * USAGE
 * -----
 * Register at the end of the middleware stack, just before error-handling
 * middlewares.
 *
 * ========================================================================= */


var handle = function(req, res, next) {
    next(404); // If we got to this point without sending a response, we must not have found what the user asked for
};

module.exports = handle;
