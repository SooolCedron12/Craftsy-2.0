var express = require('express');
var router = express.Router();

const {login, register} = require('../controllers/usersController');



/* /user */
router.get('/login', login);
router.get('/register', register);

/* GET users listing. */
/* se saca apartir de fuction*/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
