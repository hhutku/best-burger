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

router.post("/api/burgers", function (req, res) {
    burger.addOneBurger([
        "burger_name", "devoured"
    ], [
            req.body.name, req.body.devoured
        ], function (result) {
            res.json({ id: result.insertId });
        });
});


module.exports = router;