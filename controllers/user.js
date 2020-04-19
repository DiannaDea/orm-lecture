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

    try {
      if (await UserRepository.getUser(ctx.request.body)) {
        return ctx.send(400, { error: `User with name ${lastName} ${firstName} already exists` });
      }

      const user = await UserRepository.createUser(ctx.request.body);

      if (!user) {
        return ctx.send(400, { error: 'Unable to create user with such params' });
      }

      return ctx.send(200, user);
    } catch (error) {
      return ctx.send(500, { error: error.message });
    }
  },
  delete: async (ctx) => {
    const { id } = ctx.params;

    try {
      const isDeleted = await UserRepository.deleteUser(id);

      return (isDeleted)
        ? ctx.send(200, { isDeleted })
        : ctx.send(500, { error: `Unable to delete user with id: ${id}` });
    } catch (error) {
      return ctx.send(500, { error: error.message });
    }
  },
  update: async (ctx) => {
    const { id } = ctx.params;

    try {
      const isUpdated = await UserRepository.updateUser(id, ctx.request.body);

      return (isUpdated)
        ? ctx.send(200, { isUpdated })
        : ctx.send(500, { error: `Unable to update user with id: ${id}` });
    } catch (error) {
      return ctx.send(500, { error: error.message });
    }
  },
};

module.exports = UserController;
