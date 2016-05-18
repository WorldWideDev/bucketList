var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
	objective: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: new Date
	}
})

var Task = mongoose.model('Task', TaskSchema);
