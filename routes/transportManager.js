var express = require('express');
var router = express();


const uri = "mongodb+srv://user:user@cluster0.hbwmf.mongodb.net/Travler?retryWrites=true&w=majority";
const mongoose = require("mongoose");
const Transport = require('../models/transport');
const TransportBookings = require('../models/transportBookings');
const TransportManager = require("../models/transportManagera")

mongoose.connect(uri, { useNewUrlParser: true }, function (err) {
    if (err) {
        throw err;
    }
    else {
        console.log("connection established");
    }
});
router.listen(5556, (err) => {
    if (err)
        throw err;

});

router.get('/getEventsByEventManager:/:id', function (req, res, next) {
    Events.find({ EventManager: req.params.id })
        .then((results) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(results);
        }, (err) => next(err))
        .catch((err) => next(err));

});

router.get('/getEventsBookings:/:id', function (req, res, next) {
    Events.find({ eventId: req.params.id })
        .then((results) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(results);
        }, (err) => next(err))
        .catch((err) => next(err));

});


router.post('/transportManager/login', function (req, res, next) {
    var email = req.body.email
    var pass = req.body.email
    TransportManager.find({ email: email, password: pass }).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    }
    )
}

);

router.post('/transportManager/reg', function (req, res, next) {
    console.log(req.body);
    TransportManager.create(req.body)
        .then((hotel) => {
            console.log('User has been Added ', hotel);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(hotel);

        }, (err) => next(err))
        .catch((err) => res("err"));
});


router.post('/getEventManagers', function (req, res, next) {
    EventManager.find({})
        .then((results) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(results);
        }, (err) => next(err))
        .catch((err) => next(err));

});