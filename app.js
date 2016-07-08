var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Routing files
var routes = require('./routes/index');
var users = require('./routes/users');
var api = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


//Database connection string
mongoose.connect('mongodb://localhost/test');

//Database connection debugger
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

//Schema exportations [DEBUGGING PURPOSE]
var Kitten = require('./models/kitten');
var Module = require('./models/module');

var tim = new Kitten({name: "tim"});
//console.log(tim.name);

var mod = new Module({
    moduleId: "RP2016",
    moduleName: "Make the perfect sandwich!",
    insideNode: [
                  {
                    nodeIndex: 0,
                    nodePrerequisites: { score: null, courseId: null, nodeIndex: null},
                    content: { title: "Les temps sont durs", body:"just add fkn tomato", links: "none"},
                    type: "Lesson"
                  },

                  {
                    nodeIndex: 1,
                    nodePrerequisites: { score: true, courseId: "RP2016", nodeIndex: 0},
                    content: { title: "What is the special ing", body:"do it pls", links: "none", quizId: "QRP2016"},
                    type: "Quiz"
                  }
    ]
});
/*
console.log("Node Summary:");
console.log(mod);
console.log("----------------");
console.log("Node 0:")
console.log(mod.insideNode[0]);
console.log("---------------");
console.log("Node 1:");
console.log(mod.insideNode[1]);
console.log("test");
*/
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Routing files
app.use('/', routes);
app.use('/users', users);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
