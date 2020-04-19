const router = require('koa-joi-router');
const UserConstoller = require('../controllers/user');

const userRouter = router();

// const { Joi } = router;

userRouter.prefix('/api/users');

userRouter.route({
  method: 'get',
  path: '/',
  handler: UserConstoller.getAll,
});

module.exports = userRouter;
