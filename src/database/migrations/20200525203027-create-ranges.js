module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ranges', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      operator: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      start: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      end: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('ranges');
  },
};
