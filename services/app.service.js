let ObjectId = require('mongodb').ObjectId; 
const db = require('../config/db.config');
const dbo = db.client.db("aruplace").collection("user");

async function getApps(){
    return await App.find();
}

module.exports = {
    getApps
}