const User = require('../model/user')

module.exports.profile = function(req,res){

    if(req.cookies.user_id){

        User.findById(req.cookies.user_id , function(err,user){

            if(user){
                return res.render('user_profile',{
                    title: 'User Profile',
                    user : user,
                    
                })
            }
            else{
                console.log('user not found in profile');
                return res.redirect('/users/sign-in');
            }
        })

    }
    else{
        return res.redirect('/users/sign-in');
    }
    
}

module.exports.posts = function(req,res){
    res.end('<h1>This is  a post on user wall<h1>')
}

module.exports.signIn = function(req,res){
    console.log(req.cookies);
    return res.render('user_signin',{
        title: 'Signin',
    });
}

module.exports.signUp = function(req,res){
    return res.render('user_signup',{
        title: 'Signup',
    });
}

//get Sign up data
module.exports.create = function(req,res){
}

//get Sign in data
module.exports.createSession = function(req,res){
   
}