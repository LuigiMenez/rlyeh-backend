import { DataSource } from "typeorm";

const myConnectDB = new DataSource({
  type: "mongodb",
  url: process.env.MONGODB,
  useNewUrlParser: true,
  synchronize: true,
  logging: true,
  entities: ["src/models/*.*"],
});

export default myConnectDB;
