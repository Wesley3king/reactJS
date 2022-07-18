const express = require("express");
const routes = require("express").Router();
const Controler = require("./Controler");

//configura o json
routes.use(express.json());


routes.get('/', async (req, res) => {
    Controler.index(req, res).catch(console.log);
});

routes.post('/add', (req, res) => {
    Controler.createLearning(req, res).catch(console.log);
});

module.exports = routes;