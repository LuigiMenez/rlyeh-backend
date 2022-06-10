import { Request, Response } from "express";
import { Employee } from "../models/employee";
import myConnectDB from "../connectdb";

const employeeRepository = myConnectDB.getMongoRepository(Employee);

export const findEmployee = async (req: Request, res: Response) => {
  const employees = await employeeRepository.find();
  try {
    res.json(employees);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const findOneEmployee = async (req: Request, res: Response) => {
  const results = await employeeRepository.findOneBy(req.params.id);
  return res.send(results);
};

export const addEmployee = async (req: Request, res: Response) => {
  const newEmployee = new Employee();
  newEmployee.firstName = req.body.firstName;
  newEmployee.lastName = req.body.lastName;
  await employeeRepository.save(newEmployee);
  //   const employee = await myConnectDB
  //     .getMongoRepository(Employee)
  //     .insertOne(req.body);
  //   const results = await myConnectDB
  //     .getMongoRepository(Employee)
  //     .save(employee.ops[0]);
  return res.send(newEmployee);
};

export const updateEmployee = async (req: Request, res: Response) => {
  const employee: any = await employeeRepository.findOneBy(req.params.id);
  employeeRepository.merge(employee, req.body);
  const results = await employeeRepository.save(employee);
  return res.send(results);
};

export const deleteEmployee = async (req: Request, res: Response) => {
  const results = await employeeRepository.delete(req.params.id);
  return res.send(results);
};
