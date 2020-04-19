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
  getOne: async (ctx) => {
    const { id } = ctx.params;

    try {
      const user = await UserRepository.getUser({ id });

      return ctx.send(200, user);
    } catch (error) {
      return ctx.send(500, { error: error.message });
    }
  },
  create: async (ctx) => {
    const { firstName, lastName } = ctx.request.body;

    if (await UserRepository.getUser(ctx.request.body)) {
      return ctx.send(400, { error: `User with name ${lastName} ${firstName} already exists` });
    }

    const user = await UserRepository.createUser(ctx.request.body);

    if (!user) {
      return ctx.send(400, { error: 'Unable to create user with such params' });
    }

    return ctx.send(200, user);
  },
};

module.exports = UserController;
