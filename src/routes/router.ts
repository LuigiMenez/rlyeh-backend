import express from "express";
import {
  findEmployee,
  findOneEmployee,
  employeeAll,
} from "../controllers/employeeControllers";

import {
  addEmployee,
  deleteEmployee,
  updateEmployee,
} from "../controllers/rhControllers";

const router = express.Router();

// Router for RH
router.post("/employee", addEmployee);
router.delete("/employee/:id", deleteEmployee);

// Router for Lead Dev

router.get("/employee", employeeAll);
router.get("/employee/:firstName", findEmployee);
router.get("/employee/:id", findOneEmployee);
router.put("/employee/:id", updateEmployee);

export default router;
