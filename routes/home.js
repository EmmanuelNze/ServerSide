const express = require('express');
const router = express.Router();

//HOME

router.get('/', (req, res) => {

    var message = "";

    if (req.cookies.tracking) {
        var dateLastVisit = req.cookies.tracking;
        var message = "Welcome back, you last visited on :" + dateLastVisit;
    }

    var currentDate = new Date();
    res.cookie('tracking', currentDate.toUTCString());

    res.render('home', { 'message': message });
});

router.get('/', (req, res) => {

    var message = "";

    if (req.signedCookies.tracking) {
        var dateLastVisit = req.signedCookies.tracking;
        var message = "Welcome back, you last visited on : " + dateLastVisit;
    }

    var currentDate = new Date();
    res.cookie('tracking', currentDate.toDateString(), { signed: true });

    res.render('home', { 'message': message });
});




//ABOUT
router.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About Our Holidays');
});

//CONTACT
router.get('/contact', (req, res) =>
    res.render('contact'));

router.get('/', (req, res) => {
    res.cookie('tracking', 'Look a cookie');
    res.render('home');
});

//EXPORTING THE ROUTE
module.exports = router;