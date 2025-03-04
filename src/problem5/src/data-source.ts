import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

import { Customer } from "./models";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [Customer],
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
});