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
          res.redirect('home');
        });
    });
  });

router.post('/login', passport.authenticate('local'), function(req, res) {
      res.redirect('home');
  });

router.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
  });

router.get('/ping', function(req, res){
      res.send("pong!", 200);
 });

router.get('/home', function(req, res) {
      res.render('home', { user : req.user });
  });

router.get('/stats', function(req, res) {
      res.render('stats', { user : req.user });
  });




module.exports = router;
