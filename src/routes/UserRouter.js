const userRouter = require('express').Router();
const UserController = require('../controllers/UserController');
const { validateUser } = require('../middlewares/UserMiddleware');
const TokenValidator = require('../middlewares/TokenValidator');

userRouter.post('/', validateUser, UserController.addUser);
userRouter.get('/', TokenValidator, UserController.getAllUsers);
userRouter.get('/:id', TokenValidator, UserController.getUserById);
userRouter.delete('/me', TokenValidator, UserController.deleteUser);

module.exports = userRouter;