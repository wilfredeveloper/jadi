import { Client } from "pg"
import "dotenv/config"
import { drizzle } from "drizzle-orm/node-postgres";

import * as schema from "./schema"

const config = {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE_NAME,
};

const connectionString = `postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}?schema=public`

const client = new Client({
    connectionString
})

client.connect()

export const db = drizzle(client, {schema: schema})