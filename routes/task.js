const router = require('koa-joi-router');
const TaskController = require('../controllers/task');

const taskRouter = router();

// const { Joi } = router;

taskRouter.prefix('/api/tasks');

taskRouter.route({
  method: 'get',
  path: '/',
  handler: TaskController.getAll,
});

module.exports = taskRouter;
