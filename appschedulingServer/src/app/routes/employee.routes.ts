import { Router } from 'express';
import * as Controller from '../controller/employee.controller';

const router = Router();

router.route("/")
.get(Controller.getAll)
.post(Controller.post)
.delete(Controller.deleteAll);

router.route("/:employeeID")
.get(Controller.getByID)
.put(Controller.put)
.delete(Controller.deleteByID);

export default router;