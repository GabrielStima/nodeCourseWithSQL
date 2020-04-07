const { Postagens } = require("../models/index");

module.exports = {
  create: (request, response) => {
    const data = request.body;

    Postagens.create({
      titulo: data.titulo,
      conteudo: data.conteudo,
    })
      .then((res) => {
        response.json({
          id:res.dataValues.id
        });
      })
      .catch((err) => {
        response.json({error: err, menssage: "Falha no cadastro"});
      });
  },
  list: (request, response) => {
    Postagens.findAll()
      .then((posts) => {
        response.json(posts);
      })
      .catch((err) => {
        response.json({error: err, menssage: "Falha na listagem"});
      });
  },
  delete: (request, response) => {
    Postagens.destroy({ where: { id: request.params.id } })
      .then(() => {
        response.json({menssage: "Deletado com sucesso"});
      })
      .catch((err) => {
        response.json({error: err, menssage: "Erro ao deletar"});
      });
  },
};
