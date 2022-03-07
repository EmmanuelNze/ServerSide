const express = require('express');
const router = express.Router();

//HOME
router.get('/', (req, res) => {
    res.render('home');
});

//ABOUT
router.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About Our Holidays');
});

//CONTACT
router.get('/contact', (req, res) =>
    res.render('contact'));

//EXPORTING THE ROUTE
module.exports = router;