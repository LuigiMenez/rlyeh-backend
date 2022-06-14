import express from "express";
import { findOneEmployee, employeeAll } from "../controllers/commonControllers";

import { employeeSkills } from "../controllers/leadDevControllers";

import {
  addEmployee,
  deleteEmployee,
  techSkillsByEmployee,
} from "../controllers/rhControllers";

const router = express.Router();

// Router common
router.get("/employees", employeeAll);
router.get("/employee/:id", findOneEmployee);

// Router for RH
router.post("/employee", addEmployee);
router.delete("/employee/:id", deleteEmployee);
router.get("/employee/:id/techskills", techSkillsByEmployee);

// Router for Lead Dev
router.get("/employee/:id/skills", employeeSkills);

export default router;
