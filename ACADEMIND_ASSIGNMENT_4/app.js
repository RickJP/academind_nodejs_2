const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const homeRoutes = require('./routes/index');
const usersData = require('./routes/users');

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))


app.use(usersData.routes);
app.use(homeRoutes);


// Catch all other routes
app.use((req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Page NotFound!', 
    path: '',
    message: 'Page Not Found!'
  });
});

app.listen(4500);