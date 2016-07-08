var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var moduleSchema = new Schema({
	
	moduleId: String,
	moduleName: String,
	//------------------------
	//	nodeIndex: Number,
	//	nodePrerequisite: { score: Number, moduleId: String, nodeIndex: Number },
	//	content: { title: String, body: String, links: String, quizId: String },
	//	type: String  -> quiz || learning (not applicable)
 	//------------------------
	insideNode: Schema.Types.Mixed,

});

module.exports = mongoose.model('module', moduleSchema);
