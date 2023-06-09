const Sequelize = require("sequelize");
const sequelize = require("../config/connect");

// Create a table in the database
const Person = sequelize.define("person", {
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

sequelize
  // Will only create the table if it doesn't already exist in the database
  .sync({ force: false })
  .then(() => console.log("Tabela people criado com sucesso!"))
  .catch((error) => console.log("Erro ao criar tabela person:", error));

module.exports = Person;
