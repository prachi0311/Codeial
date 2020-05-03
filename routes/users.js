const express = require('express');

const router = express.Router();

const userController = require('../controller/user_controller');

router.get('/profile',userController.profile);
router.get('/posts',userController.posts);

module.exports = router;


