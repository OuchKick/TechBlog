const { User } = require('../models');

const userdata = [
  {
    username: 'Xindu',
    email: 'xindu@me.com',
    password: 'password123123',
    
  },
  {
    username: 'Xaxu',
    email: 'xaxu@me.com',
    password: 'bigpineapples33',
    
  },
  {
    username: 'Xadco',
    email: 'xadco@me.com',
    password: 'cheeseFungus221',
    
  },
  {
    username: 'Xazi',
    email: 'xazi@me.com',
    password: 'OofthatWasaBadTuna2',
    
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
