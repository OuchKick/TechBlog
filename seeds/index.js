const sequelize = require('../config/connection');
const seedBlog = require('./blogData');
const seedUsers = require('./userData');
const seedInteractions = require('./interactionData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlog();

  await seedUsers();

  await seedInteractions();

  process.exit(0);
};

seedAll();