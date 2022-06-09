import express from "express";
import { addEmployee, findEmployee } from "../controllers/employeeControllers";

const router = express.Router();

router.get("/employee", findEmployee);
router.post("/employee", addEmployee);

export default router;
