import 'dotenv/config'
import type { Config } from 'drizzle-kit'

export default {
    // schema: './schema.ts',
    // out: "./drizzle",
    // password: process.env.PGPASSWORD,
    // host: "localhost",
    // port: 5432,
    // user: "postgres",
    // database: "postgres",
    connectionString: "postgres://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable"
} satisfies Config