const postRouter = require('express').Router();
const PostController = require('../controllers/PostController');
const tokenValidator = require('../middlewares/TokenValidator');
const { validatePost, validatePostWithoutCategory } = require('../middlewares/PostMiddleware');

postRouter.get('/search', tokenValidator, PostController.searchPosts);
postRouter.post('/', tokenValidator, validatePost, PostController.createPost);
postRouter.get('/', tokenValidator, PostController.getAllPostsFromUser);
postRouter.get('/:id', tokenValidator, PostController.getPostById);
postRouter.put('/:id', tokenValidator, validatePostWithoutCategory, PostController.updatePost);
postRouter.delete('/:id', tokenValidator, PostController.deletePost);

module.exports = postRouter;