var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var unitSchema = new Schema({	
	unitId: String,
	unitName: String,
	parentOf: [String]
});

module.exports = mongoose.model('unit', unitSchema);


