var express = require('express');
var router = express();
var Hotel = require('../models/hotel');
var Room = require('../models/room')
var HotelBooking = require('../models/hotelbookings')
var HotelReview = require('../models/hotelreviews')

const uri = "mongodb+srv://user:user@cluster0.hbwmf.mongodb.net/Travler?retryWrites=true&w=majority";
const mongoose = require("mongoose");
const EventManager = require('../models/eventManager');

mongoose.connect(uri, { useNewUrlParser: true }, function (err) {
    if (err) {
        throw err;
    }
    else{
        console.log("connection established");
    }
});
router.listen(5556, (err) => {
    if (err)
        throw err;
    
});

router.get('/', function(req, res, next) {
    res.send('respond with a resource');

});

// var hotel = Hotel({

// })
// var p = new EventManager({
//     name : "Moeed",
//     email : "msamoeed@gmail.com",
//     address : "House 145"
// })

// router.get('/posthotels', function(req, res, next) {
    
//     EventManager.create(p)
//     .then((hotel) => {
//         console.log('Hotel has been Added ', hotel);
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(hotel);
//     }, (err) => next(err))
//     .catch((err) => next(err));

  
// })




router.get('/gethotels', function(req, res, next) {
    Hotel.find({})
        .then((results) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(results);
        }, (err) => next(err))
        .catch((err) => next(err));

});

router.get('/gethotelsByManagerId/:id', function(req, res, next) {
    Hotel.find({hotelManager : req.params.id})
        .then((results) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(results);
        }, (err) => next(err))
        .catch((err) => next(err));

});


router.get('/gethotelByHotelId/:id', function(req, res, next) {
    Hotel.findById(req.params.id)
        .then((results) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(results);
        }, (err) => next(err))
        .catch((err) => next(err));

});

router.get('/hotelrooms/:id', function(req, res, next) {
    Room.find({_id : req.params.id}).sort('number').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});


router.get('/hotel/bookings/:hotelId', function(req, res, next) {
    HotelBooking.find({hotelId : req.params.hotelId}).sort('number').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});

router.get('/hotel/bookings/:customerId', function(req, res, next) {
    HotelBooking.find({customerId : req.params.customerId}).sort('number').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});


router.get('/hotel/reviews/:hoteId', function(req, res, next) {
    HotelReview.find({hotelId : req.params.hotelId}).exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});


//POST Operations
router.post('/addhotel', function(req, res, next) {
    Hotel.create(req.body)
        .then((hotel) => {
            console.log('Hotel has been Added ', hotel);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(hotel);
        }, (err) => next(err))
        .catch((err) => next(err));
});

router.post('/addroom', function(req, res, next) {
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


router.put('/hotel/cancelBooking:/:id', function(req, res, next) {
    HotelBooking.findOneAndUpdate({ _id: req.params.id }, {
           status : "cancel"
        }, { new: true, upsert: false },
        function(error, results) {
            if (error) {
                return next(error);
            }
            // Respond with valid data
            res.json(results);
        });
});





//Delete Operations
router.delete('/hotels/deleteRoom/:id', function(req, res, next) {
    Room.deleteOne({ _id: req.params.id }, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});


module.exports = router;