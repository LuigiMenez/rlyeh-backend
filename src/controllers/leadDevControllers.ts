import { Request, Response } from "express";
import { Employee } from "../models/employee";
import myConnectDB from "../connectdb";

const db = myConnectDB.getMongoRepository(Employee);

export const employeeSkills = async (req: Request, res: Response) => {
  try {
    const results = await db.findOneBy(req.params.id);
    return res.send(results?.skills);
  } catch (err) {
    res.status(500).send(err);
  }
};
