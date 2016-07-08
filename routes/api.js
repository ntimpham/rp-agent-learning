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

    //module.insideNode.push(req.body.insideNode);
  	//console.log(req.body.insideNode);
  	//console.log(req.body.insideNode.length)

  	for(var i = 0; i < req.body.insideNode.length; i++)
  	{
  		console.log("Added index: " + i);
  		module.insideNode.push(req.body.insideNode[i]);
  	}

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
        
        if (err) {
            res.send(err);
        }

        if(req.body.nodeIndex){
        //	module.insideNode[req.params.nodeIndex].nodeIndex = req.body.nodeIndex;	
        	console.log("djole");
        }
        
        //console.log(req.body.nodeIndex);
        //console.log(req.body.title);
        var test = { 
        				title: "test",
        				body: "test",
        				links: "test"
        		   };
        console.log(req.body.title);
        console.log(module.insideNode[req.params.nodeIndex].content.title);
        module.insideNode[req.params.nodeIndex].content = test;
        
        //module.insideNode[req.params.nodeIndex].content.title = req.body.contentTitle; 


        //module.insideNode[req.params.nodeIndex].nodeIndex = 55;//req.params.nodeIndex;
        //console.log(module.insideNode[req.params.nodeIndex].content.title);

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
