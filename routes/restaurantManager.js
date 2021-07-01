var express = require('express')
var router = express()
var Restaurant = require('../models/restaurant')
var Table = require('../models/table')
var RestaurantBooking = require('../models/restaurantbookings')
var RestaurantReview = require('../models/restaurantreviews')
var RestaurantManager = require('../models/restaurantManager')
const uri =
    'mongodb+srv://user:user@cluster0.kka0n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const mongoose = require('mongoose')

//GET Operations
router.get('/getrestaurantByManagerId/:id', function (req, res, next) {
    Restaurant.find({ restaurantManager: req.params.id })
        .then(
            results => {
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.json(results)
            },
            err => next(err)
        )
        .catch(err => next(err))
})

router.get('/getTables/:id', function (req, res, next) {
  Table.find({ restaurant: req.params.id })
    .then(
      results => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(results)
      },
      err => next(err)
    )
    .catch(err => next(err))
})

router.get('/restaurant/bookings/:restaurantId', function (req, res, next) {
    RestaurantBooking.find({ restaurantId: req.params.restaurantId }).exec(
        function (error, results) {
            if (error) {
                return next(error)
            }
            // Respond with valid data
            res.json(results)
        }
    )
})

// router.get('/restaurant/bookings/:customerId', function(req, res, next) {
//     HotelBooking.find({customer: req.params.customerId}).sort('number').exec(function(error, results) {
//         if (error) {
//             return next(error);
//         }
//         // Respond with valid data
//         res.json(results);
//     });
// });

router.get('/restaurant/reviews/:restaurantId', function (req, res, next) {
    HotelReview.find({ hotelId: req.params.restaurantId }).exec(function (
        error,
        results
    ) {
        if (error) {
            return next(error)
        }
        // Respond with valid data
        res.json(results)
    })
})

//POST Operations
router.post('/addrestaurant', function (req, res, next) {
    Restaurant.create(req.body)
        .then((hotel) => {
            console.log('Hotel has been Added ', hotel);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(hotel);
        }, (err) => next(err))
        .catch((err) => next(err));
});

router.post('/addmenu', function (req, res, next) {
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
    var pass = req.body.password
    console.log(email)
    console.log(pass)
    RestaurantManager.find({ email: email, password: pass }).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    }
    )
        .catch(err => next(err))
})

router.post('/addTable', function (req, res, next) {
    Table.create(req.body)
        .then(
            result => {
                console.log('Class has been Added ', result)
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.json(result)
            },
            err => next(err)
        )
        .catch(err => next(err))
})

router.post('/restaurantManager/login', function (req, res, next) {
    var email = req.body.email
    var pass = req.body.password
    console.log(email)
    RestaurantManager.find({ email: email, password: pass }).exec(function (
        error,
        results
    ) {
        if (error) {
            return next(error)
        }
        // Respond with valid data
        res.setHeader('Content-Type', 'application/json')
        res.json(results)
    })
})

router.post('/restaurantManager/reg', function (req, res, next) {
    console.log(req.body)
    RestaurantManager.create(req.body)
        .then(
            hotel => {
                console.log('User has been Added ', hotel)
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.json(hotel)
            },
            err => next(err)
        )
        .catch(err => res('err'))
})
//PUT Operations

//Delete Operations
router.delete('/restaurants/deleteRestaurant/:restaurantId', function (
    req,
    res,
    next
) {
    Restaurant.deleteOne({ _id: req.params.restaurantId }, function (
        error,
        results
    ) {
        if (error) {
            return next(error)
        }
        res.json(results)
    })
})

router.delete('/deleteTable/:tableId', function (req, res, next) {
  Table.deleteOne({ _id: req.params.tableId }, function (error, results) {
    if (error) {
      return next(error)
    }
    res.json(results)
  })
})

module.exports = router
