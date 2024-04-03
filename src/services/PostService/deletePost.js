const { BlogPost, PostCategory } = require('../../models');
const UserService = require('../UserService');

const deletePost = async (id, email) => {
  const user = await UserService.getUserByEmail(email);
  const post = await BlogPost.findByPk(id);

  if (!post) return { err: 404, message: 'Post does not exist' };
  if (post.userId !== user.id) return { err: 401, message: 'Unauthorized user' };
  
  await PostCategory.destroy({ where: { postId: id } });
  await BlogPost.destroy({ where: { id } });
  return {};
};

module.exports = deletePost;