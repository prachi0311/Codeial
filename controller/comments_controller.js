const Comment = require('../model/comment');
const Post = require('../model/post');

module.exports.create = function(req,res){
    Post.findById(req.body.post,function(err,post){

        if(post){
            Comment.create({
                content : req.body.content,
                post : req.body.post,
                user : req.user._id
            },function(err,comment){
                if(err){
                    console.log('error creating comment on post');
                    return;
                }
                    post.comments.push(comment);
                    post.save();
                    return res.redirect('back');
            
            })
        }
    })
}