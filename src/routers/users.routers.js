const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/users.contoller');
const verifyToken = require('../moddlewares/verifyToken');

// get all users
router.route('/')
        .get(verifyToken,userControllers.getAllUsers)
  
// register 
router.route('/register')
        .post(userControllers.register)

// login
router.route('/login')
        .post(userControllers.login)
      
module.exports = router;