const { BlogPost } = require('../../models');
const UserService = require('../UserService');
const attributesOptions = require('./attributesOptions');

const getAllPostsFromUser = async (email) => {
  const user = await UserService.getUserByEmail(email);
  const posts = await BlogPost.findAll({ where: { userId: user.id }, ...attributesOptions });
  return posts;
};

module.exports = getAllPostsFromUser;