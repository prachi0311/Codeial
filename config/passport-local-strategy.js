const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../model/user');

//Authentication using passport
passport.use(new LocalStrategy({
    usernameField : 'email',

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
}))

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
})

module.exports = passport;