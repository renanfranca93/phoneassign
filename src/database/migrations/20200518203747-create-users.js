module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: null,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: null,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: null,
      },
      provider: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: null,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: null,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('users');
  },
};
