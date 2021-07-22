import { Router } from 'express';

import * as Controller from '../controller/appointmentservice.controller'

const router = Router();

router.route("/")
.get(Controller.getAll)
.post(Controller.post)
.delete(Controller.deleteAll);

router.route("/:serviceID/:appointmentID")
.get(Controller.getByIDs)
.put(Controller.put)
.delete(Controller.deleteByIDs);

router.route("/appointment/:appointmentID")
.get(Controller.getByAppointmentID)
.delete(Controller.deleteByAppointmentID);

router.route("/service/:serviceID")
.get(Controller.getByServiceID)
.delete(Controller.deleteByServiceID);

export default router;