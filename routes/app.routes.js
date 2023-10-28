const express = require("express");
const router = express.Router();
const flash = require('express-flash');
const session = require('express-session');
const auth = require('../middleware/auth.js');

router.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: false
    })
);
router.use(flash());

/* ---------------------------------- Controllers ---------------------------------- */
const userController = require("../controllers/user.controller");
const appController = require("../controllers/app.controller");


router.get("/api", (req, res) => {
    res.status(200).send("Hello World!");
    });

router.get("/auth", auth.validateToken, (req, res) => {
    res.status(200).send("Validated");
});

/* ---------------------------------- User ---------------------------------- */
router.post("/register", userController.register);
router.post("/login", userController.login);

/* ----------------------------------- App ---------------------------------- */
router.get("/marketplace", auth.validateToken, appController.getApps);
router.get("/app/:id", auth.validateToken,  appController.getApp);
router.post("/deploy/:id", auth.validateToken, appController.deployApp);

module.exports = router;
