const dbConfig = require('./config').database;

const knex = require('knex')(
  {
    client: dbConfig.client,
    connection: {
      host : `${dbConfig.host}:${dbConfig.port}`,
      user : dbConfig.username,
      password : dbConfig.password,
      database : dbConfig.database
    }
  }
);

export default require('bookshelf')(knex);
