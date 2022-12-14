const express = require('express');
const env = require('dotenv');
const app = express();

const bodyParser = require('body-parser');
const router = require('./src/router/router');
const database = require('./src/database/connection');
const Model = require('./src/models/schema');
const exphbs = require('express-handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(router);
const hbs = require('hbs');

// setting up the view engine
app.set('view engine', 'hbs');
app.set('views', './src/views');

//setting up static folders
app.use(express.static('./public'));

//registering hbs partials
hbs.registerPartials('./src/views/Partials');

//register handlebars helper
hbs.registerHelper('inc', function (value) {
  return value + 1;
});

//calling the connection to database function
database();

app.listen(process.env.PORT || 80, () => {
  console.log(`Server currently running on port ${process.env.PORT || 80}`);
});
