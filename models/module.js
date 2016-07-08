var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var moduleSchema = new Schema({
	
	moduleId: String,
	moduleName: String,
	//------------------------
	//	nodeIndex: Number,
	//	nodePrerequisite: { score: Number, courseId: String, nodeIndex: Number },
	//	content: { title: String, body: String, links: String, quizId: String },
	//	type: String
	//------------------------
	insideNode: [Schema.Types.Mixed]
});

moduleSchema.path('moduleId')
	.get(function(value) {
		return value;
	})
	.set(function(value) {
		return value;
	});
	
module.exports = mongoose.model('module', moduleSchema);
