const Postagens = (sequelize, Sequelize) => {
  return sequelize.define("postagens", {
    titulo: {
      type: Sequelize.STRING,
    },
    conteudo: {
      type: Sequelize.TEXT,
    },
  });
};

module.exports = Postagens;
