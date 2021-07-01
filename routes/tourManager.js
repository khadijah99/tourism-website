var express = require('express')
var router = express()
var TourPackage = require('../models/tourpackage')

var TourBooking = require('../models/restaurantbookings')
var TourReview = require('../models/restaurantreviews')
var TourManager = require ('../models/tourManager')
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant')
var PackageHotel = require('../models/tourPackageHotels')
var PackageRestaurant = require('../models/tourPackageRestaurants')


router.get('/', function(req, res, next) {
    res.send('respond with a resource');

});




router.get('/getToursByManagerId/:id', function(req, res, next) {
    Restaurant.find({   tourManager : req.params.id})
        .then((results) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(results);
        }, (err) => next(err))
        .catch((err) => next(err));

});



router.get('/tourPackage/bookings/:Id', function(req, res, next) {
   RestaurantBooking.find({restaurant : req.params.Id}).exec(function(error, results) {
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
router.get('/gethotelsForTourManager', function (req, res, next) {
    Hotel.find({})
        .then((results) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(results);
        }, (err) => next(err))
        .catch((err) => next(err));

});


router.get('/getrestaurantsForTourManager', function (req, res, next) {
    Restaurant.find({})
        .then((results) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(results);
        }, (err) => next(err))
        .catch((err) => next(err));

});

router.get('/getPackage/:ManagerId', function (req, res, next) {
    TourPackage.find({  tourManager: req.params.ManagerId})
        .then((results) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(results);
        }, (err) => next(err))
        .catch((err) => next(err));

});




//POST Operations

router.post('/createTour', function(req, res, next) {
    TourPackage.create(req.body)
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
var TourManager = require('../models/tourManager')

router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

router.get('/getToursByManagerId/:id', function (req, res, next) {
  Restaurant.find({ tourManager: req.params.id })
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

router.get('/tourPackage/bookings/:Id', function (req, res, next) {
  RestaurantBooking.find({ restaurant: req.params.Id }).exec(function (
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

router.get('/restaurant/bookings/:customerId', function (req, res, next) {
  HotelBooking.find({ customer: req.params.customerId })
    .sort('number')
    .exec(function (error, results) {
      if (error) {
        return next(error)
      }
      // Respond with valid data
      res.json(results)
    })
})

router.get('/hotel/reviews/:hoteId', function (req, res, next) {
  HotelReview.find({ hotelId: req.params.hotelId }).exec(function (
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

router.post('/createTour', function (req, res, next) {
  Restaurant.create(req.body)
    .then(
      hotel => {
        console.log('Hotel has been Added ', hotel)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(hotel)
      },
      err => next(err)
    )
    .catch(err => next(err))
})

router.post('/addmenu', function (req, res, next) {
  Room.create(req.body)
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



router.post('/tourManager/login', function (req, res, next) {
  var email = req.body.email
  var pass = req.body.email
  TourManager.find({ email: email, password: pass }).exec(function (
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



router.post('/tourManager/addHotelToPackage', function (req, res, next) {

    PackageHotel.create(req.body)
    .then((result) => {
        console.log('Class has been Added ', result);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(result);
    }, (err) => next(err))
    .catch((err) => next(err));
}



);

router.post('/tourManager/addRestaurantToPackage', function (req, res, next) {

    PackageRestaurant.create(req.body)
    .then((result) => {
        console.log('Class has been Added ', result);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(result);
    }, (err) => next(err))
    .catch((err) => next(err));
}
);


router.post('/tourManager/reg', function (req, res, next) {
  console.log(req.body)
  TourManager.create(req.body)
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

router.put('/hotel/cancelBooking:/:id', function (req, res, next) {
  RestaurantBooking.findOneAndUpdate(
    { _id: req.params.id },
    {
      status: 'cancel'
    },
    { new: true, upsert: false },
    function (error, results) {
      if (error) {
        return next(error)
      }
      // Respond with valid data
      res.json(results)
    }
  )
})

//Delete Operations
router.delete('/hotels/deleteRoom/:id', function (req, res, next) {
  Room.deleteOne({ _id: req.params.id }, function (error, results) {
    if (error) {
      return next(error)
    }
    // Respond with valid data
    res.json(results)
  })
})

router.delete('/package/deletePackage/:id', function(req, res, next) {
    TourPackage.deleteOne({ _id: req.params.id }, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});


module.exports = router;
