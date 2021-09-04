import {Router} from 'express';
import * as serviceController from '../controllers/service.controller'

const router = Router();

router.route("/")
.get(serviceController.getServices)
.post(serviceController.postService)
.delete(serviceController.deleteServices);

router.route("/:id")
.get(serviceController.getService)
.put(serviceController.putService)
.delete(serviceController.deleteService);



export default router;