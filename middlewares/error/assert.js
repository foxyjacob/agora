"use strict";

var middleware = function(err, req, res, next) {
    // Catch errors thrown with a suggested status code
    if (err.status && (typeof err.status === "number") && (err.status !== 200)) {
        return next(err.status);
    }

    return next(err);
};

module.exports = middleware;
