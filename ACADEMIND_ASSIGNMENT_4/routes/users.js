const express = require('express');
const apth = require('path');

const router = express.Router();

const users = [];

app.get('/users', (req, res, next) => {
  res.render('users', {
    pageTitle: 'User',
    users: users,
    hasUsers: users.length > 0
  });
});



exports.routes = router;

