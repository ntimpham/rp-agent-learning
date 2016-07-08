var express = require('express');
var router = express.Router();

//Models 
var Module = require('../models/module');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('DEDICATED TO APIs');
});

//-------------------------
//       MODULE API
//-------------------------

// GET - Retrieve all modules
router.get('/modules', function(req, res) {
    Module.find({}, function(err, modules) {
        res.json(modules);
    });
});

// POST - Create new module
router.post('/modules', function(req, res) {
    var module = new Module();
    module.moduleId = req.body.moduleId;
    module.moduleName = req.body.moduleName;
    module.insideNode.push(req.body.insideNode);
    module.moduleType = req.body.moduleType;
    module.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json({
            message: '201: Successfully created new module'
        });
    });
});

// PUT - Update a module
router.put('/modules/update/:moduleId', function(req, res) {
    Module.findOne({
        moduleId: req.params.moduleId
    }, function(err, module) {
        console.log(module);
        if (err) {
            res.send(err);
        }

        if(req.body.moduleName){
        	module.moduleName = req.body.moduleName;
        }

        module.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json({
                message: 'Successfully updated module!'
            });
        });
    });
});

// PUT - Update a node within a module
router.put('/modules/update/:moduleId/node/:nodeIndex', function(req, res) {
    Module.findOne({
        moduleId: req.params.moduleId
    }, function(err, module) {
        console.log(module);
        if (err) {
            res.send(err);
        }

        //TO BE FIXED
        console.log(req.params.nodeIndex);
        console.log(module.insideNode);

        if(req.body.moduleType){
        	module.moduleType = req.body.moduleType;
        }

        module.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json({
                message: 'Successfully updated module!'
            });
        });
    });
});


module.exports = router;
