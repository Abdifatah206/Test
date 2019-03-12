var express = require('express');
var router = express.Router();
var mysql = require('mysql');
//var bodyParser = require('body-Parser');
//var app = require('express');
//var db = require('../db');
//console.log('connected');


	var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'shopping'
});

connection.connect(connection, function (err) {
    
        if (err) console.log(err);
 router.get('/', function(req, res) {
	 //another format working
//               connection.query('select * from shopping_list', function (err, recordset) {
//            
//            if (err) console.log(err)
//
//             res.send(recordset);
//            
//       });
//    });
//});

// instructor format working
// connection.query("SELECT * FROM shopping_list", function (err, result, fields) {
//  if (err) console.log(err);
// console.log(result);
//		   res.send(result)
//  });
//});
//	});

// post form instructor format
// router.post('/', function(req, res, next) { 
//	  
// 	var sql = "INSERT INTO shopping_list  VALUES ('"+req.body.item+"',"+req.body.quantity+")"
//	 connection.query(sql, function(err) {
//		 if (err) throw err
//		 res.render('index')
//		 //console.log('inserted');
//	 });                      
//    
//	
//});
//	 });
//	});

 
router.post('/', function(req,res,next){

  var sql = "INSERT INTO shopping_list (Item, Quantity)"

    +"VALUES ( ?, ?, ?, ?, 3, 4.99, ?, 19.99, 'G');"

  var queryParams = [

    req.body.Item,

    req.body.Quantity,

    ];
  connection.query(sql, queryParams, (error, result, fields) => {

    if (error){

      res.status(500).send(error);

    }

    res.status(201).send('record added');

  });

});
});
//});


module.exports = router; 