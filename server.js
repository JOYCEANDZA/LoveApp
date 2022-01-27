const express = require('express');
const {engine} = require('express-handlebars');

const app = express();
//ENVIRONMENT VAR FOR PORT (development)
const port = process.env.PORT || 7000; // environment variable for port (Production)


//setup view engine
app.engine("handlebars",engine({defaultLayout:"main"}));
app.set('view engine','handlebars');

app.get('/',(req,res) => {
    res.render('home', {
        title: 'Home'
    });
});

app.get('/about',(req,res) => {
    res.render('about', {
        title: 'About'
    });
});

app.get('/contact',(req,res) => {
    res.render('contact', {
        title: 'Contact'
    });
});

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});  

