const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const UserServices = require("../services/user.service");
const { sign } = require("jsonwebtoken");
const k8s = require('@kubernetes/client-node');



async function register(req, res) {
    const { lastName, firstName, email, password, repass } = req.body;
    if (password !== repass) {
        res.status(400).send("Passwords do not match!");
        return;
    }
    const role = 1;
    const user = new User({ 
        lastName,
        firstName,
        email,
        password: bcrypt.hashSync(password, 8),
        role
    });
    await UserServices.createUser(user);
    res.send("User created!");
}

async function login(req, res) {
    const { email, password } = req.body;
    const user = await UserServices.getUserByEmail(email);
    if (!user) {
        res.status(404).send("User not found!");
        return;
    }
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
        res.status(401).send({
            accessToken: null,
            message: "Invalid password or email"
        });
        return;
    }
    const token = sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.status(200).send({
        id: user._id,
        email: user.email,
        accessToken: token
    });
}


module.exports = {
    register,
    login
}
