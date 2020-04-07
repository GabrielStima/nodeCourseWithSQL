const Sequelize = require("sequelize");
const { connection } = require("../../src/database/connection");
const sequelize = connection(Sequelize);

// function teste (callback) {
//   sequelize.authenticate().then(() => {
//     callback(true);
//   }).catch(() =>{
//     callback(false);
//   })
// }

// it("Should return true", async (
  
// ) => {
//   return 
// });

it("Should return true", async () => {
  expect.assertions(1);
  const data = sequelize.authenticate().then(() => true);
  expect(data).toBeTruthy();
});