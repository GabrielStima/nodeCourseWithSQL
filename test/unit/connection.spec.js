const Sequelize = require("sequelize");
const { connection } = require("../../src/database/connection");
const sequelize = connection(Sequelize);

describe('Connection', () => {
    it('should be return true', async () => {
        const response = await sequelize.authenticate().then(() => true).catch(()=> false);
        expect(response).toBeTruthy();
    })
})