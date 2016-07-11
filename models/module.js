var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Node = new Schema({
	nodeIndex: Number,
	nodePrerequisite: Object,
	content: Object
})

var moduleSchema = new Schema({
	
	moduleId: String,
	moduleName: String,
	//------------------------
	//	nodeIndex: Number,
	//	nodePrerequisite: { score: Number, moduleId: String, nodeIndex: Number },
	//	content: { title: String, body: String, links: String, quizId: String },
	//	type: String  -> quiz || learning (not applicable)
 	//------------------------
	insideNode: [Node],

});

module.exports = mongoose.model('module', moduleSchema);
