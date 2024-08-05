import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from "dotenv";
import * as schema from "../../../migrations/schema";
import { migrate } from "drizzle-orm/postgres-js/migrator";

dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  console.log("DATABASE_URL is not set in .env file");
}

const client = postgres(process.env.DATABASE_URL as string);

const db = drizzle(client, { schema: schema });

const migrateDb = async () => {
  try {
    console.log("Migrating database...");
    await migrate(db, { migrationsFolder: "migrations" });
    console.log("Database migration complete!");
  } catch (e) {
    console.log("Error migrating database...");
  }
};
migrateDb();

export default db;
