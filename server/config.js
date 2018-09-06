const env = process.env;

export default {
  database: {
    client: 'pg',
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE
  }
};
