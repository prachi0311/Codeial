const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../model/user');

//Authentication using passport
passport.use(new LocalStrategy({
    usernameField : 'email'
},

    function (email, password , done) {
        
        
        //finding user
        User.findOne({email : email},function (err,user) {
            
            if(err){
                console.log('error finding the user --> passport');
                return done(err);
            }

            if(!user || password != user.password){
                console.log('incorrect username/password');
                return done(null,false);
            }

            return done(null,user);
        })
    }
));

//Serialize user to tell which key to keep in cookie
passport.serializeUser(function(user,done){
    done(null,user.id);
});

//deserialize id to find user
passport.deserializeUser(function(id,done) {
    User.findById(id,function(err,user){
        if(err){
            console.log('error finding the user --> passport');
            return done(err);
        }
        return done(null,user);
    })
});

passport.checkAuthentication = function(req,res,next) {
    //if the user is signed in  , pass the req to next controller action
    if(req.isAuthenticated()){
        return next();
    }

    //if user not signed in
    return res.redirect('/users/sign-in');

}

passport.setAuthenticatedUser = function(req,res,next){

    //if user authenticated the store user info from req to local
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }

    next();
}



module.exports = passport;