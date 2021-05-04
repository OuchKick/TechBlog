const router = require('express').Router();
const { User, Blog, Interaction } = require('../../models');

const withAuth = require('../../utils/auth');


router.post('/postcomment', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        comment_content: req.body.comment_content,
        user_id: req.session.user_id,
        blog_id: req.body.blog_id,
      });
  
      res.status(200).json(newComment);
      req.session.blog_id = req.body.blog_id;
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });



router.delete('/:id', withAuth, async (req, res) => {
    try {
      const blogData = await Blog.destroy({
        where: {
          id: req.params.id,
        },
      });

      if (!blogData) {
        res.status(404).json({ message: 'No blog post found with this id!' });
        return;
      }
  
      res.status(200).json(blogData);
    } catch (err) {
      console.log(err);  
      res.status(500).json(err);
    }
  });





module.exports = router;