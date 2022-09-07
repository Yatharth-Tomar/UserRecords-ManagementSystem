const axios = require('axios');
const POR = 80;
exports.warning = async (req, res) => {
  try {
    console.log(req.query.id);
    const response = await axios.delete('http://localhost:' + POR + '/delete', {
      params: { id: req.query.id },
    });
    return res.redirect('/');
  } catch (e) {
    console.log(e);
  }
};
exports.home = async (req, res) => {
  try {
    const response = await axios.get('http://localhost:' + POR + '/allusers');
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

    const resp = await axios.get('http://localhost:' + POR + '/user', {
      params: { id },
    });

    res.render('update', { data: resp.data });

    // res.render('update', { data: resp.data });
  } catch (e) {
    console.log(e);
    res.send('error');
  }
};
