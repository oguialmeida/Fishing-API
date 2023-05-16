const Sequelize = require("sequelize");
const db = require("../config/connect");

const Person = db.define("person", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING(2),
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING(2),
    allowNull: false,
  },
  age: {
    type: Sequelize.NUMBER(3),
    allowNull: false,
  },
  modality: {
    type: Sequelize.STRING(9),
    allowNull: false,
  },
  fish_weight: {
    type: Sequelize.NUMBER(3),
  },
  fish_type: {
    type: Sequelize.STRING,
  },
});

module.exports = { Person };
