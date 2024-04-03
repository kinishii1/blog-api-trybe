const { Op } = require('sequelize');
const { BlogPost } = require('../../models');
const attributesOptions = require('./attributesOptions');

const searchPosts = async (q) => {
  const posts = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${q}%` } },
        { content: { [Op.like]: `%${q}%` } },
      ],
    },
    ...attributesOptions });

  return posts;
};

module.exports = searchPosts;
