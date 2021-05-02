const sequelize = require('../config/connection');
const seedBlog = require('./blogData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlog();

  await seedUsers();

  process.exit(0);
};

seedAll();