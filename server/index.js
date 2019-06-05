const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/dev');
require('./modals/Users');

mongoose.connect(keys.mongoURI);

const app = express();

const Users = mongoose.model('users');

// const test = Users.find({}, (err, res, req) => {
//     try{
//         console.log(res);
//     } catch(err) {
//         console.log(err);
//     }
// })

// app.get('/users', (req, res) => {
//     Users.find((err, data) => {
//       console.log(data);
//     });
//   });


app.get('/users', (request, response) => {
        Users.find({}, (err, users) => {  
        if (err) response.status(500).send()
        else response.status(200).send(users)
  })
})  


const PORT = process.env.PORT || 5000;
app.listen(PORT);