var express = require('express');
var router = express.Router();

var passport = require('passport');
var Account = require('../models/account');

/* GET home page. */
router.get('/', function (req, res) {
	  console.log(req.user);
      res.render('index', { user : req.user });
  });

router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
        	res.redirect('/');
            return res.render('index', { message: "Oops, the username is already taken!" });
        }

        passport.authenticate('local')(req, res, function () {
          res.redirect('courses');
        });
    });
  });

router.post('/login', passport.authenticate('local'), function(req, res) {

      if(req.user.username == "Admin"){
      	res.redirect('home');
      } else {
      	res.redirect('courses');
      }

  });

router.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
  });

router.get('/ping', function(req, res){
      res.send("pong!", 200);
 });

router.get('/home', function(req, res) {
      res.render('home', { user : req.user, tab_title : "Home" });
  });

router.get('/stats', function(req, res) {
      res.render('stats', { user : req.user, tab_title : "Statistics" });
  });

router.get('/skarve', function(req, res) {
      res.render('skarve', { user : req.user, tab_title : "H A T C H" });
  });


router.get('/courses', function(req, res) {
      res.render('courses', { user : req.user, tab_title : "H A T C H" });
  });

router.get('/scoreboard', function(req, res) {
      res.render('scoreboard', { user : req.user, tab_title : "H A T C H" });
  });

router.get('/RP101', function(req, res) {
      res.render('RP101', { user : req.user, tab_title : "H A T C H" });
  });

router.get('/course', function(req, res) {
      res.render('course', { user : req.user, tab_title : "H A T C H" });
  });


module.exports = router;
