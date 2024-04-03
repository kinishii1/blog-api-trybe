const { Category } = require('../models');

const addCategory = async (name) => {
  if (!name) return { err: 400, message: 'Invalid fields' };

  const category = await Category.create({ name });
  return category;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

const verifyExistingCategory = async (categoryIds) => {
  const existingCategories = await Category.findAll({
    where: {
      id: categoryIds,
    },
  });

  return existingCategories.length === categoryIds.length;
};

module.exports = {
  verifyExistingCategory,
  getAllCategories,
  addCategory,
};
