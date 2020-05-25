import Sequelize, { Model } from 'sequelize';

class Assignment extends Model {
  static init(sequelize) {
    super.init(
      {
        operator: Sequelize.INTEGER,
        publisher_id: Sequelize.INTEGER,
        start: Sequelize.INTEGER,
        end: Sequelize.INTEGER,
        active: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Assignment;
