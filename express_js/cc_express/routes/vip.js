// cc_vip module
var express = require('express');
var router = express.Router();

console.log('enter vip .js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hi this is cc vip index page');
});

router.get('/info', function(req, res, next) {
    console.log(req.query);
    // console.log(req.params);
    res.send('Hi this is cc vip index page -- info');
});

router.get('/list', function(req, res, next) {
    res.send('Hi this is cc vip index page -- list');
});

module.exports = router;
