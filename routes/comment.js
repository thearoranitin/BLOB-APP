const {Router} = require("express");
//const multer = require("multer");
const path = require('path');
const Comment = require('../models/comment');

const router = Router();


router.post('/comment/:blogId', async (req,res) =>{
   await Comment.create({
    content: req.body.content,
    blogId: req.params.blogId,
    createdBy: req.user._id,
    });
    return res.redirect(`/blog/${req.params.blogId}`);
});


module.exports = router;
