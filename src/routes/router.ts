import express from "express";
import {
  addEmployee,
  findEmployee,
  findOneEmployee,
  deleteEmployee,
  updateEmployee,
} from "../controllers/employeeControllers";

const router = express.Router();

router.get("/employee", findEmployee);
router.get("/employee/:id", findOneEmployee);
router.post("/employee", addEmployee);
router.put("/employee/:id", updateEmployee);
router.delete("/employee/:id", deleteEmployee);

export default router;
