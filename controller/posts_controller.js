const Post = require('../model/post');

module.exports.create = function(req,res){
    console.log('user stored by passport',req.user);
    Post.create({
        content : req.body.content,
        user : req.user._id
    },function(err,post){
        if(err){
            console.log('error creating post');
            return;
        }

        
        return res.redirect('back');
    });
    
}