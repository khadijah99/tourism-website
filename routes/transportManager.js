var express = require('express')
var router = express()

const uri =
  'mongodb+srv://user:user@cluster0.hbwmf.mongodb.net/Travler?retryWrites=true&w=majority'
const mongoose = require('mongoose')
const Transport = require('../models/transport')
const TransportBookings = require('../models/transportBookings')
const TransportManager = require('../models/transportManager')

//GET Operations
router.get('/gettransportByManagerId/:id', function (req, res, next) {
  Transport.find({ transportManager: req.params.id })
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

// router.get('/event/bookings/:eventId', function (req, res, next) {
//   EventBooking.find({ eventId: req.params.eventId }).exec(function (
//     error,
//     results
//   ) {
//     if (error) {
//       return next(error)
//     }
//     // Respond with valid data
//     res.json(results)
//   })
// })

//POST Operations
router.post('/addtransport', function (req, res, next) {
  Transport.create(req.body)
    .then(
      hotel => {
        console.log('Transport has been Added ', hotel)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(hotel)
      },
      err => next(err)
    )
    .catch(err => next(err))
})

router.post('/transportManager/login', function (req, res, next) {
  var email = req.body.email
  var pass = req.body.password
  console.log(email)
  TransportManager.find({ email: email, password: pass }).exec(function (
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

router.post('/transportManager/reg', function (req, res, next) {
  console.log(req.body)
  TransportManager.create(req.body)
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
router.put('/editTransport/:transportId', (req, res, next) => {
  Transport.findByIdAndUpdate(
    req.params.transportId,

    req.body,

    (err, docs) => {
      if (err) {
        console.log(err)
        resStatusAndMessage(res, 500, err)
      } else {
        console.log(docs)
        res.json(docs)
      }
    }
  )
})

//Delete Operations
router.delete('/transport/deleteTransport/:transportId', function (
  req,
  res,
  next
) {
  Transport.deleteOne({ _id: req.params.transportId }, function (
    error,
    results
  ) {
    if (error) {
      return next(error)
    }
    res.json(results)
  })
})

module.exports = router
