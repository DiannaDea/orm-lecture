const userRouter = require('./user');
const taskRouter = require('./task');

module.exports = {
  routes: [
    userRouter.middleware(),
    taskRouter.middleware(),
  ],
};
