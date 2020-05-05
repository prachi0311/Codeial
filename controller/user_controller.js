module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title:'PROFILE',
    });
}

module.exports.posts = function(req,res){
    res.end('<h1>This is  a post on user wall<h1>')
}