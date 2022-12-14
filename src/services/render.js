const axios = require('axios');
const alert = require('alert');

exports.warning = async (req, res) => {
  try {
    console.log(req.query.id);
    const response = await axios.delete(
      'http://localhost:' + process.env.PORT + '/delete',
      {
        params: { id: req.query.id },
      }
    );
    alert('Account Deleted');
    return res.redirect('/');
  } catch (e) {
    console.log(e);
  }
};
exports.home = async (req, res) => {
  try {
    const response = await axios.get(
      'http://localhost:' + process.env.PORT + '/allusers'
    );
    console.log(response.data); //we have to send response for axios to work
    res.render('index', { data: response.data });
  } catch (e) {
    res.send('oops some error occured');
    console.log(e);
  }
};

exports.addUser = (req, res) => {
  res.render('addUser');
};

exports.update = async (req, res) => {
  try {
    const id = req.query.id;

    const resp = await axios.get(
      'http://localhost:' + process.env.PORT + '/user',
      {
        params: { id },
      }
    );

    res.render('update', { data: resp.data });

    // res.render('update', { data: resp.data });
  } catch (e) {
    console.log(e);
    res.send('error');
  }
};
