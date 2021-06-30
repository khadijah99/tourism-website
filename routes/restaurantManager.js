var express = require('express');
var router = express();
var Restaurant = require('../models/restaurant');

var RestaurantBooking = require('../models/restaurantbookings')
var RestaurantReview = require('../models/restaurantreviews')
var  RestaurantManager = require('../models/restaurantManager')
const uri = "mongodb+srv://user:user@cluster0.hbwmf.mongodb.net/Travler?retryWrites=true&w=majority";
const mongoose = require("mongoose");


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




router.get('/getrestaurantByManagerId/:id', function(req, res, next) {
    Restaurant.find({ restaurantManager : req.params.id})
        .then((results) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(results);
        }, (err) => next(err))
        .catch((err) => next(err));

});



router.get('/restaurant/bookings/:restaurantId', function(req, res, next) {
   RestaurantBooking.find({restaurant : req.params.restaurantId}).exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});

router.get('/restaurant/bookings/:customerId', function(req, res, next) {
    HotelBooking.find({customer: req.params.customerId}).sort('number').exec(function(error, results) {
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
router.post('/addrestaurant', function(req, res, next) {
    Restaurant.create(req.body)
        .then((hotel) => {
            console.log('Hotel has been Added ', hotel);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(hotel);
        }, (err) => next(err))
        .catch((err) => next(err));
});

router.post('/addmenu', function(req, res, next) {
    Room.create(req.body)
        .then((result) => {
            console.log('Class has been Added ', result);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
        .catch((err) => next(err));
});

router.post('/restaurantManager/login', function (req, res, next) {
    var email = req.body.email
    var pass = req.body.email
    RestaurantManager.find({ email: email, password: pass }).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    }
    )
}

);

router.post('/restaurantManager/reg', function (req, res, next) {
    console.log(req.body);
    RestaurantManager.create(req.body)
        .then((hotel) => {
            console.log('User has been Added ', hotel);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(hotel);
            
        }, (err) => next(err))
        .catch((err) => res("err"));
});
//PUT Operations


router.put('/hotel/cancelBooking:/:id', function(req, res, next) {
    RestaurantBooking.findOneAndUpdate({ _id: req.params.id }, {
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