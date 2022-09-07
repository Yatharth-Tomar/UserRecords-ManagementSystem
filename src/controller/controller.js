const mongoose = require('mongoose');
const { findByIdAndUpdate } = require('../models/schema');

const Model = require('../models/schema');

exports.create = async (req, res) => {
  try {
    const details = await new Model({
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      status: req.body.status,
    });
    const save = await details.save();
    return res.redirect('/');
  } catch (e) {
    res.rdirect('oops cant create the document :(');
    console.log(e);
  }
};
exports.find = async (req, res) => {
  try {
    const info = await Model.find();
    res.send(info);

    console.log('data recieved');
  } catch (e) {
    res.send('Cannot find the document at the moment');
    console.log(e);
  }
};

exports.findbyid = async (req, res) => {
  try {
    const id = req.query.id;
    const info = await Model.findById(id);
    res.send(info);
  } catch (e) {
    res.send('Cannot find the document at the moment');
    console.log(e);
  }
};

exports.update = async (req, res) => {
  try {
    console.log(req.params.id)
    const updateD = await Model.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      status: req.body.status,
    });
    return res.redirect("/");
  } catch (e) {
    res.send('Cannot update :(');
    console.log(e);
  }
};

exports.delete = async (req, res) => {
  try {
   
    const del = await Model.findByIdAndDelete(req.query.id);
    res.send('document deleted successfully :(');
  } catch (e) {
    console.log(e);
    res.send('Cant delete be our guest for some more days :)');
  }
};

// req.query will return a JS object after the query string is parsed.

// /user?name=tom&age=55 - req.query would yield {name:"tom", age: "55"}

// req.params will return parameters in the matched route. If your route is /user/:id and you make a request to /user/5 - req.params would yield {id: "5"}

// req.param is a function that peels parameters out of the request. All of this can be found here.
