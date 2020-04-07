## Node Course With SQL

### Resume

This project was made with the premise of adapting with the node so that I can become a fullstack.

###   Application

It is an API in **node.js** that creates, lists and deletes posts, using SQL Server as a database. And to store sensitive data like bank name and password, dotenv was used.

Route validations are performed using *celebrate* and unit tests and integration tests with *jest*. To use *jest* without affecting the original database, a database was created for testing and is triggered by running the test script, because in it I used *cross-env* to set a variable that changes the database.

### Project dependencies

 - celebrate: 12.0.1;
 - cross-env: 7.0.2; 
 - dotenv: 8.2.0; 
 - express: 4.17.1;
 - mysql2: 2.1.0;     
 - sequelize: 5.21.6;    
 - jest: 25.2.7;     
 - nodemon: 2.0.2;    
 - supertest: 4.0.2;