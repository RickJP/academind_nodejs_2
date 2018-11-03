
const express = require('express');
const apth = require('path');

const router = express.Router();



app.post('/add-user', (req, res, next) => {
  users.push({ name: req.body.username });
  res.redirect('/users');
});