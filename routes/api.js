var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('DEDICATED TO APIs');
});

// ROUTES FOR MODELS
router.get('/courses', function(req, res) {
    course.find({}, function(err, courses) {
        res.json(courses);
    });
});

module.exports = router;
