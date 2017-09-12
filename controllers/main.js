"use strict";

/* Main Site Routes
 * ========================================================================= */

var router = require("express").Router();

/* Home Page
 * ========================================================================= */
router.route("/")
    .get((req, res) => {
        return res.render("landing.html.njk");
    });


/* Join Page
 * ========================================================================= */
router.route("/join")
    .get((req, res) => {
        return res.render("join.html.njk");
    });

/* Log in Page
 * ===========
 * Allow the user to enter their credentials and log into their account.
 *
 * ========================================================================= */
router.route("/login")
    .get((req, res) => {
        res.render("login.html.njk");
    });

/* Terms and Conditions page
 * ========================================================================= */
router.route("/terms")
    .get((req, res) => {
        return res.render("terms.html.njk");
    });


module.exports = router;
