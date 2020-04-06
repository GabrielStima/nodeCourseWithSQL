const routes = require("express").Router();
const { celebrate, Segments, Joi } = require("celebrate");

const ControllerPosts = require("./controllers/ControllerPosts");

routes.get("/list", ControllerPosts.list);

routes.post(
  "/cad",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      titulo: Joi.string().required(),
      conteudo: Joi.string().required(),
    }),
  }),
  ControllerPosts.create
);

routes.delete(
  "/delete/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  ControllerPosts.delete
);

module.exports = routes;
