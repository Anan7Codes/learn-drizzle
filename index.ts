import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const client = postgres({ ssl: 'require' })
const db: PostgresJsDatabase = drizzle(client)

const main = async () => {
    console.log("running..");
}

main()