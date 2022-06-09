import { Request, Response } from "express";
import { Employee } from "../models/employee";
import myConnectDB from "../connectdb";

export const findEmployee = async (req: Request, res: Response) => {
  const employees = await myConnectDB.getMongoRepository(Employee).find();
  try {
    res.json(employees);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const findOneEmployee = async (req: Request, res: Response) => {
  const results = await myConnectDB
    .getMongoRepository(Employee)
    .findOneBy({ id: req.params._id });
  return res.send(results);
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

export const updateEmployee = async (req: Request, res: Response) => {
  const employee: any = await myConnectDB
    .getMongoRepository(Employee)
    .findOneBy({ id: req.params._id });
  myConnectDB.getMongoRepository(Employee).merge(employee, req.body);
  const results = await myConnectDB.getMongoRepository(Employee).save(employee);
  return res.send(results);
};

export const deleteEmployee = async (req: Request, res: Response) => {
  const results = await myConnectDB
    .getMongoRepository(Employee)
    .delete(req.params.id);
  return res.send(results);
};
