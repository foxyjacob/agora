"use strict";

/* Error Handler
 * =============
 * Handles errors based on what was passed to next.
 *
 * This file loads all of the individual middlewares.
 *
 * ========================================================================= */

var handlers = {
    notFound : require("./not-found"),
    custom   : require("./custom"),
    generic  : require("./generic"),
    logger   : require("./logger"),
    assert   : require("./assert")
};

module.exports = handlers;
