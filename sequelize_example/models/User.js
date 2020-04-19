module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  }, {});

  User.associate = (models) => {
    User.belongsTo(models.Role, { as: 'role' });
  };

  return User;
};
