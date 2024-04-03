const loginRouter = require('express').Router();
const LoginController = require('../controllers/LoginController');
const { loginValidation } = require('../middlewares/LoginMiddleware');

loginRouter.post('/', loginValidation, LoginController.login);

module.exports = loginRouter;