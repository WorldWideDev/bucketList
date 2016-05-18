var mongoose = require('mongoose');
var Task = mongoose.model('Task');


module.exports = {
	index: function(req, res){
		console.log('in index')
		Task.find({}, function (err, tasks){
			console.log(req.params)
			res.json(tasks)
		}).sort('-updated')
	},
	create: function(req, res){
		console.log('sup')
		var task = new Task({
			objective: req.params.task
		})
		task.save(function (err){
			if(err){
				console.log('somethings amiss');
				res.json(err)
			}else{
				console.log('successfuly added a task');
				res.redirect('/')
			}
		})
	},
	delete: function(req, res){
		console.log(req.params)
		Task.remove({_id: req.params.id}, function (err, task){
			res.redirect('/')
		})
	},
	show: function(req,res){
		Task.find({task:req.params.task}, function (err,task){
			console.log(req.params)
			res.json(task)
		})
	}
}