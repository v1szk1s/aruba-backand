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


router.get("/", (req, res) => {
    res.send("Hello World!");
    }
);

/* ---------------------------------- User ---------------------------------- */
router.post("/register", userController.register);
router.post("/login", userController.login);

/* ----------------------------------- App ---------------------------------- */
router.get("/marketplace", auth.validateToken, appController.getApps);
router.post("/deploy", auth.validateToken, appController.deployApp);

module.exports = router;
