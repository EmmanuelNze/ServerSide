const express = require('express')
const app = express()
const port = 3000
const home = require('./routes/home')
const staff = require('./routes/staff')
app.use(express.static('public'));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie('tracking', 'Look a cookie')
    res.render('home');
});

app.use('/', home)
app.use('/staff', staff)


// set up handlebars view engine
var handlebars = require('express-handlebars')
    .create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');





// 
// app.get('/',  (req, res) => {
//     res.type('text/plain');
//     res.send('Covid Holiday Tours');
// });


// custom 404 page
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// custom 500 page
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});




app.listen(port, () => console.log(`Example app listening on port ${port}!`))