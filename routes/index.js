var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My First App',  incrdsd: incrdsd.toString() });
    incrdsd += 1;
    fs.appendFileSync('./mytext.txt', incrdsd.toString() + 'log ' +"\n",'utf8' );
});

module.exports = router;
