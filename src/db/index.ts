import { Client } from "pg"
import { createPool } from "@vercel/postgres"
import "dotenv/config"
import { drizzle } from "drizzle-orm/node-postgres";

import * as schema from "./schema"

const config = {
    user: process.env.VERCEL_POSTGRES_USER,
    password: process.env.VERCEL_POSTGRES_PASSWORD,
    host: process.env.VERCEL_POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.VERCEL_POSTGRES_DATABASE,
};

const connectionString = `postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}?schema=public`

// const client = new Client({
//     connectionString
// })
const client = createPool({
    connectionString
})

client.connect()

export const db = drizzle(client, {schema: schema})