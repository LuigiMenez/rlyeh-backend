import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

const myConnectDB = new DataSource({
  type: "mongodb",
  url: process.env.MONGODB,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  synchronize: true,
  logging: true,
  entities: ["src/models/*.*"],
});

export default myConnectDB;
