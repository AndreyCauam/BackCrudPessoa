import { Knex } from 'knex';

const config: Knex.Config = {
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'pessoas'
  },
  migrations: {
    directory: './migrations'
  },
  seeds: {
    directory: './seeds'
  }
};

export default config;