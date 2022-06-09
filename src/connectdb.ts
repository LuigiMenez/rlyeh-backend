import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Employee } from "./models/employee";

dotenv.config();

const myConnectDB = new DataSource({
  type: "mongodb",
  url: process.env.MONGODB,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  synchronize: true,
  logging: true,
  entities: [Employee],
});

export default myConnectDB;
