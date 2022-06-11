import { Request, Response } from "express";
import { Employee } from "../models/employee";
import myConnectDB from "../connectdb";

const db = myConnectDB.getMongoRepository(Employee);

export const addEmployee = async (req: Request, res: Response) => {
  const newEmployee = new Employee();
  newEmployee.firstName = req.body.firstName;
  newEmployee.lastName = req.body.lastName;
  await db.save(newEmployee);
  return res.send(newEmployee);
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
