var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var kittySchema = mongoose.Schema({
	//Attributes here
	name: String
});

module.exports = mongoose.model('kitten', kittySchema);