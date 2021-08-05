import { Router } from 'express';
import * as Controller from '../controller/user.controller';

const router = Router();

router.route("/")
.get(Controller.getAll)
.post(Controller.post)
.delete(Controller.deleteAll);

router.route("/:userID")
.get(Controller.getByID)
.put(Controller.put)
.delete(Controller.deleteByID);

router.route("/user/")
.post(Controller.postByCodePassword);

router.route("/name/:userName")
.get(Controller.getByName)
.delete(Controller.deleteByName);

export default router;