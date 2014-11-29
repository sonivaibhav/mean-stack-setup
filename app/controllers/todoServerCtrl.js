var mongoose = require ('mongoose');
var todo = mongoose.model('Todo');
exports.create = function(req, res) {

    // create a todo, information comes from AJAX request from Angular
    todo.create({
        text : req.body.text,
        done : false
    }, function(err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        todo.find(function(err, todos) {
            if (err)
                res.send(err)
            res.json(todos);
        });
    });
}
/*
var mongoose = require ('mongoose')
    //errorHandler = require('./errors.server.controller');
var todo = mongoose.model('Todo');

exports.findByName = function (req,res){
    var x = req.params.todoname;
    console.dir('find by name param value: ' +x);
    todo.findOne({text:x}, function(err, data){
        if(err){
            //return res.status(400).send({
             //   message: errorHandler.getErrorMessage(err);
                console.dir(err);
            }
        console.dir(data);
        res.json(data);
    })
    */
/*todo.find = function (err, todos){
        if(err){
            res.send(err);
        }
        console.dir("length of todos is " +todos.length);
        res.json(data);
    }*//*

};
exports.hello = function (req,res){
        res.json('Hello');
};
exports.create = function(req, res) {

    // create a todo, information comes from AJAX request from Angular
    todo.create({
        text : req.body.text,
        done : false
    }, function(err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        todo.find(function(err, todos) {
            if (err)
                res.send(err)
            res.json(todos);
        });
    });
}
exports.delete = function(req, res) {
    todo.remove({
        _id : req.params.todo_id
    }, function(err, todo) {
        if (err){
            res.send(err);
        }

        // get and return all the todos after you create another
        todo.find(function(err, todos) {
            if (err)
                res.send(err)
            res.json(todos);
        });
    });
}
*/
