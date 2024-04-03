const { BlogPost } = require('../../models');
const UserService = require('../UserService');
const attributesOptions = require('./attributesOptions');

const updatePost = async (id, email, post) => {
  const { title, content } = post;
  const user = await UserService.getUserByEmail(email);
  const postToUpdate = await BlogPost.findByPk(id);
  if (postToUpdate.userId !== user.id) return { err: 401, message: 'Unauthorized user' };
  await postToUpdate.update({ title, content });
  const updatedPost = await BlogPost.findByPk(id, attributesOptions);
  return updatedPost;
};

module.exports = updatePost;