import express from "express";
import {
  findOneEmployee,
  employeeAll,
  search,
} from "../controllers/commonControllers";

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
router.get("/:lastName", search);
// Router for RH
router.post("/employee", addEmployee);
router.delete("/employee/:id", deleteEmployee);
router.get("/techskills/:id", techSkillsByEmployee);

// Router for Lead Dev
router.get("/skills/:id", employeeSkills);

export default router;
