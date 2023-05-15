const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../data/datafish.db",
});

module.exports = sequelize;
