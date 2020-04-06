const Sequelize = require("sequelize");
const { connection } = require("../database/connection");
const sequelize = connection(Sequelize);
const postagens = require("./Postagens");

module.exports = {
  Postagens: postagens(sequelize, Sequelize.DataTypes),
};
