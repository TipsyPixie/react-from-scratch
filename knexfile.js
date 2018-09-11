require('dotenv').config();
const env = process.env;

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: env.DB_HOST,
      port: env.DB_PORT,
      database: env.DB_DATABASE,
      user: env.DB_USERNAME,
      password: env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations_dev'
    }
  }

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     host: env.DB_HOST,
  //     database: env.DB_DATABASE,
  //     user: env.DB_USERNAME,
  //     password: env.DB_PASSWORD
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations_prod'
  //   }
  // }
};
