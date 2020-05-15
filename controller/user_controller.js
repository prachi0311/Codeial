const User = require('../model/user')


module.exports.profile = function(req,res){
    console.log(req.body);
    return res.render('user_profile',{
        title : 'Profile',
    })
    
}

module.exports.signIn = function(req,res){
    
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_signin',{
        title: 'Signin',
    });
}

module.exports.signUp = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_signup',{
        title: 'Signup',
    });
}

//get Sign up data
module.exports.create = function(req,res){

    if(req.body.password != req.body.confirm_password){
        console.log('pass does not match')
        return res.redirect('back');
    }

    console.log(req.body);

    User.findOne({email : req.body.email}, function(err,user){

        if(err){

            console.log('error in finding user during sign up',err.name); 
            return;
}

        if(!user){
            User.create(req.body,function(err,user){
                if(err){console.log('error in creating user during sign up'); return}

                return res.redirect('/users/sign-in');
            });
        }

        else{
            console.log('user already exists');
            return res.redirect('back');
        }

    })
    


}

//get Sign in data
module.exports.createSession = function(req,res){
    return res.redirect('/');
}

module.exports.destroySession = function(req,res){
    req.logout();

    return res.redirect('/');
}

