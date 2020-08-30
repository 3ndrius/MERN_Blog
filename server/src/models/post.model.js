// Post.model.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
   title: {
       type: String
   },
   body: {
       type: String
   },
   author: {
        type: mongoose.Schema.ObjectId, ref: 'User'
   }
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
