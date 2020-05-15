const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');
//const postsConstroller = require('../controller/posts_controller');

router.get('/',homeController.home);
router.use('/users',require('./users'));
router.use('/posts',require('./posts'));

module.exports = router;