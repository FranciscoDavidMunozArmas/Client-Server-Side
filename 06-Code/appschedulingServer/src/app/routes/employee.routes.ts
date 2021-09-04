import { Router } from 'express';
import * as employeeController from '../controllers/employee.controller'
const router = Router();

router.route("/employee/:id")
.get(employeeController.getEmployee)
.post(employeeController.putEmployee)
.put(employeeController.putEmployee);

export default router;