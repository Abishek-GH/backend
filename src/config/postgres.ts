import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const sequelize = new Sequelize({
  database: process.env.PG_DATABASE as string,
  username: process.env.PG_USER as string,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  dialect: 'postgres',
  logging: false,
});

export const connectPostgres = async () => {
  try {
    await sequelize.authenticate();
    console.log('Postgres Connection Established...');
  } catch (error) {
    console.error(`Postgres Connection Failed, Error: ${error}`);
  }
};

// Other ways of Connecting to PG Database

// Option 1

// export const pgPool = new Pool({
//   host: process.env.PG_HOST,
//   port: Number(process.env.PG_PORT),
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   database: process.env.PG_DATABASE,
// });

// pgPool
//   .connect()
//   .then(() => console.log('PostgreSQL connected'))
//   .catch((err) => console.error('PostgreSQL connection error', err));

// Option 2

// const sequelize = new Sequelize(
//   `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`
// );
