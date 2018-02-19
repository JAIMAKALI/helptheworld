var express = require('express');
var router = express.Router();
var passport=require('passport');

/* GET home page. */

router.get('/',(req,res)=>{
  res.render('home_page');
});




 module.exports = router;
