const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const data = require('./data.js');
const accounts = data.accounts;
const users = data.users;
const writeJSON = data.writeJSON;
const accountRoutes = require('./routes/accounts');
const servicesRoutes = require('./routes/services');
const { ap } = require('ramda');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));

app.get('/', function (req, res){
    res.render('index', {title: 'Account Summary', accounts});
});

app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);

app.get('/profile', (req, res) => res.render('profile', {user: users[0] }));

app.listen(3000, () => console.log('PS project running on port 3000!'));