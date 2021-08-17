import { Router } from "express";
import multerConfig from "../../config/multer.config";
import * as UserController from '../controllers/user.controller';
import * as AppointmentController from '../controllers/appointment.controller';

const router = Router();

router.route("/")
.get(UserController.getUsers)
.post(multerConfig.single('photo'),UserController.postUser)
.delete(UserController.deleteUsers);

router.route("/access")
.post(UserController.allowAccess);

router.route("/:id")
.get(UserController.getUser)
.put(UserController.putUser)
.delete(UserController.deleteUser);

router.route("/appointments/:userid")
.get(AppointmentController.getAppointments)
.post(AppointmentController.postAppointment)
.delete(AppointmentController.deleteAppointments);

router.route("/appointments/:userid/:appointmentid")
.get(AppointmentController.getAppointment)
.put(AppointmentController.putAppointments)
.delete(AppointmentController.deleteAppointment);

export default router;