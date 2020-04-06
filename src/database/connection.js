const databaseSelect = () => {
  if (process.env.NODE_ENV === "test") {
    return process.env.NAME_DATABASE_TEST;
  } else {
    return process.env.NAME_DATABASE;
  }
};

module.exports = {
  connection: (SequelizeInstance) => {
    return new SequelizeInstance(
      databaseSelect(),
      process.env.USER_DATABASE,
      process.env.PASSWORD_DATABASE,
      {
        host: "localhost",
        dialect: "mysql",
      }
    );
  },
};
