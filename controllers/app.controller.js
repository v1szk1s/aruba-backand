const { model } = require("mongoose");
const App = require("../models/app.model");
const AppServices = require("../services/app.service");

async function getApps(req, res) {
    let apps = await AppServices.getApps();
    res.status(200).json(apps);
} 

async function deployApp(req, res) {
    let appId = req.params.id;
    console.log(appId);
    let result = await AppServices.deployApp(appId);
    res.status(200).json(result);
}

async function getApp(req, res) {
    let appId = req.params.id;
    let app = await AppServices.getApp(appId);
    res.status(200).json(app);
}

module.exports = {
    getApps,
    deployApp,
    getApp
}