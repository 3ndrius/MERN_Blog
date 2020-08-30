const express = require("express");
const postController = express.Router();
const Post = require("../models/post.model");
const { auth, isAdmin } = require("../middleware/authMiddleware");
/* Get all Posts */

postController.get("/", isAdmin, async (req, res, next) => {
  try {
    let usr = res.locals.user;
    let posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(400).json({ success: false, error: "Sth wrong" + err.message });
  }
});

/* Get Single Post */
postController.get("/:post_id", async (req, res, next) => {
  // --- archive
  // Post.findById(req.params.post_id, function (err, result) {
  //   if (err) {
  //     res.status(400).send({
  //       success: false,
  //       error: err.message,
  //     });
  //   }
  //   res.status(200).send({
  //     success: true,
  //     data: result,
  //   });
  // });
  try {
    let singlePost = await Post.findById(req.params.post_id);
    res.status(200).json({
      success: true,
      data: singlePost,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: "Sth worng" + err,
    });
  }
});

/* Add Single Post */
postController.post("/", auth, isAdmin, async (req, res, next) => {
  try {
    let newPost = {
      title: req.body.title,
      body: req.body.body,
      author: res.locals.user.email,
    };
    const post = new Post(newPost);
    const savedPost = await post.save();
    res.status(201).json({
      success: true,
      data: savedPost,
      message: "Post created successfully!",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: "" + err,
    });
  }
});

/* Edit Single Post */
postController.patch("/:post_id", auth, async (req, res, next) => {
  try {
    let fieldsToUpdate = req.body;
    let post = await Post.findByIdAndUpdate(
      req.params.post_id,
      {
        $set: fieldsToUpdate,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      success: true,
      data: post,
      message: "Post updated successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: "Sth" + err.message,
    });
  }
});

/* Delete Single Post */
postController.delete("/:post_id", auth, async (req, res, next) => {
  try {
    let result = await Post.findByIdAndDelete(req.params.post_id);
    res.status(200).json({
      success: true,
      result,
      message: "Post deleted successfully!",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: "Sth wrong" + error.message,
    });
  }
});

module.exports = postController;
