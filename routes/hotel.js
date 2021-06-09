var express = require('express');
var router = express.Router();
var Hotel = require('../models/hotel');
var Room = require('../models/room')
router.get('/', function(req, res, next) {
    res.send('respond with a resource');

});

router.get('/hotelsAll', function(req, res, next) {
    Hotel.find((function(error, results) {
        if (error) {
            return next(error);
        }
        
        results.json(results);
    }))
});


    


router.get('/hotels', function(req, res, next) {
    Student.find().sort('name').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});

router.get('/hotels/:id', function(req, res, next) {
    Hotel.findById(req.params.id)
        .then((teacher) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(teacher);
        }, (err) => next(err))
        .catch((err) => next(err));

});

router.get('/rooms', function(req, res, next) {
    Teacher.find().sort('number').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});


//POST Operations
router.post('/addhotel', function(req, res, next) {
    Teacher.create(req.body)
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
router.put('/room/:cid/Student/:sid', function(req, res, next) {
    Class.findOneAndUpdate({ _id: req.params.cid }, {
            "$push": {
                "students": {
                    "sid": req.params.sid
                }
            }
        }, { new: true, upsert: false },
        function(error, results) {
            if (error) {
                return next(error);
            }
            // Respond with valid data
            res.json(results);
        });
});



router.put('/class/:cid/teacher/:tid', function(req, res, next) {
    Class.findOneAndUpdate({ _id: req.params.cid }, { teacher: req.params.tid }, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});
router.put('/class/:cid', function(req, res, next) {
    res.send('respond with a resource');
});

//Delete Operations
router.delete('/delteacher/:id', function(req, res, next) {
    Teacher.deleteOne({ _id: req.params.id }, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});
router.delete('/delclass/:id', function(req, res, next) {
    Class.deleteOne({ _id: req.params.id }, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});
router.delete('/delstudent/:id', function(req, res, next) {
    Student.deleteOne({ _id: req.params.id }, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});
module.exports = router;