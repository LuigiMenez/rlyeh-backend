import { Request, Response } from "express";
import myConnectDB from "../connectdb";
import { Employee } from "../models/employee";

const db = myConnectDB.getMongoRepository(Employee);

export const addEmployee = async (req: Request, res: Response) => {
  const addEmployee = await db.insertOne(req.body);
  const result = await db.save(addEmployee.ops[0]);
  return res.send(result);
};

export const deleteEmployee = async (req: Request, res: Response) => {
  const results = await db.delete(req.params.id);
  return res.send(results);
};

export const updateEmployee = async (req: Request, res: Response) => {
  const employee: any = await db.findOneBy(req.params.id);
  db.merge(employee, req.body);
  const results = await db.save(employee);
  return res.send(results);
};
