const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');

module.exports = router;

router.get('/',homeController.home);