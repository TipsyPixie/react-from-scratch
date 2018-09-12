import dotenv from 'dotenv';
import path from 'path';
import {Model} from 'objection';
import Knex from 'knex';

dotenv.config({
  path: path.resolve(__dirname, '..', '.env')
});

const env = process.env;

Model.knex(Knex({
    client: 'postgresql',
    connection: {
      host: env.DB_HOST,
      port: env.DB_PORT,
      user: env.DB_USERNAME,
      password: env.DB_PASSWORD,
      database: env.DB_DATABASE,
      charset: env.DB_CHARSET
    }
  })
);

class Gadget extends Model {
  static get tableName() {
    return 'gadgets';
  }
}

export {Gadget};
