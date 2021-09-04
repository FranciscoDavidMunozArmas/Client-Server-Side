import { Router } from 'express';
import * as employeeController from '../controllers/employee.controller'
const router = Router();

router.route("/")
.get(employeeController.getEmployees)
.post(employeeController.postEmployee)
.delete(employeeController.deleteEmployees)


router.route("/:id")
.get(employeeController.getEmployee)
.put(employeeController.putEmployee)
.delete(employeeController.deleteEmployee);

export default router;