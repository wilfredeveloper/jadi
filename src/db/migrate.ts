import { Pool } from 'pg';
import { drizzle } from "drizzle-orm/node-postgres"
import { migrate } from "drizzle-orm/node-postgres/migrator"
import "dotenv/config";

const config = {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE_NAME,
};

const pool = new Pool({
    connectionString: `postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}?schema=public`
})
  

const db = drizzle(pool);


async function main() {
    console.log("Migrating database schema...")
    await migrate(db, {migrationsFolder: "drizzle"})
    console.log("Database schema migrated successfully")
    process.exit(0)
}

main().catch((e) => {
    console.error(e)
    process.exit(1)
})