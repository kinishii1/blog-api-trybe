const PostService = require('../services/PostService');

const createPost = async (req, res) => {
  const { email } = req.user;
  try {
    const post = await PostService.createPost({ ...req.body, email });
    if (post.err) return res.status(post.err).json({ message: post.message });
    return res.status(201).json(post);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getAllPostsFromUser = async (req, res) => {
  const { email } = req.user;
  const posts = await PostService.getAllPostsFromUser(email);
  if (posts.err) return res.status(posts.err).json({ message: posts.message });
  return res.status(200).json(posts);
};  

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await PostService.getPostById(id);
  if (post.err) return res.status(post.err).json({ message: post.message });
  return res.status(200).json(post);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { email } = req.user;
  const post = await PostService.updatePost(id, email, req.body);
  if (post.err) return res.status(post.err).json({ message: post.message });
  return res.status(200).json(post);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { email } = req.user;
  const post = await PostService.deletePost(id, email);
  if (post.err) return res.status(post.err).json({ message: post.message });
  return res.status(204).end();
};

const searchPosts = async (req, res) => {
  const { q } = req.query;
  const posts = await PostService.searchPosts(q);

  if (posts.err) return res.status(posts.err).json({ message: posts.message });

  return res.status(200).json(posts);
};
module.exports = {
  searchPosts,
  deletePost,
  updatePost,
  getPostById,
  getAllPostsFromUser,
  createPost,
};
