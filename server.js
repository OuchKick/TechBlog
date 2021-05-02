const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
  secret: process.env.SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// use session - and then use this information to create one when needed
app.use(session(sess));


// telling handlebars to create and be ready to be used latter
const hbs = exphbs.create({ helpers });

// These 2 lines of code, tell express, we start a thing called handlebars, and we're starting the engine to get it started
// express says great, and then we set it.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
// if set to false, express won't do the routes for you - 9/10 will be set to true
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


// IF IT'S SET TO FALSE, DATA WILL PERSIST AND THE TABLES WILL STAY
// IF WE DO TRUE, IT WILL DROP ALL DATA ON EACH LOAD
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});



