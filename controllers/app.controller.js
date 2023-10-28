const { model } = require("mongoose");
const App = require("../models/app.model");
const AppServices = require("../services/app.service");

async function getApps(req, res) {
    let apps = await AppServices.getApps();
    res.status(200).json(apps);
} 

async function deployApp(req, res) {
    let appId = req.body;
    let result = await AppServices.deployApp(appId);
    res.status(200).json(result);
}

module.exports = {
    getApps,
    deployApp
}