const User = require('./User');
const Blog = require('./Blog');
const Interaction = require('./Interaction');


User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.hasMany(Interaction, {
  foreignKey: 'blogpost_id',
  onDelete: 'CASCADE'
});

User.hasMany(Interaction, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
    foreignKey: 'user_id',
});

Interaction.belongsTo(User, {
    foreignKey: 'user_id'
});

Interaction.belongsTo(Blog, {
    foreignKey: 'blogpost_id'
});

module.exports = { User, Blog, Interaction };