const { Postagens } = require("../models/index");

module.exports = {
  create: (request, response) => {
    const data = request.body;

    Postagens.create({
      titulo: data.titulo,
      conteudo: data.conteudo,
    })
      .then(() => {
        response.send("Cadastro feito");
      })
      .catch((err) => {
        response.send("Falha no cadastro", err);
      });
  },
  list: (request, response) => {
    Postagens.findAll()
      .then((posts) => {
        response.json(posts);
      })
      .catch((err) => {
        response.send("Falha na listagem", err);
      });
  },
  delete: (request, response) => {
    Postagens.destroy({ where: { id: request.params.id } })
      .then(() => {
        response.send("Deletado com sucesso");
      })
      .catch((err) => {
        response.send("Erro ao deletar", err);
      });
  },
};
