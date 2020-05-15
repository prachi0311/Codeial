const Post =  require('../model/post');

module.exports.home = function(req,res){

    //fetch all the posts and populate user for each post
    Post.find({}).populate('user').exec(function(err,posts){
        if(err){
            console.log('error getting posts to displayat home');
            return;
        }

        return res.render('home',{
            title:'HOME',
            posts : posts,
        });
    });
}