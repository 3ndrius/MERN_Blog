const express = require("express");
const postController = express.Router();
const Post = require("../models/post.model");
const { auth, isAdmin } = require("../middleware/authMiddleware");
/* Get all Posts */

postController.get("/", (req, res, next) => {
  // console.log(res.locals.user)
  Post.find({}, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message,
      });
    }
    res.status(200).send({
      success: true,
      data: result,
    });
  });
});

/* Get Single Post */
postController.get("/:post_id", (req, res, next) => {
  Post.findById(req.params.post_id, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message,
      });
    }
    res.status(200).send({
      success: true,
      data: result,
    });
  });
});

/* Add Single Post */
postController.post("/", auth, async (req, res, next) => {
  console.log(req.body);
  try {
    let newPost = {
      title: req.body.title,
      body: req.body.body,
      author: req.body.author,
    };
    const post = new Post(newPost);
    const savedPost = await post.save();
    res
      .status(201)
      .json({
        success: true,
        data: savedPost,
        message: "Post created successfully!",
      });
  } catch (err) {
    res.status(400).json({ success: false, error: "" + err });
  }
});

/* Edit Single Post */
postController.patch("/:post_id", auth, (req, res, next) => {
  let fieldsToUpdate = req.body;
  Post.findByIdAndUpdate(
    req.params.post_id,
    {
      $set: fieldsToUpdate,
    },
    {
      new: true,
    },
    function (err, result) {
      if (err) {
        res.status(400).send({
          success: false,
          error: err.message,
        });
      }
      res.status(200).send({
        success: true,
        data: result,
        message: "Post updated successfully",
      });
    }
  );
});

/* Delete Single Post */
postController.delete("/:post_id", auth, (req, res, next) => {
  Post.findByIdAndDelete(req.params.post_id, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message,
      });
    }
    res.status(200).send({
      success: true,
      data: result,
      message: "Post deleted successfully",
    });
  });
});

module.exports = postController;
