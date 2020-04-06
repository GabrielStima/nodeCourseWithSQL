const express = require("express");
require("dotenv").config();
const { errors } = require("celebrate");
const bodyParse = require("body-parser");
const routes = require("./routes");

const app = express();

app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());
app.use(routes);
app.use(errors());

app.listen(3333);
