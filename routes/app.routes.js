const express = require("express");
const router = express.Router();
const flash = require('express-flash');
const session = require('express-session');

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


router.get("/", (req, res) => {
    res.send("Hello World!");
    }
);

/* ---------------------------------- User ---------------------------------- */
router.post("/register", userController.register);
router.post("/login", userController.login);


module.exports = router;