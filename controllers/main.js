"use strict";

/* Main Site Routes
 * ========================================================================= */

var router = require("express").Router();

/* Home Page
 * ========================================================================= */
router.route("/projects/agora")
    .get((req, res) => {
        return res.render("landing.html.njk");
    });


/* Join Page
 * ========================================================================= */
router.route("/projects/agora/join")
    .get((req, res) => {
        return res.render("join.html.njk");
    });

/* Log in Page
 * ===========
 * Allow the user to enter their credentials and log into their account.
 *
 * ========================================================================= */
router.route("/projects/agora/login")
    .get((req, res) => {
        res.render("login.html.njk");
    });

/* Terms and Conditions page
 * ========================================================================= */
router.route("/projects/agora/terms")
    .get((req, res) => {
        return res.render("terms.html.njk");
    });


module.exports = router;
