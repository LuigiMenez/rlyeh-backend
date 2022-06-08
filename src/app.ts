import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const port = parseInt(process.env.PORT ?? "3000", 10);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
