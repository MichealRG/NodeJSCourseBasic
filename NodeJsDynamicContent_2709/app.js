const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug'); //setting global values which nodejs understand
//view engine is one pre-defined value (same as views)
// app.set('views', 'views'); //vies it's default that why this confiugration value we didnt set earlier 

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {docTitle: '404 - Not Found'});
});

app.listen(3000);
