const express = require('express');
const route = express.Router();
const render = require('../services/render');
const api = require('../controller/controller');

route.get('/', render.home);
route.get("/delete1",render.warning);
route.get('/update', render.update);
route.get('/addUser', render.addUser);

module.exports = route;

//for api

route.post('/createAccount', api.create);
route.get('/allusers', api.find);

route.get('/user', api.findbyid);
route.post('/upddate/:id', api.update);
route.delete('/delete', api.delete);
