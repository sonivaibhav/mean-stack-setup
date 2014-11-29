var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*module.exports = mongoose.model('Todo',{
    text : String,
    done : Boolean
});*/
var TodoSchema = new Schema ({
    text : String,
    done : Boolean
});

module.exports = mongoose.model('Todo',TodoSchema);