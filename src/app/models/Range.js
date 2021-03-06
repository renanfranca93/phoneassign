import Sequelize, { Model } from 'sequelize';

class Range extends Model {
  static init(sequelize) {
    super.init(
      {
        operator: Sequelize.INTEGER,
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

export default Range;
