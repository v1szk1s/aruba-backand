let ObjectId = require('mongodb').ObjectId; 
const db = require('../config/db.config');
const dbo = db.client.db("aruplace").collection("app");

async function getApps(){
    let apps = await dbo.find({}).toArray();
    return apps;
}

async function deployApp(app){
    return "deploying app"
}

module.exports = {
    getApps,
    deployApp
}