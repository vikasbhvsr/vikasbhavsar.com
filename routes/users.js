var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', function(req, res, next) {
  var username = 'vikas';
  var password = 'bhavsar';
  // Check with DB to see if i'm valid user or not.
  // DB.find(username: req.body.username) 
  //   ==> {    
  //     id: 5dfsdf,
  //     username: vikas,
  //     password: bhavsar
  // }
  if(req.body.username == username && req.body.password == password) {
    res.send('Success you are now logged in');
  } else {
    res.status(400).send('Username/Password is incorrect');
  }
})

module.exports = router;
