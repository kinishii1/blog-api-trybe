const createPost = require('./createPost');
const updatePost = require('./updatePost');
const deletePost = require('./deletePost');
const getPostById = require('./getPostById');
const getAllPostsFromUser = require('./getAllPostsFromUser');
const searchPosts = require('./searchPosts');

module.exports = {
  searchPosts,
  createPost,
  updatePost,
  deletePost,
  getPostById,
  getAllPostsFromUser,
};