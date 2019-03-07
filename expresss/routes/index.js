var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-Parser');
//var app = require('express');
var db = require('../db');

 router.get('/shop', function(req, res, next) { 
 var sql = "INSERT INTO shopping_list  VALUES (Null,'"+req.body.item+"',"+req.body.quantity+")";
db.query(sql, function(err) {
if (err) throw err
 res.render('index', { message: '1 record inserted'})
//console.log('inserted');
});
                      
    
});

	


module.exports = router; 