var mongoose = require('mongoose');
var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.
});

mongoose.connect('mongodb://localhost/todo');

var Schema = mongoose.Schema;

var TodoSchema = new Schema ({
    text : String,
    done : Boolean
});

var newTask = mongoose.model('Todo',TodoSchema );

newTask.findOne({text:'gggju'}, function(err, data){
	console.dir(data);
})