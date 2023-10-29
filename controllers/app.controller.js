const { model } = require("mongoose");
const App = require("../models/app.model");
const AppServices = require("../services/app.service");

async function getApps(req, res) {
    let apps = await AppServices.getApps();
    res.status(200).json(apps);
} 

async function deployApp(req, res) {
    let appId = req.params.id;
    const user = req.user;
    const date = new Date();
    let result = await AppServices.deployApp(appId, date, user);
    console.log(result);
    res.status(200).json(result);
}

async function getApp(req, res) {
    let appId = req.params.id;
    let app = await AppServices.getApp(appId);
    res.status(200).json(app);
}

async function getDeployedApp(req, res) {
    const user = req.user;
    let apps = await AppServices.getDeployedApp(user);
    res.status(200).json(apps);
}


module.exports = {
    getApps,
    deployApp,
    getApp,
    getDeployedApp
}