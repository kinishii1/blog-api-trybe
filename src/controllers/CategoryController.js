const CategoryService = require('../services/CategoryService');

const addCategory = async (req, res) => {
  const { name } = req.body;
  const category = await CategoryService.addCategory(name);

  if (category.err) return res.status(category.err).json({ message: category.message });

  return res.status(201).json(category);
};

const getAllCategories = async (_req, res) => {
  const categories = await CategoryService.getAllCategories();

  return res.status(200).json(categories);
};

module.exports = {
  getAllCategories,
  addCategory,
};