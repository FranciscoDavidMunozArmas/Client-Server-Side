import { Router } from 'express';

import * as Controller from '../controller/serviceemploye.controller'


const router = Router();

router.route("/")
.get(Controller.getAll)
.post(Controller.post)
.delete(Controller.deleteAll);

router.route("/:serviceID/:employeeID")
.get(Controller.getByIDs)
.put(Controller.put)
.delete(Controller.deleteByIDs);

router.route("/service/:serviceID")
.get(Controller.getByServiceID)
.delete(Controller.deleteByServiceID);

router.route("/employee/:employeeID")
.get(Controller.getByEmployeeID)
.delete(Controller.deleteByEmployeeID);

export default router;