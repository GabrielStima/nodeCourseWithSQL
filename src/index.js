const express = require("express");
require("dotenv").config();
const { errors } = require("celebrate");
const routes = require("./routes");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
