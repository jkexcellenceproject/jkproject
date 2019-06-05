const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/dev');
require('./modals/Blog');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/blogsRoutes')(app); 


const PORT = process.env.PORT || 5000;
app.listen(PORT);