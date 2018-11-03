const express = require('express');
const path = require('path');

const router = express.Router();

const users = [];



router.post('/user', (req, res, next) => {
  users.push(req.body.username);
  res.redirect('/users');
})

router.get('/', (req, res, next) => {
  res.render('index', {
    pageTitle: 'Home',
    greeting: 'Welcome to my page.'
  });
});

module.exports = router;

