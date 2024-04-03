const { BlogPost } = require('../../models');
const attributesOptions = require('./attributesOptions');

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, attributesOptions);
  if (!post) return { err: 404, message: 'Post does not exist' };
  return post;
};

module.exports = getPostById;