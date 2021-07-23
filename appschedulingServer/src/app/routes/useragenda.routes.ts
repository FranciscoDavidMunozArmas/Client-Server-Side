import { Router } from 'express';
import * as Controller from '../controller/useragenda.controller';

const router = Router();

router.route("/agenda/:userID")
.get(Controller.getAgendaByUser);

router.route("/user/:agendaID")
.get(Controller.getUserByAgenda);

export default router;