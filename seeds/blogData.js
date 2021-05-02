const { Blog } = require('../models');

const blogdata = [
  {
    title: 'Printemps',
    post_date: 'April 20, 2021 07:00:00',
    description: '',
    
  },
  {
    title: 'Sommer',
    post_date: 'June 22, 2021 09:00:00',
    description: '',
    
  },
  {
    title: 'Herfst',
    post_date: 'September 23, 2021 08:30:00',
    description: '',
    
  },
  {
    title: 'Invierno',
    post_date: 'December 22, 2020 11:00:00',
    description: '',
    
  },
];

const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;

