var mongoose = require('mongoose');
var Task = mongoose.model('Task');

var tasks = require('../controllers/tasks.js')


module.exports = function(app){
	app.get('/', function (req, res){
		tasks.index(req,res);
	});
	app.get('/new/:task', function (req, res){
		tasks.create(req,res);
	})

	app.get('/remove/:task', function (req, res){
		tasks.delete(req,res);
	})
	
	app.get('/:task', function (req, res){
		tasks.show(req,res);
	})

}