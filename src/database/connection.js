const mongoose = require('mongoose');
const connect = async () => {
  try {
    const check = await mongoose.connect(process.env.URL);
    console.log('Connection to database successfull :)');
  } catch (e) {
    console.log(e);
    console.log("Can't connect to database :(");
  }
};

module.exports = connect;
