const router = require('koa-joi-router');
const UserConstoller = require('../controllers/user');

const userRouter = router();

const { Joi } = router;

userRouter.prefix('/api/users');

userRouter.route({
  method: 'get',
  path: '/:id',
  validate: {
    params: {
      id: Joi.number().required(),
    },
  },
  handler: [UserConstoller.getOne],
});

userRouter.route({
  method: 'get',
  path: '/',
  handler: [UserConstoller.getAll],
});


userRouter.route({
  method: 'post',
  path: '/',
  validate: {
    type: 'json',
    body: {
      firstName: Joi.string().regex(/^[\w\d]{2,15}$/).required(),
      lastName: Joi.string().regex(/^[\w\d]{2,15}$/).required(),
      roleId: Joi.number().required(),
    },
  },
  handler: [UserConstoller.create],
});

userRouter.route({
  method: 'put',
  path: '/:id',
  validate: {
    type: 'json',
    params: {
      id: Joi.number().required(),
    },
    body: {
      firstName: Joi.string().regex(/^[\w\d]{2,15}$/).required(),
      lastName: Joi.string().regex(/^[\w\d]{2,15}$/).required(),
    },
  },
  handler: [UserConstoller.update],
});

userRouter.route({
  method: 'delete',
  path: '/:id',
  validate: {
    params: {
      id: Joi.number().required(),
    },
  },
  handler: [UserConstoller.delete],
});

module.exports = userRouter;
