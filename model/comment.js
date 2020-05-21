const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    content:{
        type : String,
        requied : true
    },
    //include the user of comment
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    //iclude the post on which comment is made
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }
},{timestamps : true});

const Comment = mongoose.model('Comment',commentSchema);
module.exports = Comment;