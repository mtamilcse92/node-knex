var express = require('express');
var router = express.Router();
var database = require('./data/database');
var dbs = require('./data/db');
var knex = require('knex')(dbs.value);

router.post('/', function(req, res, next) {
    knex.insert({ user_name: 'test' }).into('users').then(function(value) {
        console.log("inserted");
        res.json(value);
    });
});

router.put('/update/:id', function(req, res, next) {
	var id = req.param('id');
	console.log(id);
    knex('users')
        .where('id', '=', id)
        .update({ user_name: 'test2' })
        .then(function(value) {
            console.log("update");
            res.json(value);
        });

});

router.get('/:id', function(req, res, next) {
	var id = req.param('id');
    knex.where('id', '=', id).select().table('users').then(function(value) {
            console.log("select");
            res.json(value);
        });
});

router.delete('/delete/:id', function(req, res, next) {
	var id = req.param('id');
    knex('users')
        .where('id', '=', id)
        .del().then(function(value) {
            console.log("delete");
            res.json(value);
        });
});
module.exports = router;
