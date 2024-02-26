import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

// require('dotenv').config({ debug: true })
require('dotenv').config({ path: __dirname + '/../../.env' });

// Construct the connection string using environment variables
const config = {
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DATABASE_NAME,
};

const connectionString = `postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`;

const queryClient = postgres(connectionString);

export default queryClient;