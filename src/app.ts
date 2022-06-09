import express from "express";
import "reflect-metadata";
import { Request, Response } from "express";
import myConnectDB from "./connectdb";
import router from "./routes/router";
import dotenv from "dotenv";

dotenv.config();

const port = parseInt(process.env.PORT ?? "3000", 10);

myConnectDB
  .initialize()
  .then(() => {
    return console.log("Data Source has been initialized ");
  })
  .catch((err: Error) => {
    return console.error("Error during Data Source initialization", err);
  });

const app = express();
app.use(express.json());

app.use(router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
