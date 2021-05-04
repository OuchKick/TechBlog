const { Interaction } = require('../models');

const interactiondata = [
    {
        comment_content: 'Yeah! A lot of fun',
        user_id: 1,
        blog_id: 1,
    },
    {
        comment_content: 'I struggle with Javascript sometimes',
        user_id: 2,
        blog_id: 1,
    },
];

const seedInteractions = () => Interaction.bulkCreate(interactiondata);

module.exports = seedInteractions;