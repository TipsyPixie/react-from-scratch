import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '..', '.env')
});

const env = process.env;

const knex = require('knex')(
  {
    client: 'postgresql',
    connection: {
      host: env.DB_HOST,
      port: env.DB_PORT,
      user : env.DB_USERNAME,
      password : env.DB_PASSWORD,
      database : env.DB_DATABASE,
      charset: env.DB_CHARSET
    }
  }
);

const bookshelf = require('bookshelf')(knex);

const Gadget = bookshelf.Model.extend({
    tableName: 'gadgets'
});

export { Gadget };
