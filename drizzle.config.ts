import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  tablesFilter: ["vs-drive_*"],
  dbCredentials : {
    url:env.DATABASE_URL
  },
} satisfies Config;
