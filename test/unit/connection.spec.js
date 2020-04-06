const Sequelize = require("sequelize");
const { connection } = require("../../src/database/connection");

describe("Should return true", () => {
  let result;
  const sequelize = connection(Sequelize);

  console.log(
    "uma hora vai",
    sequelize
      .authenticate()
      .then(() => console.log("deu certo"))
      .catch(() => console.log("deu errado"))
  );

  expect(result).toBeTruthy();
});
