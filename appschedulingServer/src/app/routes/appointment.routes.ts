import { Router } from 'express';

import * as Controller from '../controller/appointment.controller'

const router = Router();

router.route("/")
.get(Controller.getAll)
.post(Controller.post)
.delete(Controller.deleteAll);

router.route("/:appointmentID")
.get(Controller.getByID)
.put(Controller.put)
.delete(Controller.deleteByID);

router.route("/user/:userID")
.get(Controller.getAllByUser)

export default router;