const { model } = require("mongoose");
const App = require("../models/app.model");
const AppServices = require("../services/app.service");

const k8s = require('@kubernetes/client-node');
const kc = new k8s.KubeConfig();
kc.loadFromDefault();
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

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
    
    const name2 = user._id;
    
    const namespace = {
        metadata: {
            name: name2,
        },
    };

    try {
        const createNamespaceRes = await k8sApi.createNamespace(namespace);
        console.log('New namespace created: ', createNamespaceRes.body);

        const readNamespaceRes = await k8sApi.readNamespace(namespace.metadata.name);
        console.log('Namespace: ', readNamespaceRes.body);

        // await k8sApi.deleteNamespace(namespace.metadata.name, {});
    } catch (err) {
        console.error(err);
    }

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

async function getPods(req, res){
    let podsRes;
    try {
        podsRes = await k8sApi.listNamespacedPod('frontend');
        console.log(podsRes.body);
    } catch (err) {
        console.error(err);
    }
    return res.send(podsRes);
}


module.exports = {
    getApps,
    deployApp,
    getApp,
    getDeployedApp,
    getPods
}
