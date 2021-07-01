var express = require('express')
var router = express()
var Event = require('../models/event')
//var EventBooking = require('../models/eventbookings')
var EventManager = require('../models/eventManager')

//GET Operations
router.get('/geteventsByManagerId/:id', function (req, res, next) {
  Event.find({ eventManager: req.params.id })
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
router.post('/addevent', function (req, res, next) {
  Event.create(req.body)
    .then(
      hotel => {
        console.log('Event has been Added ', hotel)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(hotel)
      },
      err => next(err)
    )
    .catch(err => next(err))
})

router.post('/eventManager/login', function (req, res, next) {
  var email = req.body.email
  var pass = req.body.password
  console.log(email)
  EventManager.find({ email: email, password: pass }).exec(function (
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

router.post('/eventManager/reg', function (req, res, next) {
  console.log(req.body)
  EventManager.create(req.body)
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
router.put('/editEvent/:eventId', (req, res, next) => {
  Event.findByIdAndUpdate(
    req.params.eventId,

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
router.delete('/events/deleteEvent/:eventId', function (req, res, next) {
  Event.deleteOne({ _id: req.params.eventId }, function (error, results) {
    if (error) {
      return next(error)
    }
    res.json(results)
  })
})

module.exports = router
