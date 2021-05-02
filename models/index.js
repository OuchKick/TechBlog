const User = require('./User');
const Blog = require('./Blog');
const Interaction = require('./Interaction');

User.hasMany(Blog, {
  foreignKey: 'user_id',
});

User.hasMany(Interaction, {
  foreignKey: 'user_id',
});

Blog.hasMany(User, {
  foreignKey: 'user_id',
});

Blog.belongsTo(User, {
  foreignKey: 'user_id',
});

Interaction.belongsTo(User, {
  foreignKey: 'user_id'
});

Interaction.belongsTo(Blog, {
    foreignKey: 'blog_id'
});

module.exports = { User, Blog, Interaction };