const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    content : {
        type : String,
        require : true
    },
    //include the user of the post
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    //inlclude array of IDs of comments made on the post
    comments : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Comment'

        }
    ]
    
},{timestamps : true});

const Post = mongoose.model('Post',postSchema);

module.exports = Post;

