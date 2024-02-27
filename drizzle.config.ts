import { defineConfig } from 'drizzle-kit'

const config = {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE_NAME,
};

const connectionString = `postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}?schema=public`

export default defineConfig({
 schema: "./src/db/schema.ts",
  driver: 'pg',
  dbCredentials: {
    connectionString: connectionString
  },
  verbose: true,
  strict: true,
})