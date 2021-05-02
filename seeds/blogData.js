const { Blog } = require('../models');

const blogdata = [
  {
    title: 'CSS fun',
    post_date: 'April 20, 2021 07:00:00',
    blog_content: 'It is neat that there are so many different things that you can with css!',
    
  },
  {
    title: 'Javascript confusion',
    post_date: 'June 22, 2021 09:00:00',
    blog_content: 'can someone explain why localstorage works',
    
  },
];

const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;

