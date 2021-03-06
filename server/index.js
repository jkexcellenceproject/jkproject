const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
bodyParser = require('body-parser')
const keys = require('./config/dev');
require('./modals/Article');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json())

require('./routes/articleRoutes')(app); 


const PORT = process.env.PORT || 5000;
app.listen(PORT);