import { Request, Response } from "express";
import { Employee } from "../models/employee";
import myConnectDB from "../connectdb";

const db = myConnectDB.getMongoRepository(Employee);

export const findEmployee = async (req: Request, res: Response) => {
  try {
    const [employees] = await db.find({
      where: {
        firstName: { $eq: req.params.firstName },
      },
    });
    res.json(employees.lastName);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const employeeAll = async (req: Request, res: Response) => {
  try {
    const allEmployees = await db.find();
    res.json(allEmployees);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const findOneEmployee = async (req: Request, res: Response) => {
  const results = await db.findOneBy(req.params.id);
  return res.send(results);
};
