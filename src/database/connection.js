const mongoose = require('mongoose');
const connect = async () => {
  try {
    const check = await mongoose.connect(
      'mongodb+srv://Yatharth:123@cluster0.b7nygtc.mongodb.net/recordsofEmployers?retryWrites=true&w=majority'
    );
    console.log('Connection to database successfull :)');
  } catch (e) {
    console.log(e);
    console.log("Can't connect to database :(");
  }
};

module.exports = connect;
