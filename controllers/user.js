const UserRepository = require('../repositories/user');

const UserController = {
  getAll: async (ctx) => {
    try {
      const users = await UserRepository.getUsers();

      if (!users || !users.length) {
        return ctx.send(204, { error: 'No users found' });
      }

      return ctx.send(200, users);
    } catch (error) {
      return ctx.send(500, { error: error.message });
    }
  },
};

module.exports = UserController;
