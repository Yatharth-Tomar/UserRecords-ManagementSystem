const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const router = require('./router/router');
const database = require('./database/connection');
const Model = require('./models/schema');
const exphbs = require('express-handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(router);
const hbs = require('hbs');

// setting up the view engine
app.set('view engine', 'hbs');
app.set('views', './views');

//setting up static folders
app.use(express.static('../public'));

//registering hbs partials
hbs.registerPartials('./views/Partials');

//register handlebars helper
hbs.registerHelper('inc', function (value) {
  return value + 1;
});

//calling the connection to database function
database();

app.listen(PORT, () => {
  console.log('Server currently running on port 3000');
});
