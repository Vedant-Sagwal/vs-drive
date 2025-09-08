import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { env } from "~/env";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const conn = new Pool({
  connectionString : process.env.POSTGRESS_URL,
});

export const db = drizzle(conn, {schema});