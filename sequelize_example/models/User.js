module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  }, {});

  User.associate = (models) => {
    User.hasMany(models.Task, { as: 'userId' });
    User.belongsTo(models.Role, { as: 'roleId' });
  };

  return User;
};
