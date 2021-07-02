var express = require('express')
var router = express.Router()
var Hotel = require('../models/hotel')
var Room = require('../models/room')
var HotelBooking = require('../models/hotelbookings')
var hotelReview = require('../models/hotelreviews')
const Events = require('../models/event')
const Tourist = require('../models/tourist')
var HotelFav = require('../models/favoriteHotel')
var RestaurantFav = require('../models/favoriteRestaurant')

/* GET users listing. */
router.get('/hotelsAll', function (req, res, next) {
  Hotel.find(function (error, results) {
    if (error) {
      return next(error)
    }

    results.json(results)
  })
})

router.get('/hotel/bookings/:customerId', function (req, res, next) {
  HotelBooking.find({ customerId: req.params.customerId })
    .sort('number')
    .exec(function (error, results) {
      if (error) {
        return next(error)
      }
      // Respond with valid data
      res.json(results)
    })
})

router.get('/getEventsBookings:/:id', function (req, res, next) {
  Events.find({ customerId: req.params.id })
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

router.get('/getHotelsByName/:name', function (req, res, next) {
  Hotel.find({ name: req.params.name })
    .sort('name')
    .exec(function (error, results) {
      if (error) {
        return next(error)
      }
      // Respond with valid data
      res.json(results)
    })
})

router.get('/getHotelsByCity/:city', function (req, res, next) {
  Hotel.find({ city: req.params.city })
    .sort('name')
    .exec(function (error, results) {
      if (error) {
        return next(error)
      }
      // Respond with valid data
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.json(results)
    })
})

//POSTS

router.post('/tourist/login', function (req, res, next) {
  var email = req.body.email
  var pass = req.body.email
  Tourist.find({ email: email, password: pass }).exec(function (
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

router.post('/tourist/bookHotel', function (req, res, next) {
  console.log(req.body)
  HotelBooking.create(req.body)
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

router.post('/tourist/reg', function (req, res, next) {
  console.log(req.body)
  Tourist.create(req.body)
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

router.post('/tourist/addHotelFav', function (req, res, next) {
  console.log(req.body)
  HotelFav.create(req.body)
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

router.post('/tourist/addRestaurantFav', function (req, res, next) {
  console.log(req.body)
  RestaurantFav.create(req.body)
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

module.exports = router
