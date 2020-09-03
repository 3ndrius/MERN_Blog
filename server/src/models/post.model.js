// Post.model.js
const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
    commentBody: { type: String },
    authorId: {type: String },
    postId: { type: String },
})

const Comment = mongoose.model('comment', commentSchema)

const postSchema = new mongoose.Schema({
   title: {
       type: String
   },
   body: {
       type: String
   },
   author: {
        type: mongoose.Schema.ObjectId, ref: 'User'
   },
   comments: [commentSchema]
});
const Post = mongoose.model("Post", postSchema)
module.exports = Post
