const router = require('express').Router();
// Connecting Home routes to the database
const { Blog, User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all Blogs for homepage
router.get('/', async (req, res) => {
  try {
    const dbBlogData = await Blog.findAll({
      // This is how we JOIN different models
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const blogs = dbBlogData.map((Blog) =>
      Blog.get({ plain: true })
    );

    res.render('homepage', {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one Blog
// Use the custom middleware before allowing the user to access the gallery
router.get('/blog/:id', withAuth, async (req, res) => {
  try {
    const dbBlogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: [
            'username',
          ],
        },
      ],
    });

    const blog = dbBlogData.get({ plain: true });
    res.render('blog', { blog, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one User
// Use the custom middleware before allowing the user to access the painting
router.get('/user/:id', withAuth, async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.params.id);

    const user = dbUserData.get({ plain: true });

    res.render('user', { user, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
