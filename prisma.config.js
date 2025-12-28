// prisma.config.js
import { defineConfig } from "prisma/config";
import "dotenv/config";

console.log("Loaded DATABASE_URL:", process.env.DATABASE_URL ? "YES (Found)" : "NO (Undefined)");

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL,
  },
});