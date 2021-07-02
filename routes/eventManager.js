var express = require('express')
var router = express()
var Event = require('../models/event')
//var EventBooking = require('../models/eventbookings')
var EventManager = require('../models/eventManager')

var cors = require('cors')
var bodyParser = require('body-parser')
var jwt = require('./jwt_configuration')

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

// router.get('/getEventsBookings:/:id', function(req, res, next) {
//     Events.find({eventId : req.params.id})
//         .then((results) => {
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'application/json');
//             res.json(results);
//         }, (err) => next(err))
//         .catch((err) => next(err));

// });

router.post('/getEventManagers', function (req, res, next) {
  EventManager.find({})
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
    // Create token
    // var token = jwt.createAccessToken({
    //   uid: results._id,
    //   role: 'eventManager'
    // })
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

// app.put('/editEvent/:eventId/:eventManagerId', (req, res, next) => {
//   var eventID = req.params.eventId
//   var auth = req.headers.authorization
//   console.log(req.body)
//   jwt.decodeToken(auth, (err, decodedKey) => {
//     if (err) {
//       console.log(err)
//       resStatusAndMessage(res, 400, err)
//     } else {
//       if (
//         decodedKey.uid !== req.params.eventManagerId &&
//         decodedKey.role !== 'Event Manager'
//       ) {
//         resStatusAndMessage(
//           res,
//           400,
//           'You are not authorized to edit this document'
//         )
//       } else {
//         Event.findByIdAndUpdate(
//           req.params.eventId,

//           req.body,

//           (err, docs) => {
//             if (err) {
//               console.log(err)
//               resStatusAndMessage(res, 500, err)
//             } else {
//               console.log(docs)
//               res.json(docs)
//             }
//           }
//         )
//       }
//     }
//   })
// })

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
