import { Router } from 'express';

import * as Controller from '../controller/appointmentservice.controller'

const router = Router();

router.route("/")
.get(Controller.getAll)
.post(Controller.post)
.delete(Controller.deleteAll);

router.route("/:appointmentID")
.get(Controller.getByIDs)
.put(Controller.put)
.delete(Controller.deleteByIDs);

export default router;