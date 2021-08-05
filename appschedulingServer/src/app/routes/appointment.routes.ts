import { Router } from 'express';

import * as Controller from '../controller/example.controller'
/**
 * Borran 
 *          import * as Controller from '../controller/example.controller';
 * Y colocar un 
 *          import * as Controller from '../controller/su_controlador.controller';
 */

const router = Router();

router.route("/")
.get(Controller.getAll)
.post(Controller.post)
.delete(Controller.deleteAll);

router.route("/:appointmentID")
.get(Controller.getByID)
.put(Controller.put)
.delete(Controller.deleteByID);

export default router;