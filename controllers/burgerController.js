const burger = require('../models/burger');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll(data => {
        const burgerObj = {
            burger: data
        };
        // console.log(burgerObj);
        // res.render('index', burgerObj);
        res.send(burgerObj)
    });
});


module.exports = router;