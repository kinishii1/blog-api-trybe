const CategoryService = require('../CategoryService');
const { PostCategory, BlogPost } = require('../../models');
const UserService = require('../UserService');

const createPost = async (post) => {
  const { title, content, categoryIds, email } = post;
  const user = await UserService.getUserByEmail(email);
  const categoriesExists = await CategoryService.verifyExistingCategory(categoryIds);
  if (!categoriesExists) return { err: 400, message: 'one or more "categoryIds" not found' };
  const createdPost = await BlogPost.create({ title, content });
  await Promise.all(categoryIds
    .map((categoryId) => PostCategory.create({ postId: createdPost.id, categoryId })));
  return {
    id: createdPost.id,
    title,
    content,
    userId: user.id,
    updated: createdPost.updated,
    published: createdPost.published,
  };
};

module.exports = createPost;