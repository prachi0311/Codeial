const express = require('express');

const router = express.Router();
const passport = require('passport');

const userController = require('../controller/user_controller');

router.get('/profile',userController.profile);
router.get('/posts',userController.posts);
router.get('/sign-in',userController.signIn);
router.get('/sign-up',userController.signUp);

router.post('/create',userController.create);
router.post('/create-session',passport.authenticate('local',{failureRedirect:'/users/sign-in'}),userController.createSession);

module.exports = router;


