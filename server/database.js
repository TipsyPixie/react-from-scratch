const dbConfig = require('./config').database;

const knex = require('knex')(
  {
    client: dbConfig.client,
    connection: {
      host: dbConfig.host,
      port: dbConfig.port,
      user : dbConfig.username,
      password : dbConfig.password,
      database : dbConfig.database,
      charset: dbConfig.charset
    }
  }
);

const bookshelf = require('bookshelf')(knex);

const Gadget = bookshelf.Model.extend({
    tableName: 'gadgets'
});

export { Gadget };
