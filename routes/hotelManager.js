var express = require('express');
var router = express();
var Hotel = require('../models/hotel');
var Room = require('../models/room')
var HotelBooking = require('../models/hotelbookings')
var HotelReview = require('../models/hotelreviews')
var HotelManager = require('../models/hotelManager')

const uri = "mongodb+srv://user:user@cluster0.kka0n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongoose = require("mongoose");
const EventManager = require('../models/eventManager');
var cors = require('cors')
var bodyParser = require('body-parser');

var CustomerRoute = require('./tourist')
// Setting up basic middleware for all Express requests
router.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
router.use(bodyParser.json()); // Send JSON responses
router.use(cors());

router.use("/",CustomerRoute );

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

router.get('/', function (req, res, next) {
    res.send('respond with a resource');

});



router.get('/gethotels', function (req, res, next) {
    Hotel.find({})
        .then((results) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(results);
        }, (err) => next(err))
        .catch((err) => next(err));

});

router.get('/gethotelsByManagerId/:id', function (req, res, next) {
    console.log(req.params.id)
    Hotel.find({ hotelManager: req.params.id })
        .then((results) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(results);
        }, (err) => next(err))
        .catch((err) => next(err));
});


router.get('/gethotelByHotelId/:id', function (req, res, next) {
    Hotel.find({ hotelManager:  req.params.id})
        .then((results) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(results);
        }, (err) => next(err))
        .catch((err) => next(err));

});

router.get('/hotelrooms/:id', function (req, res, next) {
    Room.find({ hotelManager: req.params.id }).sort('number').exec(function (error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});


router.get('/hotel/bookings/:hotelId', function (req, res, next) {
    HotelBooking.find({ hotelId: req.params.hotelId }).sort('number').exec(function (error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});

router.delete("/hotel/bookingCancel/:bookingId", function (req, res, next) {
     HotelBooking.deleteOne(
    { _id: req.params.bookingId}, function (error, results) {
    if (error) {
    return next(error);
    }
    res.json(results); }
    ); });


router.get('/hotel/bookings/:hotelManagerId', function (req, res, next) {
    HotelBooking.find({ hotelManager: req.params.hotelManagerId }).sort('number').exec(function (error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});




router.get('/hotel/reviews/:hoteId', function (req, res, next) {
    HotelReview.find({ hotelId: req.params.hotelId }).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});


//POST Operations
router.post('/addhotel', function (req, res, next) {
    Hotel.create(req.body)
        .then((hotel) => {
            console.log('Hotel has been Added ', hotel);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

            res.json(hotel);
        }, (err) => next(err))
        .catch((err) => next(err));
});

router.post('/hotelManager/login', function (req, res, next) {
    var email = req.body.email
    var pass = req.body.password
    console.log(email);
    HotelManager.find({ email: email , password : pass}).exec(function (error, results) {
        if (error) {
            return next(error);
        }

        console.log(results)
        // Respond with valid data
        res.setHeader('Content-Type', 'application/json');
        res.json(results);
    }
   )
}
);

router.post('/hotelManager/reg', function (req, res, next) {
    console.log(req.body);
    HotelManager.create(req.body)
        .then((hotel) => {
            console.log('User has been Added ', hotel);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(hotel);
            
        }, (err) => next(err))
        .catch((err) => res("err"));
});


router.post('/addroom', function (req, res, next) {
    Room.create(req.body)
        .then((result) => {
            console.log('Class has been Added ', result);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
        .catch((err) => next(err));
});

//PUT Operations


router.put('/hotel/cancelBooking:/:id', function (req, res, next) {
    HotelBooking.findOneAndUpdate({ _id: req.params.id }, {
        status: "cancel"
    }, { new: true, upsert: false },
        function (error, results) {
            if (error) {
                return next(error);
            }
            // Respond with valid data
            res.json(results);
        });
});





//Delete Operations
router.delete('/hotels/deleteRoom/:id', function (req, res, next) {
    Room.deleteOne({ _id: req.params.id }, function (error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});


module.exports = router;