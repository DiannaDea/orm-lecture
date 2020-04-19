module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {});

  Task.associate = (models) => {
    Task.belongsTo(models.User, { as: 'user' });
  };

  return Task;
};
