"use strict";

/* Error Logger
 * ============
 * Logs any error for administrative review.
 *
 * ========================================================================= */

var middleware = function(err, req, res, next) {
    var log     = req.app.locals.log;
    var details = {"req": req, "res": res, "err": err};

    switch (err) {
    case 400:
        log.warn(details, "A bad request came in.");
        break;

    case 401:
        log.warn(details, "Someone failed authorization.");
        break;

    case 404:
        log.info({url: req.originalUrl}, "Someone tried getting a non-existent resource.");
        break;

    case 501:
        log.warn(details, "Someone tried using a request method we do not implement.");
        break;

    default:
        log.error(details, "An internal server error occured.");
        break;
    }

    next(err);
};

module.exports = middleware;
