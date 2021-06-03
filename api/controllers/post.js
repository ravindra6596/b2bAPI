const mongoose = require('mongoose');
const Post = require('../models/post')
// add post
exports.create_Post = async (req, res) => {
     console.log('file data = '+req.file)
     const post = new Post({
          title: req.body.title,
          category: req.body.category,
          description: req.body.description,
	// imgURL is upload image
          imgURL: req.file.path,
	// whitePaperLink is upload file 
          whitePaperLink: req.file.path,
          publishDate: req.body.publishDate,
     });

     try {
          const addPost = await post.save()
          res.status(201).json({
               message: 'Post Added Succesfully.'
          })
     } catch (error) {
          console.log(error);
          res.status(500).json({
               message: error
          })

     }
}
// Select All Records
exports.read_all_post = async (req, res,) => {
     try {
          const posts = await Post.find()
          if (posts.length != 0) {
               res.status(200).json(posts);
          } else {
               res.status(404).json({
                    message: 'No entries found in table'
               });
          }
     } catch (error) {
          res.send('Error => ' + error)
     }

};
// Select post by id
exports.read_single_post = async (req, res,) => {
     const id = req.params.postId;
     try {
          const selectPost = await Post.findById(id)
          res.status(200).json(selectPost);
     } catch (error) {
          res.status(500).json({
               message: error
          });
     }
};
// update product
exports.update_post = async (req, res) => {
     const id = req.params.postId;

     try {
          const updatePost = await Post.findByIdAndUpdate(id, req.body, { new: true })
          res.status(200).json({
               message: "Post Updated Successfull",
               updatePost
          })
     } catch (error) {
          res.status(500).json({
               error
          })
     }
}
// Delete Post
exports.delete_post = async (req, res) => {
     const id = req.params.postId;
     try {
          const deletePost = await Post.findByIdAndRemove(id)
          res.status(200).json({
               message:"Post Deleted Successfull"
          })
     } catch (error) {
          res.status(500).json(error)
     }
}