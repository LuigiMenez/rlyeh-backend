import express from "express";
import "reflect-metadata";
import { Request, Response } from "express";
import { Employee } from "./models/employee";
import myConnectDB from "./connectdb";
import dotenv from "dotenv";

dotenv.config();

myConnectDB
  .initialize()
  .then(() => {
    return console.log("Data Source has been initialized ");
  })
  .catch((err) => {
    return console.error("Error during Data Source initialization", err);
  });

const app = express();
app.use(express.json());

const port = parseInt(process.env.PORT ?? "3000", 10);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.get("/employees", async function (req: Request, res: Response) {
  const employees = await myConnectDB.getMongoRepository(Employee).find();
  res.json(employees);
});

app.post("/employees", async function (req: Request, res: Response) {
  const employee: any = await myConnectDB
    .getMongoRepository(Employee)
    .insertOne(req.body);
  const results = await myConnectDB.getMongoRepository(Employee).save(employee);
  return res.send(results);
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
