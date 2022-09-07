const mongoose = require('mongoose');

//Define a Schema
//here schema is a constructor so use capital letter to define it
const SchemaForEmployers = mongoose.Schema;
const Schema1 = new SchemaForEmployers({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});
const Model1 = mongoose.model('Model1', Schema1);
module.exports = Model1;
