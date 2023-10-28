let ObjectId = require('mongodb').ObjectId; 
const db = require('../config/db.config');
const dbo = db.client.db("aruplace").collection("user");

async function createUser(user) {
    await dbo.insertOne(user);
    return user;
}

async function getUserByEmail(email) {
    let user = await dbo.findOne({ email: email });
    return user;
}

module.exports = {
    createUser,
    getUserByEmail
}


