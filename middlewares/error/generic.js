"use strict";

/* Generic Error Handler
 * =====================
 * Handles errors based on a response status code.
 *
 * IMPORTANT
 * ---------
 * Sends (or at least attempts to) a response no matter what. No more
 * middlewares are called after this one.
 *
 * ========================================================================= */

var middleware = function(err, req, res, next) {
    var context;

    switch (err) {
        case 400:
            res.status(400);

            context = {
                code        : err,
                description : "Bad Request",
                message     : "You provided invalid information.",
                suggestion  : {
                    href  : (req.baseUrl + req.path),
                    value : "Try again"
                },
                explaination : "You are most likely seeing this because you provided information which we do not allow/did not ask for."
            };
            break;

        case 401:
            res.status(err);

            context = {
                code        : err,
                description : "Unauthorized",
                message     : "You are not allowed to go there."
            };
            break;

        case 404:
            res.status(err);

            context = {
                code        : err,
                description : "Not Found",
                message     : "Whatever you're looking for, we haven't got.",
                suggestion  : {
                    href: "/",
                    value: "Back to our Home Page"
                }
            };
            break;

        case 501:
            res.status(err);

            context = {
                code        : err,
                description : "Not Implemented",
                message     : "We do not implement the request method you tried to use."
            };
            break;

        default:
            res.status(500);

            context = {
                code        : 500,
                description : "Internal Server Error",
                message     : "Something went wrong, but it wasn't your fault."
            };
            break;
    }

    res.render("error.html.njk", context);
    //res.render("error.html", {"req" : req, "res" : res});
};

module.exports = middleware;
