import express from "express";
import { Request, Response } from "express";

const app = express();
app.use(express.json());

const port: number = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
