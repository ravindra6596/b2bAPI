const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const pdfpath = require('path')
const checkAuth = require('../middleware/auth');
const PostController = require('../controllers/post');

const postImage = multer.diskStorage({
     destination: './images/',
     filename: (req, file, cb) => {
          return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
     }
});

const fileFilter = (req, file, cb) => {
     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
          cb(null, true)
     } else {
          cb(null, false)
     }
};

const imageUpload = multer({
     storage: postImage,
     limits: {
          fileSize: 1024 * 1024 * 5
     },
     fileFilter: fileFilter
});


const whitePaperLink = multer.diskStorage({
     destination: './whitePaper/',
     filename: (req, file, cb) => {
          return cb(null, `${file.fieldname}_${Date.now()}${pdfpath.extname(file.originalname)}`);
     }
});

const whitePaperFilter = (req, file, cb) => {
     if (file.mimetype === 'application/pdf') {
          cb(null, true)
     } else {
          cb(null, false)
     }
};

const whitePaperUpload = multer({
     storage: whitePaperLink,
     limits: {
          fileSize: 1024 * 1024 * 5
     },
     fileFilter: whitePaperFilter
});
// add post
router.post('/', checkAuth,  imageUpload.single('imgURL'),  whitePaperUpload.single('whitePaperLink'),PostController.create_Post)

// select all post
router.get('/', checkAuth, PostController.read_all_post)

// select post by id
router.get('/postId/:postId', checkAuth, PostController.read_single_post)


// update post
router.patch('/postId/:postId', checkAuth, PostController.update_post)

// delete post
router.delete('/postId/:postId', checkAuth, PostController.delete_post)


module.exports = router;