import Sequelize from 'sequelize';
import User from '../app/models/User';
import Publisher from '../app/models/Publisher';
import Range from '../app/models/Range';
import databaseConfig from '../config/database';

const models = [User, Publisher, Range];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
