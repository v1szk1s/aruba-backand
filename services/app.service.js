let ObjectId = require('mongodb').ObjectId; 
const db = require('../config/db.config');
const dbo = db.client.db("aruplace").collection("app");
const dboUser = db.client.db("aruplace").collection("user");

async function getApps(){
    let apps = await dbo.find({}).toArray();
    return apps;
}

async function deployApp(appId, date, user){
    let app = await dbo.findOne({_id: ObjectId(appId)});
    await dboUser.updateOne({_id: ObjectId(user._id)}, {$push: {deployedApps: {date: date, app: app}}});
    return app;
}

async function getApp(appId){
    let app = await dbo.findOne({_id: ObjectId(appId)});
    return app;
}

async function getDeployedApp(user){
    let apps = await dboUser.findOne({_id: ObjectId(user._id)});
    return apps;
}

module.exports = {
    getApps,
    deployApp,
    getApp,
    getDeployedApp
}