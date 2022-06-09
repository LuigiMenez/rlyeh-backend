import { Request, Response } from "express";
import { Employee } from "../models/employee";
import myConnectDB from "../connectdb";

export const findEmployee = async (req: Request, res: Response) => {
  const employees = await myConnectDB.getMongoRepository(Employee).find();
  try {
    res.json(employees);
  } catch (err: Error) {
    res.status(500).send(err);
  }
};

export const addEmployee = async (req: Request, res: Response) => {
  const employee: any = await myConnectDB
    .getMongoRepository(Employee)
    .insertOne(req.body);
  try {
    const results = await myConnectDB
      .getMongoRepository(Employee)
      .save(employee);
    return res.send(results);
  } catch (err) {
    res.status(500).send(err);
  }
};
