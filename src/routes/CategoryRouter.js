const categoryRouter = require('express').Router();

const CategoryController = require('../controllers/CategoryController');
const tokenValidator = require('../middlewares/TokenValidator');
const { validateCategory } = require('../middlewares/CategoryMiddleware');

categoryRouter.post('/', tokenValidator, validateCategory, CategoryController.addCategory);
categoryRouter.get('/', tokenValidator, CategoryController.getAllCategories);

module.exports = categoryRouter;