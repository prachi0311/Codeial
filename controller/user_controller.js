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
            })
        }

        else{
            console.log('user already exists');
            return res.redirect('back');
        }

    })
    


}

//get Sign in data
module.exports.createSession = function(req,res){
    User.findOne(req.body,function(err,user){
        console.log('error in finding user during sign in');

        //handle user found
        if(user){
            //user password does not match
            if(user.password != req.body.password){
                return res.redirect('back');
            }

            // create session
            res.cookie('user_id',user.id);
            return res.redirect('/users/profile');
        }
        else{
            //handle user not found
        }
    });
}

